import style from '@/layout/CDLegal.module.sass';
import { Dialog, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useState } from 'react';

export default function TaskList() {
    // Modal Logic
    let [isOpen, setIsOpen] = useState(false)

    /* 
        TODO: Bitte eine Funktion erstellen, die beim onclick des ersten ModalClose ausgeführt wird.
        Die Funktion muss dann den User zur Eingabe des Passwortes auffordern, 
        das Passwort abgleichen und die Änderung an den Daten vornehmen, danach einen Alert-Modal anzeigen mit bedankendem Text
    */

    function closeModal() {
        setIsOpen(false)
    }    

    function openModal() {
        setIsOpen(true)
        // Hier ggf. Daten mit übergeben
        
    }

    return (
        <>
            <div className={`${style.taskItem} rounded-lg`}>
                <Link href="#" onClick={openModal} >
                    <p className={`${style.summary}`}>
                        Task
                    </p>
                    <p className={`${style.meta}`}>DocType &bull; Company</p>
                </Link>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>
                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Wir bitten Sie das Dokument WX der Firma YZ zu AB.
                                        </p>
                                        <p>Dokument anzeigen</p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Jetzt unterzeichnen
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}