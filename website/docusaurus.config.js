/** @type {import('@docusaurus/types').DocusaurusConfig} */

const publicUrl = 'https://guide.assistant.esri-ps.com';
const publicTitle = 'ArcGIS Assistant User Guide';
const publicTagline = 'A Swiss Army Knife for ArcGIS.';

module.exports = {
  // ****************
  // * Site metadata
  // ****************

  title: publicTitle,
  tagline: publicTagline,
  url: publicUrl,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // ****************************
  // * Deployment configurations
  // ****************************

  organizationName: 'EsriPS', // Usually your GitHub org/user name.
  projectName: 'arcgis-assistant-website', // Usually your repo name.

  // *******************************************
  // * Theme, plugin, and preset configurations
  // *******************************************

  themeConfig: {
    navbar: {
      title: publicTitle,
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Guides',
          position: 'left',
        },
        {
          href: 'https://github.com/EsriPS/arcgis-assistant-feedback',
          label: 'Provide Feedback',
          position: 'left',
        },
        {
          href: 'https://assistant.esri-ps.com/',
          label: 'Sign in to Assistant',
          position: 'left',
          class: 'bold navbar__item navbar__link',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Useful Guides',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Common Workflows',
              to: 'docs/common-workflows',
            },
            {
              label: 'FAQs',
              to: 'docs/faq',
            },
          ],
        },
        {
          title: 'Provide Feedback',
          items: [
            {
              label: 'Join the Discussion',
              href:
                'https://github.com/EsriPS/arcgis-assistant-feedback/discussions',
            },
            {
              label: 'Submit an Issue',
              href:
                'https://github.com/EsriPS/arcgis-assistant-feedback/issues/new',
            },
          ],
        },
      ],
      // copyright: `Built by Esri PS`,
    },
    image: 'img/esri.png',
    metadatas: [
      // Facebook Open Graph Tags
      {name: 'og:type', content: 'website'},
      {name: 'og:url', content: publicUrl},
      {name: 'og:title', content: publicTitle},
      {name: 'og:description', content: publicTagline},
      {name: 'og:image', content: `${publicUrl}/img/esri.png`},
      // Twitter Card Tags
      {name: 'twitter:card', content: 'summary'},
      {name: 'og:title', content: publicTitle},
      {name: 'og:description', content: publicTagline},
      {name: 'og:image', content: `${publicUrl}/img/esri.png`},
    ]
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/esrips/arcgis-assistant-feedback/edit/main/website/',
        },
        // blog: {
        //   showReadingTime: true,
        // Please change this to your repo.
        // editUrl:
        //   'https://github.com/esrips/arcgis-assistant-website/edit/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  // ************************
  // * Custom configurations
  // ************************
};
