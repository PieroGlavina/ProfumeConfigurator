import React, { useState } from 'react'
import {heroInfo, navLinks} from "../costants/index.js";
import CustomButton from "./CustomButton.jsx";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    // State for a simple mobile menu toggle
    const [isOpen, setIsOpen] = useState(false);

    useGSAP(() => {
        const heroTl = gsap.timeline();
        const heroSplit = new SplitText("#heroTitle", {type: "chars, words"});

        heroTl.fromTo("#navHeroBar", {y:-50}, {y:0, duration: 1, ease:"power2.out"})
        heroTl.fromTo("#heroVideo", {y:100, opacity:0}, {opacity: 1, y:0, duration: 1, ease:"power2.out"}, "<")
        heroTl.fromTo("#vertHeroBar", {x:50}, {x:0, duration: 1, ease:"power2.out"}, "<")
        heroTl.from(heroSplit.chars, {opacity: 0, yPercent: 100, duration: 1, ease: "expo.out", stagger: 0.06});
        heroTl.fromTo("#heroSubtitle", {opacity: 0, y:30}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out", delay:0.8}, "<")
        heroTl.fromTo("#heroCTA", {opacity: 0, y:30}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out"}, "<")
        heroTl.fromTo("#heroButton", {opacity: 0, y:30}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out", delay:0.25}, "<")
        heroTl.fromTo("#heroInfo", {opacity: 0, y:100}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out", delay:0.25}, "<")
        heroTl.fromTo("#heroInfoTitle", {opacity: 0, y:30}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out", delay: 0.25}, "<")
        heroTl.fromTo("#heroInfoDesc, #heroInfoLink", {opacity: 0, y:30}, {opacity: 1, y:0, duration: 0.5, ease:"power2.out"}, "<")


    }, []);


    return (
        <section className="relative w-full min-h-screen text-blue-950 bg-gradient-to-br from-blue-100 to-blue-300">

            {/* VERTICAL BAR */}
            <nav className="relative border-b border-white w-full h-20 flex items-center justify-between text-white" id="navHeroBar">

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
                        <a key={nav.id} href={nav.link} className="text-xl uppercase hover:text-blue-950 hover:underline hover:scale-110 transition-all">
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

                    <button className="bg-blue-950 w-20 h-20 flex-center cursor-pointer border-b border-l border-white">
                        <img src="/images/contact.png" alt="contact" className="w-8 h-8 hover:scale-120 transition-transform duration-300" />
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU OVERLAY */}
            <div className={`fixed inset-0 bg-blue-200 z-40 flex-col flex-center gap-8 border-b border-white transition-transform duration-500 ${isOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden`}>
                {navLinks.map((nav) => (
                    <a key={nav.id} href={nav.link} onClick={() => setIsOpen(false)} className="text-3xl font-vanta uppercase">
                        {nav.text}
                    </a>
                ))}
            </div>

            {/* VERTICAL BAR (Hidden on Mobile) */}
            <div className="hidden md:flex flex-col justify-end items-center gap-8 pb-10 absolute top-0 right-0 z-40 border-l border-white w-20 h-full" id="vertHeroBar">
                <p className="text-blue-950 uppercase text-xl font-bold cursor-pointer hover:scale-120 transition-transform duration-300">EN</p>
                <img src="/images/instagram.png" alt={"instagram"} className="h-5 w-5 cursor-pointer hover:scale-120 transition-transform duration-300"/>
                <img src="/images/tik-tok.png" alt={"tiktok"}  className="h-5 w-5 cursor-pointer hover:scale-120 transition-transform duration-300"/>
            </div>

            {/* MAIN SPACE */}
            <div className="relative w-full flex-center md:justify-end md:pr-40 pt-32 pb-20 md:pt-0 h-[calc(100vh-80px)]">

                <div className="flex flex-col items-center md:items-end md:mr-40 w-full px-6 md:px-10 z-20 ">
                    <div className="flex flex-col w-full md:w-fit max-w-4xl">

                        <h3 className="text-sm md:text-xl font-vanta self-center md:self-start uppercase tracking-widest text-blue-950" id="heroSubtitle">
                            Atelier Vanta
                        </h3>

                        <h1 className="text-5xl sm:text-7xl md:text-[8rem] uppercase font-vanta self-center md:self-start text-center md:text-left my-4 md:my-0" id="heroTitle">
                            Noir <span className="text-outline"> Impérial</span>
                        </h1>

                        <h3 className="text-xl md:text-4xl font-vanta self-center md:self-end text-center md:text-right md:-mt-6 opacity-80" id="heroCTA">
                            Unmistakably Yours
                        </h3>

                        <div className="self-center md:self-end mt-12" id="heroButton">
                            <CustomButton />
                        </div>
                    </div>
                </div>

                <div
                    className="absolute inset-0 z-0 w-full h-full flex items-center justify-center md:justify-start md:-ml-24"
                    id="heroVideo"
                >
                    <video
                        className="w-[80%] h-[80%] md:w-[70%] md:h-[70%] brightness-125 object-cover md:object-contain"
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
            <div
                className="hidden md:block absolute bottom-0 z-50 right-0 w-1/2 h-auto md:h-1/4 bg-blue-950/20 md:rounded-tl-3xl border-t border-l border-white/10 "
                id="heroInfo"
            >
                <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-16 p-6 md:p-6 h-full">
                    {heroInfo.map((info) => (
                        <div
                            key={info.id}
                            className="text-white font-vanta w-full md:w-[45%] lg:w-[35%] flex flex-col justify-between "
                        >
                            <div>
                                <p className="text-xl md:text-2xl uppercase mb-2 md:my-2" id="heroInfoTitle">
                                    {info.title}
                                </p>
                                <p className="text-sm md:text-base text-justify opacity-80 leading-relaxed mb-4" id="heroInfoDesc">
                                    {info.desc}
                                </p>
                            </div>

                            <a
                                className="text-lg md:text-xl text-white md:text-blue-950 uppercase underline cursor-pointer hover:scale-125 transition-transform duration-300 w-fit"
                                id="heroInfoLink"
                            >
                                Discover more...
                            </a>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Hero