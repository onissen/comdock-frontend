export default function PageHeader({children}) {
    return(
        <header className="pageHeader">
            <div className="wrapper">
                {children}
            </div>
        </header>
    )
}