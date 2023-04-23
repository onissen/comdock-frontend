import Head from "next/head";
import Nav from "./Nav";

export default function Layout(props) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/icons/icon-primary.svg" />
                <title>
                    {props.siteTitle ? (props.siteTitle+' | ') : ('')} COMDOCK Index
                </title>
            </Head>
            <Nav />
        </>
    );
}