
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
      "chunk-4AWIS2HD.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5MKSG7BD.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-K24DYJ4M.js",
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
      "chunk-RHSNO6Q7.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-LVT4XIAU.js",
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
      "chunk-K5VH2RCU.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-K5VH2RCU.js"
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
    'index.csr.html': {size: 9671, hash: '0c655faf1ae36cc18be9038a8c7c3e8681ab35645966273d57f7e3cb8c5ec8e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: '7db48a51acf83dc35eae6ba883e65338cf3f2532c75b464a537a8a070d38276b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: 'd94383b86b2965b0ad0eebe6d00024c0613f9921adecf8842a600b5127bf3260', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 54028, hash: '4800836107a12ffc9cec14752c5d4a5a235329651de6372faa2c5cfff52c5b0c', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: '6845980cca04a146d54aa61031758fc1055375c25f8e062e65f960ff606df372', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46839, hash: 'e777657873224b60cbe55e6d686b940db3f0e5a481c5406d2ea13a18ff0f782b', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19689, hash: '78ae55b15e4b95afb9837d052d310182def23fdbad14c4fb2915d10d007343d0', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: '418d24cf3cdf19775591dc91c0a595a6c2c30d4b03191e5175335778baf71b08', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 73660, hash: '784ffda5a2c1fd7286b88f45bdd50afdefb4cede8251c7ca0b10767de919d8c2', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25835, hash: '3df71af8dfab68244982520f11d57fb6853054dfdb20b898f1ca86e01361d2ab', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 147849, hash: 'ae20b8434c2dde1f961e6a41a5c0ad741415cc1f7e707d326c265f3e68a3fd1f', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81627, hash: 'b30e51b4229abd6a548e173eae0df26a39b27f3704bd23b98850cedd7ae382c0', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'styles-4VIILCSB.css': {size: 31316, hash: '5oJbo+fa2jI', text: () => import('./assets-chunks/styles-4VIILCSB_css.mjs').then(m => m.default)}
  },
};
