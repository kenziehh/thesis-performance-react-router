import NewsMain from "~/features/news";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Berita Kebijakan Terbaru Tarif Trump" },
    { name: "description", content: "This application is created and used for thesis purposes only." },
  ];
}

export default function Home() {
  return <NewsMain />;
}
