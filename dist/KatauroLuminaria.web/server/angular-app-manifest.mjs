
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
    'index.csr.html': {size: 14737, hash: 'cf86179dc365d09746c1a1a90ae55eb25afc582166c1f72b72e267a492a0b035', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: '4d8c0895c1633ec4dce33629b74ccb3fe9adaad3c413e0978e9f832395f201a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: '824af2ce3d9d6512fadb61b8c0b8c26299595e7ea39d79a2a447e356831f7bd6', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: '94f7d92f32bff86af62220fee1005b7712ff8de6662adcc330c3652dd4e88aeb', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '60355886813e127f2bdcd7e585b1519f70d708032dd81ccace9dbb996cede023', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31275, hash: 'c55bd3143b14a26f10fdd62176bce4edd2a1e1480f605ab8ead2c841725855f8', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: '72a161565f1396ef59ca030fc13a49f09fa8d22c28d442b58e35b215304375f8', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39503, hash: 'c44d2f72f833a846c4bb48a6157d7b24f34f8ea021c14b1e9c5a14a10ecee9bc', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39503, hash: 'c44d2f72f833a846c4bb48a6157d7b24f34f8ea021c14b1e9c5a14a10ecee9bc', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: '0e96c26d29a3b8564598a591f51427b63e83219bba5ad10f2d83f1b77290d260', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39503, hash: 'c44d2f72f833a846c4bb48a6157d7b24f34f8ea021c14b1e9c5a14a10ecee9bc', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39503, hash: 'c44d2f72f833a846c4bb48a6157d7b24f34f8ea021c14b1e9c5a14a10ecee9bc', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: 'e01d10ae2a69ccde82ac03ca746084a187b1300a3bc73bec117d4791c468695c', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39503, hash: 'c44d2f72f833a846c4bb48a6157d7b24f34f8ea021c14b1e9c5a14a10ecee9bc', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: '9149a2afe409d927e16d1970c8265dc05e56fcc29124d0d98e85016ce7f73840', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: 'f4a9a3369bc9ffec26dc9116ea83ff6c3b31a0afd37bd359cf0e1c3d3332c6d1', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 76171, hash: 'a3282f7f1281259b27d3442ad7befe275535ad339093f4f603ceeb54bc7c0471', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 45703, hash: 'e316446d8487e08ce3998dc1fe986bfb62448e1c6beb9c75af40db066002447c', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
