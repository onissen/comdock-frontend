import BreadcrumbRenderer from "./BreadcrumbRenderer"


export default function PageHeader({children, title}) {
    return(
        <header className="pageHeader">
            <BreadcrumbRenderer current={title} />
            <div className="wrapper">
                {children}
            </div>
        </header>
    )
}