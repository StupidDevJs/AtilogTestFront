import React, {useEffect, useState} from 'react';
import {Formik, Form, Field} from 'formik';
import {withRouter} from "react-router";
import {productsAPI} from "../../utils/api";
import {Box, Button, Typography} from "@material-ui/core";
import './MainForm.scss';
import {TextField, Checkbox} from 'formik-material-ui';
import * as Yup from 'yup';

const ProductSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    price: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    description: Yup.string()
        .min(1, 'Invalid email')
        .max(50, 'Too Long!')
        .required('Required'),
});
export const ProductEditForm = (props) => {
    const [product, setProduct] = useState('')
    const {id} = props.match.params;
    const {name, price, isAvailable,  description} = product;
    const initialValues = {
        name: name ? name : '',
        price: price ? price : '',
        isAvailable: isAvailable ? isAvailable : false,
        description: description ? description : ''
    }
    const addProduct = (value) => {
        if (!id) {
            return productsAPI.addProduct(value)
        }
    }
    const editProduct = ({name, price, isAvailable, description}) => {
        if (id) {
            return productsAPI.editProduct(name, price, isAvailable, description);
        }
    }
    const formikAction = async (values, setFieldError, setSubmitting) => {
        try {
            setSubmitting(false)
            const onSubmitFunc = id ? editProduct : addProduct
            await onSubmitFunc(values);
        } catch(err) {
            const { message, data } = err.response.data;

            if (message.includes('duplicate error')) {
                data.forEach(field => setFieldError(field, 'Duplicated field'));
            }
        }
    }
    useEffect(() => {
        if (id) {
            productsAPI.getProductByID(id).then(({data}) => setProduct(data))
        }
    }, [product]);

    return (
        <div className="mainForm">
            <MyForm initialValues={initialValues} handleSubmit={formikAction}/>
        </div>
    )
}

const MyForm = ({initialValues, handleSubmit}) => {
    return (
        <Formik enableReinitialize
                initialValues={initialValues}
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    handleSubmit(values, setFieldError, setSubmitting);
                }}
                validationSchema={ProductSchema}
        >
            {({errors, touched}) => (
                <Form className="mainForm">
                    <div >
                        <div className="mainForm_textField">
                            <Field component={TextField} name="name" label="Name"/>
                        </div>
                        <div>
                            <Field component={TextField} name="price" label="Price"/>
                        </div>
                        <div>
                            <Field
                                component={TextField}
                                multiline
                                name="description"
                                variant="outlined"
                                label="description"
                            />
                        </div>
                    </div>
                    <div>

                        <div className="mainForm_button">
                            <Button
                                type={"submit"}
                                variant="contained"
                                color="primary"
                            >
                                Send
                            </Button>
                            <Field
                                type="checkbox"
                                component={Checkbox}
                                name="isAvailable"
                                label="isAvailable"
                            />
                        </div>
                        <Typography component="span"> Is Available?</Typography>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export const ProductForm = withRouter(ProductEditForm)