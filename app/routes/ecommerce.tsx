import EcommerceMain from "~/features/ecommerce";
import type { Route } from "./+types/ecommerce";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce Page" },
    { name: "description", content: "This application is created and used for thesis purposes only." },
  ];
}

export default function EcommercePage() {

  return <EcommerceMain  />;
}
