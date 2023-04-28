
const ContentLists = ({content}) => {
    return (
            <ul className="list-none space-y-4 text-4xl font-bold mb-3">
                { content && content.data.map((item) => {
                    return (
                        <li>
                            {item.attributes.company_name}
                        </li>
                    );
                })}
            </ul>
    );
}
export default ContentLists;