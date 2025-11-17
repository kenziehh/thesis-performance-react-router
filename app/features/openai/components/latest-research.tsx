import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import type { Research } from "../types"
import ResearchCard from "./research-card"
import SectionHeader from "./section-header"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function LatestResearch({ researchs }: { researchs: Research[] }) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const cardRefs = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const scroller = document.querySelector("[data-scroll-container]")

        if (!sectionRef.current) return

        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 20 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    scroller: scroller || window,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            }
        )

        // Animasi kartu: fade + sedikit scale
        cardRefs.current.forEach((card, i) => {
            if (!card) return

            gsap.fromTo(
                card,
                { opacity: 0, y: 30, scale: 0.95 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6,
                    delay: i * 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        scroller: scroller || window,
                        start: "top 90%",
                        toggleActions: "play none none reverse",
                    },
                }
            )
        })
    }, { scope: sectionRef })

    return (
        <section
            ref={sectionRef}
            className="container py-8 flex flex-col gap-6 p-6 bg-white overflow-hidden"
        >
            <SectionHeader title="Riset Terbaru" href="/research" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {researchs.map((research, i) => (
                    <div key={research.title} ref={(el) => { (cardRefs.current[i] = el) }}>
                        <ResearchCard research={research} />
                    </div>
                ))}
            </div>
        </section>
    )
}
