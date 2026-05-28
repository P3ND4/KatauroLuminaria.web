
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
      "chunk-CLCAWFRW.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-QPC3DAJT.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UFDCBT75.js",
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
      "chunk-QGGVCCTD.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PELGPUWU.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B4HTCR7P.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NP4VOBYE.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-NP4VOBYE.js"
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
    'index.csr.html': {size: 9671, hash: 'b190f680405a9cfa53b00ec34cd9077d3b8dece9df6edc376e84a371acd6b509', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: 'd43a45fe6bfee49ffdc705ac559f469f6c31304fb26ea0dcd06bbfe6e4d51bf0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: '8466737fe16a3bb7fd3d24a5ea40a6551fd3629e6b6c062e1ab8a71835fcbc3f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: 'fb5ea70637e584b78fca0f57b549aaedc6a5326d7533424507862b2eb85c7edf', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46784, hash: 'bb62f1bb9091e1895c12802f32e583548b9bf3b8c856013b97e9238aeb0e1fa1', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: '203e54d168f68d9b564facbdd55d0444e66308849e719136fb4ba353c0f82e6a', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: '4a8f37dfc32952fa2e5fbca347079f3dfea17e9c998461284edf8df62c2c9f93', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81565, hash: '3d8dcc1bb35757ccd6fc3df154229b2740fc69a8d593556f8157479f230c575b', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 54787, hash: 'a7b70749970124738bca997ab8d0801883e5ec3e6c8ef834d1a030a1d163bdca', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25835, hash: '5b5137d177a16314d10cc9e2368e028c195232821686c97bcefc20ce8d1512d6', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 76568, hash: '1dbd25b203c7b8780e662791eab2453c69fff38072a18ff8022b412dd2179efe', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 148465, hash: '5d5734f57f1d29317c28285f57e3fb68a4e258f4766e9ff5f04c894c25665a85', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-3IP7V237.css': {size: 31097, hash: 'iD6Nr7rVaEA', text: () => import('./assets-chunks/styles-3IP7V237_css.mjs').then(m => m.default)}
  },
};
