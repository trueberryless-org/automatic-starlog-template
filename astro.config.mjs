// @ts-check
import { defineConfig } from "astro/config";
import markdownRemark from "@studiocms/markdown-remark";
import expressiveCode from "rehype-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  image: {
    domains: ["trueberryless.org"],
  },
  markdown: {
    rehypePlugins: [expressiveCode],
  },
  integrations: [
    markdownRemark({
      markdownExtended: {
        autoLinkHeadings: true,
        sanitize: {
          dropElements: ["h2"],
          dropAttributes: {
            class: ["pre"],
            style: ["pre"],
          },
        },
      },
    }),
  ],
  experimental: {
    serializeConfig: true,
  },
});
