
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
      "chunk-NSHZE7SE.js",
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
    'index.csr.html': {size: 9920, hash: 'dfd95f6e3569dfae047dadc6332f067972a857027190a54ab7523c56769aed07', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: 'a334c2653983f56971c88a0bd686895eac9637fa5434bb96b97da66c81be9381', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14905, hash: 'e760126a27e1c5f2eed687f4ab15483a0b7b9ae3882fc2a155898921ae2ad6a8', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19170, hash: '35b035c3c034e60d28c0bdaddb03e2bcbe671202f9d172a2ab35a09704a479e7', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 56592, hash: '92eada30e3381743d2e472c38feb5e9dbd42ef10e5a2506dece89954d1a328ae', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20616, hash: '17cbf5d92d86788df8d1654600b2a9f3e0317d4272fb2525fe7d75593ffb0edb', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20471, hash: '37a46b0ff30ffe10d8e05a54cf61c5f56dae054cd42dbaf91a3e4008901668f2', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53247, hash: '6aba3432610fe9ac38c65021fa54346fe91457a9a3cbf3afea9a61e57a69086b', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26748, hash: 'b66625b37b94610cb70794b0e7ca80eeccf78d3c2fc72d11109a02d2e3bc574b', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86485, hash: 'eac36639a020847dccad9f2cf3265c1b52ad3b283798934569adfa8814da763f', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 150144, hash: 'f84b1f751196cd6faa5fd701af46f46b7ba24f554d1c9a186a8ecfd442494add', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 86822, hash: 'bf5e0a57952c1e852750132957b9fb965cd28c1efc5af9b4b5f1a1091db29413', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
