import { unified } from "unified";
import rehypeParse from "rehype-parse";
import rehypeStringify from "rehype-stringify";
import expressiveCode from "rehype-expressive-code";
import { visit } from "unist-util-visit";

export async function addExpressiveCode(html) {
  const result = await unified()
    .use(rehypeParse, { fragment: true }) // Parse as HTML fragment
    .use(expressiveCode) // Add syntax highlighting
    .use(rehypeStringify) // Convert back to HTML
    .process(html);

  return result.toString();
}

export async function removeH1s(html) {
  const result = await unified()
    .use(rehypeParse, { fragment: true }) // Parse as HTML fragment
    .use(myRehypePluginToRemoveHeadings1) // Add syntax highlighting
    .use(rehypeStringify) // Convert back to HTML
    .process(html);

  return result.toString();
}

function myRehypePluginToRemoveHeadings1() {
  /**
   * @param {Root} tree
   */
  return function (tree: any) {
    visit(tree, "element", function (node, index, parent) {
      if (["h2"].includes(node.tagName)) {
        parent.children.splice(index, 1);
      }
    });
  };
}
