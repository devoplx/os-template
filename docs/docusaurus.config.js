// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fastify Essentials',
  tagline: 'Fastify Essentials: Streamlining Success, Elevating Development',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/fastify-essentials/',
	trailingSlash: true,


  organizationName: 'devoplx', // Usually your GitHub org/user name.
  projectName: 'Fastify Essentials', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devoplx/fastify-essentials',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/devoplx/fastify-essentials',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fastify Essentials',
        logo: {
          alt: 'logo',
          src: 'https://camo.githubusercontent.com/f624c842f810d1130bf67c43601dea182e5992151774f6878727db7c57d28532/68747470733a2f2f736f6369616c6966792e6769742e63692f6465766f706c782f666173746966792d657373656e7469616c732f696d6167653f666f6e743d4b6f486f266e616d653d31266f776e65723d31267468656d653d4461726b',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/devoplx/fastify-essentials',
            label: 'GitHub',
            position: 'right',
          },
          {to: 'https://discord.gg/tnvGCmVTv9', label: 'Discord', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/fastify-essentials',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/tnvGCmVTv9',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/devoplx/fastify-essentials',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} devoplx ❤. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
