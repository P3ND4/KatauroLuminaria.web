
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
      "chunk-2UCLXNJ4.js",
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
    'index.csr.html': {size: 9920, hash: '2ebe35bbb3702b7deabe3ecafdadc3753416db963362e6efaf319710a21de5c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: 'fb6dc0d0b19e18a92879d61b4f47ffbb6aece404c2195c0673bd6e8f89c8976e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14881, hash: '151c670994a92caf13dd50471a4ad7813272175436ce40f6858949d5323858c5', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19146, hash: '18a7aaaa19f75c849b26c899a8af7676423fe1321ca054e8ceac9c20017baffb', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 59918, hash: 'ca9a2f61c3e5e6b1b1b16e8f1364716d019af2345016304b7e2871a012ef8bb1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20592, hash: 'd8ceb823e6fdcf35bb530480fbc9eda8c3902c8bcff64bcdf90c0634d35eea40', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20447, hash: '934751f3f2af4131a3f00c4a3586e4462e87b01ff4ca760c924b2846f2d39a50', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 84170, hash: 'a9e9078d1701150715d1e4829817e2460ec4d515a70cb4ac2b562e31ff8ae5b9', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26724, hash: '575e08c1c29d03c86aca7b758ee7542ba0a799065985ee4f35193443a5f8e88e', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53285, hash: 'd580955cfbd80f898ec214ef60b1ceb0f61835175d5492671532ecf41f7029d8', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86523, hash: '578d42bee581f51cc3ce383c2a6c113884867608732d58643439812d000a295c', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 247420, hash: '630d191223786cc79b1500291dde18f0fecf089064576111a12deb20007178a3', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
