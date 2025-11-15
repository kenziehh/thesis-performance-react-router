"use client"

import React, { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SectionHeader from "./section-header"
import BusinessCard from "./business-card"
import type { Business } from "../types"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function BusinessSection({ business }: { business: Business[] }) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(
        () => {
            const scroller = document.querySelector("[data-scroll-container]")

            gsap.from(sectionRef.current, {
                opacity: 0,
                y: 60,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scroller: scroller || window,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            })

            cardRefs.current.forEach((card, i) => {
                if (!card) return

                const isMobile = window.innerWidth < 1024
                const direction = isMobile ? 80 : 0

                gsap.from(card, {
                    opacity: 0,
                    y: isMobile ? 0 : 50,
                    x: direction,
                    scale: 0.95,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        scroller: scroller || window,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                })
            })
        },
        { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="py-8 flex flex-col gap-6 p-6 container bg-white"
        >
            <SectionHeader title="OpenAI untuk Bisnis" href="/business" />

            <div className="hidden lg:grid grid-cols-3 gap-6">
                {business.map((b, i) => (
                    <div key={b.title} ref={(el) => { (cardRefs.current[i] = el) }}>
                        <BusinessCard business={b} />
                    </div>
                ))}
            </div>

            <div className="flex lg:hidden gap-4 w-full overflow-x-auto pb-4">
                {business.map((b, i) => (
                    <div
                        key={b.title}
                        ref={(el) => { (cardRefs.current[i] = el) }}
                        className="flex-shrink-0 w-[75%] sm:w-[60%] md:w-[45%]"
                    >
                        <BusinessCard business={b} />
                    </div>
                ))}
            </div>
        </section>
    )
}
