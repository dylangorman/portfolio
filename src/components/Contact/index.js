import React from "react";
import "../../App.css";
import { useForm, ValidationError } from "@formspree/react";
import {
  Container,
  FormContent,
  FormInput,
  FormWrap,
  Form,
  Icon,
  FormH1,
  FormLabel,
  FormButton,
  FormArea,
} from "./ContactElememts";

const Contact = () => {
  const [state, handleSubmit] = useForm("xgedygao");
  if (state.succeeded) {
    return (
      <div className="email-response">
        <p>
          Thankyou for getting in touch! <br></br>I will get back to you as
          quickly<br></br> as possible
        </p>
        <Icon to="/"> Back To Site..</Icon>
      </div>
    );
  }

  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/"> Home</Icon>
          <FormContent>
            <Form onSubmit={handleSubmit}>
              <FormH1>Please Contact Me Via the Form!</FormH1>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput type="text" id="name" name="name" />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
              <FormLabel htmlFor="company">Company</FormLabel>
              <FormInput type="text" id="company" name="company" />
              <ValidationError
                prefix="Company"
                field="company"
                errors={state.errors}
              />
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormInput type="email" id="email" name="email" />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
              <FormLabel htmlFor="phone">Phone Number</FormLabel>
              <FormInput type="text" id="phone" name="phone" />
              <ValidationError
                prefix="Phone"
                field="phone"
                errors={state.errors}
              />
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormArea type="text" id="message" name="message" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              <FormButton type="submit" disabled={state.submitting}>
                Submit
              </FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default Contact;
