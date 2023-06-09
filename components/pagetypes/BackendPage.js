import BreadcrumbRenderer from "../specific/BreadcrumbRenderer";

export default function BackendPage () {
    return (
        <>
        <div className="bg-primary text-zinc-100 rounded-b-lg py-3">                
            <BreadcrumbRenderer backend current='Ihre Aufgaben' />
            <div className="backend-wrapper pt-5 pb-3">
                <div className="h1">Ihre Aufgaben</div>
            </div>
        </div>
        <div className="flex mt-8">
            <aside className="w-72 bg-white py-4 px-2 shadow-sm rounded-lg">
                Sidebar Menu
            </aside>
            <main className="pl-6">Main</main>
        </div>
        </>
    )
}