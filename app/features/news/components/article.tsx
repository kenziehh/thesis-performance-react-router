import type { Article } from '../types'
import ArticleBody from './article-body'
import ArticleHeader from './article-header'

export default function Article({ article }: { article: Article }) {
  return (
    <article className="container px-4 md:px-6 flex flex-col gap-10 md:gap-20 py-8">
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
    </article>
  )
}
