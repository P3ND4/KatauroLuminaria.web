
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
      "chunk-D6GHPIEK.js",
      "chunk-VBFRUNZE.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BBOFPE4R.js",
      "chunk-22UMJDTX.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JGTGQRKT.js",
      "chunk-22UMJDTX.js",
      "chunk-JFY52BG6.js"
    ],
    "route": "/dashboard/team"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-P7ZJO5ZI.js",
      "chunk-7QGPCMBS.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js",
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
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de pie"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de pie/04b3151a-66fc-4bb4-b07b-0c188b600b5a"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de pie/59a6a292-a54a-48bc-a233-83bd7d806591"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/accesorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/accesorios/184dff8b-3368-4d74-b122-706623a29c73"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/accesorios/2556ea39-5fc9-479d-a05f-7764ebd61d49"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/accesorios/420743e1-375f-4fab-a7fc-881aef5b7df3"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/accesorios/78ccd2ae-eb82-4fdc-b68b-770661b0ed2c"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo/08ad2389-1bc7-4757-ad34-af9db8e0b8e5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo/2341a0ec-e782-4b3d-85eb-1ee0531a0597"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo/bbc3d350-86cc-4d80-93ea-321b5ba09b5f"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo/e48723eb-c3e0-4f98-94bb-452377aa36ff"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de techo/fd53e5cf-aea3-4687-a3e7-3d9300b7ff58"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de mesa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de mesa/1c76fd7c-b9d7-4838-83d0-e6a99895317a"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de mesa/5c581aa1-6fd2-4ade-bc05-468d9815096d"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de mesa/74f7d969-2dc2-4367-890a-0230eaa00785"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de pared"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/luminarias de pared/d717c86c-ddf8-4cf1-9d75-f4796f339aad"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-4677IABD.js"
    ],
    "route": "/dashboard/*/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/signin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/signup"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSVDENGU.js"
    ],
    "route": "/login/forgot-password"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GSVDENGU.js"
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
    'index.csr.html': {size: 14686, hash: '896b7201017bbc449f2c9f8aee62231d5db9ae00143609fcdf0983fcf1f97b54', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7884, hash: '8bc1ac9509d070ed4769a2112a4129992e121f02dd403d6712efab1111e38eda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33914, hash: '66ca2bef06383633795055404557477a73a5f75ef37917b06781873a78c61016', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 396, hash: '8de6ee684cd4929a91abbe3f8141a3f2fd6c440cf712167032abde024eb10c89', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 34087, hash: 'afdcfbcd7aa79ba3e78960f97170234b99d553a2b6f3f54cd94f7cb9d28025a1', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 85836, hash: '7e0e5bc73b6bc5d227ee5c9d0a3a23823d8adf50d0fd3abe9d0e058c452f56ef', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/08ad2389-1bc7-4757-ad34-af9db8e0b8e5/index.html': {size: 92788, hash: '48cd620954e425b5b3092257b46ee17e5b1e2684900291e5619555454bbec2bd', text: () => import('./assets-chunks/dashboard_luminarias de techo_08ad2389-1bc7-4757-ad34-af9db8e0b8e5_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/bbc3d350-86cc-4d80-93ea-321b5ba09b5f/index.html': {size: 91780, hash: 'b804f234298b2aeb9f79eb2ea21c1aed6ae42e3b0c8e16b09bce921b7f13ac48', text: () => import('./assets-chunks/dashboard_luminarias de techo_bbc3d350-86cc-4d80-93ea-321b5ba09b5f_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/1c76fd7c-b9d7-4838-83d0-e6a99895317a/index.html': {size: 92605, hash: 'd1191aa232f9d3e92adc9cd69d097297de3fd77b0ad2ff70f325a6b6e0ae489b', text: () => import('./assets-chunks/dashboard_luminarias de mesa_1c76fd7c-b9d7-4838-83d0-e6a99895317a_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 94720, hash: '7bf2b744cf03872e1ac2e626b75f5d5c89d9a91eec30e9330650e171fe3557ab', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 435, hash: '8ee2800c3a63beff32013c27a07acec09fa34918c6e2809cf17fa15ab9a3b7a3', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18887, hash: '10c01ab33308385df76f1cb415171ab545a9809b7200239b206ecf5f0d6e59b2', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31227, hash: '3fb6b991f30b647026aaee35916fcae2d8a9554ff1a3cf1cf169c8cfee047d94', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23157, hash: 'f78cbb6298954e4e581aa83f1f823e01a55517e63725b784839f7f0b83ba2fc6', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 132029, hash: 'ffbeaaf1a849a505d476c6c56f946fb96cf1ef1042a872778466227f089be488', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/2556ea39-5fc9-479d-a05f-7764ebd61d49/index.html': {size: 95456, hash: '921d02f795d35745379eb9cb701638231cb381876a3ba8488e7b83fbdccc75e0', text: () => import('./assets-chunks/dashboard_accesorios_2556ea39-5fc9-479d-a05f-7764ebd61d49_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 429, hash: 'c1a83c801861a7be800dff9a92bb6051da8c41a4c33ef06baa21a872118af511', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/78ccd2ae-eb82-4fdc-b68b-770661b0ed2c/index.html': {size: 95386, hash: 'b2fc07333194dc47d58a8665e5f9ca2625386a54b83eef321230e69a37bf2672', text: () => import('./assets-chunks/dashboard_accesorios_78ccd2ae-eb82-4fdc-b68b-770661b0ed2c_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/2341a0ec-e782-4b3d-85eb-1ee0531a0597/index.html': {size: 91793, hash: 'd31715048b0849d95a5544b9d619d6f6ac6a96542663b370c56f03cd022cefa6', text: () => import('./assets-chunks/dashboard_luminarias de techo_2341a0ec-e782-4b3d-85eb-1ee0531a0597_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/fd53e5cf-aea3-4687-a3e7-3d9300b7ff58/index.html': {size: 91872, hash: '3b6b77e009c180dae976a3d29f140e0ed1ed4441f78dfd030d5a617c21fa37a3', text: () => import('./assets-chunks/dashboard_luminarias de techo_fd53e5cf-aea3-4687-a3e7-3d9300b7ff58_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 432, hash: '815e31457ed1ac01e6d03958d2f61d4734f64898e71dbf838fd188873764d983', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25013, hash: '75a9418bbb3489a30d6de8c852a56137e809cbe56955690d0188ecc71223275d', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 261, hash: '5f1d373191e30b57e7425aa4122f4dba04e2a7f9864fee74bbd3b91c4b9221ab', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/59a6a292-a54a-48bc-a233-83bd7d806591/index.html': {size: 91314, hash: '49718bb4611a131bafe85e6358ae6c236d70d4eebbcbcc33417e7b93bba2828b', text: () => import('./assets-chunks/dashboard_luminarias de pie_59a6a292-a54a-48bc-a233-83bd7d806591_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/74f7d969-2dc2-4367-890a-0230eaa00785/index.html': {size: 91869, hash: 'b9c9462ad560ba585bd01d152f7b3abd1eb97fd1dff13c0d4ce9c36d21792be6', text: () => import('./assets-chunks/dashboard_luminarias de mesa_74f7d969-2dc2-4367-890a-0230eaa00785_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/420743e1-375f-4fab-a7fc-881aef5b7df3/index.html': {size: 92394, hash: 'fb73b4078ecfa8b4d17244804203d650d8d258b7e227b0db23007a29b26b9054', text: () => import('./assets-chunks/dashboard_accesorios_420743e1-375f-4fab-a7fc-881aef5b7df3_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24453, hash: 'f10f134c1c64c8f053da6473d08d27b1eb0b32a384c15e193b3490f6d18d3a70', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/184dff8b-3368-4d74-b122-706623a29c73/index.html': {size: 92197, hash: 'b6492a2e628686f7bdaeeaf4e5a01540dc10148d421f03f03c57a69efdd960f8', text: () => import('./assets-chunks/dashboard_accesorios_184dff8b-3368-4d74-b122-706623a29c73_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/d717c86c-ddf8-4cf1-9d75-f4796f339aad/index.html': {size: 91800, hash: 'aa39ffec50afe71568f86c1c43607bbd9bb6d83f897e581b506a358fc8e160d0', text: () => import('./assets-chunks/dashboard_luminarias de pared_d717c86c-ddf8-4cf1-9d75-f4796f339aad_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/e48723eb-c3e0-4f98-94bb-452377aa36ff/index.html': {size: 92047, hash: 'de868f97e7a5ca4425476a693da81f658f59b75d2ef826095997cea74041ef8a', text: () => import('./assets-chunks/dashboard_luminarias de techo_e48723eb-c3e0-4f98-94bb-452377aa36ff_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49983, hash: 'b5a9693183711d3ab3dde5039d71ff79e945dabfb7fcfe7799d478fdccee67f0', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/5c581aa1-6fd2-4ade-bc05-468d9815096d/index.html': {size: 92132, hash: '83ece1a37769ee72bd14b156394d95243cf6508fce9b223a1b9d84170f73e4be', text: () => import('./assets-chunks/dashboard_luminarias de mesa_5c581aa1-6fd2-4ade-bc05-468d9815096d_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/04b3151a-66fc-4bb4-b07b-0c188b600b5a/index.html': {size: 92820, hash: 'ef861a5fc3c97837963c265812eeafa655da0827c25fb9c95c36596ea86eddd0', text: () => import('./assets-chunks/dashboard_luminarias de pie_04b3151a-66fc-4bb4-b07b-0c188b600b5a_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 435, hash: 'cbe05aa723baf4af46d7bc50069799acb3435c55c7630273488a9dfde690a8de', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
