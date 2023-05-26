/*



*/


import Link from 'next/link'
import Head from 'next/head'
import Container from '../components/container'

import { useRouter } from 'next/router';
import { useEffect } from 'react';

function HomePage() {
    
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url) => {
          // Perform client-side logic based on the new URL
          console.log('Navigated to:', url);
          // ... Your logic here ...
        };
    
        // Subscribe to the router's route change event
        router.events.on('routeChangeComplete', handleRouteChange);
    
        // Clean up the event listener when the component is unmounted
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange);
        };
      }, []);    

    const handleClick = () => {
        router.push('/?my_foo_value=12', undefined, { shallow: true });
      };    

    return (    
    <>
    <Container>
        <Head>
            <title>Welcome to Next.js!</title>
         </Head>    

        <div>Server Side Rendering</div>

        <button onClick={handleClick}>Go to Other Page</button>
    </Container>
    </>)
 }

 export default HomePage