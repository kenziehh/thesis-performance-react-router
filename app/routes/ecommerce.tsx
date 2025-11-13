import { banners } from "~/features/ecommerce/data/banners";
import type { Route } from "./+types/ecommerce";
import Ecommerce from "~/features/ecommerce"; 
import { categories } from "~/features/ecommerce/data/categories";
import { products } from "~/features/ecommerce/data/products";
import { useLoaderData } from "react-router";

export const loader = () => {
  return {
    banners: banners,
    categories: categories,
    products: products
  };
};

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Ecommerce Page" },
    { name: "description", content: "Welcome to the Ecommerce Page!" },
  ];
}

export default function EcommercePage() {
  const data = useLoaderData<typeof loader>();

  return <Ecommerce loaderData={data} />;
}
