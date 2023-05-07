import Layout from "@/components/common/Layout";
import ListPage from "@/components/pagetypes/ListPage";
import CompaniesList from "@/components/specific/CompaniesList";
import { fetcher } from "@/helpers/api";


const Companies = ({companies}) => {
    return(
        <Layout siteTitle="Firmen">
          <ListPage title="Firmen" >
            <CompaniesList content={companies} />
          </ListPage>
        </Layout>
    )
}
export default Companies

export async function getStaticProps() {
    const contentResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/companies?fields[0]=company_name&fields[1]=hr_court&fields[2]=hr_dept&fields[3]=hr_number&populate=main_branch`
    );
    return {
      props: {
        companies: contentResponse,
      },
    };
  }
  