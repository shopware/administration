const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C73jHs0W.js","assets/administration-HUu5WNV9.js","assets/administration-DQ9sEJNV.css","assets/index-BIvGIbL6.js","assets/parse-error-DfOPyLWM-BD17E0Uu.js","assets/index-Beenkx_n.js","assets/AxisHelperColors-JLBHYQDi-DZgCtRYv.js"])))=>i.map(i=>d[i]);
import{_ as Et}from"./administration-HUu5WNV9.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="163",an={ROTATE:0,DOLLY:1,PAN:2},Mn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yh=0,Ca=1,xh=2,Ph=0,ta=1,yc=2,rn=3,kt=0,xt=1,on=2,wn=0,di=1,ba=2,Ia=3,Sa=4,wh=5,Nn=100,Ch=101,bh=102,Ih=103,Sh=104,Bh=200,Eh=201,Th=202,Dh=203,Kr=204,qr=205,zh=206,Lh=207,Gh=208,Oh=209,Rh=210,Fh=211,Hh=212,Nh=213,Uh=214,Kh=0,qh=1,Yh=2,Gs=3,kh=4,Xh=5,Wh=6,Vh=7,xc=0,jh=1,Zh=2,un=0,Pc=1,Qh=2,Jh=3,$h=4,el=5,tl=6,nl=7,Ba="attached",il="detached",wc=300,gi=301,mi=302,Os=303,Yr=304,Vs=306,kr=1e3,hn=1001,Xr=1002,Ct=1003,sl=1004,Ji=1005,_t=1006,sr=1007,xn=1008,Cn=1009,rl=1010,al=1011,Cc=1012,bc=1013,vi=1014,Tt=1015,ln=1016,Ic=1017,Sc=1018,qi=1020,ol=35902,cl=1021,hl=1022,Nt=1023,ll=1024,fl=1025,Ai=1026,Ui=1027,Bc=1028,Ec=1029,ul=1030,Tc=1031,Dc=1033,rr=33776,ar=33777,or=33778,cr=33779,Ea=35840,Ta=35841,Da=35842,za=35843,zc=36196,La=37492,Ga=37496,Oa=37808,Ra=37809,Fa=37810,Ha=37811,Na=37812,Ua=37813,Ka=37814,qa=37815,Ya=37816,ka=37817,Xa=37818,Wa=37819,Va=37820,ja=37821,hr=36492,Za=36494,Qa=36495,dl=36283,Ja=36284,$a=36285,eo=36286,Rs=2300,Fs=2301,lr=2302,to=2400,no=2401,io=2402,Al=2500,pm=0,gm=1,mm=2,pl=3200,gl=3201,Lc=0,ml=1,yn="",Rt="srgb",Vt="srgb-linear",na="display-p3",js="display-p3-linear",Hs="linear",Je="srgb",Ns="rec709",Us="p3",Yn=7680,so=519,vl=512,_l=513,Ml=514,Gc=515,yl=516,xl=517,Pl=518,wl=519,Wr=35044,ro="300 es",fn=2e3,Ks=2001;class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ao=1234567;const Hi=Math.PI/180,_i=180/Math.PI;function Ut(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(mt[s&255]+mt[s>>8&255]+mt[s>>16&255]+mt[s>>24&255]+"-"+mt[e&255]+mt[e>>8&255]+"-"+mt[e>>16&15|64]+mt[e>>24&255]+"-"+mt[t&63|128]+mt[t>>8&255]+"-"+mt[t>>16&255]+mt[t>>24&255]+mt[n&255]+mt[n>>8&255]+mt[n>>16&255]+mt[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function ia(s,e){return(s%e+e)%e}function Cl(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function bl(s,e,t){return s!==e?(t-s)/(e-s):0}function Ni(s,e,t){return(1-t)*s+t*e}function Il(s,e,t,n){return Ni(s,e,1-Math.exp(-t*n))}function Sl(s,e=1){return e-Math.abs(ia(s,e*2)-e)}function Bl(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function El(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Tl(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Dl(s,e){return s+Math.random()*(e-s)}function zl(s){return s*(.5-Math.random())}function Ll(s){s!==void 0&&(ao=s);let e=ao+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gl(s){return s*Hi}function Ol(s){return s*_i}function Rl(s){return(s&s-1)===0&&s!==0}function Fl(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Hl(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Nl(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),l=a((e+n)/2),d=r((e-n)/2),u=a((e-n)/2),p=r((n-e)/2),m=a((n-e)/2);switch(i){case"XYX":s.set(o*l,c*d,c*u,o*h);break;case"YZY":s.set(c*u,o*l,c*d,o*h);break;case"ZXZ":s.set(c*d,c*u,o*l,o*h);break;case"XZX":s.set(o*l,c*m,c*p,o*h);break;case"YXY":s.set(c*p,o*l,c*m,o*h);break;case"ZYZ":s.set(c*m,c*p,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ft(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const sa={DEG2RAD:Hi,RAD2DEG:_i,generateUUID:Ut,clamp:ut,euclideanModulo:ia,mapLinear:Cl,inverseLerp:bl,lerp:Ni,damp:Il,pingpong:Sl,smoothstep:Bl,smootherstep:El,randInt:Tl,randFloat:Dl,randFloatSpread:zl,seededRandom:Ll,degToRad:Gl,radToDeg:Ol,isPowerOfTwo:Rl,ceilPowerOfTwo:Fl,floorPowerOfTwo:Hl,setQuaternionFromProperEuler:Nl,normalize:Ke,denormalize:Ft};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,a,o,c,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h)}set(e,t,n,i,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],u=n[2],p=n[5],m=n[8],M=i[0],A=i[3],f=i[6],x=i[1],g=i[4],w=i[7],T=i[2],C=i[5],b=i[8];return r[0]=a*M+o*x+c*T,r[3]=a*A+o*g+c*C,r[6]=a*f+o*w+c*b,r[1]=h*M+l*x+d*T,r[4]=h*A+l*g+d*C,r[7]=h*f+l*w+d*b,r[2]=u*M+p*x+m*T,r[5]=u*A+p*g+m*C,r[8]=u*f+p*w+m*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=l*a-o*h,u=o*c-l*r,p=h*r-a*c,m=t*d+n*u+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/m;return e[0]=d*M,e[1]=(i*h-l*n)*M,e[2]=(o*n-i*a)*M,e[3]=u*M,e[4]=(l*t-i*c)*M,e[5]=(i*r-o*t)*M,e[6]=p*M,e[7]=(n*c-h*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new De;function Oc(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ki(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ul(){const s=Ki("canvas");return s.style.display="block",s}const oo={};function Rc(s){s in oo||(oo[s]=!0,console.warn(s))}const co=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ho=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[Vt]:{transfer:Hs,primaries:Ns,toReference:s=>s,fromReference:s=>s},[Rt]:{transfer:Je,primaries:Ns,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[js]:{transfer:Hs,primaries:Us,toReference:s=>s.applyMatrix3(ho),fromReference:s=>s.applyMatrix3(co)},[na]:{transfer:Je,primaries:Us,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ho),fromReference:s=>s.applyMatrix3(co).convertLinearToSRGB()}},Kl=new Set([Vt,js]),ke={enabled:!0,_workingColorSpace:Vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Kl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=$i[e].toReference,i=$i[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return $i[s].primaries},getTransfer:function(s){return s===yn?Hs:$i[s].transfer}};function pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ur(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let kn;class ql{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{kn===void 0&&(kn=Ki("canvas")),kn.width=e.width,kn.height=e.height;const n=kn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=kn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(pi(t[n]/255)*255):t[n]=pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Yl=0;class Fc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Yl++}),this.uuid=Ut(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(dr(i[a].image)):r.push(dr(i[a]))}else r=dr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function dr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ql.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kl=0;class dt extends qn{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=hn,i=hn,r=_t,a=xn,o=Nt,c=Cn,h=dt.DEFAULT_ANISOTROPY,l=yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kl++}),this.uuid=Ut(),this.name="",this.source=new Fc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kr:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kr:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=wc;dt.DEFAULT_ANISOTROPY=1;class We{constructor(e=0,t=0,n=0,i=1){We.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],l=c[4],d=c[8],u=c[1],p=c[5],m=c[9],M=c[2],A=c[6],f=c[10];if(Math.abs(l-u)<.01&&Math.abs(d-M)<.01&&Math.abs(m-A)<.01){if(Math.abs(l+u)<.1&&Math.abs(d+M)<.1&&Math.abs(m+A)<.1&&Math.abs(h+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(h+1)/2,w=(p+1)/2,T=(f+1)/2,C=(l+u)/4,b=(d+M)/4,D=(m+A)/4;return g>w&&g>T?g<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(g),i=C/n,r=b/n):w>T?w<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(w),n=C/i,r=D/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=b/r,i=D/r),this.set(n,i,r,t),this}let x=Math.sqrt((A-m)*(A-m)+(d-M)*(d-M)+(u-l)*(u-l));return Math.abs(x)<.001&&(x=1),this.x=(A-m)/x,this.y=(d-M)/x,this.z=(u-l)/x,this.w=Math.acos((h+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Xl extends qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new We(0,0,e,t),this.scissorTest=!1,this.viewport=new We(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_t,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new dt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Fc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Xl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hc extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wl extends dt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],h=n[i+1],l=n[i+2],d=n[i+3];const u=r[a+0],p=r[a+1],m=r[a+2],M=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=p,e[t+2]=m,e[t+3]=M;return}if(d!==M||c!==u||h!==p||l!==m){let A=1-o;const f=c*u+h*p+l*m+d*M,x=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const T=Math.sqrt(g),C=Math.atan2(T,f*x);A=Math.sin(A*C)/T,o=Math.sin(o*C)/T}const w=o*x;if(c=c*A+u*w,h=h*A+p*w,l=l*A+m*w,d=d*A+M*w,A===1-o){const T=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=T,h*=T,l*=T,d*=T}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],l=n[i+3],d=r[a],u=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+l*d+c*p-h*u,e[t+1]=c*m+l*u+h*d-o*p,e[t+2]=h*m+l*p+o*u-c*d,e[t+3]=l*m-o*d-c*u-h*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(i/2),d=o(r/2),u=c(n/2),p=c(i/2),m=c(r/2);switch(a){case"XYZ":this._x=u*l*d+h*p*m,this._y=h*p*d-u*l*m,this._z=h*l*m+u*p*d,this._w=h*l*d-u*p*m;break;case"YXZ":this._x=u*l*d+h*p*m,this._y=h*p*d-u*l*m,this._z=h*l*m-u*p*d,this._w=h*l*d+u*p*m;break;case"ZXY":this._x=u*l*d-h*p*m,this._y=h*p*d+u*l*m,this._z=h*l*m+u*p*d,this._w=h*l*d-u*p*m;break;case"ZYX":this._x=u*l*d-h*p*m,this._y=h*p*d+u*l*m,this._z=h*l*m-u*p*d,this._w=h*l*d+u*p*m;break;case"YZX":this._x=u*l*d+h*p*m,this._y=h*p*d+u*l*m,this._z=h*l*m-u*p*d,this._w=h*l*d-u*p*m;break;case"XZY":this._x=u*l*d-h*p*m,this._y=h*p*d-u*l*m,this._z=h*l*m+u*p*d,this._w=h*l*d+u*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],l=t[6],d=t[10],u=n+o+d;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(l-c)*p,this._y=(r-h)*p,this._z=(a-i)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(l-c)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+h)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(r-h)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(c+l)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-i)/p,this._x=(r+h)/p,this._y=(c+l)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+a*o+i*h-r*c,this._y=i*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-i*o,this._w=a*l-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-t)*l)/h,u=Math.sin(t*l)/h;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(lo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(lo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),l=2*(o*t-r*i),d=2*(r*n-a*t);return this.x=t+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=i+c*d+r*l-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ar.copy(this).projectOnVector(e),this.sub(Ar)}reflect(e){return this.sub(Ar.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ar=new B,lo=new In;class bt{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Lt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Lt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Lt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Lt):Lt.fromBufferAttribute(r,a),Lt.applyMatrix4(e.matrixWorld),this.expandByPoint(Lt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Lt),Lt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ii),ts.subVectors(this.max,Ii),Xn.subVectors(e.a,Ii),Wn.subVectors(e.b,Ii),Vn.subVectors(e.c,Ii),An.subVectors(Wn,Xn),pn.subVectors(Vn,Wn),Dn.subVectors(Xn,Vn);let t=[0,-An.z,An.y,0,-pn.z,pn.y,0,-Dn.z,Dn.y,An.z,0,-An.x,pn.z,0,-pn.x,Dn.z,0,-Dn.x,-An.y,An.x,0,-pn.y,pn.x,0,-Dn.y,Dn.x,0];return!pr(t,Xn,Wn,Vn,ts)||(t=[1,0,0,0,1,0,0,0,1],!pr(t,Xn,Wn,Vn,ts))?!1:(ns.crossVectors(An,pn),t=[ns.x,ns.y,ns.z],pr(t,Xn,Wn,Vn,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Lt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Lt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Jt=[new B,new B,new B,new B,new B,new B,new B,new B],Lt=new B,es=new bt,Xn=new B,Wn=new B,Vn=new B,An=new B,pn=new B,Dn=new B,Ii=new B,ts=new B,ns=new B,zn=new B;function pr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){zn.fromArray(s,r);const o=i.x*Math.abs(zn.x)+i.y*Math.abs(zn.y)+i.z*Math.abs(zn.z),c=e.dot(zn),h=t.dot(zn),l=n.dot(zn);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Vl=new bt,Si=new B,gr=new B;class jt{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Vl.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Si.subVectors(e,this.center);const t=Si.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Si,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Si.copy(e.center).add(gr)),this.expandByPoint(Si.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const $t=new B,mr=new B,is=new B,gn=new B,vr=new B,ss=new B,_r=new B;class Yi{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$t)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$t.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($t.copy(this.origin).addScaledVector(this.direction,t),$t.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){mr.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),gn.copy(this.origin).sub(mr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=gn.dot(this.direction),c=-gn.dot(is),h=gn.lengthSq(),l=Math.abs(1-a*a);let d,u,p,m;if(l>0)if(d=a*c-o,u=a*o-c,m=r*l,d>=0)if(u>=-m)if(u<=m){const M=1/l;d*=M,u*=M,p=d*(d+a*u+2*o)+u*(a*d+u+2*c)+h}else u=r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;else u=-r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;else u<=-m?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+h):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+u*(u+2*c)+h);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),p=-d*d+u*(u+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(mr).addScaledVector(is,u),p}intersectSphere(e,t){$t.subVectors(e.center,this.origin);const n=$t.dot(this.direction),i=$t.dot($t)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(n=(e.min.x-u.x)*h,i=(e.max.x-u.x)*h):(n=(e.max.x-u.x)*h,i=(e.min.x-u.x)*h),l>=0?(r=(e.min.y-u.y)*l,a=(e.max.y-u.y)*l):(r=(e.max.y-u.y)*l,a=(e.min.y-u.y)*l),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,$t)!==null}intersectTriangle(e,t,n,i,r){vr.subVectors(t,e),ss.subVectors(n,e),_r.crossVectors(vr,ss);let a=this.direction.dot(_r),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;gn.subVectors(this.origin,e);const c=o*this.direction.dot(ss.crossVectors(gn,ss));if(c<0)return null;const h=o*this.direction.dot(vr.cross(gn));if(h<0||c+h>a)return null;const l=-o*gn.dot(_r);return l<0?null:this.at(l/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,a,o,c,h,l,d,u,p,m,M,A){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h,l,d,u,p,m,M,A)}set(e,t,n,i,r,a,o,c,h,l,d,u,p,m,M,A){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=u,f[3]=p,f[7]=m,f[11]=M,f[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/jn.setFromMatrixColumn(e,0).length(),r=1/jn.setFromMatrixColumn(e,1).length(),a=1/jn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const u=a*l,p=a*d,m=o*l,M=o*d;t[0]=c*l,t[4]=-c*d,t[8]=h,t[1]=p+m*h,t[5]=u-M*h,t[9]=-o*c,t[2]=M-u*h,t[6]=m+p*h,t[10]=a*c}else if(e.order==="YXZ"){const u=c*l,p=c*d,m=h*l,M=h*d;t[0]=u+M*o,t[4]=m*o-p,t[8]=a*h,t[1]=a*d,t[5]=a*l,t[9]=-o,t[2]=p*o-m,t[6]=M+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*l,p=c*d,m=h*l,M=h*d;t[0]=u-M*o,t[4]=-a*d,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*l,t[9]=M-u*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*l,p=a*d,m=o*l,M=o*d;t[0]=c*l,t[4]=m*h-p,t[8]=u*h+M,t[1]=c*d,t[5]=M*h+u,t[9]=p*h-m,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,p=a*h,m=o*c,M=o*h;t[0]=c*l,t[4]=M-u*d,t[8]=m*d+p,t[1]=d,t[5]=a*l,t[9]=-o*l,t[2]=-h*l,t[6]=p*d+m,t[10]=u-M*d}else if(e.order==="XZY"){const u=a*c,p=a*h,m=o*c,M=o*h;t[0]=c*l,t[4]=-d,t[8]=h*l,t[1]=u*d+M,t[5]=a*l,t[9]=p*d-m,t[2]=m*d-p,t[6]=o*l,t[10]=M*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jl,e,Zl)}lookAt(e,t,n){const i=this.elements;return St.subVectors(e,t),St.lengthSq()===0&&(St.z=1),St.normalize(),mn.crossVectors(n,St),mn.lengthSq()===0&&(Math.abs(n.z)===1?St.x+=1e-4:St.z+=1e-4,St.normalize(),mn.crossVectors(n,St)),mn.normalize(),rs.crossVectors(St,mn),i[0]=mn.x,i[4]=rs.x,i[8]=St.x,i[1]=mn.y,i[5]=rs.y,i[9]=St.y,i[2]=mn.z,i[6]=rs.z,i[10]=St.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],u=n[9],p=n[13],m=n[2],M=n[6],A=n[10],f=n[14],x=n[3],g=n[7],w=n[11],T=n[15],C=i[0],b=i[4],D=i[8],y=i[12],v=i[1],L=i[5],F=i[9],E=i[13],K=i[2],Y=i[6],W=i[10],se=i[14],q=i[3],J=i[7],Q=i[11],de=i[15];return r[0]=a*C+o*v+c*K+h*q,r[4]=a*b+o*L+c*Y+h*J,r[8]=a*D+o*F+c*W+h*Q,r[12]=a*y+o*E+c*se+h*de,r[1]=l*C+d*v+u*K+p*q,r[5]=l*b+d*L+u*Y+p*J,r[9]=l*D+d*F+u*W+p*Q,r[13]=l*y+d*E+u*se+p*de,r[2]=m*C+M*v+A*K+f*q,r[6]=m*b+M*L+A*Y+f*J,r[10]=m*D+M*F+A*W+f*Q,r[14]=m*y+M*E+A*se+f*de,r[3]=x*C+g*v+w*K+T*q,r[7]=x*b+g*L+w*Y+T*J,r[11]=x*D+g*F+w*W+T*Q,r[15]=x*y+g*E+w*se+T*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],l=e[2],d=e[6],u=e[10],p=e[14],m=e[3],M=e[7],A=e[11],f=e[15];return m*(+r*c*d-i*h*d-r*o*u+n*h*u+i*o*p-n*c*p)+M*(+t*c*p-t*h*u+r*a*u-i*a*p+i*h*l-r*c*l)+A*(+t*h*d-t*o*p-r*a*d+n*a*p+r*o*l-n*h*l)+f*(-i*o*l-t*c*d+t*o*u+i*a*d-n*a*u+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],d=e[9],u=e[10],p=e[11],m=e[12],M=e[13],A=e[14],f=e[15],x=d*A*h-M*u*h+M*c*p-o*A*p-d*c*f+o*u*f,g=m*u*h-l*A*h-m*c*p+a*A*p+l*c*f-a*u*f,w=l*M*h-m*d*h+m*o*p-a*M*p-l*o*f+a*d*f,T=m*d*c-l*M*c-m*o*u+a*M*u+l*o*A-a*d*A,C=t*x+n*g+i*w+r*T;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=x*b,e[1]=(M*u*r-d*A*r-M*i*p+n*A*p+d*i*f-n*u*f)*b,e[2]=(o*A*r-M*c*r+M*i*h-n*A*h-o*i*f+n*c*f)*b,e[3]=(d*c*r-o*u*r-d*i*h+n*u*h+o*i*p-n*c*p)*b,e[4]=g*b,e[5]=(l*A*r-m*u*r+m*i*p-t*A*p-l*i*f+t*u*f)*b,e[6]=(m*c*r-a*A*r-m*i*h+t*A*h+a*i*f-t*c*f)*b,e[7]=(a*u*r-l*c*r+l*i*h-t*u*h-a*i*p+t*c*p)*b,e[8]=w*b,e[9]=(m*d*r-l*M*r-m*n*p+t*M*p+l*n*f-t*d*f)*b,e[10]=(a*M*r-m*o*r+m*n*h-t*M*h-a*n*f+t*o*f)*b,e[11]=(l*o*r-a*d*r-l*n*h+t*d*h+a*n*p-t*o*p)*b,e[12]=T*b,e[13]=(l*M*i-m*d*i+m*n*u-t*M*u-l*n*A+t*d*A)*b,e[14]=(m*o*i-a*M*i-m*n*c+t*M*c+a*n*A-t*o*A)*b,e[15]=(a*d*i-l*o*i+l*n*c-t*d*c-a*n*u+t*o*u)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+n,l*c-i*a,0,h*c-i*o,l*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,l=a+a,d=o+o,u=r*h,p=r*l,m=r*d,M=a*l,A=a*d,f=o*d,x=c*h,g=c*l,w=c*d,T=n.x,C=n.y,b=n.z;return i[0]=(1-(M+f))*T,i[1]=(p+w)*T,i[2]=(m-g)*T,i[3]=0,i[4]=(p-w)*C,i[5]=(1-(u+f))*C,i[6]=(A+x)*C,i[7]=0,i[8]=(m+g)*b,i[9]=(A-x)*b,i[10]=(1-(u+M))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=jn.set(i[0],i[1],i[2]).length();const a=jn.set(i[4],i[5],i[6]).length(),o=jn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Gt.copy(this);const h=1/r,l=1/a,d=1/o;return Gt.elements[0]*=h,Gt.elements[1]*=h,Gt.elements[2]*=h,Gt.elements[4]*=l,Gt.elements[5]*=l,Gt.elements[6]*=l,Gt.elements[8]*=d,Gt.elements[9]*=d,Gt.elements[10]*=d,t.setFromRotationMatrix(Gt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=fn){const c=this.elements,h=2*r/(t-e),l=2*r/(n-i),d=(t+e)/(t-e),u=(n+i)/(n-i);let p,m;if(o===fn)p=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(o===Ks)p=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=fn){const c=this.elements,h=1/(t-e),l=1/(n-i),d=1/(a-r),u=(t+e)*h,p=(n+i)*l;let m,M;if(o===fn)m=(a+r)*d,M=-2*d;else if(o===Ks)m=r*d,M=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=M,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const jn=new B,Gt=new Le,jl=new B(0,0,0),Zl=new B(1,1,1),mn=new B,rs=new B,St=new B,fo=new Le,uo=new In;class Xt{constructor(e=0,t=0,n=0,i=Xt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],l=i[9],d=i[2],u=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return uo.setFromEuler(this),this.setFromQuaternion(uo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Xt.DEFAULT_ORDER="XYZ";class ra{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ql=0;const Ao=new B,Zn=new In,en=new Le,as=new B,Bi=new B,Jl=new B,$l=new In,po=new B(1,0,0),go=new B(0,1,0),mo=new B(0,0,1),vo={type:"added"},ef={type:"removed"},Qn={type:"childadded",child:null},Mr={type:"childremoved",child:null};class qe extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ql++}),this.uuid=Ut(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DEFAULT_UP.clone();const e=new B,t=new Xt,n=new In,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new De}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=qe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ra,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.multiply(Zn),this}rotateOnWorldAxis(e,t){return Zn.setFromAxisAngle(e,t),this.quaternion.premultiply(Zn),this}rotateX(e){return this.rotateOnAxis(po,e)}rotateY(e){return this.rotateOnAxis(go,e)}rotateZ(e){return this.rotateOnAxis(mo,e)}translateOnAxis(e,t){return Ao.copy(e).applyQuaternion(this.quaternion),this.position.add(Ao.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(po,e)}translateY(e){return this.translateOnAxis(go,e)}translateZ(e){return this.translateOnAxis(mo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(Bi,as,this.up):en.lookAt(as,Bi,this.up),this.quaternion.setFromRotationMatrix(en),i&&(en.extractRotation(i.matrixWorld),Zn.setFromRotationMatrix(en),this.quaternion.premultiply(Zn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vo),Qn.child=e,this.dispatchEvent(Qn),Qn.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Jl),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,$l,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),l=a(e.images),d=a(e.shapes),u=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}qe.DEFAULT_UP=new B(0,1,0);qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new B,tn=new B,yr=new B,nn=new B,Jn=new B,$n=new B,_o=new B,xr=new B,Pr=new B,wr=new B;class Ht{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ot.subVectors(i,t),tn.subVectors(n,t),yr.subVectors(e,t);const a=Ot.dot(Ot),o=Ot.dot(tn),c=Ot.dot(yr),h=tn.dot(tn),l=tn.dot(yr),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,p=(h*c-o*l)*u,m=(a*l-o*c)*u;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,nn)===null?!1:nn.x>=0&&nn.y>=0&&nn.x+nn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,nn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,nn.x),c.addScaledVector(a,nn.y),c.addScaledVector(o,nn.z),c)}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),tn.subVectors(e,t),Ot.cross(tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),tn.subVectors(this.a,this.b),Ot.cross(tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ht.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ht.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ht.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ht.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ht.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Jn.subVectors(i,n),$n.subVectors(r,n),xr.subVectors(e,n);const c=Jn.dot(xr),h=$n.dot(xr);if(c<=0&&h<=0)return t.copy(n);Pr.subVectors(e,i);const l=Jn.dot(Pr),d=$n.dot(Pr);if(l>=0&&d<=l)return t.copy(i);const u=c*d-l*h;if(u<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(Jn,a);wr.subVectors(e,r);const p=Jn.dot(wr),m=$n.dot(wr);if(m>=0&&p<=m)return t.copy(r);const M=p*h-c*m;if(M<=0&&h>=0&&m<=0)return o=h/(h-m),t.copy(n).addScaledVector($n,o);const A=l*m-p*d;if(A<=0&&d-l>=0&&p-m>=0)return _o.subVectors(r,i),o=(d-l)/(d-l+(p-m)),t.copy(i).addScaledVector(_o,o);const f=1/(A+M+u);return a=M*f,o=u*f,t.copy(n).addScaledVector(Jn,a).addScaledVector($n,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Nc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},os={h:0,s:0,l:0};function Cr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ke.workingColorSpace){if(e=ia(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Cr(a,r,e+1/3),this.g=Cr(a,r,e),this.b=Cr(a,r,e-1/3)}return ke.toWorkingColorSpace(this,i),this}setStyle(e,t=Rt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rt){const n=Nc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rt){return ke.fromWorkingColorSpace(vt.copy(this),e),Math.round(ut(vt.r*255,0,255))*65536+Math.round(ut(vt.g*255,0,255))*256+Math.round(ut(vt.b*255,0,255))}getHexString(e=Rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ke.workingColorSpace){ke.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,i=vt.g,r=vt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-r)/d+(i<r?6:0);break;case i:c=(r-n)/d+2;break;case r:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=ke.workingColorSpace){return ke.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Rt){ke.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,i=vt.b;return e!==Rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(os);const n=Ni(vn.h,os.h,t),i=Ni(vn.s,os.s,t),r=Ni(vn.l,os.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Pe;Pe.NAMES=Nc;let tf=0;class Bn extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=Ut(),this.name="",this.type="Material",this.blending=di,this.side=kt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kr,this.blendDst=qr,this.blendEquation=Nn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=so,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==di&&(n.blending=this.blending),this.side!==kt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Kr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==Nn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==so&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ki extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.combine=xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cn=nf();function nf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,i[c]=-h-1,i[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,i[c]=13,i[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,l=0;for(;(h&8388608)===0;)h<<=1,l-=8388608;h&=-8388609,l+=947912704,r[c]=h|l}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function sf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),cn.floatView[0]=s;const e=cn.uint32View[0],t=e>>23&511;return cn.baseTable[t]+((e&8388607)>>cn.shiftTable[t])}function rf(s){const e=s>>10;return cn.uint32View[0]=cn.mantissaTable[cn.offsetTable[e]+(s&1023)]+cn.exponentTable[e],cn.floatView[0]}const cs={toHalfFloat:sf,fromHalfFloat:rf},rt=new B,hs=new le;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Tt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix3(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyMatrix4(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.applyNormalMatrix(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rt.fromBufferAttribute(this,t),rt.transformDirection(e),this.setXYZ(t,rt.x,rt.y,rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wr&&(e.usage=this.usage),e}}class Uc extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Kc extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ze extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let af=0;const zt=new Le,br=new qe,ei=new B,Bt=new bt,Ei=new bt,ft=new B;class ht extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ut(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Oc(e)?Kc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return br.lookAt(e),br.updateMatrix(),this.applyMatrix4(br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ei).negate(),this.translate(ei.x,ei.y,ei.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ze(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new jt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ei.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Bt.min,Ei.min),Bt.expandByPoint(ft),ft.addVectors(Bt.max,Ei.max),Bt.expandByPoint(ft)):(Bt.expandByPoint(Ei.min),Bt.expandByPoint(Ei.max))}Bt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ft.fromBufferAttribute(o,h),c&&(ei.fromBufferAttribute(e,h),ft.add(ei)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new B,c[D]=new B;const h=new B,l=new B,d=new B,u=new le,p=new le,m=new le,M=new B,A=new B;function f(D,y,v){h.fromBufferAttribute(n,D),l.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),u.fromBufferAttribute(r,D),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,v),l.sub(h),d.sub(h),p.sub(u),m.sub(u);const L=1/(p.x*m.y-m.x*p.y);isFinite(L)&&(M.copy(l).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(L),A.copy(d).multiplyScalar(p.x).addScaledVector(l,-m.x).multiplyScalar(L),o[D].add(M),o[y].add(M),o[v].add(M),c[D].add(A),c[y].add(A),c[v].add(A))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,y=x.length;D<y;++D){const v=x[D],L=v.start,F=v.count;for(let E=L,K=L+F;E<K;E+=3)f(e.getX(E+0),e.getX(E+1),e.getX(E+2))}const g=new B,w=new B,T=new B,C=new B;function b(D){T.fromBufferAttribute(i,D),C.copy(T);const y=o[D];g.copy(y),g.sub(T.multiplyScalar(T.dot(y))).normalize(),w.crossVectors(C,y);const L=w.dot(c[D])<0?-1:1;a.setXYZW(D,g.x,g.y,g.z,L)}for(let D=0,y=x.length;D<y;++D){const v=x[D],L=v.start,F=v.count;for(let E=L,K=L+F;E<K;E+=3)b(e.getX(E+0)),b(e.getX(E+1)),b(e.getX(E+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);const i=new B,r=new B,a=new B,o=new B,c=new B,h=new B,l=new B,d=new B;if(e)for(let u=0,p=e.count;u<p;u+=3){const m=e.getX(u+0),M=e.getX(u+1),A=e.getX(u+2);i.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,A),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),h.fromBufferAttribute(n,A),o.add(l),c.add(l),h.add(l),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(A,h.x,h.y,h.z)}else for(let u=0,p=t.count;u<p;u+=3)i.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),l.subVectors(a,r),d.subVectors(i,r),l.cross(d),n.setXYZ(u+0,l.x,l.y,l.z),n.setXYZ(u+1,l.x,l.y,l.z),n.setXYZ(u+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,d=o.normalized,u=new h.constructor(c.length*l);let p=0,m=0;for(let M=0,A=c.length;M<A;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*l;for(let f=0;f<l;f++)u[m++]=h[p++]}return new Pt(u,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){const u=h[l],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,u=h.length;d<u;d++){const p=h[d];l.push(p.toJSON(e.data))}l.length>0&&(i[c]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],d=r[h];for(let u=0,p=d.length;u<p;u++)l.push(d[u].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,l=a.length;h<l;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new Le,Ln=new Yi,ls=new jt,yo=new B,ti=new B,ni=new B,ii=new B,Ir=new B,fs=new B,us=new le,ds=new le,As=new le,xo=new B,Po=new B,wo=new B,ps=new B,gs=new B;class At extends qe{constructor(e=new ht,t=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],d=r[c];l!==0&&(Ir.fromBufferAttribute(d,e),a?fs.addScaledVector(Ir,l):fs.addScaledVector(Ir.sub(t),l))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(r),Ln.copy(e.ray).recast(e.near),!(ls.containsPoint(Ln.origin)===!1&&(Ln.intersectSphere(ls,yo)===null||Ln.origin.distanceToSquared(yo)>(e.far-e.near)**2))&&(Mo.copy(r).invert(),Ln.copy(e.ray).applyMatrix4(Mo),!(n.boundingBox!==null&&Ln.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ln)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const A=u[m],f=a[A.materialIndex],x=Math.max(A.start,p.start),g=Math.min(o.count,Math.min(A.start+A.count,p.start+p.count));for(let w=x,T=g;w<T;w+=3){const C=o.getX(w),b=o.getX(w+1),D=o.getX(w+2);i=ms(this,f,e,n,h,l,d,C,b,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=A.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let A=m,f=M;A<f;A+=3){const x=o.getX(A),g=o.getX(A+1),w=o.getX(A+2);i=ms(this,a,e,n,h,l,d,x,g,w),i&&(i.faceIndex=Math.floor(A/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,M=u.length;m<M;m++){const A=u[m],f=a[A.materialIndex],x=Math.max(A.start,p.start),g=Math.min(c.count,Math.min(A.start+A.count,p.start+p.count));for(let w=x,T=g;w<T;w+=3){const C=w,b=w+1,D=w+2;i=ms(this,f,e,n,h,l,d,C,b,D),i&&(i.faceIndex=Math.floor(w/3),i.face.materialIndex=A.materialIndex,t.push(i))}}else{const m=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let A=m,f=M;A<f;A+=3){const x=A,g=A+1,w=A+2;i=ms(this,a,e,n,h,l,d,x,g,w),i&&(i.faceIndex=Math.floor(A/3),t.push(i))}}}}function of(s,e,t,n,i,r,a,o){let c;if(e.side===xt?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===kt,o),c===null)return null;gs.copy(o),gs.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(gs);return h<t.near||h>t.far?null:{distance:h,point:gs.clone(),object:s}}function ms(s,e,t,n,i,r,a,o,c,h){s.getVertexPosition(o,ti),s.getVertexPosition(c,ni),s.getVertexPosition(h,ii);const l=of(s,e,t,n,ti,ni,ii,ps);if(l){i&&(us.fromBufferAttribute(i,o),ds.fromBufferAttribute(i,c),As.fromBufferAttribute(i,h),l.uv=Ht.getInterpolation(ps,ti,ni,ii,us,ds,As,new le)),r&&(us.fromBufferAttribute(r,o),ds.fromBufferAttribute(r,c),As.fromBufferAttribute(r,h),l.uv1=Ht.getInterpolation(ps,ti,ni,ii,us,ds,As,new le)),a&&(xo.fromBufferAttribute(a,o),Po.fromBufferAttribute(a,c),wo.fromBufferAttribute(a,h),l.normal=Ht.getInterpolation(ps,ti,ni,ii,xo,Po,wo,new B),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new B,materialIndex:0};Ht.getNormal(ti,ni,ii,d.normal),l.face=d}return l}class bn extends ht{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],d=[];let u=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,r,4),m("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new Ze(h,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(d,2));function m(M,A,f,x,g,w,T,C,b,D,y){const v=w/b,L=T/D,F=w/2,E=T/2,K=C/2,Y=b+1,W=D+1;let se=0,q=0;const J=new B;for(let Q=0;Q<W;Q++){const de=Q*L-E;for(let Oe=0;Oe<Y;Oe++){const Ve=Oe*v-F;J[M]=Ve*x,J[A]=de*g,J[f]=K,h.push(J.x,J.y,J.z),J[M]=0,J[A]=0,J[f]=C>0?1:-1,l.push(J.x,J.y,J.z),d.push(Oe/b),d.push(1-Q/D),se+=1}}for(let Q=0;Q<D;Q++)for(let de=0;de<b;de++){const Oe=u+de+Y*Q,Ve=u+de+Y*(Q+1),k=u+(de+1)+Y*(Q+1),$=u+(de+1)+Y*Q;c.push(Oe,Ve,$),c.push(Ve,k,$),q+=6}o.addGroup(p,q,y),p+=q,u+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mi(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function yt(s){const e={};for(let t=0;t<s.length;t++){const n=Mi(s[t]);for(const i in n)e[i]=n[i]}return e}function cf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function qc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ke.workingColorSpace}const hf={clone:Mi,merge:yt};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mi(e.uniforms),this.uniformsGroups=cf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Yc extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=fn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _n=new B,Co=new le,bo=new le;class wt extends Yc{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_i*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _i*2*Math.atan(Math.tan(Hi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){_n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(_n.x,_n.y).multiplyScalar(-e/_n.z),_n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_n.x,_n.y).multiplyScalar(-e/_n.z)}getViewSize(e,t){return this.getViewBounds(e,Co,bo),t.subVectors(bo,Co)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90,ri=1;class kc extends qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new wt(si,ri,e,t);i.layers=this.layers,this.add(i);const r=new wt(si,ri,e,t);r.layers=this.layers,this.add(r);const a=new wt(si,ri,e,t);a.layers=this.layers,this.add(a);const o=new wt(si,ri,e,t);o.layers=this.layers,this.add(o);const c=new wt(si,ri,e,t);c.layers=this.layers,this.add(c);const h=new wt(si,ri,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===fn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const M=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=M,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(d,u,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xc extends dt{constructor(e,t,n,i,r,a,o,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:gi,super(e,t,n,i,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Wc extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_t}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new bn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:wn});r.uniforms.tEquirect.value=t;const a=new At(i,r),o=t.minFilter;return t.minFilter===xn&&(t.minFilter=_t),new kc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Sr=new B,uf=new B,df=new De;class Fn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sr.subVectors(n,t).cross(uf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||df.getNormalMatrix(e),i=this.coplanarPoint(Sr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gn=new jt,vs=new B;class aa{constructor(e=new Fn,t=new Fn,n=new Fn,i=new Fn,r=new Fn,a=new Fn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],l=i[5],d=i[6],u=i[7],p=i[8],m=i[9],M=i[10],A=i[11],f=i[12],x=i[13],g=i[14],w=i[15];if(n[0].setComponents(c-r,u-h,A-p,w-f).normalize(),n[1].setComponents(c+r,u+h,A+p,w+f).normalize(),n[2].setComponents(c+a,u+l,A+m,w+x).normalize(),n[3].setComponents(c-a,u-l,A-m,w-x).normalize(),n[4].setComponents(c-o,u-d,A-M,w-g).normalize(),t===fn)n[5].setComponents(c+o,u+d,A+M,w+g).normalize();else if(t===Ks)n[5].setComponents(o,d,M,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(e){return Gn.center.set(0,0,0),Gn.radius=.7071067811865476,Gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(vs.x=i.normal.x>0?e.max.x:e.min.x,vs.y=i.normal.y>0?e.max.y:e.min.y,vs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(vs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Af(s){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,d=h.byteLength,u=s.createBuffer();s.bindBuffer(c,u),s.bufferData(c,h,l),o.onUploadCallback();let p;if(h instanceof Float32Array)p=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)p=s.SHORT;else if(h instanceof Uint32Array)p=s.UNSIGNED_INT;else if(h instanceof Int32Array)p=s.INT;else if(h instanceof Int8Array)p=s.BYTE;else if(h instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:p,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const l=c.array,d=c._updateRange,u=c.updateRanges;if(s.bindBuffer(h,o),d.count===-1&&u.length===0&&s.bufferSubData(h,0,l),u.length!==0){for(let p=0,m=u.length;p<m;p++){const M=u[p];s.bufferSubData(h,M.start*l.BYTES_PER_ELEMENT,l,M.start,M.count)}c.clearUpdateRanges()}d.count!==-1&&(s.bufferSubData(h,d.offset*l.BYTES_PER_ELEMENT,l,d.offset,d.count),d.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}class Xi extends ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,l=c+1,d=e/o,u=t/c,p=[],m=[],M=[],A=[];for(let f=0;f<l;f++){const x=f*u-a;for(let g=0;g<h;g++){const w=g*d-r;m.push(w,-x,0),M.push(0,0,1),A.push(g/o),A.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const g=x+h*f,w=x+h*(f+1),T=x+1+h*(f+1),C=x+1+h*f;p.push(g,w,C),p.push(w,T,C)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xi(e.width,e.height,e.widthSegments,e.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pf=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Rf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Ff=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Uf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Wf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Vf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,iu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,su=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ru=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,au=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ou=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,hu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Au=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Cu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Su=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bu=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Eu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Tu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Du=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,zu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Lu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Gu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ru=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ku=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ku=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ju=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Ju=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$u=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ed=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,td=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,id=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ad=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,od=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ld=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ud=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vd=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Md=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,wd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Id=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Bd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ed=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ld=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Od=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Rd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Nd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Kd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Vd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Te={alphahash_fragment:pf,alphahash_pars_fragment:gf,alphamap_fragment:mf,alphamap_pars_fragment:vf,alphatest_fragment:_f,alphatest_pars_fragment:Mf,aomap_fragment:yf,aomap_pars_fragment:xf,batching_pars_vertex:Pf,batching_vertex:wf,begin_vertex:Cf,beginnormal_vertex:bf,bsdfs:If,iridescence_fragment:Sf,bumpmap_pars_fragment:Bf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:zf,color_fragment:Lf,color_pars_fragment:Gf,color_pars_vertex:Of,color_vertex:Rf,common:Ff,cube_uv_reflection_fragment:Hf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Uf,displacementmap_vertex:Kf,emissivemap_fragment:qf,emissivemap_pars_fragment:Yf,colorspace_fragment:kf,colorspace_pars_fragment:Xf,envmap_fragment:Wf,envmap_common_pars_fragment:Vf,envmap_pars_fragment:jf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:cu,envmap_vertex:Qf,fog_vertex:Jf,fog_pars_vertex:$f,fog_fragment:eu,fog_pars_fragment:tu,gradientmap_pars_fragment:nu,lightmap_fragment:iu,lightmap_pars_fragment:su,lights_lambert_fragment:ru,lights_lambert_pars_fragment:au,lights_pars_begin:ou,lights_toon_fragment:hu,lights_toon_pars_fragment:lu,lights_phong_fragment:fu,lights_phong_pars_fragment:uu,lights_physical_fragment:du,lights_physical_pars_fragment:Au,lights_fragment_begin:pu,lights_fragment_maps:gu,lights_fragment_end:mu,logdepthbuf_fragment:vu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:Mu,logdepthbuf_vertex:yu,map_fragment:xu,map_pars_fragment:Pu,map_particle_fragment:wu,map_particle_pars_fragment:Cu,metalnessmap_fragment:bu,metalnessmap_pars_fragment:Iu,morphinstance_vertex:Su,morphcolor_vertex:Bu,morphnormal_vertex:Eu,morphtarget_pars_vertex:Tu,morphtarget_vertex:Du,normal_fragment_begin:zu,normal_fragment_maps:Lu,normal_pars_fragment:Gu,normal_pars_vertex:Ou,normal_vertex:Ru,normalmap_pars_fragment:Fu,clearcoat_normal_fragment_begin:Hu,clearcoat_normal_fragment_maps:Nu,clearcoat_pars_fragment:Uu,iridescence_pars_fragment:Ku,opaque_fragment:qu,packing:Yu,premultiplied_alpha_fragment:ku,project_vertex:Xu,dithering_fragment:Wu,dithering_pars_fragment:Vu,roughnessmap_fragment:ju,roughnessmap_pars_fragment:Zu,shadowmap_pars_fragment:Qu,shadowmap_pars_vertex:Ju,shadowmap_vertex:$u,shadowmask_pars_fragment:ed,skinbase_vertex:td,skinning_pars_vertex:nd,skinning_vertex:id,skinnormal_vertex:sd,specularmap_fragment:rd,specularmap_pars_fragment:ad,tonemapping_fragment:od,tonemapping_pars_fragment:cd,transmission_fragment:hd,transmission_pars_fragment:ld,uv_pars_fragment:fd,uv_pars_vertex:ud,uv_vertex:dd,worldpos_vertex:Ad,background_vert:pd,background_frag:gd,backgroundCube_vert:md,backgroundCube_frag:vd,cube_vert:_d,cube_frag:Md,depth_vert:yd,depth_frag:xd,distanceRGBA_vert:Pd,distanceRGBA_frag:wd,equirect_vert:Cd,equirect_frag:bd,linedashed_vert:Id,linedashed_frag:Sd,meshbasic_vert:Bd,meshbasic_frag:Ed,meshlambert_vert:Td,meshlambert_frag:Dd,meshmatcap_vert:zd,meshmatcap_frag:Ld,meshnormal_vert:Gd,meshnormal_frag:Od,meshphong_vert:Rd,meshphong_frag:Fd,meshphysical_vert:Hd,meshphysical_frag:Nd,meshtoon_vert:Ud,meshtoon_frag:Kd,points_vert:qd,points_frag:Yd,shadow_vert:kd,shadow_frag:Xd,sprite_vert:Wd,sprite_frag:Vd},ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},Yt={basic:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:yt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:yt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:yt([ie.points,ie.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:yt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:yt([ie.common,ie.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:yt([ie.sprite,ie.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:yt([ie.common,ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:yt([ie.lights,ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};Yt.physical={uniforms:yt([Yt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const _s={r:0,b:0,g:0},On=new Xt,jd=new Le;function Zd(s,e,t,n,i,r,a){const o=new Pe(0);let c=r===!0?0:1,h,l,d=null,u=0,p=null;function m(A,f){let x=!1,g=f.isScene===!0?f.background:null;g&&g.isTexture&&(g=(f.backgroundBlurriness>0?t:e).get(g)),g===null?M(o,c):g&&g.isColor&&(M(g,1),x=!0);const w=s.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Vs)?(l===void 0&&(l=new At(new bn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Mi(Yt.backgroundCube.uniforms),vertexShader:Yt.backgroundCube.vertexShader,fragmentShader:Yt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),On.copy(f.backgroundRotation),On.x*=-1,On.y*=-1,On.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(On.y*=-1,On.z*=-1),l.material.uniforms.envMap.value=g,l.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(jd.makeRotationFromEuler(On)),l.material.toneMapped=ke.getTransfer(g.colorSpace)!==Je,(d!==g||u!==g.version||p!==s.toneMapping)&&(l.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),l.layers.enableAll(),A.unshift(l,l.geometry,l.material,0,0,null)):g&&g.isTexture&&(h===void 0&&(h=new At(new Xi(2,2),new Sn({name:"BackgroundMaterial",uniforms:Mi(Yt.background.uniforms),vertexShader:Yt.background.vertexShader,fragmentShader:Yt.background.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=g,h.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,h.material.toneMapped=ke.getTransfer(g.colorSpace)!==Je,g.matrixAutoUpdate===!0&&g.updateMatrix(),h.material.uniforms.uvTransform.value.copy(g.matrix),(d!==g||u!==g.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,d=g,u=g.version,p=s.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null))}function M(A,f){A.getRGB(_s,qc(s)),n.buffers.color.setClear(_s.r,_s.g,_s.b,f,a)}return{getClearColor:function(){return o},setClearColor:function(A,f=1){o.set(A),c=f,M(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(A){c=A,M(o,c)},render:m}}function Qd(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null);let r=i,a=!1;function o(v,L,F,E,K){let Y=!1;const W=d(E,F,L);r!==W&&(r=W,h(r.object)),Y=p(v,E,F,K),Y&&m(v,E,F,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,w(v,L,F,E),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return s.createVertexArray()}function h(v){return s.bindVertexArray(v)}function l(v){return s.deleteVertexArray(v)}function d(v,L,F){const E=F.wireframe===!0;let K=n[v.id];K===void 0&&(K={},n[v.id]=K);let Y=K[L.id];Y===void 0&&(Y={},K[L.id]=Y);let W=Y[E];return W===void 0&&(W=u(c()),Y[E]=W),W}function u(v){const L=[],F=[],E=[];for(let K=0;K<t;K++)L[K]=0,F[K]=0,E[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:E,object:v,attributes:{},index:null}}function p(v,L,F,E){const K=r.attributes,Y=L.attributes;let W=0;const se=F.getAttributes();for(const q in se)if(se[q].location>=0){const Q=K[q];let de=Y[q];if(de===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;W++}return r.attributesNum!==W||r.index!==E}function m(v,L,F,E){const K={},Y=L.attributes;let W=0;const se=F.getAttributes();for(const q in se)if(se[q].location>=0){let Q=Y[q];Q===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),K[q]=de,W++}r.attributes=K,r.attributesNum=W,r.index=E}function M(){const v=r.newAttributes;for(let L=0,F=v.length;L<F;L++)v[L]=0}function A(v){f(v,0)}function f(v,L){const F=r.newAttributes,E=r.enabledAttributes,K=r.attributeDivisors;F[v]=1,E[v]===0&&(s.enableVertexAttribArray(v),E[v]=1),K[v]!==L&&(s.vertexAttribDivisor(v,L),K[v]=L)}function x(){const v=r.newAttributes,L=r.enabledAttributes;for(let F=0,E=L.length;F<E;F++)L[F]!==v[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function g(v,L,F,E,K,Y,W){W===!0?s.vertexAttribIPointer(v,L,F,K,Y):s.vertexAttribPointer(v,L,F,E,K,Y)}function w(v,L,F,E){M();const K=E.attributes,Y=F.getAttributes(),W=L.defaultAttributeValues;for(const se in Y){const q=Y[se];if(q.location>=0){let J=K[se];if(J===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const Q=J.normalized,de=J.itemSize,Oe=e.get(J);if(Oe===void 0)continue;const Ve=Oe.buffer,k=Oe.type,$=Oe.bytesPerElement,ce=k===s.INT||k===s.UNSIGNED_INT||J.gpuType===bc;if(J.isInterleavedBufferAttribute){const ae=J.data,Be=ae.stride,ze=J.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<q.locationSize;Fe++)f(q.location+Fe,ae.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)A(q.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let Fe=0;Fe<q.locationSize;Fe++)g(q.location+Fe,de/q.locationSize,k,Q,Be*$,(ze+de/q.locationSize*Fe)*$,ce)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)f(q.location+ae,J.meshPerAttribute);v.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<q.locationSize;ae++)A(q.location+ae);s.bindBuffer(s.ARRAY_BUFFER,Ve);for(let ae=0;ae<q.locationSize;ae++)g(q.location+ae,de/q.locationSize,k,Q,de*$,de/q.locationSize*ae*$,ce)}}else if(W!==void 0){const Q=W[se];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}x()}function T(){D();for(const v in n){const L=n[v];for(const F in L){const E=L[F];for(const K in E)l(E[K].object),delete E[K];delete L[F]}delete n[v]}}function C(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const F in L){const E=L[F];for(const K in E)l(E[K].object),delete E[K];delete L[F]}delete n[v.id]}function b(v){for(const L in n){const F=n[L];if(F[v.id]===void 0)continue;const E=F[v.id];for(const K in E)l(E[K].object),delete E[K];delete F[v.id]}}function D(){y(),a=!0,r!==i&&(r=i,h(r.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:M,enableAttribute:A,disableUnusedAttributes:x}}function Jd(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,l){l!==0&&(s.drawArraysInstanced(n,c,h,l),t.update(h,n,l))}function o(c,h,l){if(l===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let u=0;u<l;u++)this.render(c[u],h[u]);else{d.multiDrawArraysWEBGL(n,c,0,h,0,l);let u=0;for(let p=0;p<l;p++)u+=h[p];t.update(u,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function $d(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const g=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(g){if(g==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const c=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),u=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),f=l>0,x=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:d,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:A,vertexTextures:f,maxSamples:x}}function eA(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Fn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const p=d.length!==0||u||n!==0||i;return i=u,n=d.length,p},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=l(d,u,0)},this.setState=function(d,u,p){const m=d.clippingPlanes,M=d.clipIntersection,A=d.clipShadows,f=s.get(d);if(!i||m===null||m.length===0||r&&!A)r?l(null):h();else{const x=r?0:n,g=x*4;let w=f.clippingState||null;c.value=w,w=l(m,u,g,p);for(let T=0;T!==g;++T)w[T]=t[T];f.clippingState=w,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(d,u,p,m){const M=d!==null?d.length:0;let A=null;if(M!==0){if(A=c.value,m!==!0||A===null){const f=p+M*4,x=u.matrixWorldInverse;o.getNormalMatrix(x),(A===null||A.length<f)&&(A=new Float32Array(f));for(let g=0,w=p;g!==M;++g,w+=4)a.copy(d[g]).applyMatrix4(x,o),a.normal.toArray(A,w),A[w+3]=a.constant}c.value=A,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,A}}function tA(s){let e=new WeakMap;function t(a,o){return o===Os?a.mapping=gi:o===Yr&&(a.mapping=mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Os||o===Yr)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Wc(c.height);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class jc extends Yc{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ui=4,Io=[.125,.215,.35,.446,.526,.582],Un=20,Br=new jc,So=new Pe;let Er=null,Tr=0,Dr=0,zr=!1;const Hn=(1+Math.sqrt(5))/2,ai=1/Hn,Bo=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Hn,ai),new B(0,Hn,-ai),new B(ai,0,Hn),new B(-ai,0,Hn),new B(Hn,ai,0),new B(-Hn,ai,0)];class qs{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Do(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=To(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Er,Tr,Dr),this._renderer.xr.enabled=zr,e.scissorTest=!1,Ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===gi||e.mapping===mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Er=this._renderer.getRenderTarget(),Tr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:_t,minFilter:_t,generateMipmaps:!1,type:ln,format:Nt,colorSpace:Vt,depthBuffer:!1},i=Eo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=nA(r)),this._blurMaterial=iA(r,e,t)}return i}_compileMaterial(e){const t=new At(this._lodPlanes[0],e);this._renderer.compile(t,Br)}_sceneToCubeUV(e,t,n,i){const o=new wt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,u=l.toneMapping;l.getClearColor(So),l.toneMapping=un,l.autoClear=!1;const p=new ki({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),m=new At(new bn,p);let M=!1;const A=e.background;A?A.isColor&&(p.color.copy(A),e.background=null,M=!0):(p.color.copy(So),M=!0);for(let f=0;f<6;f++){const x=f%3;x===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):x===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));const g=this._cubeSize;Ms(i,x*g,f>2?g:0,g,g),l.setRenderTarget(i),M&&l.render(m,o),l.render(e,o)}m.geometry.dispose(),m.material.dispose(),l.toneMapping=u,l.autoClear=d,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===gi||e.mapping===mi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Do()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=To());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Ms(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Bo[(i-1)%Bo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new At(this._lodPlanes[i],h),u=h.uniforms,p=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Un-1),M=r/m,A=isFinite(r)?1+Math.floor(l*M):Un;A>Un&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Un}`);const f=[];let x=0;for(let b=0;b<Un;++b){const D=b/M,y=Math.exp(-D*D/2);f.push(y),b===0?x+=y:b<A&&(x+=2*y)}for(let b=0;b<f.length;b++)f[b]=f[b]/x;u.envMap.value=e.texture,u.samples.value=A,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:g}=this;u.dTheta.value=m,u.mipInt.value=g-n;const w=this._sizeLods[i],T=3*w*(i>g-ui?i-g+ui:0),C=4*(this._cubeSize-w);Ms(t,T,C,3*w,2*w),c.setRenderTarget(t),c.render(d,Br)}}function nA(s){const e=[],t=[],n=[];let i=s;const r=s-ui+1+Io.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-ui?c=Io[a-s+ui-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,d=1+h,u=[l,l,d,l,d,d,l,l,d,d,l,d],p=6,m=6,M=3,A=2,f=1,x=new Float32Array(M*m*p),g=new Float32Array(A*m*p),w=new Float32Array(f*m*p);for(let C=0;C<p;C++){const b=C%3*2/3-1,D=C>2?0:-1,y=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(y,M*m*C),g.set(u,A*m*C);const v=[C,C,C,C,C,C];w.set(v,f*m*C)}const T=new ht;T.setAttribute("position",new Pt(x,M)),T.setAttribute("uv",new Pt(g,A)),T.setAttribute("faceIndex",new Pt(w,f)),e.push(T),i>ui&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eo(s,e,t){const n=new Kn(s,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ms(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function iA(s,e,t){const n=new Float32Array(Un),i=new B(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:Un,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function To(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function Do(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wn,depthTest:!1,depthWrite:!1})}function oa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sA(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Os||c===Yr,l=c===gi||c===mi;if(h||l){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new qs(s)),d=h?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return h&&p&&p.height>0||l&&p&&i(p)?(t===null&&(t=new qs(s)),d=h?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function i(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function rA(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function aA(s,e,t,n){const i={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const m in u.attributes)e.remove(u.attributes[m]);for(const m in u.morphAttributes){const M=u.morphAttributes[m];for(let A=0,f=M.length;A<f;A++)e.remove(M[A])}u.removeEventListener("dispose",a),delete i[u.id];const p=r.get(u);p&&(e.remove(p),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return i[u.id]===!0||(u.addEventListener("dispose",a),i[u.id]=!0,t.memory.geometries++),u}function c(d){const u=d.attributes;for(const m in u)e.update(u[m],s.ARRAY_BUFFER);const p=d.morphAttributes;for(const m in p){const M=p[m];for(let A=0,f=M.length;A<f;A++)e.update(M[A],s.ARRAY_BUFFER)}}function h(d){const u=[],p=d.index,m=d.attributes.position;let M=0;if(p!==null){const x=p.array;M=p.version;for(let g=0,w=x.length;g<w;g+=3){const T=x[g+0],C=x[g+1],b=x[g+2];u.push(T,C,C,b,b,T)}}else if(m!==void 0){const x=m.array;M=m.version;for(let g=0,w=x.length/3-1;g<w;g+=3){const T=g+0,C=g+1,b=g+2;u.push(T,C,C,b,b,T)}}else return;const A=new(Oc(u)?Kc:Uc)(u,1);A.version=M;const f=r.get(d);f&&e.remove(f),r.set(d,A)}function l(d){const u=r.get(d);if(u){const p=d.index;p!==null&&u.version<p.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function oA(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){s.drawElements(n,u,r,d*a),t.update(u,n,1)}function h(d,u,p){p!==0&&(s.drawElementsInstanced(n,u,r,d*a,p),t.update(u,n,p))}function l(d,u,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let M=0;M<p;M++)this.render(d[M]/a,u[M]);else{m.multiDrawElementsWEBGL(n,u,0,r,d,0,p);let M=0;for(let A=0;A<p;A++)M+=u[A];t.update(M,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function cA(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function hA(s,e,t){const n=new WeakMap,i=new We;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let y=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,A=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let g=0;p===!0&&(g=1),m===!0&&(g=2),M===!0&&(g=3);let w=o.attributes.position.count*g,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const C=new Float32Array(w*T*4*d),b=new Hc(C,w,T,d);b.type=Tt,b.needsUpdate=!0;const D=g*4;for(let v=0;v<d;v++){const L=A[v],F=f[v],E=x[v],K=w*T*4*v;for(let Y=0;Y<L.count;Y++){const W=Y*D;p===!0&&(i.fromBufferAttribute(L,Y),C[K+W+0]=i.x,C[K+W+1]=i.y,C[K+W+2]=i.z,C[K+W+3]=0),m===!0&&(i.fromBufferAttribute(F,Y),C[K+W+4]=i.x,C[K+W+5]=i.y,C[K+W+6]=i.z,C[K+W+7]=0),M===!0&&(i.fromBufferAttribute(E,Y),C[K+W+8]=i.x,C[K+W+9]=i.y,C[K+W+10]=i.z,C[K+W+11]=E.itemSize===4?i.w:1)}}u={count:d,texture:b,size:new le(w,T)},n.set(o,u),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<h.length;M++)p+=h[M];const m=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(s,"morphTargetBaseInfluence",m),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function lA(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,d=e.get(c,l);if(i.get(d)!==h&&(e.update(d),i.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const u=c.skeleton;i.get(u)!==h&&(u.update(),i.set(u,h))}return d}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class Zc extends dt{constructor(e,t,n,i,r,a,o,c,h,l){if(l=l!==void 0?l:Ai,l!==Ai&&l!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ai&&(n=vi),n===void 0&&l===Ui&&(n=qi),super(null,i,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=c!==void 0?c:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Qc=new dt,Jc=new Zc(1,1);Jc.compareFunction=Gc;const $c=new Hc,eh=new Wl,th=new Xc,zo=[],Lo=[],Go=new Float32Array(16),Oo=new Float32Array(9),Ro=new Float32Array(4);function yi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=zo[i];if(r===void 0&&(r=new Float32Array(i),zo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ot(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ct(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Zs(s,e){let t=Lo[e];t===void 0&&(t=new Int32Array(e),Lo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function fA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2fv(this.addr,e),ct(t,e)}}function dA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ot(t,e))return;s.uniform3fv(this.addr,e),ct(t,e)}}function AA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4fv(this.addr,e),ct(t,e)}}function pA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Ro.set(n),s.uniformMatrix2fv(this.addr,!1,Ro),ct(t,n)}}function gA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Oo.set(n),s.uniformMatrix3fv(this.addr,!1,Oo),ct(t,n)}}function mA(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ot(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ct(t,e)}else{if(ot(t,n))return;Go.set(n),s.uniformMatrix4fv(this.addr,!1,Go),ct(t,n)}}function vA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function _A(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2iv(this.addr,e),ct(t,e)}}function MA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3iv(this.addr,e),ct(t,e)}}function yA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4iv(this.addr,e),ct(t,e)}}function xA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function PA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ot(t,e))return;s.uniform2uiv(this.addr,e),ct(t,e)}}function wA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ot(t,e))return;s.uniform3uiv(this.addr,e),ct(t,e)}}function CA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ot(t,e))return;s.uniform4uiv(this.addr,e),ct(t,e)}}function bA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Jc:Qc;t.setTexture2D(e||r,i)}function IA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||eh,i)}function SA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||th,i)}function BA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||$c,i)}function EA(s){switch(s){case 5126:return fA;case 35664:return uA;case 35665:return dA;case 35666:return AA;case 35674:return pA;case 35675:return gA;case 35676:return mA;case 5124:case 35670:return vA;case 35667:case 35671:return _A;case 35668:case 35672:return MA;case 35669:case 35673:return yA;case 5125:return xA;case 36294:return PA;case 36295:return wA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return bA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return SA;case 36289:case 36303:case 36311:case 36292:return BA}}function TA(s,e){s.uniform1fv(this.addr,e)}function DA(s,e){const t=yi(e,this.size,2);s.uniform2fv(this.addr,t)}function zA(s,e){const t=yi(e,this.size,3);s.uniform3fv(this.addr,t)}function LA(s,e){const t=yi(e,this.size,4);s.uniform4fv(this.addr,t)}function GA(s,e){const t=yi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OA(s,e){const t=yi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function RA(s,e){const t=yi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function FA(s,e){s.uniform1iv(this.addr,e)}function HA(s,e){s.uniform2iv(this.addr,e)}function NA(s,e){s.uniform3iv(this.addr,e)}function UA(s,e){s.uniform4iv(this.addr,e)}function KA(s,e){s.uniform1uiv(this.addr,e)}function qA(s,e){s.uniform2uiv(this.addr,e)}function YA(s,e){s.uniform3uiv(this.addr,e)}function kA(s,e){s.uniform4uiv(this.addr,e)}function XA(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Qc,r[a])}function WA(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||eh,r[a])}function VA(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||th,r[a])}function jA(s,e,t){const n=this.cache,i=e.length,r=Zs(t,i);ot(n,r)||(s.uniform1iv(this.addr,r),ct(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||$c,r[a])}function ZA(s){switch(s){case 5126:return TA;case 35664:return DA;case 35665:return zA;case 35666:return LA;case 35674:return GA;case 35675:return OA;case 35676:return RA;case 5124:case 35670:return FA;case 35667:case 35671:return HA;case 35668:case 35672:return NA;case 35669:case 35673:return UA;case 5125:return KA;case 36294:return qA;case 36295:return YA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return VA;case 36289:case 36303:case 36311:case 36292:return jA}}class QA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=EA(t.type)}}class JA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZA(t.type)}}class $A{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Lr=/(\w+)(\])?(\[|\.)?/g;function Fo(s,e){s.seq.push(e),s.map[e.id]=e}function ep(s,e,t){const n=s.name,i=n.length;for(Lr.lastIndex=0;;){const r=Lr.exec(n),a=Lr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){Fo(t,h===void 0?new QA(o,s,e):new JA(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new $A(o),Fo(t,d)),t=d}}}class Ds{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);ep(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ho(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const tp=37297;let np=0;function ip(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function sp(s){const e=ke.getPrimaries(ke.workingColorSpace),t=ke.getPrimaries(s);let n;switch(e===t?n="":e===Us&&t===Ns?n="LinearDisplayP3ToLinearSRGB":e===Ns&&t===Us&&(n="LinearSRGBToLinearDisplayP3"),s){case Vt:case js:return[n,"LinearTransferOETF"];case Rt:case na:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function No(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+ip(s.getShaderSource(e),a)}else return i}function rp(s,e){const t=sp(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ap(s,e){let t;switch(e){case Pc:t="Linear";break;case Qh:t="Reinhard";break;case Jh:t="OptimizedCineon";break;case $h:t="ACESFilmic";break;case tl:t="AgX";break;case nl:t="Neutral";break;case el:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function op(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function cp(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function hp(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ri(s){return s!==""}function Uo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ko(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(s){return s.replace(lp,up)}const fp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function up(s,e){let t=Te[e];if(t===void 0){const n=fp.get(e);if(n!==void 0)t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vr(t)}const dp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qo(s){return s.replace(dp,Ap)}function Ap(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Yo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function pp(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===ta?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function gp(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case gi:case mi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mp(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mi:e="ENVMAP_MODE_REFRACTION";break}return e}function vp(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case xc:e="ENVMAP_BLENDING_MULTIPLY";break;case jh:e="ENVMAP_BLENDING_MIX";break;case Zh:e="ENVMAP_BLENDING_ADD";break}return e}function _p(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Mp(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=pp(t),h=gp(t),l=mp(t),d=vp(t),u=_p(t),p=op(t),m=cp(r),M=i.createProgram();let A,f,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ri).join(`
`),A.length>0&&(A+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Ri).join(`
`),f.length>0&&(f+=`
`)):(A=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),f=[Yo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==un?"#define TONE_MAPPING":"",t.toneMapping!==un?Te.tonemapping_pars_fragment:"",t.toneMapping!==un?ap("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,rp("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),a=Vr(a),a=Uo(a,t),a=Ko(a,t),o=Vr(o),o=Uo(o,t),o=Ko(o,t),a=qo(a),o=qo(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,A=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,f=["#define varying in",t.glslVersion===ro?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ro?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const g=x+A+a,w=x+f+o,T=Ho(i,i.VERTEX_SHADER,g),C=Ho(i,i.FRAGMENT_SHADER,w);i.attachShader(M,T),i.attachShader(M,C),t.index0AttributeName!==void 0?i.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(M,0,"position"),i.linkProgram(M);function b(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(M).trim(),E=i.getShaderInfoLog(T).trim(),K=i.getShaderInfoLog(C).trim();let Y=!0,W=!0;if(i.getProgramParameter(M,i.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,M,T,C);else{const se=No(i,T,"vertex"),q=No(i,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(M,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+se+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(E===""||K==="")&&(W=!1);W&&(L.diagnostics={runnable:Y,programLog:F,vertexShader:{log:E,prefix:A},fragmentShader:{log:K,prefix:f}})}i.deleteShader(T),i.deleteShader(C),D=new Ds(i,M),y=hp(i,M)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let y;this.getAttributes=function(){return y===void 0&&b(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(M,tp)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=np++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=C,this}let yp=0;class xp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pp(e),t.set(e,n)),n}}class Pp{constructor(e){this.id=yp++,this.code=e,this.usedTimes=0}}function wp(s,e,t,n,i,r,a){const o=new ra,c=new xp,h=new Set,l=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(y){return h.add(y),y===0?"uv":`uv${y}`}function A(y,v,L,F,E){const K=F.fog,Y=E.geometry,W=y.isMeshStandardMaterial?F.environment:null,se=(y.isMeshStandardMaterial?t:e).get(y.envMap||W),q=se&&se.mapping===Vs?se.image.height:null,J=m[y.type];y.precision!==null&&(p=i.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const Q=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,de=Q!==void 0?Q.length:0;let Oe=0;Y.morphAttributes.position!==void 0&&(Oe=1),Y.morphAttributes.normal!==void 0&&(Oe=2),Y.morphAttributes.color!==void 0&&(Oe=3);let Ve,k,$,ce;if(J){const pt=Yt[J];Ve=pt.vertexShader,k=pt.fragmentShader}else Ve=y.vertexShader,k=y.fragmentShader,c.update(y),$=c.getVertexShaderID(y),ce=c.getFragmentShaderID(y);const ae=s.getRenderTarget(),Be=E.isInstancedMesh===!0,ze=E.isBatchedMesh===!0,Fe=!!y.map,G=!!y.matcap,Ge=!!se,ye=!!y.aoMap,at=!!y.lightMap,we=!!y.bumpMap,Xe=!!y.normalMap,I=!!y.displacementMap,_=!!y.emissiveMap,U=!!y.metalnessMap,X=!!y.roughnessMap,V=y.anisotropy>0,j=y.clearcoat>0,_e=y.iridescence>0,Z=y.sheen>0,ge=y.transmission>0,Me=V&&!!y.anisotropyMap,ne=j&&!!y.clearcoatMap,oe=j&&!!y.clearcoatNormalMap,Ce=j&&!!y.clearcoatRoughnessMap,he=_e&&!!y.iridescenceMap,fe=_e&&!!y.iridescenceThicknessMap,Re=Z&&!!y.sheenColorMap,He=Z&&!!y.sheenRoughnessMap,Ue=!!y.specularMap,Ne=!!y.specularColorMap,$e=!!y.specularIntensityMap,Ae=ge&&!!y.transmissionMap,S=ge&&!!y.thicknessMap,te=!!y.gradientMap,ee=!!y.alphaMap,pe=y.alphaTest>0,me=!!y.alphaHash,je=!!y.extensions;let et=un;y.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(et=s.toneMapping);const nt={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:Ve,fragmentShader:k,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ze,instancing:Be,instancingColor:Be&&E.instanceColor!==null,instancingMorph:Be&&E.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:Vt,alphaToCoverage:!!y.alphaToCoverage,map:Fe,matcap:G,envMap:Ge,envMapMode:Ge&&se.mapping,envMapCubeUVHeight:q,aoMap:ye,lightMap:at,bumpMap:we,normalMap:Xe,displacementMap:u&&I,emissiveMap:_,normalMapObjectSpace:Xe&&y.normalMapType===ml,normalMapTangentSpace:Xe&&y.normalMapType===Lc,metalnessMap:U,roughnessMap:X,anisotropy:V,anisotropyMap:Me,clearcoat:j,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ce,iridescence:_e,iridescenceMap:he,iridescenceThicknessMap:fe,sheen:Z,sheenColorMap:Re,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:$e,transmission:ge,transmissionMap:Ae,thicknessMap:S,gradientMap:te,opaque:y.transparent===!1&&y.blending===di&&y.alphaToCoverage===!1,alphaMap:ee,alphaTest:pe,alphaHash:me,combine:y.combine,mapUv:Fe&&M(y.map.channel),aoMapUv:ye&&M(y.aoMap.channel),lightMapUv:at&&M(y.lightMap.channel),bumpMapUv:we&&M(y.bumpMap.channel),normalMapUv:Xe&&M(y.normalMap.channel),displacementMapUv:I&&M(y.displacementMap.channel),emissiveMapUv:_&&M(y.emissiveMap.channel),metalnessMapUv:U&&M(y.metalnessMap.channel),roughnessMapUv:X&&M(y.roughnessMap.channel),anisotropyMapUv:Me&&M(y.anisotropyMap.channel),clearcoatMapUv:ne&&M(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&M(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&M(y.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&M(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&M(y.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&M(y.sheenColorMap.channel),sheenRoughnessMapUv:He&&M(y.sheenRoughnessMap.channel),specularMapUv:Ue&&M(y.specularMap.channel),specularColorMapUv:Ne&&M(y.specularColorMap.channel),specularIntensityMapUv:$e&&M(y.specularIntensityMap.channel),transmissionMapUv:Ae&&M(y.transmissionMap.channel),thicknessMapUv:S&&M(y.thicknessMap.channel),alphaMapUv:ee&&M(y.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(Xe||V),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!Y.attributes.uv&&(Fe||ee),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Oe,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Fe&&y.map.isVideoTexture===!0&&ke.getTransfer(y.map.colorSpace)===Je,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===on,flipSided:y.side===xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:je&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:je&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return nt.vertexUv1s=h.has(1),nt.vertexUv2s=h.has(2),nt.vertexUv3s=h.has(3),h.clear(),nt}function f(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const L in y.defines)v.push(L),v.push(y.defines[L]);return y.isRawShaderMaterial===!1&&(x(v,y),g(v,y),v.push(s.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function x(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function g(y,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),y.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),y.push(o.mask)}function w(y){const v=m[y.type];let L;if(v){const F=Yt[v];L=hf.clone(F.uniforms)}else L=y.uniforms;return L}function T(y,v){let L;for(let F=0,E=l.length;F<E;F++){const K=l[F];if(K.cacheKey===v){L=K,++L.usedTimes;break}}return L===void 0&&(L=new Mp(s,v,y,r),l.push(L)),L}function C(y){if(--y.usedTimes===0){const v=l.indexOf(y);l[v]=l[l.length-1],l.pop(),y.destroy()}}function b(y){c.remove(y)}function D(){c.dispose()}return{getParameters:A,getProgramCacheKey:f,getUniforms:w,acquireProgram:T,releaseProgram:C,releaseShaderCache:b,programs:l,dispose:D}}function Cp(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function bp(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ko(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Xo(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(d,u,p,m,M,A){let f=s[e];return f===void 0?(f={id:d.id,object:d,geometry:u,material:p,groupOrder:m,renderOrder:d.renderOrder,z:M,group:A},s[e]=f):(f.id=d.id,f.object=d,f.geometry=u,f.material=p,f.groupOrder=m,f.renderOrder=d.renderOrder,f.z=M,f.group=A),e++,f}function o(d,u,p,m,M,A){const f=a(d,u,p,m,M,A);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function c(d,u,p,m,M,A){const f=a(d,u,p,m,M,A);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function h(d,u){t.length>1&&t.sort(d||bp),n.length>1&&n.sort(u||ko),i.length>1&&i.sort(u||ko)}function l(){for(let d=e,u=s.length;d<u;d++){const p=s[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:l,sort:h}}function Ip(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Xo,s.set(n,[a])):i>=r.length?(a=new Xo,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Sp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Pe};break;case"SpotLight":t={position:new B,direction:new B,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function Bp(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ep=0;function Tp(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Dp(s){const e=new Sp,t=Bp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);const i=new B,r=new Le,a=new Le;function o(h,l){let d=0,u=0,p=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let m=0,M=0,A=0,f=0,x=0,g=0,w=0,T=0,C=0,b=0,D=0;h.sort(Tp);const y=l===!0?Math.PI:1;for(let L=0,F=h.length;L<F;L++){const E=h[L],K=E.color,Y=E.intensity,W=E.distance,se=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=K.r*Y*y,u+=K.g*Y*y,p+=K.b*Y*y;else if(E.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(E.sh.coefficients[q],Y);D++}else if(E.isDirectionalLight){const q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity*y),E.castShadow){const J=E.shadow,Q=t.get(E);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[m]=Q,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=E.shadow.matrix,g++}n.directional[m]=q,m++}else if(E.isSpotLight){const q=e.get(E);q.position.setFromMatrixPosition(E.matrixWorld),q.color.copy(K).multiplyScalar(Y*y),q.distance=W,q.coneCos=Math.cos(E.angle),q.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),q.decay=E.decay,n.spot[A]=q;const J=E.shadow;if(E.map&&(n.spotLightMap[C]=E.map,C++,J.updateMatrices(E),E.castShadow&&b++),n.spotLightMatrix[A]=J.matrix,E.castShadow){const Q=t.get(E);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[A]=Q,n.spotShadowMap[A]=se,T++}A++}else if(E.isRectAreaLight){const q=e.get(E);q.color.copy(K).multiplyScalar(Y),q.halfWidth.set(E.width*.5,0,0),q.halfHeight.set(0,E.height*.5,0),n.rectArea[f]=q,f++}else if(E.isPointLight){const q=e.get(E);if(q.color.copy(E.color).multiplyScalar(E.intensity*y),q.distance=E.distance,q.decay=E.decay,E.castShadow){const J=E.shadow,Q=t.get(E);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[M]=Q,n.pointShadowMap[M]=se,n.pointShadowMatrix[M]=E.shadow.matrix,w++}n.point[M]=q,M++}else if(E.isHemisphereLight){const q=e.get(E);q.skyColor.copy(E.color).multiplyScalar(Y*y),q.groundColor.copy(E.groundColor).multiplyScalar(Y*y),n.hemi[x]=q,x++}}f>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=p;const v=n.hash;(v.directionalLength!==m||v.pointLength!==M||v.spotLength!==A||v.rectAreaLength!==f||v.hemiLength!==x||v.numDirectionalShadows!==g||v.numPointShadows!==w||v.numSpotShadows!==T||v.numSpotMaps!==C||v.numLightProbes!==D)&&(n.directional.length=m,n.spot.length=A,n.rectArea.length=f,n.point.length=M,n.hemi.length=x,n.directionalShadow.length=g,n.directionalShadowMap.length=g,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=g,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=T+C-b,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,v.directionalLength=m,v.pointLength=M,v.spotLength=A,v.rectAreaLength=f,v.hemiLength=x,v.numDirectionalShadows=g,v.numPointShadows=w,v.numSpotShadows=T,v.numSpotMaps=C,v.numLightProbes=D,n.version=Ep++)}function c(h,l){let d=0,u=0,p=0,m=0,M=0;const A=l.matrixWorldInverse;for(let f=0,x=h.length;f<x;f++){const g=h[f];if(g.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(A),d++}else if(g.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(g.matrixWorld),w.position.applyMatrix4(A),w.direction.setFromMatrixPosition(g.matrixWorld),i.setFromMatrixPosition(g.target.matrixWorld),w.direction.sub(i),w.direction.transformDirection(A),p++}else if(g.isRectAreaLight){const w=n.rectArea[m];w.position.setFromMatrixPosition(g.matrixWorld),w.position.applyMatrix4(A),a.identity(),r.copy(g.matrixWorld),r.premultiply(A),a.extractRotation(r),w.halfWidth.set(g.width*.5,0,0),w.halfHeight.set(0,g.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),m++}else if(g.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(g.matrixWorld),w.position.applyMatrix4(A),u++}else if(g.isHemisphereLight){const w=n.hemi[M];w.direction.setFromMatrixPosition(g.matrixWorld),w.direction.transformDirection(A),M++}}}return{setup:o,setupView:c,state:n}}function Wo(s){const e=new Dp(s),t=[],n=[];function i(){t.length=0,n.length=0}function r(l){t.push(l)}function a(l){n.push(l)}function o(l){e.setup(t,l)}function c(l){e.setupView(t,l)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function zp(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Wo(s),e.set(i,[o])):r>=a.length?(o=new Wo(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Lp extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gp extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Op=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fp(s,e,t){let n=new aa;const i=new le,r=new le,a=new We,o=new Lp({depthPacking:gl}),c=new Gp,h={},l=t.maxTextureSize,d={[kt]:xt,[xt]:kt,[on]:on},u=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:Op,fragmentShader:Rp}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const m=new ht;m.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new At(m,u),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ta;let f=this.type;this.render=function(C,b,D){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||C.length===0)return;const y=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(wn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const E=f!==rn&&this.type===rn,K=f===rn&&this.type!==rn;for(let Y=0,W=C.length;Y<W;Y++){const se=C[Y],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const J=q.getFrameExtents();if(i.multiply(J),r.copy(q.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/J.x),i.x=r.x*J.x,q.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/J.y),i.y=r.y*J.y,q.mapSize.y=r.y)),q.map===null||E===!0||K===!0){const de=this.type!==rn?{minFilter:Ct,magFilter:Ct}:{};q.map!==null&&q.map.dispose(),q.map=new Kn(i.x,i.y,de),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const Q=q.getViewportCount();for(let de=0;de<Q;de++){const Oe=q.getViewport(de);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),F.viewport(a),q.updateMatrices(se,de),n=q.getFrustum(),w(b,D,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===rn&&x(q,D),q.needsUpdate=!1}f=this.type,A.needsUpdate=!1,s.setRenderTarget(y,v,L)};function x(C,b){const D=e.update(M);u.defines.VSM_SAMPLES!==C.blurSamples&&(u.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Kn(i.x,i.y)),u.uniforms.shadow_pass.value=C.map.texture,u.uniforms.resolution.value=C.mapSize,u.uniforms.radius.value=C.radius,s.setRenderTarget(C.mapPass),s.clear(),s.renderBufferDirect(b,null,D,u,M,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,s.setRenderTarget(C.map),s.clear(),s.renderBufferDirect(b,null,D,p,M,null)}function g(C,b,D,y){let v=null;const L=D.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)v=L;else if(v=D.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=v.uuid,E=b.uuid;let K=h[F];K===void 0&&(K={},h[F]=K);let Y=K[E];Y===void 0&&(Y=v.clone(),K[E]=Y,b.addEventListener("dispose",T)),v=Y}if(v.visible=b.visible,v.wireframe=b.wireframe,y===rn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:d[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=D}return v}function w(C,b,D,y,v){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&v===rn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,C.matrixWorld);const E=e.update(C),K=C.material;if(Array.isArray(K)){const Y=E.groups;for(let W=0,se=Y.length;W<se;W++){const q=Y[W],J=K[q.materialIndex];if(J&&J.visible){const Q=g(C,J,y,v);C.onBeforeShadow(s,C,b,D,E,Q,q),s.renderBufferDirect(D,null,E,Q,C,q),C.onAfterShadow(s,C,b,D,E,Q,q)}}}else if(K.visible){const Y=g(C,K,y,v);C.onBeforeShadow(s,C,b,D,E,Y,null),s.renderBufferDirect(D,null,E,Y,C,null),C.onAfterShadow(s,C,b,D,E,Y,null)}}const F=C.children;for(let E=0,K=F.length;E<K;E++)w(F[E],b,D,y,v)}function T(C){C.target.removeEventListener("dispose",T);for(const D in h){const y=h[D],v=C.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function Hp(s){function e(){let S=!1;const te=new We;let ee=null;const pe=new We(0,0,0,0);return{setMask:function(me){ee!==me&&!S&&(s.colorMask(me,me,me,me),ee=me)},setLocked:function(me){S=me},setClear:function(me,je,et,nt,pt){pt===!0&&(me*=nt,je*=nt,et*=nt),te.set(me,je,et,nt),pe.equals(te)===!1&&(s.clearColor(me,je,et,nt),pe.copy(te))},reset:function(){S=!1,ee=null,pe.set(-1,0,0,0)}}}function t(){let S=!1,te=null,ee=null,pe=null;return{setTest:function(me){me?ce(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(me){te!==me&&!S&&(s.depthMask(me),te=me)},setFunc:function(me){if(ee!==me){switch(me){case Kh:s.depthFunc(s.NEVER);break;case qh:s.depthFunc(s.ALWAYS);break;case Yh:s.depthFunc(s.LESS);break;case Gs:s.depthFunc(s.LEQUAL);break;case kh:s.depthFunc(s.EQUAL);break;case Xh:s.depthFunc(s.GEQUAL);break;case Wh:s.depthFunc(s.GREATER);break;case Vh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=me}},setLocked:function(me){S=me},setClear:function(me){pe!==me&&(s.clearDepth(me),pe=me)},reset:function(){S=!1,te=null,ee=null,pe=null}}}function n(){let S=!1,te=null,ee=null,pe=null,me=null,je=null,et=null,nt=null,pt=null;return{setTest:function(Qe){S||(Qe?ce(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Qe){te!==Qe&&!S&&(s.stencilMask(Qe),te=Qe)},setFunc:function(Qe,Kt,qt){(ee!==Qe||pe!==Kt||me!==qt)&&(s.stencilFunc(Qe,Kt,qt),ee=Qe,pe=Kt,me=qt)},setOp:function(Qe,Kt,qt){(je!==Qe||et!==Kt||nt!==qt)&&(s.stencilOp(Qe,Kt,qt),je=Qe,et=Kt,nt=qt)},setLocked:function(Qe){S=Qe},setClear:function(Qe){pt!==Qe&&(s.clearStencil(Qe),pt=Qe)},reset:function(){S=!1,te=null,ee=null,pe=null,me=null,je=null,et=null,nt=null,pt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let h={},l={},d=new WeakMap,u=[],p=null,m=!1,M=null,A=null,f=null,x=null,g=null,w=null,T=null,C=new Pe(0,0,0),b=0,D=!1,y=null,v=null,L=null,F=null,E=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,W=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),Y=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),Y=W>=2);let q=null,J={};const Q=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Oe=new We().fromArray(Q),Ve=new We().fromArray(de);function k(S,te,ee,pe){const me=new Uint8Array(4),je=s.createTexture();s.bindTexture(S,je),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ee;et++)S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return je}const $={};$[s.TEXTURE_2D]=k(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=k(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=k(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=k(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),r.setFunc(Gs),we(!1),Xe(Ca),ce(s.CULL_FACE),ye(wn);function ce(S){h[S]!==!0&&(s.enable(S),h[S]=!0)}function ae(S){h[S]!==!1&&(s.disable(S),h[S]=!1)}function Be(S,te){return l[S]!==te?(s.bindFramebuffer(S,te),l[S]=te,S===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=te),S===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ze(S,te){let ee=u,pe=!1;if(S){ee=d.get(te),ee===void 0&&(ee=[],d.set(te,ee));const me=S.textures;if(ee.length!==me.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let je=0,et=me.length;je<et;je++)ee[je]=s.COLOR_ATTACHMENT0+je;ee.length=me.length,pe=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ee)}function Fe(S){return p!==S?(s.useProgram(S),p=S,!0):!1}const G={[Nn]:s.FUNC_ADD,[Ch]:s.FUNC_SUBTRACT,[bh]:s.FUNC_REVERSE_SUBTRACT};G[Ih]=s.MIN,G[Sh]=s.MAX;const Ge={[Bh]:s.ZERO,[Eh]:s.ONE,[Th]:s.SRC_COLOR,[Kr]:s.SRC_ALPHA,[Rh]:s.SRC_ALPHA_SATURATE,[Gh]:s.DST_COLOR,[zh]:s.DST_ALPHA,[Dh]:s.ONE_MINUS_SRC_COLOR,[qr]:s.ONE_MINUS_SRC_ALPHA,[Oh]:s.ONE_MINUS_DST_COLOR,[Lh]:s.ONE_MINUS_DST_ALPHA,[Fh]:s.CONSTANT_COLOR,[Hh]:s.ONE_MINUS_CONSTANT_COLOR,[Nh]:s.CONSTANT_ALPHA,[Uh]:s.ONE_MINUS_CONSTANT_ALPHA};function ye(S,te,ee,pe,me,je,et,nt,pt,Qe){if(S===wn){m===!0&&(ae(s.BLEND),m=!1);return}if(m===!1&&(ce(s.BLEND),m=!0),S!==wh){if(S!==M||Qe!==D){if((A!==Nn||g!==Nn)&&(s.blendEquation(s.FUNC_ADD),A=Nn,g=Nn),Qe)switch(S){case di:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.ONE,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sa:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case di:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ba:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ia:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Sa:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}f=null,x=null,w=null,T=null,C.set(0,0,0),b=0,M=S,D=Qe}return}me=me||te,je=je||ee,et=et||pe,(te!==A||me!==g)&&(s.blendEquationSeparate(G[te],G[me]),A=te,g=me),(ee!==f||pe!==x||je!==w||et!==T)&&(s.blendFuncSeparate(Ge[ee],Ge[pe],Ge[je],Ge[et]),f=ee,x=pe,w=je,T=et),(nt.equals(C)===!1||pt!==b)&&(s.blendColor(nt.r,nt.g,nt.b,pt),C.copy(nt),b=pt),M=S,D=!1}function at(S,te){S.side===on?ae(s.CULL_FACE):ce(s.CULL_FACE);let ee=S.side===xt;te&&(ee=!ee),we(ee),S.blending===di&&S.transparent===!1?ye(wn):ye(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),i.setMask(S.colorWrite);const pe=S.stencilWrite;a.setTest(pe),pe&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),_(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function we(S){y!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),y=S)}function Xe(S){S!==yh?(ce(s.CULL_FACE),S!==v&&(S===Ca?s.cullFace(s.BACK):S===xh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),v=S}function I(S){S!==L&&(Y&&s.lineWidth(S),L=S)}function _(S,te,ee){S?(ce(s.POLYGON_OFFSET_FILL),(F!==te||E!==ee)&&(s.polygonOffset(te,ee),F=te,E=ee)):ae(s.POLYGON_OFFSET_FILL)}function U(S){S?ce(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function X(S){S===void 0&&(S=s.TEXTURE0+K-1),q!==S&&(s.activeTexture(S),q=S)}function V(S,te,ee){ee===void 0&&(q===null?ee=s.TEXTURE0+K-1:ee=q);let pe=J[ee];pe===void 0&&(pe={type:void 0,texture:void 0},J[ee]=pe),(pe.type!==S||pe.texture!==te)&&(q!==ee&&(s.activeTexture(ee),q=ee),s.bindTexture(S,te||$[S]),pe.type=S,pe.texture=te)}function j(){const S=J[q];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Ce(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Re(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function He(S){Oe.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),Oe.copy(S))}function Ue(S){Ve.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),Ve.copy(S))}function Ne(S,te){let ee=c.get(te);ee===void 0&&(ee=new WeakMap,c.set(te,ee));let pe=ee.get(S);pe===void 0&&(pe=s.getUniformBlockIndex(te,S.name),ee.set(S,pe))}function $e(S,te){const pe=c.get(te).get(S);o.get(te)!==pe&&(s.uniformBlockBinding(te,pe,S.__bindingPointIndex),o.set(te,pe))}function Ae(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,J={},l={},d=new WeakMap,u=[],p=null,m=!1,M=null,A=null,f=null,x=null,g=null,w=null,T=null,C=new Pe(0,0,0),b=0,D=!1,y=null,v=null,L=null,F=null,E=null,Oe.set(0,0,s.canvas.width,s.canvas.height),Ve.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ce,disable:ae,bindFramebuffer:Be,drawBuffers:ze,useProgram:Fe,setBlending:ye,setMaterial:at,setFlipSided:we,setCullFace:Xe,setLineWidth:I,setPolygonOffset:_,setScissorTest:U,activeTexture:X,bindTexture:V,unbindTexture:j,compressedTexImage2D:_e,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Re,updateUBOMapping:Ne,uniformBlockBinding:$e,texStorage2D:Ce,texStorage3D:he,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:He,viewport:Ue,reset:Ae}}function Np(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,l=new WeakMap;let d;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(I,_){return p?new OffscreenCanvas(I,_):Ki("canvas")}function M(I,_,U){let X=1;const V=Xe(I);if((V.width>U||V.height>U)&&(X=U/Math.max(V.width,V.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(X*V.width),_e=Math.floor(X*V.height);d===void 0&&(d=m(j,_e));const Z=_?m(j,_e):d;return Z.width=j,Z.height=_e,Z.getContext("2d").drawImage(I,0,0,j,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+j+"x"+_e+")."),Z}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),I;return I}function A(I){return I.generateMipmaps&&I.minFilter!==Ct&&I.minFilter!==_t}function f(I){s.generateMipmap(I)}function x(I,_,U,X,V=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=_;if(_===s.RED&&(U===s.FLOAT&&(j=s.R32F),U===s.HALF_FLOAT&&(j=s.R16F),U===s.UNSIGNED_BYTE&&(j=s.R8)),_===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(j=s.R8UI),U===s.UNSIGNED_SHORT&&(j=s.R16UI),U===s.UNSIGNED_INT&&(j=s.R32UI),U===s.BYTE&&(j=s.R8I),U===s.SHORT&&(j=s.R16I),U===s.INT&&(j=s.R32I)),_===s.RG&&(U===s.FLOAT&&(j=s.RG32F),U===s.HALF_FLOAT&&(j=s.RG16F),U===s.UNSIGNED_BYTE&&(j=s.RG8)),_===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(j=s.RG8UI),U===s.UNSIGNED_SHORT&&(j=s.RG16UI),U===s.UNSIGNED_INT&&(j=s.RG32UI),U===s.BYTE&&(j=s.RG8I),U===s.SHORT&&(j=s.RG16I),U===s.INT&&(j=s.RG32I)),_===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),_===s.RGBA){const _e=V?Hs:ke.getTransfer(X);U===s.FLOAT&&(j=s.RGBA32F),U===s.HALF_FLOAT&&(j=s.RGBA16F),U===s.UNSIGNED_BYTE&&(j=_e===Je?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function g(I,_){return A(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ct&&I.minFilter!==_t?Math.log2(Math.max(_.width,_.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?_.mipmaps.length:1}function w(I){const _=I.target;_.removeEventListener("dispose",w),C(_),_.isVideoTexture&&l.delete(_)}function T(I){const _=I.target;_.removeEventListener("dispose",T),D(_)}function C(I){const _=n.get(I);if(_.__webglInit===void 0)return;const U=I.source,X=u.get(U);if(X){const V=X[_.__cacheKey];V.usedTimes--,V.usedTimes===0&&b(I),Object.keys(X).length===0&&u.delete(U)}n.remove(I)}function b(I){const _=n.get(I);s.deleteTexture(_.__webglTexture);const U=I.source,X=u.get(U);delete X[_.__cacheKey],a.memory.textures--}function D(I){const _=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let V=0;V<_.__webglFramebuffer[X].length;V++)s.deleteFramebuffer(_.__webglFramebuffer[X][V]);else s.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)s.deleteFramebuffer(_.__webglFramebuffer[X]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=I.textures;for(let X=0,V=U.length;X<V;X++){const j=n.get(U[X]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(U[X])}n.remove(I)}let y=0;function v(){y=0}function L(){const I=y;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),y+=1,I}function F(I){const _=[];return _.push(I.wrapS),_.push(I.wrapT),_.push(I.wrapR||0),_.push(I.magFilter),_.push(I.minFilter),_.push(I.anisotropy),_.push(I.internalFormat),_.push(I.format),_.push(I.type),_.push(I.generateMipmaps),_.push(I.premultiplyAlpha),_.push(I.flipY),_.push(I.unpackAlignment),_.push(I.colorSpace),_.join()}function E(I,_){const U=n.get(I);if(I.isVideoTexture&&at(I),I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){const X=I.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(U,I,_);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+_)}function K(I,_){const U=n.get(I);if(I.version>0&&U.__version!==I.version){Oe(U,I,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+_)}function Y(I,_){const U=n.get(I);if(I.version>0&&U.__version!==I.version){Oe(U,I,_);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+_)}function W(I,_){const U=n.get(I);if(I.version>0&&U.__version!==I.version){Ve(U,I,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+_)}const se={[kr]:s.REPEAT,[hn]:s.CLAMP_TO_EDGE,[Xr]:s.MIRRORED_REPEAT},q={[Ct]:s.NEAREST,[sl]:s.NEAREST_MIPMAP_NEAREST,[Ji]:s.NEAREST_MIPMAP_LINEAR,[_t]:s.LINEAR,[sr]:s.LINEAR_MIPMAP_NEAREST,[xn]:s.LINEAR_MIPMAP_LINEAR},J={[vl]:s.NEVER,[wl]:s.ALWAYS,[_l]:s.LESS,[Gc]:s.LEQUAL,[Ml]:s.EQUAL,[Pl]:s.GEQUAL,[yl]:s.GREATER,[xl]:s.NOTEQUAL};function Q(I,_){if(_.type===Tt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===_t||_.magFilter===sr||_.magFilter===Ji||_.magFilter===xn||_.minFilter===_t||_.minFilter===sr||_.minFilter===Ji||_.minFilter===xn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,se[_.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,se[_.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,se[_.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,q[_.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,q[_.minFilter]),_.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,J[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ct||_.minFilter!==Ji&&_.minFilter!==xn||_.type===Tt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function de(I,_){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,_.addEventListener("dispose",w));const X=_.source;let V=u.get(X);V===void 0&&(V={},u.set(X,V));const j=F(_);if(j!==I.__cacheKey){V[j]===void 0&&(V[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[j].usedTimes++;const _e=V[I.__cacheKey];_e!==void 0&&(V[I.__cacheKey].usedTimes--,_e.usedTimes===0&&b(_)),I.__cacheKey=j,I.__webglTexture=V[j].texture}return U}function Oe(I,_,U){let X=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=s.TEXTURE_3D);const V=de(I,_),j=_.source;t.bindTexture(X,I.__webglTexture,s.TEXTURE0+U);const _e=n.get(j);if(j.version!==_e.__version||V===!0){t.activeTexture(s.TEXTURE0+U);const Z=ke.getPrimaries(ke.workingColorSpace),ge=_.colorSpace===yn?null:ke.getPrimaries(_.colorSpace),Me=_.colorSpace===yn||Z===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=M(_.image,!1,i.maxTextureSize);ne=we(_,ne);const oe=r.convert(_.format,_.colorSpace),Ce=r.convert(_.type);let he=x(_.internalFormat,oe,Ce,_.colorSpace,_.isVideoTexture);Q(X,_);let fe;const Re=_.mipmaps,He=_.isVideoTexture!==!0&&he!==zc,Ue=_e.__version===void 0||V===!0,Ne=j.dataReady,$e=g(_,ne);if(_.isDepthTexture)he=s.DEPTH_COMPONENT16,_.type===Tt?he=s.DEPTH_COMPONENT32F:_.type===vi?he=s.DEPTH_COMPONENT24:_.type===qi&&(he=s.DEPTH24_STENCIL8),Ue&&(He?t.texStorage2D(s.TEXTURE_2D,1,he,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,he,ne.width,ne.height,0,oe,Ce,null));else if(_.isDataTexture)if(Re.length>0){He&&Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,Re[0].width,Re[0].height);for(let Ae=0,S=Re.length;Ae<S;Ae++)fe=Re[Ae],He?Ne&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,fe.width,fe.height,oe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,Ae,he,fe.width,fe.height,0,oe,Ce,fe.data);_.generateMipmaps=!1}else He?(Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,ne.width,ne.height),Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,oe,Ce,ne.data)):t.texImage2D(s.TEXTURE_2D,0,he,ne.width,ne.height,0,oe,Ce,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){He&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,he,Re[0].width,Re[0].height,ne.depth);for(let Ae=0,S=Re.length;Ae<S;Ae++)fe=Re[Ae],_.format!==Nt?oe!==null?He?Ne&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,fe.width,fe.height,ne.depth,oe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Ae,he,fe.width,fe.height,ne.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Ae,0,0,0,fe.width,fe.height,ne.depth,oe,Ce,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Ae,he,fe.width,fe.height,ne.depth,0,oe,Ce,fe.data)}else{He&&Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,Re[0].width,Re[0].height);for(let Ae=0,S=Re.length;Ae<S;Ae++)fe=Re[Ae],_.format!==Nt?oe!==null?He?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,Ae,0,0,fe.width,fe.height,oe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Ae,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ne&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,fe.width,fe.height,oe,Ce,fe.data):t.texImage2D(s.TEXTURE_2D,Ae,he,fe.width,fe.height,0,oe,Ce,fe.data)}else if(_.isDataArrayTexture)He?(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,he,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ce,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,oe,Ce,ne.data);else if(_.isData3DTexture)He?(Ue&&t.texStorage3D(s.TEXTURE_3D,$e,he,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Ce,ne.data)):t.texImage3D(s.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,oe,Ce,ne.data);else if(_.isFramebufferTexture){if(Ue)if(He)t.texStorage2D(s.TEXTURE_2D,$e,he,ne.width,ne.height);else{let Ae=ne.width,S=ne.height;for(let te=0;te<$e;te++)t.texImage2D(s.TEXTURE_2D,te,he,Ae,S,0,oe,Ce,null),Ae>>=1,S>>=1}}else if(Re.length>0){if(He&&Ue){const Ae=Xe(Re[0]);t.texStorage2D(s.TEXTURE_2D,$e,he,Ae.width,Ae.height)}for(let Ae=0,S=Re.length;Ae<S;Ae++)fe=Re[Ae],He?Ne&&t.texSubImage2D(s.TEXTURE_2D,Ae,0,0,oe,Ce,fe):t.texImage2D(s.TEXTURE_2D,Ae,he,oe,Ce,fe);_.generateMipmaps=!1}else if(He){if(Ue){const Ae=Xe(ne);t.texStorage2D(s.TEXTURE_2D,$e,he,Ae.width,Ae.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Ce,ne)}else t.texImage2D(s.TEXTURE_2D,0,he,oe,Ce,ne);A(_)&&f(X),_e.__version=j.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function Ve(I,_,U){if(_.image.length!==6)return;const X=de(I,_),V=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+U);const j=n.get(V);if(V.version!==j.__version||X===!0){t.activeTexture(s.TEXTURE0+U);const _e=ke.getPrimaries(ke.workingColorSpace),Z=_.colorSpace===yn?null:ke.getPrimaries(_.colorSpace),ge=_.colorSpace===yn||_e===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let S=0;S<6;S++)!Me&&!ne?oe[S]=M(_.image[S],!0,i.maxCubemapSize):oe[S]=ne?_.image[S].image:_.image[S],oe[S]=we(_,oe[S]);const Ce=oe[0],he=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),Re=x(_.internalFormat,he,fe,_.colorSpace),He=_.isVideoTexture!==!0,Ue=j.__version===void 0||X===!0,Ne=V.dataReady;let $e=g(_,Ce);Q(s.TEXTURE_CUBE_MAP,_);let Ae;if(Me){He&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,Re,Ce.width,Ce.height);for(let S=0;S<6;S++){Ae=oe[S].mipmaps;for(let te=0;te<Ae.length;te++){const ee=Ae[te];_.format!==Nt?he!==null?He?Ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,ee.width,ee.height,he,ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,Re,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,ee.width,ee.height,he,fe,ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,Re,ee.width,ee.height,0,he,fe,ee.data)}}}else{if(Ae=_.mipmaps,He&&Ue){Ae.length>0&&$e++;const S=Xe(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,Re,S.width,S.height)}for(let S=0;S<6;S++)if(ne){He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,oe[S].width,oe[S].height,he,fe,oe[S].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Re,oe[S].width,oe[S].height,0,he,fe,oe[S].data);for(let te=0;te<Ae.length;te++){const pe=Ae[te].image[S].image;He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,pe.width,pe.height,he,fe,pe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,Re,pe.width,pe.height,0,he,fe,pe.data)}}else{He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,he,fe,oe[S]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Re,he,fe,oe[S]);for(let te=0;te<Ae.length;te++){const ee=Ae[te];He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,he,fe,ee.image[S]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,Re,he,fe,ee.image[S])}}}A(_)&&f(s.TEXTURE_CUBE_MAP),j.__version=V.version,_.onUpdate&&_.onUpdate(_)}I.__version=_.version}function k(I,_,U,X,V,j){const _e=r.convert(U.format,U.colorSpace),Z=r.convert(U.type),ge=x(U.internalFormat,_e,Z,U.colorSpace);if(!n.get(_).__hasExternalTextures){const ne=Math.max(1,_.width>>j),oe=Math.max(1,_.height>>j);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?t.texImage3D(V,j,ge,ne,oe,_.depth,0,_e,Z,null):t.texImage2D(V,j,ge,ne,oe,0,_e,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,V,n.get(U).__webglTexture,0,Ge(_)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,V,n.get(U).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(I,_,U){if(s.bindRenderbuffer(s.RENDERBUFFER,I),_.depthBuffer&&!_.stencilBuffer){let X=s.DEPTH_COMPONENT24;if(U||ye(_)){const V=_.depthTexture;V&&V.isDepthTexture&&(V.type===Tt?X=s.DEPTH_COMPONENT32F:V.type===vi&&(X=s.DEPTH_COMPONENT24));const j=Ge(_);ye(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,X,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,X,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,X,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(_.depthBuffer&&_.stencilBuffer){const X=Ge(_);U&&ye(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const X=_.textures;for(let V=0;V<X.length;V++){const j=X[V],_e=r.convert(j.format,j.colorSpace),Z=r.convert(j.type),ge=x(j.internalFormat,_e,Z,j.colorSpace),Me=Ge(_);U&&ye(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,ge,_.width,_.height):ye(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,ge,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ge,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(I,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),E(_.depthTexture,0);const X=n.get(_.depthTexture).__webglTexture,V=Ge(_);if(_.depthTexture.format===Ai)ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0);else if(_.depthTexture.format===Ui)ye(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ae(I){const _=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ce(_.__webglFramebuffer,I)}else if(U){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]=s.createRenderbuffer(),$(_.__webglDepthbuffer[X],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),$(_.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(I,_,U){const X=n.get(I);_!==void 0&&k(X.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&ae(I)}function ze(I){const _=I.texture,U=n.get(I),X=n.get(_);I.addEventListener("dispose",T);const V=I.textures,j=I.isWebGLCubeRenderTarget===!0,_e=V.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=_.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let ge=0;ge<_.mipmaps.length;ge++)U.__webglFramebuffer[Z][ge]=s.createFramebuffer()}else U.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<_.mipmaps.length;Z++)U.__webglFramebuffer[Z]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(_e)for(let Z=0,ge=V.length;Z<ge;Z++){const Me=n.get(V[Z]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&ye(I)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){const ge=V[Z];U.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const Me=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),oe=x(ge.internalFormat,Me,ne,ge.colorSpace,I.isXRRenderTarget===!0),Ce=Ge(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,oe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),$(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Q(s.TEXTURE_CUBE_MAP,_);for(let Z=0;Z<6;Z++)if(_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)k(U.__webglFramebuffer[Z][ge],I,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge);else k(U.__webglFramebuffer[Z],I,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);A(_)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Z=0,ge=V.length;Z<ge;Z++){const Me=V[Z],ne=n.get(Me);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Q(s.TEXTURE_2D,Me),k(U.__webglFramebuffer,I,Me,s.COLOR_ATTACHMENT0+Z,s.TEXTURE_2D,0),A(Me)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Q(Z,_),_.mipmaps&&_.mipmaps.length>0)for(let ge=0;ge<_.mipmaps.length;ge++)k(U.__webglFramebuffer[ge],I,_,s.COLOR_ATTACHMENT0,Z,ge);else k(U.__webglFramebuffer,I,_,s.COLOR_ATTACHMENT0,Z,0);A(_)&&f(Z),t.unbindTexture()}I.depthBuffer&&ae(I)}function Fe(I){const _=I.textures;for(let U=0,X=_.length;U<X;U++){const V=_[U];if(A(V)){const j=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(V).__webglTexture;t.bindTexture(j,_e),f(j),t.unbindTexture()}}}function G(I){if(I.samples>0&&ye(I)===!1){const _=I.textures,U=I.width,X=I.height;let V=s.COLOR_BUFFER_BIT;const j=[],_e=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=n.get(I),ge=_.length>1;if(ge)for(let Me=0;Me<_.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let Me=0;Me<_.length;Me++){j.push(s.COLOR_ATTACHMENT0+Me),I.depthBuffer&&j.push(_e);const ne=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(ne===!1&&(I.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&Z.__isTransmissionRenderTarget!==!0&&(V|=s.STENCIL_BUFFER_BIT)),ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me]),ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),ge){const oe=n.get(_[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,U,X,0,0,U,X,V,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<_.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me]);const ne=n.get(_[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function Ge(I){return Math.min(i.maxSamples,I.samples)}function ye(I){const _=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function at(I){const _=a.render.frame;l.get(I)!==_&&(l.set(I,_),I.update())}function we(I,_){const U=I.colorSpace,X=I.format,V=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==Vt&&U!==yn&&(ke.getTransfer(U)===Je?(X!==Nt||V!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),_}function Xe(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=v,this.setTexture2D=E,this.setTexture2DArray=K,this.setTexture3D=Y,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=k,this.useMultisampledRTT=ye}function Up(s,e){function t(n,i=yn){let r;const a=ke.getTransfer(i);if(n===Cn)return s.UNSIGNED_BYTE;if(n===Ic)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Sc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===ol)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===rl)return s.BYTE;if(n===al)return s.SHORT;if(n===Cc)return s.UNSIGNED_SHORT;if(n===bc)return s.INT;if(n===vi)return s.UNSIGNED_INT;if(n===Tt)return s.FLOAT;if(n===ln)return s.HALF_FLOAT;if(n===cl)return s.ALPHA;if(n===hl)return s.RGB;if(n===Nt)return s.RGBA;if(n===ll)return s.LUMINANCE;if(n===fl)return s.LUMINANCE_ALPHA;if(n===Ai)return s.DEPTH_COMPONENT;if(n===Ui)return s.DEPTH_STENCIL;if(n===Bc)return s.RED;if(n===Ec)return s.RED_INTEGER;if(n===ul)return s.RG;if(n===Tc)return s.RG_INTEGER;if(n===Dc)return s.RGBA_INTEGER;if(n===rr||n===ar||n===or||n===cr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ea||n===Ta||n===Da||n===za)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===za)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===zc)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===La||n===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===La)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ga)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Oa||n===Ra||n===Fa||n===Ha||n===Na||n===Ua||n===Ka||n===qa||n===Ya||n===ka||n===Xa||n===Wa||n===Va||n===ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Oa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ra)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Na)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ua)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ka)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ja)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===Za||n===Qa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dl||n===Ja||n===$a||n===eo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Kp extends wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qp={type:"move"};class Gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const M of e.hand.values()){const A=t.getJointPose(M,n),f=this._getHandJoint(h,M);A!==null&&(f.matrix.fromArray(A.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=A.radius),f.visible=A!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=l.position.distanceTo(d.position),p=.02,m=.005;h.inputState.pinching&&u>p+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&u<=p-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qp)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Yp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new dt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new Sn({vertexShader:Yp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new Xi(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Wp extends qn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,u=null,p=null,m=null;const M=new Xp,A=t.getContextAttributes();let f=null,x=null;const g=[],w=[],T=new le;let C=null;const b=new wt;b.layers.enable(1),b.viewport=new We;const D=new wt;D.layers.enable(2),D.viewport=new We;const y=[b,D],v=new Kp;v.layers.enable(1),v.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=g[k];return $===void 0&&($=new Gr,g[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=g[k];return $===void 0&&($=new Gr,g[k]=$),$.getGripSpace()},this.getHand=function(k){let $=g[k];return $===void 0&&($=new Gr,g[k]=$),$.getHandSpace()};function E(k){const $=w.indexOf(k.inputSource);if($===-1)return;const ce=g[$];ce!==void 0&&(ce.update(k.inputSource,k.frame,h||a),ce.dispatchEvent({type:k.type,data:k.inputSource}))}function K(){i.removeEventListener("select",E),i.removeEventListener("selectstart",E),i.removeEventListener("selectend",E),i.removeEventListener("squeeze",E),i.removeEventListener("squeezestart",E),i.removeEventListener("squeezeend",E),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",Y);for(let k=0;k<g.length;k++){const $=w[k];$!==null&&(w[k]=null,g[k].disconnect($))}L=null,F=null,M.reset(),e.setRenderTarget(f),p=null,u=null,d=null,i=null,x=null,Ve.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(k){h=k},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return d},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",E),i.addEventListener("selectstart",E),i.addEventListener("selectend",E),i.addEventListener("squeeze",E),i.addEventListener("squeezestart",E),i.addEventListener("squeezeend",E),i.addEventListener("end",K),i.addEventListener("inputsourceschange",Y),A.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(T),i.renderState.layers===void 0){const $={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Kn(p.framebufferWidth,p.framebufferHeight,{format:Nt,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let $=null,ce=null,ae=null;A.depth&&(ae=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=A.stencil?Ui:Ai,ce=A.stencil?qi:vi);const Be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};d=new XRWebGLBinding(i,t),u=d.createProjectionLayer(Be),i.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new Kn(u.textureWidth,u.textureHeight,{format:Nt,type:Cn,depthTexture:new Zc(u.textureWidth,u.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0});const ze=e.properties.get(x);ze.__ignoreDepthValues=u.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),Ve.setContext(i),Ve.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function Y(k){for(let $=0;$<k.removed.length;$++){const ce=k.removed[$],ae=w.indexOf(ce);ae>=0&&(w[ae]=null,g[ae].disconnect(ce))}for(let $=0;$<k.added.length;$++){const ce=k.added[$];let ae=w.indexOf(ce);if(ae===-1){for(let ze=0;ze<g.length;ze++)if(ze>=w.length){w.push(ce),ae=ze;break}else if(w[ze]===null){w[ze]=ce,ae=ze;break}if(ae===-1)break}const Be=g[ae];Be&&Be.connect(ce)}}const W=new B,se=new B;function q(k,$,ce){W.setFromMatrixPosition($.matrixWorld),se.setFromMatrixPosition(ce.matrixWorld);const ae=W.distanceTo(se),Be=$.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Fe=Be[14]/(Be[10]-1),G=Be[14]/(Be[10]+1),Ge=(Be[9]+1)/Be[5],ye=(Be[9]-1)/Be[5],at=(Be[8]-1)/Be[0],we=(ze[8]+1)/ze[0],Xe=Fe*at,I=Fe*we,_=ae/(-at+we),U=_*-at;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(U),k.translateZ(_),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const X=Fe+_,V=G+_,j=Xe-U,_e=I+(ae-U),Z=Ge*G/V*X,ge=ye*G/V*X;k.projectionMatrix.makePerspective(j,_e,Z,ge,X,V),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function J(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;M.texture!==null&&(k.near=M.depthNear,k.far=M.depthFar),v.near=D.near=b.near=k.near,v.far=D.far=b.far=k.far,(L!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,F=v.far,b.near=L,b.far=F,D.near=L,D.far=F,b.updateProjectionMatrix(),D.updateProjectionMatrix(),k.updateProjectionMatrix());const $=k.parent,ce=v.cameras;J(v,$);for(let ae=0;ae<ce.length;ae++)J(ce[ae],$);ce.length===2?q(v,b,D):v.projectionMatrix.copy(b.projectionMatrix),Q(k,v,$)};function Q(k,$,ce){ce===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ce.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=_i*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(k){c=k,u!==null&&(u.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null};let de=null;function Oe(k,$){if(l=$.getViewerPose(h||a),m=$,l!==null){const ce=l.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let ae=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let ze=0;ze<ce.length;ze++){const Fe=ce[ze];let G=null;if(p!==null)G=p.getViewport(Fe);else{const ye=d.getViewSubImage(u,Fe);G=ye.viewport,ze===0&&(e.setRenderTargetTextures(x,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(x))}let Ge=y[ze];Ge===void 0&&(Ge=new wt,Ge.layers.enable(ze),Ge.viewport=new We,y[ze]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(G.x,G.y,G.width,G.height),ze===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ge)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ze=d.getDepthInformation(ce[0]);ze&&ze.isValid&&ze.texture&&M.init(e,ze,i.renderState)}}for(let ce=0;ce<g.length;ce++){const ae=w[ce],Be=g[ce];ae!==null&&Be!==void 0&&Be.update(ae,$,h||a)}M.render(e,v),de&&de(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),m=null}const Ve=new Vc;Ve.setAnimationLoop(Oe),this.setAnimationLoop=function(k){de=k},this.dispose=function(){}}}const Rn=new Xt,Vp=new Le;function jp(s,e){function t(A,f){A.matrixAutoUpdate===!0&&A.updateMatrix(),f.value.copy(A.matrix)}function n(A,f){f.color.getRGB(A.fogColor.value,qc(s)),f.isFog?(A.fogNear.value=f.near,A.fogFar.value=f.far):f.isFogExp2&&(A.fogDensity.value=f.density)}function i(A,f,x,g,w){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(A,f):f.isMeshToonMaterial?(r(A,f),d(A,f)):f.isMeshPhongMaterial?(r(A,f),l(A,f)):f.isMeshStandardMaterial?(r(A,f),u(A,f),f.isMeshPhysicalMaterial&&p(A,f,w)):f.isMeshMatcapMaterial?(r(A,f),m(A,f)):f.isMeshDepthMaterial?r(A,f):f.isMeshDistanceMaterial?(r(A,f),M(A,f)):f.isMeshNormalMaterial?r(A,f):f.isLineBasicMaterial?(a(A,f),f.isLineDashedMaterial&&o(A,f)):f.isPointsMaterial?c(A,f,x,g):f.isSpriteMaterial?h(A,f):f.isShadowMaterial?(A.color.value.copy(f.color),A.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(A,f){A.opacity.value=f.opacity,f.color&&A.diffuse.value.copy(f.color),f.emissive&&A.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(A.map.value=f.map,t(f.map,A.mapTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,t(f.alphaMap,A.alphaMapTransform)),f.bumpMap&&(A.bumpMap.value=f.bumpMap,t(f.bumpMap,A.bumpMapTransform),A.bumpScale.value=f.bumpScale,f.side===xt&&(A.bumpScale.value*=-1)),f.normalMap&&(A.normalMap.value=f.normalMap,t(f.normalMap,A.normalMapTransform),A.normalScale.value.copy(f.normalScale),f.side===xt&&A.normalScale.value.negate()),f.displacementMap&&(A.displacementMap.value=f.displacementMap,t(f.displacementMap,A.displacementMapTransform),A.displacementScale.value=f.displacementScale,A.displacementBias.value=f.displacementBias),f.emissiveMap&&(A.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,A.emissiveMapTransform)),f.specularMap&&(A.specularMap.value=f.specularMap,t(f.specularMap,A.specularMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest);const x=e.get(f),g=x.envMap,w=x.envMapRotation;if(g&&(A.envMap.value=g,Rn.copy(w),Rn.x*=-1,Rn.y*=-1,Rn.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(Rn.y*=-1,Rn.z*=-1),A.envMapRotation.value.setFromMatrix4(Vp.makeRotationFromEuler(Rn)),A.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=f.reflectivity,A.ior.value=f.ior,A.refractionRatio.value=f.refractionRatio),f.lightMap){A.lightMap.value=f.lightMap;const T=s._useLegacyLights===!0?Math.PI:1;A.lightMapIntensity.value=f.lightMapIntensity*T,t(f.lightMap,A.lightMapTransform)}f.aoMap&&(A.aoMap.value=f.aoMap,A.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,A.aoMapTransform))}function a(A,f){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,f.map&&(A.map.value=f.map,t(f.map,A.mapTransform))}function o(A,f){A.dashSize.value=f.dashSize,A.totalSize.value=f.dashSize+f.gapSize,A.scale.value=f.scale}function c(A,f,x,g){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,A.size.value=f.size*x,A.scale.value=g*.5,f.map&&(A.map.value=f.map,t(f.map,A.uvTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,t(f.alphaMap,A.alphaMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest)}function h(A,f){A.diffuse.value.copy(f.color),A.opacity.value=f.opacity,A.rotation.value=f.rotation,f.map&&(A.map.value=f.map,t(f.map,A.mapTransform)),f.alphaMap&&(A.alphaMap.value=f.alphaMap,t(f.alphaMap,A.alphaMapTransform)),f.alphaTest>0&&(A.alphaTest.value=f.alphaTest)}function l(A,f){A.specular.value.copy(f.specular),A.shininess.value=Math.max(f.shininess,1e-4)}function d(A,f){f.gradientMap&&(A.gradientMap.value=f.gradientMap)}function u(A,f){A.metalness.value=f.metalness,f.metalnessMap&&(A.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,A.metalnessMapTransform)),A.roughness.value=f.roughness,f.roughnessMap&&(A.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,A.roughnessMapTransform)),f.envMap&&(A.envMapIntensity.value=f.envMapIntensity)}function p(A,f,x){A.ior.value=f.ior,f.sheen>0&&(A.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),A.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(A.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,A.sheenColorMapTransform)),f.sheenRoughnessMap&&(A.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,A.sheenRoughnessMapTransform))),f.clearcoat>0&&(A.clearcoat.value=f.clearcoat,A.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(A.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,A.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(A.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===xt&&A.clearcoatNormalScale.value.negate())),f.iridescence>0&&(A.iridescence.value=f.iridescence,A.iridescenceIOR.value=f.iridescenceIOR,A.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(A.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,A.iridescenceMapTransform)),f.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),f.transmission>0&&(A.transmission.value=f.transmission,A.transmissionSamplerMap.value=x.texture,A.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(A.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,A.transmissionMapTransform)),A.thickness.value=f.thickness,f.thicknessMap&&(A.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=f.attenuationDistance,A.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(A.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(A.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=f.specularIntensity,A.specularColor.value.copy(f.specularColor),f.specularColorMap&&(A.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,A.specularColorMapTransform)),f.specularIntensityMap&&(A.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,f){f.matcap&&(A.matcap.value=f.matcap)}function M(A,f){const x=e.get(f).light;A.referencePosition.value.setFromMatrixPosition(x.matrixWorld),A.nearDistance.value=x.shadow.camera.near,A.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zp(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,g){const w=g.program;n.uniformBlockBinding(x,w)}function h(x,g){let w=i[x.id];w===void 0&&(m(x),w=l(x),i[x.id]=w,x.addEventListener("dispose",A));const T=g.program;n.updateUBOMapping(x,T);const C=e.render.frame;r[x.id]!==C&&(u(x),r[x.id]=C)}function l(x){const g=d();x.__bindingPointIndex=g;const w=s.createBuffer(),T=x.__size,C=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,T,C),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,g,w),w}function d(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(x){const g=i[x.id],w=x.uniforms,T=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,g);for(let C=0,b=w.length;C<b;C++){const D=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,v=D.length;y<v;y++){const L=D[y];if(p(L,C,y,T)===!0){const F=L.__offset,E=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let Y=0;Y<E.length;Y++){const W=E[Y],se=M(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+K,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(x,g,w,T){const C=x.value,b=g+"_"+w;if(T[b]===void 0)return typeof C=="number"||typeof C=="boolean"?T[b]=C:T[b]=C.clone(),!0;{const D=T[b];if(typeof C=="number"||typeof C=="boolean"){if(D!==C)return T[b]=C,!0}else if(D.equals(C)===!1)return D.copy(C),!0}return!1}function m(x){const g=x.uniforms;let w=0;const T=16;for(let b=0,D=g.length;b<D;b++){const y=Array.isArray(g[b])?g[b]:[g[b]];for(let v=0,L=y.length;v<L;v++){const F=y[v],E=Array.isArray(F.value)?F.value:[F.value];for(let K=0,Y=E.length;K<Y;K++){const W=E[K],se=M(W),q=w%T;q!==0&&T-q<se.boundary&&(w+=T-q),F.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=w,w+=se.storage}}}const C=w%T;return C>0&&(w+=T-C),x.__size=w,x.__cache={},this}function M(x){const g={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(g.boundary=4,g.storage=4):x.isVector2?(g.boundary=8,g.storage=8):x.isVector3||x.isColor?(g.boundary=16,g.storage=12):x.isVector4?(g.boundary=16,g.storage=16):x.isMatrix3?(g.boundary=48,g.storage=48):x.isMatrix4?(g.boundary=64,g.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),g}function A(x){const g=x.target;g.removeEventListener("dispose",A);const w=a.indexOf(g.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(i[g.id]),delete i[g.id],delete r[g.id]}function f(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:h,dispose:f}}class Qp{constructor(e={}){const{canvas:t=Ul(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const p=new Uint32Array(4),m=new Int32Array(4);let M=null,A=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rt,this._useLegacyLights=!1,this.toneMapping=un,this.toneMappingExposure=1;const g=this;let w=!1,T=0,C=0,b=null,D=-1,y=null;const v=new We,L=new We;let F=null;const E=new Pe(0);let K=0,Y=t.width,W=t.height,se=1,q=null,J=null;const Q=new We(0,0,Y,W),de=new We(0,0,Y,W);let Oe=!1;const Ve=new aa;let k=!1,$=!1;const ce=new Le,ae=new le,Be=new B,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?se:1}let G=n;function Ge(P,z){const H=t.getContext(P,z);return H!==null?H:null}try{const P={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",pe,!1),G===null){const z="webgl2";if(G=Ge(z,P),G===null)throw Ge(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ye,at,we,Xe,I,_,U,X,V,j,_e,Z,ge,Me,ne,oe,Ce,he,fe,Re,He,Ue,Ne,$e;function Ae(){ye=new rA(G),ye.init(),at=new $d(G,ye,e),Ue=new Up(G,ye),we=new Hp(G),Xe=new cA(G),I=new Cp,_=new Np(G,ye,we,I,at,Ue,Xe),U=new tA(g),X=new sA(g),V=new Af(G),Ne=new Qd(G,V),j=new aA(G,V,Xe,Ne),_e=new lA(G,j,V,Xe),fe=new hA(G,at,_),oe=new eA(I),Z=new wp(g,U,X,ye,at,Ne,oe),ge=new jp(g,I),Me=new Ip,ne=new zp(ye),he=new Zd(g,U,X,we,_e,u,c),Ce=new Fp(g,_e,at),$e=new Zp(G,Xe,at,we),Re=new Jd(G,ye,Xe),He=new oA(G,ye,Xe),Xe.programs=Z.programs,g.capabilities=at,g.extensions=ye,g.properties=I,g.renderLists=Me,g.shadowMap=Ce,g.state=we,g.info=Xe}Ae();const S=new Wp(g,G);this.xr=S,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const P=ye.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ye.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(P){P!==void 0&&(se=P,this.setSize(Y,W,!1))},this.getSize=function(P){return P.set(Y,W)},this.setSize=function(P,z,H=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=P,W=z,t.width=Math.floor(P*se),t.height=Math.floor(z*se),H===!0&&(t.style.width=P+"px",t.style.height=z+"px"),this.setViewport(0,0,P,z)},this.getDrawingBufferSize=function(P){return P.set(Y*se,W*se).floor()},this.setDrawingBufferSize=function(P,z,H){Y=P,W=z,se=H,t.width=Math.floor(P*H),t.height=Math.floor(z*H),this.setViewport(0,0,P,z)},this.getCurrentViewport=function(P){return P.copy(v)},this.getViewport=function(P){return P.copy(Q)},this.setViewport=function(P,z,H,N){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,z,H,N),we.viewport(v.copy(Q).multiplyScalar(se).round())},this.getScissor=function(P){return P.copy(de)},this.setScissor=function(P,z,H,N){P.isVector4?de.set(P.x,P.y,P.z,P.w):de.set(P,z,H,N),we.scissor(L.copy(de).multiplyScalar(se).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(P){we.setScissorTest(Oe=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){J=P},this.getClearColor=function(P){return P.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(P=!0,z=!0,H=!0){let N=0;if(P){let R=!1;if(b!==null){const re=b.texture.format;R=re===Dc||re===Tc||re===Ec}if(R){const re=b.texture.type,ue=re===Cn||re===vi||re===Cc||re===qi||re===Ic||re===Sc,ve=he.getClearColor(),xe=he.getClearAlpha(),Ie=ve.r,be=ve.g,Se=ve.b;ue?(p[0]=Ie,p[1]=be,p[2]=Se,p[3]=xe,G.clearBufferuiv(G.COLOR,0,p)):(m[0]=Ie,m[1]=be,m[2]=Se,m[3]=xe,G.clearBufferiv(G.COLOR,0,m))}else N|=G.COLOR_BUFFER_BIT}z&&(N|=G.DEPTH_BUFFER_BIT),H&&(N|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Me.dispose(),ne.dispose(),I.dispose(),U.dispose(),X.dispose(),_e.dispose(),Ne.dispose(),$e.dispose(),Z.dispose(),S.dispose(),S.removeEventListener("sessionstart",Kt),S.removeEventListener("sessionend",qt),En.stop()};function te(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const P=Xe.autoReset,z=Ce.enabled,H=Ce.autoUpdate,N=Ce.needsUpdate,R=Ce.type;Ae(),Xe.autoReset=P,Ce.enabled=z,Ce.autoUpdate=H,Ce.needsUpdate=N,Ce.type=R}function pe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function me(P){const z=P.target;z.removeEventListener("dispose",me),je(z)}function je(P){et(P),I.remove(P)}function et(P){const z=I.get(P).programs;z!==void 0&&(z.forEach(function(H){Z.releaseProgram(H)}),P.isShaderMaterial&&Z.releaseShaderCache(P))}this.renderBufferDirect=function(P,z,H,N,R,re){z===null&&(z=ze);const ue=R.isMesh&&R.matrixWorld.determinant()<0,ve=mh(P,z,H,N,R);we.setMaterial(N,ue);let xe=H.index,Ie=1;if(N.wireframe===!0){if(xe=j.getWireframeAttribute(H),xe===void 0)return;Ie=2}const be=H.drawRange,Se=H.attributes.position;let st=be.start*Ie,It=(be.start+be.count)*Ie;re!==null&&(st=Math.max(st,re.start*Ie),It=Math.min(It,(re.start+re.count)*Ie)),xe!==null?(st=Math.max(st,0),It=Math.min(It,xe.count)):Se!=null&&(st=Math.max(st,0),It=Math.min(It,Se.count));const lt=It-st;if(lt<0||lt===1/0)return;Ne.setup(R,N,ve,H,xe);let Qt,it=Re;if(xe!==null&&(Qt=V.get(xe),it=He,it.setIndex(Qt)),R.isMesh)N.wireframe===!0?(we.setLineWidth(N.wireframeLinewidth*Fe()),it.setMode(G.LINES)):it.setMode(G.TRIANGLES);else if(R.isLine){let Ee=N.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*Fe()),R.isLineSegments?it.setMode(G.LINES):R.isLineLoop?it.setMode(G.LINE_LOOP):it.setMode(G.LINE_STRIP)}else R.isPoints?it.setMode(G.POINTS):R.isSprite&&it.setMode(G.TRIANGLES);if(R.isBatchedMesh)it.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else if(R.isInstancedMesh)it.renderInstances(st,lt,R.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,er=Math.min(H.instanceCount,Ee);it.renderInstances(st,lt,er)}else it.render(st,lt)};function nt(P,z,H){P.transparent===!0&&P.side===on&&P.forceSinglePass===!1?(P.side=xt,P.needsUpdate=!0,Qi(P,z,H),P.side=kt,P.needsUpdate=!0,Qi(P,z,H),P.side=on):Qi(P,z,H)}this.compile=function(P,z,H=null){H===null&&(H=P),A=ne.get(H),A.init(),x.push(A),H.traverseVisible(function(R){R.isLight&&R.layers.test(z.layers)&&(A.pushLight(R),R.castShadow&&A.pushShadow(R))}),P!==H&&P.traverseVisible(function(R){R.isLight&&R.layers.test(z.layers)&&(A.pushLight(R),R.castShadow&&A.pushShadow(R))}),A.setupLights(g._useLegacyLights);const N=new Set;return P.traverse(function(R){const re=R.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const ve=re[ue];nt(ve,H,R),N.add(ve)}else nt(re,H,R),N.add(re)}),x.pop(),A=null,N},this.compileAsync=function(P,z,H=null){const N=this.compile(P,z,H);return new Promise(R=>{function re(){if(N.forEach(function(ue){I.get(ue).currentProgram.isReady()&&N.delete(ue)}),N.size===0){R(P);return}setTimeout(re,10)}ye.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let pt=null;function Qe(P){pt&&pt(P)}function Kt(){En.stop()}function qt(){En.start()}const En=new Vc;En.setAnimationLoop(Qe),typeof self<"u"&&En.setContext(self),this.setAnimationLoop=function(P){pt=P,S.setAnimationLoop(P),P===null?En.stop():En.start()},S.addEventListener("sessionstart",Kt),S.addEventListener("sessionend",qt),this.render=function(P,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(z),z=S.getCamera()),P.isScene===!0&&P.onBeforeRender(g,P,z,b),A=ne.get(P,x.length),A.init(),x.push(A),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Ve.setFromProjectionMatrix(ce),$=this.localClippingEnabled,k=oe.init(this.clippingPlanes,$),M=Me.get(P,f.length),M.init(),f.push(M),va(P,z,0,g.sortObjects),M.finish(),g.sortObjects===!0&&M.sort(q,J),this.info.render.frame++,k===!0&&oe.beginShadows();const H=A.state.shadowsArray;if(Ce.render(H,P,z),k===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1)&&he.render(M,P),A.setupLights(g._useLegacyLights),z.isArrayCamera){const N=z.cameras;for(let R=0,re=N.length;R<re;R++){const ue=N[R];_a(M,P,ue,ue.viewport)}}else _a(M,P,z);b!==null&&(_.updateMultisampleRenderTarget(b),_.updateRenderTargetMipmap(b)),P.isScene===!0&&P.onAfterRender(g,P,z),Ne.resetDefaultState(),D=-1,y=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,f.pop(),f.length>0?M=f[f.length-1]:M=null};function va(P,z,H,N){if(P.visible===!1)return;if(P.layers.test(z.layers)){if(P.isGroup)H=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(z);else if(P.isLight)A.pushLight(P),P.castShadow&&A.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Ve.intersectsSprite(P)){N&&Be.setFromMatrixPosition(P.matrixWorld).applyMatrix4(ce);const ue=_e.update(P),ve=P.material;ve.visible&&M.push(P,ue,ve,H,Be.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Ve.intersectsObject(P))){const ue=_e.update(P),ve=P.material;if(N&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Be.copy(P.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Be.copy(ue.boundingSphere.center)),Be.applyMatrix4(P.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const xe=ue.groups;for(let Ie=0,be=xe.length;Ie<be;Ie++){const Se=xe[Ie],st=ve[Se.materialIndex];st&&st.visible&&M.push(P,ue,st,H,Be.z,Se)}}else ve.visible&&M.push(P,ue,ve,H,Be.z,null)}}const re=P.children;for(let ue=0,ve=re.length;ue<ve;ue++)va(re[ue],z,H,N)}function _a(P,z,H,N){const R=P.opaque,re=P.transmissive,ue=P.transparent;A.setupLightsView(H),k===!0&&oe.setGlobalState(g.clippingPlanes,H),re.length>0&&gh(R,re,z,H),N&&we.viewport(v.copy(N)),R.length>0&&Zi(R,z,H),re.length>0&&Zi(re,z,H),ue.length>0&&Zi(ue,z,H),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function gh(P,z,H,N){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget===null){A.state.transmissionRenderTarget=new Kn(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float")?ln:Cn,minFilter:xn,samples:4,stencilBuffer:r});const Ie=I.get(A.state.transmissionRenderTarget);Ie.__isTransmissionRenderTarget=!0}const re=A.state.transmissionRenderTarget;g.getDrawingBufferSize(ae),re.setSize(ae.x,ae.y);const ue=g.getRenderTarget();g.setRenderTarget(re),g.getClearColor(E),K=g.getClearAlpha(),K<1&&g.setClearColor(16777215,.5),g.clear();const ve=g.toneMapping;g.toneMapping=un,Zi(P,H,N),_.updateMultisampleRenderTarget(re),_.updateRenderTargetMipmap(re);let xe=!1;for(let Ie=0,be=z.length;Ie<be;Ie++){const Se=z[Ie],st=Se.object,It=Se.geometry,lt=Se.material,Qt=Se.group;if(lt.side===on&&st.layers.test(N.layers)){const it=lt.side;lt.side=xt,lt.needsUpdate=!0,Ma(st,H,N,It,lt,Qt),lt.side=it,lt.needsUpdate=!0,xe=!0}}xe===!0&&(_.updateMultisampleRenderTarget(re),_.updateRenderTargetMipmap(re)),g.setRenderTarget(ue),g.setClearColor(E,K),g.toneMapping=ve}function Zi(P,z,H){const N=z.isScene===!0?z.overrideMaterial:null;for(let R=0,re=P.length;R<re;R++){const ue=P[R],ve=ue.object,xe=ue.geometry,Ie=N===null?ue.material:N,be=ue.group;ve.layers.test(H.layers)&&Ma(ve,z,H,xe,Ie,be)}}function Ma(P,z,H,N,R,re){P.onBeforeRender(g,z,H,N,R,re),P.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),R.onBeforeRender(g,z,H,N,P,re),R.transparent===!0&&R.side===on&&R.forceSinglePass===!1?(R.side=xt,R.needsUpdate=!0,g.renderBufferDirect(H,z,N,R,P,re),R.side=kt,R.needsUpdate=!0,g.renderBufferDirect(H,z,N,R,P,re),R.side=on):g.renderBufferDirect(H,z,N,R,P,re),P.onAfterRender(g,z,H,N,R,re)}function Qi(P,z,H){z.isScene!==!0&&(z=ze);const N=I.get(P),R=A.state.lights,re=A.state.shadowsArray,ue=R.state.version,ve=Z.getParameters(P,R.state,re,z,H),xe=Z.getProgramCacheKey(ve);let Ie=N.programs;N.environment=P.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(P.isMeshStandardMaterial?X:U).get(P.envMap||N.environment),N.envMapRotation=N.environment!==null&&P.envMap===null?z.environmentRotation:P.envMapRotation,Ie===void 0&&(P.addEventListener("dispose",me),Ie=new Map,N.programs=Ie);let be=Ie.get(xe);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===ue)return xa(P,ve),be}else ve.uniforms=Z.getUniforms(P),P.onBuild(H,ve,g),P.onBeforeCompile(ve,g),be=Z.acquireProgram(ve,xe),Ie.set(xe,be),N.uniforms=ve.uniforms;const Se=N.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Se.clippingPlanes=oe.uniform),xa(P,ve),N.needsLights=_h(P),N.lightsStateVersion=ue,N.needsLights&&(Se.ambientLightColor.value=R.state.ambient,Se.lightProbe.value=R.state.probe,Se.directionalLights.value=R.state.directional,Se.directionalLightShadows.value=R.state.directionalShadow,Se.spotLights.value=R.state.spot,Se.spotLightShadows.value=R.state.spotShadow,Se.rectAreaLights.value=R.state.rectArea,Se.ltc_1.value=R.state.rectAreaLTC1,Se.ltc_2.value=R.state.rectAreaLTC2,Se.pointLights.value=R.state.point,Se.pointLightShadows.value=R.state.pointShadow,Se.hemisphereLights.value=R.state.hemi,Se.directionalShadowMap.value=R.state.directionalShadowMap,Se.directionalShadowMatrix.value=R.state.directionalShadowMatrix,Se.spotShadowMap.value=R.state.spotShadowMap,Se.spotLightMatrix.value=R.state.spotLightMatrix,Se.spotLightMap.value=R.state.spotLightMap,Se.pointShadowMap.value=R.state.pointShadowMap,Se.pointShadowMatrix.value=R.state.pointShadowMatrix),N.currentProgram=be,N.uniformsList=null,be}function ya(P){if(P.uniformsList===null){const z=P.currentProgram.getUniforms();P.uniformsList=Ds.seqWithValue(z.seq,P.uniforms)}return P.uniformsList}function xa(P,z){const H=I.get(P);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function mh(P,z,H,N,R){z.isScene!==!0&&(z=ze),_.resetTextureUnits();const re=z.fog,ue=N.isMeshStandardMaterial?z.environment:null,ve=b===null?g.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Vt,xe=(N.isMeshStandardMaterial?X:U).get(N.envMap||ue),Ie=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,be=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Se=!!H.morphAttributes.position,st=!!H.morphAttributes.normal,It=!!H.morphAttributes.color;let lt=un;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=g.toneMapping);const Qt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,it=Qt!==void 0?Qt.length:0,Ee=I.get(N),er=A.state.lights;if(k===!0&&($===!0||P!==y)){const Dt=P===y&&N.id===D;oe.setState(N,P,Dt)}let tt=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==er.state.version||Ee.outputColorSpace!==ve||R.isBatchedMesh&&Ee.batching===!1||!R.isBatchedMesh&&Ee.batching===!0||R.isInstancedMesh&&Ee.instancing===!1||!R.isInstancedMesh&&Ee.instancing===!0||R.isSkinnedMesh&&Ee.skinning===!1||!R.isSkinnedMesh&&Ee.skinning===!0||R.isInstancedMesh&&Ee.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&Ee.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&Ee.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&Ee.instancingMorph===!1&&R.morphTexture!==null||Ee.envMap!==xe||N.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==oe.numPlanes||Ee.numIntersection!==oe.numIntersection)||Ee.vertexAlphas!==Ie||Ee.vertexTangents!==be||Ee.morphTargets!==Se||Ee.morphNormals!==st||Ee.morphColors!==It||Ee.toneMapping!==lt||Ee.morphTargetsCount!==it)&&(tt=!0):(tt=!0,Ee.__version=N.version);let Tn=Ee.currentProgram;tt===!0&&(Tn=Qi(N,z,R));let Pa=!1,bi=!1,tr=!1;const gt=Tn.getUniforms(),dn=Ee.uniforms;if(we.useProgram(Tn.program)&&(Pa=!0,bi=!0,tr=!0),N.id!==D&&(D=N.id,bi=!0),Pa||y!==P){gt.setValue(G,"projectionMatrix",P.projectionMatrix),gt.setValue(G,"viewMatrix",P.matrixWorldInverse);const Dt=gt.map.cameraPosition;Dt!==void 0&&Dt.setValue(G,Be.setFromMatrixPosition(P.matrixWorld)),at.logarithmicDepthBuffer&&gt.setValue(G,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&gt.setValue(G,"isOrthographic",P.isOrthographicCamera===!0),y!==P&&(y=P,bi=!0,tr=!0)}if(R.isSkinnedMesh){gt.setOptional(G,R,"bindMatrix"),gt.setOptional(G,R,"bindMatrixInverse");const Dt=R.skeleton;Dt&&(Dt.boneTexture===null&&Dt.computeBoneTexture(),gt.setValue(G,"boneTexture",Dt.boneTexture,_))}R.isBatchedMesh&&(gt.setOptional(G,R,"batchingTexture"),gt.setValue(G,"batchingTexture",R._matricesTexture,_));const nr=H.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&fe.update(R,H,Tn),(bi||Ee.receiveShadow!==R.receiveShadow)&&(Ee.receiveShadow=R.receiveShadow,gt.setValue(G,"receiveShadow",R.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(dn.envMap.value=xe,dn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&z.environment!==null&&(dn.envMapIntensity.value=z.environmentIntensity),bi&&(gt.setValue(G,"toneMappingExposure",g.toneMappingExposure),Ee.needsLights&&vh(dn,tr),re&&N.fog===!0&&ge.refreshFogUniforms(dn,re),ge.refreshMaterialUniforms(dn,N,se,W,A.state.transmissionRenderTarget),Ds.upload(G,ya(Ee),dn,_)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ds.upload(G,ya(Ee),dn,_),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&gt.setValue(G,"center",R.center),gt.setValue(G,"modelViewMatrix",R.modelViewMatrix),gt.setValue(G,"normalMatrix",R.normalMatrix),gt.setValue(G,"modelMatrix",R.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Dt=N.uniformsGroups;for(let ir=0,Mh=Dt.length;ir<Mh;ir++){const wa=Dt[ir];$e.update(wa,Tn),$e.bind(wa,Tn)}}return Tn}function vh(P,z){P.ambientLightColor.needsUpdate=z,P.lightProbe.needsUpdate=z,P.directionalLights.needsUpdate=z,P.directionalLightShadows.needsUpdate=z,P.pointLights.needsUpdate=z,P.pointLightShadows.needsUpdate=z,P.spotLights.needsUpdate=z,P.spotLightShadows.needsUpdate=z,P.rectAreaLights.needsUpdate=z,P.hemisphereLights.needsUpdate=z}function _h(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(P,z,H){I.get(P.texture).__webglTexture=z,I.get(P.depthTexture).__webglTexture=H;const N=I.get(P);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,z){const H=I.get(P);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(P,z=0,H=0){b=P,T=z,C=H;let N=!0,R=null,re=!1,ue=!1;if(P){const xe=I.get(P);xe.__useDefaultFramebuffer!==void 0?(we.bindFramebuffer(G.FRAMEBUFFER,null),N=!1):xe.__webglFramebuffer===void 0?_.setupRenderTarget(P):xe.__hasExternalTextures&&_.rebindTextures(P,I.get(P.texture).__webglTexture,I.get(P.depthTexture).__webglTexture);const Ie=P.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const be=I.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(be[z])?R=be[z][H]:R=be[z],re=!0):P.samples>0&&_.useMultisampledRTT(P)===!1?R=I.get(P).__webglMultisampledFramebuffer:Array.isArray(be)?R=be[H]:R=be,v.copy(P.viewport),L.copy(P.scissor),F=P.scissorTest}else v.copy(Q).multiplyScalar(se).floor(),L.copy(de).multiplyScalar(se).floor(),F=Oe;if(we.bindFramebuffer(G.FRAMEBUFFER,R)&&N&&we.drawBuffers(P,R),we.viewport(v),we.scissor(L),we.setScissorTest(F),re){const xe=I.get(P.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+z,xe.__webglTexture,H)}else if(ue){const xe=I.get(P.texture),Ie=z||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,xe.__webglTexture,H||0,Ie)}D=-1},this.readRenderTargetPixels=function(P,z,H,N,R,re,ue){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=I.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){we.bindFramebuffer(G.FRAMEBUFFER,ve);try{const xe=P.texture,Ie=xe.format,be=xe.type;if(Ie!==Nt&&Ue.convert(Ie)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=be===ln&&(ye.has("EXT_color_buffer_half_float")||ye.has("EXT_color_buffer_float"));if(be!==Cn&&Ue.convert(be)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&be!==Tt&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=P.width-N&&H>=0&&H<=P.height-R&&G.readPixels(z,H,N,R,Ue.convert(Ie),Ue.convert(be),re)}finally{const xe=b!==null?I.get(b).__webglFramebuffer:null;we.bindFramebuffer(G.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(P,z,H=0){const N=Math.pow(2,-H),R=Math.floor(z.image.width*N),re=Math.floor(z.image.height*N);_.setTexture2D(z,0),G.copyTexSubImage2D(G.TEXTURE_2D,H,0,0,P.x,P.y,R,re),we.unbindTexture()},this.copyTextureToTexture=function(P,z,H,N=0){const R=z.image.width,re=z.image.height,ue=Ue.convert(H.format),ve=Ue.convert(H.type);_.setTexture2D(H,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment),z.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,N,P.x,P.y,R,re,ue,ve,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,N,P.x,P.y,z.mipmaps[0].width,z.mipmaps[0].height,ue,z.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,N,P.x,P.y,ue,ve,z.image),N===0&&H.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(P,z,H,N,R=0){const re=Math.round(P.max.x-P.min.x),ue=Math.round(P.max.y-P.min.y),ve=P.max.z-P.min.z+1,xe=Ue.convert(N.format),Ie=Ue.convert(N.type);let be;if(N.isData3DTexture)_.setTexture3D(N,0),be=G.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)_.setTexture2DArray(N,0),be=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,N.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,N.unpackAlignment);const Se=G.getParameter(G.UNPACK_ROW_LENGTH),st=G.getParameter(G.UNPACK_IMAGE_HEIGHT),It=G.getParameter(G.UNPACK_SKIP_PIXELS),lt=G.getParameter(G.UNPACK_SKIP_ROWS),Qt=G.getParameter(G.UNPACK_SKIP_IMAGES),it=H.isCompressedTexture?H.mipmaps[R]:H.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,it.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,it.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,P.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,P.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,P.min.z),H.isDataTexture||H.isData3DTexture?G.texSubImage3D(be,R,z.x,z.y,z.z,re,ue,ve,xe,Ie,it.data):N.isCompressedArrayTexture?G.compressedTexSubImage3D(be,R,z.x,z.y,z.z,re,ue,ve,xe,it.data):G.texSubImage3D(be,R,z.x,z.y,z.z,re,ue,ve,xe,Ie,it),G.pixelStorei(G.UNPACK_ROW_LENGTH,Se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,st),G.pixelStorei(G.UNPACK_SKIP_PIXELS,It),G.pixelStorei(G.UNPACK_SKIP_ROWS,lt),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Qt),R===0&&N.generateMipmaps&&G.generateMipmap(be),we.unbindTexture()},this.initTexture=function(P){P.isCubeTexture?_.setTextureCube(P,0):P.isData3DTexture?_.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?_.setTexture2DArray(P,0):_.setTexture2D(P,0),we.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,we.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===na?"display-p3":"srgb",t.unpackColorSpace=ke.workingColorSpace===js?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class nh extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xt,this.environmentIntensity=1,this.environmentRotation=new Xt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Jp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ut()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Rc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ut()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Mt=new B;class Ys{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ft(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ft(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ft(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ft(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class $p extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oi;const Ti=new B,ci=new B,hi=new B,li=new le,Di=new le,ih=new Le,xs=new B,zi=new B,Ps=new B,Vo=new le,Or=new le,jo=new le;class vm extends qe{constructor(e=new $p){if(super(),this.isSprite=!0,this.type="Sprite",oi===void 0){oi=new ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Jp(t,5);oi.setIndex([0,1,2,0,2,3]),oi.setAttribute("position",new Ys(n,3,0,!1)),oi.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=oi,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ci.setFromMatrixScale(this.matrixWorld),ih.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),hi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ci.multiplyScalar(-hi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;ws(xs.set(-.5,-.5,0),hi,a,ci,i,r),ws(zi.set(.5,-.5,0),hi,a,ci,i,r),ws(Ps.set(.5,.5,0),hi,a,ci,i,r),Vo.set(0,0),Or.set(1,0),jo.set(1,1);let o=e.ray.intersectTriangle(xs,zi,Ps,!1,Ti);if(o===null&&(ws(zi.set(-.5,.5,0),hi,a,ci,i,r),Or.set(0,1),o=e.ray.intersectTriangle(xs,Ps,zi,!1,Ti),o===null))return;const c=e.ray.origin.distanceTo(Ti);c<e.near||c>e.far||t.push({distance:c,point:Ti.clone(),uv:Ht.getInterpolation(Ti,xs,zi,Ps,Vo,Or,jo,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ws(s,e,t,n,i,r){li.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Di.x=r*li.x-i*li.y,Di.y=i*li.x+r*li.y):Di.copy(li),s.copy(e),s.x+=Di.x,s.y+=Di.y,s.applyMatrix4(ih)}const Zo=new B,Qo=new We,Jo=new We,eg=new B,$o=new Le,Cs=new B,Rr=new jt,ec=new Le,Fr=new Yi;class _m extends At{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ba,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new bt),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cs),this.boundingBox.expandByPoint(Cs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new jt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cs),this.boundingSphere.expandByPoint(Cs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rr.copy(this.boundingSphere),Rr.applyMatrix4(i),e.ray.intersectsSphere(Rr)!==!1&&(ec.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(ec),!(this.boundingBox!==null&&Fr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new We,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Ba?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===il?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Qo.fromBufferAttribute(i.attributes.skinIndex,e),Jo.fromBufferAttribute(i.attributes.skinWeight,e),Zo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Jo.getComponent(r);if(a!==0){const o=Qo.getComponent(r);$o.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(eg.copy(Zo).applyMatrix4($o),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tg extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ca extends dt{constructor(e=null,t=1,n=1,i,r,a,o,c,h=Ct,l=Ct,d,u){super(null,a,o,c,h,l,i,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const tc=new Le,ng=new Le;class sh{constructor(e=[],t=[]){this.uuid=Ut(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ng;tc.multiplyMatrices(o,t[r]),tc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new sh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ca(t,e,e,Nt,Tt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new tg),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nc extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const fi=new Le,ic=new Le,bs=[],sc=new bt,ig=new Le,Li=new At,Gi=new jt;class Mm extends At{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,ig)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new bt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),sc.copy(e.boundingBox).applyMatrix4(fi),this.boundingBox.union(sc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new jt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,fi),Gi.copy(e.boundingSphere).applyMatrix4(fi),this.boundingSphere.union(Gi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Li.geometry=this.geometry,Li.material=this.material,Li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gi.copy(this.boundingSphere),Gi.applyMatrix4(n),e.ray.intersectsSphere(Gi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,fi),ic.multiplyMatrices(n,fi),Li.matrixWorld=ic,Li.raycast(e,bs);for(let a=0,o=bs.length;a<o;a++){const c=bs[a];c.instanceId=r,c.object=this,t.push(c)}bs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ca(new Float32Array(i*this.count),i,this.count,Bc,Tt));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Wi extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rc=new B,ac=new B,oc=new Le,Hr=new Yi,Is=new jt;class ha extends qe{constructor(e=new ht,t=new Wi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)rc.fromBufferAttribute(t,i-1),ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rc.distanceTo(ac);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(i),Is.radius+=r,e.ray.intersectsSphere(Is)===!1)return;oc.copy(i).invert(),Hr.copy(e.ray).applyMatrix4(oc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new B,l=new B,d=new B,u=new B,p=this.isLineSegments?2:1,m=n.index,A=n.attributes.position;if(m!==null){const f=Math.max(0,a.start),x=Math.min(m.count,a.start+a.count);for(let g=f,w=x-1;g<w;g+=p){const T=m.getX(g),C=m.getX(g+1);if(h.fromBufferAttribute(A,T),l.fromBufferAttribute(A,C),Hr.distanceSqToSegment(h,l,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(u);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const f=Math.max(0,a.start),x=Math.min(A.count,a.start+a.count);for(let g=f,w=x-1;g<w;g+=p){if(h.fromBufferAttribute(A,g),l.fromBufferAttribute(A,g+1),Hr.distanceSqToSegment(h,l,u,d)>c)continue;u.applyMatrix4(this.matrixWorld);const C=e.ray.origin.distanceTo(u);C<e.near||C>e.far||t.push({distance:C,point:d.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const cc=new B,hc=new B;class la extends ha{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)cc.fromBufferAttribute(t,i),hc.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+cc.distanceTo(hc);e.setAttribute("lineDistance",new Ze(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ym extends ha{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class sg extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const lc=new Le,jr=new Yi,Ss=new jt,Bs=new B;class xm extends qe{constructor(e=new ht,t=new sg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(i),Ss.radius+=r,e.ray.intersectsSphere(Ss)===!1)return;lc.copy(i).invert(),jr.copy(e.ray).applyMatrix4(lc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const u=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let m=u,M=p;m<M;m++){const A=h.getX(m);Bs.fromBufferAttribute(d,A),fc(Bs,A,c,i,e,t,this)}}else{const u=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let m=u,M=p;m<M;m++)Bs.fromBufferAttribute(d,m),fc(Bs,m,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function fc(s,e,t,n,i,r,a){const o=jr.distanceSqToPoint(s);if(o<t){const c=new B;jr.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class Pm extends dt{constructor(e,t,n,i,r,a,o,c,h,l,d,u){super(null,a,o,c,h,l,i,r,d,u),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class wm extends dt{constructor(e,t,n,i,r,a,o,c,h){super(e,t,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qs extends ht{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const l=[],d=[],u=[],p=[];let m=0;const M=[],A=n/2;let f=0;x(),a===!1&&(e>0&&g(!0),t>0&&g(!1)),this.setIndex(l),this.setAttribute("position",new Ze(d,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(p,2));function x(){const w=new B,T=new B;let C=0;const b=(t-e)/n;for(let D=0;D<=r;D++){const y=[],v=D/r,L=v*(t-e)+e;for(let F=0;F<=i;F++){const E=F/i,K=E*c+o,Y=Math.sin(K),W=Math.cos(K);T.x=L*Y,T.y=-v*n+A,T.z=L*W,d.push(T.x,T.y,T.z),w.set(Y,b,W).normalize(),u.push(w.x,w.y,w.z),p.push(E,1-v),y.push(m++)}M.push(y)}for(let D=0;D<i;D++)for(let y=0;y<r;y++){const v=M[y][D],L=M[y+1][D],F=M[y+1][D+1],E=M[y][D+1];l.push(v,L,E),l.push(L,F,E),C+=6}h.addGroup(f,C,0),f+=C}function g(w){const T=m,C=new le,b=new B;let D=0;const y=w===!0?e:t,v=w===!0?1:-1;for(let F=1;F<=i;F++)d.push(0,A*v,0),u.push(0,v,0),p.push(.5,.5),m++;const L=m;for(let F=0;F<=i;F++){const K=F/i*c+o,Y=Math.cos(K),W=Math.sin(K);b.x=y*W,b.y=A*v,b.z=y*Y,d.push(b.x,b.y,b.z),u.push(0,v,0),C.x=Y*.5+.5,C.y=W*.5*v+.5,p.push(C.x,C.y),m++}for(let F=0;F<i;F++){const E=T+F,K=L+F;w===!0?l.push(K,K+1,E):l.push(K+1,K,E),D+=3}h.addGroup(f,D,w===!0?1:2),f+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class fa extends Qs{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new fa(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ua extends ht{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),h(n),l(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const g=new B,w=new B,T=new B;for(let C=0;C<t.length;C+=3)p(t[C+0],g),p(t[C+1],w),p(t[C+2],T),c(g,w,T,x)}function c(x,g,w,T){const C=T+1,b=[];for(let D=0;D<=C;D++){b[D]=[];const y=x.clone().lerp(w,D/C),v=g.clone().lerp(w,D/C),L=C-D;for(let F=0;F<=L;F++)F===0&&D===C?b[D][F]=y:b[D][F]=y.clone().lerp(v,F/L)}for(let D=0;D<C;D++)for(let y=0;y<2*(C-D)-1;y++){const v=Math.floor(y/2);y%2===0?(u(b[D][v+1]),u(b[D+1][v]),u(b[D][v])):(u(b[D][v+1]),u(b[D+1][v+1]),u(b[D+1][v]))}}function h(x){const g=new B;for(let w=0;w<r.length;w+=3)g.x=r[w+0],g.y=r[w+1],g.z=r[w+2],g.normalize().multiplyScalar(x),r[w+0]=g.x,r[w+1]=g.y,r[w+2]=g.z}function l(){const x=new B;for(let g=0;g<r.length;g+=3){x.x=r[g+0],x.y=r[g+1],x.z=r[g+2];const w=A(x)/2/Math.PI+.5,T=f(x)/Math.PI+.5;a.push(w,1-T)}m(),d()}function d(){for(let x=0;x<a.length;x+=6){const g=a[x+0],w=a[x+2],T=a[x+4],C=Math.max(g,w,T),b=Math.min(g,w,T);C>.9&&b<.1&&(g<.2&&(a[x+0]+=1),w<.2&&(a[x+2]+=1),T<.2&&(a[x+4]+=1))}}function u(x){r.push(x.x,x.y,x.z)}function p(x,g){const w=x*3;g.x=e[w+0],g.y=e[w+1],g.z=e[w+2]}function m(){const x=new B,g=new B,w=new B,T=new B,C=new le,b=new le,D=new le;for(let y=0,v=0;y<r.length;y+=9,v+=6){x.set(r[y+0],r[y+1],r[y+2]),g.set(r[y+3],r[y+4],r[y+5]),w.set(r[y+6],r[y+7],r[y+8]),C.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),T.copy(x).add(g).add(w).divideScalar(3);const L=A(T);M(C,v+0,x,L),M(b,v+2,g,L),M(D,v+4,w,L)}}function M(x,g,w,T){T<0&&x.x===1&&(a[g]=x.x-1),w.x===0&&w.z===0&&(a[g]=T/2/Math.PI+.5)}function A(x){return Math.atan2(x.z,-x.x)}function f(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.vertices,e.indices,e.radius,e.details)}}class rh extends ua{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rh(e.radius,e.detail)}}class xi extends ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],d=new B,u=new B,p=[],m=[],M=[],A=[];for(let f=0;f<=n;f++){const x=[],g=f/n;let w=0;f===0&&a===0?w=.5/t:f===n&&c===Math.PI&&(w=-.5/t);for(let T=0;T<=t;T++){const C=T/t;d.x=-e*Math.cos(i+C*r)*Math.sin(a+g*o),d.y=e*Math.cos(a+g*o),d.z=e*Math.sin(i+C*r)*Math.sin(a+g*o),m.push(d.x,d.y,d.z),u.copy(d).normalize(),M.push(u.x,u.y,u.z),A.push(C+w,1-g),x.push(h++)}l.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const g=l[f][x+1],w=l[f][x],T=l[f+1][x],C=l[f+1][x+1];(f!==0||a>0)&&p.push(g,w,C),(f!==n-1||c<Math.PI)&&p.push(w,T,C)}this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ah extends ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],l=new B,d=new B,u=new B;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){const M=m/i*r,A=p/n*Math.PI*2;d.x=(e+t*Math.cos(A))*Math.cos(M),d.y=(e+t*Math.cos(A))*Math.sin(M),d.z=t*Math.sin(A),o.push(d.x,d.y,d.z),l.x=e*Math.cos(M),l.y=e*Math.sin(M),u.subVectors(d,l).normalize(),c.push(u.x,u.y,u.z),h.push(m/i),h.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){const M=(i+1)*p+m-1,A=(i+1)*(p-1)+m-1,f=(i+1)*(p-1)+m,x=(i+1)*p+m;a.push(M,A,x),a.push(A,f,x)}this.setIndex(a),this.setAttribute("position",new Ze(o,3)),this.setAttribute("normal",new Ze(c,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ah(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Js extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cm extends Js{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rg extends Wi{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Es(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function ag(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function og(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function uc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function oh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class $s{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class cg extends $s{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:to,endingEnd:to}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case no:r=e,o=2*t-n;break;case io:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case no:a=e,c=2*n-t;break;case io:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const h=(n-t)*.5,l=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),M=m*m,A=M*m,f=-u*A+2*u*M-u*m,x=(1+u)*A+(-1.5-2*u)*M+(-.5+u)*m+1,g=(-1-p)*A+(1.5+p)*M+.5*m,w=p*A-p*M;for(let T=0;T!==o;++T)r[T]=f*a[l+T]+x*a[h+T]+g*a[c+T]+w*a[d+T];return r}}class hg extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=(n-t)/(i-t),d=1-l;for(let u=0;u!==o;++u)r[u]=a[h+u]*d+a[c+u]*l;return r}}class lg extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Zt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Es(t,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Es(e.times,Array),values:Es(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new cg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Fs:t=this.InterpolantFactoryMethodLinear;break;case lr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Fs;case this.InterpolantFactoryMethodSmooth:return lr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&ag(i))for(let o=0,c=i.length;o!==c;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===lr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const h=e[o],l=e[o+1];if(h!==l&&(o!==1||h!==e[0]))if(i)c=!0;else{const d=o*n,u=d-n,p=d+n;for(let m=0;m!==n;++m){const M=t[d+m];if(M!==t[u+m]||M!==t[p+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const d=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[d+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Zt.prototype.TimeBufferType=Float32Array;Zt.prototype.ValueBufferType=Float32Array;Zt.prototype.DefaultInterpolation=Fs;class Pi extends Zt{}Pi.prototype.ValueTypeName="bool";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=Rs;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;class ch extends Zt{}ch.prototype.ValueTypeName="color";class ks extends Zt{}ks.prototype.ValueTypeName="number";class fg extends $s{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let h=e*o;for(let l=h+o;h!==l;h+=4)In.slerpFlat(r,0,a,h-o,a,h,c);return r}}class Vi extends Zt{InterpolantFactoryMethodLinear(e){return new fg(this.times,this.values,this.getValueSize(),e)}}Vi.prototype.ValueTypeName="quaternion";Vi.prototype.DefaultInterpolation=Fs;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;class wi extends Zt{}wi.prototype.ValueTypeName="string";wi.prototype.ValueBufferType=Array;wi.prototype.DefaultInterpolation=Rs;wi.prototype.InterpolantFactoryMethodLinear=void 0;wi.prototype.InterpolantFactoryMethodSmooth=void 0;class Xs extends Zt{}Xs.prototype.ValueTypeName="vector";class bm{constructor(e="",t=-1,n=[],i=Al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ut(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(dg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(Zt.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const l=og(c);c=uc(c,1,l),h=uc(h,1,l),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new ks(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const h=e[o],l=h.name.match(r);if(l&&l.length>1){const d=l[1];let u=i[d];u||(i[d]=u=[]),u.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,p,m,M){if(p.length!==0){const A=[],f=[];oh(p,A,f,m),A.length!==0&&M.push(new d(u,A,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let d=0;d<h.length;d++){const u=h[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let m;for(m=0;m<u.length;m++)if(u[m].morphTargets)for(let M=0;M<u[m].morphTargets.length;M++)p[u[m].morphTargets[M]]=-1;for(const M in p){const A=[],f=[];for(let x=0;x!==u[m].morphTargets.length;++x){const g=u[m];A.push(g.time),f.push(g.morphTarget===M?1:0)}i.push(new ks(".morphTargetInfluence["+M+"]",A,f))}c=p.length*a}else{const p=".bones["+t[d].name+"]";n(Xs,p+".position",u,"pos",i),n(Vi,p+".quaternion",u,"rot",i),n(Xs,p+".scale",u,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ug(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ks;case"vector":case"vector2":case"vector3":case"vector4":return Xs;case"color":return ch;case"quaternion":return Vi;case"bool":case"boolean":return Pi;case"string":return wi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function dg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ug(s.type);if(s.times===void 0){const t=[],n=[];oh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Pn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ag{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){const d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,u=h.length;d<u;d+=2){const p=h[d],m=h[d+1];if(p.global&&(p.lastIndex=0),p.test(l))return m}return null}}}const pg=new Ag;class Ci{constructor(e){this.manager=e!==void 0?e:pg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ci.DEFAULT_MATERIAL_NAME="__DEFAULT";const sn={};class gg extends Error{constructor(e,t){super(e),this.response=t}}class mg extends Ci{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Pn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(sn[e]!==void 0){sn[e].push({onLoad:t,onProgress:n,onError:i});return}sn[e]=[],sn[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const l=sn[e],d=h.body.getReader(),u=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),p=u?parseInt(u):0,m=p!==0;let M=0;const A=new ReadableStream({start(f){x();function x(){d.read().then(({done:g,value:w})=>{if(g)f.close();else{M+=w.byteLength;const T=new ProgressEvent("progress",{lengthComputable:m,loaded:M,total:p});for(let C=0,b=l.length;C<b;C++){const D=l[C];D.onProgress&&D.onProgress(T)}f.enqueue(w),x()}})}}});return new Response(A)}else throw new gg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,p=new TextDecoder(u);return h.arrayBuffer().then(m=>p.decode(m))}}}).then(h=>{Pn.add(e,h);const l=sn[e];delete sn[e];for(let d=0,u=l.length;d<u;d++){const p=l[d];p.onLoad&&p.onLoad(h)}}).catch(h=>{const l=sn[e];if(l===void 0)throw this.manager.itemError(e),h;delete sn[e];for(let d=0,u=l.length;d<u;d++){const p=l[d];p.onError&&p.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class vg extends Ci{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ki("img");function c(){l(),Pn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(d){l(),i&&i(d),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class _g extends Ci{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new ca,o=new mg(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let h;try{h=r.parse(c)}catch(l){if(i!==void 0)i(l);else{console.error(l);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:hn,a.wrapT=h.wrapT!==void 0?h.wrapT:hn,a.magFilter=h.magFilter!==void 0?h.magFilter:_t,a.minFilter=h.minFilter!==void 0?h.minFilter:_t,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=xn),h.mipmapCount===1&&(a.minFilter=_t),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class Im extends Ci{constructor(e){super(e)}load(e,t,n,i){const r=new dt,a=new vg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ji extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Mg extends ji{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Nr=new Le,dc=new B,Ac=new B;class da{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new aa,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(dc),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),Nr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class yg extends da{constructor(){super(new wt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_i*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Sm extends ji{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new yg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const pc=new Le,Oi=new B,Ur=new B;class xg extends da{constructor(){super(new wt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new We(2,1,1,1),new We(0,1,1,1),new We(3,1,1,1),new We(1,1,1,1),new We(3,0,1,1),new We(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Ur.copy(n.position),Ur.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ur),n.updateMatrixWorld(),i.makeTranslation(-Oi.x,-Oi.y,-Oi.z),pc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pc)}}class Pg extends ji{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class wg extends da{constructor(){super(new jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Cg extends ji{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DEFAULT_UP),this.updateMatrix(),this.target=new qe,this.shadow=new wg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bg extends ji{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Bm{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Em extends Ci{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Pn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Pn.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Pn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Pn.add(e,c),r.manager.itemStart(e)}}const Aa="\\[\\]\\.:\\/",Ig=new RegExp("["+Aa+"]","g"),pa="[^"+Aa+"]",Sg="[^"+Aa.replace("\\.","")+"]",Bg=/((?:WC+[\/:])*)/.source.replace("WC",pa),Eg=/(WCOD+)?/.source.replace("WCOD",Sg),Tg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",pa),Dg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",pa),zg=new RegExp("^"+Bg+Eg+Tg+Dg+"$"),Lg=["material","materials","bones","map"];class Gg{constructor(e,t,n){const i=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ig,"")}static parseTrackName(e){const t=zg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Lg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=Gg;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class hh{constructor(e){this.value=e}clone(){return new hh(this.value.clone===void 0?this.value:this.value.clone())}}const gc=new Le;class Og{constructor(e,t,n=0,i=1/0){this.ray=new Yi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ra,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gc),this}intersectObject(e,t=!0,n=[]){return Zr(e,this,n,t),n.sort(mc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Zr(e[i],this,n,t);return n.sort(mc),n}}function mc(s,e){return s.distance-e.distance}function Zr(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Zr(i[r],e,t,!0)}}class vc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Rg extends la{constructor(e=10,t=10,n=4473924,i=8947848){n=new Pe(n),i=new Pe(i);const r=t/2,a=e/t,o=e/2,c=[],h=[];for(let u=0,p=0,m=-o;u<=t;u++,m+=a){c.push(-o,0,m,o,0,m),c.push(m,0,-o,m,0,o);const M=u===r?n:i;M.toArray(h,p),p+=3,M.toArray(h,p),p+=3,M.toArray(h,p),p+=3,M.toArray(h,p),p+=3}const l=new ht;l.setAttribute("position",new Ze(c,3)),l.setAttribute("color",new Ze(h,3));const d=new Wi({vertexColors:!0,toneMapped:!1});super(l,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Fg extends la{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new ht;r.setIndex(new Pt(n,1)),r.setAttribute("position",new Ze(i,3)),super(r,new Wi({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Tm extends la{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new ht;i.setAttribute("position",new Ze(t,3)),i.setAttribute("color",new Ze(n,3));const r=new Wi({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new Pe,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);var Hg=Object.defineProperty,Ng=(s,e,t)=>e in s?Hg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,Ws=(s,e,t)=>Ng(s,typeof e!="symbol"?e+"":e,t);const Ug=1,Dm=2,lh=4,fh=8,Wt=16,Fi={fov:70,near:.001,far:1e3},Qr=class zs extends wt{constructor(e=Fi){super(e.fov||Fi.fov,1,e.near||Fi.near,e.far||Fi.far),Ws(this,"isDIVEPerspectiveCamera",!0),Ws(this,"onSetCameraLayer",()=>{}),this.layers.mask=zs.EDITOR_VIEW_LAYER_MASK}onResize(e,t){this.aspect=e/t,this.updateProjectionMatrix()}setCameraLayer(e){this.layers.mask=e==="LIVE"?zs.LIVE_VIEW_LAYER_MASK:zs.EDITOR_VIEW_LAYER_MASK,this.onSetCameraLayer(this.layers.mask)}};Ws(Qr,"EDITOR_VIEW_LAYER_MASK",Ug|lh|fh|Wt),Ws(Qr,"LIVE_VIEW_LAYER_MASK",Wt);let _c=Qr;var Kg=Object.defineProperty,qg=(s,e,t)=>e in s?Kg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,O=(s,e,t)=>qg(s,typeof e!="symbol"?e+"":e,t);class Yg{constructor(){O(this,"isDIVEClock",!0),O(this,"_lastTime",0),O(this,"_isRunning",!1),O(this,"_tickers",[])}start(){this._isRunning||(this._isRunning=!0,this._lastTime=performance.now(),requestAnimationFrame(this._tick.bind(this)))}stop(){this._isRunning=!1}addTicker(e){this._tickers.find(t=>t.uuid===e.uuid)||this._tickers.push(e)}hasTicker(e){return this._tickers.find(t=>t.uuid===e.uuid)!==void 0}removeTicker(e){const t=this._tickers.findIndex(n=>n.uuid===e.uuid);t!==-1&&this._tickers.splice(t,1)}dispose(){this.stop(),this._tickers=[],this._isRunning=!1,this._lastTime=0}_tick(e){if(!this._isRunning)return;const t=(e-this._lastTime)/1e3;this._lastTime=e,this._tickers.forEach(n=>n.tick(t)),requestAnimationFrame(this._tick.bind(this))}}class kg extends _g{constructor(e){super(e),this.type=ln}parse(e){const t=function(f,x){switch(f){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=function(f,x,g){x=x||1024;let w=f.pos,T=-1,C=0,b="",D=String.fromCharCode.apply(null,new Uint16Array(f.subarray(w,w+128)));for(;0>(T=D.indexOf(`
`))&&C<x&&w<f.byteLength;)b+=D,C+=D.length,w+=128,D+=String.fromCharCode.apply(null,new Uint16Array(f.subarray(w,w+128)));return-1<T?(f.pos+=C+T+1,b+D.slice(0,T)):!1},r=function(f){const x=/^#\?(\S+)/,g=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,w=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,T=/^\s*FORMAT=(\S+)\s*$/,C=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let D,y;for((f.pos>=f.byteLength||!(D=i(f)))&&t(1,"no header found"),(y=D.match(x))||t(3,"bad initial token"),b.valid|=1,b.programtype=y[1],b.string+=D+`
`;D=i(f),D!==!1;){if(b.string+=D+`
`,D.charAt(0)==="#"){b.comments+=D+`
`;continue}if((y=D.match(g))&&(b.gamma=parseFloat(y[1])),(y=D.match(w))&&(b.exposure=parseFloat(y[1])),(y=D.match(T))&&(b.valid|=2,b.format=y[1]),(y=D.match(C))&&(b.valid|=4,b.height=parseInt(y[1],10),b.width=parseInt(y[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2||t(3,"missing format specifier"),b.valid&4||t(3,"missing image size specifier"),b},a=function(f,x,g){const w=x;if(w<8||w>32767||f[0]!==2||f[1]!==2||f[2]&128)return new Uint8Array(f);w!==(f[2]<<8|f[3])&&t(3,"wrong scanline width");const T=new Uint8Array(4*x*g);T.length||t(4,"unable to allocate buffer space");let C=0,b=0;const D=4*w,y=new Uint8Array(4),v=new Uint8Array(D);let L=g;for(;L>0&&b<f.byteLength;){b+4>f.byteLength&&t(1),y[0]=f[b++],y[1]=f[b++],y[2]=f[b++],y[3]=f[b++],(y[0]!=2||y[1]!=2||(y[2]<<8|y[3])!=w)&&t(3,"bad rgbe scanline format");let F=0,E;for(;F<D&&b<f.byteLength;){E=f[b++];const Y=E>128;if(Y&&(E-=128),(E===0||F+E>D)&&t(3,"bad scanline data"),Y){const W=f[b++];for(let se=0;se<E;se++)v[F++]=W}else v.set(f.subarray(b,b+E),F),F+=E,b+=E}const K=w;for(let Y=0;Y<K;Y++){let W=0;T[C]=v[Y+W],W+=w,T[C+1]=v[Y+W],W+=w,T[C+2]=v[Y+W],W+=w,T[C+3]=v[Y+W],C+=4}L--}return T},o=function(f,x,g,w){const T=f[x+3],C=Math.pow(2,T-128)/255;g[w+0]=f[x+0]*C,g[w+1]=f[x+1]*C,g[w+2]=f[x+2]*C,g[w+3]=1},c=function(f,x,g,w){const T=f[x+3],C=Math.pow(2,T-128)/255;g[w+0]=cs.toHalfFloat(Math.min(f[x+0]*C,65504)),g[w+1]=cs.toHalfFloat(Math.min(f[x+1]*C,65504)),g[w+2]=cs.toHalfFloat(Math.min(f[x+2]*C,65504)),g[w+3]=cs.toHalfFloat(1)},h=new Uint8Array(e);h.pos=0;const l=r(h),d=l.width,u=l.height,p=a(h.subarray(h.pos),d,u);let m,M,A;switch(this.type){case Tt:A=p.length/4;const f=new Float32Array(A*4);for(let g=0;g<A;g++)o(p,g*4,f,g*4);m=f,M=Tt;break;case ln:A=p.length/4;const x=new Uint16Array(A*4);for(let g=0;g<A;g++)c(p,g*4,x,g*4);m=x,M=ln;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:d,height:u,data:m,header:l.string,gamma:l.gamma,exposure:l.exposure,type:M}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case Tt:case ln:a.colorSpace=Vt,a.minFilter=_t,a.magFilter=_t,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}const uh="data:application/octet-stream;base64,Iz9SQURJQU5DRQojIE1hZGUgd2l0aCBBZG9iZSBQaG90b3Nob3AKRk9STUFUPTMyLWJpdF9ybGVfcmdiZQoKLVkgNTEyICtYIDEwMjQKAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c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0AfX/ZOnuMrZodwH0sKyoI7y0v/Q/9AI0NDQ75Ksx9vk3OCAs4H/gNCAtYH/gNOAq4H/gP+AhoDogQICBAAIzs/Oz8/Ozs6GzwvOz8/Oz8/Pzs/OzobPBs7Pzs/OzobPEM7Pzs7Pzs/Oz8/Ozs/Pz86EzwXOz8/PzobPhM4Iz87Pzs/Ozs6JzwzOzs/PztT7kqS0xNSc3BTazL2unYntz8/Oz8/Oz8/Pzs7PzoTPC87Pz87Pzs7Pzs/Ohs8BzoTPBc7Pz8/OhM8Dzs/Oh88BzojPAc6FzwTOz87OhM8Ezs/PzorPB87Pz8/Ozs6IzwXOz87PzoTPhM6EzwbOz87Pz86Ezw7Oz87Pz8/Oz87Pzs/OzofPAc6EzxHOz87Oz87Ozs/Pz87Pz87PzoXPB87Ozs/Pzs6NzwfOzs/Oz8/PhM4Uz8/U6YGMlpyjqrG3vsXMzNHU1NmG3BLZ1NTQzMrEvLWtpZ6WjoTz2c6FzwHOhM8Fzs/Pz86FzyTOzs/Oz8/Oz87Ozs/Oz8/Pzs/Pzs/Oz8/Pzs/Pzs/Pz87Pzs6IzwXOzs/OzobPCM7Pz8/Ozs/Ohc8Ezs/PzpTPBM7Pz86EzwbOz87Pzs+EzoXPCc7Pz87Pz8/OzoTPHM7Pz8/Ozs/Oz8/Ozs/Pzs/Pzs/Pz87Oz8/Ozs6EzwXOzs7PzoTPhM4Dz8/Ohc8BzoXPG87Pz87Pz8/Oz8/PztDmgo6Yoaqzu8XMztTU24XcDtTUz8zFvrSropmRhvLXhM8Gzs7Pzs/OiM8BzoTPC87Oz8/Pzs7Pzs7Oh88Jzs7Pz87Pzs/Ohs8Nzs/Pzs/Pzs7Oz8/PzoXPEs7Pzs/Pzs/Pzs7Oz8/Ozs/OzobPB87Ozs/Pz86EzwTOz87PhM4az87Pzs/Oz8/Ozs/Pz87Pzs/Oz8/Oz87Pz86GzxDOz8/Oz87Oz87Oz87Pzs/OhM8Gzs/Oz8/OhM8Lzs/Pz87Pz87Pzs6EzybOz8/Ozs7Pz8/Ozs/Ozs7Pz87Pz87Ozs/Pzs/Oz87Oz87Pzs7PzoTPAc6Ez4XOhc8BzoTPAc6FzwvOz8/Oz8/ahqG71eDcAc+HzgXPzs/PzoTPFM7Oz87Oz8/Oz8/Pzs/Ozs7Pz8/Ohs8Hzs7Pz8/OzobPBM7Pz86EzxHOz87Pz87Pzs7Pz87Pz87PzoXPBc7Pzs7PhM4Mz8/Pzs/U+5KktMTUnNwQ2sy9rp2J7c/Ozs/Oz8/PzoXPB87Pz8/Ozs6Fzx7Oz87Oz87Pzs7Oz87Pz87Pzs/Pz87Pz8/Ozs/Ozs6GzxDOzs/Pz87Oz87Pzs/Pzs/OhM8BzoTPC87Pzs/Oz8/Oz87Ohs+FzgPPzs+FzgnPz87Pz8/Ozs+EzhfPzs/Oz87Pzs/Pzs/Ozs/Oz87Ozs/PzoTPDs7Pzs7Pzs7Oz87Pz8/OhM8Mzs/Oz8/Pzs7Oz8/OhM8Gzs7Pz87PhM4Ez8/PzofPGM7Pz87Pz9TpgYyWnKOqsbe+xczM0dTU2YbcF9nU1NDMysS8ta2lnpaOhPPZzs/Ozs7Phc4Sz8/Ozs/Oz87Ozs/Oz8/Pzs7Phs4Mz87Pzs/Pz87Pzs7Phc4Lz87Pzs7Oz8/Oz8+FzoLPh84Kz8/Pzs/Oz87OzoXPHs7Pz87Pzs/Ozs7Pz87Pzs/Ozs7Pzs/Pz87Ozs/PzoTPgs6EzxrOz8/Pzs7Oz87Ozs/Pzs/Pz87Oz87Oz8/OzoTPEc7Oz87Ozs/Pz87Pz8/Oz87PhM6Ezw3Ozs/Ozs/Pzs7Pz87Phc4ez87Oz87Oz8/Oz87Oz87P0OaCjpihqrO7xczO1NTbhdwb1NTPzMW+tKuimZGG8tfPzs7Pz8/Ozs/Ozs/PhM41z8/Oz87Pzs7Pzs/Pzs/Pzs/Pzs/Oz87Pz87Pz87Pz87Pzs/Pzs/Oz8/Ozs/Ozs7Pzs/Pzs+EzoLPhc6Cz4XOBs/Pzs7Pz4TOCM/Ozs/Ozs/Ohc+EzoPPhM4Hz8/Oz87OzoXPBc7Ozs/PhM4dz87Pz8/Oz8/Pzs/Oz87Ozs/Oz87Ozs/Oz87Pzs+FzgfPzs/Oz8/OhM8hzs7Pzs7Oz8/Oz87Oz87Oz87Ozs/Ozs/Ozs/Ozs7Pz87OiM+CzobPB87Pzs/Pz86EzxnOz87Ozs/Pz87Ozs/Pzs/Ozs/Oz9qGobvV4NwEz8/PzojPA87PzofPAc6IzwHOhc8Ezs/OzoTPBM7Pz86KzwHOhM+CzojPBc7Pzs/Ohc+DzoTPEM7Pzs/Pzs/Pz9T7kqS0xNSc3AnazL2unYntz86GzwbOzs/Pzs6Nz4LOhc+EzgrPz87Pzs7Pz87Ohc8Rzs/Pz87Oz87Pz87Pz8/Oz86EzwHOhM+DzoXPAc6EzwXOz8/PzoXPFs7Oz87Pz87Pzs7Oz87Pz8/Oz8/Oz86GzwjOz8/Pzs/PzonPBM7Pzs6GzwHOhs8BzoXPBM7Pz86SzwHOk88Yzs/Pz87P1OmBjJaco6qxt77FzMzR1NTZhtwc2dTU0MzKxLy1raWelo6E89nOz8/Oz87Pz87PzoXPgs6GzxPOz8/Pzs/Pz87Pz8/Ozs/Ozs/OhM8Hzs7Pz87PzofPhM4Hz8/Oz8/PzojPCc7Oz8/Oz87PzoXPBc7Pz8/OhM+CzoTPgs6FzwbOz87Pzs6FzwXOz87PzofPgs6Hz4POhc8Gzs7Pz87OhM8Rzs/Oz87Pzs/Oz87Oz87Pz86EzxXOz87Pz8/Oz8/Pzs/Oz8/Oz8/Pzs6Mzw/Q5oKOmKGqs7vFzM7U1NuF3BPU1M/Mxb60q6KZkYby18/Pz87OlM8Wzs7Pz87Oz8/Pzs7Pzs/Pzs/Oz8/PzoXPAc6Fzw3Oz8/Ozs7Pzs/Oz8/Ojc8Dzs/Oh8+CzoXPAc6FzwHOh88Izs/Pzs7Pz86EzwTOz87Oh88BzoTPB87Pzs/Pz86EzwHOjs8Bzo/PAc6EzwHOjs8Ezs/OzoTPA87Pz4TOBs/Oz87PzoXPB87Ozs/Pz86IzwLOz4XOCc/Oz8/Ozs7PzoXPBs7ahqG71eDc5oCngf+A3oClgf+A4YCegf+A/4CRgOSBAgIEAOvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3OvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3OvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3O2AmYH/gP+A/4D/gP+A/4ChgN+BAgIEAP/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P+A/4D/gP+A/4D/gP+ArIDbgQICBAD/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/gP+A/4D/gP+A/4D/gLGA1oECAgQA/8n/yf/J/8n/yf/J/8m0yQbO+ZOpv9XN3P/J/8n/yf/J/8n/yf/JtMkGzvmTqb/Vzdz/yf/J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AgQA/5n/mf+Z/5mlmQKRxIe+AoCG/4qpigL2pYe+Afa7mQHwhb4Bsf+KtYoBxYW+Acelmf+Z/5n/mf+ZpZkCkcSHvgKAhv+KqYoC9qWHvgH2u5kB8IW+AbH/irWKAcWFvgHHpZn/mf+Z/5n/maWZApHEh74CgIb/iqmKAvalh74B9ruZAfCFvgGx/4q1igHFhb4Bx6WZ/4D/gP+A/4CmgIh/AYH/gqqCAoGAiH+7gIZ/AYH/grWCAYGGf6WAAgIEAP+Y/5j/mP+YpZgB0oa8AsCp/4qsigKCyoe8Af26mAHdhbwB0v+KtYoCh/2FvAGJpJj/mP+Y/5j/mKWYAdKGvALAqf+KrIoCgsqHvAH9upgB3YW8AdL/irWKAof9hbwBiaSY/5j/mP+Y/5ilmAHShrwCwKn/iqyKAoLKh7wB/bqYAd2FvAHS/4q1igKH/YW8AYmkmP+A/4D/gP+ApYCIfwGB/4KtggGAiH+6gIZ/AYH/graChn+lgAICBAD/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/gP+A/4D/gKSAiH8Bgf+Cr4IBgId/uoCGfwGB/4K2ggGBhn+kgAICBAD/lf+V/5X/laOVAfeGuQLExf+KsIoChcWGuQK/jriVAcSFuQH9/4q2igHOhbkB0aSV/5X/lf+V/5WjlQH3hrkCxMX/irCKAoXFhrkCv464lQHEhbkB/f+KtooBzoW5AdGklf+V/5X/lf+Vo5UB94a5AsTF/4qwigKFxYa5Ar+OuJUBxIW5Af3/iraKAc6FuQHRpJX/gP+A/4D/gKOAiH8Bgf+CsYIBgId/uYCGfwGB/4K2ggGBhn+kgAICBAD/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/gP+A/4D/gKOAh38Bgf+Cs4IBgId/uICGf/+CuIKGf6SAAgIEAP+T/5P/k/+ToZMCjL2GtgGa/4q0igL7hoa2Afy3k4a2/4q4igHLhbYBhaOT/5P/k/+T/5OhkwKMvYa2AZr/irSKAvuGhrYB/LeThrb/iriKAcuFtgGFo5P/k/+T/5P/k6GTAoy9hrYBmv+KtIoC+4aGtgH8t5OGtv+KuIoBy4W2AYWjk/+A/4D/gP+AooCHfwGB/4K0ggKBgId/t4CGf/+CuIIBgIV/pIACAgQA/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/4D/gP+A/4ChgId/AYD/graCAYGHf7eAhn//griCAYGGf6OAAgIEAP+R/5H/kf+RoJEBhYazAoyB/4q3igGjhrMB3rWRAY2FswHq/4q4igHOhbMB1aOR/5H/kf+R/5GgkQGFhrMCjIH/ireKAaOGswHetZEBjYWzAer/iriKAc6FswHVo5H/kf+R/5H/kaCRAYWGswKMgf+Kt4oBo4azAd61kQGNhbMB6v+KuIoBzoWzAdWjkf+A/4D/gP+AoYCGfwGA/4K4ggGBh3+2gIZ//4K4ggGBhn+jgAICBAD/kP+Q/5D/kKCQAdeFsgK22/+KuIoCiLuGsgGCtJABj4ay/4q4igH3hbIBwKOQ/5D/kP+Q/5CgkAHXhbICttv/iriKAoi7hrIBgrSQAY+Gsv+KuIoB94WyAcCjkP+Q/5D/kP+QoJAB14WyArbb/4q4igKIu4ayAYK0kAGPhrL/iriKAfeFsgHAo5D/gP+A/4D/gKCAh38Bgf+CuYIBgIZ/toCGf/+CuIIBgYZ/o4ACAgQA/47/jv+O/46fjgGBhrEBhP+KuooC79GFsQHMtY6Gsf+KuYoB4IWxAYuijv+O/47/jv+On44BgYaxAYT/irqKAu/RhbEBzLWOhrH/irmKAeCFsQGLoo7/jv+O/47/jp+OAYGGsQGE/4q6igLv0YWxAcy1joax/4q5igHghbEBi6KO/4D/gP+A/4CggIZ/AYH/grqCAYGHf7WAhn//grmChn+jgAICBAD/jf+N/43/jZ+NAdaFrwLqgf+Ku4oBoIavAfy0jQG0ha8Bhf+KuIoBqoWvAYSijf+N/43/jf+Nn40B1oWvAuqB/4q7igGghq8B/LSNAbSFrwGF/4q4igGqha8BhKKN/43/jf+N/42fjQHWha8C6oH/iruKAaCGrwH8tI0BtIWvAYX/iriKAaqFrwGEoo3/gP+A/4D/gJ+Ah3//gryCAYGHf7SAhn//grmCAYCFf6OAAgIEAP+M/4z/jP+MnowBgIauAav/iryKAoaIha4BybSMAbqFrgH4/4q4igHgha4B+aKM/4z/jP+M/4yejAGAhq4Bq/+KvIoChoiFrgHJtIwBuoWuAfj/iriKAeCFrgH5ooz/jP+M/4z/jJ6MAYCGrgGr/4q8igKGiIWuAcm0jAG6ha4B+P+KuIoB4IWuAfmijP+A/4D/gP+An4CGfwGB/4K9ggGAhn+0gIZ/AYH/griCAYCGf6KAAgIEAP+L/4v/i/+LnosB24WsAvaF/4q9igG+hqwB+bOLAcCFrAHo/4q4igGIhawB66KL/4v/i/+L/4ueiwHbhawC9oX/ir2KAb6GrAH5s4sBwIWsAej/iriKAYiFrAHroov/i/+L/4v/i56LAduFrAL2hf+KvYoBvoasAfmziwHAhawB6P+KuIoBiIWsAeyii/+A/4D/gP+AnoCHf/+CvoIBgYd/s4CGfwGB/4K4ggGBhn+igAICBAD/iv+K/4r/ip6KAbqFqwGk/4q/igGihasBzbOKAceFqwHU/4q4igGbhasB4aKK/4r/iv+K/4qeigG6hasBpP+Kv4oBooWrAc2zigHHhasB1P+KuIoBm4WrAeGiiv+K/4r/iv+KnooBuoWrAaT/ir+KAaKFqwHNs4oBx4WrAdT/iriKAZuFqwHhoor/gP+A/4D/gJ6Ahn8Bgf+Cv4IBgIZ/s4CGfwGB/4K4ggGBhn+igAICBAD/if+J/4n/iZ2JCPWpqqqqqcOC/4q/igi+qqqpqqqq+7KJB9Gqqampqrv/iriKB6yqqaqpqdiiif+J/4n/if+JnYkI9aqpqaqqw4L/ir+KCL6qqqqpqan7sokH0amqqamqu/+KuIoHrKmqqqmp2KKJ/4n/if+J/4mdiQj1qqmqqqnDgv+Kv4oIvqqpqqqqqfuyiQfRqqmpqqm7/4q4igesqqmpqqrYoon/gP+A/4D/gJ2Ah3//gsCCAYGHf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4j/iP+I/4idiAHShagB7/+KwIoCiIuFqAHWsogB2oWoAaL/iriKAbSFqAHSooj/iP+I/4j/iJ2IAdKFqAHv/4rAigKIi4WoAdayiAHahagBov+KuIoBtIWoAdKiiP+I/4j/iP+InYgB0oWoAe//isCKAoiLhagB1rKIAduFqAGi/4q4igG0hagB0qKI/4D/gP+A/4CdgIZ/AYD/gsGCAYCGf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4b/hv+G/4adhgGzhacBz/+KwYoBrIWnAbWyhgHmhacBhP+KuIoBwoWnAcuihv+G/4b/hv+GnYYBs4WnAc//isGKAayFpwG1soYB5oWnAYT/iriKAcKFpwHLoob/hv+G/4b/hp2GAbOFpwHP/4rBigGshacBtbKGAeaFpwGE/4q4igHChacBy6KG/4D/gP+A/4CdgIZ/AYH/gsGCAYGGf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4D/gP+A/4CcgId//4LDgod/sYCGfwGA/4K4ggGBhn+igAICBAD/hP+E/4T/hJyEAeGFpAH4/4rDigHthaQBzLGEAf6FpAGE/4q4igHBhaQBx6KE/4T/hP+E/4SchAHhhaQB+P+Kw4oB7YWkAcyxhAH+haQBhP+KuIoBwYWkAceihP+E/4T/hP+EnIQB4YWkAfj/isOKAe2FpAHMsYQB/oWkAYT/iriKAcGFpAHHooT/gP+A/4D/gJyAhn8BgP+Cw4IBgIZ/sYCGfwGA/4K4ggGBhn+igAICBAC+gwWArreExrgABcalt6+AkIMFiuymydj/3NPcBdXEpuqKj4MFgK63hMa4AAXGpbevgNuDAceFowG8/4rDigHPhaMBrbKDAaiFowGD/4q3igG+haMBx6KDvoMFgK63hMa4AAXGpbevgJCDBYrspsnY/9zT3AXVxKbqio+D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zADW1wGOhYUB+v+Kx4oB/YWFAY2z1wHNhYUB0f+Kr4oB9IWFAc2l17nXzACG1//c59yF18wA1tcBjoWFAfr/iseKAf2FhQGNs9cBzYWFAdH/iq+KAfSFhQHNpde5f8wAhn//geeBhX/MANx/AYH/gseCAYHAf/+Cr4KsfwICBAC51cwAhtX/3OfchdXMANbVAZyFhAHN/4rHigGDhYQBiLTVAZCFhAHs/4qtigH6hYQBjabVudXMAIbV/9zn3IXVzADW1QGchYQBzf+Kx4oBg4WEAYi01QGQhYQB7P+KrYoB+oWEAY2m1bnVzACG1f/c59yF1cwA1tUBnIWEAc3/iseKAYOFhAGItNUBkIWEAez/iq2KAfqFhAGNptW5f8wAhn//geeBhX/MANx/AYH/gsiCwH8Bgf+CrYIBgax/AgIEALnUzACG1P/c59yF1MwA1tQBqoWDAZ7/iseKhoMBh7TUAaOFgwGw/4qtigHDhYMBnabUudTMAIbU/9zn3IXUzADW1AGqhYMBnv+Kx4qGgwGHtNQBo4WDAbD/iq2KAcOFgwGdptS51MwAhtT/3OfchdTMANbUAaqFgwGe/4rHioaDAYe01AGjhYMBsP+KrYoBw4WDAZ2m1Ll/zACGf/+B54GFf8wA3H8Bgf+CyILAfwGB/4KtggGBrH8CAgQAudLMAIbS/9zn3IXSzADW0gG4hYIB3P+Kx4oBh4WCAYS00gG1hYIB6v+KrYoBiIWCAa+m0rnSzACG0v/c59yF0swA1tIBuIWCAdz/iseKAYeFggGEtNIBtYWCAer/iq2KAYiFggGvptK50swAhtL/3OfchdLMANbSAbiFggHc/4rHigGHhYIBhLTSAbWFggHq/4qtigGIhYIBr6bSuX/MAIZ//4HngYV/zADcfwGA/4LIgsB/AYD/gq2CAYGsfwICBAC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC5f8wAhn//geeBhX/MAN1//4LIgsF//4KtggGArH8CAgQAuc/MAIbP/9zn3IXPzADXzwGI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hcAB0debAobGicACjcPpigOFqtuJwAHuwpu5m8wAhpv/3OfchZvMAOObAcqFwAHt/4qyigGrhcAB0debAobGicACjcPpigOFqtuJwAHuwpu5m8wAhpv/3OfchZvMAOObAcqFwAHt/4qyigGrhcAB0debAobGicACjcPpigOFqtuJwAHuwpu5f8wAhn//geeBhX/MAON/hn4Bgf+CsoIBgYZ+2H+KfgKAgeqCAoF/in7CfwICBAC5m8wAhpv/3OfchZvMAOObAemFwAGj/4qyigGThcAB9NibApPuisADh62E5IoD95azisABgMObuZvMAIab/9zn3IWbzADjmwHphcABo/+KsooBk4XAAfTYmwKT7orAA4ethOSKA/eWs4rAAYDDm7mbzACGm//c59yFm8wA45sB6YXAAaP/irKKAZOFwAH02JsCk+6KwAOHrYTkigP3lrOKwAGAw5u5f8wAhn//geeBhX/MAON/hn4Bgf+CsoIBgIZ+2X+LfgKAgeWCA4GBf4p+xH8CAgQAuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuX/MAIZ//4HngYV/zADkf4V+AYD/grGCAYGGftx/i34Df4GB4IICgYCMfsV/AgIEALmazACGmv/c59yFmswA45oBkoXAAueD/4qwigHqhcAB4NyaApHsjMAD447i2YoE9rHOh4zAAveTxZq5mswAhpr/3OfchZrMAOOaAZKFwALng/+KsIoB6oXAAeDcmgKR7IzAA+OO4tmKBPaxzoeMwAL3k8WauZrMAIaa/9zn3IWazADjmgGShcAC54P/irCKAeqFwAHg3JoCkeyMwAPjjuLZigT2sc6HjMAC95PFmrl/zACGf/+B54GFf8wA5H+Gfv+CsYIBgIZ+3X+NfgN/gYHZggSBgYB/jX7GfwICBAC5mswAhpr/3OfchZrMAOSaAdmFvwG9/4qvigL874W/AYjemgKL2I6/A+S3/NGKBO64/PKOvwLljseauZrM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xf/c59yFxcwA/8X/xf/F/8XCxbl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnKzACGyv/c59yFyswA/8r/yv/K/8rCyrnKzACGyv/c59yFyswA/8r/yv/K/8rCyrnKzACGyv/c59yFyswA/8r/yv/K/8rCyrl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnPzACGz//c59yFz8wA/8//z//P/8/Cz7nPzACGz//c59yFz8wA/8//z//P/8/Cz7nPzACGz//c59yFz8wA/8//z//P/8/Cz7l/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnUzACG1P/c59yF1MwA/9T/1P/U/9TC1LnUzACG1P/c59yF1MwA/9T/1P/U/9TC1LnUzACG1P/c59yF1MwA/9T/1P/U/9TC1Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAudfMAIbX/9zn3IXXzAD/1//X/9f/18LXudfMAIbX/9zn3IXXzAD/1//X/9f/18LXudfMAIbX/9zn3IXXzAD/1//X/9f/18LXuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC528wAhtv/3OfchdvMAP/b/9v/2//bwtu528wAhtv/3OfchdvMAP/b/9v/2//bwtu528wAhtv/3OfchdvMAP/b/9v/2//bwtu5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAud3MAIbd/9zn3IXdzAD/3f/d/93/3cLdud3MAIbd/9zn3IXdzAD/3f/d/93/3cLdud3MAIbd/9zn3IXdzAD/3f/d/93/3cLduX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnezACG3v/c59yF3swA/97/3v/e/97C3rnezACG3v/c59yF3swA/97/3v/e/97C3rnezACG3v/c59yF3swA/97/3v/e/97C3rl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnkzACG5P/c59yF5MwA/+T/5P/k/+TC5LnkzACG5P/c59yF5MwA/+T/5P/k/+TC5LnkzACG5P/c59yF5MwA/+T/5P/k/+TC5Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC55swAhub/3OfchebMAP/m/+b/5v/mwua55swAhub/3OfchebMAP/m/+b/5v/mwua55swAhub/3OfchebMAP/m/+b/5v/mwua5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAuejMAIbo/9zn3IXozAD/6P/o/+j/6MLouejMAIbo/9zn3IXozAD/6P/o/+j/6MLouejMAIbo/9zn3IXozAD/6P/o/+j/6MLouX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnqzACG6v/c59yF6swA/+r/6v/q/+rC6rnqzACG6v/c59yF6swA/+r/6v/q/+rC6rnqzACG6v/c59yF6swA/+r/6v/q/+rC6rl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC57MwAhuz/3OfchezMAP/s/+z/7P/swuy57MwAhuz/3OfchezMAP/s/+z/7P/swuy57MwAhuz/3OfchezMAP/s/+z/7P/swuy5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnwzACG8P/c59yF8MwA//D/8P/w//DC8LnwzACG8P/c59yF8MwA//D/8P/w//DC8LnwzACG8P/c59yF8MwA//D/8P/w//DC8Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC58swAhvL/3OfchfLMAP/y//L/8v/ywvK58swAhvL/3OfchfLMAP/y//L/8v/ywvK58swAhvL/3OfchfLMAP/y//L/8v/ywvK5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0ufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0ufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0uX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALn2zACG9v/c59yF9swA//b/9v/2//bC9rn2zACG9v/c59yF9swA//b/9v/2//bC9rn2zACG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p8en/6f/p/+n/6f/p5ynAaKJAAG+/5qOmgGGiQABrf+nx6f/gP+A/4D/gP+AnIABf4kAAYH/go6CAYGJAAF//4DHgAICBAD/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/gP+A/4D/gP+AnIABe4gAAX7/gpCCAX2IAAF7/4DHgAICBAD/qv+q/6r/qv+qm6oBqIkAAaf/mpCaAf+JAAGh/6rGqv+q/6r/qv+q/6qbqgGoiQABp/+akJoB/4kAAaH/qsaq/6r/qv+q/6r/qpuqAaiJAAGn/5qQmgH/iQABof+qxqr/gP+A/4D/gP+Am4ABf4kAAYH/gpCCAYCJAAF//4DGgAICBAD/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/gP+A/4D/gP+Am4ABe4gAAX7/gpKCAXyIAAF6/4DGgAICBAD/rP+s/6z/rP+smqwBp4kAAYz/mpKaAYOJAAGD/6zFrP+s/6z/rP+s/6yarAGniQABjP+akpoBg4kAAYP/rMWs/6z/rP+s/6z/rJqsAaeJAAGM/5qSmgGDiQABg/+sxaz/gP+A/4D/gP+AmoABf4kAAYH/gpKCAYGJAAF//4DFgAICBAD/rv+u/67/rv+uma4CnJiIAAKujP+akpoCi8KJAAGL/67Erv+u/67/rv+u/66ZrgKcmIgAAq6M/5qSmgKLwokAAYv/rsSu/67/rv+u/67/rpmuApyYiAACroz/mpKaAovCiQABi/+uxK7/gP+A/4D/gP+AmoABe4gAAX3/gpSCAX2JAP+AxYACAgQA/6//r/+v/6//r5mvAaeJAAGK/5qUmgGQiQABu/+vxK//r/+v/6//r/+vma8Bp4kAAYr/mpSaAZCJAAG7/6/Er/+v/6//r/+v/6+ZrwGniQABiv+alJoBkIkAAbv/r8Sv/4D/gP+A/4D/gJmAAX+JAAGB/4KUggGBiQABfv+AxIACAgQA/7D/sP+w/7D/sJiwAp2FiAACwoz/mpSaAo+uiQAB+v+ww7D/sP+w/7D/sP+wmLACnYWIAALCjP+alJoCj66JAAH6/7DDsP+w/7D/sP+w/7CYsAKdhYgAAsKM/5qUmgKProkAAfr/sMOw/4D/gP+A/4D/gJmAAXuIAAF9/4KWggF+iQABf/+Aw4ACAgQA/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/4D/gP+A/4D/gJiAAX+JAAGB/4KWggGBiQABff+Aw4ACAgQA/7P/s/+z/7P/s5ezAZyJAALVjf+alpoCl66JAAHU/7PCs/+z/7P/s/+z/7OXswGciQAC1Y3/mpaaApeuiQAB1P+zwrP/s/+z/7P/s/+zl7MBnIkAAtWN/5qWmgKXrokAAdT/s8Kz/4D/gP+A/4D/gJiAiQABff+CmIIBf4kAAX//gMKAAgIEAP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+A/4D/gP+A/4CXgAF/iQABgf+CmIIBgYkAAXz/gMKAAgIEAP+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+A/4D/gP+A/4CXgIkAAX3/gpqCAYCJAAF//4DBgAICBAD/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/gP+A/4D/gP+AloABfokAAYH/gpqCAoF6iQD/gMGAAgIEAP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+A/4D/gP+A/4CWgIkAAX7/gpyCAYCJAAF+/4DAgAICBAD/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/gP+A/4D/gP+AlYABfokAAYH/gp2CAX2JAP+AwIACAgQA/7v/u/+7/7v/u5S7AYiJAAKIlf+anZoBj4kAArCv/7u+u/+7/7v/u/+7/7uUuwGIiQACiJX/mp2aAY+JAAKwr/+7vrv/u/+7/7v/u/+7lLsBiIkAAoiV/5qdmgGPiQACsK//u767/4D/gP+A/4D/gJWAiQABf/+CnoIBgYkAAX3/gL+AAgIEAP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+A/4D/gP+A/4CUgAF+iQABgf+Cn4IBfokAAX//gL6AAgIEAP+9/73/vf+9/72TvQHviQACwpj/mp+aAbyJAAKOqf+9vb3/vf+9/73/vf+9k70B74kAAsKY/5qfmgG8iQACjqn/vb29/73/vf+9/73/vZO9Ae+JAALCmP+an5oBvIkAAo+p/729vf+A/4D/gP+A/4CTgAF/iQABf/+CoIIBgYkAAXz/gL6AAgIEAP+//7//v/+//7+SvwKwj4kAAc//mqCaApnpiQABoP+/vb//v/+//7//v/+/kr8CsI+JAAHP/5qgmgKZ6YkAAaD/v72//7//v/+//7//v5K/ArCPiQABz/+aoJoCmemJAAGg/7+9v/+A/4D/gP+A/4CTgAF9iQABgf+CoYIBf4kAAX//gL2AAgIEAP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP+A/4D/gP+A/4CSgAF/iQABgP+CooICgXqJAP+AvYACAgQA/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/4D/gP+A/4D/gJKAAXuJAAGB/4KjggGAiQABfv+AvIACAgQA/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/4D/gP+A/4D/gJGAAX+JAAGA/4KlggF9iQABf/+Au4ACAgQA/8T/xP/E/8T/xJDEAaCJAAKbg/+apZoBoYkAAt2y/8S6xP/E/8T/xP/E/8SQxAGgiQACm4P/mqWaAaGJAALdsv/EusT/xP/E/8T/xP/EkMQBoIkAApuD/5qlmgGhiQAC3bL/xLrE/4D/gP+A/4D/gJGAiQABfP+CpoIBgYkAAXz/gLuAAgIEAP/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf+A/4D/gP+A/4CQgAF+iQABgf+Cp4IBf4kAAX//gLqAAgIEAP/H/8f/x//H/8ePxwGMiQACkY7/mqeaAdqKAAGg/8e5xwTHx8fGlMcBxo7HAcaUxwHGlccBxoXHAcanxwHGkMcBxoTHAcaMxwXGx8fHxoTHAcaJxwHGnccBxqzHAcaPxwHGh8cBxqTHAcaNx4LGjccBxo/HAcaExwHGhscBxofHBMbGx8aPxwHGlscBxrbHAcbIxwHGk8cBxpfHAcaMxwHGl8cBxo7HAsaMiQACkY7/mqeaAdqKAAGghccBxobHBcbHx8fGnMcBxonHAcaSxwHGtMcBxoTHgsaJxwHGpccDxsfH/8f/x//H/8f/x4/HAYyJAAKRjv+ap5oB2ooAAaD/x7nH/4D/gP+A/4D/gJCAiQABfv+CqIIBgYoA/4C6gAICBAD/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/gP+A/4D/gP+Aj4ABfYkAAYH/gqmCAYCJAAF+/4C5gAICBAD/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/gP+A/4D/gP+AjoABf4kAAX//gquCAX2JAAF//4C4gAICBAD/yv/K/8r/yv/KjcoCs+WJAAHJ/5qrmgGdiQACpbT/yrfK/8r/yv/K/8r/yo3KArPliQAByf+aq5oBnYkAAqW0/8q3yv/K/8r/yv/K/8qNygKz5YkAAcn/mquaAZ2JAAKltP/Kt8r/gP+A/4D/gP+AjoABe4kAAYH/gquCAYGJAAF8/4C4gAICBAD/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/gP+A/4D/gP+AjYABf4kAAYD/gq2CAX+JAAF//4C3gAICBAD/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/gP+A/4D/gP+AjYCJAAJ7gf+CrYIBgYoA/4C3gAICBAD/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/gP+A/4D/gP+AjIABfokAAYD/gq+CAYCJAAF9/4C2gAICBAD/z//P/8//z//Pi88BhokAAoiM/5qvmgKJ/IkAAcb/z7XP/8//z//P/8//z4vPAYaJAAKIjP+ar5oCifyJAAHG/8+1z//P/8//z//P/8+LzwGGiQACiIz/mq+aAon8iQABxv/Ptc//gP+A/4D/gP+AjICJAAF+/4KxggF9iQABf/+AtYACAgQA/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/4D/gP+A/4D/gIuAAXyJAAGB/4KxggGBigD/gLWAAgIEAP/S/9L/0v/S/9KK0gG7iQACrpb/mrGaApmDiQCCxf/Ss9L/0v/S/9L/0v/SitIBu4kAAq6W/5qxmgKZg4kAgsX/0rPS/9L/0v/S/9L/0orSAbuJAAKulv+asZoCmYOJAILF/9Kz0v+A/4D/gP+A/4CKgAF/iQABf/+Cs4IBgIkAAX3/gLSAAgIEAP/T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0//T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0//T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0/+A/4D/gP+A/4CKgIoAAYH/grOCAoF8iQABf/+As4ACAgQA/9T/1P/U/9T/1InUAcuJAAG2/5q1mgGPigABlP/UstT/1P/U/9T/1P/UidQBy4kAAbb/mrWaAY+KAAGU/9Sy1P/U/9T/1P/U/9SJ1AHLiQABtv+atZoBj4oAAZT/1LLU/4D/gP+A/4D/gImAAX6JAAGA/4K1ggGBigD/gLOAAgIEAP/V/9X/1f/V/9WI1QGCiQACm4b/mrWaApSliQACtcX/1bHV/9X/1f/V/9X/1YjVAYKJAAKbhv+atZoClKWJAAK1xf/VsdX/1f/V/9X/1f/ViNUBgokAApuG/5q1mgKUpYkAArXF/9Wx1f+A/4D/gP+A/4CJgIkAAX3/greCAX+JAAF9/4CygAICBAD/1v/W/9b/1v/Wh9YCt7yJAAGZ/5q3mgLjm4kAAcD/1rHW/9b/1v/W/9b/1ofWAre8iQABmf+at5oC45uJAAHA/9ax1v/W/9b/1v/W/9aH1gK3vIkAAZn/mreaAuObiQABwP/Wsdb/gP+A/4D/gP+AiIABe4kAAYH/greCAoF6iQABf/+AsYACAgQA/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/4D/gP+A/4D/gIeAAX6JAAF//4K5ggGBigD/gLGAAgIEAP/Z/9n/2f/Z/9mG2QGtigAB2f+auZoClL2JAAKVxP/Zr9n/2f/Z/9n/2f/ZhtkBrYoAAdn/mrmaApS9iQAClcT/2a/Z/9n/2f/Z/9n/2YbZAa2KAAHZ/5q5mgKUvYkAApXE/9mv2f+A/4D/gP+A/4CGgAF/igABgf+CuoIBf4kAAX3/gLCAAgIEAP/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v+A/4D/gP+A/4CFgAF/igABgP+Cu4ICgXyJAAF//4CvgAICBAD/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/gP+A/4D/gP+AhIABf4oAAX7/gr2CAYGKAAF//4CugAICBAD/3P/c/9z/3P/cBNzc3JyLAAHQ/5q9mgKX94oAAZj/3K3c/9z/3P/c/9z/3ATc3NyciwAB0P+avZoCl/eKAAGY/9yt3P/c/9z/3P/c/9wE3NzcnIsAAdD/mr2aApf3igABmP/crdz/gP+A/4D/gP+AhICLAAGB/4K+ggF/igD/gK6AAgIEAP/d/93/3f/d/90E3d3G+ooAAYH/mr+aAoGuiQACrcv/3azd/93/3f/d/93/3QTd3cb6igABgf+av5oCga6JAAKty//drN3/3f/d/93/3f/dBN3dxvqKAAGB/5q/mgKBrokAAq3L/92s3f+A/4D/gP+A/4AEgICAfIoAAYH/gsCCAX2JAAF9/4CtgAICBAD/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/gP+A/4D/gP+AA4CAfYoAAX//gsGCAYGKAAF+/4CsgAICBAAD4ODfh+AM3+Df4ODf4ODg3+DfhuBe3+Df4ODf4ODf4ODf4N/f3+Df4N/f4ODf3+Dg4N/g39/g4N/f4N/f4ODf4ODg3+Df4ODg39/f4ODf4N/g3+Df3+Df4ODf3+Df4N/g4ODf3+Df3+Dg4N/g4ODf3+Dg34XgAd+H4AHfh+AB34TgIN/f3+Df4ODg39/g3+Dg3+Df4ODf3+Dg39/g4ODf4N/fhuAX3+Df4N/g3+Dg39/g4N/f4N/g4ODf39+E4ATf4ODfheAN3+Df3+Df3+Df4ODf34TgGt/g39/g4N/g4N/g3+Df4ODg3+Df4ODf4N/fhOAG39/f4ODfhOAB34ngBd/f4ODfi+AF39/f4N+F4ILfheAY3+Dg4N/g4N/g4ODf4N/f3+Dg39/f4ODfhOCE34Tggt+E4ATf4ODfhOAF39/f4N+I4AHfhOAH3+Dg4N/g34bgiN8l4ODf4N/g3+Dg4N/f4ODg3+Df3+Dg39/g4N/g4N/g4N/g3+Dg34Tght+D4IXfCODg3+Dg4N/fhOAF39/g39+F4Arf4ODf3+Df4ODghN8b4N/f4ODf4ODf3+Dg39/f4N/g4ODf4ODg3+DfhuAE39/g34bgBd/f4ODfhOAN3+Df4ODf39/g3+Df4ITfEeDg3+Dg39/g4N/g4ODf4N/fheAm39/g3+Df3+Df3+Dg4N/g39/g39/f4ODf3+Dg4N/g4ODf3+Dg4N+E4ALPqIoAAsyH/5rCmgHMigAGs9/f4ODfhOAW3+Dg3+Df4N/f4N/f3+Dg4N/g39/g34XgB9/f3+Dg39+F4APf4N+F4Aff3+Df4N/ghN+C4ITfBODf39+E4B7f3+Dg39/f4N/f4N/g4ODf4N/g4ODf39/g4ODf39+E4ILfhOAF3+Dg4N+E4Cjf39/g3+Dg3+Df39/g3+Dg4N/g4N/g3+Dg4N/g4N/g4ODf4N/f4ODfC9/g4N/f4N/f3+Dght8j4N/f4ODg3+Dg3+Df4ODf4N/f4ODf3+Dg39/f4ODg3+Df4OCK3wjg39/f4N/f4ITfA+Df4ITfEODg39/f4N/g39/g39/f4N+E4Ajf39/g3+Dg4IXfJODf3+Df39/g39/g39/g4N/g39/g4N/g39/g39/g4N/f4N/g34TgBd/f3+Dghd+D4ITfN+Dg4N/g39/g3+Df4N/f3+Df4N/f3+Df4N/f3+Df39/g4N/g3+Dg4N/f4N/f4N/g4ODf4N/f3+CE3xDg39/f4ODf3+Df3+Df39/gid8N4N/g39/g3+Df39/g4IffCeDf4ODg39/g4I7fBeDf4N/fhOAI3+Df4ODf4OCI3xbg3+Dg4N/g3+Df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z//PiM//z//P/8//z//P/8//z//PiM//gP+A/4D/gP+A/4D/gP+AiIACAgQA/83/zf/N/83/zf/N/83/zYjN/83/zf/N/83/zf/N/83/zYjN/83/zf/N/83/zf/N/83/zYjN/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP/L/8v/y//L/8v/y//L/8uIy//L/8v/y//L/8v/y//L/8uIy//L/8v/y//L/8v/y//L/8uIy/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/yf/J/8n/yf/J/8n/yf/JiMn/yf/J/8n/yf/J/8n/yf/JiMn/yf/J/8n/yf/J/8n/yf/JiMn/gP+A/4D/gP+A/4D/gP+AiIACAgQA/8f/x//H/8f/x//H/8f/x4jH/8f/x//H/8f/x//H/8f/x4jH/8f/x//H/8f/x//H/8f/x4jH/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP/F/8X/xf/F/8X/xf/F/8WIxf/F/8X/xf/F/8X/xf/F/8WIxf/F/8X/xf/F/8X/xf/F/8WIxf+A/4D/gP+A/4D/gP+A/4CIgAICBAD/w//D/8P/w//D/8P/w//DiMP/w//D/8P/w//D/8P/w//DiMP/w//D/8P/w//D/8P/w//DiMP/gP+A/4D/gP+A/4D/gP+AiIACAgQA/8H/wf/B/8H/wf/B/8H/wYjB/8H/wf/B/8H/wf/B/8H/wYjB/8H/wf/B/8H/wf/B/8H/wYjB/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+//7//v/+//7//v/+//7+Iv/+//7//v/+//7//v/+//7+Iv/+//7//v/+//7//v/+//7+Iv/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/vf+9/73/vf+9/73/vf+9iL3/vf+9/73/vf+9/73/vf+9iL3/vf+9/73/vf+9/73/vf+9iL3/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7v/u/+7/7v/u/+7/7v/u4i7/7v/u/+7/7v/u/+7/7v/u4i7/7v/u/+7/7v/u/+7/7v/u4i7/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+6/7r/uv+6/7r/uv+6/7qIuv+6/7r/uv+6/7r/uv+6/7qIuv+6/7r/uv+6/7r/uv+6/7qIuv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/uP+4/7j/uP+4/7j/uP+4iLj/uP+4/7j/uP+4/7j/uP+4iLj/uP+4/7j/uP+4/7j/uP+4iLj/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7b/tv+2/7b/tv+2/7b/toi2/7b/tv+2/7b/tv+2/7b/toi2/7b/tv+2/7b/tv+2/7b/toi2/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+0/7T/tP+0/7T/tP+0/7SItP+0/7T/tP+0/7T/tP+0/7SItP+0/7T/tP+0/7T/tP+0/7SItP+A/4D/gP+A/4D/gP+A/4CIgAICBAD/s/+z/7P/s/+z/7P/s/+ziLP/s/+z/7P/s/+z/7P/s/+ziLP/s/+z/7P/s/+z/7P/s/+ziLP/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7H/sf+x/7H/sf+x/7H/sYix/7H/sf+x/7H/sf+x/7H/sYix/7H/sf+x/7H/sf+x/7H/sYix/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+v/6//r/+v/6//r/+v/6+Ir/+v/6//r/+v/6//r/+v/6+Ir/+v/6//r/+v/6//r/+v/6+Ir/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/rv+u/67/rv+u/67/rv+uiK7/rv+u/67/rv+u/67/rv+uiK7/rv+u/67/rv+u/67/rv+uiK7/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6z/rP+s/6z/rP+s/6z/rIis/6z/rP+s/6z/rP+s/6z/rIis/6z/rP+s/6z/rP+s/6z/rIis/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+q/6r/qv+q/6r/qv+q/6qIqv+q/6r/qv+q/6r/qv+q/6qIqv+q/6r/qv+q/6r/qv+q/6qIqv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/qf+p/6n/qf+p/6n/qf+piKn/qf+p/6n/qf+p/6n/qf+piKn/qf+p/6n/qf+p/6n/qf+piKn/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6f/p/+n/6f/p/+n/6f/p4in/6f/p/+n/6f/p/+n/6f/p4in/6f/p/+n/6f/p/+n/6f/p4in/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+m/6b/pv+m/6b/pv+m/6aIpv+m/6b/pv+m/6b/pv+m/6aIpv+m/6b/pv+m/6b/pv+m/6aIpv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/pf+l/6X/pf+l/6X/pf+liKX/pf+l/6X/pf+l/6X/pf+liKX/pf+l/6X/pf+l/6X/pf+liKX/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6P/o/+j/6P/o/+j/6P/o4ij/6P/o/+j/6P/o/+j/6P/o4ij/6P/o/+j/6P/o/+j/6P/o4ij/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+i/6L/ov+i/6L/ov+i/6KIov+i/6L/ov+i/6L/ov+i/6KIov+i/6L/ov+i/6L/ov+i/6KIov+A/4D/gP+A/4D/gP+A/4CIgAICBAD/of+h/6H/of+h/6H/of+hiKH/of+h/6H/of+h/6H/of+hiKH/of+h/6H/of+h/6H/of+hiKH/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6D/oP+g/6D/oP+g/6D/oIig/6D/oP+g/6D/oP+g/6D/oIig/6D/oP+g/6D/oP+g/6D/oIig/4D/gP+A/4D/gP+A/4D/gIiAAgIEAAKfnoefBJ6fn56EnwGeiZ8Nnp+fnp+fnp+en56fnoafBJ6fn56EnwGehp8Enp+enoefB56enp+fn56HnwSen5+eiJ+CnoufAZ6OnwGehJ8BnoWfAZ6Hnwien5+fnp+fnpGfAZ6PnwWenp+enoafAZ6MnwGehJ8BnoafAZ6In4KekJ+CnpafAZ6MnwWen5+fnoSfAZ6UnwGeip8BnoSfg56UnwGejJ8BnoafB56en56fn56GnwGehZ8Hnp+fnp+fno+fAZ6KnwGehJ8BnomfAZ6FnwOen56HnwGekZ8BnoefBp6fnp+fnoafg56HnwGeip8BnoyfAZ6GnwWen5+fnoifCZ6fn5+enp+fnomfAZ6NnwGehp8Bnoyfgp6GnwGehJ8BnoafAZ6PnwGehJ8BnoqfAZ6Jnweenp+fnp+eiZ8Enp+fnoSfBJ6fn56GnwGehZ+CnoafAZ6Inwaen56en56Hn4KejZ8Jnp+fnp+fnp6ehJ8BnpGfAZ6EnwGeiZ8Fnp+fn56GnxSen5+fnp+fn56enp+fn56en5+fnoafgp6EnwGehZ+CnoifBZ6fn5+eip8BnpGfAZ6TnwGeip8BnqyfAZ6NnwSen5+ehJ8Mnp+fnp+fn56fn5+ehJ8BnomfAZ6Mn4Wfg56EnwWen5+fnoSfA56fnoefg56Jn4KehZ8Fnp+fn56FnwGelp8Gnp+enp+eh58Gnp+fn56ehJ8BnoWfCp6en56fnp+fn56FnwOen56Gnwmen56fn56fnp6GnwGehZ+CnoSfBp6fn56fnoifAZ6KnwGehZ8Bnomfgp6EnxSenp+fnp+fnp+fnp6fn56fnp+fnoqfE56enp+fnp6en5+fnp6fnp+fn56Gn4KehJ8BnoSfCp6fn5+en56fn56Enweenp+fnp+ehJ8Gnp+fn56ehZ8Gnp+en5+ehJ8Jnp6fn5+enp+ehp8Snp+fn56fnp6fn5+en5+en56fhJ4Ln5+fnp+fnp+en56Fnwyenp6fn5+en56fn5+EngOfn56En4KehZ8Fnp+en56FnwGeip8Nnp6fn56fn5+en56enoSfAZ6Enwqenp+fnp+en5+eiZ8BnoSfCZ6fn56fn56fnoifAZ6HnwGehJ8BnoWfCJ6enp+fnp+ekJ8Knp+fnp+fnp+fn4SeEZ+fn56fnp+enp6fn56fn5+ei58anp6fnp6fn5+en5+enp+fnp+en5+enp+fn56JnwSen56eh58BnoSfBZ6fn5+emZ8fnp+fn56fn56fn56fn56en56fnp+en5+fnp6en5+fnoafDp6fnp6fn5+en56fnp+ehJ8BnoSfBp6fnp+enoWfCZ6enp+en5+fnoWfEZ6fn56fn5+en56fnp6en5+ei5+CnoefCJ6fnp+fnp+ehJ8BnomfAZ6JnwGehp8Knp6fn56enp+fnoefBJ6fn56Fn4Keh58Fnp+fnp6Fnween5+en56fhJ4Cn56JnwGeiZ8Gnp+fnp+ehZ8Fnp6fnp6Gn4KehJ8BnoWfg56Gn4KehZ8BnoefAZ6EnwSen5+ehp8Hnp+fn56enoSfAZ6FnwWenp6fnoSfA56fnoWfCJ6enp+fnp+ejJ8Enp6fn4ifBZ6fn5+ek58BnoSfAZ6PnwGekp8BnpafAZ6MnwWen5+fnoSfAZ6fnwGehZ+CnqGfAZ6GnwGehZ8BnoafAZ6InwGesp8Dnp+emZ8BnoefBp6fnp+fnoafgp6WnwGejZ8BnpefAZ6OnwGehJ8BnoafAZ6Lnwaen5+fnp6HnwGehp8BnoyfBZ6en5+ehZ8Fnp6fn56ZnwGehJ8BnpCfAZ6LnwGeiJ8BnpSfBZ6en5+ejp8Fnp6fn56Onw6en56fnp+en5+fnp+fnp6fAZ6TnwGenJ8BnoqfAZ6qnwOen56On4KejJ8Enp+fnpGfAZ6TnwGehJ8BnpGfBp6fn5+enpOfAZ6OnwGehJ8BnoefAZ6GnwGeip8BnpGfAZ6Vn4KelJ8Bno2fA56fnqaf/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+d/53/nf+d/53/nf+d/52Inf+d/53/nf+d/53/nf+d/52Inf+d/53/nf+d/53/nf+d/52Inf+A/4D/gP+A/4D/gP+A/4CIgAICBAD/nP+c/5z/nP+c/5z/nP+ciJz/nP+c/5z/nP+c/5z/nP+ciJz/nP+c/5z/nP+c/5z/nP+ciJz/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5z/nP+c/5z/nP+c/5z/nIic/5z/nP+c/5z/nP+c/5z/nIic/5z/nP+c/5z/nP+c/5z/nIic/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+b/5v/m/+b/5v/m/+b/5uIm/+b/5v/m/+b/5v/m/+b/5uIm/+b/5v/m/+b/5v/m/+b/5uIm/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/mv+a/5r/mv+a/5r/mv+aiJr/mv+a/5r/mv+a/5r/mv+aiJr/mv+a/5r/mv+a/5r/mv+aiJr/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5n/mf+Z/5n/mf+Z/5n/mYiZ/5n/mf+Z/5n/mf+Z/5n/mYiZ/5n/mf+Z/5n/mf+Z/5n/mYiZ/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+Y/5j/mP+Y/5j/mP+Y/5iImP+Y/5j/mP+Y/5j/mP+Y/5iImP+Y/5j/mP+Y/5j/mP+Y/5iImP+A/4D/gP+A/4D/gP+A/4CIgAICBAD/mP+Y/5j/mP+Y/5j/mP+YiJj/mP+Y/5j/mP+Y/5j/mP+YiJj/mP+Y/5j/mP+Y/5j/mP+YiJj/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5f/l/+X/5f/l/+X/5f/l4iX/5f/l/+X/5f/l/+X/5f/l4iX/5f/l/+X/5f/l/+X/5f/l4iX/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+X/5f/l/+X/5f/l/+X/5eIl/+X/5f/l/+X/5f/l/+X/5eIl/+X/5f/l/+X/5f/l/+X/5eIl/+A/4D/gP+A/4D/gP+A/4CIgA==",Xg={enabled:!0,imageUrl:uh,useAsBackground:!1,rotateY:0,globalEnvIntensity:1,exposure:1,replaceLights:!1};class Wg{constructor(e,t,n={}){O(this,"originalBackground"),O(this,"renderer"),O(this,"scene"),O(this,"pmrem"),O(this,"currentEnvRT",null),O(this,"currentBackgroundCube",null),O(this,"sourceImage",null),O(this,"options"),this.renderer=e,this.scene=t,this.originalBackground=this.scene.background,this.pmrem=new qs(e),this.options={...Xg,...n},this.loadHDRImage(this.options.imageUrl).then(i=>{this.sourceImage=i,this.update()})}dispose(){var e;this.pmrem.dispose(),(e=this.sourceImage)==null||e.dispose(),this.sourceImage=null,this.clearEnvironment()}clearEnvironment(){this.scene.environment=null,this.scene.background=this.originalBackground,this.currentEnvRT&&(this.currentEnvRT.texture.dispose(),this.currentEnvRT.dispose(),this.currentEnvRT=null),this.currentBackgroundCube&&(this.currentBackgroundCube.texture.dispose(),this.currentBackgroundCube.dispose(),this.currentBackgroundCube=null)}update(){if(!this.sourceImage){this.clearEnvironment();return}const e=new nh,t=new xi(10,60,40),n=new ki({map:this.sourceImage,side:xt}),i=new At(t,n);i.scale.set(1,1,-1),i.rotation.y=this.options.rotateY??0,e.add(i);const r=this.renderer.toneMapping,a=this.renderer.outputColorSpace;this.renderer.toneMapping=un,this.renderer.outputColorSpace=Vt;const o=new Wc(1024,{type:ln});new kc(.1,1e3,o).update(this.renderer,e),this.renderer.toneMapping=r,this.renderer.outputColorSpace=a;const c=this.pmrem.fromCubemap(o.texture);this.currentEnvRT&&(this.currentEnvRT.texture.dispose(),this.currentEnvRT.dispose(),this.currentEnvRT=null),this.currentBackgroundCube&&(this.currentBackgroundCube.texture.dispose(),this.currentBackgroundCube.dispose(),this.currentBackgroundCube=null),this.currentEnvRT=c,this.scene.environment=c.texture,this.options.useAsBackground?(this.scene.background=o.texture,this.currentBackgroundCube=o):(this.scene.background=this.originalBackground,o.texture.dispose(),o.dispose())}setRenderer(e){this.renderer=e,this.pmrem.dispose(),this.pmrem=new qs(e),this.update()}async setImageUrl(e){var t;this.options.imageUrl=e??uh,(t=this.sourceImage)==null||t.dispose(),this.sourceImage=null,this.sourceImage=await this.loadHDRImage(this.options.imageUrl),this.update()}setRotationY(e){this.options.rotateY=e,this.update()}setUseAsBackground(e){this.options.useAsBackground=e,this.update()}async loadHDRImage(e){const t=await new kg().loadAsync(e);return t.mapping=Os,t}setGlobalEnvIntensity(e){console.warn("setGlobalEnvIntensity is deprecated and does nothing.")}setExposure(e){console.warn("setExposure is deprecated and does nothing.")}disable(){console.warn("disable is deprecated and does nothing. Environment is enabled by default.")}async enable(){this.update()}}const dh={canvas:void 0,antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"highp",stencil:!1,depth:!0,logarithmicDepthBuffer:!0,shadows:!0,shadowQuality:"high"};class Vg{constructor(e,t,n){O(this,"isDIVERenderer",!0),O(this,"_webglrenderer"),O(this,"_environment"),O(this,"_settings"),this._scene=e,this._camera=t,this._settings={...dh,...n??{}},this._webglrenderer=this._createWebGLRenderer(),this._environment=new Wg(this._webglrenderer,this._scene)}get webglrenderer(){return this._webglrenderer}get environment(){return this._environment}get canvas(){return this._webglrenderer.domElement}render(){this._webglrenderer.render(this._scene,this._camera)}onResize(e,t){this._webglrenderer.setSize(e,t)}dispose(){this._environment.dispose(),this._webglrenderer.dispose()}setCanvas(e){this._webglrenderer.dispose(),this._settings.canvas=e,this._webglrenderer=this._createWebGLRenderer(),this._environment.setRenderer(this._webglrenderer)}_createWebGLRenderer(){const e=new Qp(this._settings);return e.shadowMap.enabled=this._settings.shadows,e.shadowMap.type=this._settings.shadowQuality==="high"?yc:this._settings.shadowQuality==="medium"?ta:Ph,e.setPixelRatio(window.devicePixelRatio),e.outputColorSpace=Rt,e.toneMapping=Pc,e.toneMappingExposure=1,e}}class jg{constructor(e,t){O(this,"isDIVEResizeManager",!0),O(this,"_resizeObserver"),O(this,"_width",0),O(this,"_height",0),this._renderer=e,this._camera=t,this._resizeObserver=new ResizeObserver(n=>{const i=n[0],{width:r,height:a}=i.contentRect;r===this._width&&a===this._height||(this._camera.onResize(r,a),this._renderer.onResize(r,a),this._width=r,this._height=a,this._renderer.render())}),this._observeCanvas(this._renderer.canvas)}setCanvas(e){this._resizeObserver.disconnect(),this._observeCanvas(e);const{width:t,height:n}=e.getBoundingClientRect();this._camera.onResize(t,n),this._renderer.onResize(t,n),this._width=t,this._height=n,this._renderer.render()}dispose(){this._resizeObserver.disconnect()}_observeCanvas(e){if(e.parentElement)this._resizeObserver.observe(e.parentElement);else{const t=setInterval(()=>{e.parentElement&&(this._resizeObserver.observe(e.parentElement),clearInterval(t))},16)}}}class Mc{constructor(e,t,n){O(this,"isDIVEView",!0),O(this,"uuid",sa.generateUUID()),O(this,"_paused",!1),O(this,"_renderer"),O(this,"_resizeManager"),this._scene=e,this._camera=t,this._settings=n,this._renderer=new Vg(this._scene,this._camera,this._settings),this._resizeManager=new jg(this._renderer,this._camera)}get renderer(){return this._renderer}get camera(){return this._camera}get canvas(){return this._renderer.canvas}tick(){this._paused||this._renderer.render()}dispose(){this._resizeManager.dispose(),this._renderer.dispose()}onResize(e,t){this._renderer.onResize(e,t),this._camera.onResize(e,t)}setCanvas(e){this._renderer.setCanvas(e),this._resizeManager.setCanvas(e),this.onResize(this._renderer.canvas.clientWidth,this._renderer.canvas.clientHeight)}pause(){this._paused=!0}resume(){this._paused=!1}}class Zg extends qe{constructor(){super(),O(this,"isDIVELight",!0),O(this,"isDIVEAmbientLight",!0),O(this,"isSelectable",!0),O(this,"_light"),this.name="DIVEAmbientLight",this._light=new bg(16777215,1),this._light.layers.mask=Wt,this.add(this._light)}setColor(e){this._light.color=e}setIntensity(e){this._light.intensity=e}setEnabled(e){this._light.visible=e}}class Qg extends qe{constructor(){super(),O(this,"isDIVELight",!0),O(this,"isDIVEPointLight",!0),O(this,"isMovable",!0),O(this,"isSelectable",!0),O(this,"gizmo",null),O(this,"light"),O(this,"mesh"),this.name="DIVEPointLight",this.light=new Pg(16777215,1),this.light.layers.mask=Wt,this.light.castShadow=!0,this.light.shadow.mapSize.width=512,this.light.shadow.mapSize.height=512,this.add(this.light);const e=.1,t=new xi(e,e*320,e*320),n=new ki({color:this.light.color,transparent:!0,opacity:.8,side:kt});this.mesh=new At(t,n),this.mesh.layers.mask=lh,this.add(this.mesh)}setColor(e){this.light.color=e,this.mesh.material.color=e}setIntensity(e){this.light.intensity=e,this.mesh.material.opacity=e>.8?.8:e*.8}setEnabled(e){this.light.visible=e}onMove(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.position})})}onSelect(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("SELECT_OBJECT",{id:this.userData.id})})}onDeselect(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("DESELECT_OBJECT",{id:this.userData.id})})}}class Jg extends qe{constructor(){super(),O(this,"isDIVELight",!0),O(this,"isDIVESceneLight",!0),O(this,"isSelectable",!0),O(this,"_hemiLight"),O(this,"_dirLight"),this.name="DIVESceneLight",this._hemiLight=new Mg(16777215,16777215,2),this._hemiLight.layers.mask=Wt,this._hemiLight.position.set(0,50,0),this._hemiLight.visible=!0,this.add(this._hemiLight),this._dirLight=new Cg(16777215,3),this._dirLight.layers.mask=Wt,this._dirLight.position.set(1,1.75,1),this._dirLight.position.multiplyScalar(30),this._dirLight.castShadow=!0,this._dirLight.visible=!0,this._dirLight.shadow.mapSize.width=2048,this._dirLight.shadow.mapSize.height=2048;const e=5;this._dirLight.shadow.camera.left=-5,this._dirLight.shadow.camera.right=e,this._dirLight.shadow.camera.top=e,this._dirLight.shadow.camera.bottom=-5,this._dirLight.shadow.camera.far=3500,this.add(this._dirLight)}setColor(e){this._hemiLight.color=e,this._dirLight.color=e}setIntensity(e){this._hemiLight.intensity=e*2,this._dirLight.intensity=e*3}setEnabled(e){this._hemiLight.visible=e,this._dirLight.visible=e}}const Ah=s=>s.parent?Ah(s.parent):s;class ga extends qe{constructor(){super(),O(this,"isSelectable",!0),O(this,"isMovable",!0),O(this,"isDIVENode",!0),O(this,"gizmo",null),O(this,"_positionWorldBuffer"),O(this,"_boundingBox"),this.layers.mask=Wt,this._positionWorldBuffer=new B,this._boundingBox=new bt}setPosition(e){if(!this.parent){this.position.set(e.x,e.y,e.z);return}const t=new B(e.x,e.y,e.z);this.position.copy(this.parent.worldToLocal(t)),"isDIVEGroup"in this.parent&&this.parent.updateLineTo(this)}setRotation(e){this.rotation.set(e.x,e.y,e.z)}setScale(e){this.scale.set(e.x,e.y,e.z)}setVisibility(e){this.visible=e}setToWorldOrigin(){this.position.set(0,0,0),Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.getWorldPosition(this._positionWorldBuffer),rotation:this.rotation,scale:this.scale})})}onMove(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.getWorldPosition(this._positionWorldBuffer),rotation:this.rotation,scale:this.scale})})}onSelect(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("SELECT_OBJECT",{id:this.userData.id})})}onDeselect(){Et(async()=>{const{State:e}=await import("./index-C73jHs0W.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("DESELECT_OBJECT",{id:this.userData.id})})}}class Jr extends ga{constructor(e,t=!1,n=65280){super(),O(this,"_box"),O(this,"_sphere"),O(this,"_center"),O(this,"_radius"),O(this,"_boxHelper"),O(this,"_sphereHelper"),O(this,"_size");const i=new bt;t?i.setFromObject(e):(e.updateWorldMatrix(!0,!0),e.traverse(a=>{if(!("isMesh"in a)||!a.isMesh)return;const o=a;o.geometry.computeBoundingBox(),o.geometry.boundingBox&&i.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld))})),this.rotation.copy(e.rotation),this._box=i,this._size=i.getSize(new B),this._center=i.getCenter(new B),this._boxHelper=new Fg(this._box,n),this._boxHelper.visible=!1,this.add(this._boxHelper),this._sphere=i.getBoundingSphere(new jt),this._radius=this._sphere.radius;const r=new xi(this._radius,32,32);r.translate(this._center.x,this._center.y,this._center.z),this._sphereHelper=new At(r,new ki({color:n,wireframe:!0})),this._sphereHelper.visible=!1,this.add(this._sphereHelper)}get box(){return this._box}get sphere(){return this._sphere}get center(){return this._center}get radius(){return this._radius}get size(){return this._size}setBoxHelperVisible(e){this._boxHelper.visible=e}setSphereHelperVisible(e){this._sphereHelper.visible=e}}class ma extends ga{constructor(){super(),O(this,"isDIVEModel",!0),O(this,"_gltf",null),O(this,"_mesh",null),O(this,"_material",null),O(this,"_assetLoader",null),this.name="DIVEModel",this.userData.isDIVEModel=!0}async _getAssetLoader(){return this._assetLoader||(this._assetLoader=new(await Et(async()=>{const{AssetLoader:e}=await import("./index-BIvGIbL6.js");return{AssetLoader:e}},__vite__mapDeps([3,1,2,4]))).AssetLoader),this._assetLoader}async setFromURL(e){const t=await(await this._getAssetLoader()).load(e);return this.setFromGLTF(t),Et(async()=>{const{State:n}=await import("./index-C73jHs0W.js");return{State:n}},__vite__mapDeps([0,1,2])).then(({State:n})=>{var i;(i=n.get(this.userData.id))==null||i.performAction("MODEL_LOADED",{id:this.userData.id})}),this}setFromGLTF(e){this.clear(),this._boundingBox.makeEmpty();let t=null;return e.traverse(n=>{!t&&n.userData.isDIVEModel&&(t=n),n.castShadow=!0,n.receiveShadow=!0,n.layers.mask=this.layers.mask,this._boundingBox.expandByObject(n),!this._mesh&&"isMesh"in n&&(this._mesh=n,this._material?this._mesh.material=this._material:this._material=n.material)}),t||(t=e),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.add(...t.children),this}setMaterial(e){this._material||(this._material=new Js),e.vertexColors!==void 0&&(this._material.vertexColors=e.vertexColors),e.color!==void 0&&this._material.color.set(e.color),e.map!==void 0&&(this._material.map=e.map),e.normalMap!==void 0&&(this._material.normalMap=e.normalMap),e.roughness!==void 0&&(this._material.roughness=e.roughness),e.roughnessMap!==void 0&&(this._material.roughnessMap=e.roughnessMap,this._material.roughnessMap&&(this._material.roughness=1)),e.metalness!==void 0&&(this._material.metalness=e.metalness),e.metalnessMap!==void 0&&(this._material.metalnessMap=e.metalnessMap,this._material.metalnessMap&&(this._material.metalness=1)),this._mesh&&(this._mesh.material=this._material)}placeOnFloor(){this.updateWorldMatrix(!0,!0);const e=this.getWorldPosition(this._positionWorldBuffer),t=e.clone(),n=new bt;this.children.forEach(r=>{r instanceof Jr||n.expandByObject(r,!0)});const i=-n.min.y;Math.abs(i)<1e-9||(e.y+=i,e.y!==t.y&&(this.setPosition(e),Et(async()=>{const{State:r}=await import("./index-C73jHs0W.js");return{State:r}},__vite__mapDeps([0,1,2])).then(({State:r})=>{var a;(a=r.get(this.userData.id))==null||a.performAction("UPDATE_OBJECT",{id:this.userData.id,position:e,rotation:this.rotation,scale:this.scale})}),this.onMove()))}dropIt(){if(!this.parent){console.warn("DIVEModel: dropIt() called on a model that is not in the scene.",this);return}const e=this.getWorldPosition(this._positionWorldBuffer),t=e.clone(),n=new bt;this.children.forEach(o=>{o instanceof Jr||n.expandByObject(o,!0)});const i=n.getCenter(new B);i.y=n.min.y;const r=new Og(i,new B(0,-1,0));r.layers.mask=Wt;const a=r.intersectObjects(Ah(this).root.children,!0);if(a.length>0){const o=a[0].object,c=new bt().setFromObject(o).max.y-n.min.y;if(Math.abs(c)<1e-9||(e.y+=c,e.y===t.y))return;this.setPosition(e),Et(async()=>{const{State:h}=await import("./index-C73jHs0W.js");return{State:h}},__vite__mapDeps([0,1,2])).then(({State:h})=>{var l;(l=h.get(this.userData.id))==null||l.performAction("UPDATE_OBJECT",{id:this.userData.id,position:e,rotation:this.rotation,scale:this.scale})}),this.onMove()}else this.placeOnFloor()}}class $g extends ma{constructor(){super(),O(this,"isDIVEPrimitive",!0),O(this,"_mesh"),O(this,"_material"),this._mesh=new At,this._mesh.name="PrimitiveMesh",this._mesh.layers.mask=Wt,this._mesh.castShadow=!0,this._mesh.receiveShadow=!0,this.add(this._mesh),this._material=new Js,this._mesh.material=this._material}setGeometry(e){const t=this.assembleGeometry(e);t&&(t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),this._mesh.geometry=t,this._boundingBox.setFromObject(this._mesh))}assembleGeometry(e){switch(this._material.flatShading=!1,e.name.toLowerCase()){case"cylinder":return this.createCylinderGeometry(e);case"sphere":return this.createSphereGeometry(e);case"pyramid":return this._material.flatShading=!0,this.createPyramidGeometry(e);case"cube":case"box":return this.createBoxGeometry(e);case"cone":return this.createConeGeometry(e);case"wall":return this.createWallGeometry(e);case"plane":return this.createPlaneGeometry(e);default:return console.warn("DIVEPrimitive.assembleGeometry: Invalid geometry type:",e.name.toLowerCase()),null}}createCylinderGeometry(e){const t=new Qs(e.width/2,e.width/2,e.height,64);return t.translate(0,e.height/2,0),t}createSphereGeometry(e){return new xi(e.width/2,256,256)}createPyramidGeometry(e){const t=new Float32Array([-e.width/2,0,-e.depth/2,e.width/2,0,-e.depth/2,e.width/2,0,e.depth/2,-e.width/2,0,e.depth/2,0,e.height,0]),n=new Uint16Array([0,1,2,0,2,3,0,4,1,1,4,2,2,4,3,3,4,0]),i=new ht;return i.setAttribute("position",new Pt(t,3)),i.setIndex(new Pt(n,1)),i}createBoxGeometry(e){const t=new bn(e.width,e.height,e.depth);return t.translate(0,e.height/2,0),t}createConeGeometry(e){const t=new fa(e.width/2,e.height,256);return t.translate(0,e.height/2,0),t}createWallGeometry(e){const t=new bn(e.width,e.height,e.depth||.05,16);return t.translate(0,e.height/2,0),t}createPlaneGeometry(e){const t=new bn(e.width,e.height,e.depth);return t.translate(0,e.height/2,0),t}}class em extends ga{constructor(){super(),O(this,"isDIVEGroup",!0),O(this,"_members"),O(this,"_lines"),this.name="DIVEGroup",this._members=[],this._lines=[]}get members(){return this._members}setPosition(e){super.setPosition(e),this._members.forEach(t=>{"isDIVENode"in t&&t.onMove()})}setLinesVisibility(e,t){if(!t){this._lines.forEach(i=>{i.visible=e});return}const n=this._members.indexOf(t);n!==-1&&(this._lines[n].visible=e)}attach(e){if(this._members.includes(e))return this;const t=this.createLine();return this.add(t),this._lines.push(t),super.attach(e),this._members.push(e),this._updateLineTo(t,e),this.setLinesVisibility(!0,e),this}remove(e){const t=this._members.indexOf(e);if(t===-1)return this;const n=this._lines[t];return super.remove(n),this._lines.splice(t,1),super.remove(e),this._members.splice(t,1),this}updateLineTo(e){const t=this._members.indexOf(e);t!==-1&&this._updateLineTo(this._lines[t],e)}createLine(){const e=new ht,t=new rg({color:6710886,dashSize:.05,gapSize:.025}),n=new ha(e,t);return n.visible=!1,n}_updateLineTo(e,t){const n=[new B(0,0,0),t.position.clone()];e.geometry.setFromPoints(n),e.computeLineDistances()}}class tm extends At{constructor(){const e=new Xi(1,1);e.scale(1e3,1e3,1),e.rotateX(-Math.PI/2);const t=new Js({color:new Pe(16777215),side:kt});super(e,t),O(this,"isDIVEFloor",!0),this.name="Floor",this.layers.mask=Wt,this.receiveShadow=!0}setVisibility(e){this.visible=e}setColor(e){this.material.color=new Pe(e)}}class nm extends qe{constructor(){super(),O(this,"isDIVERoot",!0),O(this,"_floor"),this.name="Root",this._floor=new tm,this.add(this._floor)}get floor(){return this._floor}computeSceneBB(){const e=new bt;return this.children.forEach(t=>{"isDIVEFloor"in t||t.traverse(n=>{"isObject3D"in n&&e.expandByObject(n)})}),e}getSceneObject(e){let t;return this.traverse(n=>{t||n.userData.id===e.id&&(t=n)}),t}addSceneObject(e){let t=this.getSceneObject(e);if(t)return console.warn(`DIVERoot.addSceneObject: Scene object with id ${e.id} already exists`),t;switch(e.entityType){case"pov":break;case"light":{switch(e.type){case"scene":{t=new Jg;break}case"ambient":{t=new Zg;break}case"point":{t=new Qg;break}default:throw new Error(`DIVERoot.addSceneObject: Unknown light type: ${e.type}`)}t.name=e.name,t.userData.id=e.id,this.add(t),this._updateLight(t,e);break}case"model":{t=new ma,t.name=e.name,t.userData.id=e.id,t.userData.uri=e.uri,this.add(t),this._updateModel(t,e);break}case"primitive":{t=new $g,t.name=e.name,t.userData.id=e.id,this.add(t),this._updatePrimitive(t,e);break}case"group":{t=new em,t.name=e.name,t.userData.id=e.id,this.add(t),this._updateGroup(t,e);break}default:throw new Error(`DIVERoot.addSceneObject: Unknown entity type: ${e.entityType}`)}return t}updateSceneObject(e){const t=this.getSceneObject(e);if(!t){console.warn(`DIVERoot.updateSceneObject: Scene object with id ${e.id} does not exist`);return}switch(e.entityType){case"pov":break;case"light":{this._updateLight(t,e);break}case"model":{this._updateModel(t,e);break}case"primitive":{this._updatePrimitive(t,e);break}case"group":{this._updateGroup(t,e);break}default:throw new Error(`DIVERoot.updateSceneObject: Unknown entity type: ${e.entityType}`)}}deleteSceneObject(e){const t=this.getSceneObject(e);if(!t){console.warn(`DIVERoot.deleteSceneObject: Object with id ${e.id} not found`);return}switch(e.entityType){case"pov":break;case"light":{this._deleteLight(t);break}case"model":{this._deleteModel(t);break}case"primitive":{this._deletePrimitive(t);break}case"group":{this._deleteGroup(t);break}default:throw new Error(`DIVERoot.deleteSceneObject: Unknown entity type: ${e.entityType}`)}}_updateLight(e,t){t.name!==void 0&&t.name!==null&&(e.name=t.name),t.position!==void 0&&t.position!==null&&e.position.set(t.position.x,t.position.y,t.position.z),t.intensity!==void 0&&t.intensity!==null&&e.setIntensity(t.intensity),t.enabled!==void 0&&t.enabled!==null&&e.setEnabled(t.enabled),t.color!==void 0&&t.color!==null&&e.setColor(new Pe(t.color)),t.visible!==void 0&&t.visible!==null&&(e.visible=t.visible),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updateModel(e,t){t.uri!==void 0&&e.setFromURL(t.uri),t.name!==void 0&&(e.name=t.name),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.material!==void 0&&e.setMaterial(t.material),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updatePrimitive(e,t){t.name!==void 0&&(e.name=t.name),t.geometry!==void 0&&e.setGeometry(t.geometry),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.material!==void 0&&e.setMaterial(t.material),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updateGroup(e,t){t.name!==void 0&&(e.name=t.name),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.bbVisible!==void 0&&e.setLinesVisibility(t.bbVisible),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_deleteLight(e){this._detachTransformControls(e),e.parent.remove(e)}_deleteModel(e){this._detachTransformControls(e),e.parent.remove(e)}_deletePrimitive(e){this._detachTransformControls(e),e.parent.remove(e)}_deleteGroup(e){this._detachTransformControls(e);for(let t=e.members.length-1;t>=0;t--)this.attach(e.members[t]);e.parent.remove(e)}_setParent(e){const t=this.getSceneObject(e);if(e.parentId!==null){const n=this.getSceneObject({id:e.parentId,entityType:e.entityType});if(!n)return;n.attach(t)}else this.attach(t)}_detachTransformControls(e){this._findScene(e).children.find(t=>{"isTransformControls"in t&&t.detach()})}_findScene(e){return e.parent!==null?this._findScene(e.parent):e}}const im="#888888",sm="#dddddd";class rm extends qe{constructor(){super(),this.name="Grid";const e=new Rg(100,100,im,sm);e.material.depthTest=!1,e.layers.mask=fh,this.add(e)}setVisibility(e){this.visible=e}}const Ls={displayFloor:!1,displayGrid:!1,backgroundColor:"transparent"};class am extends nh{constructor(e){super(),O(this,"isDIVEScene",!0),O(this,"_root"),O(this,"_grid"),this.setBackground((e==null?void 0:e.backgroundColor)??Ls.backgroundColor),this._root=new nm,this._root.floor.setVisibility((e==null?void 0:e.displayFloor)??Ls.displayFloor),this.add(this._root),this._grid=new rm,this._grid.setVisibility((e==null?void 0:e.displayGrid)??Ls.displayGrid),this.add(this._grid)}get root(){return this._root}get grid(){return this._grid}setBackground(e){e==="transparent"?this.background=null:typeof e=="string"||typeof e=="number"?this.background=new Pe(e):this.background=e}computeSceneBB(){return this._root.computeSceneBB()}dispose(){this.remove(this._root),this.remove(this._grid)}}const om={enableDamping:!0,dampingFactor:.05,enabled:!0,target:new B,minDistance:0,maxDistance:1/0,minZoom:0,maxZoom:1/0,minPolarAngle:0,maxPolarAngle:Math.PI,minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,enableZoom:!0,zoomSpeed:1,enableRotate:!0,rotateSpeed:1,enablePan:!0,panSpeed:1,screenSpacePanning:!0,keyPanSpeed:7,autoRotate:!1,autoRotateSpeed:2,keys:{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},mouseButtons:{LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN},touches:{ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN}},ph=class $r extends qn{constructor(e,t,n){super(),O(this,"object"),O(this,"domElements"),O(this,"enabled",!0),O(this,"target",new B),O(this,"minDistance",0),O(this,"maxDistance",1/0),O(this,"minZoom",0),O(this,"maxZoom",1/0),O(this,"minPolarAngle",0),O(this,"maxPolarAngle",Math.PI),O(this,"minAzimuthAngle",-1/0),O(this,"maxAzimuthAngle",1/0),O(this,"enableDamping",!0),O(this,"dampingFactor",.05),O(this,"enableZoom",!0),O(this,"zoomSpeed",1),O(this,"enableRotate",!0),O(this,"rotateSpeed",1),O(this,"enablePan",!0),O(this,"panSpeed",1),O(this,"screenSpacePanning",!0),O(this,"keyPanSpeed",7),O(this,"autoRotate",!1),O(this,"autoRotateSpeed",2),O(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),O(this,"mouseButtons",{LEFT:an.ROTATE,MIDDLE:an.DOLLY,RIGHT:an.PAN}),O(this,"touches",{ONE:Mn.ROTATE,TWO:Mn.DOLLY_PAN}),O(this,"target0"),O(this,"position0"),O(this,"zoom0"),O(this,"uuid",sa.generateUUID()),O(this,"state",-1),O(this,"EPS",1e-6),O(this,"spherical",new vc),O(this,"sphericalDelta",new vc),O(this,"scale",1),O(this,"panOffset",new B),O(this,"zoomChanged",!1),O(this,"rotateStart",new le),O(this,"rotateEnd",new le),O(this,"rotateDelta",new le),O(this,"panStart",new le),O(this,"panEnd",new le),O(this,"panDelta",new le),O(this,"dollyStart",new le),O(this,"dollyEnd",new le),O(this,"dollyDelta",new le),O(this,"pointers",[]),O(this,"pointerPositions",{}),O(this,"offset",new B),O(this,"quat"),O(this,"quatInverse"),O(this,"lastPosition",new B),O(this,"lastQuaternion",new In),O(this,"lastTarget",new B),O(this,"panLeft",(()=>{const i=new B;return(r,a)=>{i.setFromMatrixColumn(a,0),i.multiplyScalar(-r),this.panOffset.add(i)}})()),O(this,"panUp",(()=>{const i=new B;return(r,a)=>{this.screenSpacePanning===!0?i.setFromMatrixColumn(a,1):(i.setFromMatrixColumn(a,0),i.crossVectors(this.object.up,i)),i.multiplyScalar(r),this.panOffset.add(i)}})()),O(this,"onMouseDown",i=>{let r;switch(i.button){case 0:r=this.mouseButtons.LEFT;break;case 1:r=this.mouseButtons.MIDDLE;break;case 2:r=this.mouseButtons.RIGHT;break;default:r=-1}switch(r){case an.DOLLY:if(this.enableZoom===!1)return;this.handleMouseDownDolly(i),this.state=1;break;case an.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}else{if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}break;case an.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}else{if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}break;default:this.state=-1}this.state!==-1&&this.dispatchEvent({type:"start"})}),O(this,"onMouseMove",i=>{if(this.enabled!==!1)switch(this.state){case 0:if(this.enableRotate===!1)return;this.handleMouseMoveRotate(i);break;case 1:if(this.enableZoom===!1)return;this.handleMouseMoveDolly(i);break;case 2:if(this.enablePan===!1)return;this.handleMouseMovePan(i);break}}),O(this,"onMouseWheel",i=>{this.enabled===!1||this.enableZoom===!1||this.state!==-1||(i.preventDefault(),this.dispatchEvent({type:"start"}),this.handleMouseWheel(i),this.dispatchEvent({type:"end"}))}),O(this,"onKeyDown",i=>{this.enabled===!1||this.enablePan===!1||this.handleKeyDown(i)}),O(this,"onTouchStart",i=>{switch(this.trackPointer(i),this.pointers.length){case 1:switch(this.touches.ONE){case Mn.ROTATE:if(this.enableRotate===!1)return;this.handleTouchStartRotate(i),this.state=3;break;case Mn.PAN:if(this.enablePan===!1)return;this.handleTouchStartPan(i),this.state=4;break;default:this.state=-1}break;case 2:switch(this.touches.TWO){case Mn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchStartDollyPan(i),this.state=5;break;case Mn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchStartDollyRotate(i),this.state=6;break;default:this.state=-1}break;default:this.state=-1}this.state!==-1&&this.dispatchEvent({type:"start"})}),O(this,"onTouchMove",i=>{switch(this.trackPointer(i),this.state){case 3:if(this.enableRotate===!1)return;this.handleTouchMoveRotate(i),this.update();break;case 4:if(this.enablePan===!1)return;this.handleTouchMovePan(i),this.update();break;case 5:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchMoveDollyPan(i),this.update();break;case 6:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchMoveDollyRotate(i),this.update();break;default:this.state=-1}}),O(this,"onPointerDown",i=>{if(this.enabled!==!1){if(this.pointers.length===0){const r=i.currentTarget;r.setPointerCapture(i.pointerId),r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp)}this.isTrackingPointer(i)||(this.addPointer(i),i.pointerType==="touch"?this.onTouchStart(i):this.onMouseDown(i))}}),O(this,"onPointerMove",i=>{this.enabled!==!1&&(i.pointerType==="touch"?this.onTouchMove(i):this.onMouseMove(i))}),O(this,"onPointerUp",i=>{if(this.removePointer(i),this.pointers.length===0){const r=i.currentTarget;r.releasePointerCapture(i.pointerId),r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),this.dispatchEvent({type:"end"}),this.state=-1}}),O(this,"onPointerCancel",i=>{this.removePointer(i)}),O(this,"onContextMenu",i=>{this.enabled!==!1&&i.preventDefault()}),this.object=e,this.domElements=Array.isArray(t)?t:[t],Object.assign(this,n),this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.quat=new In().setFromUnitVectors(e.up,new B(0,1,0)),this.quatInverse=this.quat.clone().invert(),this.domElements.forEach(i=>this.addEventListeners(i)),this.update()}get domElement(){return this.domElements[0]}tick(){this.enabled&&this.update()}getPolarAngle(){return this.spherical.phi}getAzimuthalAngle(){return this.spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent({type:"change"}),this.update(),this.state=-1}update(){return this.offset.copy(this.object.position).sub(this.target),this.offset.applyQuaternion(this.quat),this.spherical.setFromVector3(this.offset),this.autoRotate&&this.state===-1&&this.rotateLeft(this.getAutoRotationAngle()),this.enableDamping?(this.spherical.theta+=this.sphericalDelta.theta*this.dampingFactor,this.spherical.phi+=this.sphericalDelta.phi*this.dampingFactor):(this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi),this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.enableDamping===!0?this.target.addScaledVector(this.panOffset,this.dampingFactor):this.target.add(this.panOffset),this.offset.setFromSpherical(this.spherical),this.offset.applyQuaternion(this.quatInverse),this.object.position.copy(this.target).add(this.offset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor,this.panOffset.multiplyScalar(1-this.dampingFactor)):(this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0)),this.scale=1,this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>this.EPS||8*(1-this.lastQuaternion.dot(this.object.quaternion))>this.EPS||this.lastTarget.distanceToSquared(this.target)>this.EPS?(this.dispatchEvent({type:"change"}),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.lastTarget.copy(this.target),this.zoomChanged=!1,!0):!1}dispose(){this.domElements.forEach(e=>this.removeEventListeners(e)),this.dispatchEvent({type:"dispose"})}addDomElements(...e){e.forEach(t=>{this.domElements.includes(t)||(this.domElements.push(t),this.addEventListeners(t))})}removeDomElements(...e){e.forEach(t=>{const n=this.domElements.indexOf(t);n>-1&&(this.removeEventListeners(t),this.domElements.splice(n,1))})}setDomElements(...e){this.removeDomElements(...this.domElements),this.domElements=[],this.addDomElements(...e)}computeEncompassingView(e,t=0){const n=e.center,i=e.sphere.radius,r=this.object.fov*(Math.PI/180),a=this.object.aspect,o=r/2,c=Math.atan(Math.tan(o)*a),h=i/Math.sin(o),l=i/Math.sin(c),d=Math.max(h,l)*(1+t),u=this.object.position.clone().sub(this.target).normalize(),p=u.length()>.001?u:new B(0,0,1);return{position:n.clone().add(p.multiplyScalar(d)),target:n}}focusObject(e,t=0){const n=new Jr(e),i=this.computeEncompassingView(n,t);this.object.position.copy(i.position),this.target.copy(i.target),this.update()}zoomIn(e){this.dollyIn(Math.pow(.95,e??$r.DEFAULT_ZOOM_FACTOR)),this.update()}zoomOut(e){this.dollyOut(Math.pow(.95,e??$r.DEFAULT_ZOOM_FACTOR)),this.update()}getState(){return{target:this.target.clone(),azimuthalAngle:this.getAzimuthalAngle(),polarAngle:this.getPolarAngle(),distance:this.getDistance(),position:this.object.position.clone(),quaternion:this.object.quaternion.clone()}}setState(e){this.target.copy(e.target),this.object.position.copy(e.position),this.object.quaternion.copy(e.quaternion),this.update()}addEventListeners(e){e.style.touchAction="none",e.addEventListener("contextmenu",this.onContextMenu),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerCancel),e.addEventListener("wheel",this.onMouseWheel,{passive:!1}),e.addEventListener("keydown",this.onKeyDown)}removeEventListeners(e){e.removeEventListener("contextmenu",this.onContextMenu),e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointercancel",this.onPointerCancel),e.removeEventListener("wheel",this.onMouseWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp)}getAutoRotationAngle(){return 2*Math.PI/60/60*this.autoRotateSpeed}getZoomScale(){return Math.pow(.95,this.zoomSpeed)}rotateLeft(e){this.sphericalDelta.theta-=e}rotateUp(e){this.sphericalDelta.phi-=e}pan(e,t,n){const i=new B;if("isPerspectiveCamera"in this.object){const r=this.object.position;i.copy(r).sub(this.target);let a=i.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*e*a/n.clientHeight,this.object.matrix),this.panUp(2*t*a/n.clientHeight,this.object.matrix)}else"isOrthographicCamera"in this.object?(this.panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this.panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitController encountered an unknown camera type - pan disabled."),this.enablePan=!1)}dollyIn(e){"isPerspectiveCamera"in this.object||"isOrthographicCamera"in this.object?this.scale*=e:(console.warn("WARNING: OrbitController encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}dollyOut(e){"isPerspectiveCamera"in this.object||"isOrthographicCamera"in this.object?this.scale/=e:(console.warn("WARNING: OrbitController encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}handleMouseDownRotate(e){this.rotateStart.set(e.clientX,e.clientY)}handleMouseDownDolly(e){this.dollyStart.set(e.clientX,e.clientY)}handleMouseDownPan(e){this.panStart.set(e.clientX,e.clientY)}handleMouseMoveRotate(e){this.rotateEnd.set(e.clientX,e.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed);const t=e.currentTarget;this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.rotateStart.copy(this.rotateEnd),this.update()}handleMouseMoveDolly(e){this.dollyEnd.set(e.clientX,e.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyIn(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyOut(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseMovePan(e){const t=e.currentTarget;this.panEnd.set(e.clientX,e.clientY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y,t),this.panStart.copy(this.panEnd),this.update()}handleMouseWheel(e){e.deltaY<0?this.dollyIn(this.getZoomScale()):e.deltaY>0&&this.dollyOut(this.getZoomScale()),this.update()}handleKeyDown(e){let t=!1;const n=e.currentTarget;switch(e.code){case this.keys.UP:this.pan(0,this.keyPanSpeed,n),t=!0;break;case this.keys.BOTTOM:this.pan(0,-this.keyPanSpeed,n),t=!0;break;case this.keys.LEFT:this.pan(this.keyPanSpeed,0,n),t=!0;break;case this.keys.RIGHT:this.pan(-this.keyPanSpeed,0,n),t=!0;break}t&&(e.preventDefault(),this.update())}handleTouchStartRotate(e){if(this.pointers.length===1)this.rotateStart.set(e.pageX,e.pageY);else{const t=this.getSecondPointer(e),n=.5*(e.pageX+t.pageX),i=.5*(e.pageY+t.pageY);this.rotateStart.set(n,i)}}handleTouchStartPan(e){if(this.pointers.length===1)this.panStart.set(e.pageX,e.pageY);else{const t=this.getSecondPointer(e),n=.5*(e.pageX+t.pageX),i=.5*(e.pageY+t.pageY);this.panStart.set(n,i)}}handleTouchStartDolly(e){const t=this.getSecondPointer(e),n=e.pageX-t.pageX,i=e.pageY-t.pageY,r=Math.sqrt(n*n+i*i);this.dollyStart.set(0,r)}handleTouchStartDollyPan(e){this.enableZoom&&this.handleTouchStartDolly(e),this.enablePan&&this.handleTouchStartPan(e)}handleTouchStartDollyRotate(e){this.enableZoom&&this.handleTouchStartDolly(e),this.enableRotate&&this.handleTouchStartRotate(e)}handleTouchMoveRotate(e){if(this.pointers.length===1)this.rotateEnd.set(e.pageX,e.pageY);else{const n=this.getSecondPointer(e),i=.5*(e.pageX+n.pageX),r=.5*(e.pageY+n.pageY);this.rotateEnd.set(i,r)}const t=e.currentTarget;this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed),this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.rotateStart.copy(this.rotateEnd)}handleTouchMovePan(e){if(this.pointers.length===1)this.panEnd.set(e.pageX,e.pageY);else{const n=this.getSecondPointer(e),i=.5*(e.pageX+n.pageX),r=.5*(e.pageY+n.pageY);this.panEnd.set(i,r)}const t=e.currentTarget;this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y,t),this.panStart.copy(this.panEnd)}handleTouchMoveDolly(e){const t=this.getSecondPointer(e),n=e.pageX-t.pageX,i=e.pageY-t.pageY,r=Math.sqrt(n*n+i*i);this.dollyEnd.set(0,r),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,this.zoomSpeed)),this.dollyOut(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)}handleTouchMoveDollyPan(e){this.enableZoom&&this.handleTouchMoveDolly(e),this.enablePan&&this.handleTouchMovePan(e)}handleTouchMoveDollyRotate(e){this.enableZoom&&this.handleTouchMoveDolly(e),this.enableRotate&&this.handleTouchMoveRotate(e)}addPointer(e){this.pointers.push(e)}removePointer(e){delete this.pointerPositions[e.pointerId];for(let t=0;t<this.pointers.length;t++)if(this.pointers[t].pointerId==e.pointerId){this.pointers.splice(t,1);return}}trackPointer(e){let t=this.pointerPositions[e.pointerId];t===void 0&&(t=new le,this.pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}getSecondPointer(e){return this.pointers[0].pointerId===e.pointerId?this.pointers[1]:this.pointers[0]}isTrackingPointer(e){return this.pointers.some(t=>t.pointerId===e.pointerId)}};O(ph,"DEFAULT_ZOOM_FACTOR",1);let cm=ph;const hm=`
                @@@@@@@@@@@@@@@@@@@@@@@              @@@@@@@@@@@@@@@@@@@@@@@
           @@@@+-:::::::---------------------==------------------------------=#@@@@
        @@%=::::.......::---------------------------------------------------------+@@
      @@+:::...........::-----------------------------------------------------------#@@
    @@=:::.........::::::-------------------------------------------------------------%@
   @%:::.......:::::::-----------------------------------------------------------------#@
  @*:::.....:::::-----------------------------------------------------------------------*@
 @%::::::.::::---------------------------------------------------------------------------@@
@@-:::::::::-----------------------------------------------------------------------------=@
@%::::::::--------------------------------------------------------------------------------%@
@+::::::::--------------------------------=@@@@@%-----------------------------------------%@
@=:::::::--------------------------------*@@    @@+---------------------------------------#@
@+:::::::-------------------------------*@        @*--------------------------------------%@
@#::::::::-----------------------------=@@        @@=-------------------------------------%@
@@-::::::::----------------------------@@          @@------------------------------------=@
 @%:::::::::--------------------------*@            @*-----------------------------------@@
  @*:::::::::-------------------------@@            @@----------------------------------%@
   @#::::::::::----------------------%@              @%--------------------------------%@
    @#:::::::::::-------------------=@@              @@=------------------------------%@
     @@-::::::::::::----------------%@                @%----------------------------=@@
      @@#::::::::::::::------------*@                  @*--------------------------#@@
        @@+::::::::::::::::--------@@                  @@------------------------+@@
          @@*:::::::::::::::::----@@                    @@---------------------+@@
            @@@-:::::::::::::::--#@                      @#-----------------=%@@
               @@%-::::::::::::-%@                        @%-------------=%@@
                  @@@@+:::::::#@@                          @@*-------*@@@@
                       @@@@@@@                                @@@@@@
`;window.DIVE={instances:[],get instance(){return window.DIVE.instances[0]}};const Ts={autoStart:!0,displayAxes:!1,...Ls,...Fi,...dh,...om};class lm{constructor(e){O(this,"_instanceId",sa.generateUUID()),O(this,"_settings"),O(this,"_views"),O(this,"_mainView"),O(this,"_scene"),O(this,"_clock"),O(this,"_orientationDisplay",null),this._settings={...Ts,...e??{}},this._clock=new Yg,this._scene=new am({backgroundColor:(e==null?void 0:e.backgroundColor)??Ts.backgroundColor,displayGrid:(e==null?void 0:e.displayGrid)??Ts.displayGrid,displayFloor:(e==null?void 0:e.displayFloor)??Ts.displayFloor});const t=new Mc(this._scene,new _c,this._settings);this._clock.addTicker(t),this._views=[t],this._mainView=t,this._settings.displayAxes&&Et(async()=>{const{OrientationDisplay:n}=await import("./index-Beenkx_n.js");return{OrientationDisplay:n}},__vite__mapDeps([5,6,1,2])).then(({OrientationDisplay:n})=>{this._orientationDisplay=new n(this.mainView.renderer,this.scene,this.mainView.camera),this._clock.addTicker(this._orientationDisplay)}),this._settings.autoStart&&this.start(),console.log("DIVE 2.2.29 initialized successfully!"),console.log(hm),window.DIVE.instances.push(this)}static async QuickView(e,t){return Et(async()=>{const{QuickView:n}=await Promise.resolve().then(()=>dm);return{QuickView:n}},void 0).then(({QuickView:n})=>n(e,t))}get engine(){return{scene:this.scene,camera:this.mainView.camera,renderer:this.mainView.renderer,setCanvas:e=>{this.mainView.setCanvas(e)},clock:this.clock,start:()=>{this.start()},stop:()=>{this.stop()},dispose:()=>{this.dispose()}}}get views(){return this._views}get mainView(){return this._mainView}get canvas(){return this.mainView.canvas}get scene(){return this._scene}get clock(){return this._clock}start(){this._clock.start()}stop(){this._clock.stop()}async dispose(){return new Promise(e=>{this._views.forEach(t=>{t.dispose()}),this._views=[],this._orientationDisplay&&(this._clock.removeTicker(this._orientationDisplay),this._orientationDisplay.dispose()),this.scene.dispose(),window.DIVE.instances=window.DIVE.instances.filter(t=>t._instanceId!==this._instanceId),e()})}createView(e){const t=new Mc(this._scene,e??new _c,{...this._settings,canvas:void 0});return this._views.push(t),this._clock.addTicker(t),this._views.length===1&&(this._mainView=t),t}disposeView(e){this._views=this._views.filter(t=>t!==e),this._clock.removeTicker(e),this._mainView===e&&(this._mainView=this._views[0]),e.dispose()}}const fm={glb:{key:"glb",extension:"glb"},gltf:{key:"gltf",extension:"gltf"},usdz:{key:"usdz",extension:"usdz"}},zm=Object.values(fm).map(s=>s.extension),um=async(s,e)=>{const t=new lm(e);t.mainView.camera.position.set(0,1,2);const n=await new ma().setFromURL(s);t.scene.root.add(n),n.placeOnFloor();const i=new cm(t.mainView.camera,t.mainView.canvas);i.focusObject(n),t.clock.addTicker(i);const r=Object.assign(t,{orbitController:i}),a=t.dispose.bind(t);return r.dispose=async()=>{i.dispose(),await a()},r},dm=Object.freeze(Object.defineProperty({__proto__:null,QuickView:um},Symbol.toStringTag,{value:"Module"}));export{Ji as $,Wt as A,bn as B,Qs as C,on as D,Xt as E,Ze as F,ys as G,Sm as H,Pg as I,Cg as J,Dm as K,ra as L,ki as M,Mm as N,qe as O,Xi as P,In as Q,Og as R,lh as S,ah as T,nc as U,le as V,Im as W,Em as X,Jp as Y,xn as Z,_c as _,B as a,sr as a0,sl as a1,_t as a2,Ct as a3,kr as a4,Xr as a5,hn as a6,dt as a7,sg as a8,Bn as a9,Fc as aA,Nt as aB,nh as aC,Sn as aD,hh as aE,Qp as aF,Js as aa,Ye as ab,_m as ac,la as ad,ym as ae,xm as af,wt as ag,sh as ah,bm as ai,tg as aj,Rs as ak,Fs as al,Ys as am,Xs as an,ks as ao,Vi as ap,ke as aq,kt as ar,pm as as,mm as at,gm as au,$s as av,bt as aw,jt as ax,yn as ay,Pm as az,Wi as b,ht as c,At as d,rh as e,ha as f,xi as g,Le as h,sa as i,Jr as j,vm as k,wm as l,Rt as m,$p as n,jc as o,We as p,Tm as q,Pe as r,um as s,zm as t,Ci as u,Bm as v,mg as w,Vt as x,Pt as y,Cm as z};
