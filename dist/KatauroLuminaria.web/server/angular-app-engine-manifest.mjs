
export default {
  basePath: '/',
  allowedHosts: [
  "localhost",
  "katauro.com",
  "www.katauro.com",
  "katauroluminariaweb-production.up.railway.app",
  "katauro-luminaria-web.vercel.app"
],
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
