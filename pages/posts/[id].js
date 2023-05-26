/*

The code is also here. Refer to it for a side compare:
https://www.tutorialspoint.com/nextjs/nextjs_dynamic_routes.htm

Here are the sequence of events.

The browser sends a request to the server.
The server sees that it is coming from "posts/one"

The "one" part is something that either:
1. something that the user made up and we handled in code
2. Or something that the developer routed you to from another page

The server pulls up the only matching file:
pages/posts/[id].js

In [id].js, we specify some server code to be run:
1. getStaticPaths
2. getStaticProps

getStaticPaths:
This must return an array of json elements, where each json element 
lists all dynamic urls that will be handled.

The server inspects getStaticPaths and determines which json element matches.
It then takes this match and passes it to the params parameter of getStaticProps.

getStaticProps:
With the matching params, we call our custom getPostData to return
the correct data based on that params. This data is returned as postData.

The postData object is then passed to the page component.
The page component then uses it to fill its HTML.
Remember all this is being done server side.
Finally the server returns the HTML back to the client.

*/



import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

import { getAllPostIds, getPostData } from '../../lib/posts'


export default function Post({ postData }) {
   return (
      <Container>
         {postData.id}
         <br />
         {postData.title}
         <br />
         {postData.date}
      </Container>
   )
}

export async function getStaticPaths() {
   const paths = getAllPostIds()
   return {
      paths,
      fallback: false
   }
}

export async function getStaticProps({ params }) {
   const postData = getPostData(params.id)
      return {
      props: {
         postData
      }
   }
}