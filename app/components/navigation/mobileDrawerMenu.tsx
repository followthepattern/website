import { Dialog, Disclosure } from "@headlessui/react";
import HomeActionIcon from "./homeActionIcon";
import CTAButton from "./ctaButton";
import XMarkIcon from "@/icons/XMarkIcon";
import Link from "next/link";
import ChevronDownIcon from "@/icons/ChevronDownIcon";
import classNames from "classnames";
import { NavigationItem } from "./navigation";
import { usePathname } from "next/navigation";

interface MobileDrawerMenuProperties {
    className?: string
    mobileMenuOpen: boolean
    setMobileMenuOpen: (b: boolean) => void
    navigation: NavigationItem[]
}

interface DrawerDisclosureProperties {
    name: string
    navigation: NavigationItem[]
    pathName: string
    setMobileMenuOpen: (b: boolean) => void
}

function DrawerDisclosure(props: DrawerDisclosureProperties) {
    return (
        <Disclosure as="div" className="-mx-3">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-5 font-semibold text-gray-900 hover:bg-gray-50">
                        {props.name}
                        <ChevronDownIcon
                            className={classNames(open ? 'rotate-180' : '', 'h-4 w-4 flex-none')}
                            aria-hidden="true"
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                        {props.navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                target={item.target}
                                className={classNames("block rounded-lg py-2 pl-6 pr-8 font-semibold hover:bg-gray-50", {
                                    "text-gray-900": props.pathName != item.href,
                                    "text-blue-600": props.pathName == item.href,
                                })}
                                onClick={() => props.setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default function MobileDrawerMenu(props: MobileDrawerMenuProperties) {
    const pathName = usePathname();

    return (
        <Dialog as="div" className={classNames(props.className)} open={props.mobileMenuOpen} onClose={props.setMobileMenuOpen}>
            <div className="fixed inset-0 z-10" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center gap-x-6">
                    <HomeActionIcon />
                    <CTAButton className="ml-auto" />
                    <button
                        type="button"
                        className="-m-2.5 rounded-md p-2.5 text-gray-900"
                        onClick={() => props.setMobileMenuOpen(false)}
                    >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="space-y-2 py-6">
                        {props.navigation.map((item) => {
                            if (item.children) {
                                return (
                                    <DrawerDisclosure key={item.name} name={item.name} navigation={item.children} pathName={pathName} setMobileMenuOpen={props.setMobileMenuOpen}/>
                                )
                            }

                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    target={item.target}
                                    className={classNames("-mx-3 font-semibold block rounded-lg px-3 py-2 leading-7 text-gray-900 hover:bg-gray-50",
                                        { "text-blue-900": pathName == item.href },
                                        { "text-gray-900": pathName != item.href }
                                    )}
                                    onClick={() => props.setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </Dialog.Panel>
        </Dialog>
    )
}