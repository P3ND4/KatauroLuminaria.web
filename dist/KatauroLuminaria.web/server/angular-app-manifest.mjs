
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
      "chunk-VEWZZMCW.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BNQHWBEC.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-WJVGSFHJ.js",
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
      "chunk-MG5ON2Q5.js",
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
      "chunk-42CZQZJY.js",
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
      "chunk-A5OB47L3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5OB47L3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5OB47L3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5OB47L3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A5OB47L3.js",
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
    'index.csr.html': {size: 9671, hash: 'b21db59a7a789e35086e398046c6dea0be67d2119313111a68a20f83523d2d3e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7736, hash: '886efa6a71228b552de25a1e772b5794f4d2fa88161a4bcec49c48aa1dc63112', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13981, hash: '813dec15c36a07e80f505dcba3680285a45435a26858b4085dcdc50970f273f2', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18246, hash: 'b107f822a9b9321ef5d5694a6a4e31881adc6524a7f8ca2f8701bcdc0e498b34', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 85740, hash: 'f1c416b008be605651fdce6c7f47235cf171ad9ffb6baba4f6ba0b8ef83111e5', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 19692, hash: 'aaf25bc3f6800627b155fc954afc15e46ab12b88a56c0cf4f3accdad6af81830', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19547, hash: 'b1d8ef9244712f5ce65b6c4fbc099d6e4dfc3585fc3d54d84b9a9afc81b15493', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 60963, hash: '4ef5f60f1181dd002f85c1fe69cd1baacc92a6cdde781d9b8c29fe8cf6028fa1', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 25835, hash: 'f29bd219ec47e28bda7d51558fe1fd7aaee43ccff9448a5f09b91b4ffdc8221e', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 47281, hash: '4381125fc00d1d72217021a2a4e7903c7aa3b48e563b7d10090d2e060042e7ae', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 129382, hash: 'c9970a7be9a3f07d3a76965061b39fa2bebc49542994266598108c44aba854c1', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 79623, hash: '832494cfd46945af35751b3e8c9dc332ad7b8ca447ce4ec3f391e914dde139ce', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'styles-4VIILCSB.css': {size: 31316, hash: '5oJbo+fa2jI', text: () => import('./assets-chunks/styles-4VIILCSB_css.mjs').then(m => m.default)}
  },
};
