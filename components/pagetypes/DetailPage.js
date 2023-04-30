import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageHeader from "../specific/PageHeader"
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons"

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
                        TOC Items here
                    </div>
                </aside>
                <article className="wrapper">
                    {children}
                </article>
            </div>
        </>
    )
}