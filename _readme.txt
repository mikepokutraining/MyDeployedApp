https://www.tutorialspoint.com/nextjs/nextjs_environment_variables.htm

Next.js, has support for publishing environment variables in node which we can use in connecting to server, database etc. For this, we need to create .env.local file in root directory. We can also create .env.production.

Create .env.local
Create .env.local in root directory with the following contents.

DB_HOST=localhost
DB_USER=tutorialspoint
DB_PASS=nextjs
Create env.js
Create a page named env.js with following contents in pages/posts directory where we'll use the environment variables using process.env.

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
