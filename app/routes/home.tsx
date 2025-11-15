import HomeOpenAI from "~/features/openai";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "OpenAI" },
    { name: "description", content: "This application is created and used for thesis purposes only." },
  ];
}

export default function Home() {
  return <HomeOpenAI />;
}
