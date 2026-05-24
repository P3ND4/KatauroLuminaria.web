
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
      "chunk-FEN4HPP4.js",
      "chunk-IZ4IFJTQ.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AZNV34QD.js",
      "chunk-4TV6CSES.js",
      "chunk-PAQIFZXZ.js",
      "chunk-G6XDZR4B.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-OGJBIQF4.js",
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
      "chunk-ZM5YPR3E.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-TPCTROUC.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/blog/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DJXBJRZB.js",
      "chunk-7QGPCMBS.js",
      "chunk-G6XDZR4B.js",
      "chunk-JFY52BG6.js",
      "chunk-W5VZSGA3.js",
      "chunk-BBPYHH2U.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GG3ZSSEI.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-GG3ZSSEI.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V7XQIS3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V7XQIS3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V7XQIS3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V7XQIS3.js",
      "chunk-PAQIFZXZ.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4V7XQIS3.js",
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
    'index.csr.html': {size: 9500, hash: 'e5add054bfe4b888e4c97e55556575e6d875a8cb011cd6a559e2d97e5ae02420', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7602, hash: 'bf2830a4a1b92605deab5fa66b154984656e91df4f0133b6fa600dd6fbdd1ae0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 13816, hash: '1f042164a2d98d4e5293565d6658cc754695e92eada04ae552fe99d79edf6c5d', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 18081, hash: 'd1f07e8c9823ae7afa753fa61aebbb32bcb2aea6906c45e88ee9db82f80f79f8', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 29322, hash: '76c1f225faa7090799f004bdc2a580d423fc8310a0fa5dc8b387e563e7862fad', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 46827, hash: '2693c3bd2becb7a7c45b0e43b12cf4108e309429a6ef859a05625b4cd0ba9163', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 19382, hash: '4d280eca5ba47ca27612d102bf5d25238e12a575d870be4636acc63fd051aa48', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 20089, hash: '0a54d39e8abdb8a8607d8551411e0b7454b5e7a7c06bb10fe9fba57b2ac9a849', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 81717, hash: '7ba96d7befa7b6db849070692ff7f8dd7aa3075054a3311f274189efad29bf32', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 26310, hash: '4773197588fb3204d6ae60ab5e7c9986aa1e6b648555f759c6184c713071c89e', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 50847, hash: '8a204f86d95f74ae910cde5faffc2572f7dcaf798b9d13369c28a509caaaa71d', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 147801, hash: 'aa3d9c68995fee43e394adc2b7c1c2ded5bf911de832188f737103f10a1b5b8d', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-NJJ6QWWX.css': {size: 31060, hash: 'di/7s7q0Knc', text: () => import('./assets-chunks/styles-NJJ6QWWX_css.mjs').then(m => m.default)}
  },
};
