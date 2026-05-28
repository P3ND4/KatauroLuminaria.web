
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
      "chunk-6SV7IZPW.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-EYB5XDI5.js",
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
      "chunk-7FMQ5X3N.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-MITGBMZJ.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-VHVY4YIV.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U5UNAUGV.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U5UNAUGV.js"
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
    'index.csr.html': {size: 9671, hash: '7c63c6b268a22ea8f1c132e2201baa2f36a16a74302f524ff47c6358d051b2a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: '13c117e71b01ce5375b4e4022d3cadb76e264438f04656da43904963336d2e76', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: 'd1e8aa54310af5dbb7615ba269a12a21d534ec09884753bcc9dd333f5c58ab2a', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: '4f7b41631bf03cc5d20a68a49ad3e6913618f9546ec06d54dbb434b924fea132', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 52431, hash: '82bf0ec5a757e6d52fef29bb4cba63dc9c5131ba05cdab1dd9ad9a2ae758de30', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: '3261658df250c31c687906a1586e6fca9477cbcfb8f87ad4a1e0c0bc66d64ea1', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: '2ad56f35f1a330a7052f44881f6d4891679a717dab4e48c2ce2e0259da8484a1', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46622, hash: 'dcc646ac6efc7af6361ef16a338e30ebb35eed79af016105b48f05d013f08f16', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 145643, hash: 'e13491eadf205fd13157de26d189c02e6dee8872a0614ca40ef3e259cb288478', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25835, hash: 'a983959a5586971972463ce658e0d6e0c0a519c106527b0e7f39c25c33856548', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81408, hash: 'd4e6c5c8582c2c1a43053b686acdd5dab2fc3bb0ade8c6b967d4ae810b69a78d', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 76803, hash: 'aa99e2ed3b325d1020adcf6757de9d30fd891dcfd0bfdeccbb3b41f96201e02e', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'styles-3IP7V237.css': {size: 31097, hash: 'iD6Nr7rVaEA', text: () => import('./assets-chunks/styles-3IP7V237_css.mjs').then(m => m.default)}
  },
};
