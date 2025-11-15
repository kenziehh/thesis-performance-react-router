"use client"

import { PanelLeft } from "lucide-react"
import { cn } from "~/shared/lib/utils"

export function Sidebar({
    onSidebarMobileToggle,
    isSidebarMobileOpen,
    isSidebarDekstopOpen,
}: {
    onSidebarMobileToggle: () => void
    isSidebarMobileOpen: boolean
    isSidebarDekstopOpen: boolean
}) {
    const menuItems = [
        "Riset",
        "Keselamatan",
        "Untuk Bisnis",
        "Untuk Pengembang",
        "ChatGPT",
        "Sora",
        "Kisah",
        "Perusahaan",
        "Berita",
    ]

    return (
        <>
            {/* Sidebar Desktop */}
            <aside
                className={cn
                    (
                    "hidden md:flex h-screen bg-white p-4 flex-col transition-all duration-300 ease-in-out",
                    isSidebarDekstopOpen ? "w-[20vw]" : "w-0 overflow-hidden"
                )}
            >
                {/* <div className="flex items-center justify-between mb-6 mt-6">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg" />
                    
                </div> */}

                <nav className="space-y-1 flex-1 py-40 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            className="w-full text-left px-2 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm font-medium"
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Sidebar Mobile */}
            <aside
                className={cn(
                    "fixed left-0 top-0 h-screen w-screen md:hidden bg-white flex flex-col z-40 transition-transform duration-300 ease-in-out",
                    isSidebarMobileOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="flex items-center justify-between p-6">
                    <div className="w-8 h-8 bg-gray-900 rounded-lg" />
                    <button
                        onClick={onSidebarMobileToggle}
                        className="text-gray-700 hover:bg-gray-100 rounded-lg p-2"
                        aria-label="Close sidebar"
                    >
                        <PanelLeft className="w-5 h-5" />
                    </button>
                </div>
                <nav className="space-y-1 p-6 flex-1 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item}
                            onClick={onSidebarMobileToggle}
                            className="w-full text-left px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition text-sm font-medium"
                        >
                            {item}
                        </button>
                    ))}
                </nav>
            </aside>
        </>
        )
}
