import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required) 下方更换为自己的notionID
  rootNotionPageId: '6ae7a174a9694d7baef5c95cb109cec1',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: 'o-id',

  // basic site info (required) 编辑站点信息
  name: 'o-id',
  domain: 'o-id.cc',
  author: 'o-id',

  // open graph metadata (optional)
  description: 'Example Next.js Notion Starter Kit Site',

  // social usernames (optional) 社交信息
  twitter: 'chusight1',
  github: 'chusight',
  zhihu: 'chusight',
  // linkedin: '',
  // instagram: 'onet2lee',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
     navigationStyle: 'custom',
     navigationLinks: [
       {
         title: 'About',
         pageId: '2c53271e47464ca59f021907db220508'
       },
       {
         title: 'Contact',
         pageId: 'b8b7971e749b41f487a1d00c40eb7a0d'
       }
     ]
})
