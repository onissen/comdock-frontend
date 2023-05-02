import Layout from "@/components/common/Layout"
import DetailPage from "@/components/pagetypes/DetailPage";
import NetworkList from "@/components/specific/NetworkList";
import { fetcher } from "@/helpers/api";
import { faArrowRightArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CompanyDetail = ({item, networkInfo}) => {
    return(
        <Layout siteTitle={item.attributes.company_name}>
            <DetailPage 
                title={item.attributes.main_branch && item.attributes.main_branch.data ? 
                    item.attributes.company_name + ', ' + item.attributes.main_branch.data.attributes.city :
                    item.attributes.company_name
                }
                contentType='company'>
                <section id="company_name" className="detailSection">
                    <h4 className="sectionLabel">Firma</h4>
                    <p>{item.attributes.company_name}</p>
                    <div id="furtherNames">
                        {item.attributes.furtherNames &&
                          item.attributes.furtherNames.map((furtherName) => {
                            return (
                                <div className="flex text-primary-400/50" key={furtherName.id}>
                                    <FontAwesomeIcon icon={faArrowRightArrowLeft} className="w-3 flex-none mr-2" />
                                    <span className="flex-auto text-sm">{furtherName.further_cname}</span>
                                </div>
                            )
                            })
                        } 
                    </div>
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
                {item.attributes.main_branch && item.attributes.main_branch.data ||
                    item.attributes.branches && item.attributes.branches.data.length > 0 ? (
                    <section id="addresses" className="detailSection">
                        <h4 className="sectionLabel">Sitz, Niederlassung, Zweigniederlassungen</h4>
                        {item.attributes.main_branch && item.attributes.main_branch.data ? (
                        <p id="main_branch">
                            <span className="badge">Sitz</span>
                            <span>
                                {item.attributes.main_branch.data.attributes.street} {item.attributes.main_branch.data.attributes.place_number}, {item.attributes.main_branch.data.attributes.zip} {item.attributes.main_branch.data.attributes.city}
                            </span>
                        </p>
                        ) : ''}
                        <div id="branches">
                            {item.attributes.branches && item.attributes.branches.data.map((branch) => (
                                    <p key={branch.id}>
                                        <span className="badge">Zweigniederlassung</span>
                                        <span>
                                            {branch.attributes.street} {branch.attributes.place_number}, {branch.attributes.zip} {branch.attributes.city}
                                        </span>
                                    </p>
                            ))}
                        </div>
                    </section>
                ) : ('')}
                {item.attributes.corp_object ? (
                    <section id="corp_object" className="detailSection">
                        <h4 className="sectionLabel">Unternehmensgegenstand</h4>
                        <p>{item.attributes.corp_object}</p>
                    </section>
                ) : '' }
                {item.attributes.networkCompanies.length > 0 || item.attributes.networkPersons.length > 0 ? (
                    <section id="network" className="detailSection">
                        <h4 className="sectionLabel">Netzwerk</h4>
                        <div>
                            <NetworkList networkInfo={networkInfo} />
                        </div>
                    </section>
                ) : '' }
            </DetailPage>
        </Layout>
    )
}


export async function getServerSideProps({params}) {
    const {pageslug} = params;
    const contentResponse = await fetcher(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/company/${pageslug}?populate=*&_sort=furtherNames.name_upto:ASC`
    )
    const networkResponse = await fetcher(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/company/${pageslug}?fields=hr_number&populate[networkCompanies][populate][connected_company][fields][0]=company_name&populate[networkPersons][populate][connected_person][fields][0]=first_name,sir_name`
    )
    return{
        props: {
            item: contentResponse.data,
            networkInfo: networkResponse.data
        }
    }
}

export default CompanyDetail;