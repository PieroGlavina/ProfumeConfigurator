import React, { useState } from 'react'
import {heroInfo, navLinks} from "../costants/index.js";
import CustomButton from "./CustomButton.jsx";

const Hero = () => {
    // State for a simple mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="relative w-full min-h-screen text-blue-950 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-300">

            {/* VERTICAL BAR */}
            <nav className="relative z-50 border-b border-white w-full h-20 flex items-center justify-between text-white">

                {/* LOGO */}
                <div className="h-full px-4 md:px-10 flex items-center">
                    <a href="/">
                        <h1 className="text-2xl md:text-3xl font-bold font-vanta hover:text-blue-950 transition-all">
                            ATELIER VANTA
                        </h1>
                    </a>
                </div>

                {/* NAV */}
                <div className="hidden md:flex gap-10 items-center font-vanta">
                    {navLinks.map((nav) => (
                        <a key={nav.id} href={nav.link} className="text-xl uppercase hover:text-blue-950 transition-colors hover:underline under">
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

                    <button className="bg-blue-950 w-20 h-20 flex items-center justify-center cursor-pointer transition-all border-b border-l border-white group">
                        <img src="/images/contact.png" alt="contact" className="w-8 h-8 hover:scale-120 transition-transform duration-300" />
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

                <div className="flex flex-col items-center md:items-end w-full px-6 md:px-10 z-20">
                    <div className="flex flex-col w-full md:w-fit max-w-4xl">

                        <h3 className="text-sm md:text-xl font-vanta self-center md:self-start uppercase tracking-widest text-blue-950">
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

                <div className="absolute inset-0 z-0 w-full h-full flex items-center -ml-24" id="hero-video">
                    <video
                        className="w-[70%] h-[70%] brightness-125"
                        playsInline
                        autoPlay
                        muted
                        disablePictureInPicture
                    >
                        <source src="/videos/hero.mov" type='video/mp4; codecs="hvc1"' />
                        <source src="/videos/hero.webm" type="video/webm"/>
                    </video>
                </div>
            </div>

            {/* DECORATIVE RECTANGLE */}
            <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-1/5 md:h-1/4 bg-blue-950/20 rounded-tl-3xl sm:rounded-tl-3xl flex items-center justify-between">
                <div className="flex items-center justify-start gap-5 w-fit">
                    {heroInfo.map((heroInfo) => (
                        <div key={heroInfo.id} className="text-white font-vanta mx-4 w-1/3">
                            <p className="text-2xl uppercase">{heroInfo.title}</p>
                            <p className="text text-justify">{heroInfo.desc}</p>

                            <a className="text-xl text-blue-950 opacity-80 underline pt-2">Discover more -></a>
                        </div>
                    ))}
                </div>

                <div className="h-full w-25 flex flex-col items-center justify-center gap-5">
                    <p className="text-blue-950 uppercase text-xl font-bold cursor-pointer">EN</p>
                    <img src="/images/instagram.png" alt={"instagram"} className="h-8 w-8 cursor-pointer"/>
                    <img src="/images/tik-tok.png" alt={"tiktok"}  className="h-8 w-8 cursor-pointer"/>


                </div>

            </div>

        </section>
    )
}

export default Hero