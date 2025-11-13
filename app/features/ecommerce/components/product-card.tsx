import { Star } from "lucide-react"
import type { Product } from "../types"
import { cn } from "~/shared/lib/utils"
import { formatIDR } from "~/shared/lib/format"



export function ProductCard({
    product,
    className,
}: {
    product: Product
    className?: string
}) {


    return (
        <article
            className={cn(
                "group relative h-full overflow-hidden rounded-lg bg-white transition-shadow",
                className,
            )}
        >
            <div className="relative">
                <div className="aspect-square overflow-hidden">
                    <img
                        loading="lazy"
                        decoding="async"
                        src={product.src}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                    />
                </div>
            </div>

            <div className="space-y-2 p-3">
                <h2 className="line-clamp-2 text-sm md:text-[0.95rem] font-normal leading-5 text-foreground">{product.name}</h2>

                <div className="text-base md:text-lg font-semibold">{formatIDR(product.price)}</div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                        {/* rating stars */}
                        {Array.from({ length: 5 }).map((_, i) => {
                            const active = i < Math.round(product.rating)
                            return (
                                <Star
                                    key={i}
                                    className={cn("h-4 w-4", active ? "text-primary" : "text-muted-foreground/40")}
                                    style={active ? { fill: "currentColor" } : undefined}
                                    aria-hidden="true"
                                />
                            )
                        })}
                        <span className="ml-1">{product.rating.toFixed(1)}</span>
                    </div>
                    <span aria-hidden="true">•</span>
                    <span>{product.sold.toLocaleString("id-ID")} terjual</span>
                </div>

                <div className="text-xs text-muted-foreground">{product.location}</div>
            </div>
        </article>
    )
}
