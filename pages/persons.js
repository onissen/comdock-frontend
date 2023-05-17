import Layout from "@/components/common/Layout";
import BlankPage from "@/components/pagetypes/BlankPage";
import PersonsList from "@/components/specific/PersonsList";
import { fetcher } from "@/helpers/api";


const Companies = ({persons}) => {
    return(
        <Layout siteTitle="Personen">
          <BlankPage title="Personen" >
            <PersonsList content={persons} />
          </BlankPage>
        </Layout>
    )
}
export default Companies

export async function getStaticProps() {
    const contentResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/persons?fields[0]=first_name&fields[1]=sir_name&fields[2]=city`
    );
    return {
      props: {
        persons: contentResponse,
      },
    };
  }
  