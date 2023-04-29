import style from '@/layout/ContentLists.module.sass';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const CompaniesList = ({content}) => {
    return (
        <div className={style.listWrapper}>
            { content && content.data.map((item) => {
                return (
                    <div className={`${style.listItem}`}>
                        <div className={` ${style.listIcon} flex-none w-5 m-auto`}>
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className={`${style.listContent} flex-auto`}>
                                <p className={`${style.summary}`}>{item.attributes.company_name} 
                                {item.attributes.main_branch.data?.attributes?.city ? (', '+item.attributes.main_branch.data?.attributes?.city) : ''}</p>
                            <p className={`${style.meta}`}>{item.attributes.hr_court ? (item.attributes.hr_court+' | ') : ''}
                            {item.attributes.hr_dept} {item.attributes.hr_number}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
export default CompaniesList;