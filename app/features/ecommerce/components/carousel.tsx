import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { Banner } from "../types"

export function BannerCarousel({ banners }: { banners: Banner[] }) {
    const [index, setIndex] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)
    const total = banners.length
    const intervalMs = 4500

    const goTo = (i: number) => {
        setIndex((prev) => {
            const next = (i + total) % total
            return next
        })
    }

    const next = () => goTo(index + 1)
    const prev = () => goTo(index - 1)

    useEffect(() => {
        // autoplay
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            setIndex((i) => (i + 1) % total)
        }, intervalMs)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [total])

    return (
        <div className="container px-4 relative w-full" aria-label="Carousel banner promosi">
            <div className="overflow-hidden rounded-lg border bg-card">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${index * 100}%)` }}
                >
                    {banners.map((b, i) => (
                        <figure key={i} className="min-w-full">
                            <div className="aspect-[16/5] w-full h-full relative">
                                <img
                                    src={b.src}
                                    alt={b.alt}
                                    className="h-full w-full object-cover"
                                    loading={i === 0 ? "eager" : "lazy"}
                                    decoding="async"
                                />
                            </div>
                        </figure>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <button
                type="button"
                aria-label="Sebelumnya"
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white border p-2 text-black shadow backdrop-blur transition hover:bg-background"
            >
                {/* chevron-left */}
                <ChevronLeft />
                <span className="sr-only">Sebelumnya</span>
            </button>
            <button
                type="button"
                aria-label="Berikutnya"
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white border p-2 text-black shadow backdrop-blur transition hover:bg-background"
            >
                {/* chevron-right */}
                <ChevronRight />
                <span className="sr-only">Berikutnya</span>
            </button>

            {/* Indicators */}
            <div className="pointer-events-none absolute inset-x-0 bottom-2 flex items-center justify-center gap-2">
                {banners.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        aria-label={`Ke slide ${i + 1}`}
                        onClick={() => goTo(i)}
                        className={`pointer-events-auto h-2 w-2 rounded-full border transition ${i === index ? "bg-foreground/80" : "bg-background/70"
                            }`}
                    />
                ))}
            </div>
        </div>
    )
}
