
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
      "chunk-WNEST2HO.js",
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
    'index.csr.html': {size: 9920, hash: 'e156aaf843acdf7865932304e34374695c497653b42e5286ad188525c4a36f90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: 'eff1b1e09f79555e39476c934fa835c7f023b1113c807766159fe4fe4be8aa07', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14881, hash: '9b03c2c54fbf9e158568ba3e2c7e5c2c97dede22578b9d212f9c1d365c32122c', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19146, hash: '6dd76bd18633233c923054c152adf3e16a19b0f674eb07cf2a720a14c3165d64', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 56482, hash: 'abdd13da7f4fb1f6ff982e2f3fa87f2297c8518ef363630d2eb796ff50420e9e', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20592, hash: '59f2a6bcead73afbfec777a3a5b225f289dde1daf75aaf3d96920eeda65549c9', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20447, hash: '730b247abc22e47089f8e740c9cebd6fee8866a6b8a3d8905b348b1a5f88d17b', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 83153, hash: '77de8bd81a278ac335fe153bc67f1f742a305243ed3f0572d8e840fe7fe89b75', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 149502, hash: 'b2ada16ac2b3e85fcd477352a0034197c2528207d68bf4defcfe5ef3fdd93e3d', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26735, hash: '80c978a0dd8bf1e3e952b5e2fd0e7d8e4fddd4977d0f2604f014e9a6ad6b9b03', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86367, hash: 'cd3634c41393b75ac405e7d8a721e99422c978d3bd8f9675e6984a64784dd298', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53285, hash: '691a08aecbee086c47bf5e781204c2d2212080de2fea5d2cd65cbb72088f7846', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
