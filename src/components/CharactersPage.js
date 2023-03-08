import logo from '../img/logo.png'
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from "formik";


const CharactersPage = (props) => {
    return (
        <div>
            <img src={logo} alt='Logo' />
            <div>
                <LoginForm/>
            </div>
            {props.characters.map(character => {
                    return <div>{character.name}</div>
                })}
        </div>
    )
}



const LoginForm = ({ onSubmit }) => {
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
            onChange={(e) => {
              e.persist();
              handleSubmit(e.target.value);
            }}
            onBlur={(e) => {
              e.persist();
              handleSubmit(e.target.value);
            }}
          />
            </Form>
    </Formik>
}

export default CharactersPage