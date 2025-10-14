import { Star } from "lucide-react"
import { cn } from "~/shared/lib/utils"
import type { Product } from "../types"
import { formatIDR } from "~/shared/lib/format"



export function ProductCard({
    product,
    className,
}: {
    product: Product
    className?: string
}) {
    const { name, price, rating, sold, location, imageAlt, image } = product
   

    return (
        <article
            className={cn(
                "group relative h-full overflow-hidden rounded-lg shadow-lg bg-white transition-shadow",
                "hover:shadow-md",
                className,
            )}
        >
            <div className="relative">
                <div className="aspect-square overflow-hidden">
                    <img
                        src={image || "/placeholder.svg"}
                        alt={imageAlt || name}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="space-y-2 p-3">
                <h2 className="line-clamp-2 text-sm md:text-[0.95rem] font-normal leading-5 text-foreground">{name}</h2>

                <div className="text-base md:text-lg font-semibold">{formatIDR(price)}</div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        {/* rating stars */}
                        {Array.from({ length: 5 }).map((_, i) => {
                            const active = i < Math.round(rating)
                            return (
                                <Star
                                    key={i}
                                    className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground/40")}
                                    style={active ? { fill: "currentColor" } : undefined}
                                    aria-hidden="true"
                                />
                            )
                        })}
                        <span className="ml-1">{rating.toFixed(1)}</span>
                    </div>
                    <span aria-hidden="true">•</span>
                    <span>{sold.toLocaleString("id-ID")} terjual</span>
                </div>

                <div className="text-xs text-muted-foreground">{location}</div>
            </div>
        </article>
    )
}
