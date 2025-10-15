import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    { path: "/ecommerce", file: "routes/ecommerce.tsx" },
    { path: "/news", file: "routes/news.tsx" }
] satisfies RouteConfig;
