import React, { useState } from 'react'
import { navLinks } from "../costants/index.js";
import CustomButton from "./CustomButton.jsx";

const Hero = () => {
    // State for a simple mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen bg-blue-200 overflow-hidden text-white">

            {/* VERTICAL BAR */}
            <nav className="relative z-50 border-b border-white w-full h-20 flex items-center justify-between">

                {/* LOGO */}
                <div className="h-full px-4 md:px-10 flex items-center">
                    <a href="/">
                        <h1 className="text-2xl md:text-3xl font-bold font-vanta hover:text-blue-400 transition-all">
                            ATELIER VANTA
                        </h1>
                    </a>
                </div>

                {/* NAV */}
                <div className="hidden md:flex gap-10 items-center font-vanta">
                    {navLinks.map((nav) => (
                        <a key={nav.id} href={nav.link} className="text-xl uppercase hover:text-blue-400 transition-colors">
                            {nav.text}
                        </a>
                    ))}
                </div>

                {/* MOBILE MENU TOGGLE & CONTACT BUTTON */}
                <div className="flex h-full">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden px-6 border-l border-white text-xl uppercase font-vanta"
                    >
                        {isOpen ? 'Close' : 'Menu'}
                    </button>

                    <button className="bg-blue-950 hover:bg-blue-600 w-20 h-20 flex items-center justify-center cursor-pointer transition-all border border-white group">
                        <img src="/images/contact.png" alt="contact" className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div className={`fixed inset-0 bg-blue-200 z-40 flex flex-col items-center justify-center gap-8 border-b border-white transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                {navLinks.map((nav) => (
                    <a key={nav.id} href={nav.link} onClick={() => setIsOpen(false)} className="text-3xl font-vanta uppercase">
                        {nav.text}
                    </a>
                ))}
            </div>

            {/* VERTICAL BAR (Hidden on Mobile) */}
            <div className="hidden md:block absolute top-0 right-0 border-l border-white w-20 h-full"></div>

            {/* MAIN SPACE */}
            <div className="relative w-full flex items-center justify-center md:justify-end md:pr-40 pt-32 pb-20 md:pt-0 h-[calc(100vh-80px)]">

                <div className="flex flex-col items-center md:items-end w-full px-6 md:px-10">
                    <div className="flex flex-col w-full md:w-fit max-w-4xl">

                        <h3 className="text-sm md:text-xl font-vanta self-center md:self-start uppercase tracking-widest text-blue-900">
                            Atelier Vanta
                        </h3>

                        <h1 className="text-5xl sm:text-7xl md:text-[8rem] uppercase font-vanta self-center md:self-start text-center md:text-left my-4 md:my-0">
                            Noir <span className="text-outline"> Impérial</span>
                        </h1>

                        <h3 className="text-xl md:text-4xl font-vanta self-center md:self-end text-center md:text-right md:-mt-6 opacity-80">
                            Unmistakably Yours
                        </h3>

                        <div className="self-center md:self-end mt-12">
                            <CustomButton />
                        </div>
                    </div>
                </div>
            </div>

            {/* DECORATIVE RECTANGLE */}
            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/4 md:h-1/3 bg-blue-950/20 rounded-tl-3xl sm:rounded-tl-3xl"></div>

        </section>
    )
}

export default Hero