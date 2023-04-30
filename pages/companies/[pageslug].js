import Layout from "@/components/common/Layout"
import DetailPage from "@/components/pagetypes/DetailPage";
import { fetcher } from "@/helpers/api";

const CompanyDetail = ({item}) => {
    return(
        <Layout siteTitle={item.attributes.company_name}>
            <DetailPage title={item.attributes.company_name+', '+item.attributes.main_branch.data.attributes.city} contentType='company'>
                <section id="company_name" class="detailSection">
                    <h4 className="sectionLabel">Firma</h4>
                    <p>{item.attributes.company_name}</p>
                    <p>former_names</p>
                </section>
                <section id="register" className="detailSection">
                    <h4 className="sectionLabel">Register</h4>
                    <p id="hr">
                        <span className="badge">HR</span>
                        <span>{item.attributes.hr_court} | {item.attributes.hr_dept+' '+item.attributes.hr_number}</span>
                    </p>
                    {item.attributes.lei ? (
                        <p id="lei">
                            <span className="badge">LEI</span>
                            <span>{item.attributes.lei}</span>
                        </p>
                    ) : ''}
                </section>
                <section id="branches" className="detailSection">
                    <h4 className="sectionLabel">Sitz, Niederlassung, Zweigniederlassungen</h4>
                    <p id="main_branch">
                        <span className="badge">Sitz</span>
                        <span>
                            {item.attributes.main_branch.data.attributes.street} {item.attributes.main_branch.data.attributes.place_number}, 
                            {item.attributes.main_branch.data.attributes.zip} {item.attributes.main_branch.data.attributes.city}
                        </span>
                    </p>
                    <p>branches</p>
                </section>
                <section id="corp_object" className="detailSection">
                    <h4 className="sectionLabel">Unternehmensgegenstand</h4>
                    <p>{item.attributes.corp_object}</p>
                </section>
                <section id="network" className="detailSection">
                    <h4 className="sectionLabel">Netzwerk</h4>
                    Netzwerk CardList
                </section>
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