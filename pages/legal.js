import Layout from "@/components/common/Layout"
import BlankPage from "@/components/pagetypes/BlankPage";
import { useFetchUser } from "@/helpers/auth";
import LoginForm from '@/components/specific/LoginForm';
import { setToken } from '@/helpers/auth';
import { fetcher } from '@/helpers/helpScripts';
import { useState } from 'react';

export default function CDLHome () {
    // Login Basic Process
    const [data, setData] = useState({
        identifier: '',
        password: '',
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        

        const responseData = await fetcher(
            `auth/local`,
            ``,
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  identifier: data.identifier,
                  password: data.password,
                }),
            }
        );
        // FIXME: Fallback if Connection failed
        setToken(responseData);
    };
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    // Test Authentication State, Show Login if not Authenticated
    const { user, loading} = useFetchUser();
    if (!user && !loading) {
        return (
            <Layout backend siteTitle="COMDOCK Legal" nopageHeader>
                <main className="mt-3">
                    <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
                </main>
            </Layout>
        )
    }

    return (
        <Layout backend siteTitle="COMDOCK Legal">
            <BlankPage title="Ihre Aufgaben" noBreadcrumb>
                
            </BlankPage>
        </Layout>
    )
}