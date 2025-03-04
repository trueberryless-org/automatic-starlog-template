import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import expressiveCode from "rehype-expressive-code";

export async function addExpressiveCode(html) {
  const result = await unified()
    .use(rehypeParse, { fragment: true }) // Parse as HTML fragment
    .use(expressiveCode) // Add syntax highlighting
    .use(rehypeStringify) // Convert back to HTML
    .process(html);

  return result.toString();
}
