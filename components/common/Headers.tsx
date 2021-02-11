import Head from 'next/head';

export default function Headers({ title }) {
    return (
        <Head>
            <title>{title}</title>
        </Head>
    )
}