import React, {useEffect} from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {TextField} from "formik-material-ui";
import {Button} from "@material-ui/core";
import * as Yup from "yup";
import {userAPI} from "../utils/api";

const RegisterSchema = Yup.object().shape({
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .email('Email is invalid')
        .required('Email is required')
});

export function RegisterForm({submit, title, err}) {

    const formikAction = async (values, setFieldError, setSubmitting) => {
        if (err) {
            setFieldError('email', err)
        }
        try {
            if (submit) {
                await submit(values)
            } else {
                const resp = await userAPI.signUp(values);
            }
        } catch (err) {
            const {message, data} = err.response.data;
            if (message.includes('duplicate error')) {

                data.forEach(field => setFieldError(field, 'Duplicated field'));
            }
        }
    }
    return (
        <Register handleSubmit={formikAction} title={title} err={err}/>
    )
}

const Register = ({initialValues, handleSubmit, title, err}) => {
    return (
        <Formik enableReinitialize
                initialValues={{
                    password: '',
                    email: '',
                }}
                onSubmit={(values, {setSubmitting, setFieldError}) => {
                    handleSubmit(values, setFieldError, setSubmitting);
                }}
                validationSchema={RegisterSchema}
        >
            {({errors, touched}) => (
                <Form>
                    <div className="mainForm">

                        <div>
                            <Field component={TextField} name="email" label="Enter you email" validate={err}/>
                            <ErrorMessage name={'email'} render={err}/>
                        </div>
                        <div className="mainForm_textField">
                            <Field component={TextField} name="password" label="Password"
                                   InputProps={{type: 'password'}}/>
                            {err ? <div>{err}</div> : null}
                        </div>
                    </div>
                    <div className='mainForm-button'>
                        <Button
                            type={"submit"}
                            variant="contained"
                            color="primary"
                        >
                            {title}
                        </Button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}
