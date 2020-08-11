import Head from 'next/head'

export default function CustomHead(props) {
    return (
        <Head>
            <title>The Naked Koala</title>
            <link href="https://fonts.googleapis.com/css2?family=Antic+Slab&display=swap" rel="stylesheet"></link>
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}