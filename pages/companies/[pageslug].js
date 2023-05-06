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
                    <p className="my-2">{item.attributes.company_name}</p>
                    <div id="furtherNames" className="my-2">
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
                    <p id="hr" className="my-2">
                        <span className="badge">HR</span>
                        <span>{item.attributes.hr_court} | {item.attributes.hr_dept+' '+item.attributes.hr_number}</span>
                    </p>
                    {item.attributes.lei ? (
                        <p id="lei" className="my-2">
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
                        <p id="main_branch" className="my-2">
                            <span className="badge">Sitz</span>
                            <span>
                                {item.attributes.main_branch.data.attributes.street} {item.attributes.main_branch.data.attributes.place_number}, {item.attributes.main_branch.data.attributes.zip} {item.attributes.main_branch.data.attributes.city}
                            </span>
                        </p>
                        ) : ''}
                        <div id="branches" className="my-2">
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
                        <p className="my-2">{item.attributes.corp_object}</p>
                    </section>
                ) : '' }
                {item.attributes.networkCompanies.length > 0 || item.attributes.networkPersons.length > 0 ? (
                    <section id="network" className="detailSection">
                        <h4 className="sectionLabel">Netzwerk</h4>
                        <div className="my-2">
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
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/slugify/slugs/company/${pageslug}?fields=company_name&populate[networkCompanies][populate][connected_company][fields][0]=hr_number,company_name&populate[networkPersons][populate][connected_person][fields][0]=id,first_name,sir_name`
    )
    
    // Sort networkCompanies and networkPersons by their 'since' field
    networkResponse.data.attributes.networkCompanies.sort((oldest, newest) => {
        return new Date(newest.since) - new Date(oldest.since);
    });

    networkResponse.data.attributes.networkPersons.sort((oldest, newest) => {
        return new Date(newest.since) - new Date(oldest.since);
    });

    const activeNetworkCompanies = networkResponse.data.attributes.networkCompanies.filter(company => company.upto === null || company.upto === '');
    const deletedNetworkCompanies = networkResponse.data.attributes.networkCompanies.filter(company => company.upto !== null && company.upto !== '');

    const activeNetworkPersons = networkResponse.data.attributes.networkPersons.filter(person => person.upto === null || person.upto === '');
    const deletedNetworkPersons = networkResponse.data.attributes.networkPersons.filter(person => person.upto !== null && person.upto !== '');

    return{
        props: {
            item: contentResponse.data,
            networkInfo: {
                ...networkResponse.data,
                attributes: {
                    ...networkResponse.data.attributes,
                    activeNetworkCompanies: activeNetworkCompanies,
                    deletedNetworkCompanies: deletedNetworkCompanies,
                    activeNetworkPersons: activeNetworkPersons,
                    deletedNetworkPersons: deletedNetworkPersons
                }
            }
        }
    }
}

export default CompanyDetail;