import React, {Fragment} from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';

import styled, {ThemeProvider} from 'styled-components'
import {Box, Flex, Heading, Text, Button} from 'rebass';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import theme from '~/theme'

const FormWrapper = styled.div`
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  color: 
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
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
        resize: vertical;
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
    color: ${props => props.theme.colors.grey.dark};
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
    overflow: auto;
  }
  figure {
    margin: 0 0 1rem 0;
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

const Success = (props) => (
  <ThemeProvider theme={theme}>

    <SimpleWrapper >

    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>
    <Flex mt='40vh' justifyContent='center' alignItems='center' flexDirection='column' flexWrap='wrap'>
      <header className="major">
        <Heading>Success!</Heading>
      </header>

          {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
          <FormWrapper>
          <Text>Thanks for contacting me!</Text>
            <Button m={3} p={3}> <Link to='/'>Back to home</Link></Button>
          </FormWrapper>
    </Flex>
    </SimpleWrapper>
  </ThemeProvider>
)

export default Success