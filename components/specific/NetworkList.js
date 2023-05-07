import { germanDate } from '@/helpers/helpScripts';
import style from '@/layout/ContentLists.module.sass';
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useState } from 'react';


export default function NetworkList({networkInfo}) {
    const [ShowFullNetwork, setShowFullNetwork] = useState(false)
    const numToShow = ShowFullNetwork ? Math.max(
        networkInfo.attributes.activeNetworkCompanies.length,
        networkInfo.attributes.activeNetworkPersons.length
      ) : 3;

    const handleShowMore = () => {
        setShowFullNetwork(!ShowFullNetwork);
    };

    return (
        <>
        <Link href={'#'}>
            <div className={`${style.networkItem} ${style.headItem} rounded-lg`}>
                <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                    <div className='w-5'>
                        <FontAwesomeIcon icon={faBuilding} />
                    </div>
                </div>
                <div className={`${style.listContent} flex-auto`}>
                    <p className={`${style.summary}`}>{networkInfo.attributes.company_name}</p>
                </div>
            </div>
        </Link>
        <div className="grid grid-cols-2 gap-4">
            <div id="networkCompanies">
                <h6 className={`${style.networkTitle} rounded`}>Verbundene Unternehmen</h6>
                {networkInfo.attributes.activeNetworkCompanies.slice(0, numToShow).map((company) => {
                    return (
                        <Link href={'/companies/'+company.connected_company.data.attributes.hr_number} key={company.connected_company.data.attributes.hr_number}>
                        <div className={`${style.networkItem} rounded-lg`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className={style.faIcon}>
                                    <FontAwesomeIcon icon={faBuilding} />
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{company.connected_company.data.attributes.company_name}</p>
                                <p className={`${style.meta}`}>{company.connection_type}</p>
                            </div>
                        </div>
                    </Link>
                    )
                })}
                {ShowFullNetwork && networkInfo.attributes.deletedNetworkCompanies.map((company) => {
                    return (
                        <Link href={'/companies/'+company.connected_company.data.attributes.hr_number} key={company.connected_company.data.attributes.hr_number}>
                        <div className={`${style.networkItem} ${style.deleted} rounded-lg`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className={style.faIcon}>
                                    <FontAwesomeIcon icon={faBuilding} />
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{company.connected_company.data.attributes.company_name}</p>
                                <p className={`${style.meta}`}>{company.connection_type} ({germanDate(company.since)} bis {germanDate(company.upto)})</p>
                            </div>
                        </div>
                    </Link>
                    )
                })}
            </div>
            <div id="networkPersons">
                <h6 className={`${style.networkTitle} rounded`}>Verbundene Personen</h6>
                {networkInfo.attributes.activeNetworkPersons.slice(0, numToShow).map((person) => {
                    return (
                        <Link href={'/persons/'+person.connected_person.data.id} key={person.connected_person.data.id}>
                        <div className={`${style.networkItem} rounded-lg`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className={style.faIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{person.connected_person.data.attributes.first_name} {person.connected_person.data.attributes.sir_name}</p>
                                <p className={`${style.meta}`}>{person.connection_type}</p>
                            </div>
                        </div>
                    </Link>
                    )
                })}
                {ShowFullNetwork && networkInfo.attributes.deletedNetworkPersons.map((person) => {
                    return (
                        <Link href={'/persons/'+person.connected_person.data.id} key={person.connected_person.data.id}>
                        <div className={`${style.networkItem} ${style.deleted} rounded-lg`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className={style.faIcon}>
                                    <FontAwesomeIcon icon={faUser} />
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{person.connected_person.data.attributes.first_name} {person.connected_person.data.attributes.sir_name}</p>
                                <p className={`${style.meta}`}>
                                    {person.connection_type} ({germanDate(person.since)} bis {germanDate(person.upto)})
                                </p>
                            </div>
                        </div>
                    </Link>
                    )
                })}
            </div>
        </div>
        {(
            networkInfo.attributes.activeNetworkCompanies.length > numToShow || networkInfo.attributes.activeNetworkPersons.length,
            networkInfo.attributes.deletedNetworkCompanies.length > numToShow || networkInfo.attributes.deletedNetworkPersons.length
        ) && (
            <button className={`${style.LenghtToggleButton} ${style.network} rounded`} onClick={() => setShowFullNetwork(!ShowFullNetwork)}>
                {ShowFullNetwork ? "Netzwerk einklappen" : "Netzwerk ausklappen"}
            </button>
        )}
        </>  
    )
}