import style from '@/layout/ContentLists.module.sass';
import Link from "next/link"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { germanDate } from '@/helpers/helpScripts';
import { Disclosure } from '@headlessui/react';
import { faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';


export default function DocList({content}) {
    return (
        <div>
            {content && content.data.map((item) => {
                return(
                    <Disclosure key={item.id}>
                        {({ open }) => (
                            <div className="rounded-lg bg-slate-50">
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
                                                <FontAwesomeIcon icon={faCircleChevronUp} />
                                            </div>
                                        </div>
                                    </Disclosure.Button>
                                <Disclosure.Panel>
                                    Bla Bla
                                </Disclosure.Panel>
                            </div>
                        )}
                    </Disclosure>
                )
            })}
        </div>
    )
}