export default {
  indexHtml: 'src/demo/index.html',
  title: 'React Blaze UI',
  themeConfig: {
    mode: 'light',
    showPlaygroundEditor: true,
  },
  menu: [
    {
      name: 'Getting Started',
      menu: ['Install', 'Custom Build']
    },
    {
      name: 'Objects',
    },
    {
      name: 'Components',
    },
    {
      name: 'Typography',
    }
  ],
  htmlContext: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: '/public/demo.css',
        },
      ],
    },
  }
}