import React from 'react'

export default function ArticleBody({ repeat }: { repeat: number }) {
    const paragraph =
        "Pemerintah menekankan pentingnya koordinasi lintas sektor untuk memastikan implementasi berjalan efektif. " +
        "Pelaku usaha menyambut baik arah kebijakan, namun menyoroti perlunya kejelasan teknis di tingkat pelaksanaan. " +
        "Sejumlah ekonom menilai dampak jangka pendek dapat berupa penyesuaian harga dan pola konsumsi, " +
        "sedangkan jangka menengah akan terlihat pada pemulihan daya beli dan investasi. " +
        "Di sisi lain, masyarakat berharap akses informasi yang transparan serta penguatan program perlindungan sosial."

    const paragraph2 =
        "Dalam rapat koordinasi terbaru, indikator utama seperti inflasi, pengangguran terbuka, dan indeks keyakinan konsumen menjadi sorotan. " +
        "Pemerintah daerah diminta mengoptimalkan belanja, sementara swasta didorong memperluas inovasi produk. " +
        "Pakem tata kelola yang akuntabel dan berbasis data tetap menjadi landasan, " +
        "dengan evaluasi berkala untuk meminimalkan risiko ketidakpastian dan mempercepat pemulihan sektor prioritas."

    const subheads = [
        "Dampak Langsung pada Biaya Hidup",
        "Respon Pelaku Usaha dan Investor",
        "Peran Pemerintah Daerah",
        "Prospek Triwulan Berikutnya",
    ]

    const blocks = Array.from({ length: repeat })

    return (
        <section className="prose max-w-none prose-p:leading-relaxed prose-headings:scroll-mt-20">
            {blocks.map((_, i) => (
                <div key={i} className="mt-6">
                    {/* selingi subjudul setiap beberapa paragraf */}
                    {i % 6 === 0 && (
                        <h2 className="mt-8 text-2xl font-semibold text-primary">{subheads[(i / 6) % subheads.length]}</h2>
                    )}
                    <p>{paragraph}</p>
                    <p>{paragraph2}</p>
                </div>
            ))}
        </section>
    )
}
