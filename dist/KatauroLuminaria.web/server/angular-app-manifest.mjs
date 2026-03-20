
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
    'index.csr.html': {size: 14737, hash: 'beb7e7c0a05d2417167238135e5dc58ebff291015c6a32be3cf5352d5fbbd437', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: 'f73508a046e24180a0b9f2a48b9b936b699559601c232dafe137a17b8b3f992d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: 'c35d243f8361253a1d5f53d3d03cc595b4f1638a721db30df4a9419265762f41', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: 'd5da712dc9fa9db6bde4a40a61a2070ba866052bc026e35bebc5b5468b724e19', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 52654, hash: 'c593b9fd128b32685564b6844658425225f9b9038fa964ca9a8057a2a57feb37', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: 'ac647b1e923b355415377c95301a679eb51de6ca3511a44ef82f331718bfddd0', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: '74bdfd2e046b4ac8bfb69e7d30ae77c780d3e36aea063ab3af8e955bfce71cad', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: 'a29e3313d518bad9cef516fc407bd7ec774f138c0e2bcb461a28ae61d24f88fa', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: '0ac2433132c3e2dc970368df1ea11239b35ec768c129d4068e3210e136c57669', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39558, hash: '88027837dc49a4c46d26c19a9da475492cb83ca5b115111a09489dd1db8efca3', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31278, hash: 'f21ad8809c0383d4b31f55dd6aa6d38df7bd341785668641fbdeb7fad3fa2460', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 58567, hash: '3d213bf535d19fcee172049598ab1b0b2e8a137694032743131a5f38be8bb0a3', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: 'c8b3c99f53c634df9b732f9206c433ce58223d8813742c3c589a35f1c8746ca8', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '40fae7762549727fe099fb7fdd2143309616e5a11ea7fa709062d0870a0cb2c1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 89767, hash: 'ae4a7ec28c979c08e44d2ed2e274f4aee00deae1929472ba214f20767ed1b522', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
