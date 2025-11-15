"use client"

import React, { useEffect, useRef } from "react"
import type { Story } from "../types"
import SectionHeader from "./section-header"
import StoryCard from "./story-card"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger,useGSAP)
}

export default function StorySection({ stories }: { stories: Story[] }) {
    const sectionRef = useRef<HTMLDivElement | null>(null)
    const storyRefs = useRef<(HTMLDivElement | null)[]>([])

    useGSAP(() => {
        const scroller = document.querySelector("[data-scroll-container]")
        if (!sectionRef.current) return

        gsap.from(sectionRef.current, {
            opacity: 0,
            rotateX: 10,
            scale: 0.9,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
                trigger: sectionRef.current,
                scroller: scroller || window,
                start: "top 85%",
                toggleActions: "play none none reverse",
            },
        })

        storyRefs.current.forEach((story, i) => {
            if (!story) return
            gsap.from(story, {
                opacity: 0,
                y: 60,
                duration: 0.9,
                delay: i * 0.1,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: story,
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
            className="container max-w-full py-8 flex-1 flex flex-col gap-6 p-6 bg-white overflow-hidden"        >
            <SectionHeader title="Kisah" href="/news" />

            <div className="hidden md:block w-full">
                <div className="columns-3 gap-6">
                    {stories.map((story, i) => (
                        <div
                            key={story.title}
                            ref={(el) => { storyRefs.current[i] = el }}
                            className="break-inside-avoid mb-6"
                        >
                            <StoryCard story={story} />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex md:hidden gap-4 w-full max-w-[90vw] sm:max-w-full overflow-x-auto -mb-4">
                {stories.map((story, i) => (
                    <div
                        key={story.title}
                        ref={(el) => { storyRefs.current[i] = el }}
                        className="flex-shrink-0 w-[75%]"
                    >
                        <StoryCard story={story} />
                    </div>
                ))}
            </div>
        </section>
    )
}
