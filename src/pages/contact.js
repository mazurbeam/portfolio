import React, {Fragment} from 'react'
import Helmet from 'react-helmet'

import styled from 'styled-components'
import {Box, Flex, Heading} from 'rebass';
// import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import Footer from '~/components/Footer'
import ContactForm from '~/components/Common/Form/ContactForm';
import Layout from '~/components/layout';

const SubTitle = styled.h2`
  @import url("https://fonts.googleapis.com/css?family=Ralewayt");
  position: absolute;
  top: 4em;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 58px;
  font-size: 5vw;
  font-family: 'Raleway' sans-serif;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

// const  = styled.div`
//
// `

const Contact = (props) => (
  <Layout {...props}>
    <SimpleWrapper >

    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>


    {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
      <Flex p={4} bg='bg' flexDirection='column' alignItems='center' justifyContent='center'>

      <Box bg='bg' height={1} m={5} p={5}>
        <ContactForm/>
      </Box>
      </Flex>

    </SimpleWrapper>

  </Layout>
)

export default Contact