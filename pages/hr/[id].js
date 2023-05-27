import Layout from "@/components/common/Layout";
import { ConnectionFailFullSite } from "@/components/errors/ConnectionFailFullSite";
import PageHeader from "@/components/specific/PageHeader";
import { fetcher } from "@/helpers/api";
import { dynamicIconHandler, markdownToHtml } from "@/helpers/helpScripts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect } from "react";


const HRDetail = ({item, pub_text}) => {
    useEffect(() => {
        if (!item) {
            setTimeout(() => {
            window.location.reload();
            }, 120000);
        }
    }, [item]);
    
    if (!item) {
        return(<ConnectionFailFullSite />)
    }

    return (
        <Layout siteTitle={item.attributes.pub_title+' - '+item.attributes.company.data.attributes.company_name}>
            <PageHeader noBreadcrumb>
                <div className="h2 flex">
                    <div className="flex-none w-6 mr-6">
                        <FontAwesomeIcon icon={dynamicIconHandler(item.attributes.pub_icon)} />
                    </div>
                    <span>{item.attributes.pub_title+': '+item.attributes.pub_summary}</span>
                </div>
            </PageHeader>
            <article className="wrapper text-mono">
                <Link href={`/companies/${item.attributes.company.data.attributes.hr_number}`} className="font-semibold text-primary hover:underline hover:underline-offset-4">{item.attributes.company.data.attributes.hr_dept+' '+item.attributes.company.data.attributes.hr_number+' / '+item.attributes.company.data.attributes.company_name}</Link>
                <div className={`my-2 markdownBox text-mono`} dangerouslySetInnerHTML={{ __html: pub_text }}></div>
            </article>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const {id} = params;
    try {
        const contentResponse = await fetcher(
            `${process.env.NEXT_PUBLIC_STRAPI_URL}/hr-publics/${id}?populate[company][fields][0]=company_name,hr_dept,hr_number`
        )

        const pub_text = await markdownToHtml(contentResponse.data.attributes.pub_text);

        return {
            props:{
                item: contentResponse.data,
                pub_text
            }
        }
    } catch (error) {
        return{
            props: {item: null}
        }
    }
}

export default HRDetail;