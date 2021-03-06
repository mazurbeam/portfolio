import React from 'react'
import styled from 'styled-components'

import {Text, Flex, Box} from 'rebass';
const Button = styled.button`
  background: ${props => props.theme.colors.primary};
  border: none;
  //padding: 1em;
  display: inline-flex;
  align-items: center;
  border-radius: ${props => (props.big ? '2rem' : '1rem')};
  font-size: ${props => (props.big ? '1.5rem' : '1rem')};
  color: ${props => props.theme.colors.white};
  padding: ${props => (props.big ? '0.7rem 2rem' : '0.35rem 1.65rem')};
  transition: all ${props => props.theme.transitions.normal};
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  &:hover {
    background: ${props => props.theme.colors.primaryLight};
    cursor: pointer;
    //transform: translateY(-2px);
  }
  &:focus {
    outline: none;
  }
  svg {
    width: 20px;
    height: 20px;
    margin-right: 0.75rem;
    fill: ${props => props.theme.colors.white};
  }
`

const FormWrapper = styled.div`
  padding: 2rem 4rem;
  // background-color: ${props => props.theme.colors.bg};
  color: ${props => props.theme.colors.primaryColor};
  display: block;
  form {
      font-size: 1.68rem;

    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
        margin-top: 0.5rem;
      }
      textarea {
        //resize: vertical;
        min-height: 150px;
        width: 100%;
        margin-top: 0.5rem;
      }
    }
    label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.grey.dark};
  }
  label {
    margin-bottom: .5rem;
    color: ${props => props.theme.colors.primary};
  }
  input, textarea, button {
    font-size: 1rem;
  }
  textarea {
    font-family: ${props => props.theme.fontFamily.sansSerif};
  }
  input, textarea {
    border-radius: .5rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .4rem 1rem;
    &:focus {
      outline: none;
    }
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  img {
    vertical-align: middle;
  }
  [role='button'] {
    cursor: pointer;
  }
  a,
  area,
  button,
  [role='button'],
  input,
  label,
  select,
  summary,
  textarea {
    touch-action: manipulation;
  }
  }
`

const SubTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Ralewayt");
  top: 4em;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 2em;
  font-family: 'Raleway' sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  //overflow: hidden;
  white-space: nowrap;
`;

const ContactForm = () => (
  <Box bg='bg'>
  <FormWrapper>
    <SubTitle>Contact</SubTitle>
    <Flex flexDirection='column' alignItems='center' justifyContent='center'>
    <p>Got something you'd like to talk about?</p>
      <p >Let me know!</p>
    </Flex>
    <Flex flexDirection='column' a justifyContent='center'>

    <form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
      <p>
        <label htmlFor="contact-name">
          Name
          <input name="name" id="contact-name" type="text" required />
        </label>
      </p>
      <p>
        <label htmlFor="contact-email">
          E-Mail <input name="email" id="contact-email" type="email" required />
        </label>
      </p>
      <p>
        <label htmlFor="contact-message">
          Your Message <textarea name="message" id="contact-message" required />
        </label>
      </p>
      <Flex justifyContent='center'>
        <Button big >Send</Button>
      </Flex>
      <input type="hidden" name="form-name" value="contact-form" />
    </form>
    </Flex>
  </FormWrapper>
  </Box>
)

export default ContactForm