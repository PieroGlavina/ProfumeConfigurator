import React from 'react'
import { navLinks } from "../costants/index.js";
import CustomButton from "./CustomButton.jsx";

const Hero = () => {
    return (
        <section className="relative w-full h-screen bg-blue-200 overflow-hidden text-white">

            {/*HORRIZONTAL BAR*/}
            <nav className="relative z-10 border-b border-white w-full h-20 flex items-center justify-between">

                {/*LOGO SPACE*/}
                <div className="h-full px-8 flex items-center">
                    <a href="/">
                        <h1 className="text-5xl font-bold font-vanta cursor-pointer hover:text-blue-400">
                            Atelier Vanta
                        </h1>
                    </a>

                </div>

                {/*MENU SPACE*/}
                <div className="flex gap-10 items-center font-vanta">
                    {navLinks.map((nav) => (
                        <a key={nav.id} href={nav.link} className="text-xl tracking-widest hover:text-blue-400 transition-colors">
                            {nav.text}
                        </a>
                    ))}
                </div>

                {/*CONTACT SPACE*/}
                <button className="bg-blue-800/2 hover:bg-blue-600 w-20 h-20 flex items-center justify-center cursor-pointer transition-all border border-white">
                    <img src="/images/contact.png" alt="contact" className="w-8 h-8"/>
                </button>
            </nav>

            {/*VERTICAL BAR*/}
            <div className="absolute top-0 right-0 border-l border-white w-20 h-full"></div>


            {/*MAIN SPACE*/}

            <div className="w-full h-full">

                <div className="flex flex-col items-end w-full px-10 mt-44">

                    <div className="flex flex-col w-fit ">

                        <h3 className="text-xl font-vanta self-start uppercase">
                            Atelier Vanta
                        </h3>

                        <h1 className="text-8xl uppercase font-vanta self-start leading-none">
                            Noir <span className="text-outline"> Impérial</span>
                        </h1>

                        <h3 className="text-3xl font-vanta self-end text-right -mt-5">
                            Unmistakably Yours
                        </h3>

                        <div className="self-end mt-8">
                            <CustomButton />
                        </div>

                    </div>
                </div>


            </div>


            {/*RECTANGLE IN BOTTON RIGHT*/}
            <div className="absolute bottom-0 right-0 w-1/2 h-1/3 bg-black/20 rounded-tl-3xl"></div>

        </section>
    )
}

export default Hero