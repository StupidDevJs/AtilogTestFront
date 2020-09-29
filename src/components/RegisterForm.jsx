import React from "react";
import {Field, Form, Formik} from "formik";
import {Checkbox, TextField} from "formik-material-ui";
import {Button, Typography} from "@material-ui/core";
import {withRouter} from "react-router";
import {ProductEditForm} from "./MainForm";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .email('Email is invalid')
        .required('Email is required')
});
export const RegisterForm = () => {

    const formikAction = async (values, setFieldError, setSubmitting) => {
        try {
            setSubmitting(true)

        } catch(err) {
            const { message, data } = err.response.data;

            if (message.includes('duplicate error')) {
                data.forEach(field => setFieldError(field, 'Duplicated field'));
            }
        }
    }
    return (
        <Register handleSubmit={formikAction}/>
    )
};

const Register = ({initialValues, handleSubmit}) => {
    return (
        <Formik enableReinitialize
                initialValues={initialValues}
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    handleSubmit(values, setFieldError, setSubmitting);
                }}
                validationSchema={RegisterSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <div className="mainForm">
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
                        <Typography component="span"> Is Available?</Typography>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export const ProductForm = withRouter(ProductEditForm)