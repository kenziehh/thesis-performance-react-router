import { PanelLeft, PanelLeftDashed, Search } from "lucide-react";
import { Link } from "react-router";


export default function Navbar({ onSidebarMobileToggle, onSidebarDekstopToggle, isSidebarDekstopOpen }: { onSidebarMobileToggle: () => void; onSidebarDekstopToggle: () => void; isSidebarDekstopOpen: boolean }) {
    return (
        <header className="fixed z-50 w-full flex items-center justify-between px-6 py-4 bg-white">
            <div className="flex items-center gap-4">
                <Link to={"/"} className="flex items-center gap-4">
                    <div className="text-2xl font-bold text-foreground">AI</div>
                    <button
                        onClick={onSidebarDekstopToggle}
                        className="hidden md:flex p-2 hover:bg-gray-100 rounded-lg transition"
                        aria-label="Toggle sidebar"
                    >
                        {isSidebarDekstopOpen ? <PanelLeftDashed className="w-5 h-5 text-gray-900" /> : <PanelLeft className="w-5 h-5 text-gray-900" />}
                    </button>
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg transition hidden md:block">
                    <Search className="w-5 h-5 text-gray-700" />
                </button>
                <button
                    onClick={onSidebarMobileToggle}
                    className="p-2 hover:bg-gray-100 rounded-lg transition md:hidden"
                    aria-label="Toggle menu"
                >
                    <PanelLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button className="hidden md:block px-4 py-2 text-foreground font-medium hover:bg-gray-100 rounded-lg transition">
                    Masuk
                </button>
            </div>
        </header>
    )
}
