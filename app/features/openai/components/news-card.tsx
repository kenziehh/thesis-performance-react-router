import { formatDate } from '~/shared/lib/format'
import type { News } from '../types'

export default function NewsCard({ news }: { news: News }) {
    return (
        <div className='flex gap-3 items-center '>
            <div className='relative aspect-square h-32 md:h-48'>
                <img alt={news.title} src={news.src} className='rounded-xl w-full h-full' decoding="async" loading="lazy" />
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-sm md:text-lg line-clamp-3">{news.title}</h2>
                <div className="flex gap-3 text-xs md:text-sm">
                    <span className=''>{news.category}</span>
                    <span className="text-gray-500">{formatDate(news.date)}</span>
                </div>
            </div>
        </div>
    )
}
