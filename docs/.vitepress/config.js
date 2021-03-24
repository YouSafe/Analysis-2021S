module.exports = {
  base: "/Analysis-2021S/",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/copy-tex.css",
      },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/contrib/copy-tex.min.js"
      }
    ]
  ],
  title: "Analysis - 2021S",
  themeConfig: {
    nav: [
      { text: 'GitHub Repo', link: 'https://github.com/YouSafe/Analysis-2021S'}
    ],
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false },

    // options for markdown-it-toc
    toc: { includeLevel: [1, 2, 3] },

    config: (md) => {
      // use more markdown-it plugins!
      mk = require("@neilsustc/markdown-it-katex");

      md.use(mk, { throwOnError: false, errorColor: " #cc0000" });

      // https://github.com/Maorey/Blog/blob/ac5ced6deb3bbec689c672ec425640a0fba598f3/docs/.vitepress/config.js#L51

      const mdRender = md.render;
      md.render = function () {
        return mdRender
          .apply(this, arguments)
          .replace(/<span class="katex">/g, '<span v-pre class="katex">');
      };
    },
  },
};
