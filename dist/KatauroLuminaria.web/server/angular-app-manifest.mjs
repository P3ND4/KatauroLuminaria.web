
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
      "chunk-NNWRXM27.js",
      "chunk-SXSRPIZO.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7L4AHAJD.js",
      "chunk-SXSRPIZO.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-RG7QTPRG.js",
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
      "chunk-3OUUKYO6.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3OUUKYO6.js"
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
    'index.csr.html': {size: 16907, hash: '51b811cd650bc9a18a894f5147b94318b176aacfc421de06411d9ee8920caaff', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7884, hash: '53b5d9c1fb7fa0d1df1da8d847f4b324106fd7874c3622aa31184e9397756b79', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53694, hash: '44fae057338ad5073368728945ad021ba6244451a5811cc4a2eb77cde3811a80', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-K54BMADN.css': {size: 27866, hash: 'HwREGa1vEZQ', text: () => import('./assets-chunks/styles-K54BMADN_css.mjs').then(m => m.default)}
  },
};
