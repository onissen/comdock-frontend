import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import style from '@/layout/TabNavs.module.sass';
import HRList from './HRList';
import { useRef } from 'react';

export default function PablicationSection({hr}) {
  
  const tabRef = useRef(null);

  const switchTabAndScrollToHR = (tabIndex, hrId) => {
    tabRef.current.setSelectedTab(tabIndex);
    const hrElement = document.getElementById(hrId);
    if (hrElement) {
      hrElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="w-full">
    <Tab.Group>
      <Tab.List className={style.tabNav}>
        <Tab as={Fragment}>
          {({ selected }) => (
            <button className={`${style.tabNavItem} ${selected ? style.tabNavItemActive : ''}`}>
              Unternehmensregister
            </button>
          )}
        </Tab>
        {/* Just Copy/Past <Tab> to get more tabs */}
      </Tab.List>
      <Tab.Panels className="mt-2">
        <Tab.Panel id="hr_pubs" className="p-3">
            <HRList content={hr} />
        </Tab.Panel>
        {/* Just Copy/Paste <Tab.Panel> to get more tab panels */}
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}