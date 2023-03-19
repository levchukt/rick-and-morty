import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";


const SearchForm = (props) => {
    const handleSubmit = (value) => {
        // console.log(value);
        // your submission logic here
        props.onFilterChange(value)
    };
    const initialValues = {
        term: ''
    };

    const validationSchema = Yup.object({
        field: Yup.string().required('Required')
    })

    return <Formik initialValues={initialValues} validateOnBlur onSubmit={handleSubmit} validationSchema={validationSchema}>

            <Form className='form'>
            <Field className='input'
                placeholder='Filter by name...'
            type="text"
            name="term"
            onBlur={(e) => {
              e.persist();
                handleSubmit(e.target.value);
                }}
            />
            <ErrorMessage name={'term'} />
            </Form>
    </Formik>
}

export default SearchForm;