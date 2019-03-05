import React from 'react'
import Helmet from 'react-helmet'

import {Box, Flex } from 'rebass';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import ContactForm from '~/components/Common/Form/ContactForm';
import Layout from '~/components/layout';


const Contact = (props) => (
  <Layout {...props}>
    <SimpleWrapper >

    <Helmet>
      <title>Success Page</title>
      <meta name="description" content="Success Page" />
    </Helmet>


    {/*<span className="image main"><img src={pic11} alt="" /></span>*/}
      <Flex p={4} bg='bg' flexDirection='column'  justifyContent='center'>

      <Box bg='bg' height={1} m={4} p={4}>
        <ContactForm/>
      </Box>
      </Flex>

    </SimpleWrapper>

  </Layout>
)

export default Contact