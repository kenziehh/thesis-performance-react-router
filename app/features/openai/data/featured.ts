import type { Featured } from "../types";

export const featuredCards: Featured[] = [
    {
        src: "/openai/featured/featured1.png",
        title: "Dibangun untuk memberi manfaat bagi semua orang",
        description: "Perusahaan",
        category: "Perusahaan",
        minuteRead: 3,
    },
    {
        src: "/openai/featured/featured2.png",
        title: "Memperkenalkan gpt-oss-safeguard",
        description: "Produk",
        category: "Produk",
        minuteRead: 10,
        date: "2025-10-29",
    },
    {
        src: "/openai/featured/featured3.png",
        title: "Sora 2 telah hadir",
        description: "Riset",
        category: "Riset",
        minuteRead: 8,
    },

]


export const mainFeatured: Featured = {
    src: "/openai/featured/atlas.png",
    title: "Memperkenalkan ChatGPT Atlas, browser dengan ChatGPT bawaan",
    description: "Produk",
    category: "Produk",
    minuteRead: 10,
}
