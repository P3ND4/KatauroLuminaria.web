
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4AWIS2HD.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5MKSG7BD.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LJA66W7J.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-JFY52BG6.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-RHSNO6Q7.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LVT4XIAU.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VHVY4YIV.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K5VH2RCU.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K5VH2RCU.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSFNFYP4.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSFNFYP4.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSFNFYP4.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSFNFYP4.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WSFNFYP4.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/change-pass"
  },
  {
    "renderMode": 0,
    "redirectTo": "/dashboard/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 9671, hash: '367d9f5005f12594fe598fc670dac681d28a6b2fc24f179f4f4b17d7ebc37d51', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: 'e49cd60c1051f93b1c328e878351ac16f5427ec330182bfd660f4062c64c589e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: '909ea32066c65355f7043f502c8261c6acd1972b778889372a42fcead823b1d6', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: 'fe990b8560ebd1b3d8d8024d6870849ce23e29ab14253298079f755b5a0f2b41', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 47134, hash: '07af0460bbdfa64e5e2cef7b889a1472e4462ae0de711abcddd1c80cf888e08e', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: '4771ce41a8879b8559badb4ed61dbc1bffb9a85412d848d00220cbdd8e130d41', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: '7211b2c642ae4a116570c496f4fd8fe8a1cc6f562b65d11274917e15facac9cc', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81627, hash: '045de4ae5889fd90d30b1e3f4a1760cfa9df960d8e9cefdb17fb108ee4ae8151', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25824, hash: '0f9e0dd59961e0e153abee03660e7ea25053e9e6385fa85a3ff6c0d2e9d94da5', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 51807, hash: '2a8175d563a6a6ace6e7884321bb18b14dbdd1c08d1bffcf9ae26d50358806ed', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 76822, hash: '25a062a483ee6b8a8963ad74d238cba13b7e874d81c9571981e515f5d14c5e71', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 154154, hash: 'dad5a400484c98923d5b8c6cb8eb76d868d24cbae8864852cb9e9e732225ca62', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-4VIILCSB.css': {size: 31316, hash: '5oJbo+fa2jI', text: () => import('./assets-chunks/styles-4VIILCSB_css.mjs').then(m => m.default)}
  },
};
