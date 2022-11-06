import React from 'react'
import { Helmet } from 'react-helmet-async'

const Contact = () => {
  return (
   <>
   <Helmet>
      <title>ContactUs</title>
      <meta name="description" content="You can reach out to us here" />     
      <link rel="canonical" href="/contact"/>
    </Helmet>

   <div>CONTACT</div>
   </>
  )
}

export default Contact