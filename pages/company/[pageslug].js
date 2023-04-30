import Layout from "@/components/common/Layout"
import { fetcher } from "@/helpers/api";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyDetail = ({item}) => {
    return(
        <Layout siteTitle={item.attributes.company_name}>
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