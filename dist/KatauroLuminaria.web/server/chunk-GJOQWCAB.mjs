import './polyfills.server.mjs';
function a(t){return t?t?.promotions.filter(o=>e(o.promotion)).map(o=>o.promotion.discount*.01).reduce((o,r)=>o+r,0)??0:0}function e(t){let n=new Date;return new Date(t.startDate)<n&&new Date(t.endDate)>n}export{a};
