import style from '@/layout/ContentLists.module.sass';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


export default function NetworkList({networkInfo}) {
    return (
        <>
        <Link href={'#'}>
            <div className={`${style.listItem} ${style.listItemPrimary} ${style.headItem} rounded-lg`}>
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
        <div className="grid grid-cols-2 gap-2">
            <div>
                <h6 className={`${style.networkTitle} rounded`}>Verbundene Unternehmen</h6>
                {networkInfo.attributes.networkCompanies.map((company) => {
                    return (
                        <div>
                            'Hier Unternehmen auflisten...'
                        </div>
                    )
                })}
            </div>
        </div>
        </>  
    )
}