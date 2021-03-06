import '../styles/globals.css'
import Head from 'next/head'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Script from 'next/script'

function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Jade Ferreira</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"/>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.6/umd/popper.min.js"/>
                <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                      crossOrigin="anonymous"/>
                <link rel="icon"
                      type="image/x-icon"
                      href="public/favicon.ico"/>
            </Head>

            <div className="container">
                <Nav/>
                <main>
                    <Component {...pageProps} />
                </main>
                <Footer/>
            </div>
        </>
    )
}

export default MyApp
