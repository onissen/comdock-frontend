/* jshint esversion:6 */

import Head from "next/head";
import Nav from "./Nav";
import PageHeader from "../specific/PageHeader";

export default function Layout ({children, siteTitle, nopageHeader}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/icons/icon-primary.svg" />
                <title>
                    {siteTitle ? (siteTitle+' | ') : ('')} COMDOCK Index
                </title>
            </Head>
            <Nav nopageHeader={nopageHeader} />
            <main>
                {children}
            </main>            
            {/* TODO: Hier bitte Alert für #3 */}
        </>
    );
}