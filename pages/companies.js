import Layout from "@/components/common/Layout";
import ContentLists from "@/components/specific/ContentLists";
import { fetcher } from "@/helpers/api";

const Companies = ({companies}) => {
    return(
        <Layout>
          <h1>Firmen</h1>
          <ContentLists content={companies} />
        </Layout>
    )
}
export default Companies

export async function getStaticProps() {
    const compsResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/companies`
    );
    return {
      props: {
        companies: compsResponse,
      },
    };
  }
  