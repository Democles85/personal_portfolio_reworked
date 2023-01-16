import {
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input
} from '@chakra-ui/react'
import { Formik, Form, Field } from 'formik'
import React from 'react'

const Contact = () => {
  const handleValidation = (e: React.FormEvent<HTMLFormElement>) => {}

  const validateName = (value: string) => {
    let error
    if (!value) {
      error = 'Name is required'
    }
    return error
  }

  return (
    <>
      <Heading
        as={'h3'}
        variant={'section-title'}
        fontFamily={"'Reem Kufi Ink', sans-serif"}
      >
        Contact
      </Heading>

      <Container maxW={'container.lg'}>
        <Formik
          initialValues={{ name: '' }}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {props => (
            <Form>
              <Field name={'name'} validate={validateName}>
                {({ field, form }: any) => (
                  <FormControl
                    isInvalid={form.errors.name && form.touched.name}
                  >
                    <FormLabel htmlFor={'name'}>Name</FormLabel>
                    <Input {...field} placeholder={'Name'} />
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  )
}

export default Contact
