
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
      "chunk-EQ762TSW.js",
      "chunk-WE5HQ3RN.js",
      "chunk-LPWX3GUC.js",
      "chunk-G6XDZR4B.js"
    ],
    "route": "/dashboard/home"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-GZYJVRJZ.js",
      "chunk-WE5HQ3RN.js",
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
    'index.csr.html': {size: 14686, hash: '571ea1d307c96bed6bac5ab37139bc52e07c673e660187f7c330673008c02d06', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7884, hash: 'bb70d1565913ecc1b6140fc5fb833ae0a76d32b90e150803b77438dbb445d58c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33914, hash: '269201115b376089fc95c8e0e9793fb6fc66993e31614dbc2c0c6862eff5c221', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/2556ea39-5fc9-479d-a05f-7764ebd61d49/index.html': {size: 95456, hash: 'febd2300cc0b500b2dcb590ce584c895ad8a2c2b59568f654408d4ac8ab3f280', text: () => import('./assets-chunks/dashboard_accesorios_2556ea39-5fc9-479d-a05f-7764ebd61d49_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 34087, hash: '66658f7983169e3cf770d22c5d4693ad02003ae9f1023d0f711044c266fee5ac', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 85836, hash: 'a789e34657fbb364d9923fbcb314dbdeebdc5a9e6023f273f56b401364a2d274', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/bbc3d350-86cc-4d80-93ea-321b5ba09b5f/index.html': {size: 91780, hash: '7eea471e73fcbff27f723a64eaf2486de6b74d9c5f867730ae135ac2e6d3f9e8', text: () => import('./assets-chunks/dashboard_luminarias de techo_bbc3d350-86cc-4d80-93ea-321b5ba09b5f_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/08ad2389-1bc7-4757-ad34-af9db8e0b8e5/index.html': {size: 92788, hash: 'c217f4efcf78e40f88e312d9257a7463aa5f7d013e7d36c1e2ddc650d66fa54c', text: () => import('./assets-chunks/dashboard_luminarias de techo_08ad2389-1bc7-4757-ad34-af9db8e0b8e5_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/78ccd2ae-eb82-4fdc-b68b-770661b0ed2c/index.html': {size: 95386, hash: '7d4fd2d950e1f61a7dae1c452dc89d71477e30c622eef1f514cb0d5ca9b96335', text: () => import('./assets-chunks/dashboard_accesorios_78ccd2ae-eb82-4fdc-b68b-770661b0ed2c_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 396, hash: '8de6ee684cd4929a91abbe3f8141a3f2fd6c440cf712167032abde024eb10c89', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/1c76fd7c-b9d7-4838-83d0-e6a99895317a/index.html': {size: 92600, hash: 'd01e7f8e1a23c135c70df713f24a8787eb5b0c2831f67f22fb852621b2375827', text: () => import('./assets-chunks/dashboard_luminarias de mesa_1c76fd7c-b9d7-4838-83d0-e6a99895317a_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18887, hash: '1e75e1f120a3acfd070a59374c69f3b27e27f5bea03a652b057ab37cab6b2208', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31227, hash: '420caa99f49f4e48b86f1cb518b326fca7207dff8eecf244df1c1f7a5d59d048', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23157, hash: '693f0c7d9e5ba747f0122116a6e583bd13e0d92d923f5e6c2ba192090a3889b6', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/fd53e5cf-aea3-4687-a3e7-3d9300b7ff58/index.html': {size: 91877, hash: '248d03fc3cb178e2893de83a0761ac4cc64426fb89600c1c7b65ad119ed428e3', text: () => import('./assets-chunks/dashboard_luminarias de techo_fd53e5cf-aea3-4687-a3e7-3d9300b7ff58_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 126787, hash: 'a47a319317d48994ad7b0ecac41bb6e1f07c67033266c55bdf4f2736614dcdfe', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 94715, hash: '92133024eb0a91c1a3152b832fb1c3aef69d3c28a2a61fe418a96ff2a7e22933', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 429, hash: 'c1a83c801861a7be800dff9a92bb6051da8c41a4c33ef06baa21a872118af511', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/2341a0ec-e782-4b3d-85eb-1ee0531a0597/index.html': {size: 91798, hash: '1ea4af902e92aeb5f044384212d8effdb13b3f48aaff09d8505f2f1b8cf50c2f', text: () => import('./assets-chunks/dashboard_luminarias de techo_2341a0ec-e782-4b3d-85eb-1ee0531a0597_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 435, hash: '8ee2800c3a63beff32013c27a07acec09fa34918c6e2809cf17fa15ab9a3b7a3', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 432, hash: '815e31457ed1ac01e6d03958d2f61d4734f64898e71dbf838fd188873764d983', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25013, hash: '7e5ac8ec48a9c415df41ed7fccc948917f02599f8c553465b44d2331c5ddef33', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 261, hash: '5f1d373191e30b57e7425aa4122f4dba04e2a7f9864fee74bbd3b91c4b9221ab', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/04b3151a-66fc-4bb4-b07b-0c188b600b5a/index.html': {size: 92825, hash: '5e584b48694d9678b42a265f7d3ffc91b89edd8533ecfd881a6251a0aab1b458', text: () => import('./assets-chunks/dashboard_luminarias de pie_04b3151a-66fc-4bb4-b07b-0c188b600b5a_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 435, hash: 'cbe05aa723baf4af46d7bc50069799acb3435c55c7630273488a9dfde690a8de', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/5c581aa1-6fd2-4ade-bc05-468d9815096d/index.html': {size: 92137, hash: '302fc37438d949e641a4a64380f5f53fa91c6f8312345775c16f0dd97992988b', text: () => import('./assets-chunks/dashboard_luminarias de mesa_5c581aa1-6fd2-4ade-bc05-468d9815096d_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24453, hash: '7b3a416d2d562f036322698c22972c7825955253ae8a2d7cf1d777f118fb8b57', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/184dff8b-3368-4d74-b122-706623a29c73/index.html': {size: 92197, hash: 'ed30a7cbd3303230706c002732b783b5186080b7478be1b7ae440d3fc972dc36', text: () => import('./assets-chunks/dashboard_accesorios_184dff8b-3368-4d74-b122-706623a29c73_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/d717c86c-ddf8-4cf1-9d75-f4796f339aad/index.html': {size: 91800, hash: '9f180a8e2f291a7715534a41efe4dfc7fd021ddeb67f9d47b642d5ac225e6dc7', text: () => import('./assets-chunks/dashboard_luminarias de pared_d717c86c-ddf8-4cf1-9d75-f4796f339aad_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/e48723eb-c3e0-4f98-94bb-452377aa36ff/index.html': {size: 92047, hash: 'b72f48185615cf3306bc1e8ef5213cfad7b03af82646b5583c535c4c62434c23', text: () => import('./assets-chunks/dashboard_luminarias de techo_e48723eb-c3e0-4f98-94bb-452377aa36ff_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 50383, hash: '1640a4826cfe08fbf10bd71b279e388aa1597ff462985c4fcedc439464441bd8', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/59a6a292-a54a-48bc-a233-83bd7d806591/index.html': {size: 91314, hash: '5621b14ac144e414d3b871dd5fb5cf731ad3d7230537b7b646a6617ae89f51e1', text: () => import('./assets-chunks/dashboard_luminarias de pie_59a6a292-a54a-48bc-a233-83bd7d806591_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/74f7d969-2dc2-4367-890a-0230eaa00785/index.html': {size: 91869, hash: '34b586a754110812c07e3c423dde8b8aaa625ce22394715a3e599171d6f92dce', text: () => import('./assets-chunks/dashboard_luminarias de mesa_74f7d969-2dc2-4367-890a-0230eaa00785_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/420743e1-375f-4fab-a7fc-881aef5b7df3/index.html': {size: 92389, hash: 'd6fddff14f307743cea65db75fd3fbb3846aab8c11bcca255345b0e5a7063f33', text: () => import('./assets-chunks/dashboard_accesorios_420743e1-375f-4fab-a7fc-881aef5b7df3_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
