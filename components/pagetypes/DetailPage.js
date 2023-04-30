import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageHeader from "../specific/PageHeader"
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"


export default function DetailPage({title, children, contentType}) {
    return (
        <>
            <PageHeader>
                <div className="h1 flex">
                    <div className="flex-none w-8 mr-6">
                        {contentType == 'company' ? (<FontAwesomeIcon icon={faBuilding} />) : ''}
                        {contentType == 'person' ? (<FontAwesomeIcon icon={faUser} />) : ''}
                    </div>
                    <span>{title}</span>
                </div>
            </PageHeader>
            <div className="w-full relative">
                <aside className="tableOfContent lg:block hidden">
                    <div className="sectionsList">
                        <ul>
                            {children.map(child => {
                                if (child.type == 'section') {
                                    return (
                                        <li key={child.props.id}>
                                            <Link href={`#${child.props.id}`}>
                                                {child.props.children[0].props.children}
                                            </Link>
                                        </li>
                                    );
                                };
                            })}
                        </ul>
                    </div>
                </aside>
                <article className="wrapper">
                    {children}
                </article>
            </div>
        </>
    )
}