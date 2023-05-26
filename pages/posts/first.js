


import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

export default function FirstPost() {
    return(
    <>

        <Container>

        <Head>
            <title>Welcome to Next.js!</title>
         </Head>     
        <h1>My First Post</h1>
        <h2>
            <Link href="/">
                Home
            </Link>
        </h2>
        <br/>
        <img src="/knight_rider.jpg" alt="KITT" />

        </Container>


    </>) 
 }