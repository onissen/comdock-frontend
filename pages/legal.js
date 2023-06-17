import Layout from "@/components/common/Layout"
import BlankPage from "@/components/pagetypes/BlankPage";
import { useFetchUser } from "@/helpers/auth";
import LoginForm from '@/components/specific/LoginForm';
import { setToken } from '@/helpers/auth';
import { fetcher } from '@/helpers/helpScripts';
import {useState } from 'react';

const CDLHome = (tasks) => {
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
    const { user, loading, name } = useFetchUser();
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
        <Layout backend siteTitle="COMDOCK Legal" nopageHeader>
            <div className="bg-white rounded-lg p-4 wrapper mt-8 shadow">
                <p className="text-center">Herzlich Willkommen {name}!<br/>
                Vielen Dank, dass Sie unsere Seite besuchen.</p>
            </div>
            <div className="wrapper">
                <h1 className="text-primary">Ihre Aufgaben</h1>
            </div>
        </Layout>
    )
}

export default CDLHome;

export async function getStaticProps() {
    try {
        const contentResponse = await fetcher(
        'companies', 
        'fields[0]=company_name&fields[1]=hr_court&fields[2]=hr_dept&fields[3]=hr_number&populate=main_branch')
        return {
            props: {
                tasks: contentResponse,
            },
        };
    } catch (error) {
        return {
        props: {
            tasks: null,
        },
        };
    }
}