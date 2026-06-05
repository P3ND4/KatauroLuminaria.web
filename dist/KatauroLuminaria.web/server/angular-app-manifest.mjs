
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
      "chunk-6SV7IZPW.js",
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
      "chunk-K24DYJ4M.js",
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
      "chunk-MITGBMZJ.js",
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
      "chunk-U5UNAUGV.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U5UNAUGV.js"
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
    'index.csr.html': {size: 9671, hash: '02f683a2a38c7c78c89785ce7c7882d1f931ee4164aec9825601f69b9a09f4c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: '9f577be234e55f03ff79467fb1649434d5bf3b9ff657768a35f66a91cadb5631', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: '90395c39433ada81f92ca0a241ad1fb13b3b3b6c3501f9f7e7e93de21c5679e8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: '25d06d205c62dc4b7b651ea99f10abbda46328432b3e001cc316d3e729c4646f', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81627, hash: 'd5d092b23ebdf15db73a2756e8b0be049b8f5bddc91b7cc08943b74f62ab3e6f', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: '6276b57b0e429bf9cea5d7b946d71fe057a06882b61bf0b997bccbc1802e3e46', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: '82322118b16160001c9ad37db523495fa845d7b9c577c5cfa61e96960e578379', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 52310, hash: 'd8911ad4415f4ac980dec84d405b4b610c30b45583077c99f1d09b12240c93e2', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25824, hash: 'c6c957b1f07f3330edbcad65e051c5be245461655371c9894cb55d6f789b1b67', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46841, hash: 'a782f6f655920f18b3673a3da5a14fb59425632f7752a9f2a58346958280e325', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 159636, hash: 'cb3c24cfdbaa15a3573998595540f9bd1b50c809eec1f679347715a6f5830c2b', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 75926, hash: '5c12df34d945adcf7d6c4136b06c44da0f64e71f4d2ceb7d31415b2e78b4a945', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'styles-4VIILCSB.css': {size: 31316, hash: '5oJbo+fa2jI', text: () => import('./assets-chunks/styles-4VIILCSB_css.mjs').then(m => m.default)}
  },
};
