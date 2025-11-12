import React from 'react'
import { article } from '../data/article'
import ArticleHeader from './article-header'
import ArticleBody from './article-body'

export default function Article() {
  return (
    <article className="container px-4 md:px-6 flex flex-col gap-10 md:gap-20 py-8">
      <ArticleHeader article={article} />
      <ArticleBody article={article} />
      <footer className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
        Artikel ini disusun oleh tim redaksi berdasarkan data resmi dan wawancara dengan narasumber terkait.
      </footer>
    </article>
  )
}
