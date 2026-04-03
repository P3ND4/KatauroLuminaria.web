
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/dashboard"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-S6H2Z4AF.js",
      "chunk-VBFRUNZE.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EQ762TSW.js",
      "chunk-WE5HQ3RN.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZYJVRJZ.js",
      "chunk-WE5HQ3RN.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3CPCLRNP.js",
      "chunk-7QGPCMBS.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-AXO424OS.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GSVDENGU.js"
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
    'index.csr.html': {size: 14686, hash: '0497064753d9c89c0297e3cf3d3d057b6e71f4548155ee254f99a9cd81a00cae', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7884, hash: '12e75564425e44a808a0a5e42faa4d228a7f1777bfe923d2c25db09eb12a2b4b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 50379, hash: '258ba46f8af07d915a6c70fb25c8c497d00ee7871848d0111f8d37d59cccfb88', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
