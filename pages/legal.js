import Layout from "@/components/common/Layout"
import { useFetchUser } from "@/helpers/auth";
import LoginForm from '@/components/specific/LoginForm';
import { setToken } from '@/helpers/auth';
import { fetcher } from '@/helpers/helpScripts';
import TaskList from "@/components/specific/TaskList";
import { useEffect, useState } from "react";

const CDLHome = ({allTasks}) => {
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
                
                <TaskList allTasks={allTasks} user={user} />
            </div>
        </Layout>
    )
  
}

export async function getStaticProps() {
    try {
      const contentResponse = await fetcher(
        'cert-documents', 
        'populate[companyDocs][fields]=company_name&populate[hr_id][fields]=pub_date&populate[hr_id][populate][company][fields]=company_name&populate[document][fields]=url&populate[cdl_tasks][populate][certificate_doc][fields]=url&populate[cdl_tasks][populate][signer][fields]=username'
        )
      return {
        props: {
          allTasks: contentResponse,
        },
      };
    } catch (error) {
      return {
        props: {
          allTasks: null,
        },
      };
    }
  }

  export default CDLHome;

