import ChevronDownIcon from '@/icons/ChevronDownIcon'
import { Popover, Transition } from '@headlessui/react'
import classNames from 'classnames'
import Link from 'next/link'
import { Fragment } from 'react'
import { NavigationItem } from './navigation'

interface ContextMenuProperties {
    className?: string
    name: string
    items: NavigationItem[]
}

export default function ContextMenu(props: ContextMenuProperties) {
    return (
        <Popover className="relative">
            <Popover.Button className={classNames(props.className, "flex items-center gap-x-2  bg-white/0")}>
                {props.name}
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true" />
            </Popover.Button>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
            >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 rounded-3xl bg-white p-4 shadow-lg ring-1 ring-gray-900/5">
                    {props.items.map((item) => {
                        if (item.label) {
                            return (
                                <label
                                    key={item.name}
                                    className="p-4 text-xs font-medium text-neutral-800/60"
                                >
                                    {item.name}
                                </label>
                            )
                        }

                        return (
                            <div key={item.name} className="relative rounded-lg p-4 hover:bg-gray-50">
                                <Link href={item.href} className="block text-sm font-semibold leading-6 text-gray-900" target={item.target}>
                                    {item.name}
                                    <span className="absolute inset-0" />
                                </Link>
                                <p className="mt-1 text-sm leading-6 text-gray-700">{item.description}</p>
                            </div>
                        )
                    }
                    )}
                </Popover.Panel>
            </Transition>
        </Popover>
    )
}