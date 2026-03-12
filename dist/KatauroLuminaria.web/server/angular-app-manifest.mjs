
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
    'index.csr.html': {size: 14737, hash: '14f6e6e6cda5f9100b87be5fd59d92c71970e07957cd86479306559877c6de5f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: '87355d2ea19d9c3f039600b19ce52f79c0d60e16b6b5d7b4462a5029284294d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: '15278a4ceec8ac8b8fcd80ec1b9b6d2390792140cd6bd050fab40be342b46a8a', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: '3ae56dbc4dd2eeff9d73ade17daf7097c63d407d17b5577be19168eff1a05fe0', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '248e7cc8e5a846e1bd7445cfd2eafce28f6a857f5943cf370dfc8d535c80611e', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31275, hash: 'a9579f0e058496d6498350c368f3f5a358eb6ba4716a203b756a19607b8d4a84', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: 'f4bef56663c25ef8b0118e552d9fef145194b4c0a4b731c5b7bd2d3b9e755e85', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 76171, hash: '4884c08ea306df8d3b8250ff2326bf156daca11f33e73b49ed8faf6fb81cd77b', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 45703, hash: '2d3e5af4d1aee8d8f697e99c89c9fd5955f47c816cfe00d13e629aed0e943541', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: '0e68156a13740ea4549e4da49c9d518b8b6a41c9ee4b4b90bb602d01eb52e483', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39503, hash: '9ad0df8aa73ebe207a66a55c92bff2ba71000cde710bcfb9d107f4911adb063a', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: '9aa4b7bc6c1af167ad3710ca1234a819c37c71528958212cb5f3347d4f106a86', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: '71bc0ccab8ed841e0e920034534fbcdceabc6454ef519eb748fda52aaf90bf97', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39503, hash: '9ad0df8aa73ebe207a66a55c92bff2ba71000cde710bcfb9d107f4911adb063a', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39507, hash: '8408844661cea89aa5e1c3e57d5b3616084180d1acbb3ed00d8faa9ccf2ce74a', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: '89954d7baac9f47fcefad748bc523416882e44e686c307b3a0ec0e9dd21eedd8', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39507, hash: '8437c7a1738086e7cadbd51b35965fc67f2307542a799d64ee6538e7f83b4eb3', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39503, hash: '9ad0df8aa73ebe207a66a55c92bff2ba71000cde710bcfb9d107f4911adb063a', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
