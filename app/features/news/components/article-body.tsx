import type { Article } from '../types'


export default function ArticleBody({ article }: { article: Article }) {

    return (
        <section className="prose max-w-none prose-p:leading-relaxed prose-headings:scroll-mt-20">
            <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
            {article.subheads.map((section, index) => (
                <div key={index} className="mt-8">
                    <h2 className="mt-8 text-2xl font-semibold text-primary">{section.heading}</h2>
                    {section.paragraphs.map((p, i) => (
                        <p key={i} className="mt-2 text-justify">
                            {p}
                        </p>
                    ))}
                </div>
            ))}
        </section>
    )
}
