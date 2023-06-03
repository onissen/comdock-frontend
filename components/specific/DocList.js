import style from '@/layout/ContentLists.module.sass';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { faCircleChevronDown, faFileSignature, faFile, faFileLines } from '@fortawesome/free-solid-svg-icons';
import { Disclosure } from '@headlessui/react';
import { germanDate } from '@/helpers/helpScripts';
import Link from 'next/link';
import { Alert } from './Alerts';


export default function DocList({content}) {
    return (
        <div>
            {content && content.data.map((item) => {
                return(
                    <Disclosure key={item.id}>
                        {({ open }) => (
                            <div className={open ? 'bg-sky-100/70 rounded-lg' : ''}>
                                    <Disclosure.Button className={`${style.listItem} rounded-lg w-full text-left`} id={`doc${item.id}`}>
                                        <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                            <div className="w-5">
                                                <FontAwesomeIcon icon={faFileLines} />
                                            </div>
                                        </div>
                                        <div className={`${style.listContent} flex-auto`}>
                                            <p className={`${style.summary}`}>{item.attributes.docType}</p>
                                            <p className={`${style.meta}`}>{germanDate(item.attributes.createdAt)}</p>
                                        </div>
                                        <div className={`${style.hrLink} flex-none`}>
                                            <div className={`${open ? 'rotate-180 transform' : ''} w-5`}>
                                                <FontAwesomeIcon icon={faCircleChevronDown} />
                                            </div>
                                        </div>
                                    </Disclosure.Button>
                                <Disclosure.Panel>
                                    <div className="px-5 pb-5">
                                        <p className='pb-3 text-sm text-primary'>
                                        {item.attributes.certificate.data ? (
                                        <span>Der Benutzer {item.attributes.user.data.attributes.name} hat dieses Dokument am {germanDate(item.attributes.signed_date)} digital signiert oder beglaubigt.</span>
                                        ) : (
                                            <span>Eine Unterschrift oder Beglaubigung zu diesem Dokument steht noch aus.</span>
                                        )}
                                        </p>
                                        <div className="flex gap-4">
                                            {item.attributes.document.data ? (
                                                <Link href={process.env.NEXT_PUBLIC_STRAPI+item.attributes.document.data.attributes.url} target="_blank">
                                                    <button className="flex items-center font-medium text-sm text-primary hover:bg-sky-200/70 rounded-md px-2 py-1">
                                                        <FontAwesomeIcon icon={faFile} className="w-3" />
                                                        <span className="ml-3">Dokument öffnen</span>
                                                    </button>
                                                </Link>
                                            ) : ''}
                                            {item.attributes.certificate.data ? (
                                                <Link href={process.env.NEXT_PUBLIC_STRAPI+item.attributes.certificate.data?.attributes.url} target="_blank">
                                                    <button className="flex items-center font-medium text-sm  text-primary hover:bg-sky-200/70 rounded-md px-2 py-1">
                                                        <FontAwesomeIcon icon={faFileSignature} className="w-5" />
                                                        <span className="ml-3">Beglaubigungsdokument öffnen</span>
                                                    </button>
                                                </Link>
                                            ) : ''}
                                        </div>
                                    </div>
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                )
            })}
        </div>
    )
}