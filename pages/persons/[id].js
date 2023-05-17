import Layout from "@/components/common/Layout";
import DetailPage from "@/components/pagetypes/DetailPage";
import { fetcher } from "@/helpers/api";
import Link from "next/link";
import style from '@/layout/ContentLists.module.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { germanDate } from "@/helpers/helpScripts";


const PersonDetail = ({item}) => {
    return (
        <Layout siteTitle={item.attributes.first_name+' '+item.attributes.sir_name+', '+item.attributes.city}>
            <DetailPage title={item.attributes.first_name+' '+item.attributes.sir_name+', '+item.attributes.city} contentType='person'>
                <section id="network" className="detailSection">
                    <h4 className="sectionLabel">Positionen</h4>
                    <div className="personNetwork">
                    {item.attributes.personNetwork.map((person) => {
                        return (
                            <Link href="#" key={person.id}>
                                <div className={`${style.networkItem} ${person.upto ? (style.deleted) : ''} rounded-lg`}>
                                    <div className={`${style.listIcon} flex-none rounded-l-lg`}>
                                    <div className={style.faIcon}>
                                        <FontAwesomeIcon icon={faBuilding} />
                                    </div>
                                    </div>
                                    <div className={`${style.listContent} flex-auto`}>
                                    <p className={`${style.summary}`}>{person.company.data.attributes.company_name}</p>
                                    <p className={`${style.meta}`}>
                                        {person.connection_type} {person.upto ? ('(bis '+germanDate(person.upto)+')') : ''}
                                    </p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                    </div>
                </section>
                <section id="publics" className="detailSection">
                    <h4 className="sectionLabel">Publikationen</h4>
                    {/* TODO #21 */}
                    <p>Publikationen auflisten #21</p>
                </section>
            </DetailPage>
        </Layout>
    )
}

export async function getServerSideProps({params}) {
    const {id} = params;
    const contentResponse = await fetcher(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/persons/${id}?populate[personNetwork][populate][company][fields][0]=hr_number,company_name`
    );
    return {
      props: {
        item: contentResponse.data,
      },
    };
  }


export default PersonDetail;