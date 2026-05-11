
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
      "chunk-5EACJLRX.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UE74UTQQ.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-G6XDZR4B.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XVXVXUGV.js",
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
      "chunk-DEHWLII5.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TPCTROUC.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T555363M.js",
      "chunk-7QGPCMBS.js",
      "chunk-G6XDZR4B.js",
      "chunk-JFY52BG6.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GG3ZSSEI.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GG3ZSSEI.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJHYAJ72.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJHYAJ72.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJHYAJ72.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJHYAJ72.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EJHYAJ72.js",
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
    'index.csr.html': {size: 9500, hash: '18b7ca23300645e6c6abcd2d3ffa8518712014d453ee4a8e5a8cc8a325890d6c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7602, hash: '349e8e842d52a7c40a05b0f82bbd485c8dca0ef942cf45525bc23d41fafed3e9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13816, hash: '09b366d05c6627765049484ec49f40867251ba1905a27a8aadf9c41a71e288d7', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 29322, hash: '8b6b34a56a424be9a469b1ec9da092d14c3597410fcc472f85d9dadc37352757', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18081, hash: 'ea5e2682b294a89e785c412c0c2cd76d3d54d17eb6ee1ea291fcca4222f8c5c9', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20089, hash: '18aa81407dca6096c0bf134fdd584633094d579f69f45e8f09e67465adcd5aef', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19379, hash: '37efb6693b4c7b4cf9ef57689b0917f74fb07f14b21b1fd63947293c86de53dc', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 50853, hash: 'c3f8d57b1366e71681f76fa0b77303f9850a513122bdc84f662a70629007612f', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46691, hash: '5cdda4fe069d807df8dbc06eec2818adfcefa54ec4b3c7d757336503e56b9328', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26310, hash: 'e04aa3cfee59862f0da4cd084d472cf78326d1e23eee07e8f41366330d4f7412', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81717, hash: 'e0c3cceed05e3ee9ab4d3a374a3ec580a3f9d93cc79d1c702be133ebbb156a7c', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 124446, hash: '19ca2e4acdfd896cc0ef9f00114023e9752202612e1f17c173b74243db10181e', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-NJJ6QWWX.css': {size: 31060, hash: 'di/7s7q0Knc', text: () => import('./assets-chunks/styles-NJJ6QWWX_css.mjs').then(m => m.default)}
  },
};
