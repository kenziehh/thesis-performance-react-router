import { type RouteConfig, index } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    { path: "/ecommerce", file: "routes/ecommerce.tsx" }
] satisfies RouteConfig;
