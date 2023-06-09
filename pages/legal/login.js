import Layout from "@/components/common/Layout";
import BreadcrumbRenderer from "@/components/specific/BreadcrumbRenderer";
import LoginForm from "@/components/specific/LoginForm";
import { setToken, unsetToken } from "@/helpers/auth";
import { fetcher } from "@/helpers/helpScripts";
import { useState } from "react";


const CDLLogin = () => {
    const [data, setData] = useState({
        username: '',
        password: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const responseData = await fetcher(
          `auth/local`,
          '',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: data.username,
              password: data.password,
            }),
          }
        );
        setToken(responseData);
      };
    
      const logout = () => {
        unsetToken();
      };
    
      const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
      };


    return (
        <Layout siteTitle="Login">
            <div className="bg-primary text-zinc-100 rounded-b-lg py-2">                
                <BreadcrumbRenderer />
            </div>
            <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
            
        </Layout>
    )
}

export default CDLLogin;