
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
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/luminarias de pie"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/accesorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/luminarias de techo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/luminarias de mesa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/luminarias de pared"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7S2VWW4S.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-7S2VWW4S.js"
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
    'index.csr.html': {size: 14737, hash: 'b6dd681b4d08b5217d157e793c8e8692bffc9922ab2a467137a2fcb0b2c4040b', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: '16e9b36a5a103e8dad88039f7778477a2847f6fadcfba367bc526f3413897a5f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: 'ff26f4edb70e9a72f7ff073bbf10f0096d9e098102cbe730d5b8a7dbd5c7e098', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 52654, hash: '7323bb38430eb76cc96d9f0e796f644e2cd83b4fb1dbe2faba56308e890414b9', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39558, hash: '3c72d636c28f343ef0303eb083ce260ca05f23f3ccbf23e03f4e8b07bb090437', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: 'baa5a36c0fbe175e9e8123bf04b42933be0030d5da0127a36c9effd4c2fdfe54', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: '30ac2cc9602c7575b380ce4cfdc386d042a67b9ca9bd160696089d4babecf397', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: '253b639bd20629eac7fd6aafc1613552a436862ef425cf5251ba7cbfb5d33855', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: 'f82ba3917f5cf965e16647ee316062a893d1c095aa060991aedcb42f72caee73', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39554, hash: 'bc8a72460a29659ef8e77f87b2256075a5d1c486731c7928f06f2ee2a0038dc7', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31278, hash: 'df86309cc81cf0504a68e90cefd32d968ab965469d23f6cc2e832496c0c2c7dd', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 89767, hash: '3810f90a4490d7b1f03288b5033a888b6d19e3db37a53bad582d89aa1ae57b62', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: 'ea096d6334f3c426e466c4e4123087c08a6050651a4563bad822083ab3b85019', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23204, hash: '1a1d692ebc04d464f34df516b81229a685facc885f7acf1d741abb638cb2fff0', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: 'cb1b2864c870b6854fc6f015f6f77954cf0cb4672622977727c017d6835c34a0', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39558, hash: 'f056fada3d03036df193539dd352b5520a462d8801c3d9d9f527cefd270defc4', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39554, hash: 'bc8a72460a29659ef8e77f87b2256075a5d1c486731c7928f06f2ee2a0038dc7', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39554, hash: 'bc8a72460a29659ef8e77f87b2256075a5d1c486731c7928f06f2ee2a0038dc7', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 58571, hash: 'b6727b4374c7fbdc2ddcf6bdfc89beedc79e8b1a9a751756f3f985dc8768d609', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
