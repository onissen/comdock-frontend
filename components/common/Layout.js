/* jshint esversion:6 */

import Head from "next/head";
import Nav from "./Nav";

export default function Layout ({children, siteTitle}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/icons/icon-primary.svg" />
                <title>
                    {siteTitle ? (siteTitle+' | ') : ('')} COMDOCK Index
                </title>
            </Head>
            <Nav />
            <main className="wrapper">
                {children}
            </main>
            {/* TODO: Hier bitte Alert für #3 */}
        </>
    );
}