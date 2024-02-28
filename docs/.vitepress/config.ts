import { defineConfig } from 'vitepress';
import mk from '@neilsustc/markdown-it-katex';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  base: '/Analysis-2021S/',
  lang: 'de-AT',
  title: 'Analysis - 2021S',
  description: 'Analysis - 2021S',

  themeConfig: {
    search: { provider: 'local' },
    nav: [
      {
        text: 'GitHub Repo',
        link: 'https://github.com/YouSafe/Analysis-2021S',
      },
    ],
  },

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      },
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.5.1/github-markdown.min.css',
      },
    ],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/copy-tex.min.js',
      },
    ],
  ],

  markdown: {
    // options for markdown-it-toc
    toc: { level: [1, 2, 3] },

    config: (md) => {
      md.use(mk, {
        throwOnError: false,
        errorColor: ' #cc0000',
        displayMode: true,
      });

      // https://github.com/Maorey/Blog/blob/ac5ced6deb3bbec689c672ec425640a0fba598f3/docs/.vitepress/config.js#L51
      const mdRender = md.render;
      md.render = function () {
        return mdRender
          .apply(this, arguments)
          .replace(/<span class="katex">/g, '<span v-pre class="katex">');
      };
    },
  },
});
