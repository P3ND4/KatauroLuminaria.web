
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
    'index.csr.html': {size: 9671, hash: '0be0341554aeb32be1a6bd3912bafeccda4eda79643774f488eb3a7b0dea2d11', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: '6d7c4a1062db8fabaae65e1100b234f3e4aa75d3defea7aafa25d0276c03fc82', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: '6152d7bee86298352539367810473d69df3519bc770e09e3bf1bab8c378bebfe', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: '87a61a4a71a62db58f441c530b126bafa41f6549dbd44c66938990fbed3cf43e', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 47281, hash: 'ecc489af6c3a67e779e11e0fb54b921128bd0ff103517b8d9eb35935c6d3b55d', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: '3b3fb8cd86c3865b58f63baa781a2200d51dcb3a66d6693419be14dddacb3c4c', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: 'e1601cb2ad9d4bbf40a7ea638143a4d57f54b99a4db4c9af7834441e88f996c8', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 134382, hash: '46c39b35c7290cbd29de184df8c19340bbe2add7e5f7ff350baaf152152d0506', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25835, hash: '404c7e11b53229ba03f4b63a40289c65a3d3e5bae41ab63b99d13ab5b07a52a3', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 63617, hash: '4f7a51c627b7547e56893275ee90e1a4ce7f857dcce2261e0277e37e6fb4bfdb', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 85740, hash: 'f58ffc5d4bf8020431deb5e8a10390c3f9f12dbeaf1b7fd3ccc5d933295fd714', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 79013, hash: 'ada6fdb962e7c6c5a5d71bb177a95552bfa70f683fcc3fb6e37c7c5f2ac93c13', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'styles-4VIILCSB.css': {size: 31316, hash: '5oJbo+fa2jI', text: () => import('./assets-chunks/styles-4VIILCSB_css.mjs').then(m => m.default)}
  },
};
