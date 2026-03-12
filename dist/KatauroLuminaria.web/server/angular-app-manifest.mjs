
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
    "renderMode": 2,
    "preload": [
      "chunk-RSE5AGL5.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L7GSSYGF.js",
      "chunk-5GDBXQSX.js",
      "chunk-Y5TQSJAL.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-57X7LVPZ.js",
      "chunk-5GDBXQSX.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-A7BGHKA3.js",
      "chunk-Y5TQSJAL.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/galery"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-AXO424OS.js"
    ],
    "route": "/dashboard/blog"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/luminarias de pie"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/accesorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/luminarias de techo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/luminarias de mesa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/luminarias de pared"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-J22U3ZJD.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAF2JM32.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAF2JM32.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAF2JM32.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAF2JM32.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UAF2JM32.js"
    ],
    "route": "/login/change-pass"
  },
  {
    "renderMode": 2,
    "redirectTo": "/dashboard/home",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14737, hash: '33686c781a6d5df51a8855bc64332feeea664c8b620d928c0cb608fd9b095aa0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: '614bcba3f09a4aba74b13dd54e48e5f3da3fab1264af5787daac460642a64b9c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: 'f6017123b1aabd10418369489fe61b41cf2b7b3a35015e2db3f042a8171f5010', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: 'c996c528aa4b8d2e39b52bd4e1c924c106c419e6cb155cd7b1c9e13537bb81f0', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '6cd12c68e14279c829234c45bd613526489e625191f5e4671e3e28a501b92129', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31275, hash: 'fe631d035888c3b3ea82f3bb3c2f7f828df329d032c99fec42a118f7a55a7d41', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: '066eedaed8459a43f435ad268141167d0ac360a9d3fa11cac7bf62fe5a74044b', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 45703, hash: '007470739e8c6340080e383c8c8b8d5889d308ad23722b8b3971229dba8eb9db', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39503, hash: '13c2ba1711bc4467fdc580b2420d15248036197d3db104b9612c97a2395cea83', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: 'f6623b7ebc4327abef7c2a2cfa83d16a977cdb8a3d75d5c39075053f439ca52e', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39503, hash: '13c2ba1711bc4467fdc580b2420d15248036197d3db104b9612c97a2395cea83', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 76171, hash: '6d14b2f50323e6ff62e46d3a07e58ad07657709c6e1aade12a1c8860e51dbbf6', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: '1354657e55e2ae3dcf03cfef54d3cc8ab8e61e74d8dd60690a578d508a444c88', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39507, hash: 'db6b4cd9e9ce0681357f253dc199dc4124f1308318932d149be0e084b52030f9', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: '1f13ae2c447ea4a4400e36c149f00fc7dc724a9ce37fb28812973765f5635176', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: '717173896a05f2336d78d25df7bb364a8c98c1b9b6184eba4e130d2ba8580a69', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39503, hash: '13c2ba1711bc4467fdc580b2420d15248036197d3db104b9612c97a2395cea83', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39507, hash: '4c7822347772b70514b51bdc207957bd94c7f54b857cdd770fce7d3d1783a1bb', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
