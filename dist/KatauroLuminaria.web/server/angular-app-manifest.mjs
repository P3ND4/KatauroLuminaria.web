
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
      "chunk-RCQBIQ7Q.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-YER7CIKH.js",
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
      "chunk-B6ZLATMJ.js",
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
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de pie"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de pie/21807b3a-594a-4cdc-892a-7fb8da947cbc"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/accesorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/accesorios/b31137ed-eb34-4522-9c32-d235bd97c983"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/accesorios/b50125a2-5fe7-4ca2-9aa4-d698adacdde7"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de techo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de techo/2cb7194d-6c24-47e5-bc25-847e7d7d016e"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de techo/58f25f0d-fd17-45a9-ad68-435204a15657"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de mesa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de mesa/7d75f8cf-8b4b-43de-a726-41642b92ad25"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de pared"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/luminarias de pared/3bc99fc9-5fc8-41c3-96d7-4c73eaf4ead2"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5AJBWTX2.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-5AJBWTX2.js"
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
    'index.csr.html': {size: 14737, hash: 'b1214ef55cabf7bd66a4726b9c4a41470ff829d96fce8bacbc0aa82106c6b3e1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: '9c7b430e60088b045862e2ef3d0ca913258f8c93f59951150dcf4ae887c2e9fc', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: 'c0f212b3714b7bc5d75253883afb139f0ea7eed485e6f4b115f9b7f588cb65e3', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: '81e5cff3f3661dc9ce0d5ade5dc0b5fc81ffc4042a1130efcbed4ac6bd075075', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 87798, hash: 'bda246f39cb50a066b7ad94d707fc477a05a37b9708fd1acc39acb180671b35b', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/b31137ed-eb34-4522-9c32-d235bd97c983/index.html': {size: 396, hash: 'f79562c4ed76f91380b82d5834c4e84cd9f072e47a33d047af584583978604e2', text: () => import('./assets-chunks/dashboard_accesorios_b31137ed-eb34-4522-9c32-d235bd97c983_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 435, hash: '2073b0d53baf02e0a790e05b630a1958ee0d787d6ae0b29bc59e6484e034e35e', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25061, hash: '354f7d148019f122699ddb1cafb1f2870c112ee16e3ef3426e2a4a4784835dd8', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: 'fc20ef8f3b05767ff6353daf28aba78e41e69dd6e20e7b3f70637bb5ed45a8c8', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 57582, hash: 'bd78f4fe32676e1ccdf264ff7fd97bc1df6b716cde0abc48ebf5c73b5c244195', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: '5c7e3105b05fde5cdc3b355ff51c6c105dd688d47f4f46b9845be3efc3edd869', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/58f25f0d-fd17-45a9-ad68-435204a15657/index.html': {size: 435, hash: '2073b0d53baf02e0a790e05b630a1958ee0d787d6ae0b29bc59e6484e034e35e', text: () => import('./assets-chunks/dashboard_luminarias de techo_58f25f0d-fd17-45a9-ad68-435204a15657_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/7d75f8cf-8b4b-43de-a726-41642b92ad25/index.html': {size: 432, hash: 'a1e326b58a627176e1c658829a217818ed32f333f069a934e40e8b04275a7357', text: () => import('./assets-chunks/dashboard_luminarias de mesa_7d75f8cf-8b4b-43de-a726-41642b92ad25_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/3bc99fc9-5fc8-41c3-96d7-4c73eaf4ead2/index.html': {size: 435, hash: '9aec83ec7b8355a87bcb5fa43de91aed7d3dabb639f22c7af565d61ef72ae659', text: () => import('./assets-chunks/dashboard_luminarias de pared_3bc99fc9-5fc8-41c3-96d7-4c73eaf4ead2_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '8478785708b7371d4c9b26574b96926064ad70b23158afff43c48ec132d6bb7b', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23204, hash: '19a4bb5553be3623c63d9f148b6e89387643bfe52d39610f63de15d406c9a9bc', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/21807b3a-594a-4cdc-892a-7fb8da947cbc/index.html': {size: 75020, hash: '492e93309b478475e74ff3691caa895a0073279b3ae99e50f3619bd6f9f75591', text: () => import('./assets-chunks/dashboard_luminarias de pie_21807b3a-594a-4cdc-892a-7fb8da947cbc_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/b50125a2-5fe7-4ca2-9aa4-d698adacdde7/index.html': {size: 396, hash: 'f79562c4ed76f91380b82d5834c4e84cd9f072e47a33d047af584583978604e2', text: () => import('./assets-chunks/dashboard_accesorios_b50125a2-5fe7-4ca2-9aa4-d698adacdde7_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31267, hash: '92a66f8b749879b601abc169d58eae396588c593b43f632f6dc02868117a52ac', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 432, hash: 'a1e326b58a627176e1c658829a217818ed32f333f069a934e40e8b04275a7357', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 429, hash: 'fddf6add93c8b19da03a2efc990335b28d695a340e7be447dfb73ab2cb4c1b7d', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/2cb7194d-6c24-47e5-bc25-847e7d7d016e/index.html': {size: 435, hash: '2073b0d53baf02e0a790e05b630a1958ee0d787d6ae0b29bc59e6484e034e35e', text: () => import('./assets-chunks/dashboard_luminarias de techo_2cb7194d-6c24-47e5-bc25-847e7d7d016e_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 141086, hash: 'b82a1664cdd93dcf463b2f05f8bf90f362d43d2bcd06a8350591d881fb856934', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 396, hash: 'f79562c4ed76f91380b82d5834c4e84cd9f072e47a33d047af584583978604e2', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 435, hash: '9aec83ec7b8355a87bcb5fa43de91aed7d3dabb639f22c7af565d61ef72ae659', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
