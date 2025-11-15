import { formatDate } from '~/shared/lib/format'
import { cn } from '~/shared/lib/utils'
import type { Story } from '../types'

export default function StoryCard({ story }: { story: Story }) {
    const aspectClass =
        story.size === '9 / 16'
            ? 'aspect-[9/16]'
            : story.size === '16 / 9'
                ? 'aspect-[16/9]'
                : story.size === '1 / 1'
                    ? 'aspect-[1/1]'
                    : 'aspect-square'

    return (
        <div className="w-full flex flex-col gap-3">
            <div className={cn(aspectClass, 'relative min-h-48 md:min-h-64 2xl:min-h-80 w-full')}>
                <img
                    src={story.src}
                    alt={story.title}
                    className="absolute object-cover rounded-lg w-full h-full"
                />
            </div>

            <span className='text-lg'>{story.title}</span>

            <div className='flex flex-row md:flex-col lg:flex-row gap-2.5 text-sm'>
                <span>{story.category}</span>
                <div className='flex gap-2.5'>
                    <span className='text-gray-500'>{formatDate(story.date)}</span>
                    <span className='text-gray-500'>{story.minuteRead} menit baca</span>
                </div>

            </div>
        </div>
    )
}

