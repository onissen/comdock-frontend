import Layout from '@/components/common/Layout.js';
import LoginForm from '@/components/specific/LoginForm';
import { setToken, useFetchUser } from '@/helpers/auth';
import { fetcher } from '@/helpers/helpScripts';
import { useState } from 'react';

const CDLLogin = () => {
    const [data, setData] = useState({
        identifier: '',
        password: '',
    });

    const { user, loading } = useFetchUser();

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


    return (
        <Layout siteTitle="Login">
            <main className="mt-3">
                <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
            </main>
        </Layout>
    )
}

export default CDLLogin;