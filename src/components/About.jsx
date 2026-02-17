import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art',
                start: "top top",
                end: '+=200%',
                scrub: 1.5,
                pin: true,
                anticipatePin: 1,
            }
        });

        maskTimeline
            .to('.will-fade', {
                opacity: 0,
                y: -100,
                stagger: 0.1,
                ease: 'power2.inOut'
            })
            .to('.masked-img-container', {
                // We scale the container AND the mask
                scale: 1.5,
                '--mask-size': '800%',
                duration: 2,
                ease: 'power2.inOut'
            }, "-=0.5")
            .to('#masked-content', {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power2.out'
            });
    }, { dependencies: [isMobile] });

    return (
        <section
            id="art"
            className="relative flex items-center justify-center w-full h-screen bg-gradient-to-tr from-blue-100 to-blue-300"
        >

            <div className="absolute inset-0 flex items-center justify-center z-0 over">
                <div
                    className="masked-img-container w-[90vw] h-[60vh] md:w-full md:h-full rounded-2xl"
                    style={{
                        WebkitMaskImage: 'url("/images/mask-img.png")',
                        maskImage: 'url("/images/mask-img.png")',
                        maskRepeat: 'no-repeat',
                        maskPosition: 'center',
                        maskSize: 'var(--mask-size, 50%)',
                        WebkitMaskSize: 'var(--mask-size, 40%)',
                        maskOrigin: 'content-box'
                    }}
                >
                    <img
                        src="/images/under.png"
                        alt="Atelier Reveal"
                        className="w-full h-full object-cover brightness-90"
                    />
                </div>
            </div>

            {/* CONTENT LAYER */}
            <div className="container mx-auto relative z-10 flex flex-col items-center justify-center h-full py-20 pointer-events-none">

                <h2 className="will-fade text-6xl md:text-8xl font-vanta">
                    Discover the <span className="text-outline"> art of becoming</span>
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center w-full px-6 gap-20 text-white font-vanta will-fade mt-36">
                    <p className="max-w-xl text-white uppercase tracking-widest text-lg md:text-2xl{/**/} text-center">
                        A fragrance should not follow trends — it should define presence. We craft scents with clarity and restraint, allowing character to emerge with quiet confidence.
                    </p>
                </div>


                <div id="masked-content" className="opacity-0 items-center text-center translate-y-20 pb-52">
                    <h3 className="text-4xl md:text-7xl font-vanta text-white mb-4 uppercase">
                        Our <span className="text-outline">Story</span>
                    </h3>
                    <p className="max-w-xl text-gray-400 uppercase tracking-widest text-xs md:text-sm">
                        Born from a family legacy of craftsmanship, our house was founded on a simple belief: true luxury lies in precision and intention. We blend heritage techniques with modern refinement to create fragrances that are not trends, but signatures — personal, enduring, unmistakable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Art;