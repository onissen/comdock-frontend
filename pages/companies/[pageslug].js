import Layout from "@/components/common/Layout"
import DetailPage from "@/components/pagetypes/DetailPage";
import { fetcher } from "@/helpers/api";

const CompanyDetail = ({item}) => {
    return(
        <Layout siteTitle={item.attributes.company_name}>
            <DetailPage title={item.attributes.company_name+', '+item.attributes.main_branch.data.attributes.city} contentType='company'>
                Artikel
            </DetailPage>
        </Layout>
    )
}


export async function getServerSideProps({params}) {
    const {pageslug} = params;
    const contentResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/company/${pageslug}?populate=*`
    )
    return{
        props: {
            item: contentResponse.data
        }
    }
}

export default CompanyDetail;