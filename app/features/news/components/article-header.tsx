import { formatDate } from '~/shared/lib/format'
import type { Article } from '../types'

export default function ArticleHeader({ article }: { article: Article }) {
    return (
        <div>
            <h1 className="text-pretty text-4xl md:text-5xl font-semibold leading-tight">
                {article.title}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-muted-foreground text-sm">
                <span className="font-medium text-primary">{article.author}</span>
                <span aria-hidden="true">•</span>
                <time dateTime="2025-10-14">{formatDate(article.date)}</time>
            </div>
            <figure className="mt-6">
                <video
                    className="w-full rounded-lg border border-border"
                    controls
                    preload="metadata"
                    playsInline
                    src={article.videoUrl}
                    width={1920}
                    height={1080}
                    autoPlay
                    muted
                >
                    Browser Anda tidak mendukung video HTML5.
                </video>
                <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                    Video: {article.videoTitle}
                </figcaption>
            </figure>
            <aside className="mt-8 rounded-md border border-border bg-card p-4">
                <h2 className="text-lg font-semibold">Fakta Singkat</h2>
                <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
                    {
                        article.facts.map((fact, index) => (
                            <li key={index}>{fact}</li>
                        ))
                    }
                </ul>
            </aside>
        </div>
    )
}
