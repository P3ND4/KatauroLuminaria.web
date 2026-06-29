
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
      "chunk-26YLIWQW.js",
      "chunk-NKEDFCV4.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LPLHOQBI.js",
      "chunk-LJXXP5MW.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-FBOWAQJJ.js",
      "chunk-LJXXP5MW.js",
      "chunk-JFY52BG6.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JWDRQMCD.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4P6KPOYH.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QDHLWAAJ.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UPMU5VMQ.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-UPMU5VMQ.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LT4ZRM23.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LT4ZRM23.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LT4ZRM23.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LT4ZRM23.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-LT4ZRM23.js"
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
    'index.csr.html': {size: 9920, hash: '12c4a36838fda5fd598fcdb2a82becb9c46c8fe29f734370065842ef1de61ed4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: 'c80fc4e7a542f98687c3fc1485f79d40b131c85654216d9eb1f5e0b5711ae09b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14881, hash: 'e53030a5b4d3bc71e8fd85b52f81eb6070f3c62f4c0ca4e48779fb0abab37c59', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19146, hash: 'f72bdf9459d019ce3a3463c3ad3fb724e58aa9106083cf33bb54522bcb32e756', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 56148, hash: 'ce1be1fc8fc03f94d82d7d7ffd673785b29ba940a86378de8bb9057e2936f308', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20592, hash: 'eb6c87811c5d6e28aca3537b72f31ee7e53afde0f4a03e4528c6b0d7b093bc90', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20447, hash: 'c25739b6a6e8da3193e0daf3794b578bb8b12183f8f7c7d197c9b4131f9c16c8', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 83903, hash: '8219c78e9bd4b71e478a13f1384dd23da42ce7187bab5c6c9dfda65a142e4013', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26724, hash: 'be53c875a890683be1d512f7178ff205f574a86de9e7bd74f2a0e1a8b41cac87', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53285, hash: '9904e80929c61ddb3613d9b406c1fef05d57c1a798cad2d86c5981190ff91248', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 244633, hash: '13e95f42ba51111d905877c9f126d4a213452d2fffe43b61c07dc213f90eeecc', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86523, hash: '41e08875011ce8243d705cb80ae6851423e752badc34aa6651e05550cac3731b', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
