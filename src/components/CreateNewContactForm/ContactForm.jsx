import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { StyledNewContactForm } from './Styled';
import { ReactComponent as PersonSvg } from 'icons/person.svg';

const initialValues = {
  name: '',
  number: '',
};

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  number: yup.number().required(),
});

export const ContactForm = ({ handleAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    handleAddContact(values);
    resetForm();
  };

  return (
    <StyledNewContactForm>
      <div>
        <div className="hero">
          <PersonSvg />
        </div>
        <div className="title-box">Add new contact</div>

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          <Form action="submit" className="form-box">
            <label htmlFor="">
              <p className="input-title">Name</p>
              <Field
                className="input"
                type="text"
                name="name"
                placeholder="Bob Pummer"
              />
              <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
            </label>
            <label htmlFor="">
              <p className="input-title">Number</p>
              <Field
                className="input"
                type="tel"
                name="number"
                placeholder="06844673287"
              />
              <ErrorMessage name="number" render={msg => <div>{msg}</div>} />
            </label>
            <button className="button-add-contact" type="submit">
              Save
            </button>
          </Form>
        </Formik>
      </div>
    </StyledNewContactForm>
  );
};
