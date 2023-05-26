/*

When we write such things as the following:
         host: process.env.DB_HOST,
         username: process.env.DB_USER,
         password: process.env.DB_PASS
We are referring to the .env.local root drive (there can also be a .env.production)

The server will retrieve the db host, user and pw info from the .env file.
The server then passes it to the page component as a parameter (hence the props)/

Here the server is passing this data back to client.
In practice this sensitive info probalby shouldn't be passed back to client.


*/

import Head from 'next/head'
import Container from '../../components/container'

export default function FirstPost(props) {
   return (
      <>
         <Container>
            <Head>
               <title>Environment Variables</title>
            </Head>
            <h1>Database Credentials</h1>
               <p>Host: {props.host}</p>
               <p>Username: {props.username}</p>
               <p>Password: {props.password}</p>
         </Container>
      </>	  
   )
}

export async function getStaticProps() {
   // Connect to Database using DB properties
   return {
      props: { 
         host: process.env.DB_HOST,
         username: process.env.DB_USER,
         password: process.env.DB_PASS
      }
   }
}