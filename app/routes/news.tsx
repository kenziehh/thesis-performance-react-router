import NewsContainer from "~/features/news";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Berita Analisis Kebijakan Terbaru" },
    { name: "Analisis Kebijakan Terbaru:", content: "Dampak Ekonomi dan Sosial dalam 12 Bulan Kedepan" },
  ];
}

export default function Home() {
  return <NewsContainer />;
}
