import React from 'react'
import ArticleBody from '../components/article-body'

export default function Article() {
  return (
    <article className="mx-auto max-w-3xl px-4 md:px-6 py-8">
      <h1 className="text-pretty text-4xl md:text-5xl font-semibold leading-tight">
        Analisis Kebijakan Terbaru: Dampak Ekonomi dan Sosial dalam 12 Bulan Kedepan
      </h1>

      <div className="mt-3 flex items-center gap-3 text-muted-foreground text-sm">
        <span className="font-medium text-primary">Redaksi</span>
        <span aria-hidden="true">•</span>
        <time dateTime="2025-10-14">14 Oktober 2025</time>
        <span aria-hidden="true">•</span>
        <span>Jakarta</span>
      </div>

      <figure className="mt-6">
        <video
          className="w-full rounded-lg border border-border"
          controls
          preload="metadata"
          playsInline
          poster="/images/news-poster.jpg"
          width={1920}
          height={1080}
        >
          <source src="/videos/news-clip.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video HTML5.
        </video>
        <figcaption className="mt-2 text-center text-xs text-muted-foreground">
          Video: Cuplikan liputan terkait kebijakan terbaru (1080p).
        </figcaption>
      </figure>

      <aside className="mt-8 rounded-md border border-border bg-card p-4">
        <h2 className="text-lg font-semibold">Fakta Singkat</h2>
        <ul className="mt-2 list-disc pl-5 text-sm text-muted-foreground">
          <li>Kebijakan berdampak pada sektor UMKM dan konsumsi rumah tangga.</li>
          <li>Evaluasi triwulanan dijadwalkan untuk memantau indikator utama.</li>
          <li>Kolaborasi lintas lembaga untuk menjaga stabilitas harga.</li>
        </ul>
      </aside>

      <ArticleBody repeat={20} />

      <footer className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
        Artikel ini disusun oleh tim redaksi berdasarkan data resmi dan wawancara dengan narasumber terkait.
      </footer>
    </article>
  )
}
