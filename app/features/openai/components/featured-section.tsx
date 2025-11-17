import { useEffect, useRef, useState } from "react"
import { formatDate } from "~/shared/lib/format"
import type { Featured } from "../types"
  
export default function FeaturedSection({
  pageRef,
  title,
  category,
  src,
  minuteRead,
  featuredCards
}: {
  pageRef: React.RefObject<HTMLDivElement>,
  title: string
  category: string
  src: string
  minuteRead: number
  featuredCards: Featured[]
}) {
  const rightRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  const [active, setActive] = useState(false)

  useEffect(() => {
    const sec = sectionRef.current
    if (!sec) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.intersectionRatio >= 0.7)
      },
      {
        threshold: [0, 0.3, 0.5, 0.7, 1],
      }
    )

    observer.observe(sec)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const page = pageRef.current
    const right = rightRef.current
    if (!page || !right) return

    const onWheel = (e: WheelEvent) => {
      if (!active) return 

      const delta = e.deltaY
      const atTop = right.scrollTop <= 0
      const atBottom =
        right.scrollTop + right.clientHeight >= right.scrollHeight - 2

      if (delta > 0) {
        if (!atBottom) {
          e.preventDefault()
          right.scrollTop += delta
        }
        return
      }

      if (delta < 0) {
        if (!atTop) {
          e.preventDefault()
          right.scrollTop += delta
        }
        return
      }
    }

    page.addEventListener("wheel", onWheel, { passive: false })
    return () => page.removeEventListener("wheel", onWheel)
  }, [active, pageRef])



  return (
    <div className="max-w-full container w-full bg-white py-6" ref={sectionRef}>
      <div className="p-6 flex gap-10 flex-col lg:flex-row lg:h-screen lg:overflow-hidden">
        <div className="hidden w-full md:flex flex-col gap-4 h-full ">
          <div className="relative w-full min-h-[600px]">
            <img
              src={src}
              alt="Featured Image"
              className="max-h-[600px] object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl md:text-3xl lg:text-5xl max-w-3xl">{title}</h2>
            <div className="flex gap-3 ">
              <span>{category}</span>
              <span className="text-gray-500">{minuteRead} menit baca</span>
            </div>
          </div>
        </div>

        <div ref={rightRef}  className="hidden lg:block w-full lg:w-2/5 overflow-y-auto" >
          <div className="">
            <div className="md:hidden mb-8">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-lg">
                <img
                  src={src}
                  alt="Featured Image"
                  
                  className="max-h-[400px] object-cover w-full h-full"
                />              </div>
              <h2 className="text-2xl font-bold mb-2">{title}</h2>
              <p className="text-sm text-gray-600">
                {category} <span className="font-semibold">{minuteRead} menit baca</span>
              </p>
            </div>

            <div className="space-y-16">
              {featuredCards.map((card, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={card.src}
                      alt={card.title}
                      
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-black text-xl xl:text-3xl mb-2">{card.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{card.category}</span>
                    {card.date && <span>{formatDate(card.date)}</span>}
                  </div>
                  {card.minuteRead && <p className="text-xs text-gray-500 mt-1">{card.minuteRead} menit baca</p>}
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="w-fit lg:hidden" style={{ scrollBehavior: "smooth" }}>
          <div className="md:flex md:flex-col gap-8">
            <div className="md:hidden mb-8">
              <div className="relative rounded-2xl mb-4 shadow-lg overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
                <img
                  src={src}
                  alt="Featured Image"
                  className="w-full h-full object-cover"
                  
                />
              </div>
              <div className="flex flex-col gap-4">
                <h2 className="text-3xl lg:text-5xl ">{title}</h2>
                <div className="flex gap-3 ">
                  <span>Produk</span>
                  <span className="text-gray-500">{minuteRead} menit baca</span>
                </div>
              </div>
            </div>

            <div className="space-y-6 gap-x-6 md:grid md:grid-cols-3">
              {featuredCards.map((card, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-lg mb-4 shadow-md hover:shadow-lg transition-shadow">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{card.title}</h3>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{card.category}</span>
                    {card.date && <span>{card.date}</span>}
                  </div>
                  {card.minuteRead && <p className="text-xs text-gray-500 mt-1">{card.minuteRead} menit baca</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}