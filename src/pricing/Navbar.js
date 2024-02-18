import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { themeChange } from "theme-change";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
    { name: "Testimony", href: "#testimony" },
    { name: "Product", href: "#pricing" },
    { name: "Features", href: "#features" },
    // { name: "Company", href: "#" },
];

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    // const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"));
    // useEffect(() => {
    //     themeChange(false);
    //     if (currentTheme === null) {
    //         if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    //             setCurrentTheme("dark");
    //         } else {
    //             setCurrentTheme("light");
    //         }
    //     }
    // }, []);
    return (
        <header className="fixed backdrop-blur-md inset-x-0 top-0 z-[9999] ">
            <nav className="flex  items-center justify-between p-6 lg:px-8 " aria-label="Global">
                <span className="flex lg:flex-1 text-2xl font-semibold leading-6 text-slate-50">NITRO</span>
                {/* <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">NITRO</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                    </div> */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-300"
                        onClick={() => setMobileMenuOpen(true)}>
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-slate-50">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-slate-50">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                    {/* <span className="flex lg:flex-1 text-2xl font-semibold leading-6 text-slate-50">NITRO</span> */}
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden z-[99999]" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-50" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">NITRO</span>
                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                        </a>
                        <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        onClick={() => {
                                            setMobileMenuOpen(false); // Close menu on click
                                            // Additional actions after navigation (if needed)
                                        }}
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-slate-50 hover:bg-gray-700">
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <a
                                    onClick={() => {
                                        setMobileMenuOpen(false); // Close menu on click
                                        // Additional actions for "Log in" link (if needed)
                                    }}
                                    href="#"
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-slate-50 hover:bg-gray-700">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
};

export default Navbar;
