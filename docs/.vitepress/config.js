module.exports = {
    head: [
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.13.0/dist/katex.min.css' }],
        ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css' }]
      ],
    markdown: {
      // options for markdown-it-anchor
      anchor: { permalink: false },
  
      // options for markdown-it-toc
      toc: { includeLevel: [1, 2] },

      config: (md) => {
        // use more markdown-it plugins!
        mk = require('@neilsustc/markdown-it-katex');

        md.use(mk, {"throwOnError" : false, "errorColor" : " #cc0000"});
      }
    }
  }