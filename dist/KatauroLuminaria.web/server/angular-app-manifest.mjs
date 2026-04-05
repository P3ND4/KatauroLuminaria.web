
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
      "chunk-47R2QT76.js",
      "chunk-SXSRPIZO.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AWBQBWL5.js",
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
    'index.csr.html': {size: 16907, hash: '1b8cb4e6e4def393fb087635e6248ef3621b8b1215216a93004e647468012692', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7884, hash: '4173c649def1927ba4b4d9bf20021db0ba9eeb5e9d1008647b12c445815bcee3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53589, hash: '65fa9f85e73b3311544704c791e3ed2897049a6aaab9aeae716360e4355e2974', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-K54BMADN.css': {size: 27866, hash: 'HwREGa1vEZQ', text: () => import('./assets-chunks/styles-K54BMADN_css.mjs').then(m => m.default)}
  },
};
