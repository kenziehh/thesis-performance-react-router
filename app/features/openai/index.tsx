"use client"

import { useRef, useState, type RefObject } from "react"
import { Navbar } from "./components/navbar"
import { Sidebar } from "./components/sidebar"

import { FeaturedSection } from "./components/featured-section"

import LatestNews from "./components/latest-news"
import StorySection from "./components/story-section"
import LatestResearch from "./components/latest-research"
import BusinessSection from "./components/business-section"
import CTA from "./components/cta"
import { Footer } from "./components/footer"

import { featuredCards, mainFeatured } from "./data/featured"
import { newsCards } from "./data/news"
import { storyCards } from "./data/story"
import { researchCards } from "./data/research"
import { businessCards } from "./data/business"
import { ChatGPT } from "./components/chat-gpt"

export default function HomeOpenAI() {
    const [sidebarMobileOpen, setSidebarMobileOpen] = useState(false)
    const [sidebarDesktopOpen, setSidebarDesktopOpen] = useState(true)

    const pageRef = useRef<HTMLDivElement>(null)

    return (
        <div className="h-screen flex bg-white">
            <div className="flex-1 flex flex-col">
                <Navbar
                    onSidebarMobileToggle={() => setSidebarMobileOpen(!sidebarMobileOpen)}
                    onSidebarDekstopToggle={() =>
                        setSidebarDesktopOpen(!sidebarDesktopOpen)
                    }
                    isSidebarDekstopOpen={sidebarDesktopOpen}
                />

                <div className="flex flex-row">
                    <Sidebar
                        isSidebarDekstopOpen={sidebarDesktopOpen}
                       
                        onSidebarMobileToggle={() =>
                            setSidebarMobileOpen(!sidebarMobileOpen)
                        }
                        isSidebarMobileOpen={sidebarMobileOpen}
                    />

                    <div
                        ref={pageRef}
                        data-scroll-container
                        className="flex-1 overflow-y-auto h-screen md:max-w-[80vw]"
                    >
                        <ChatGPT />
                        <FeaturedSection
                            pageRef={pageRef as RefObject<HTMLDivElement>}
                            title={mainFeatured.title}
                            category={mainFeatured.category}
                            minuteRead={mainFeatured.minuteRead}
                            src={mainFeatured.src}
                            featuredCards={featuredCards}
                        />

                        <LatestNews news={newsCards} />
                        <StorySection stories={storyCards} />
                        <LatestResearch researchs={researchCards} />
                        <BusinessSection business={businessCards} />
                        <CTA />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}
