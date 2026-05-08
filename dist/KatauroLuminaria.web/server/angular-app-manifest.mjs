
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
      "chunk-3JH2CDIB.js",
      "chunk-R26PGJWO.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-I77EZRFL.js",
      "chunk-5KRDCTHW.js",
      "chunk-G6XDZR4B.js",
      "chunk-OXA7HUT6.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-I2EERKMO.js",
      "chunk-5KRDCTHW.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-HUGQFJP3.js",
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
      "chunk-SHEA46JM.js",
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
      "chunk-FP4KXVDL.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FP4KXVDL.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FP4KXVDL.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FP4KXVDL.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FP4KXVDL.js"
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
    'index.csr.html': {size: 17011, hash: '0034789f610eca52dfd29699e199a69f038b326d9ff1558dec23d0270a6e9cde', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7988, hash: '8d2e5aceb48ce9b4b659c4c34ba4183aca8ebe85f7550b2663d469846e8a4b1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53726, hash: 'abfd6dab711b9e107c7a5a6cefe3d74398c3ac3280e58fa42e4f98e5a809f685', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-NWECMSAX.css': {size: 52098, hash: 'hmHTMM4VE/U', text: () => import('./assets-chunks/styles-NWECMSAX_css.mjs').then(m => m.default)}
  },
};
