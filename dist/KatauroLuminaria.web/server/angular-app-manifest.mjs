
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
      "chunk-WVFW7KGL.js",
      "chunk-R26PGJWO.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MEGZQIRA.js",
      "chunk-TPPFU5FF.js",
      "chunk-PAQIFZXZ.js",
      "chunk-G6XDZR4B.js",
      "chunk-OXA7HUT6.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-R2QGEAYR.js",
      "chunk-TPPFU5FF.js",
      "chunk-PAQIFZXZ.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-KZUULO75.js",
      "chunk-OXA7HUT6.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-H42DKL5R.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3TX54ZPM.js",
      "chunk-7QGPCMBS.js",
      "chunk-G6XDZR4B.js",
      "chunk-JFY52BG6.js",
      "chunk-OXA7HUT6.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C6WSQZNW.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-C6WSQZNW.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5RRCM5UB.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5RRCM5UB.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5RRCM5UB.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5RRCM5UB.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5RRCM5UB.js",
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
    'index.csr.html': {size: 9500, hash: '6b5df3c035dadf5c27a67b2f0bbde2a3ba661f61b2de64d98b3b34f36b6f51ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7602, hash: '3e27456782f4b7e4148a09a63b0184c60529d4834032958c9bdc8216e7056734', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46489, hash: '774c9b415f1c96b8475d646ef041986d3580e12c20a9a873183cfb738338124d', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-NJJ6QWWX.css': {size: 31060, hash: 'di/7s7q0Knc', text: () => import('./assets-chunks/styles-NJJ6QWWX_css.mjs').then(m => m.default)}
  },
};
