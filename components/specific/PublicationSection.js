import { Fragment } from 'react'
import { Tab } from '@headlessui/react'
import style from '@/layout/TabNavs.module.sass';

export default function PablicationSection() {
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
            <HRList />
        </Tab.Panel>
        {/* Just Copy/Paste <Tab.Panel> to get more tab panels */}
      </Tab.Panels>
    </Tab.Group>
    </div>
  )
}