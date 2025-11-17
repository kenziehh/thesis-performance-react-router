import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { useRef } from "react"
import { Link } from "react-router"

if (typeof window !== "undefined") {
    gsap.registerPlugin(TextPlugin, ScrollTrigger, useGSAP)
}

export default function CTA() {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const titleRef = useRef<HTMLHeadingElement | null>(null)
    const buttonRef = useRef<HTMLAnchorElement | null>(null)

    useGSAP(
        () => {
            const scroller = document.querySelector("[data-scroll-container]")

            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scroller: scroller || window,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            })

            gsap.fromTo(
                titleRef.current,
                { text: "" },
                {
                    text: "Mulai dengan ChatGPT",
                    duration: 2.5,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        scroller: scroller || window,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            )

            gsap.from(buttonRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
                delay: 1.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scroller: scroller || window,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            })
        },
        { scope: sectionRef }
    )

    return (
        <section ref={sectionRef} className="container w-full bg-gray-100 py-32 px-4">
            <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center">
                <h2
                    ref={titleRef}
                    className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
                >
                </h2>
                <Link
                    ref={buttonRef}
                    to="/download"
                    prefetch="none"
                    className="px-6 py-2 bg-gray-200 text-black rounded-2xl hover:bg-gray-300 transition-colors"
                >
                    Unduh
                </Link>
            </div>
        </section>
    )
}
