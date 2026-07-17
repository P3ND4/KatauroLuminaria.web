
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
      "chunk-GLXFSV6G.js",
      "chunk-Z2JYCNXB.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OYEQGTPC.js",
      "chunk-QE3X2J74.js",
      "chunk-JO7LKKE7.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-CSOBJ6FO.js",
      "chunk-QE3X2J74.js",
      "chunk-JFY52BG6.js",
      "chunk-JO7LKKE7.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YA42MGJA.js",
      "chunk-JO7LKKE7.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PUGAG773.js",
      "chunk-JO7LKKE7.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5D73WYUY.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-JO7LKKE7.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSREEHT2.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-DSREEHT2.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4B2SIB.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4B2SIB.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4B2SIB.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4B2SIB.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UU4B2SIB.js"
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
    'index.csr.html': {size: 9920, hash: '7edcdf3abf76f2e6090771f8910cc51e03efd7f117f39ed4dd68e66428ab6744', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: '9d2620a46dd8fda04a826c1fee9e5e406d842cb4b82b3be739af81e983be0c99', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14905, hash: '013e4fd17a8ee25682d641187feb99a6315564507a40616dbef8a74906e2a57f', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19170, hash: '7b65818c4bfe9276bc74841bf7cc4ca2b648db3f447e3d6b7416fed857b31d01', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53247, hash: '65b801f89b1923475bfc738a80d98ef8ff1068cfb242afc99bd108bf91e5ef1a', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20616, hash: 'f64c3524f5f1a43a35ca255f72ae4a48111fe1085a8864f62cf69acf9b9255d0', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20471, hash: '1aaa50f793e5dca98ea4768f9507ce7aaca3e642b4201f2b1da295dabdcea049', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 84212, hash: '40f80866f4d4fa41bde20fa149556dedfdc85a71d9ab9bb70c066284273e8874', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86489, hash: '671a0869610467f084e86d29db0b1df42e1d20ef3bbbffe88980dbf6ed75474c', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26759, hash: '31970112484f465cbc12175ba8f3bdb2a18d522e2e969748995f60e92c5064af', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 186169, hash: '64b3cf2b013ac42fe9f52df6dd8208fa498cb9af7cb435d9512087f412cf731b', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 59749, hash: '075886169857253bf788b96756aa2bc2173d44611c29b0637045003a4d0ae48b', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
