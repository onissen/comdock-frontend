import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PageHeader from "../specific/PageHeader"
import { faBuilding, faUser } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useEffect, useState } from "react"
import { currentDay, currentTime } from "@/helpers/helpScripts"


export default function DetailPage({title, children, contentType}) {
    const now = currentDay+' '+currentTime

    const [activeLink, setActiveLink] = useState();
    
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('.detailSection');
            let currentActiveLink = '';
        
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;
        
                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                currentActiveLink = section.id;
                }
            });
        
            if (currentActiveLink !== activeLink) {
                setActiveLink(currentActiveLink);
            }
        };
      
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [activeLink]);

    return (
        <>
            <PageHeader title={title}>
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
                                            <Link href={`#${child.props.id}`} className={`toc-item rounded-r ${activeLink === child.props.id ? 'active' : ''}`}>
                                                {child.props.children[0].props.children}
                                            </Link>
                                        </li>
                                    );
                                };
                            })}
                        </ul>
                        <p className="toc-text">Abruf vom {now}</p>
                    </div>
                </aside>
                <article className="wrapper">
                    {children}
                </article>
            </div>
        </>
    )
}