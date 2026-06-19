
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
      "chunk-YXWIZAPW.js",
      "chunk-NKEDFCV4.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DLPLVEAC.js",
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
      "chunk-ZAL4NDMD.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2DX2PCS6.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BPL5ZEXH.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-E7HNI23P.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-E7HNI23P.js"
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
    'index.csr.html': {size: 9920, hash: '4e752893a70cd8a8eeddfedd77516f7f39d4e2f9b16e80742aa14d8e976fb5dd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: '27c42e3605cf3acdad88b96ee599604efe59dbcc0fc18b1d348a604f4424648c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14881, hash: '887036a7bcaafe784f180cf11bff31d75202e7880404b84b467cb074ca160684', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19146, hash: '8d29b5626d33cbb640e18881c680e5ca7a4c98273a5dd4447e6effbdb7ac0d3d', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53209, hash: '5a13428b26d961eb2dcfa6236681bf33c0bf0819944d6a841d6d11830849521e', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20592, hash: 'a62374cf79abc06f74663ea7bfd6836a83d6229395b4b247a45d423e7b3fea58', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20447, hash: 'fae4a24fc02c6822c2538038972d29ae1c5d673cb92468be46a000d99719752b', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 59543, hash: '74ee201b266ece6df265d02d6a332f7971e7cab9f100542db2f1dd12870968e6', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26735, hash: '8ec579f2dacbd73d793b52f6b0939ff53d56ed05951e30966d6141315bb107b2', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86286, hash: 'd6d946ace9e0f02fa59bbfaac2c67a76dbd61ea0004e72d120aab2f924818715', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 86746, hash: '2c4dc2358a6b64438a5d1b149c6eeec9750f1e5ad4e05f89301d579e3aab70cd', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 156409, hash: '7f16cc208370e18bb10f7f77aa9f59ade8ffa1a7686cc2f719060e9bcbe0851e', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
