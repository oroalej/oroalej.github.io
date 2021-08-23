import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useRef} from 'react'
import tw from "twin.macro"

export default function Modal({onClose, children, isOpen = false}) {
  const dialogWrapper = useRef(null);

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 "
        onClose={onClose}
        initialFocus={dialogWrapper}
      >
        <div css={tw`h-full min-h-screen text-center`} ref={dialogWrapper}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay tw="fixed inset-0 bg-gray-900 bg-opacity-50"/>
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            tw="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div
              tw="inline-flex flex-col w-full max-h-screen h-full text-left align-bottom transition-all transform bg-gray-100 dark:bg-gray-800"
            >
              {children}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
