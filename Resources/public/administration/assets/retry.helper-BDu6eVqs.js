class u{static async retry(s,c,y){const i=t=>new Promise(r=>{setTimeout(()=>r(),t)}),e=async(t,r=3,a=5e3)=>{try{return await t()}catch(o){return r<=0?Promise.reject(o):(await i(a),e(t,r-1,a))}};return e(s,c,y)}}export{u as R};
//# sourceMappingURL=retry.helper-BDu6eVqs.js.map
