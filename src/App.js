// class App extends React.Component {
//     state = {
//         name: "",
//     };

//     changeName = (e) => {
//         this.setState({
//             name: e.target.value,
//         });
//     };

//     render() {
//         return (
//             <div className="grid grid-cols-2 gap-4 h-screen place-items-center">
//                 <div className="bg-gray-50">
//                     <input className="p-2 rounded-md ring-1 ring-orange-300" placeholder="Input" type="text" value={this.state.name} onChange={this.changeName} />
//                 </div>
//                 <div className="bg-gray-50">
//                     <h1 className="p-2 rounded-md ring-1 ring-orange-300">{this.state.name}</h1>
//                 </div>
//             </div>
//         );
//     }
// }

import "./App.css";
import React from "react";
import HeroSection from "./pricing/HeroSection";
import BasicPricing from "./menu/BasicPricing";
import Testimony from "./menu/Testimony";
import Navbar from "./pricing/Navbar";
import Features from "./menu/Features";

import { ChevronUpIcon } from "@heroicons/react/24/outline";
import Tos from "./pricing/Tos";

window.onscroll = function () {
    const header = document.querySelector("header");
    const toTop = document.querySelector("#to-top");
    if (window.scrollY > header.offsetTop) {
        toTop.classList.remove("hidden");
        toTop.classList.add("flex");
    } else {
        toTop.classList.remove("flex");
        toTop.classList.add("hidden");
    }
};

export default function App() {
    return (
        <div className="bg-slate-900">
            <Navbar />
            {/* Hero Section */}
            <HeroSection />
            {/* Terms and Conditions */}
            {/* <Tos/> */}
            {/* Testimony */}
            <Testimony />
            {/* Pricing Section */}
            <BasicPricing />
            {/* Pricing Section 2 */}
            {/* <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks pricing</h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id
                            ut laborum.
                        </p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                            <p className="mt-6 text-base leading-7 text-gray-600">
                                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur
                                quidem assumenda.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
                                <div className="h-px flex-auto bg-gray-100" />
                            </div>
                            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                {includedFeatures.map((feature) => (
                                    <li key={feature} className="flex gap-x-3">
                                        <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-600">Pay once, own it forever</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                    </p>
                                    <a
                                        href="#"
                                        className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        Get access
                                    </a>
                                    <p className="mt-6 text-xs leading-5 text-gray-600">
                                        Invoices and receipts available for easy company reimbursement
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <Features />
            {/* Back To Top */}
            <a href="#" className="fixed z-[9999] hidden bottom-8 right-8 transition-all  delay-100 ease-in-out duration-200" id="to-top">
                <div className="bg-gray-300 rounded-full h-7 w-7 grid place-items-center">
                    <ChevronUpIcon className="h-5 w-5 text-indigo-600" />
                </div>
            </a>
        </div>
    );
}
