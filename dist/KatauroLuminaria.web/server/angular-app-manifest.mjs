
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
      "chunk-YQL776XP.js",
      "chunk-7QGPCMBS.js"
    ],
    "route": "/dashboard/cart"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-M4QKSWGA.js",
      "chunk-5GDBXQSX.js",
      "chunk-Y5TQSJAL.js",
      "chunk-G6XDZR4B.js"
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
      "chunk-OE25MKI6.js",
      "chunk-7QGPCMBS.js",
      "chunk-Y5TQSJAL.js",
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
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de pie"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de pie/04b3151a-66fc-4bb4-b07b-0c188b600b5a"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de pie/59a6a292-a54a-48bc-a233-83bd7d806591"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/accesorios"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo/08ad2389-1bc7-4757-ad34-af9db8e0b8e5"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo/2341a0ec-e782-4b3d-85eb-1ee0531a0597"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo/bbc3d350-86cc-4d80-93ea-321b5ba09b5f"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo/e48723eb-c3e0-4f98-94bb-452377aa36ff"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de techo/fd53e5cf-aea3-4687-a3e7-3d9300b7ff58"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de mesa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de mesa/1c76fd7c-b9d7-4838-83d0-e6a99895317a"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de mesa/5c581aa1-6fd2-4ade-bc05-468d9815096d"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de mesa/74f7d969-2dc2-4367-890a-0230eaa00785"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de pared"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/luminarias de pared/d717c86c-ddf8-4cf1-9d75-f4796f339aad"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U352GTTZ.js"
    ],
    "route": "/dashboard/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-U352GTTZ.js"
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
    'index.csr.html': {size: 14737, hash: '1661d2ddad5f0b4adda97ee86948e3b875fd324e69cce7ffe818f4167eaa10d1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 7935, hash: 'f202a5e7782934f00b4dc793af41b48238b0be6f9d52450b12adc21f724c5267', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 33820, hash: '1979718c8cea62625a839af26aba0beff6cb0fe57603ece81ceb03fbb9a366a2', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'dashboard/blog/index.html': {size: 33993, hash: '4abd497741a8337225288815ae08f46e3ad33e4a308e23344a2139dbe7ddc1be', text: () => import('./assets-chunks/dashboard_blog_index_html.mjs').then(m => m.default)},
    'index.html': {size: 267, hash: '7129b2fe28f2670f88d87412a68ee23ebaeeb36949e6449fbb297b5efcfd3f9f', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'dashboard/galery/index.html': {size: 84897, hash: '993b0b9d5034e73f1bf2fa45cd0f248c2c04ce3af100fb10b247a91b35546704', text: () => import('./assets-chunks/dashboard_galery_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/bbc3d350-86cc-4d80-93ea-321b5ba09b5f/index.html': {size: 66395, hash: '4c1169004b34fecf5257b0792b4eb53eecd622686dd45de21e2d8d1ec88e06ab', text: () => import('./assets-chunks/dashboard_luminarias de techo_bbc3d350-86cc-4d80-93ea-321b5ba09b5f_index_html.mjs').then(m => m.default)},
    'dashboard/accesorios/index.html': {size: 396, hash: '8de6ee684cd4929a91abbe3f8141a3f2fd6c440cf712167032abde024eb10c89', text: () => import('./assets-chunks/dashboard_accesorios_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/fd53e5cf-aea3-4687-a3e7-3d9300b7ff58/index.html': {size: 66434, hash: '7d7d12a960ac7a7b7c9217ef718a5b5c1da7ef59bf80c0453b456e87015346c8', text: () => import('./assets-chunks/dashboard_luminarias de techo_fd53e5cf-aea3-4687-a3e7-3d9300b7ff58_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/08ad2389-1bc7-4757-ad34-af9db8e0b8e5/index.html': {size: 67280, hash: 'c7a9be13c83f4d32df4e8b72626a148260d8a66fe76bd70c07b4d6b551e79b05', text: () => import('./assets-chunks/dashboard_luminarias de techo_08ad2389-1bc7-4757-ad34-af9db8e0b8e5_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 18938, hash: '6feabf553957f1560dc5108111a826c4d637e6e847a7f5f043eab8174929ef60', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'login/signup/index.html': {size: 31278, hash: '00a4cd2a4dd0d01de5ef9ecd704844bd9de1238775df22d93edb6d409c7c320e', text: () => import('./assets-chunks/login_signup_index_html.mjs').then(m => m.default)},
    'login/change-pass/index.html': {size: 23208, hash: '46dccbafb04b839311c7a88e7aab072b078b437f6e8bec24f167514e5a8d0d17', text: () => import('./assets-chunks/login_change-pass_index_html.mjs').then(m => m.default)},
    'dashboard/home/index.html': {size: 116113, hash: '5b1366c5087c1cef35cbea9379bba6d94033fca6f8056f308f9021c6cfdf0105', text: () => import('./assets-chunks/dashboard_home_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/index.html': {size: 429, hash: 'c1a83c801861a7be800dff9a92bb6051da8c41a4c33ef06baa21a872118af511', text: () => import('./assets-chunks/dashboard_luminarias de pie_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/59a6a292-a54a-48bc-a233-83bd7d806591/index.html': {size: 65927, hash: '15f9986a4dd0cc8df09b302399b330792fe5cac05f08f0f016aad388ad923b87', text: () => import('./assets-chunks/dashboard_luminarias de pie_59a6a292-a54a-48bc-a233-83bd7d806591_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b/index.html': {size: 68556, hash: '8ab5691f6704c728e1d7411590206fbb07ac0700398742d63f9a256199286efe', text: () => import('./assets-chunks/dashboard_luminarias de mesa_6e463d4d-8bbe-4e15-a3cd-0ac5cfe92d1b_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/2341a0ec-e782-4b3d-85eb-1ee0531a0597/index.html': {size: 66399, hash: 'ac91fbe8311160e1cf72032bcf57a4424eadc8ed8dce3290151774131bf3aa8b', text: () => import('./assets-chunks/dashboard_luminarias de techo_2341a0ec-e782-4b3d-85eb-1ee0531a0597_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/index.html': {size: 432, hash: '815e31457ed1ac01e6d03958d2f61d4734f64898e71dbf838fd188873764d983', text: () => import('./assets-chunks/dashboard_luminarias de mesa_index_html.mjs').then(m => m.default)},
    'login/signin/index.html': {size: 25064, hash: 'cf1a63d46812fc2f2e5d6d413b2af60837662088eb4647ad2078b8694401663d', text: () => import('./assets-chunks/login_signin_index_html.mjs').then(m => m.default)},
    'dashboard/cart/index.html': {size: 261, hash: '5f1d373191e30b57e7425aa4122f4dba04e2a7f9864fee74bbd3b91c4b9221ab', text: () => import('./assets-chunks/dashboard_cart_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pie/04b3151a-66fc-4bb4-b07b-0c188b600b5a/index.html': {size: 67342, hash: 'dd5bc3c101be79aef8326993ecf7a7602341d7719d1c41a366ff79c97dcf1a5e', text: () => import('./assets-chunks/dashboard_luminarias de pie_04b3151a-66fc-4bb4-b07b-0c188b600b5a_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/e48723eb-c3e0-4f98-94bb-452377aa36ff/index.html': {size: 66648, hash: '6811372fe9d06232e7b3eb6336446639ad8badbce2e047950fef43d3552f8cc8', text: () => import('./assets-chunks/dashboard_luminarias de techo_e48723eb-c3e0-4f98-94bb-452377aa36ff_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/d717c86c-ddf8-4cf1-9d75-f4796f339aad/index.html': {size: 66392, hash: 'ecfa6708532a5f34615b7fba4e0648f2e34ce4adac79f252d027e516796c1084', text: () => import('./assets-chunks/dashboard_luminarias de pared_d717c86c-ddf8-4cf1-9d75-f4796f339aad_index_html.mjs').then(m => m.default)},
    'dashboard/team/index.html': {size: 49952, hash: 'd19e64d1aa0cd858b769ed28d733a237ad63b77d6680e3969d3e259a135654de', text: () => import('./assets-chunks/dashboard_team_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/5c581aa1-6fd2-4ade-bc05-468d9815096d/index.html': {size: 66746, hash: 'dfc4012a8a21127a33c9891468dec488bb47a54fc2ecd8fc2047254c88c45b54', text: () => import('./assets-chunks/dashboard_luminarias de mesa_5c581aa1-6fd2-4ade-bc05-468d9815096d_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de techo/index.html': {size: 435, hash: 'cbe05aa723baf4af46d7bc50069799acb3435c55c7630273488a9dfde690a8de', text: () => import('./assets-chunks/dashboard_luminarias de techo_index_html.mjs').then(m => m.default)},
    'login/forgot-password/index.html': {size: 24504, hash: 'a577fa89700997a70980445c473e426e619346a06aae071b85711f6531cfb76c', text: () => import('./assets-chunks/login_forgot-password_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/1c76fd7c-b9d7-4838-83d0-e6a99895317a/index.html': {size: 67274, hash: '18a51d1a99815fb5b4ea11fa0befe945e1ba61042f7edb7d71d5ebfa2f8edd17', text: () => import('./assets-chunks/dashboard_luminarias de mesa_1c76fd7c-b9d7-4838-83d0-e6a99895317a_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de pared/index.html': {size: 435, hash: '8ee2800c3a63beff32013c27a07acec09fa34918c6e2809cf17fa15ab9a3b7a3', text: () => import('./assets-chunks/dashboard_luminarias de pared_index_html.mjs').then(m => m.default)},
    'dashboard/luminarias de mesa/74f7d969-2dc2-4367-890a-0230eaa00785/index.html': {size: 66420, hash: 'ff767246dd79254880e7e5c2ebc31b93c461e903694422a8101aaff2d35bb97c', text: () => import('./assets-chunks/dashboard_luminarias de mesa_74f7d969-2dc2-4367-890a-0230eaa00785_index_html.mjs').then(m => m.default)},
    'styles-MQUKRPG2.css': {size: 25642, hash: 'zHcLrdCSmGs', text: () => import('./assets-chunks/styles-MQUKRPG2_css.mjs').then(m => m.default)}
  },
};
