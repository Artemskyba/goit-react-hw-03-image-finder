import { Formik, Field, Form } from 'formik';

export const SearchForm = ({ onSubmit }) => (
  <>
    <Formik
      initialValues={{
        searchQuery: '',
      }}
      onSubmit={values => {
        onSubmit(values.searchQuery);
      }}
    >
      <Form>
        <button type="submit">
          <span>SUBMIT</span>
        </button>
        <Field id="searchQuery" name="searchQuery" placeholder="" />
      </Form>
    </Formik>
  </>
);
