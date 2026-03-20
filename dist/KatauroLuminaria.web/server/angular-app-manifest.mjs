
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
    'dashboard/galery/index.html': {size: 52654, hash: 'c593b9fd128b32685564b6844658425225f9b9038fa964ca9a8057a2a57feb37', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 39558, hash: '87777f91680ff790c927242e626dceabb4f4a59cb9307a461f582e092a357e48', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: '15fb252a4448ac2733b94bb5e47edeb5ea6241a680d4ce7b8cfc0afe0edc5466', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: '8710a105c878cc90cca8b405255af3aa492be8a63d3befa146aa725773811118', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: 'f828101f962400bbb877119029b2d2ee8a0425d586b68147db43b7d477dd606c', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: '729eb1a13680bee755ba2fa5b38aefe23b701189dfbc1cafb70e03ec0bd3868c', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 39558, hash: '87777f91680ff790c927242e626dceabb4f4a59cb9307a461f582e092a357e48', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31278, hash: '3dc76156e9cc5f4c775bbf24349aefe3f17a7f775b2df01b05487ba8023618fd', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: 'd5da712dc9fa9db6bde4a40a61a2070ba866052bc026e35bebc5b5468b724e19', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 58567, hash: 'a8ce662670ef2fd4da354fe5c16f4bf80bca7735b731697f5e2e227a3254df46', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: 'df1594a6495e08abfea979079060acdc22a35b48e9045e377f6cfe728253f4c4', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '40fae7762549727fe099fb7fdd2143309616e5a11ea7fa709062d0870a0cb2c1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 39554, hash: '2e49b6b8982a4d014e310ba253a669ec4335f064d8358090ba98ba3d8dab0b93', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 89767, hash: '2d7f669f815de09211c590337faab5e19ecdc81b7bf42179ee40d07a51e5c258', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
