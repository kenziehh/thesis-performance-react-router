import { Link } from 'react-router'
import Badge from '~/shared/components/badge'

export default function CategorySection({categories}: {categories: string[]}) {
    return (
        <section className={"container  px-4 py-10 md:py-20"} aria-label="Kategori populer">
            <div className="mb-3 md:mb-4">
                <h2 className="text-pretty text-lg md:text-3xl font-semibold tracking-tight">Kategori Populer</h2>
            </div>
            <div className="relative">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 [scrollbar-width:thin]">
                    {categories.map((c) => (
                        <Badge className='hover:bg-black hover:text-white'
                            key={c}
                        >
                            <Link to={`/ecommerce/${c.toLowerCase().replace(/\s+/g, '-').replace(/-&-/g, '-').replace(/&/g, '')}`} prefetch={"none"}>{c}</Link>
                        </Badge>
                    ))}
                </div>
            </div>
        </section>
    )
}
