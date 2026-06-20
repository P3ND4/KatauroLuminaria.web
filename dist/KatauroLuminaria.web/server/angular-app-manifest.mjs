
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
      "chunk-4PYA6KZJ.js",
      "chunk-NKEDFCV4.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UFZ7PNH7.js",
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
      "chunk-GAZJWEW7.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-3DCU7OXQ.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3NBB3PUH.js",
      "chunk-7QGPCMBS.js",
      "chunk-JFY52BG6.js",
      "chunk-STSGNUXK.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SQAJH73W.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-SQAJH73W.js"
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
    'index.csr.html': {size: 9920, hash: '1ae5289a7f0032887f5d2adf7c67bf9db976d99a8eefc4fd206e87ba3c2a5dcf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7985, hash: '2eca177dc1d98ed4a994e8587943d31c2799a5f0573f29d7e1c0b421702f0f2d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 14881, hash: 'c0b6b67b0a9974cd58b9b41112505b9d4c943cec121ef903ef1f8bdd24b54b67', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 19146, hash: '86e2868541939002fca2cab961e90129011e42b3f9ad5e21d300f9b737a66cb3', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20589, hash: 'a9029e9e3250d54d849e8590ca5d3e328d2b6534d85a397ef206ffab1ab60804', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 20444, hash: 'a2c2c996bdffa71f1e229ac23fd84913b6bf8a979dbcb7c5195e8ea950bf8ad1', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 86367, hash: '45b5c20c4aab3878a5f3831435dcc22deb7ef2f99ca21818f669880dfd211f2a', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 83415, hash: 'a9cf03de7454fb046ec71bc6f040fcae3acc7870c5988b64608f1fc7265c9032', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26735, hash: 'aedcced67e1e838cae39375bbbf7735cd537eddec52a707f1bce09a0c0001cdb', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 59244, hash: 'a1ccdfba088517053f50d7fbce273119752651f573489b6cc75e1e087faa1c50', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 53285, hash: '5c27564d9325ac8a4c30b0f5b23f4563d9de691600db5cc2196101cd7057bf2a', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 155776, hash: '0a94b94ab1eb7ac5670d226e71b60e9ca73048a8d0e2546440d05a127b6dde8a', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-E5N65WQL.css': {size: 7084, hash: 'rV4JqxJn7cM', text: () => import('./assets-chunks/styles-E5N65WQL_css.mjs').then(m => m.default)}
  },
};
