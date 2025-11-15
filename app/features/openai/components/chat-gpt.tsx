"use client"

import { ArrowUp } from "lucide-react"
import { useState, useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { Badge } from "~/shared/components/badge"

export function ChatGPT() {
  const [message, setMessage] = useState("")
  const titleRef = useRef<HTMLHeadingElement | null>(null)
  const badgesRef = useRef<(HTMLElement | null)[]>([])

  useGSAP(() => {
    const titleText = "Apa yang bisa saya bantu?"
    const titleElement = titleRef.current

    if (titleElement) {
      titleElement.innerHTML = titleText
        .split("")
        .map(
          (char) =>
            `<span style="display: inline-block; opacity: 0; transform: translateY(10px); white-space: pre;">${char}</span>`,
        )
        .join("")

      const chars = titleElement.querySelectorAll("span")
      gsap.to(chars, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        stagger: 0.05,
        ease: "back.out(1.7)",
      })
    }

    if (badgesRef.current.length > 0) {
      gsap.fromTo(
        badgesRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "back.out(1.7)",
          delay: 0.8,
        },
      )

      gsap.to(badgesRef.current, {
        y: -10,
        duration: 0.6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.1,
        delay: 1.4,
      })
    }

  }, { scope: titleRef }
  )

  const suggestions = [
    "Pelajari tentang ChatGPT Business",
    "Cari dengan ChatGPT",
    "Berbicara dengan ChatGPT",
    "Riset",
    "Lainnya",
  ]

  return (
    <div className="flex-1 min-h-screen flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <h1 ref={titleRef} className="text-3xl font-semibold text-center text-foreground mb-8">
          Apa yang bisa saya bantu?
        </h1>

        <div className="relative mb-8">
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Redigez une note de remerciement"
            className="w-full px-6 py-4 bg-white border border-gray-300 rounded-2xl text-foreground placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent transition pr-14"
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-lg transition">
            <ArrowUp className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="flex flex-wrap gap-3 xl:gap-6 justify-center">
          {suggestions.map((suggestion, index) => (
            <div
              key={suggestion}
              ref={(el) => {
                if (el) badgesRef.current[index] = el
              }}
              className="inline-block"
            >
              <Badge
                className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 transition font-medium"
              >
                {suggestion}
              </Badge>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
