import style from '@/layout/ContentLists.module.sass';
import Link from "next/link"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { germanDate } from '@/helpers/helpScripts';


export default function DocList({content}) {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {content && content.data.map((item)=> {
                return(
                    <Link href={'/docs/'+item.id} key={item.id}>
                        <div className={`${style.listItem} rounded-lg`} id={`doc${item.id}`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className="w-5">
                                <FontAwesomeIcon icon={faFileLines} />
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{item.attributes.docType}</p>
                                <p className={`${style.meta}`}>{germanDate(item.attributes.createdAt)}</p>
                            </div>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}