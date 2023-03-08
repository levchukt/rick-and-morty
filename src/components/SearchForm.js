import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";


const SearchForm = (props) => {
    const handleSubmit = (values) => {
        console.log(values);
        // your submission logic here
    };
    const initialValues = {
        field: ''
    };

    const validationSchema = Yup.object({
        field: Yup.string().required('Required')
    })

    return <Formik initialValues={initialValues} validateOnBlur onSubmit={handleSubmit} validationSchema={validationSchema}>

            <Form>
                <Field
            type="text"
            name="field"
            onBlur={(e) => {
              e.persist();
              handleSubmit(e.target.value);
            }}
            />
            <ErrorMessage name={'field'} />
            </Form>
    </Formik>
}

export default SearchForm;