import { Remarkable } from 'remarkable';
import { faFile } from '@fortawesome/free-regular-svg-icons';
import { faBuilding, faCircleMinus, faCirclePlus, faCodeBranch, faEllipsis, faGraduationCap, faUser } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';


export function germanDate(dateString) {
    // Convert date string to Date object
    const date = new Date(dateString);

    // Get day, month, and year from date object
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    // Format date string as DD.MM.YYYY
    const formattedDate = `${day}.${month}.${year}`;

    // Return formatted date string
    return formattedDate;
}

export const Now = () => {
    const [now, setNow] = useState('');
  
    useEffect(() => {
      const updateTimestamp = () => {
        const timestamp = new Date();
        const formatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }
        const localTimestamp = timestamp.toLocaleString('de-DE', formatOptions);
        setNow(localTimestamp);
      };
  
      updateTimestamp(); // Update on component mount
  
    }, []);
  
    return now;
  };
  


export async function markdownToHtml(markdown) {
    const md = new Remarkable({
        html: true,
        breaks: true,
        linkify: true,
        typographer: true,
        quotes: '“”‘’',
    });

    md.renderer.rules.underline_open = () => '<u>';
    md.renderer.rules.underline_close = () => '</u>';

    return md.render(markdown);
}

export function dynamicIconHandler(import_icon) {
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
    const export_icon = iconMap[import_icon];
    return export_icon
}

