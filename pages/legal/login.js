import Layout from '@/components/common/Layout.js';
import LoginForm from '@/components/specific/LoginForm';
import { setToken, unsetToken, useFetchUser } from '@/helpers/auth';
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
        setToken(responseData);
    };
    
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };


    return (
        <Layout siteTitle="Login">
            <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
        </Layout>
    )
}

export default CDLLogin;