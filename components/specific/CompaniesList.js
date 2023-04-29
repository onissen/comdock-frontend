
const CompaniesList = ({content}) => {
    return (
        <div className={style.listWrapper}>
            { content && content.data.map((item) => {
                return (
                    <li key={item.attributes.hr_number} className="flex justify-between gap-x-6 py-5">
                        <div className="flex gap-x-4">
                            <i>Icon hier</i>
                            <div className="min-w-0 flex-auto">
                                <p className="font-semibold leading-6 text-gray-900">{item.attributes.company_name}, {item.attributes.main_branch.data?.attributes?.city}</p>
                                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{item.attributes.hr_court} | {item.attributes.hr_dept} {item.attributes.hr_number}</p>
                            </div>
                        </div>
                    </li>
                );
            })}
        </div>
    );
}
export default CompaniesList;