export function Footer() {
  const footerColumns = [
    {
      title: "Riset Kami",
      links: [
        { label: "Indeks Riset", href: "#" },
        { label: "Ringgasan Riset", href: "#" },
        { label: "Residensial Riset", href: "#" },
        { label: "OpenAI for Science", href: "#" },
        {
          label: "Kemajuan Terbaru",
          subsections: [
            { label: "GPT-5", href: "#" },
            { label: "OpenAI o3", href: "#" },
            { label: "OpenAI o4-mini", href: "#" },
            { label: "GPT-4o", href: "#" },
            { label: "GPT-4o mini", href: "#" },
            { label: "Sora", href: "#" },
          ],
        },
        {
          label: "Keselamatan",
          subsections: [
            { label: "Pendidikan Keselamatan", href: "#" },
            { label: "Keamanan & Privasi", href: "#" },
            { label: "Kepercayaan Pengguna", href: "#" },
          ],
        },
      ],
    },
    {
      title: "ChatGPT",
      links: [
        { label: "Jelqahi ChatGPT", href: "#", highlight: true },
        { label: "Business", href: "#" },
        { label: "Enterprise", href: "#" },
        { label: "Pendidikan", href: "#" },
        { label: "Harga", href: "#", highlight: true },
        { label: "Unduh", href: "#", highlight: true },
        {
          label: "Sora",
          subsections: [
            { label: "Ringkasan Sora", href: "#" },
            { label: "Fitur", href: "#" },
            { label: "Harga", href: "#" },
            { label: "Masuk Sora", href: "#", highlight: true },
          ],
        },
        {
          label: "Platform API",
          subsections: [
            { label: "Ringkasan Platform", href: "#" },
            { label: "Harga", href: "#" },
            { label: "Masuk API", href: "#", highlight: true },
          ],
        },
        { label: "Dokumen", href: "#", highlight: true },
        { label: "Forum Pengembang", href: "#", highlight: true },
      ],
    },
    {
      title: "Untuk Business",
      links: [
        { label: "Ringkasan Business", href: "#" },
        { label: "Solusi", href: "#" },
        { label: "Hubungi Bagian Penjualan", href: "#" },
        {
          label: "Perusahaan",
          subsections: [
            { label: "Tentang Kami", href: "#" },
            { label: "Piagam Kami", href: "#" },
            { label: "Foundation", href: "#" },
            { label: "Karir", href: "#" },
            { label: "Merek", href: "#" },
          ],
        },
      ],
    },
    {
      title: "Syarat & Kebijakan",
      links: [
        { label: "Ketentuan Penggunaan", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Kebijakan Lainnya", href: "#" },
        {
          label: "Dukungan",
          subsections: [
            { label: "Lainnya", href: "#" },
            { label: "Kabar", href: "#" },
            { label: "Kisah", href: "#" },
            { label: "Streaming Langsung", href: "#" },
            { label: "Podcast", href: "#" },
            { label: "RSS", href: "#" },
          ],
        },
      ],
    },
  ]

  return (
    <footer className="container w-full bg-white border-t border-gray-200 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-gray-600 text-sm font-medium mb-4 uppercase tracking-wide">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIdx) => {
                  // Check if this link has subsections
                  if ("subsections" in link && link.subsections) {
                    return (
                      <div key={linkIdx}>
                        <li>
                          <span className="text-gray-700 text-sm hover:text-gray-900 cursor-pointer">{link.label}</span>
                        </li>
                        <ul className="mt-2 ml-0 space-y-2 border-l border-gray-300 pl-3">
                          {link.subsections.map((sublink, subIdx) => (
                            <li key={subIdx}>
                              <a
                                href={sublink.href}
                                className={`text-sm transition-colors ${
                                  sublink.highlight
                                    ? "text-gray-900 font-medium hover:text-gray-700"
                                    : "text-gray-600 hover:text-gray-900"
                                }`}
                              >
                                {sublink.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  }
                  // Regular link
                  return (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        className={`text-sm transition-colors ${
                          link.highlight
                            ? "text-gray-900 font-medium hover:text-gray-700"
                            : "text-gray-600 hover:text-gray-900"
                        }`}
                      >
                        {link.label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-600 text-sm">© 2025 OpenAI. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                LinkedIn
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                GitHub
              </a>
            </div>
          </div>
        </div>
    </footer>
  )
}
