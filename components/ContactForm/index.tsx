import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '100%',
            background: 'white'
        },
    },
    input: {
        color: 'white',
    },
    button: {
        margin: theme.spacing(1),
    },
}));

const validationSchema = Yup.object({
    email: Yup
        .string()
        .email('Invalid email type!')
        .required('Required'),
    theme: Yup
        .string()
        .max(30, 'Must be 30 characters or less!')
        .required('Required'),
    question: Yup
        .string()
        .max(200, 'Must be 200 characters or less!')
        .required('Required')
});

export default function ContactForm() {

    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            email: '',
            theme: '',
            question: ''
        },
        validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }
    });

    return (
        <StyledContactForm
            onSubmit={formik.handleSubmit}
            className={classes.root}
        >
            <FormHeader>Enter your data</FormHeader>
            <TextField
                fullWidth
                type="email"
                id='email'
                name='email'
                placeholder='Email'
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && formik.errors.email}
                helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
                fullWidth
                type="text"
                id='theme'
                name='theme'
                placeholder='Theme'
                value={formik.values.theme}
                onChange={formik.handleChange}
                error={formik.touched.theme && formik.errors.theme}
                helperText={formik.touched.theme && formik.errors.theme}
            />
            <TextField
                fullWidth
                multiline
                rows={10}
                id='question'
                name='question'
                placeholder='Question'
                variant='outlined'
                value={formik.values.question}
                onChange={formik.handleChange}
                error={formik.touched.question && formik.errors.question}
                helperText={formik.touched.question && formik.errors.question}
            />
            <Button
                type='submit'
                color="primary"
                variant="contained"
            >Send</Button>
        </StyledContactForm>
    )
}

const StyledContactForm = styled.form.attrs(props => ({
}))`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    background-color: white;
    box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const FormHeader = styled.h1`
    width: 100%;
    justify-self: flex-start;
`;