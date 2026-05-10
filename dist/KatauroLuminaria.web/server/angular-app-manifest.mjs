
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
      "chunk-2KFMIEL2.js",
      "chunk-R26PGJWO.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CWPMWRKR.js",
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
      "chunk-RHY5A657.js",
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
      "chunk-ULKDH3MU.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ULKDH3MU.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ULKDH3MU.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ULKDH3MU.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ULKDH3MU.js",
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
    'index.csr.html': {size: 17062, hash: '468cc9ec1284cc84bcca6f41ea0756d4453dbfae176082bb04cedc9e64840be4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8039, hash: '4a84328b846f184e15c4964d41e782419af8b848508ba0247e9d89e8310a72c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53802, hash: '37c353887d88fbf29b97d7b09fc0fdff4409f80cfbcf63413b3188cfdedb7fa7', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-NWECMSAX.css': {size: 52098, hash: 'hmHTMM4VE/U', text: () => import('./assets-chunks/styles-NWECMSAX_css.mjs').then(m => m.default)}
  },
};
