import EcommerceContainer from "~/features/ecommerce";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce Page" },
    { name: "description", content: "Welcome to the Ecommerce Page!" },
  ];
}

export default function EcommercePage() {
  return <EcommerceContainer />;
}
