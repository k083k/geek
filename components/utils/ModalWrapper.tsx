import {Dialog, Transition} from '@headlessui/react'
import React, {Fragment} from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import {ModalWrapperProps} from '@/core/shared/interface'

const ModalWrapper = (Props: ModalWrapperProps) => {
    return (
        <>
            <Transition appear show={Props.isOpen} as={Fragment}>
                <Dialog as='div' className='relative z-[100]' onClose={Props.closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter='ease-out duration-300'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in duration-200'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                    >
                        <div className='fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md'/>
                    </Transition.Child>

                    <div className='fixed inset-0 overflow-y-auto'>
                        <div className='flex items-center justify-center min-h-full p-4 text-center'>
                            <Transition.Child
                                as={Fragment}
                                enter='ease-out duration-300'
                                enterFrom='opacity-0 scale-95'
                                enterTo='opacity-100 scale-100'
                                leave='ease-out duration-300'
                                leaveFrom='opacity-100 scale-100'
                                leaveTo='opacity-0 scale-95'
                            >
                                <Dialog.Panel
                                    className={`relative w-full max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5 ${Props.containerStyles ? Props.containerStyles : "max-w-lg"}`}>
                                    <button
                                        type='button'
                                        className='absolute z-10 p-2 duration-200 ease-in-out rounded-full shadow-xl top-2 right-2 w-fit bg-pixel-black text-disruption hover:scale-105'
                                        onClick={Props.closeModal}
                                    >
                                        <AiOutlineClose/>
                                    </button>
                                    {Props.children}
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ModalWrapper
