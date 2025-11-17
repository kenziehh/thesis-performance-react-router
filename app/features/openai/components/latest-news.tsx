import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useRef } from "react"
import type { News } from "../types"
import NewsCard from "./news-card"
import SectionHeader from "./section-header"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP)
}

export default function LatestNews({ news }: { news: News[] }) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const cardsRef = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const scroller = document.querySelector('[data-scroll-container]')

        if (!sectionRef.current) return

        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                scroller: scroller || window,
                start: "top 80%",
                toggleActions: "play none none reverse",
            },
        })

        cardsRef.current.forEach((card, i) => {
            if (!card) return
            gsap.from(card, {
                opacity: 0,
                y: 40,
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
    }, { scope: sectionRef }
    )

    return (
        <section
            ref={sectionRef}
            className="container py-8 flex flex-col gap-6 p-6 bg-white"
        >
            <SectionHeader title="Berita Terbaru" href="/news" />
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-4 gap-x-6">
                {news.map((item, i) => (
                    <div
                        key={item.title}
                        ref={(el) => { cardsRef.current[i] = el }}
                    >
                        <NewsCard news={item} />
                    </div>
                ))}
            </div>
        </section>
    )
}
