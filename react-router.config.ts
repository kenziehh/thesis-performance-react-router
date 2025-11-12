import type { Config } from "@react-router/dev/config";

export default {
ssr: true,
async prerender(args) {
  return ["/", "/ecommerce", "/news"];
},
} satisfies Config;
