import { germanDate } from '@/helpers/helpScripts';
import style from '@/layout/ContentLists.module.sass';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faBuilding, faCircleMinus, faCirclePlus, faCodeBranch, faEllipsis, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



import Link from "next/link";

const HRList = ({content}) => {
    return(
        <div>
            { content && content.data.map((item) => {
                const iconMap = {
                    'faEllipsis': faEllipsis,
                    'faGraduationCap': faGraduationCap,
                    'faUser': faUser,
                    'faCirclePlus': faCirclePlus,
                    'faBuilding': faBuilding,
                    'faFile': faFile,
                    'faCircleMinus': faCircleMinus,
                    'faCodeBranch': faCodeBranch,
                };
                const icon = iconMap[item.attributes.pub_icon];
                return (
                    <Link href={'/hr/'+item.id} key={item.id}>
                        <div className={`${style.listItem} rounded-lg`}>
                            <div className={` ${style.listIcon} flex-none rounded-l-lg`}>
                                <div className="w-5">
                                {icon && <FontAwesomeIcon icon={icon} />}
                                </div>
                            </div>
                            <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.meta}`}>{germanDate(item.attributes.pub_date)}</p>
                                <p className={`${style.summary}`}>{item.attributes.pub_title}: {item.attributes.pub_summary}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default HRList;