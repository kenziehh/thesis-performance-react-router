"use client"

import { CircleUser, Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { categories } from "../data/categories"
import Drawer from "./drawer"
import Separator from "./separator"



export default function Navbar() {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [open])

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-white">
            <div className="container flex h-16 max-w-screen-xl items-center justify-between px-4 md:h-18">
                <div className="flex min-w-0 items-center gap-4 md:gap-6">
                    <a
                        href="#"
                        aria-label="Home"
                        className="shrink-0 select-none font-serif text-3xl font-bold tracking-tight text-primary-red"
                    >
                        {"TEMPO"}
                    </a>

                    <nav className="hidden items-center gap-4 md:flex">
                        <button
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted"
                        >
                            <Menu className="size-4" />
                            {"Menu"}
                        </button>

                        <Separator />
                        <a href="#" className="rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted">
                            {"Harian"}
                        </a>

                        <Separator />
                        <a href="#" className="rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted">
                            {"Mingguan"}
                        </a>

                        <Separator />
                        <a
                            href="#"
                            className="xl:inline-flex items-center gap-2 rounded-md px-2 py-1 text-sm text-foreground hover:bg-muted hidden"
                        >
                            <span className="inline-flex size-5 items-center justify-center rounded-[4px] bg-primary-red text-[10px] font-semibold leading-none text-primary-red-foreground">
                                {"T+"}
                            </span>
                            {"Tempo Plus"}
                        </a>
                    </nav>
                </div>

                <div className="hidden items-center gap-3 md:flex">
                    <a
                        href="#"
                        className="rounded-md bg-primary-red px-4 py-2 text-sm font-semibold text-primary-red-foreground hover:opacity-90"
                    >
                        {"Langganan"}
                    </a>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-medium text-foreground"
                    >
                        <CircleUser className="size-4" />
                        {"Masuk"}
                    </a>
                </div>

                <button
                    type="button"
                    aria-label={open ? "Tutup menu" : "Buka menu"}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="inline-flex items-center justify-center rounded-md border p-2 md:hidden"
                >
                    {open ? <X className="size-5" /> : <Menu className="size-5" />}
                </button>
            </div>

            <div className="hidden border-t md:block">
                <nav
                    className="mx-auto flex max-w-screen-xl items-center gap-6 overflow-x-auto px-4 py-3 text-sm"
                    aria-label="Kategori"
                >
                    {categories.map((c) => (
                        <a key={c} href="#" className="shrink-0 rounded-md px-1.5 py-1 text-muted-foreground hover:text-foreground">
                            {c}
                        </a>
                    ))}
                </nav>
            </div>

            {open ? (
                <Drawer onClose={() => setOpen(false)}>
                    {/* Drawer header */}
                    <div className="flex items-center justify-between border-b px-4 py-3">
                        <span className="font-serif text-2xl font-bold tracking-tight text-primary-red">{"TEMPO"}</span>
                        <button
                            type="button"
                            aria-label="Tutup"
                            onClick={() => setOpen(false)}
                            className="inline-flex items-center justify-center rounded-md border p-2"
                        >
                            <X className="size-5" />
                            <span className="sr-only">{"Tutup"}</span>
                        </button>
                    </div>

                    <div className="flex flex-col gap-2 px-4 py-4">
                        <a href="#" className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted">
                            <Menu className="size-4" />
                            {"Menu"}
                        </a>
                        <a href="#" className="rounded-md px-2 py-2 hover:bg-muted">
                            {"Harian"}
                        </a>
                        <a href="#" className="rounded-md px-2 py-2 hover:bg-muted">
                            {"Mingguan"}
                        </a>
                        <a href="#" className="flex items-center gap-2 rounded-md px-2 py-2 hover:bg-muted">
                            <span className="inline-flex size-5 items-center justify-center rounded-[4px] bg-primary-red text-[10px] font-semibold leading-none text-primary-red-foreground">
                                {"T+"}
                            </span>
                            {"Tempo Plus"}
                        </a>
                    </div>

                    <div className="flex items-center gap-2 px-4">
                        <a
                            href="#"
                            className="flex-1 rounded-md bg-primary-red px-4 py-2 text-center text-sm font-semibold text-primary-red-foreground"
                        >
                            {"Langganan"}
                        </a>
                        <a href="#" className="flex-1 rounded-md border px-4 py-2 text-center text-sm font-medium text-foreground">
                            {"Masuk"}
                        </a>
                    </div>

                    <div className="mt-4 border-t px-4 py-3">
                        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">{"Kategori"}</div>
                        <div className="grid grid-cols-2 gap-2">
                            {categories.map((c) => (
                                <a key={c} href="#" className="rounded-md px-2 py-2 text-sm hover:bg-muted">
                                    {c}
                                </a>
                            ))}
                        </div>
                    </div>
                </Drawer>
            ) : null}
        </header>
    )
}



