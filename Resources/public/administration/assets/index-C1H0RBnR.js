const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BcHRqL4F.js","assets/administration-CNzdiowZ.js","assets/administration-DQ9sEJNV.css","assets/index-DGg-ZmG0.js","assets/fflate.module-xyO_T3Zm-B1UoRNFh.js","assets/index-CbbcT78C.js","assets/AxisHelperColors-JLBHYQDi-DZgCtRYv.js"])))=>i.map(i=>d[i]);
import{_ as Dt}from"./administration-CNzdiowZ.js";/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ya="163",un={ROTATE:0,DOLLY:1,PAN:2},Sn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},el=0,Xa=1,tl=2,nl=0,Ma=1,Vc=2,fn=3,Qt=0,Ct=1,Zt=2,Dn=0,wi=1,Wa=2,Va=3,ja=4,il=5,Vn=100,sl=101,rl=102,al=103,ol=104,cl=200,hl=201,ll=202,fl=203,oa=204,ca=205,ul=206,dl=207,pl=208,Al=209,gl=210,ml=211,vl=212,_l=213,yl=214,Ml=0,xl=1,wl=2,Xs=3,Cl=4,Pl=5,bl=6,Il=7,jc=0,Sl=1,Bl=2,mn=0,Zc=1,El=2,Tl=3,Dl=4,zl=5,Ll=6,Gl=7,Za="attached",Rl="detached",Qc=300,Ii=301,Si=302,Ws=303,ha=304,ar=306,la=1e3,pn=1001,fa=1002,It=1003,Ol=1004,cs=1005,Mt=1006,mr=1007,En=1008,zn=1009,Fl=1010,Hl=1011,Jc=1012,$c=1013,Bi=1014,zt=1015,An=1016,eh=1017,th=1018,ts=1020,Nl=35902,Ul=1021,Kl=1022,kt=1023,ql=1024,kl=1025,Ci=1026,$i=1027,nh=1028,ih=1029,Yl=1030,sh=1031,rh=1033,vr=33776,_r=33777,yr=33778,Mr=33779,Qa=35840,Ja=35841,$a=35842,eo=35843,ah=36196,to=37492,no=37496,io=37808,so=37809,ro=37810,ao=37811,oo=37812,co=37813,ho=37814,lo=37815,fo=37816,uo=37817,po=37818,Ao=37819,go=37820,mo=37821,xr=36492,vo=36494,_o=36495,Xl=36283,yo=36284,Mo=36285,xo=36286,Wl=2200,Vl=2201,jl=2202,Vs=2300,js=2301,wr=2302,yi=2400,Mi=2401,Zs=2402,xa=2500,Zl=2501,fv=0,uv=1,dv=2,Ql=3200,Jl=3201,oh=0,$l=1,Bn="",Ut="srgb",en="srgb-linear",wa="display-p3",or="display-p3-linear",Qs="linear",Je="srgb",Js="rec709",$s="p3",Qn=7680,wo=519,ef=512,tf=513,nf=514,ch=515,sf=516,rf=517,af=518,of=519,ua=35044,Co="300 es",gn=2e3,er=2001;class Rn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Po=1234567;const Qi=Math.PI/180,Ei=180/Math.PI;function Yt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[s&255]+vt[s>>8&255]+vt[s>>16&255]+vt[s>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function ut(s,e,t){return Math.max(e,Math.min(t,s))}function Ca(s,e){return(s%e+e)%e}function cf(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function hf(s,e,t){return s!==e?(t-s)/(e-s):0}function Ji(s,e,t){return(1-t)*s+t*e}function lf(s,e,t,n){return Ji(s,e,1-Math.exp(-t*n))}function ff(s,e=1){return e-Math.abs(Ca(s,e*2)-e)}function uf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function df(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function pf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Af(s,e){return s+Math.random()*(e-s)}function gf(s){return s*(.5-Math.random())}function mf(s){s!==void 0&&(Po=s);let e=Po+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vf(s){return s*Qi}function _f(s){return s*Ei}function yf(s){return(s&s-1)===0&&s!==0}function Mf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function xf(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function wf(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),h=r((e+n)/2),l=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),A=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*l,c*f,c*d,o*h);break;case"YZY":s.set(c*d,o*l,c*f,o*h);break;case"ZXZ":s.set(c*f,c*d,o*l,o*h);break;case"XZX":s.set(o*l,c*g,c*A,o*h);break;case"YXY":s.set(c*A,o*l,c*g,o*h);break;case"ZYZ":s.set(c*g,c*A,o*l,o*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Kt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ke(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pa={DEG2RAD:Qi,RAD2DEG:Ei,generateUUID:Yt,clamp:ut,euclideanModulo:Ca,mapLinear:cf,inverseLerp:hf,lerp:Ji,damp:lf,pingpong:ff,smoothstep:uf,smootherstep:df,randInt:pf,randFloat:Af,randFloatSpread:gf,seededRandom:mf,degToRad:vf,radToDeg:_f,isPowerOfTwo:yf,ceilPowerOfTwo:Mf,floorPowerOfTwo:xf,setQuaternionFromProperEuler:wf,normalize:Ke,denormalize:Kt};class le{constructor(e=0,t=0){le.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,i,r,a,o,c,h){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h)}set(e,t,n,i,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],A=n[5],g=n[8],_=i[0],p=i[3],u=i[6],x=i[1],m=i[4],C=i[7],E=i[2],P=i[5],b=i[8];return r[0]=a*_+o*x+c*E,r[3]=a*p+o*m+c*P,r[6]=a*u+o*C+c*b,r[1]=h*_+l*x+f*E,r[4]=h*p+l*m+f*P,r[7]=h*u+l*C+f*b,r[2]=d*_+A*x+g*E,r[5]=d*p+A*m+g*P,r[8]=d*u+A*C+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],f=l*a-o*h,d=o*c-l*r,A=h*r-a*c,g=t*f+n*d+i*A;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*h-l*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(l*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=A*_,e[7]=(n*c-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cr.makeScale(e,t)),this}rotate(e){return this.premultiply(Cr.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cr=new De;function hh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function es(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Cf(){const s=es("canvas");return s.style.display="block",s}const bo={};function lh(s){s in bo||(bo[s]=!0,console.warn(s))}const Io=new De().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),So=new De().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),hs={[en]:{transfer:Qs,primaries:Js,toReference:s=>s,fromReference:s=>s},[Ut]:{transfer:Je,primaries:Js,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[or]:{transfer:Qs,primaries:$s,toReference:s=>s.applyMatrix3(So),fromReference:s=>s.applyMatrix3(Io)},[wa]:{transfer:Je,primaries:$s,toReference:s=>s.convertSRGBToLinear().applyMatrix3(So),fromReference:s=>s.applyMatrix3(Io).convertLinearToSRGB()}},Pf=new Set([en,or]),Xe={enabled:!0,_workingColorSpace:en,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Pf.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=hs[e].toReference,i=hs[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return hs[s].primaries},getTransfer:function(s){return s===Bn?Qs:hs[s].transfer}};function Pi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Jn;class bf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Jn===void 0&&(Jn=es("canvas")),Jn.width=e.width,Jn.height=e.height;const n=Jn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Jn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=es("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let If=0;class fh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=Yt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(br(i[a].image)):r.push(br(i[a]))}else r=br(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bf.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sf=0;class pt extends Rn{constructor(e=pt.DEFAULT_IMAGE,t=pt.DEFAULT_MAPPING,n=pn,i=pn,r=Mt,a=En,o=kt,c=zn,h=pt.DEFAULT_ANISOTROPY,l=Bn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Yt(),this.name="",this.source=new fh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case la:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case la:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pt.DEFAULT_IMAGE=null;pt.DEFAULT_MAPPING=Qc;pt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,h=c[0],l=c[4],f=c[8],d=c[1],A=c[5],g=c[9],_=c[2],p=c[6],u=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(h+A+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(h+1)/2,C=(A+1)/2,E=(u+1)/2,P=(l+d)/4,b=(f+_)/4,D=(g+p)/4;return m>C&&m>E?m<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(m),i=P/n,r=b/n):C>E?C<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(C),n=P/i,r=D/i):E<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(E),n=b/r,i=D/r),this.set(n,i,r,t),this}let x=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-l)*(d-l));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(f-_)/x,this.z=(d-l)/x,this.w=Math.acos((h+A+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bf extends Rn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Bf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class uh extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ef extends pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=It,this.minFilter=It,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],h=n[i+1],l=n[i+2],f=n[i+3];const d=r[a+0],A=r[a+1],g=r[a+2],_=r[a+3];if(o===0){e[t+0]=c,e[t+1]=h,e[t+2]=l,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=A,e[t+2]=g,e[t+3]=_;return}if(f!==_||c!==d||h!==A||l!==g){let p=1-o;const u=c*d+h*A+l*g+f*_,x=u>=0?1:-1,m=1-u*u;if(m>Number.EPSILON){const E=Math.sqrt(m),P=Math.atan2(E,u*x);p=Math.sin(p*P)/E,o=Math.sin(o*P)/E}const C=o*x;if(c=c*p+d*C,h=h*p+A*C,l=l*p+g*C,f=f*p+_*C,p===1-o){const E=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=E,h*=E,l*=E,f*=E}}e[t]=c,e[t+1]=h,e[t+2]=l,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],h=n[i+2],l=n[i+3],f=r[a],d=r[a+1],A=r[a+2],g=r[a+3];return e[t]=o*g+l*f+c*A-h*d,e[t+1]=c*g+l*d+h*f-o*A,e[t+2]=h*g+l*A+o*d-c*f,e[t+3]=l*g-o*f-c*d-h*A,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(i/2),f=o(r/2),d=c(n/2),A=c(i/2),g=c(r/2);switch(a){case"XYZ":this._x=d*l*f+h*A*g,this._y=h*A*f-d*l*g,this._z=h*l*g+d*A*f,this._w=h*l*f-d*A*g;break;case"YXZ":this._x=d*l*f+h*A*g,this._y=h*A*f-d*l*g,this._z=h*l*g-d*A*f,this._w=h*l*f+d*A*g;break;case"ZXY":this._x=d*l*f-h*A*g,this._y=h*A*f+d*l*g,this._z=h*l*g+d*A*f,this._w=h*l*f-d*A*g;break;case"ZYX":this._x=d*l*f-h*A*g,this._y=h*A*f+d*l*g,this._z=h*l*g-d*A*f,this._w=h*l*f+d*A*g;break;case"YZX":this._x=d*l*f+h*A*g,this._y=h*A*f+d*l*g,this._z=h*l*g-d*A*f,this._w=h*l*f-d*A*g;break;case"XZY":this._x=d*l*f-h*A*g,this._y=h*A*f-d*l*g,this._z=h*l*g+d*A*f,this._w=h*l*f+d*A*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],h=t[2],l=t[6],f=t[10],d=n+o+f;if(d>0){const A=.5/Math.sqrt(d+1);this._w=.25/A,this._x=(l-c)*A,this._y=(r-h)*A,this._z=(a-i)*A}else if(n>o&&n>f){const A=2*Math.sqrt(1+n-o-f);this._w=(l-c)/A,this._x=.25*A,this._y=(i+a)/A,this._z=(r+h)/A}else if(o>f){const A=2*Math.sqrt(1+o-n-f);this._w=(r-h)/A,this._x=(i+a)/A,this._y=.25*A,this._z=(c+l)/A}else{const A=2*Math.sqrt(1+f-n-o);this._w=(a-i)/A,this._x=(r+h)/A,this._y=(c+l)/A,this._z=.25*A}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,h=t._z,l=t._w;return this._x=n*l+a*o+i*h-r*c,this._y=i*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-i*o,this._w=a*l-n*o-i*c-r*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const A=1-t;return this._w=A*a+t*this._w,this._x=A*n+t*this._x,this._y=A*i+t*this._y,this._z=A*r+t*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),f=Math.sin((1-t)*l)/h,d=Math.sin(t*l)/h;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,n=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,h=2*(a*i-o*n),l=2*(o*t-r*i),f=2*(r*n-a*t);return this.x=t+c*h+a*f-o*l,this.y=n+c*l+o*h-r*f,this.z=i+c*f+r*l-a*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ir.copy(this).projectOnVector(e),this.sub(Ir)}reflect(e){return this.sub(Ir.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ir=new B,Bo=new Xt;class St{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ot.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ot.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ot.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ot):Ot.fromBufferAttribute(r,a),Ot.applyMatrix4(e.matrixWorld),this.expandByPoint(Ot);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ls.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ls.copy(n.boundingBox)),ls.applyMatrix4(e.matrixWorld),this.union(ls)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ot),Ot.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),fs.subVectors(this.max,Hi),$n.subVectors(e.a,Hi),ei.subVectors(e.b,Hi),ti.subVectors(e.c,Hi),yn.subVectors(ei,$n),Mn.subVectors(ti,ei),Nn.subVectors($n,ti);let t=[0,-yn.z,yn.y,0,-Mn.z,Mn.y,0,-Nn.z,Nn.y,yn.z,0,-yn.x,Mn.z,0,-Mn.x,Nn.z,0,-Nn.x,-yn.y,yn.x,0,-Mn.y,Mn.x,0,-Nn.y,Nn.x,0];return!Sr(t,$n,ei,ti,fs)||(t=[1,0,0,0,1,0,0,0,1],!Sr(t,$n,ei,ti,fs))?!1:(us.crossVectors(yn,Mn),t=[us.x,us.y,us.z],Sr(t,$n,ei,ti,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ot).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ot).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const rn=[new B,new B,new B,new B,new B,new B,new B,new B],Ot=new B,ls=new St,$n=new B,ei=new B,ti=new B,yn=new B,Mn=new B,Nn=new B,Hi=new B,fs=new B,us=new B,Un=new B;function Sr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Un.fromArray(s,r);const o=i.x*Math.abs(Un.x)+i.y*Math.abs(Un.y)+i.z*Math.abs(Un.z),c=e.dot(Un),h=t.dot(Un),l=n.dot(Un);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const Tf=new St,Ni=new B,Br=new B;class tn{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Tf.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ni.subVectors(e,this.center);const t=Ni.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ni,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Br.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ni.copy(e.center).add(Br)),this.expandByPoint(Ni.copy(e.center).sub(Br))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new B,Er=new B,ds=new B,xn=new B,Tr=new B,ps=new B,Dr=new B;class ns{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,an)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=an.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(an.copy(this.origin).addScaledVector(this.direction,t),an.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Er.copy(e).add(t).multiplyScalar(.5),ds.copy(t).sub(e).normalize(),xn.copy(this.origin).sub(Er);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ds),o=xn.dot(this.direction),c=-xn.dot(ds),h=xn.lengthSq(),l=Math.abs(1-a*a);let f,d,A,g;if(l>0)if(f=a*c-o,d=a*o-c,g=r*l,f>=0)if(d>=-g)if(d<=g){const _=1/l;f*=_,d*=_,A=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=r,f=Math.max(0,-(a*d+o)),A=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(a*d+o)),A=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),A=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),A=d*(d+2*c)+h):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),A=-f*f+d*(d+2*c)+h);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),A=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Er).addScaledVector(ds,d),A}intersectSphere(e,t){an.subVectors(e.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(e.min.x-d.x)*h,i=(e.max.x-d.x)*h):(n=(e.max.x-d.x)*h,i=(e.min.x-d.x)*h),l>=0?(r=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(r=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,an)!==null}intersectTriangle(e,t,n,i,r){Tr.subVectors(t,e),ps.subVectors(n,e),Dr.crossVectors(Tr,ps);let a=this.direction.dot(Dr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xn.subVectors(this.origin,e);const c=o*this.direction.dot(ps.crossVectors(xn,ps));if(c<0)return null;const h=o*this.direction.dot(Tr.cross(xn));if(h<0||c+h>a)return null;const l=-o*xn.dot(Dr);return l<0?null:this.at(l/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,i,r,a,o,c,h,l,f,d,A,g,_,p){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h,l,f,d,A,g,_,p)}set(e,t,n,i,r,a,o,c,h,l,f,d,A,g,_,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=a,u[9]=o,u[13]=c,u[2]=h,u[6]=l,u[10]=f,u[14]=d,u[3]=A,u[7]=g,u[11]=_,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ni.setFromMatrixColumn(e,0).length(),r=1/ni.setFromMatrixColumn(e,1).length(),a=1/ni.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),h=Math.sin(i),l=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=a*l,A=a*f,g=o*l,_=o*f;t[0]=c*l,t[4]=-c*f,t[8]=h,t[1]=A+g*h,t[5]=d-_*h,t[9]=-o*c,t[2]=_-d*h,t[6]=g+A*h,t[10]=a*c}else if(e.order==="YXZ"){const d=c*l,A=c*f,g=h*l,_=h*f;t[0]=d+_*o,t[4]=g*o-A,t[8]=a*h,t[1]=a*f,t[5]=a*l,t[9]=-o,t[2]=A*o-g,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*l,A=c*f,g=h*l,_=h*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+A*o,t[1]=A+g*o,t[5]=a*l,t[9]=_-d*o,t[2]=-a*h,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*l,A=a*f,g=o*l,_=o*f;t[0]=c*l,t[4]=g*h-A,t[8]=d*h+_,t[1]=c*f,t[5]=_*h+d,t[9]=A*h-g,t[2]=-h,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,A=a*h,g=o*c,_=o*h;t[0]=c*l,t[4]=_-d*f,t[8]=g*f+A,t[1]=f,t[5]=a*l,t[9]=-o*l,t[2]=-h*l,t[6]=A*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*c,A=a*h,g=o*c,_=o*h;t[0]=c*l,t[4]=-f,t[8]=h*l,t[1]=d*f+_,t[5]=a*l,t[9]=A*f-g,t[2]=g*f-A,t[6]=o*l,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Df,e,zf)}lookAt(e,t,n){const i=this.elements;return Et.subVectors(e,t),Et.lengthSq()===0&&(Et.z=1),Et.normalize(),wn.crossVectors(n,Et),wn.lengthSq()===0&&(Math.abs(n.z)===1?Et.x+=1e-4:Et.z+=1e-4,Et.normalize(),wn.crossVectors(n,Et)),wn.normalize(),As.crossVectors(Et,wn),i[0]=wn.x,i[4]=As.x,i[8]=Et.x,i[1]=wn.y,i[5]=As.y,i[9]=Et.y,i[2]=wn.z,i[6]=As.z,i[10]=Et.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],A=n[13],g=n[2],_=n[6],p=n[10],u=n[14],x=n[3],m=n[7],C=n[11],E=n[15],P=i[0],b=i[4],D=i[8],M=i[12],v=i[1],L=i[5],F=i[9],T=i[13],K=i[2],k=i[6],W=i[10],se=i[14],q=i[3],J=i[7],Q=i[11],de=i[15];return r[0]=a*P+o*v+c*K+h*q,r[4]=a*b+o*L+c*k+h*J,r[8]=a*D+o*F+c*W+h*Q,r[12]=a*M+o*T+c*se+h*de,r[1]=l*P+f*v+d*K+A*q,r[5]=l*b+f*L+d*k+A*J,r[9]=l*D+f*F+d*W+A*Q,r[13]=l*M+f*T+d*se+A*de,r[2]=g*P+_*v+p*K+u*q,r[6]=g*b+_*L+p*k+u*J,r[10]=g*D+_*F+p*W+u*Q,r[14]=g*M+_*T+p*se+u*de,r[3]=x*P+m*v+C*K+E*q,r[7]=x*b+m*L+C*k+E*J,r[11]=x*D+m*F+C*W+E*Q,r[15]=x*M+m*T+C*se+E*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],h=e[13],l=e[2],f=e[6],d=e[10],A=e[14],g=e[3],_=e[7],p=e[11],u=e[15];return g*(+r*c*f-i*h*f-r*o*d+n*h*d+i*o*A-n*c*A)+_*(+t*c*A-t*h*d+r*a*d-i*a*A+i*h*l-r*c*l)+p*(+t*h*f-t*o*A-r*a*f+n*a*A+r*o*l-n*h*l)+u*(-i*o*l-t*c*f+t*o*d+i*a*f-n*a*d+n*c*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],f=e[9],d=e[10],A=e[11],g=e[12],_=e[13],p=e[14],u=e[15],x=f*p*h-_*d*h+_*c*A-o*p*A-f*c*u+o*d*u,m=g*d*h-l*p*h-g*c*A+a*p*A+l*c*u-a*d*u,C=l*_*h-g*f*h+g*o*A-a*_*A-l*o*u+a*f*u,E=g*f*c-l*_*c-g*o*d+a*_*d+l*o*p-a*f*p,P=t*x+n*m+i*C+r*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/P;return e[0]=x*b,e[1]=(_*d*r-f*p*r-_*i*A+n*p*A+f*i*u-n*d*u)*b,e[2]=(o*p*r-_*c*r+_*i*h-n*p*h-o*i*u+n*c*u)*b,e[3]=(f*c*r-o*d*r-f*i*h+n*d*h+o*i*A-n*c*A)*b,e[4]=m*b,e[5]=(l*p*r-g*d*r+g*i*A-t*p*A-l*i*u+t*d*u)*b,e[6]=(g*c*r-a*p*r-g*i*h+t*p*h+a*i*u-t*c*u)*b,e[7]=(a*d*r-l*c*r+l*i*h-t*d*h-a*i*A+t*c*A)*b,e[8]=C*b,e[9]=(g*f*r-l*_*r-g*n*A+t*_*A+l*n*u-t*f*u)*b,e[10]=(a*_*r-g*o*r+g*n*h-t*_*h-a*n*u+t*o*u)*b,e[11]=(l*o*r-a*f*r-l*n*h+t*f*h+a*n*A-t*o*A)*b,e[12]=E*b,e[13]=(l*_*i-g*f*i+g*n*d-t*_*d-l*n*p+t*f*p)*b,e[14]=(g*o*i-a*_*i-g*n*c+t*_*c+a*n*p-t*o*p)*b,e[15]=(a*f*i-l*o*i+l*n*c-t*f*c-a*n*d+t*o*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-i*c,h*c+i*o,0,h*o+i*c,l*o+n,l*c-i*a,0,h*c-i*o,l*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,h=r+r,l=a+a,f=o+o,d=r*h,A=r*l,g=r*f,_=a*l,p=a*f,u=o*f,x=c*h,m=c*l,C=c*f,E=n.x,P=n.y,b=n.z;return i[0]=(1-(_+u))*E,i[1]=(A+C)*E,i[2]=(g-m)*E,i[3]=0,i[4]=(A-C)*P,i[5]=(1-(d+u))*P,i[6]=(p+x)*P,i[7]=0,i[8]=(g+m)*b,i[9]=(p-x)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ni.set(i[0],i[1],i[2]).length();const a=ni.set(i[4],i[5],i[6]).length(),o=ni.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ft.copy(this);const h=1/r,l=1/a,f=1/o;return Ft.elements[0]*=h,Ft.elements[1]*=h,Ft.elements[2]*=h,Ft.elements[4]*=l,Ft.elements[5]*=l,Ft.elements[6]*=l,Ft.elements[8]*=f,Ft.elements[9]*=f,Ft.elements[10]*=f,t.setFromRotationMatrix(Ft),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=gn){const c=this.elements,h=2*r/(t-e),l=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let A,g;if(o===gn)A=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===er)A=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=A,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=gn){const c=this.elements,h=1/(t-e),l=1/(n-i),f=1/(a-r),d=(t+e)*h,A=(n+i)*l;let g,_;if(o===gn)g=(a+r)*f,_=-2*f;else if(o===er)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-A,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ni=new B,Ft=new Le,Df=new B(0,0,0),zf=new B(1,1,1),wn=new B,As=new B,Et=new B,Eo=new Le,To=new Xt;class Jt{constructor(e=0,t=0,n=0,i=Jt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],h=i[5],l=i[9],f=i[2],d=i[6],A=i[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,A),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,A),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,A),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,A),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,A));break;case"XZY":this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,A),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Eo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Eo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return To.setFromEuler(this),this.setFromQuaternion(To,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jt.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lf=0;const Do=new B,ii=new Xt,on=new Le,gs=new B,Ui=new B,Gf=new B,Rf=new Xt,zo=new B(1,0,0),Lo=new B(0,1,0),Go=new B(0,0,1),Ro={type:"added"},Of={type:"removed"},si={type:"childadded",child:null},zr={type:"childremoved",child:null};class ke extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const e=new B,t=new Jt,n=new Xt,i=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Le},normalMatrix:{value:new De}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.multiply(ii),this}rotateOnWorldAxis(e,t){return ii.setFromAxisAngle(e,t),this.quaternion.premultiply(ii),this}rotateX(e){return this.rotateOnAxis(zo,e)}rotateY(e){return this.rotateOnAxis(Lo,e)}rotateZ(e){return this.rotateOnAxis(Go,e)}translateOnAxis(e,t){return Do.copy(e).applyQuaternion(this.quaternion),this.position.add(Do.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zo,e)}translateY(e){return this.translateOnAxis(Lo,e)}translateZ(e){return this.translateOnAxis(Go,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(on.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?gs.copy(e):gs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ui.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?on.lookAt(Ui,gs,this.up):on.lookAt(gs,Ui,this.up),this.quaternion.setFromRotationMatrix(on),i&&(on.extractRotation(i.matrixWorld),ii.setFromRotationMatrix(on),this.quaternion.premultiply(ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ro),si.child=e,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Of),zr.child=e,this.dispatchEvent(zr),zr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),on.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),on.multiply(e.parent.matrixWorld)),e.applyMatrix4(on),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ro),si.child=e,this.dispatchEvent(si),si.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,e,Gf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ui,Rf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++){const o=i[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const f=c[h];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),h=a(e.textures),l=a(e.images),f=a(e.shapes),d=a(e.skeletons),A=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),A.length>0&&(n.animations=A),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new B(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ht=new B,cn=new B,Lr=new B,hn=new B,ri=new B,ai=new B,Oo=new B,Gr=new B,Rr=new B,Or=new B;class qt{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ht.subVectors(e,t),i.cross(Ht);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ht.subVectors(i,t),cn.subVectors(n,t),Lr.subVectors(e,t);const a=Ht.dot(Ht),o=Ht.dot(cn),c=Ht.dot(Lr),h=cn.dot(cn),l=cn.dot(Lr),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,A=(h*c-o*l)*d,g=(a*l-o*c)*d;return r.set(1-A-g,g,A)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hn.x),c.addScaledVector(a,hn.y),c.addScaledVector(o,hn.z),c)}static isFrontFacing(e,t,n,i){return Ht.subVectors(n,t),cn.subVectors(e,t),Ht.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ht.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ht.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;ri.subVectors(i,n),ai.subVectors(r,n),Gr.subVectors(e,n);const c=ri.dot(Gr),h=ai.dot(Gr);if(c<=0&&h<=0)return t.copy(n);Rr.subVectors(e,i);const l=ri.dot(Rr),f=ai.dot(Rr);if(l>=0&&f<=l)return t.copy(i);const d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),t.copy(n).addScaledVector(ri,a);Or.subVectors(e,r);const A=ri.dot(Or),g=ai.dot(Or);if(g>=0&&A<=g)return t.copy(r);const _=A*h-c*g;if(_<=0&&h>=0&&g<=0)return o=h/(h-g),t.copy(n).addScaledVector(ai,o);const p=l*g-A*f;if(p<=0&&f-l>=0&&A-g>=0)return Oo.subVectors(r,i),o=(f-l)/(f-l+(A-g)),t.copy(i).addScaledVector(Oo,o);const u=1/(p+_+d);return a=_*u,o=d*u,t.copy(n).addScaledVector(ri,a).addScaledVector(ai,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ms={h:0,s:0,l:0};function Fr(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ut){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Xe.workingColorSpace){if(e=Ca(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fr(a,r,e+1/3),this.g=Fr(a,r,e),this.b=Fr(a,r,e-1/3)}return Xe.toWorkingColorSpace(this,i),this}setStyle(e,t=Ut){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ut){const n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ut){return Xe.fromWorkingColorSpace(_t.copy(this),e),Math.round(ut(_t.r*255,0,255))*65536+Math.round(ut(_t.g*255,0,255))*256+Math.round(ut(_t.b*255,0,255))}getHexString(e=Ut){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.fromWorkingColorSpace(_t.copy(this),t);const n=_t.r,i=_t.g,r=_t.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(_t.copy(this),t),e.r=_t.r,e.g=_t.g,e.b=_t.b,e}getStyle(e=Ut){Xe.fromWorkingColorSpace(_t.copy(this),e);const t=_t.r,n=_t.g,i=_t.b;return e!==Ut?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(ms);const n=Ji(Cn.h,ms.h,t),i=Ji(Cn.s,ms.s,t),r=Ji(Cn.l,ms.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _t=new ye;ye.NAMES=dh;let Ff=0;class On extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=wi,this.side=Qt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oa,this.blendDst=ca,this.blendEquation=Vn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==wi&&(n.blending=this.blending),this.side!==Qt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==oa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Vn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class is extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=Hf();function Hf(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const h=c-127;h<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):h<-14?(n[c]=1024>>-h-14,n[c|256]=1024>>-h-14|32768,i[c]=-h-1,i[c|256]=-h-1):h<=15?(n[c]=h+15<<10,n[c|256]=h+15<<10|32768,i[c]=13,i[c|256]=13):h<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let h=c<<13,l=0;for(;(h&8388608)===0;)h<<=1,l-=8388608;h&=-8388609,l+=947912704,r[c]=h|l}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function Nf(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=ut(s,-65504,65504),dn.floatView[0]=s;const e=dn.uint32View[0],t=e>>23&511;return dn.baseTable[t]+((e&8388607)>>dn.shiftTable[t])}function Uf(s){const e=s>>10;return dn.uint32View[0]=dn.mantissaTable[dn.offsetTable[e]+(s&1023)]+dn.exponentTable[e],dn.floatView[0]}const vs={toHalfFloat:Nf,fromHalfFloat:Uf},at=new B,_s=new le;class Pt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lh("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_s.fromBufferAttribute(this,t),_s.applyMatrix3(e),this.setXY(t,_s.x,_s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Kt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Kt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Kt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Kt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ua&&(e.usage=this.usage),e}}class ph extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ah extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class nt extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kf=0;const Gt=new Le,Hr=new ke,oi=new B,Tt=new St,Ki=new St,ft=new B;class At extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hh(e)?Ah:ph)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,n){return Gt.makeTranslation(e,t,n),this.applyMatrix4(Gt),this}scale(e,t,n){return Gt.makeScale(e,t,n),this.applyMatrix4(Gt),this}lookAt(e){return Hr.lookAt(e),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new St);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Tt.setFromBufferAttribute(r),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Tt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Tt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Tt.min),this.boundingBox.expandByPoint(Tt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){const n=this.boundingSphere.center;if(Tt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ki.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Tt.min,Ki.min),Tt.expandByPoint(ft),ft.addVectors(Tt.max,Ki.max),Tt.expandByPoint(ft)):(Tt.expandByPoint(Ki.min),Tt.expandByPoint(Ki.max))}Tt.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)ft.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(ft));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)ft.fromBufferAttribute(o,h),c&&(oi.fromBufferAttribute(e,h),ft.add(oi)),i=Math.max(i,n.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let D=0;D<n.count;D++)o[D]=new B,c[D]=new B;const h=new B,l=new B,f=new B,d=new le,A=new le,g=new le,_=new B,p=new B;function u(D,M,v){h.fromBufferAttribute(n,D),l.fromBufferAttribute(n,M),f.fromBufferAttribute(n,v),d.fromBufferAttribute(r,D),A.fromBufferAttribute(r,M),g.fromBufferAttribute(r,v),l.sub(h),f.sub(h),A.sub(d),g.sub(d);const L=1/(A.x*g.y-g.x*A.y);isFinite(L)&&(_.copy(l).multiplyScalar(g.y).addScaledVector(f,-A.y).multiplyScalar(L),p.copy(f).multiplyScalar(A.x).addScaledVector(l,-g.x).multiplyScalar(L),o[D].add(_),o[M].add(_),o[v].add(_),c[D].add(p),c[M].add(p),c[v].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let D=0,M=x.length;D<M;++D){const v=x[D],L=v.start,F=v.count;for(let T=L,K=L+F;T<K;T+=3)u(e.getX(T+0),e.getX(T+1),e.getX(T+2))}const m=new B,C=new B,E=new B,P=new B;function b(D){E.fromBufferAttribute(i,D),P.copy(E);const M=o[D];m.copy(M),m.sub(E.multiplyScalar(E.dot(M))).normalize(),C.crossVectors(P,M);const L=C.dot(c[D])<0?-1:1;a.setXYZW(D,m.x,m.y,m.z,L)}for(let D=0,M=x.length;D<M;++D){const v=x[D],L=v.start,F=v.count;for(let T=L,K=L+F;T<K;T+=3)b(e.getX(T+0)),b(e.getX(T+1)),b(e.getX(T+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,A=n.count;d<A;d++)n.setXYZ(d,0,0,0);const i=new B,r=new B,a=new B,o=new B,c=new B,h=new B,l=new B,f=new B;if(e)for(let d=0,A=e.count;d<A;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),l.subVectors(a,r),f.subVectors(i,r),l.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),h.fromBufferAttribute(n,p),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,h.x,h.y,h.z)}else for(let d=0,A=t.count;d<A;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),l.subVectors(a,r),f.subVectors(i,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,c){const h=o.array,l=o.itemSize,f=o.normalized,d=new h.constructor(c.length*l);let A=0,g=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?A=c[_]*o.data.stride+o.offset:A=c[_]*l;for(let u=0;u<l;u++)d[g++]=h[A++]}return new Pt(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new At,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],h=e(c,n);t.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,f=h.length;l<f;l++){const d=h[l],A=e(d,n);c.push(A)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(e[h]=c[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const h=n[c];e.data.attributes[c]=h.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){const A=h[f];l.push(A.toJSON(e.data))}l.length>0&&(i[c]=l,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const h in i){const l=i[h];this.setAttribute(h,l.clone(t))}const r=e.morphAttributes;for(const h in r){const l=[],f=r[h];for(let d=0,A=f.length;d<A;d++)l.push(f[d].clone(t));this.morphAttributes[h]=l}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,l=a.length;h<l;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fo=new Le,Kn=new ns,ys=new tn,Ho=new B,ci=new B,hi=new B,li=new B,Nr=new B,Ms=new B,xs=new le,ws=new le,Cs=new le,No=new B,Uo=new B,Ko=new B,Ps=new B,bs=new B;class dt extends ke{constructor(e=new At,t=new is){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ms.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],f=r[c];l!==0&&(Nr.fromBufferAttribute(f,e),a?Ms.addScaledVector(Nr,l):Ms.addScaledVector(Nr.sub(t),l))}t.add(Ms)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(r),Kn.copy(e.ray).recast(e.near),!(ys.containsPoint(Kn.origin)===!1&&(Kn.intersectSphere(ys,Ho)===null||Kn.origin.distanceToSquared(Ho)>(e.far-e.near)**2))&&(Fo.copy(r).invert(),Kn.copy(e.ray).applyMatrix4(Fo),!(n.boundingBox!==null&&Kn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,A=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=a[p.materialIndex],x=Math.max(p.start,A.start),m=Math.min(o.count,Math.min(p.start+p.count,A.start+A.count));for(let C=x,E=m;C<E;C+=3){const P=o.getX(C),b=o.getX(C+1),D=o.getX(C+2);i=Is(this,u,e,n,h,l,f,P,b,D),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,A.start),_=Math.min(o.count,A.start+A.count);for(let p=g,u=_;p<u;p+=3){const x=o.getX(p),m=o.getX(p+1),C=o.getX(p+2);i=Is(this,a,e,n,h,l,f,x,m,C),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],u=a[p.materialIndex],x=Math.max(p.start,A.start),m=Math.min(c.count,Math.min(p.start+p.count,A.start+A.count));for(let C=x,E=m;C<E;C+=3){const P=C,b=C+1,D=C+2;i=Is(this,u,e,n,h,l,f,P,b,D),i&&(i.faceIndex=Math.floor(C/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,A.start),_=Math.min(c.count,A.start+A.count);for(let p=g,u=_;p<u;p+=3){const x=p,m=p+1,C=p+2;i=Is(this,a,e,n,h,l,f,x,m,C),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function qf(s,e,t,n,i,r,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===Qt,o),c===null)return null;bs.copy(o),bs.applyMatrix4(s.matrixWorld);const h=t.ray.origin.distanceTo(bs);return h<t.near||h>t.far?null:{distance:h,point:bs.clone(),object:s}}function Is(s,e,t,n,i,r,a,o,c,h){s.getVertexPosition(o,ci),s.getVertexPosition(c,hi),s.getVertexPosition(h,li);const l=qf(s,e,t,n,ci,hi,li,Ps);if(l){i&&(xs.fromBufferAttribute(i,o),ws.fromBufferAttribute(i,c),Cs.fromBufferAttribute(i,h),l.uv=qt.getInterpolation(Ps,ci,hi,li,xs,ws,Cs,new le)),r&&(xs.fromBufferAttribute(r,o),ws.fromBufferAttribute(r,c),Cs.fromBufferAttribute(r,h),l.uv1=qt.getInterpolation(Ps,ci,hi,li,xs,ws,Cs,new le)),a&&(No.fromBufferAttribute(a,o),Uo.fromBufferAttribute(a,c),Ko.fromBufferAttribute(a,h),l.normal=qt.getInterpolation(Ps,ci,hi,li,No,Uo,Ko,new B),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const f={a:o,b:c,c:h,normal:new B,materialIndex:0};qt.getNormal(ci,hi,li,f.normal),l.face=f}return l}class Ln extends At{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],f=[];let d=0,A=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new nt(h,3)),this.setAttribute("normal",new nt(l,3)),this.setAttribute("uv",new nt(f,2));function g(_,p,u,x,m,C,E,P,b,D,M){const v=C/b,L=E/D,F=C/2,T=E/2,K=P/2,k=b+1,W=D+1;let se=0,q=0;const J=new B;for(let Q=0;Q<W;Q++){const de=Q*L-T;for(let Re=0;Re<k;Re++){const je=Re*v-F;J[_]=je*x,J[p]=de*m,J[u]=K,h.push(J.x,J.y,J.z),J[_]=0,J[p]=0,J[u]=P>0?1:-1,l.push(J.x,J.y,J.z),f.push(Re/b),f.push(1-Q/D),se+=1}}for(let Q=0;Q<D;Q++)for(let de=0;de<b;de++){const Re=d+de+k*Q,je=d+de+k*(Q+1),Y=d+(de+1)+k*(Q+1),$=d+(de+1)+k*Q;c.push(Re,je,$),c.push(je,Y,$),q+=6}o.addGroup(A,q,M),A+=q,d+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ln(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=Ti(s[t]);for(const i in n)e[i]=n[i]}return e}function kf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function gh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Yf={clone:Ti,merge:wt};var Xf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vn extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Xf,this.fragmentShader=Wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=kf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mh extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new B,qo=new le,ko=new le;class bt extends mh{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ei*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Qi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ei*2*Math.atan(Math.tan(Qi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,qo,ko),t.subVectors(ko,qo)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Qi*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/h,i*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,ui=1;class vh extends ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(fi,ui,e,t);i.layers=this.layers,this.add(i);const r=new bt(fi,ui,e,t);r.layers=this.layers,this.add(r);const a=new bt(fi,ui,e,t);a.layers=this.layers,this.add(a);const o=new bt(fi,ui,e,t);o.layers=this.layers,this.add(o);const c=new bt(fi,ui,e,t);c.layers=this.layers,this.add(c);const h=new bt(fi,ui,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const h of t)this.remove(h);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===er)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),A=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,h),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,l),e.setRenderTarget(f,d,A),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class _h extends pt{constructor(e,t,n,i,r,a,o,c,h,l){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,i,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yh extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new _h(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Mt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ln(5,5,5),r=new vn({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:Dn});r.uniforms.tEquirect.value=t;const a=new dt(i,r),o=t.minFilter;return t.minFilter===En&&(t.minFilter=Mt),new vh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ur=new B,Vf=new B,jf=new De;class Xn{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ur.subVectors(n,t).cross(Vf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ur),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||jf.getNormalMatrix(e),i=this.coplanarPoint(Ur).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new tn,Ss=new B;class Ia{constructor(e=new Xn,t=new Xn,n=new Xn,i=new Xn,r=new Xn,a=new Xn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],h=i[4],l=i[5],f=i[6],d=i[7],A=i[8],g=i[9],_=i[10],p=i[11],u=i[12],x=i[13],m=i[14],C=i[15];if(n[0].setComponents(c-r,d-h,p-A,C-u).normalize(),n[1].setComponents(c+r,d+h,p+A,C+u).normalize(),n[2].setComponents(c+a,d+l,p+g,C+x).normalize(),n[3].setComponents(c-a,d-l,p-g,C-x).normalize(),n[4].setComponents(c-o,d-f,p-_,C-m).normalize(),t===gn)n[5].setComponents(c+o,d+f,p+_,C+m).normalize();else if(t===er)n[5].setComponents(o,f,_,m).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(e){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ss.x=i.normal.x>0?e.max.x:e.min.x,Ss.y=i.normal.y>0?e.max.y:e.min.y,Ss.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ss)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mh(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Zf(s){const e=new WeakMap;function t(o,c){const h=o.array,l=o.usage,f=h.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,h,l),o.onUploadCallback();let A;if(h instanceof Float32Array)A=s.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?A=s.HALF_FLOAT:A=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)A=s.SHORT;else if(h instanceof Uint32Array)A=s.UNSIGNED_INT;else if(h instanceof Int32Array)A=s.INT;else if(h instanceof Int8Array)A=s.BYTE;else if(h instanceof Uint8Array)A=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)A=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:A,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,h){const l=c.array,f=c._updateRange,d=c.updateRanges;if(s.bindBuffer(h,o),f.count===-1&&d.length===0&&s.bufferSubData(h,0,l),d.length!==0){for(let A=0,g=d.length;A<g;A++){const _=d[A];s.bufferSubData(h,_.start*l.BYTES_PER_ELEMENT,l,_.start,_.count)}c.clearUpdateRanges()}f.count!==-1&&(s.bufferSubData(h,f.offset*l.BYTES_PER_ELEMENT,l,f.offset,f.count),f.count=-1),c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isGLBufferAttribute){const l=e.get(o);(!l||l.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const h=e.get(o);if(h===void 0)e.set(o,t(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:i,remove:r,update:a}}class Di extends At{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),h=o+1,l=c+1,f=e/o,d=t/c,A=[],g=[],_=[],p=[];for(let u=0;u<l;u++){const x=u*d-a;for(let m=0;m<h;m++){const C=m*f-r;g.push(C,-x,0),_.push(0,0,1),p.push(m/o),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let x=0;x<o;x++){const m=x+h*u,C=x+h*(u+1),E=x+1+h*(u+1),P=x+1+h*u;A.push(m,C,P),A.push(C,E,P)}this.setIndex(A),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Di(e.width,e.height,e.widthSegments,e.heightSegments)}}var Qf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jf=`#ifdef USE_ALPHAHASH
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
#endif`,$f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,eu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,nu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,iu=`#ifdef USE_AOMAP
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
#endif`,su=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ru=`#ifdef USE_BATCHING
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
#endif`,au=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ou=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lu=`#ifdef USE_IRIDESCENCE
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
#endif`,fu=`#ifdef USE_BUMPMAP
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
#endif`,uu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,du=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,pu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,gu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,vu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_u=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yu=`#define PI 3.141592653589793
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
} // validated`,Mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xu=`vec3 transformedNormal = objectNormal;
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
#endif`,wu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
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
}`,Bu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,Du=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
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
#endif`,Lu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ru=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ou=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fu=`#ifdef USE_GRADIENTMAP
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
}`,Hu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,qu=`uniform bool receiveShadow;
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
#endif`,ku=`#ifdef USE_ENVMAP
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
#endif`,Yu=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Xu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ju=`PhysicalMaterial material;
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
#endif`,Zu=`struct PhysicalMaterial {
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
}`,Qu=`
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
#endif`,Ju=`#if defined( RE_IndirectDiffuse )
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
#endif`,$u=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,td=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,rd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ad=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,od=`#if defined( USE_POINTS_UV )
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
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ld=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ud=`#ifdef USE_MORPHNORMALS
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
#endif`,dd=`#ifdef USE_MORPHTARGETS
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
#endif`,pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,gd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,md=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yd=`#ifdef USE_NORMALMAP
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
#endif`,Md=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Id=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ed=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Td=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ld=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Rd=`float getShadowMask() {
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
}`,Od=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fd=`#ifdef USE_SKINNING
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
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Nd=`#ifdef USE_SKINNING
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
#endif`,Ud=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Yd=`#ifdef USE_TRANSMISSION
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
#endif`,Xd=`#ifdef USE_TRANSMISSION
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
#endif`,Wd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jd=`uniform sampler2D t2D;
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
}`,$d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
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
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,np=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ip=`#include <common>
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
}`,sp=`#if DEPTH_PACKING == 3200
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
}`,rp=`#define DISTANCE
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
}`,ap=`#define DISTANCE
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
}`,op=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`uniform float scale;
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
}`,lp=`uniform vec3 diffuse;
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
}`,fp=`#include <common>
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
}`,up=`uniform vec3 diffuse;
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
}`,dp=`#define LAMBERT
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
}`,pp=`#define LAMBERT
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
}`,Ap=`#define MATCAP
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
}`,gp=`#define MATCAP
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
}`,mp=`#define NORMAL
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
}`,vp=`#define NORMAL
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
}`,_p=`#define PHONG
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
}`,yp=`#define PHONG
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
}`,Mp=`#define STANDARD
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
}`,xp=`#define STANDARD
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
}`,wp=`#define TOON
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
}`,Cp=`#define TOON
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
}`,Pp=`uniform float size;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ip=`#include <common>
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
}`,Sp=`uniform vec3 color;
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
}`,Bp=`uniform float rotation;
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
}`,Ep=`uniform vec3 diffuse;
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
}`,Te={alphahash_fragment:Qf,alphahash_pars_fragment:Jf,alphamap_fragment:$f,alphamap_pars_fragment:eu,alphatest_fragment:tu,alphatest_pars_fragment:nu,aomap_fragment:iu,aomap_pars_fragment:su,batching_pars_vertex:ru,batching_vertex:au,begin_vertex:ou,beginnormal_vertex:cu,bsdfs:hu,iridescence_fragment:lu,bumpmap_pars_fragment:fu,clipping_planes_fragment:uu,clipping_planes_pars_fragment:du,clipping_planes_pars_vertex:pu,clipping_planes_vertex:Au,color_fragment:gu,color_pars_fragment:mu,color_pars_vertex:vu,color_vertex:_u,common:yu,cube_uv_reflection_fragment:Mu,defaultnormal_vertex:xu,displacementmap_pars_vertex:wu,displacementmap_vertex:Cu,emissivemap_fragment:Pu,emissivemap_pars_fragment:bu,colorspace_fragment:Iu,colorspace_pars_fragment:Su,envmap_fragment:Bu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:Du,envmap_physical_pars_fragment:ku,envmap_vertex:zu,fog_vertex:Lu,fog_pars_vertex:Gu,fog_fragment:Ru,fog_pars_fragment:Ou,gradientmap_pars_fragment:Fu,lightmap_fragment:Hu,lightmap_pars_fragment:Nu,lights_lambert_fragment:Uu,lights_lambert_pars_fragment:Ku,lights_pars_begin:qu,lights_toon_fragment:Yu,lights_toon_pars_fragment:Xu,lights_phong_fragment:Wu,lights_phong_pars_fragment:Vu,lights_physical_fragment:ju,lights_physical_pars_fragment:Zu,lights_fragment_begin:Qu,lights_fragment_maps:Ju,lights_fragment_end:$u,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:td,logdepthbuf_pars_vertex:nd,logdepthbuf_vertex:id,map_fragment:sd,map_pars_fragment:rd,map_particle_fragment:ad,map_particle_pars_fragment:od,metalnessmap_fragment:cd,metalnessmap_pars_fragment:hd,morphinstance_vertex:ld,morphcolor_vertex:fd,morphnormal_vertex:ud,morphtarget_pars_vertex:dd,morphtarget_vertex:pd,normal_fragment_begin:Ad,normal_fragment_maps:gd,normal_pars_fragment:md,normal_pars_vertex:vd,normal_vertex:_d,normalmap_pars_fragment:yd,clearcoat_normal_fragment_begin:Md,clearcoat_normal_fragment_maps:xd,clearcoat_pars_fragment:wd,iridescence_pars_fragment:Cd,opaque_fragment:Pd,packing:bd,premultiplied_alpha_fragment:Id,project_vertex:Sd,dithering_fragment:Bd,dithering_pars_fragment:Ed,roughnessmap_fragment:Td,roughnessmap_pars_fragment:Dd,shadowmap_pars_fragment:zd,shadowmap_pars_vertex:Ld,shadowmap_vertex:Gd,shadowmask_pars_fragment:Rd,skinbase_vertex:Od,skinning_pars_vertex:Fd,skinning_vertex:Hd,skinnormal_vertex:Nd,specularmap_fragment:Ud,specularmap_pars_fragment:Kd,tonemapping_fragment:qd,tonemapping_pars_fragment:kd,transmission_fragment:Yd,transmission_pars_fragment:Xd,uv_pars_fragment:Wd,uv_pars_vertex:Vd,uv_vertex:jd,worldpos_vertex:Zd,background_vert:Qd,background_frag:Jd,backgroundCube_vert:$d,backgroundCube_frag:ep,cube_vert:tp,cube_frag:np,depth_vert:ip,depth_frag:sp,distanceRGBA_vert:rp,distanceRGBA_frag:ap,equirect_vert:op,equirect_frag:cp,linedashed_vert:hp,linedashed_frag:lp,meshbasic_vert:fp,meshbasic_frag:up,meshlambert_vert:dp,meshlambert_frag:pp,meshmatcap_vert:Ap,meshmatcap_frag:gp,meshnormal_vert:mp,meshnormal_frag:vp,meshphong_vert:_p,meshphong_frag:yp,meshphysical_vert:Mp,meshphysical_frag:xp,meshtoon_vert:wp,meshtoon_frag:Cp,points_vert:Pp,points_frag:bp,shadow_vert:Ip,shadow_frag:Sp,sprite_vert:Bp,sprite_frag:Ep},ie={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},jt={basic:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Te.meshbasic_vert,fragmentShader:Te.meshbasic_frag},lambert:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshlambert_vert,fragmentShader:Te.meshlambert_frag},phong:{uniforms:wt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Te.meshphong_vert,fragmentShader:Te.meshphong_frag},standard:{uniforms:wt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag},toon:{uniforms:wt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new ye(0)}}]),vertexShader:Te.meshtoon_vert,fragmentShader:Te.meshtoon_frag},matcap:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Te.meshmatcap_vert,fragmentShader:Te.meshmatcap_frag},points:{uniforms:wt([ie.points,ie.fog]),vertexShader:Te.points_vert,fragmentShader:Te.points_frag},dashed:{uniforms:wt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Te.linedashed_vert,fragmentShader:Te.linedashed_frag},depth:{uniforms:wt([ie.common,ie.displacementmap]),vertexShader:Te.depth_vert,fragmentShader:Te.depth_frag},normal:{uniforms:wt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Te.meshnormal_vert,fragmentShader:Te.meshnormal_frag},sprite:{uniforms:wt([ie.sprite,ie.fog]),vertexShader:Te.sprite_vert,fragmentShader:Te.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Te.background_vert,fragmentShader:Te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Te.backgroundCube_vert,fragmentShader:Te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Te.cube_vert,fragmentShader:Te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Te.equirect_vert,fragmentShader:Te.equirect_frag},distanceRGBA:{uniforms:wt([ie.common,ie.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Te.distanceRGBA_vert,fragmentShader:Te.distanceRGBA_frag},shadow:{uniforms:wt([ie.lights,ie.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Te.shadow_vert,fragmentShader:Te.shadow_frag}};jt.physical={uniforms:wt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Te.meshphysical_vert,fragmentShader:Te.meshphysical_frag};const Bs={r:0,b:0,g:0},kn=new Jt,Tp=new Le;function Dp(s,e,t,n,i,r,a){const o=new ye(0);let c=r===!0?0:1,h,l,f=null,d=0,A=null;function g(p,u){let x=!1,m=u.isScene===!0?u.background:null;m&&m.isTexture&&(m=(u.backgroundBlurriness>0?t:e).get(m)),m===null?_(o,c):m&&m.isColor&&(_(m,1),x=!0);const C=s.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||x)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),m&&(m.isCubeTexture||m.mapping===ar)?(l===void 0&&(l=new dt(new Ln(1,1,1),new vn({name:"BackgroundCubeMaterial",uniforms:Ti(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(E,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),kn.copy(u.backgroundRotation),kn.x*=-1,kn.y*=-1,kn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(kn.y*=-1,kn.z*=-1),l.material.uniforms.envMap.value=m,l.material.uniforms.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Tp.makeRotationFromEuler(kn)),l.material.toneMapped=Xe.getTransfer(m.colorSpace)!==Je,(f!==m||d!==m.version||A!==s.toneMapping)&&(l.material.needsUpdate=!0,f=m,d=m.version,A=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null)):m&&m.isTexture&&(h===void 0&&(h=new dt(new Di(2,2),new vn({name:"BackgroundMaterial",uniforms:Ti(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=m,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Xe.getTransfer(m.colorSpace)!==Je,m.matrixAutoUpdate===!0&&m.updateMatrix(),h.material.uniforms.uvTransform.value.copy(m.matrix),(f!==m||d!==m.version||A!==s.toneMapping)&&(h.material.needsUpdate=!0,f=m,d=m.version,A=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function _(p,u){p.getRGB(Bs,gh(s)),n.buffers.color.setClear(Bs.r,Bs.g,Bs.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),c=u,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,_(o,c)},render:g}}function zp(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(v,L,F,T,K){let k=!1;const W=f(T,F,L);r!==W&&(r=W,h(r.object)),k=A(v,T,F,K),k&&g(v,T,F,K),K!==null&&e.update(K,s.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,C(v,L,F,T),K!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(K).buffer))}function c(){return s.createVertexArray()}function h(v){return s.bindVertexArray(v)}function l(v){return s.deleteVertexArray(v)}function f(v,L,F){const T=F.wireframe===!0;let K=n[v.id];K===void 0&&(K={},n[v.id]=K);let k=K[L.id];k===void 0&&(k={},K[L.id]=k);let W=k[T];return W===void 0&&(W=d(c()),k[T]=W),W}function d(v){const L=[],F=[],T=[];for(let K=0;K<t;K++)L[K]=0,F[K]=0,T[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:T,object:v,attributes:{},index:null}}function A(v,L,F,T){const K=r.attributes,k=L.attributes;let W=0;const se=F.getAttributes();for(const q in se)if(se[q].location>=0){const Q=K[q];let de=k[q];if(de===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;W++}return r.attributesNum!==W||r.index!==T}function g(v,L,F,T){const K={},k=L.attributes;let W=0;const se=F.getAttributes();for(const q in se)if(se[q].location>=0){let Q=k[q];Q===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(Q=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(Q=v.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),K[q]=de,W++}r.attributes=K,r.attributesNum=W,r.index=T}function _(){const v=r.newAttributes;for(let L=0,F=v.length;L<F;L++)v[L]=0}function p(v){u(v,0)}function u(v,L){const F=r.newAttributes,T=r.enabledAttributes,K=r.attributeDivisors;F[v]=1,T[v]===0&&(s.enableVertexAttribArray(v),T[v]=1),K[v]!==L&&(s.vertexAttribDivisor(v,L),K[v]=L)}function x(){const v=r.newAttributes,L=r.enabledAttributes;for(let F=0,T=L.length;F<T;F++)L[F]!==v[F]&&(s.disableVertexAttribArray(F),L[F]=0)}function m(v,L,F,T,K,k,W){W===!0?s.vertexAttribIPointer(v,L,F,K,k):s.vertexAttribPointer(v,L,F,T,K,k)}function C(v,L,F,T){_();const K=T.attributes,k=F.getAttributes(),W=L.defaultAttributeValues;for(const se in k){const q=k[se];if(q.location>=0){let J=K[se];if(J===void 0&&(se==="instanceMatrix"&&v.instanceMatrix&&(J=v.instanceMatrix),se==="instanceColor"&&v.instanceColor&&(J=v.instanceColor)),J!==void 0){const Q=J.normalized,de=J.itemSize,Re=e.get(J);if(Re===void 0)continue;const je=Re.buffer,Y=Re.type,$=Re.bytesPerElement,ce=Y===s.INT||Y===s.UNSIGNED_INT||J.gpuType===$c;if(J.isInterleavedBufferAttribute){const ae=J.data,Be=ae.stride,ze=J.offset;if(ae.isInstancedInterleavedBuffer){for(let Fe=0;Fe<q.locationSize;Fe++)u(q.location+Fe,ae.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Fe=0;Fe<q.locationSize;Fe++)p(q.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,je);for(let Fe=0;Fe<q.locationSize;Fe++)m(q.location+Fe,de/q.locationSize,Y,Q,Be*$,(ze+de/q.locationSize*Fe)*$,ce)}else{if(J.isInstancedBufferAttribute){for(let ae=0;ae<q.locationSize;ae++)u(q.location+ae,J.meshPerAttribute);v.isInstancedMesh!==!0&&T._maxInstanceCount===void 0&&(T._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ae=0;ae<q.locationSize;ae++)p(q.location+ae);s.bindBuffer(s.ARRAY_BUFFER,je);for(let ae=0;ae<q.locationSize;ae++)m(q.location+ae,de/q.locationSize,Y,Q,de*$,de/q.locationSize*ae*$,ce)}}else if(W!==void 0){const Q=W[se];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}x()}function E(){D();for(const v in n){const L=n[v];for(const F in L){const T=L[F];for(const K in T)l(T[K].object),delete T[K];delete L[F]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const L=n[v.id];for(const F in L){const T=L[F];for(const K in T)l(T[K].object),delete T[K];delete L[F]}delete n[v.id]}function b(v){for(const L in n){const F=n[L];if(F[v.id]===void 0)continue;const T=F[v.id];for(const K in T)l(T[K].object),delete T[K];delete F[v.id]}}function D(){M(),a=!0,r!==i&&(r=i,h(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:D,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:P,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function Lp(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,l){l!==0&&(s.drawArraysInstanced(n,c,h,l),t.update(h,n,l))}function o(c,h,l){if(l===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let d=0;d<l;d++)this.render(c[d],h[d]);else{f.multiDrawArraysWEBGL(n,c,0,h,0,l);let d=0;for(let A=0;A<l;A++)d+=h[A];t.update(d,n,1)}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Gp(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const m=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(m.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(m){if(m==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";m="mediump"}return m==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=t.precision!==void 0?t.precision:"highp";const o=r(a);o!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",o,"instead."),a=o);const c=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),l=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_TEXTURE_SIZE),d=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),A=s.getParameter(s.MAX_VERTEX_ATTRIBS),g=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),_=s.getParameter(s.MAX_VARYING_VECTORS),p=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),u=l>0,x=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:c,maxTextures:h,maxVertexTextures:l,maxTextureSize:f,maxCubemapSize:d,maxAttributes:A,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:p,vertexTextures:u,maxSamples:x}}function Rp(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Xn,o=new De,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const A=f.length!==0||d||n!==0||i;return i=d,n=f.length,A},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=l(f,d,0)},this.setState=function(f,d,A){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,u=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?l(null):h();else{const x=r?0:n,m=x*4;let C=u.clippingState||null;c.value=C,C=l(g,d,m,A);for(let E=0;E!==m;++E)C[E]=t[E];u.clippingState=C,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function h(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function l(f,d,A,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=c.value,g!==!0||p===null){const u=A+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<u)&&(p=new Float32Array(u));for(let m=0,C=A;m!==_;++m,C+=4)a.copy(f[m]).applyMatrix4(x,o),a.normal.toArray(p,C),p[C+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Op(s){let e=new WeakMap;function t(a,o){return o===Ws?a.mapping=Ii:o===ha&&(a.mapping=Si),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ws||o===ha)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new yh(c.height);return h.fromEquirectangularTexture(s,a),e.set(a,h),a.addEventListener("dispose",i),t(h.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class xh extends mh{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xi=4,Yo=[.125,.215,.35,.446,.526,.582],jn=20,Kr=new xh,Xo=new ye;let qr=null,kr=0,Yr=0,Xr=!1;const Wn=(1+Math.sqrt(5))/2,di=1/Wn,Wo=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Wn,di),new B(0,Wn,-di),new B(di,0,Wn),new B(-di,0,Wn),new B(Wn,di,0),new B(-Wn,di,0)];class tr{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){qr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qr,kr,Yr),this._renderer.xr.enabled=Xr,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qr=this._renderer.getRenderTarget(),kr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Xr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Mt,minFilter:Mt,generateMipmaps:!1,type:An,format:kt,colorSpace:en,depthBuffer:!1},i=Vo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Vo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Fp(r)),this._blurMaterial=Hp(r,e,t)}return i}_compileMaterial(e){const t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,Kr)}_sceneToCubeUV(e,t,n,i){const o=new bt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(Xo),l.toneMapping=mn,l.autoClear=!1;const A=new is({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new dt(new Ln,A);let _=!1;const p=e.background;p?p.isColor&&(A.color.copy(p),e.background=null,_=!0):(A.color.copy(Xo),_=!0);for(let u=0;u<6;u++){const x=u%3;x===0?(o.up.set(0,c[u],0),o.lookAt(h[u],0,0)):x===1?(o.up.set(0,0,c[u]),o.lookAt(0,h[u],0)):(o.up.set(0,c[u],0),o.lookAt(0,0,h[u]));const m=this._cubeSize;Es(i,x*m,u>2?m:0,m,m),l.setRenderTarget(i),_&&l.render(g,o),l.render(e,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ii||e.mapping===Si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new dt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Es(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Kr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),a=Wo[(i-1)%Wo.length];this._blur(e,i-1,i,r,a)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new dt(this._lodPlanes[i],h),d=h.uniforms,A=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*A):2*Math.PI/(2*jn-1),_=r/g,p=isFinite(r)?1+Math.floor(l*_):jn;p>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${jn}`);const u=[];let x=0;for(let b=0;b<jn;++b){const D=b/_,M=Math.exp(-D*D/2);u.push(M),b===0?x+=M:b<p&&(x+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:m}=this;d.dTheta.value=g,d.mipInt.value=m-n;const C=this._sizeLods[i],E=3*C*(i>m-xi?i-m+xi:0),P=4*(this._cubeSize-C);Es(t,E,P,3*C,2*C),c.setRenderTarget(t),c.render(f,Kr)}}function Fp(s){const e=[],t=[],n=[];let i=s;const r=s-xi+1+Yo.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-xi?c=Yo[a-s+xi-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],A=6,g=6,_=3,p=2,u=1,x=new Float32Array(_*g*A),m=new Float32Array(p*g*A),C=new Float32Array(u*g*A);for(let P=0;P<A;P++){const b=P%3*2/3-1,D=P>2?0:-1,M=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];x.set(M,_*g*P),m.set(d,p*g*P);const v=[P,P,P,P,P,P];C.set(v,u*g*P)}const E=new At;E.setAttribute("position",new Pt(x,_)),E.setAttribute("uv",new Pt(m,p)),E.setAttribute("faceIndex",new Pt(C,u)),e.push(E),i>xi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Vo(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Es(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Hp(s,e,t){const n=new Float32Array(jn),i=new B(0,1,0);return new vn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function jo(){return new vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Sa(),fragmentShader:`

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
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Zo(){return new vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Sa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dn,depthTest:!1,depthWrite:!1})}function Sa(){return`

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
	`}function Np(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===Ws||c===ha,l=c===Ii||c===Si;if(h||l){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new tr(s)),f=h?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const A=o.image;return h&&A&&A.height>0||l&&A&&i(A)?(t===null&&(t=new tr(s)),f=h?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function i(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Up(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kp(s,e,t,n){const i={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let p=0,u=_.length;p<u;p++)e.remove(_[p])}d.removeEventListener("dispose",a),delete i[d.id];const A=r.get(d);A&&(e.remove(A),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const A=f.morphAttributes;for(const g in A){const _=A[g];for(let p=0,u=_.length;p<u;p++)e.update(_[p],s.ARRAY_BUFFER)}}function h(f){const d=[],A=f.index,g=f.attributes.position;let _=0;if(A!==null){const x=A.array;_=A.version;for(let m=0,C=x.length;m<C;m+=3){const E=x[m+0],P=x[m+1],b=x[m+2];d.push(E,P,P,b,b,E)}}else if(g!==void 0){const x=g.array;_=g.version;for(let m=0,C=x.length/3-1;m<C;m+=3){const E=m+0,P=m+1,b=m+2;d.push(E,P,P,b,b,E)}}else return;const p=new(hh(d)?Ah:ph)(d,1);p.version=_;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function l(f){const d=r.get(f);if(d){const A=f.index;A!==null&&d.version<A.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function qp(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function h(f,d,A){A!==0&&(s.drawElementsInstanced(n,d,r,f*a,A),t.update(d,n,A))}function l(f,d,A){if(A===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let _=0;_<A;_++)this.render(f[_]/a,d[_]);else{g.multiDrawElementsWEBGL(n,d,0,r,f,0,A);let _=0;for(let p=0;p<A;p++)_+=d[p];t.update(_,n,1)}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l}function kp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Yp(s,e,t){const n=new WeakMap,i=new Ve;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){b.dispose(),n.delete(o),o.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const A=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let m=0;A===!0&&(m=1),g===!0&&(m=2),_===!0&&(m=3);let C=o.attributes.position.count*m,E=1;C>e.maxTextureSize&&(E=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*E*4*f),b=new uh(P,C,E,f);b.type=zt,b.needsUpdate=!0;const D=m*4;for(let v=0;v<f;v++){const L=p[v],F=u[v],T=x[v],K=C*E*4*v;for(let k=0;k<L.count;k++){const W=k*D;A===!0&&(i.fromBufferAttribute(L,k),P[K+W+0]=i.x,P[K+W+1]=i.y,P[K+W+2]=i.z,P[K+W+3]=0),g===!0&&(i.fromBufferAttribute(F,k),P[K+W+4]=i.x,P[K+W+5]=i.y,P[K+W+6]=i.z,P[K+W+7]=0),_===!0&&(i.fromBufferAttribute(T,k),P[K+W+8]=i.x,P[K+W+9]=i.y,P[K+W+10]=i.z,P[K+W+11]=T.itemSize===4?i.w:1)}}d={count:f,texture:b,size:new le(C,E)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let A=0;for(let _=0;_<h.length;_++)A+=h[_];const g=o.morphTargetsRelative?1:1-A;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",h)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Xp(s,e,t,n){let i=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,f=e.get(c,l);if(i.get(f)!==h&&(e.update(f),i.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==h&&(d.update(),i.set(d,h))}return f}function a(){i=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:r,dispose:a}}class wh extends pt{constructor(e,t,n,i,r,a,o,c,h,l){if(l=l!==void 0?l:Ci,l!==Ci&&l!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===Ci&&(n=Bi),n===void 0&&l===$i&&(n=ts),super(null,i,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:It,this.minFilter=c!==void 0?c:It,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ch=new pt,Ph=new wh(1,1);Ph.compareFunction=ch;const bh=new uh,Ih=new Ef,Sh=new _h,Qo=[],Jo=[],$o=new Float32Array(16),ec=new Float32Array(9),tc=new Float32Array(4);function zi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Qo[i];if(r===void 0&&(r=new Float32Array(i),Qo[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function ct(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ht(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cr(s,e){let t=Jo[e];t===void 0&&(t=new Int32Array(e),Jo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Wp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2fv(this.addr,e),ht(t,e)}}function jp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ct(t,e))return;s.uniform3fv(this.addr,e),ht(t,e)}}function Zp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4fv(this.addr,e),ht(t,e)}}function Qp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;tc.set(n),s.uniformMatrix2fv(this.addr,!1,tc),ht(t,n)}}function Jp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;ec.set(n),s.uniformMatrix3fv(this.addr,!1,ec),ht(t,n)}}function $p(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(ct(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ht(t,e)}else{if(ct(t,n))return;$o.set(n),s.uniformMatrix4fv(this.addr,!1,$o),ht(t,n)}}function eA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function tA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2iv(this.addr,e),ht(t,e)}}function nA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3iv(this.addr,e),ht(t,e)}}function iA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4iv(this.addr,e),ht(t,e)}}function sA(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function rA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ct(t,e))return;s.uniform2uiv(this.addr,e),ht(t,e)}}function aA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ct(t,e))return;s.uniform3uiv(this.addr,e),ht(t,e)}}function oA(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ct(t,e))return;s.uniform4uiv(this.addr,e),ht(t,e)}}function cA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Ph:Ch;t.setTexture2D(e||r,i)}function hA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ih,i)}function lA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Sh,i)}function fA(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bh,i)}function uA(s){switch(s){case 5126:return Wp;case 35664:return Vp;case 35665:return jp;case 35666:return Zp;case 35674:return Qp;case 35675:return Jp;case 35676:return $p;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return sA;case 36294:return rA;case 36295:return aA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return cA;case 35679:case 36299:case 36307:return hA;case 35680:case 36300:case 36308:case 36293:return lA;case 36289:case 36303:case 36311:case 36292:return fA}}function dA(s,e){s.uniform1fv(this.addr,e)}function pA(s,e){const t=zi(e,this.size,2);s.uniform2fv(this.addr,t)}function AA(s,e){const t=zi(e,this.size,3);s.uniform3fv(this.addr,t)}function gA(s,e){const t=zi(e,this.size,4);s.uniform4fv(this.addr,t)}function mA(s,e){const t=zi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function vA(s,e){const t=zi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function _A(s,e){const t=zi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function yA(s,e){s.uniform1iv(this.addr,e)}function MA(s,e){s.uniform2iv(this.addr,e)}function xA(s,e){s.uniform3iv(this.addr,e)}function wA(s,e){s.uniform4iv(this.addr,e)}function CA(s,e){s.uniform1uiv(this.addr,e)}function PA(s,e){s.uniform2uiv(this.addr,e)}function bA(s,e){s.uniform3uiv(this.addr,e)}function IA(s,e){s.uniform4uiv(this.addr,e)}function SA(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Ch,r[a])}function BA(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Ih,r[a])}function EA(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Sh,r[a])}function TA(s,e,t){const n=this.cache,i=e.length,r=cr(t,i);ct(n,r)||(s.uniform1iv(this.addr,r),ht(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||bh,r[a])}function DA(s){switch(s){case 5126:return dA;case 35664:return pA;case 35665:return AA;case 35666:return gA;case 35674:return mA;case 35675:return vA;case 35676:return _A;case 5124:case 35670:return yA;case 35667:case 35671:return MA;case 35668:case 35672:return xA;case 35669:case 35673:return wA;case 5125:return CA;case 36294:return PA;case 36295:return bA;case 36296:return IA;case 35678:case 36198:case 36298:case 36306:case 35682:return SA;case 35679:case 36299:case 36307:return BA;case 35680:case 36300:case 36308:case 36293:return EA;case 36289:case 36303:case 36311:case 36292:return TA}}class zA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=uA(t.type)}}class LA{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DA(t.type)}}class GA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function nc(s,e){s.seq.push(e),s.map[e.id]=e}function RA(s,e,t){const n=s.name,i=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),a=Wr.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===i){nc(t,h===void 0?new zA(o,s,e):new LA(o,s,e));break}else{let f=t.map[o];f===void 0&&(f=new GA(o),nc(t,f)),t=f}}}class ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);RA(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function ic(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const OA=37297;let FA=0;function HA(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function NA(s){const e=Xe.getPrimaries(Xe.workingColorSpace),t=Xe.getPrimaries(s);let n;switch(e===t?n="":e===$s&&t===Js?n="LinearDisplayP3ToLinearSRGB":e===Js&&t===$s&&(n="LinearSRGBToLinearDisplayP3"),s){case en:case or:return[n,"LinearTransferOETF"];case Ut:case wa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function sc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+HA(s.getShaderSource(e),a)}else return i}function UA(s,e){const t=NA(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function KA(s,e){let t;switch(e){case Zc:t="Linear";break;case El:t="Reinhard";break;case Tl:t="OptimizedCineon";break;case Dl:t="ACESFilmic";break;case Ll:t="AgX";break;case Gl:t="Neutral";break;case zl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function qA(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ji).join(`
`)}function kA(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function YA(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function ji(s){return s!==""}function rc(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ac(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XA=/^[ \t]*#include +<([\w\d./]+)>/gm;function da(s){return s.replace(XA,VA)}const WA=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VA(s,e){let t=Te[e];if(t===void 0){const n=WA.get(e);if(n!==void 0)t=Te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return da(t)}const jA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oc(s){return s.replace(jA,ZA)}function ZA(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function cc(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function QA(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ma?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Vc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fn&&(e="SHADOWMAP_TYPE_VSM"),e}function JA(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ii:case Si:e="ENVMAP_TYPE_CUBE";break;case ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $A(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Si:e="ENVMAP_MODE_REFRACTION";break}return e}function eg(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jc:e="ENVMAP_BLENDING_MULTIPLY";break;case Sl:e="ENVMAP_BLENDING_MIX";break;case Bl:e="ENVMAP_BLENDING_ADD";break}return e}function tg(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function ng(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=QA(t),h=JA(t),l=$A(t),f=eg(t),d=tg(t),A=qA(t),g=kA(r),_=i.createProgram();let p,u,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ji).join(`
`),u.length>0&&(u+=`
`)):(p=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ji).join(`
`),u=[cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mn?"#define TONE_MAPPING":"",t.toneMapping!==mn?Te.tonemapping_pars_fragment:"",t.toneMapping!==mn?KA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Te.colorspace_pars_fragment,UA("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ji).join(`
`)),a=da(a),a=rc(a,t),a=ac(a,t),o=da(o),o=rc(o,t),o=ac(o,t),a=oc(a),o=oc(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[A,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Co?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Co?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const m=x+p+a,C=x+u+o,E=ic(i,i.VERTEX_SHADER,m),P=ic(i,i.FRAGMENT_SHADER,C);i.attachShader(_,E),i.attachShader(_,P),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(L){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(_).trim(),T=i.getShaderInfoLog(E).trim(),K=i.getShaderInfoLog(P).trim();let k=!0,W=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(k=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,_,E,P);else{const se=sc(i,E,"vertex"),q=sc(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+se+`
`+q)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(T===""||K==="")&&(W=!1);W&&(L.diagnostics={runnable:k,programLog:F,vertexShader:{log:T,prefix:p},fragmentShader:{log:K,prefix:u}})}i.deleteShader(E),i.deleteShader(P),D=new ks(i,_),M=YA(i,_)}let D;this.getUniforms=function(){return D===void 0&&b(this),D};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(_,OA)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=FA++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=P,this}let ig=0;class sg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new rg(e),t.set(e,n)),n}}class rg{constructor(e){this.id=ig++,this.code=e,this.usedTimes=0}}function ag(s,e,t,n,i,r,a){const o=new ba,c=new sg,h=new Set,l=[],f=i.logarithmicDepthBuffer,d=i.vertexTextures;let A=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return h.add(M),M===0?"uv":`uv${M}`}function p(M,v,L,F,T){const K=F.fog,k=T.geometry,W=M.isMeshStandardMaterial?F.environment:null,se=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),q=se&&se.mapping===ar?se.image.height:null,J=g[M.type];M.precision!==null&&(A=i.getMaxPrecision(M.precision),A!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",A,"instead."));const Q=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,de=Q!==void 0?Q.length:0;let Re=0;k.morphAttributes.position!==void 0&&(Re=1),k.morphAttributes.normal!==void 0&&(Re=2),k.morphAttributes.color!==void 0&&(Re=3);let je,Y,$,ce;if(J){const gt=jt[J];je=gt.vertexShader,Y=gt.fragmentShader}else je=M.vertexShader,Y=M.fragmentShader,c.update(M),$=c.getVertexShaderID(M),ce=c.getFragmentShaderID(M);const ae=s.getRenderTarget(),Be=T.isInstancedMesh===!0,ze=T.isBatchedMesh===!0,Fe=!!M.map,R=!!M.matcap,Ge=!!se,xe=!!M.aoMap,ot=!!M.lightMap,Ce=!!M.bumpMap,We=!!M.normalMap,I=!!M.displacementMap,y=!!M.emissiveMap,U=!!M.metalnessMap,X=!!M.roughnessMap,V=M.anisotropy>0,j=M.clearcoat>0,_e=M.iridescence>0,Z=M.sheen>0,ge=M.transmission>0,Me=V&&!!M.anisotropyMap,ne=j&&!!M.clearcoatMap,oe=j&&!!M.clearcoatNormalMap,Pe=j&&!!M.clearcoatRoughnessMap,he=_e&&!!M.iridescenceMap,fe=_e&&!!M.iridescenceThicknessMap,Oe=Z&&!!M.sheenColorMap,He=Z&&!!M.sheenRoughnessMap,Ue=!!M.specularMap,Ne=!!M.specularColorMap,$e=!!M.specularIntensityMap,pe=ge&&!!M.transmissionMap,S=ge&&!!M.thicknessMap,te=!!M.gradientMap,ee=!!M.alphaMap,Ae=M.alphaTest>0,me=!!M.alphaHash,Ze=!!M.extensions;let et=mn;M.toneMapped&&(ae===null||ae.isXRRenderTarget===!0)&&(et=s.toneMapping);const it={shaderID:J,shaderType:M.type,shaderName:M.name,vertexShader:je,fragmentShader:Y,defines:M.defines,customVertexShaderID:$,customFragmentShaderID:ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:A,batching:ze,instancing:Be,instancingColor:Be&&T.instanceColor!==null,instancingMorph:Be&&T.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ae===null?s.outputColorSpace:ae.isXRRenderTarget===!0?ae.texture.colorSpace:en,alphaToCoverage:!!M.alphaToCoverage,map:Fe,matcap:R,envMap:Ge,envMapMode:Ge&&se.mapping,envMapCubeUVHeight:q,aoMap:xe,lightMap:ot,bumpMap:Ce,normalMap:We,displacementMap:d&&I,emissiveMap:y,normalMapObjectSpace:We&&M.normalMapType===$l,normalMapTangentSpace:We&&M.normalMapType===oh,metalnessMap:U,roughnessMap:X,anisotropy:V,anisotropyMap:Me,clearcoat:j,clearcoatMap:ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:Pe,iridescence:_e,iridescenceMap:he,iridescenceThicknessMap:fe,sheen:Z,sheenColorMap:Oe,sheenRoughnessMap:He,specularMap:Ue,specularColorMap:Ne,specularIntensityMap:$e,transmission:ge,transmissionMap:pe,thicknessMap:S,gradientMap:te,opaque:M.transparent===!1&&M.blending===wi&&M.alphaToCoverage===!1,alphaMap:ee,alphaTest:Ae,alphaHash:me,combine:M.combine,mapUv:Fe&&_(M.map.channel),aoMapUv:xe&&_(M.aoMap.channel),lightMapUv:ot&&_(M.lightMap.channel),bumpMapUv:Ce&&_(M.bumpMap.channel),normalMapUv:We&&_(M.normalMap.channel),displacementMapUv:I&&_(M.displacementMap.channel),emissiveMapUv:y&&_(M.emissiveMap.channel),metalnessMapUv:U&&_(M.metalnessMap.channel),roughnessMapUv:X&&_(M.roughnessMap.channel),anisotropyMapUv:Me&&_(M.anisotropyMap.channel),clearcoatMapUv:ne&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:He&&_(M.sheenRoughnessMap.channel),specularMapUv:Ue&&_(M.specularMap.channel),specularColorMapUv:Ne&&_(M.specularColorMap.channel),specularIntensityMapUv:$e&&_(M.specularIntensityMap.channel),transmissionMapUv:pe&&_(M.transmissionMap.channel),thicknessMapUv:S&&_(M.thicknessMap.channel),alphaMapUv:ee&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(We||V),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:T.isPoints===!0&&!!k.attributes.uv&&(Fe||ee),fog:!!K,useFog:M.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:T.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&L.length>0,shadowMapType:s.shadowMap.type,toneMapping:et,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Fe&&M.map.isVideoTexture===!0&&Xe.getTransfer(M.map.colorSpace)===Je,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Zt,flipSided:M.side===Ct,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ze&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&M.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return it.vertexUv1s=h.has(1),it.vertexUv2s=h.has(2),it.vertexUv3s=h.has(3),h.clear(),it}function u(M){const v=[];if(M.shaderID?v.push(M.shaderID):(v.push(M.customVertexShaderID),v.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)v.push(L),v.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(x(v,M),m(v,M),v.push(s.outputColorSpace)),v.push(M.customProgramCacheKey),v.join()}function x(M,v){M.push(v.precision),M.push(v.outputColorSpace),M.push(v.envMapMode),M.push(v.envMapCubeUVHeight),M.push(v.mapUv),M.push(v.alphaMapUv),M.push(v.lightMapUv),M.push(v.aoMapUv),M.push(v.bumpMapUv),M.push(v.normalMapUv),M.push(v.displacementMapUv),M.push(v.emissiveMapUv),M.push(v.metalnessMapUv),M.push(v.roughnessMapUv),M.push(v.anisotropyMapUv),M.push(v.clearcoatMapUv),M.push(v.clearcoatNormalMapUv),M.push(v.clearcoatRoughnessMapUv),M.push(v.iridescenceMapUv),M.push(v.iridescenceThicknessMapUv),M.push(v.sheenColorMapUv),M.push(v.sheenRoughnessMapUv),M.push(v.specularMapUv),M.push(v.specularColorMapUv),M.push(v.specularIntensityMapUv),M.push(v.transmissionMapUv),M.push(v.thicknessMapUv),M.push(v.combine),M.push(v.fogExp2),M.push(v.sizeAttenuation),M.push(v.morphTargetsCount),M.push(v.morphAttributeCount),M.push(v.numDirLights),M.push(v.numPointLights),M.push(v.numSpotLights),M.push(v.numSpotLightMaps),M.push(v.numHemiLights),M.push(v.numRectAreaLights),M.push(v.numDirLightShadows),M.push(v.numPointLightShadows),M.push(v.numSpotLightShadows),M.push(v.numSpotLightShadowsWithMaps),M.push(v.numLightProbes),M.push(v.shadowMapType),M.push(v.toneMapping),M.push(v.numClippingPlanes),M.push(v.numClipIntersection),M.push(v.depthPacking)}function m(M,v){o.disableAll(),v.supportsVertexTextures&&o.enable(0),v.instancing&&o.enable(1),v.instancingColor&&o.enable(2),v.instancingMorph&&o.enable(3),v.matcap&&o.enable(4),v.envMap&&o.enable(5),v.normalMapObjectSpace&&o.enable(6),v.normalMapTangentSpace&&o.enable(7),v.clearcoat&&o.enable(8),v.iridescence&&o.enable(9),v.alphaTest&&o.enable(10),v.vertexColors&&o.enable(11),v.vertexAlphas&&o.enable(12),v.vertexUv1s&&o.enable(13),v.vertexUv2s&&o.enable(14),v.vertexUv3s&&o.enable(15),v.vertexTangents&&o.enable(16),v.anisotropy&&o.enable(17),v.alphaHash&&o.enable(18),v.batching&&o.enable(19),M.push(o.mask),o.disableAll(),v.fog&&o.enable(0),v.useFog&&o.enable(1),v.flatShading&&o.enable(2),v.logarithmicDepthBuffer&&o.enable(3),v.skinning&&o.enable(4),v.morphTargets&&o.enable(5),v.morphNormals&&o.enable(6),v.morphColors&&o.enable(7),v.premultipliedAlpha&&o.enable(8),v.shadowMapEnabled&&o.enable(9),v.useLegacyLights&&o.enable(10),v.doubleSided&&o.enable(11),v.flipSided&&o.enable(12),v.useDepthPacking&&o.enable(13),v.dithering&&o.enable(14),v.transmission&&o.enable(15),v.sheen&&o.enable(16),v.opaque&&o.enable(17),v.pointsUvs&&o.enable(18),v.decodeVideoTexture&&o.enable(19),v.alphaToCoverage&&o.enable(20),M.push(o.mask)}function C(M){const v=g[M.type];let L;if(v){const F=jt[v];L=Yf.clone(F.uniforms)}else L=M.uniforms;return L}function E(M,v){let L;for(let F=0,T=l.length;F<T;F++){const K=l[F];if(K.cacheKey===v){L=K,++L.usedTimes;break}}return L===void 0&&(L=new ng(s,v,M,r),l.push(L)),L}function P(M){if(--M.usedTimes===0){const v=l.indexOf(M);l[v]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function D(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:C,acquireProgram:E,releaseProgram:P,releaseShaderCache:b,programs:l,dispose:D}}function og(){let s=new WeakMap;function e(r){let a=s.get(r);return a===void 0&&(a={},s.set(r,a)),a}function t(r){s.delete(r)}function n(r,a,o){s.get(r)[a]=o}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function hc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function lc(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,A,g,_,p){let u=s[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:A,groupOrder:g,renderOrder:f.renderOrder,z:_,group:p},s[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=A,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=_,u.group=p),e++,u}function o(f,d,A,g,_,p){const u=a(f,d,A,g,_,p);A.transmission>0?n.push(u):A.transparent===!0?i.push(u):t.push(u)}function c(f,d,A,g,_,p){const u=a(f,d,A,g,_,p);A.transmission>0?n.unshift(u):A.transparent===!0?i.unshift(u):t.unshift(u)}function h(f,d){t.length>1&&t.sort(f||cg),n.length>1&&n.sort(d||hc),i.length>1&&i.sort(d||hc)}function l(){for(let f=e,d=s.length;f<d;f++){const A=s[f];if(A.id===null)break;A.id=null,A.object=null,A.geometry=null,A.material=null,A.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:l,sort:h}}function hg(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new lc,s.set(n,[a])):i>=r.length?(a=new lc,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function lg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ye};break;case"SpotLight":t={position:new B,direction:new B,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new B,halfWidth:new B,halfHeight:new B};break}return s[e.id]=t,t}}}function fg(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let ug=0;function dg(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pg(s){const e=new lg,t=fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new B);const i=new B,r=new Le,a=new Le;function o(h,l){let f=0,d=0,A=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let g=0,_=0,p=0,u=0,x=0,m=0,C=0,E=0,P=0,b=0,D=0;h.sort(dg);const M=l===!0?Math.PI:1;for(let L=0,F=h.length;L<F;L++){const T=h[L],K=T.color,k=T.intensity,W=T.distance,se=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)f+=K.r*k*M,d+=K.g*k*M,A+=K.b*k*M;else if(T.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(T.sh.coefficients[q],k);D++}else if(T.isDirectionalLight){const q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*M),T.castShadow){const J=T.shadow,Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=se,n.directionalShadowMatrix[g]=T.shadow.matrix,m++}n.directional[g]=q,g++}else if(T.isSpotLight){const q=e.get(T);q.position.setFromMatrixPosition(T.matrixWorld),q.color.copy(K).multiplyScalar(k*M),q.distance=W,q.coneCos=Math.cos(T.angle),q.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),q.decay=T.decay,n.spot[p]=q;const J=T.shadow;if(T.map&&(n.spotLightMap[P]=T.map,P++,J.updateMatrices(T),T.castShadow&&b++),n.spotLightMatrix[p]=J.matrix,T.castShadow){const Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,n.spotShadow[p]=Q,n.spotShadowMap[p]=se,E++}p++}else if(T.isRectAreaLight){const q=e.get(T);q.color.copy(K).multiplyScalar(k),q.halfWidth.set(T.width*.5,0,0),q.halfHeight.set(0,T.height*.5,0),n.rectArea[u]=q,u++}else if(T.isPointLight){const q=e.get(T);if(q.color.copy(T.color).multiplyScalar(T.intensity*M),q.distance=T.distance,q.decay=T.decay,T.castShadow){const J=T.shadow,Q=t.get(T);Q.shadowBias=J.bias,Q.shadowNormalBias=J.normalBias,Q.shadowRadius=J.radius,Q.shadowMapSize=J.mapSize,Q.shadowCameraNear=J.camera.near,Q.shadowCameraFar=J.camera.far,n.pointShadow[_]=Q,n.pointShadowMap[_]=se,n.pointShadowMatrix[_]=T.shadow.matrix,C++}n.point[_]=q,_++}else if(T.isHemisphereLight){const q=e.get(T);q.skyColor.copy(T.color).multiplyScalar(k*M),q.groundColor.copy(T.groundColor).multiplyScalar(k*M),n.hemi[x]=q,x++}}u>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=A;const v=n.hash;(v.directionalLength!==g||v.pointLength!==_||v.spotLength!==p||v.rectAreaLength!==u||v.hemiLength!==x||v.numDirectionalShadows!==m||v.numPointShadows!==C||v.numSpotShadows!==E||v.numSpotMaps!==P||v.numLightProbes!==D)&&(n.directional.length=g,n.spot.length=p,n.rectArea.length=u,n.point.length=_,n.hemi.length=x,n.directionalShadow.length=m,n.directionalShadowMap.length=m,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=m,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=E+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=D,v.directionalLength=g,v.pointLength=_,v.spotLength=p,v.rectAreaLength=u,v.hemiLength=x,v.numDirectionalShadows=m,v.numPointShadows=C,v.numSpotShadows=E,v.numSpotMaps=P,v.numLightProbes=D,n.version=ug++)}function c(h,l){let f=0,d=0,A=0,g=0,_=0;const p=l.matrixWorldInverse;for(let u=0,x=h.length;u<x;u++){const m=h[u];if(m.isDirectionalLight){const C=n.directional[f];C.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),f++}else if(m.isSpotLight){const C=n.spot[A];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(p),C.direction.setFromMatrixPosition(m.matrixWorld),i.setFromMatrixPosition(m.target.matrixWorld),C.direction.sub(i),C.direction.transformDirection(p),A++}else if(m.isRectAreaLight){const C=n.rectArea[g];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(p),a.identity(),r.copy(m.matrixWorld),r.premultiply(p),a.extractRotation(r),C.halfWidth.set(m.width*.5,0,0),C.halfHeight.set(0,m.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),g++}else if(m.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(m.matrixWorld),C.position.applyMatrix4(p),d++}else if(m.isHemisphereLight){const C=n.hemi[_];C.direction.setFromMatrixPosition(m.matrixWorld),C.direction.transformDirection(p),_++}}}return{setup:o,setupView:c,state:n}}function fc(s){const e=new pg(s),t=[],n=[];function i(){t.length=0,n.length=0}function r(l){t.push(l)}function a(l){n.push(l)}function o(l){e.setup(t,l)}function c(l){e.setupView(t,l)}return{init:i,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function Ag(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new fc(s),e.set(i,[o])):r>=a.length?(o=new fc(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class gg extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ql,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class mg extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_g=`uniform sampler2D shadow_pass;
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
}`;function yg(s,e,t){let n=new Ia;const i=new le,r=new le,a=new Ve,o=new gg({depthPacking:Jl}),c=new mg,h={},l=t.maxTextureSize,f={[Qt]:Ct,[Ct]:Qt,[Zt]:Zt},d=new vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:vg,fragmentShader:_g}),A=d.clone();A.defines.HORIZONTAL_PASS=1;const g=new At;g.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new dt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ma;let u=this.type;this.render=function(P,b,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const M=s.getRenderTarget(),v=s.getActiveCubeFace(),L=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Dn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const T=u!==fn&&this.type===fn,K=u===fn&&this.type!==fn;for(let k=0,W=P.length;k<W;k++){const se=P[k],q=se.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;i.copy(q.mapSize);const J=q.getFrameExtents();if(i.multiply(J),r.copy(q.mapSize),(i.x>l||i.y>l)&&(i.x>l&&(r.x=Math.floor(l/J.x),i.x=r.x*J.x,q.mapSize.x=r.x),i.y>l&&(r.y=Math.floor(l/J.y),i.y=r.y*J.y,q.mapSize.y=r.y)),q.map===null||T===!0||K===!0){const de=this.type!==fn?{minFilter:It,magFilter:It}:{};q.map!==null&&q.map.dispose(),q.map=new Zn(i.x,i.y,de),q.map.texture.name=se.name+".shadowMap",q.camera.updateProjectionMatrix()}s.setRenderTarget(q.map),s.clear();const Q=q.getViewportCount();for(let de=0;de<Q;de++){const Re=q.getViewport(de);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),F.viewport(a),q.updateMatrices(se,de),n=q.getFrustum(),C(b,D,q.camera,se,this.type)}q.isPointLightShadow!==!0&&this.type===fn&&x(q,D),q.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(M,v,L)};function x(P,b){const D=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,A.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,A.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(b,null,D,d,_,null),A.uniforms.shadow_pass.value=P.mapPass.texture,A.uniforms.resolution.value=P.mapSize,A.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(b,null,D,A,_,null)}function m(P,b,D,M){let v=null;const L=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(L!==void 0)v=L;else if(v=D.isPointLight===!0?c:o,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const F=v.uuid,T=b.uuid;let K=h[F];K===void 0&&(K={},h[F]=K);let k=K[T];k===void 0&&(k=v.clone(),K[T]=k,b.addEventListener("dispose",E)),v=k}if(v.visible=b.visible,v.wireframe=b.wireframe,M===fn?v.side=b.shadowSide!==null?b.shadowSide:b.side:v.side=b.shadowSide!==null?b.shadowSide:f[b.side],v.alphaMap=b.alphaMap,v.alphaTest=b.alphaTest,v.map=b.map,v.clipShadows=b.clipShadows,v.clippingPlanes=b.clippingPlanes,v.clipIntersection=b.clipIntersection,v.displacementMap=b.displacementMap,v.displacementScale=b.displacementScale,v.displacementBias=b.displacementBias,v.wireframeLinewidth=b.wireframeLinewidth,v.linewidth=b.linewidth,D.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=D}return v}function C(P,b,D,M,v){if(P.visible===!1)return;if(P.layers.test(b.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===fn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const T=e.update(P),K=P.material;if(Array.isArray(K)){const k=T.groups;for(let W=0,se=k.length;W<se;W++){const q=k[W],J=K[q.materialIndex];if(J&&J.visible){const Q=m(P,J,M,v);P.onBeforeShadow(s,P,b,D,T,Q,q),s.renderBufferDirect(D,null,T,Q,P,q),P.onAfterShadow(s,P,b,D,T,Q,q)}}}else if(K.visible){const k=m(P,K,M,v);P.onBeforeShadow(s,P,b,D,T,k,null),s.renderBufferDirect(D,null,T,k,P,null),P.onAfterShadow(s,P,b,D,T,k,null)}}const F=P.children;for(let T=0,K=F.length;T<K;T++)C(F[T],b,D,M,v)}function E(P){P.target.removeEventListener("dispose",E);for(const D in h){const M=h[D],v=P.target.uuid;v in M&&(M[v].dispose(),delete M[v])}}}function Mg(s){function e(){let S=!1;const te=new Ve;let ee=null;const Ae=new Ve(0,0,0,0);return{setMask:function(me){ee!==me&&!S&&(s.colorMask(me,me,me,me),ee=me)},setLocked:function(me){S=me},setClear:function(me,Ze,et,it,gt){gt===!0&&(me*=it,Ze*=it,et*=it),te.set(me,Ze,et,it),Ae.equals(te)===!1&&(s.clearColor(me,Ze,et,it),Ae.copy(te))},reset:function(){S=!1,ee=null,Ae.set(-1,0,0,0)}}}function t(){let S=!1,te=null,ee=null,Ae=null;return{setTest:function(me){me?ce(s.DEPTH_TEST):ae(s.DEPTH_TEST)},setMask:function(me){te!==me&&!S&&(s.depthMask(me),te=me)},setFunc:function(me){if(ee!==me){switch(me){case Ml:s.depthFunc(s.NEVER);break;case xl:s.depthFunc(s.ALWAYS);break;case wl:s.depthFunc(s.LESS);break;case Xs:s.depthFunc(s.LEQUAL);break;case Cl:s.depthFunc(s.EQUAL);break;case Pl:s.depthFunc(s.GEQUAL);break;case bl:s.depthFunc(s.GREATER);break;case Il:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ee=me}},setLocked:function(me){S=me},setClear:function(me){Ae!==me&&(s.clearDepth(me),Ae=me)},reset:function(){S=!1,te=null,ee=null,Ae=null}}}function n(){let S=!1,te=null,ee=null,Ae=null,me=null,Ze=null,et=null,it=null,gt=null;return{setTest:function(Qe){S||(Qe?ce(s.STENCIL_TEST):ae(s.STENCIL_TEST))},setMask:function(Qe){te!==Qe&&!S&&(s.stencilMask(Qe),te=Qe)},setFunc:function(Qe,Wt,Vt){(ee!==Qe||Ae!==Wt||me!==Vt)&&(s.stencilFunc(Qe,Wt,Vt),ee=Qe,Ae=Wt,me=Vt)},setOp:function(Qe,Wt,Vt){(Ze!==Qe||et!==Wt||it!==Vt)&&(s.stencilOp(Qe,Wt,Vt),Ze=Qe,et=Wt,it=Vt)},setLocked:function(Qe){S=Qe},setClear:function(Qe){gt!==Qe&&(s.clearStencil(Qe),gt=Qe)},reset:function(){S=!1,te=null,ee=null,Ae=null,me=null,Ze=null,et=null,it=null,gt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let h={},l={},f=new WeakMap,d=[],A=null,g=!1,_=null,p=null,u=null,x=null,m=null,C=null,E=null,P=new ye(0,0,0),b=0,D=!1,M=null,v=null,L=null,F=null,T=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,W=0;const se=s.getParameter(s.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),k=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),k=W>=2);let q=null,J={};const Q=s.getParameter(s.SCISSOR_BOX),de=s.getParameter(s.VIEWPORT),Re=new Ve().fromArray(Q),je=new Ve().fromArray(de);function Y(S,te,ee,Ae){const me=new Uint8Array(4),Ze=s.createTexture();s.bindTexture(S,Ze),s.texParameteri(S,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(S,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<ee;et++)S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY?s.texImage3D(te,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,me):s.texImage2D(te+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,me);return Ze}const $={};$[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),$[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),$[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ce(s.DEPTH_TEST),r.setFunc(Xs),Ce(!1),We(Xa),ce(s.CULL_FACE),xe(Dn);function ce(S){h[S]!==!0&&(s.enable(S),h[S]=!0)}function ae(S){h[S]!==!1&&(s.disable(S),h[S]=!1)}function Be(S,te){return l[S]!==te?(s.bindFramebuffer(S,te),l[S]=te,S===s.DRAW_FRAMEBUFFER&&(l[s.FRAMEBUFFER]=te),S===s.FRAMEBUFFER&&(l[s.DRAW_FRAMEBUFFER]=te),!0):!1}function ze(S,te){let ee=d,Ae=!1;if(S){ee=f.get(te),ee===void 0&&(ee=[],f.set(te,ee));const me=S.textures;if(ee.length!==me.length||ee[0]!==s.COLOR_ATTACHMENT0){for(let Ze=0,et=me.length;Ze<et;Ze++)ee[Ze]=s.COLOR_ATTACHMENT0+Ze;ee.length=me.length,Ae=!0}}else ee[0]!==s.BACK&&(ee[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(ee)}function Fe(S){return A!==S?(s.useProgram(S),A=S,!0):!1}const R={[Vn]:s.FUNC_ADD,[sl]:s.FUNC_SUBTRACT,[rl]:s.FUNC_REVERSE_SUBTRACT};R[al]=s.MIN,R[ol]=s.MAX;const Ge={[cl]:s.ZERO,[hl]:s.ONE,[ll]:s.SRC_COLOR,[oa]:s.SRC_ALPHA,[gl]:s.SRC_ALPHA_SATURATE,[pl]:s.DST_COLOR,[ul]:s.DST_ALPHA,[fl]:s.ONE_MINUS_SRC_COLOR,[ca]:s.ONE_MINUS_SRC_ALPHA,[Al]:s.ONE_MINUS_DST_COLOR,[dl]:s.ONE_MINUS_DST_ALPHA,[ml]:s.CONSTANT_COLOR,[vl]:s.ONE_MINUS_CONSTANT_COLOR,[_l]:s.CONSTANT_ALPHA,[yl]:s.ONE_MINUS_CONSTANT_ALPHA};function xe(S,te,ee,Ae,me,Ze,et,it,gt,Qe){if(S===Dn){g===!0&&(ae(s.BLEND),g=!1);return}if(g===!1&&(ce(s.BLEND),g=!0),S!==il){if(S!==_||Qe!==D){if((p!==Vn||m!==Vn)&&(s.blendEquation(s.FUNC_ADD),p=Vn,m=Vn),Qe)switch(S){case wi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.ONE,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ja:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}else switch(S){case wi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Wa:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Va:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case ja:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",S);break}u=null,x=null,C=null,E=null,P.set(0,0,0),b=0,_=S,D=Qe}return}me=me||te,Ze=Ze||ee,et=et||Ae,(te!==p||me!==m)&&(s.blendEquationSeparate(R[te],R[me]),p=te,m=me),(ee!==u||Ae!==x||Ze!==C||et!==E)&&(s.blendFuncSeparate(Ge[ee],Ge[Ae],Ge[Ze],Ge[et]),u=ee,x=Ae,C=Ze,E=et),(it.equals(P)===!1||gt!==b)&&(s.blendColor(it.r,it.g,it.b,gt),P.copy(it),b=gt),_=S,D=!1}function ot(S,te){S.side===Zt?ae(s.CULL_FACE):ce(s.CULL_FACE);let ee=S.side===Ct;te&&(ee=!ee),Ce(ee),S.blending===wi&&S.transparent===!1?xe(Dn):xe(S.blending,S.blendEquation,S.blendSrc,S.blendDst,S.blendEquationAlpha,S.blendSrcAlpha,S.blendDstAlpha,S.blendColor,S.blendAlpha,S.premultipliedAlpha),r.setFunc(S.depthFunc),r.setTest(S.depthTest),r.setMask(S.depthWrite),i.setMask(S.colorWrite);const Ae=S.stencilWrite;a.setTest(Ae),Ae&&(a.setMask(S.stencilWriteMask),a.setFunc(S.stencilFunc,S.stencilRef,S.stencilFuncMask),a.setOp(S.stencilFail,S.stencilZFail,S.stencilZPass)),y(S.polygonOffset,S.polygonOffsetFactor,S.polygonOffsetUnits),S.alphaToCoverage===!0?ce(s.SAMPLE_ALPHA_TO_COVERAGE):ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(S){M!==S&&(S?s.frontFace(s.CW):s.frontFace(s.CCW),M=S)}function We(S){S!==el?(ce(s.CULL_FACE),S!==v&&(S===Xa?s.cullFace(s.BACK):S===tl?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ae(s.CULL_FACE),v=S}function I(S){S!==L&&(k&&s.lineWidth(S),L=S)}function y(S,te,ee){S?(ce(s.POLYGON_OFFSET_FILL),(F!==te||T!==ee)&&(s.polygonOffset(te,ee),F=te,T=ee)):ae(s.POLYGON_OFFSET_FILL)}function U(S){S?ce(s.SCISSOR_TEST):ae(s.SCISSOR_TEST)}function X(S){S===void 0&&(S=s.TEXTURE0+K-1),q!==S&&(s.activeTexture(S),q=S)}function V(S,te,ee){ee===void 0&&(q===null?ee=s.TEXTURE0+K-1:ee=q);let Ae=J[ee];Ae===void 0&&(Ae={type:void 0,texture:void 0},J[ee]=Ae),(Ae.type!==S||Ae.texture!==te)&&(q!==ee&&(s.activeTexture(ee),q=ee),s.bindTexture(S,te||$[S]),Ae.type=S,Ae.texture=te)}function j(){const S=J[q];S!==void 0&&S.type!==void 0&&(s.bindTexture(S.type,null),S.type=void 0,S.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ge(){try{s.texSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Me(){try{s.texSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function ne(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Pe(){try{s.texStorage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function he(){try{s.texStorage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function Oe(){try{s.texImage3D.apply(s,arguments)}catch(S){console.error("THREE.WebGLState:",S)}}function He(S){Re.equals(S)===!1&&(s.scissor(S.x,S.y,S.z,S.w),Re.copy(S))}function Ue(S){je.equals(S)===!1&&(s.viewport(S.x,S.y,S.z,S.w),je.copy(S))}function Ne(S,te){let ee=c.get(te);ee===void 0&&(ee=new WeakMap,c.set(te,ee));let Ae=ee.get(S);Ae===void 0&&(Ae=s.getUniformBlockIndex(te,S.name),ee.set(S,Ae))}function $e(S,te){const Ae=c.get(te).get(S);o.get(te)!==Ae&&(s.uniformBlockBinding(te,Ae,S.__bindingPointIndex),o.set(te,Ae))}function pe(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},q=null,J={},l={},f=new WeakMap,d=[],A=null,g=!1,_=null,p=null,u=null,x=null,m=null,C=null,E=null,P=new ye(0,0,0),b=0,D=!1,M=null,v=null,L=null,F=null,T=null,Re.set(0,0,s.canvas.width,s.canvas.height),je.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:ce,disable:ae,bindFramebuffer:Be,drawBuffers:ze,useProgram:Fe,setBlending:xe,setMaterial:ot,setFlipSided:Ce,setCullFace:We,setLineWidth:I,setPolygonOffset:y,setScissorTest:U,activeTexture:X,bindTexture:V,unbindTexture:j,compressedTexImage2D:_e,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Oe,updateUBOMapping:Ne,uniformBlockBinding:$e,texStorage2D:Pe,texStorage3D:he,texSubImage2D:ge,texSubImage3D:Me,compressedTexSubImage2D:ne,compressedTexSubImage3D:oe,scissor:He,viewport:Ue,reset:pe}}function xg(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new le,l=new WeakMap;let f;const d=new WeakMap;let A=!1;try{A=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,y){return A?new OffscreenCanvas(I,y):es("canvas")}function _(I,y,U){let X=1;const V=We(I);if((V.width>U||V.height>U)&&(X=U/Math.max(V.width,V.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const j=Math.floor(X*V.width),_e=Math.floor(X*V.height);f===void 0&&(f=g(j,_e));const Z=y?g(j,_e):f;return Z.width=j,Z.height=_e,Z.getContext("2d").drawImage(I,0,0,j,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+V.width+"x"+V.height+") to ("+j+"x"+_e+")."),Z}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+V.width+"x"+V.height+")."),I;return I}function p(I){return I.generateMipmaps&&I.minFilter!==It&&I.minFilter!==Mt}function u(I){s.generateMipmap(I)}function x(I,y,U,X,V=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let j=y;if(y===s.RED&&(U===s.FLOAT&&(j=s.R32F),U===s.HALF_FLOAT&&(j=s.R16F),U===s.UNSIGNED_BYTE&&(j=s.R8)),y===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(j=s.R8UI),U===s.UNSIGNED_SHORT&&(j=s.R16UI),U===s.UNSIGNED_INT&&(j=s.R32UI),U===s.BYTE&&(j=s.R8I),U===s.SHORT&&(j=s.R16I),U===s.INT&&(j=s.R32I)),y===s.RG&&(U===s.FLOAT&&(j=s.RG32F),U===s.HALF_FLOAT&&(j=s.RG16F),U===s.UNSIGNED_BYTE&&(j=s.RG8)),y===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(j=s.RG8UI),U===s.UNSIGNED_SHORT&&(j=s.RG16UI),U===s.UNSIGNED_INT&&(j=s.RG32UI),U===s.BYTE&&(j=s.RG8I),U===s.SHORT&&(j=s.RG16I),U===s.INT&&(j=s.RG32I)),y===s.RGB&&U===s.UNSIGNED_INT_5_9_9_9_REV&&(j=s.RGB9_E5),y===s.RGBA){const _e=V?Qs:Xe.getTransfer(X);U===s.FLOAT&&(j=s.RGBA32F),U===s.HALF_FLOAT&&(j=s.RGBA16F),U===s.UNSIGNED_BYTE&&(j=_e===Je?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(j=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(j=s.RGB5_A1)}return(j===s.R16F||j===s.R32F||j===s.RG16F||j===s.RG32F||j===s.RGBA16F||j===s.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function m(I,y){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==It&&I.minFilter!==Mt?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function C(I){const y=I.target;y.removeEventListener("dispose",C),P(y),y.isVideoTexture&&l.delete(y)}function E(I){const y=I.target;y.removeEventListener("dispose",E),D(y)}function P(I){const y=n.get(I);if(y.__webglInit===void 0)return;const U=I.source,X=d.get(U);if(X){const V=X[y.__cacheKey];V.usedTimes--,V.usedTimes===0&&b(I),Object.keys(X).length===0&&d.delete(U)}n.remove(I)}function b(I){const y=n.get(I);s.deleteTexture(y.__webglTexture);const U=I.source,X=d.get(U);delete X[y.__cacheKey],a.memory.textures--}function D(I){const y=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let V=0;V<y.__webglFramebuffer[X].length;V++)s.deleteFramebuffer(y.__webglFramebuffer[X][V]);else s.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)s.deleteFramebuffer(y.__webglFramebuffer[X]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=I.textures;for(let X=0,V=U.length;X<V;X++){const j=n.get(U[X]);j.__webglTexture&&(s.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(U[X])}n.remove(I)}let M=0;function v(){M=0}function L(){const I=M;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),M+=1,I}function F(I){const y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function T(I,y){const U=n.get(I);if(I.isVideoTexture&&ot(I),I.isRenderTargetTexture===!1&&I.version>0&&U.__version!==I.version){const X=I.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Re(U,I,y);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+y)}function K(I,y){const U=n.get(I);if(I.version>0&&U.__version!==I.version){Re(U,I,y);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+y)}function k(I,y){const U=n.get(I);if(I.version>0&&U.__version!==I.version){Re(U,I,y);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+y)}function W(I,y){const U=n.get(I);if(I.version>0&&U.__version!==I.version){je(U,I,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+y)}const se={[la]:s.REPEAT,[pn]:s.CLAMP_TO_EDGE,[fa]:s.MIRRORED_REPEAT},q={[It]:s.NEAREST,[Ol]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[Mt]:s.LINEAR,[mr]:s.LINEAR_MIPMAP_NEAREST,[En]:s.LINEAR_MIPMAP_LINEAR},J={[ef]:s.NEVER,[of]:s.ALWAYS,[tf]:s.LESS,[ch]:s.LEQUAL,[nf]:s.EQUAL,[af]:s.GEQUAL,[sf]:s.GREATER,[rf]:s.NOTEQUAL};function Q(I,y){if(y.type===zt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Mt||y.magFilter===mr||y.magFilter===cs||y.magFilter===En||y.minFilter===Mt||y.minFilter===mr||y.minFilter===cs||y.minFilter===En)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,se[y.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,se[y.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,se[y.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,q[y.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,q[y.minFilter]),y.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,J[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===It||y.minFilter!==cs&&y.minFilter!==En||y.type===zt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function de(I,y){let U=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",C));const X=y.source;let V=d.get(X);V===void 0&&(V={},d.set(X,V));const j=F(y);if(j!==I.__cacheKey){V[j]===void 0&&(V[j]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),V[j].usedTimes++;const _e=V[I.__cacheKey];_e!==void 0&&(V[I.__cacheKey].usedTimes--,_e.usedTimes===0&&b(y)),I.__cacheKey=j,I.__webglTexture=V[j].texture}return U}function Re(I,y,U){let X=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=s.TEXTURE_3D);const V=de(I,y),j=y.source;t.bindTexture(X,I.__webglTexture,s.TEXTURE0+U);const _e=n.get(j);if(j.version!==_e.__version||V===!0){t.activeTexture(s.TEXTURE0+U);const Z=Xe.getPrimaries(Xe.workingColorSpace),ge=y.colorSpace===Bn?null:Xe.getPrimaries(y.colorSpace),Me=y.colorSpace===Bn||Z===ge?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let ne=_(y.image,!1,i.maxTextureSize);ne=Ce(y,ne);const oe=r.convert(y.format,y.colorSpace),Pe=r.convert(y.type);let he=x(y.internalFormat,oe,Pe,y.colorSpace,y.isVideoTexture);Q(X,y);let fe;const Oe=y.mipmaps,He=y.isVideoTexture!==!0&&he!==ah,Ue=_e.__version===void 0||V===!0,Ne=j.dataReady,$e=m(y,ne);if(y.isDepthTexture)he=s.DEPTH_COMPONENT16,y.type===zt?he=s.DEPTH_COMPONENT32F:y.type===Bi?he=s.DEPTH_COMPONENT24:y.type===ts&&(he=s.DEPTH24_STENCIL8),Ue&&(He?t.texStorage2D(s.TEXTURE_2D,1,he,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,he,ne.width,ne.height,0,oe,Pe,null));else if(y.isDataTexture)if(Oe.length>0){He&&Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,Oe[0].width,Oe[0].height);for(let pe=0,S=Oe.length;pe<S;pe++)fe=Oe[pe],He?Ne&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,fe.width,fe.height,oe,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,pe,he,fe.width,fe.height,0,oe,Pe,fe.data);y.generateMipmaps=!1}else He?(Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,ne.width,ne.height),Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,oe,Pe,ne.data)):t.texImage2D(s.TEXTURE_2D,0,he,ne.width,ne.height,0,oe,Pe,ne.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){He&&Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,he,Oe[0].width,Oe[0].height,ne.depth);for(let pe=0,S=Oe.length;pe<S;pe++)fe=Oe[pe],y.format!==kt?oe!==null?He?Ne&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,fe.width,fe.height,ne.depth,oe,fe.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,he,fe.width,fe.height,ne.depth,0,fe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,fe.width,fe.height,ne.depth,oe,Pe,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,pe,he,fe.width,fe.height,ne.depth,0,oe,Pe,fe.data)}else{He&&Ue&&t.texStorage2D(s.TEXTURE_2D,$e,he,Oe[0].width,Oe[0].height);for(let pe=0,S=Oe.length;pe<S;pe++)fe=Oe[pe],y.format!==kt?oe!==null?He?Ne&&t.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,fe.width,fe.height,oe,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,pe,he,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?Ne&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,fe.width,fe.height,oe,Pe,fe.data):t.texImage2D(s.TEXTURE_2D,pe,he,fe.width,fe.height,0,oe,Pe,fe.data)}else if(y.isDataArrayTexture)He?(Ue&&t.texStorage3D(s.TEXTURE_2D_ARRAY,$e,he,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Pe,ne.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,he,ne.width,ne.height,ne.depth,0,oe,Pe,ne.data);else if(y.isData3DTexture)He?(Ue&&t.texStorage3D(s.TEXTURE_3D,$e,he,ne.width,ne.height,ne.depth),Ne&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Pe,ne.data)):t.texImage3D(s.TEXTURE_3D,0,he,ne.width,ne.height,ne.depth,0,oe,Pe,ne.data);else if(y.isFramebufferTexture){if(Ue)if(He)t.texStorage2D(s.TEXTURE_2D,$e,he,ne.width,ne.height);else{let pe=ne.width,S=ne.height;for(let te=0;te<$e;te++)t.texImage2D(s.TEXTURE_2D,te,he,pe,S,0,oe,Pe,null),pe>>=1,S>>=1}}else if(Oe.length>0){if(He&&Ue){const pe=We(Oe[0]);t.texStorage2D(s.TEXTURE_2D,$e,he,pe.width,pe.height)}for(let pe=0,S=Oe.length;pe<S;pe++)fe=Oe[pe],He?Ne&&t.texSubImage2D(s.TEXTURE_2D,pe,0,0,oe,Pe,fe):t.texImage2D(s.TEXTURE_2D,pe,he,oe,Pe,fe);y.generateMipmaps=!1}else if(He){if(Ue){const pe=We(ne);t.texStorage2D(s.TEXTURE_2D,$e,he,pe.width,pe.height)}Ne&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe,Pe,ne)}else t.texImage2D(s.TEXTURE_2D,0,he,oe,Pe,ne);p(y)&&u(X),_e.__version=j.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function je(I,y,U){if(y.image.length!==6)return;const X=de(I,y),V=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+U);const j=n.get(V);if(V.version!==j.__version||X===!0){t.activeTexture(s.TEXTURE0+U);const _e=Xe.getPrimaries(Xe.workingColorSpace),Z=y.colorSpace===Bn?null:Xe.getPrimaries(y.colorSpace),ge=y.colorSpace===Bn||_e===Z?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,ne=y.image[0]&&y.image[0].isDataTexture,oe=[];for(let S=0;S<6;S++)!Me&&!ne?oe[S]=_(y.image[S],!0,i.maxCubemapSize):oe[S]=ne?y.image[S].image:y.image[S],oe[S]=Ce(y,oe[S]);const Pe=oe[0],he=r.convert(y.format,y.colorSpace),fe=r.convert(y.type),Oe=x(y.internalFormat,he,fe,y.colorSpace),He=y.isVideoTexture!==!0,Ue=j.__version===void 0||X===!0,Ne=V.dataReady;let $e=m(y,Pe);Q(s.TEXTURE_CUBE_MAP,y);let pe;if(Me){He&&Ue&&t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,Oe,Pe.width,Pe.height);for(let S=0;S<6;S++){pe=oe[S].mipmaps;for(let te=0;te<pe.length;te++){const ee=pe[te];y.format!==kt?he!==null?He?Ne&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,ee.width,ee.height,he,ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,Oe,ee.width,ee.height,0,ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,0,0,ee.width,ee.height,he,fe,ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te,Oe,ee.width,ee.height,0,he,fe,ee.data)}}}else{if(pe=y.mipmaps,He&&Ue){pe.length>0&&$e++;const S=We(oe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,$e,Oe,S.width,S.height)}for(let S=0;S<6;S++)if(ne){He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,oe[S].width,oe[S].height,he,fe,oe[S].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Oe,oe[S].width,oe[S].height,0,he,fe,oe[S].data);for(let te=0;te<pe.length;te++){const Ae=pe[te].image[S].image;He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,Ae.width,Ae.height,he,fe,Ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,Oe,Ae.width,Ae.height,0,he,fe,Ae.data)}}else{He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,0,0,he,fe,oe[S]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,0,Oe,he,fe,oe[S]);for(let te=0;te<pe.length;te++){const ee=pe[te];He?Ne&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,0,0,he,fe,ee.image[S]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+S,te+1,Oe,he,fe,ee.image[S])}}}p(y)&&u(s.TEXTURE_CUBE_MAP),j.__version=V.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Y(I,y,U,X,V,j){const _e=r.convert(U.format,U.colorSpace),Z=r.convert(U.type),ge=x(U.internalFormat,_e,Z,U.colorSpace);if(!n.get(y).__hasExternalTextures){const ne=Math.max(1,y.width>>j),oe=Math.max(1,y.height>>j);V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?t.texImage3D(V,j,ge,ne,oe,y.depth,0,_e,Z,null):t.texImage2D(V,j,ge,ne,oe,0,_e,Z,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),xe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,X,V,n.get(U).__webglTexture,0,Ge(y)):(V===s.TEXTURE_2D||V>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&V<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,X,V,n.get(U).__webglTexture,j),t.bindFramebuffer(s.FRAMEBUFFER,null)}function $(I,y,U){if(s.bindRenderbuffer(s.RENDERBUFFER,I),y.depthBuffer&&!y.stencilBuffer){let X=s.DEPTH_COMPONENT24;if(U||xe(y)){const V=y.depthTexture;V&&V.isDepthTexture&&(V.type===zt?X=s.DEPTH_COMPONENT32F:V.type===Bi&&(X=s.DEPTH_COMPONENT24));const j=Ge(y);xe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,j,X,y.width,y.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,j,X,y.width,y.height)}else s.renderbufferStorage(s.RENDERBUFFER,X,y.width,y.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,I)}else if(y.depthBuffer&&y.stencilBuffer){const X=Ge(y);U&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,y.width,y.height):xe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,X,s.DEPTH24_STENCIL8,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,I)}else{const X=y.textures;for(let V=0;V<X.length;V++){const j=X[V],_e=r.convert(j.format,j.colorSpace),Z=r.convert(j.type),ge=x(j.internalFormat,_e,Z,j.colorSpace),Me=Ge(y);U&&xe(y)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Me,ge,y.width,y.height):xe(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Me,ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ce(I,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),T(y.depthTexture,0);const X=n.get(y.depthTexture).__webglTexture,V=Ge(y);if(y.depthTexture.format===Ci)xe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,X,0);else if(y.depthTexture.format===$i)xe(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0,V):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function ae(I){const y=n.get(I),U=I.isWebGLCubeRenderTarget===!0;if(I.depthTexture&&!y.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");ce(y.__webglFramebuffer,I)}else if(U){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]=s.createRenderbuffer(),$(y.__webglDepthbuffer[X],I,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=s.createRenderbuffer(),$(y.__webglDepthbuffer,I,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(I,y,U){const X=n.get(I);y!==void 0&&Y(X.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&ae(I)}function ze(I){const y=I.texture,U=n.get(I),X=n.get(y);I.addEventListener("dispose",E);const V=I.textures,j=I.isWebGLCubeRenderTarget===!0,_e=V.length>1;if(_e||(X.__webglTexture===void 0&&(X.__webglTexture=s.createTexture()),X.__version=y.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[Z]=[];for(let ge=0;ge<y.mipmaps.length;ge++)U.__webglFramebuffer[Z][ge]=s.createFramebuffer()}else U.__webglFramebuffer[Z]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)U.__webglFramebuffer[Z]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(_e)for(let Z=0,ge=V.length;Z<ge;Z++){const Me=n.get(V[Z]);Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&xe(I)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let Z=0;Z<V.length;Z++){const ge=V[Z];U.__webglColorRenderbuffer[Z]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[Z]);const Me=r.convert(ge.format,ge.colorSpace),ne=r.convert(ge.type),oe=x(ge.internalFormat,Me,ne,ge.colorSpace,I.isXRRenderTarget===!0),Pe=Ge(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,oe,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Z,s.RENDERBUFFER,U.__webglColorRenderbuffer[Z])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),$(U.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),Q(s.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Y(U.__webglFramebuffer[Z][ge],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ge);else Y(U.__webglFramebuffer[Z],I,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);p(y)&&u(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(_e){for(let Z=0,ge=V.length;Z<ge;Z++){const Me=V[Z],ne=n.get(Me);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),Q(s.TEXTURE_2D,Me),Y(U.__webglFramebuffer,I,Me,s.COLOR_ATTACHMENT0+Z,s.TEXTURE_2D,0),p(Me)&&u(s.TEXTURE_2D)}t.unbindTexture()}else{let Z=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Z=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Z,X.__webglTexture),Q(Z,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Y(U.__webglFramebuffer[ge],I,y,s.COLOR_ATTACHMENT0,Z,ge);else Y(U.__webglFramebuffer,I,y,s.COLOR_ATTACHMENT0,Z,0);p(y)&&u(Z),t.unbindTexture()}I.depthBuffer&&ae(I)}function Fe(I){const y=I.textures;for(let U=0,X=y.length;U<X;U++){const V=y[U];if(p(V)){const j=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(V).__webglTexture;t.bindTexture(j,_e),u(j),t.unbindTexture()}}}function R(I){if(I.samples>0&&xe(I)===!1){const y=I.textures,U=I.width,X=I.height;let V=s.COLOR_BUFFER_BIT;const j=[],_e=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=n.get(I),ge=y.length>1;if(ge)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){j.push(s.COLOR_ATTACHMENT0+Me),I.depthBuffer&&j.push(_e);const ne=Z.__ignoreDepthValues!==void 0?Z.__ignoreDepthValues:!1;if(ne===!1&&(I.depthBuffer&&(V|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&Z.__isTransmissionRenderTarget!==!0&&(V|=s.STENCIL_BUFFER_BIT)),ge&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me]),ne===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[_e]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_e])),ge){const oe=n.get(y[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,oe,0)}s.blitFramebuffer(0,0,U,X,0,0,U,X,V,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,j)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ge)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Z.__webglColorRenderbuffer[Me]);const ne=n.get(y[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}}function Ge(I){return Math.min(i.maxSamples,I.samples)}function xe(I){const y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ot(I){const y=a.render.frame;l.get(I)!==y&&(l.set(I,y),I.update())}function Ce(I,y){const U=I.colorSpace,X=I.format,V=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||U!==en&&U!==Bn&&(Xe.getTransfer(U)===Je?(X!==kt||V!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),y}function We(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=L,this.resetTextureUnits=v,this.setTexture2D=T,this.setTexture2DArray=K,this.setTexture3D=k,this.setTextureCube=W,this.rebindTextures=Be,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Fe,this.updateMultisampleRenderTarget=R,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=xe}function wg(s,e){function t(n,i=Bn){let r;const a=Xe.getTransfer(i);if(n===zn)return s.UNSIGNED_BYTE;if(n===eh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===th)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Nl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Fl)return s.BYTE;if(n===Hl)return s.SHORT;if(n===Jc)return s.UNSIGNED_SHORT;if(n===$c)return s.INT;if(n===Bi)return s.UNSIGNED_INT;if(n===zt)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Ul)return s.ALPHA;if(n===Kl)return s.RGB;if(n===kt)return s.RGBA;if(n===ql)return s.LUMINANCE;if(n===kl)return s.LUMINANCE_ALPHA;if(n===Ci)return s.DEPTH_COMPONENT;if(n===$i)return s.DEPTH_STENCIL;if(n===nh)return s.RED;if(n===ih)return s.RED_INTEGER;if(n===Yl)return s.RG;if(n===sh)return s.RG_INTEGER;if(n===rh)return s.RGBA_INTEGER;if(n===vr||n===_r||n===yr||n===Mr)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===vr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===vr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qa||n===Ja||n===$a||n===eo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ja)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ah)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===to||n===no)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===to)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===no)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===io||n===so||n===ro||n===ao||n===oo||n===co||n===ho||n===lo||n===fo||n===uo||n===po||n===Ao||n===go||n===mo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===io)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ro)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ao)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===co)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ho)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===lo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===uo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===po)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===mo)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===xr||n===vo||n===_o)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===xr)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===vo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_o)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xl||n===yo||n===Mo||n===xo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===xr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Cg extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ts extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pg={type:"move"};class Vr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),u=this._getHandJoint(h,_);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),A=.02,g=.005;h.inputState.pinching&&d>A+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&d<=A-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Pg)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ts;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new pt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new vn({vertexShader:bg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new dt(new Di(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class Bg extends Rn{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,f=null,d=null,A=null,g=null;const _=new Sg,p=t.getContextAttributes();let u=null,x=null;const m=[],C=[],E=new le;let P=null;const b=new bt;b.layers.enable(1),b.viewport=new Ve;const D=new bt;D.layers.enable(2),D.viewport=new Ve;const M=[b,D],v=new Cg;v.layers.enable(1),v.layers.enable(2);let L=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=m[Y];return $===void 0&&($=new Vr,m[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=m[Y];return $===void 0&&($=new Vr,m[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=m[Y];return $===void 0&&($=new Vr,m[Y]=$),$.getHandSpace()};function T(Y){const $=C.indexOf(Y.inputSource);if($===-1)return;const ce=m[$];ce!==void 0&&(ce.update(Y.inputSource,Y.frame,h||a),ce.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){i.removeEventListener("select",T),i.removeEventListener("selectstart",T),i.removeEventListener("selectend",T),i.removeEventListener("squeeze",T),i.removeEventListener("squeezestart",T),i.removeEventListener("squeezeend",T),i.removeEventListener("end",K),i.removeEventListener("inputsourceschange",k);for(let Y=0;Y<m.length;Y++){const $=C[Y];$!==null&&(C[Y]=null,m[Y].disconnect($))}L=null,F=null,_.reset(),e.setRenderTarget(u),A=null,d=null,f=null,i=null,x=null,je.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(Y){h=Y},this.getBaseLayer=function(){return d!==null?d:A},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(u=e.getRenderTarget(),i.addEventListener("select",T),i.addEventListener("selectstart",T),i.addEventListener("selectend",T),i.addEventListener("squeeze",T),i.addEventListener("squeezestart",T),i.addEventListener("squeezeend",T),i.addEventListener("end",K),i.addEventListener("inputsourceschange",k),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(E),i.renderState.layers===void 0){const $={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};A=new XRWebGLLayer(i,t,$),i.updateRenderState({baseLayer:A}),e.setPixelRatio(1),e.setSize(A.framebufferWidth,A.framebufferHeight,!1),x=new Zn(A.framebufferWidth,A.framebufferHeight,{format:kt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let $=null,ce=null,ae=null;p.depth&&(ae=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=p.stencil?$i:Ci,ce=p.stencil?ts:Bi);const Be={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(Be),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Zn(d.textureWidth,d.textureHeight,{format:kt,type:zn,depthTexture:new wh(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const ze=e.properties.get(x);ze.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await i.requestReferenceSpace(o),je.setContext(i),je.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function k(Y){for(let $=0;$<Y.removed.length;$++){const ce=Y.removed[$],ae=C.indexOf(ce);ae>=0&&(C[ae]=null,m[ae].disconnect(ce))}for(let $=0;$<Y.added.length;$++){const ce=Y.added[$];let ae=C.indexOf(ce);if(ae===-1){for(let ze=0;ze<m.length;ze++)if(ze>=C.length){C.push(ce),ae=ze;break}else if(C[ze]===null){C[ze]=ce,ae=ze;break}if(ae===-1)break}const Be=m[ae];Be&&Be.connect(ce)}}const W=new B,se=new B;function q(Y,$,ce){W.setFromMatrixPosition($.matrixWorld),se.setFromMatrixPosition(ce.matrixWorld);const ae=W.distanceTo(se),Be=$.projectionMatrix.elements,ze=ce.projectionMatrix.elements,Fe=Be[14]/(Be[10]-1),R=Be[14]/(Be[10]+1),Ge=(Be[9]+1)/Be[5],xe=(Be[9]-1)/Be[5],ot=(Be[8]-1)/Be[0],Ce=(ze[8]+1)/ze[0],We=Fe*ot,I=Fe*Ce,y=ae/(-ot+Ce),U=y*-ot;$.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(U),Y.translateZ(y),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const X=Fe+y,V=R+y,j=We-U,_e=I+(ae-U),Z=Ge*R/V*X,ge=xe*R/V*X;Y.projectionMatrix.makePerspective(j,_e,Z,ge,X,V),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function J(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;_.texture!==null&&(Y.near=_.depthNear,Y.far=_.depthFar),v.near=D.near=b.near=Y.near,v.far=D.far=b.far=Y.far,(L!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,F=v.far,b.near=L,b.far=F,D.near=L,D.far=F,b.updateProjectionMatrix(),D.updateProjectionMatrix(),Y.updateProjectionMatrix());const $=Y.parent,ce=v.cameras;J(v,$);for(let ae=0;ae<ce.length;ae++)J(ce[ae],$);ce.length===2?q(v,b,D):v.projectionMatrix.copy(b.projectionMatrix),Q(Y,v,$)};function Q(Y,$,ce){ce===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(ce.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Ei*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&A===null))return c},this.setFoveation=function(Y){c=Y,d!==null&&(d.fixedFoveation=Y),A!==null&&A.fixedFoveation!==void 0&&(A.fixedFoveation=Y)},this.hasDepthSensing=function(){return _.texture!==null};let de=null;function Re(Y,$){if(l=$.getViewerPose(h||a),g=$,l!==null){const ce=l.views;A!==null&&(e.setRenderTargetFramebuffer(x,A.framebuffer),e.setRenderTarget(x));let ae=!1;ce.length!==v.cameras.length&&(v.cameras.length=0,ae=!0);for(let ze=0;ze<ce.length;ze++){const Fe=ce[ze];let R=null;if(A!==null)R=A.getViewport(Fe);else{const xe=f.getViewSubImage(d,Fe);R=xe.viewport,ze===0&&(e.setRenderTargetTextures(x,xe.colorTexture,d.ignoreDepthValues?void 0:xe.depthStencilTexture),e.setRenderTarget(x))}let Ge=M[ze];Ge===void 0&&(Ge=new bt,Ge.layers.enable(ze),Ge.viewport=new Ve,M[ze]=Ge),Ge.matrix.fromArray(Fe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Fe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(R.x,R.y,R.width,R.height),ze===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ae===!0&&v.cameras.push(Ge)}const Be=i.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const ze=f.getDepthInformation(ce[0]);ze&&ze.isValid&&ze.texture&&_.init(e,ze,i.renderState)}}for(let ce=0;ce<m.length;ce++){const ae=C[ce],Be=m[ce];ae!==null&&Be!==void 0&&Be.update(ae,$,h||a)}_.render(e,v),de&&de(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const je=new Mh;je.setAnimationLoop(Re),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const Yn=new Jt,Eg=new Le;function Tg(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,gh(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,x,m,C){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),l(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&A(p,u,C)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),_(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?c(p,u,x,m):u.isSpriteMaterial?h(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Ct&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Ct&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const x=e.get(u),m=x.envMap,C=x.envMapRotation;if(m&&(p.envMap.value=m,Yn.copy(C),Yn.x*=-1,Yn.y*=-1,Yn.z*=-1,m.isCubeTexture&&m.isRenderTargetTexture===!1&&(Yn.y*=-1,Yn.z*=-1),p.envMapRotation.value.setFromMatrix4(Eg.makeRotationFromEuler(Yn)),p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const E=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*E,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,x,m){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*x,p.scale.value=m*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function A(p,u,x){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ct&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function _(p,u){const x=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Dg(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(x,m){const C=m.program;n.uniformBlockBinding(x,C)}function h(x,m){let C=i[x.id];C===void 0&&(g(x),C=l(x),i[x.id]=C,x.addEventListener("dispose",p));const E=m.program;n.updateUBOMapping(x,E);const P=e.render.frame;r[x.id]!==P&&(d(x),r[x.id]=P)}function l(x){const m=f();x.__bindingPointIndex=m;const C=s.createBuffer(),E=x.__size,P=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,C),s.bufferData(s.UNIFORM_BUFFER,E,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,m,C),C}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const m=i[x.id],C=x.uniforms,E=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,m);for(let P=0,b=C.length;P<b;P++){const D=Array.isArray(C[P])?C[P]:[C[P]];for(let M=0,v=D.length;M<v;M++){const L=D[M];if(A(L,P,M,E)===!0){const F=L.__offset,T=Array.isArray(L.value)?L.value:[L.value];let K=0;for(let k=0;k<T.length;k++){const W=T[k],se=_(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+K,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,K),K+=se.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,L.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function A(x,m,C,E){const P=x.value,b=m+"_"+C;if(E[b]===void 0)return typeof P=="number"||typeof P=="boolean"?E[b]=P:E[b]=P.clone(),!0;{const D=E[b];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return E[b]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(x){const m=x.uniforms;let C=0;const E=16;for(let b=0,D=m.length;b<D;b++){const M=Array.isArray(m[b])?m[b]:[m[b]];for(let v=0,L=M.length;v<L;v++){const F=M[v],T=Array.isArray(F.value)?F.value:[F.value];for(let K=0,k=T.length;K<k;K++){const W=T[K],se=_(W),q=C%E;q!==0&&E-q<se.boundary&&(C+=E-q),F.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=C,C+=se.storage}}}const P=C%E;return P>0&&(C+=E-P),x.__size=C,x.__cache={},this}function _(x){const m={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(m.boundary=4,m.storage=4):x.isVector2?(m.boundary=8,m.storage=8):x.isVector3||x.isColor?(m.boundary=16,m.storage=12):x.isVector4?(m.boundary=16,m.storage=16):x.isMatrix3?(m.boundary=48,m.storage=48):x.isMatrix4?(m.boundary=64,m.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),m}function p(x){const m=x.target;m.removeEventListener("dispose",p);const C=a.indexOf(m.__bindingPointIndex);a.splice(C,1),s.deleteBuffer(i[m.id]),delete i[m.id],delete r[m.id]}function u(){for(const x in i)s.deleteBuffer(i[x]);a=[],i={},r={}}return{bind:c,update:h,dispose:u}}class zg{constructor(e={}){const{canvas:t=Cf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const A=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const u=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ut,this._useLegacyLights=!1,this.toneMapping=mn,this.toneMappingExposure=1;const m=this;let C=!1,E=0,P=0,b=null,D=-1,M=null;const v=new Ve,L=new Ve;let F=null;const T=new ye(0);let K=0,k=t.width,W=t.height,se=1,q=null,J=null;const Q=new Ve(0,0,k,W),de=new Ve(0,0,k,W);let Re=!1;const je=new Ia;let Y=!1,$=!1;const ce=new Le,ae=new le,Be=new B,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return b===null?se:1}let R=n;function Ge(w,z){const H=t.getContext(w,z);return H!==null?H:null}try{const w={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ya}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",ee,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),R===null){const z="webgl2";if(R=Ge(z,w),R===null)throw Ge(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let xe,ot,Ce,We,I,y,U,X,V,j,_e,Z,ge,Me,ne,oe,Pe,he,fe,Oe,He,Ue,Ne,$e;function pe(){xe=new Up(R),xe.init(),ot=new Gp(R,xe,e),Ue=new wg(R,xe),Ce=new Mg(R),We=new kp(R),I=new og,y=new xg(R,xe,Ce,I,ot,Ue,We),U=new Op(m),X=new Np(m),V=new Zf(R),Ne=new zp(R,V),j=new Kp(R,V,We,Ne),_e=new Xp(R,j,V,We),fe=new Yp(R,ot,y),oe=new Rp(I),Z=new ag(m,U,X,xe,ot,Ne,oe),ge=new Tg(m,I),Me=new hg,ne=new Ag(xe),he=new Dp(m,U,X,Ce,_e,d,c),Pe=new yg(m,_e,ot),$e=new Dg(R,We,ot,Ce),Oe=new Lp(R,xe,We),He=new qp(R,xe,We),We.programs=Z.programs,m.capabilities=ot,m.extensions=xe,m.properties=I,m.renderLists=Me,m.shadowMap=Pe,m.state=Ce,m.info=We}pe();const S=new Bg(m,R);this.xr=S,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(w){w!==void 0&&(se=w,this.setSize(k,W,!1))},this.getSize=function(w){return w.set(k,W)},this.setSize=function(w,z,H=!0){if(S.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,W=z,t.width=Math.floor(w*se),t.height=Math.floor(z*se),H===!0&&(t.style.width=w+"px",t.style.height=z+"px"),this.setViewport(0,0,w,z)},this.getDrawingBufferSize=function(w){return w.set(k*se,W*se).floor()},this.setDrawingBufferSize=function(w,z,H){k=w,W=z,se=H,t.width=Math.floor(w*H),t.height=Math.floor(z*H),this.setViewport(0,0,w,z)},this.getCurrentViewport=function(w){return w.copy(v)},this.getViewport=function(w){return w.copy(Q)},this.setViewport=function(w,z,H,N){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,z,H,N),Ce.viewport(v.copy(Q).multiplyScalar(se).round())},this.getScissor=function(w){return w.copy(de)},this.setScissor=function(w,z,H,N){w.isVector4?de.set(w.x,w.y,w.z,w.w):de.set(w,z,H,N),Ce.scissor(L.copy(de).multiplyScalar(se).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(w){Ce.setScissorTest(Re=w)},this.setOpaqueSort=function(w){q=w},this.setTransparentSort=function(w){J=w},this.getClearColor=function(w){return w.copy(he.getClearColor())},this.setClearColor=function(){he.setClearColor.apply(he,arguments)},this.getClearAlpha=function(){return he.getClearAlpha()},this.setClearAlpha=function(){he.setClearAlpha.apply(he,arguments)},this.clear=function(w=!0,z=!0,H=!0){let N=0;if(w){let O=!1;if(b!==null){const re=b.texture.format;O=re===rh||re===sh||re===ih}if(O){const re=b.texture.type,ue=re===zn||re===Bi||re===Jc||re===ts||re===eh||re===th,ve=he.getClearColor(),we=he.getClearAlpha(),Ie=ve.r,be=ve.g,Se=ve.b;ue?(A[0]=Ie,A[1]=be,A[2]=Se,A[3]=we,R.clearBufferuiv(R.COLOR,0,A)):(g[0]=Ie,g[1]=be,g[2]=Se,g[3]=we,R.clearBufferiv(R.COLOR,0,g))}else N|=R.COLOR_BUFFER_BIT}z&&(N|=R.DEPTH_BUFFER_BIT),H&&(N|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",ee,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Me.dispose(),ne.dispose(),I.dispose(),U.dispose(),X.dispose(),_e.dispose(),Ne.dispose(),$e.dispose(),Z.dispose(),S.dispose(),S.removeEventListener("sessionstart",Wt),S.removeEventListener("sessionend",Vt),Fn.stop()};function te(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const w=We.autoReset,z=Pe.enabled,H=Pe.autoUpdate,N=Pe.needsUpdate,O=Pe.type;pe(),We.autoReset=w,Pe.enabled=z,Pe.autoUpdate=H,Pe.needsUpdate=N,Pe.type=O}function Ae(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function me(w){const z=w.target;z.removeEventListener("dispose",me),Ze(z)}function Ze(w){et(w),I.remove(w)}function et(w){const z=I.get(w).programs;z!==void 0&&(z.forEach(function(H){Z.releaseProgram(H)}),w.isShaderMaterial&&Z.releaseShaderCache(w))}this.renderBufferDirect=function(w,z,H,N,O,re){z===null&&(z=ze);const ue=O.isMesh&&O.matrixWorld.determinant()<0,ve=Zh(w,z,H,N,O);Ce.setMaterial(N,ue);let we=H.index,Ie=1;if(N.wireframe===!0){if(we=j.getWireframeAttribute(H),we===void 0)return;Ie=2}const be=H.drawRange,Se=H.attributes.position;let rt=be.start*Ie,Bt=(be.start+be.count)*Ie;re!==null&&(rt=Math.max(rt,re.start*Ie),Bt=Math.min(Bt,(re.start+re.count)*Ie)),we!==null?(rt=Math.max(rt,0),Bt=Math.min(Bt,we.count)):Se!=null&&(rt=Math.max(rt,0),Bt=Math.min(Bt,Se.count));const lt=Bt-rt;if(lt<0||lt===1/0)return;Ne.setup(O,N,ve,H,we);let sn,st=Oe;if(we!==null&&(sn=V.get(we),st=He,st.setIndex(sn)),O.isMesh)N.wireframe===!0?(Ce.setLineWidth(N.wireframeLinewidth*Fe()),st.setMode(R.LINES)):st.setMode(R.TRIANGLES);else if(O.isLine){let Ee=N.linewidth;Ee===void 0&&(Ee=1),Ce.setLineWidth(Ee*Fe()),O.isLineSegments?st.setMode(R.LINES):O.isLineLoop?st.setMode(R.LINE_LOOP):st.setMode(R.LINE_STRIP)}else O.isPoints?st.setMode(R.POINTS):O.isSprite&&st.setMode(R.TRIANGLES);if(O.isBatchedMesh)st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)st.renderInstances(rt,lt,O.count);else if(H.isInstancedBufferGeometry){const Ee=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,dr=Math.min(H.instanceCount,Ee);st.renderInstances(rt,lt,dr)}else st.render(rt,lt)};function it(w,z,H){w.transparent===!0&&w.side===Zt&&w.forceSinglePass===!1?(w.side=Ct,w.needsUpdate=!0,os(w,z,H),w.side=Qt,w.needsUpdate=!0,os(w,z,H),w.side=Zt):os(w,z,H)}this.compile=function(w,z,H=null){H===null&&(H=w),p=ne.get(H),p.init(),x.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),w!==H&&w.traverseVisible(function(O){O.isLight&&O.layers.test(z.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights(m._useLegacyLights);const N=new Set;return w.traverse(function(O){const re=O.material;if(re)if(Array.isArray(re))for(let ue=0;ue<re.length;ue++){const ve=re[ue];it(ve,H,O),N.add(ve)}else it(re,H,O),N.add(re)}),x.pop(),p=null,N},this.compileAsync=function(w,z,H=null){const N=this.compile(w,z,H);return new Promise(O=>{function re(){if(N.forEach(function(ue){I.get(ue).currentProgram.isReady()&&N.delete(ue)}),N.size===0){O(w);return}setTimeout(re,10)}xe.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let gt=null;function Qe(w){gt&&gt(w)}function Wt(){Fn.stop()}function Vt(){Fn.start()}const Fn=new Mh;Fn.setAnimationLoop(Qe),typeof self<"u"&&Fn.setContext(self),this.setAnimationLoop=function(w){gt=w,S.setAnimationLoop(w),w===null?Fn.stop():Fn.start()},S.addEventListener("sessionstart",Wt),S.addEventListener("sessionend",Vt),this.render=function(w,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),S.enabled===!0&&S.isPresenting===!0&&(S.cameraAutoUpdate===!0&&S.updateCamera(z),z=S.getCamera()),w.isScene===!0&&w.onBeforeRender(m,w,z,b),p=ne.get(w,x.length),p.init(),x.push(p),ce.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),je.setFromProjectionMatrix(ce),$=this.localClippingEnabled,Y=oe.init(this.clippingPlanes,$),_=Me.get(w,u.length),_.init(),u.push(_),Ha(w,z,0,m.sortObjects),_.finish(),m.sortObjects===!0&&_.sort(q,J),this.info.render.frame++,Y===!0&&oe.beginShadows();const H=p.state.shadowsArray;if(Pe.render(H,w,z),Y===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(S.enabled===!1||S.isPresenting===!1||S.hasDepthSensing()===!1)&&he.render(_,w),p.setupLights(m._useLegacyLights),z.isArrayCamera){const N=z.cameras;for(let O=0,re=N.length;O<re;O++){const ue=N[O];Na(_,w,ue,ue.viewport)}}else Na(_,w,z);b!==null&&(y.updateMultisampleRenderTarget(b),y.updateRenderTargetMipmap(b)),w.isScene===!0&&w.onAfterRender(m,w,z),Ne.resetDefaultState(),D=-1,M=null,x.pop(),x.length>0?p=x[x.length-1]:p=null,u.pop(),u.length>0?_=u[u.length-1]:_=null};function Ha(w,z,H,N){if(w.visible===!1)return;if(w.layers.test(z.layers)){if(w.isGroup)H=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(z);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||je.intersectsSprite(w)){N&&Be.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ce);const ue=_e.update(w),ve=w.material;ve.visible&&_.push(w,ue,ve,H,Be.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||je.intersectsObject(w))){const ue=_e.update(w),ve=w.material;if(N&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Be.copy(w.boundingSphere.center)):(ue.boundingSphere===null&&ue.computeBoundingSphere(),Be.copy(ue.boundingSphere.center)),Be.applyMatrix4(w.matrixWorld).applyMatrix4(ce)),Array.isArray(ve)){const we=ue.groups;for(let Ie=0,be=we.length;Ie<be;Ie++){const Se=we[Ie],rt=ve[Se.materialIndex];rt&&rt.visible&&_.push(w,ue,rt,H,Be.z,Se)}}else ve.visible&&_.push(w,ue,ve,H,Be.z,null)}}const re=w.children;for(let ue=0,ve=re.length;ue<ve;ue++)Ha(re[ue],z,H,N)}function Na(w,z,H,N){const O=w.opaque,re=w.transmissive,ue=w.transparent;p.setupLightsView(H),Y===!0&&oe.setGlobalState(m.clippingPlanes,H),re.length>0&&jh(O,re,z,H),N&&Ce.viewport(v.copy(N)),O.length>0&&as(O,z,H),re.length>0&&as(re,z,H),ue.length>0&&as(ue,z,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function jh(w,z,H,N){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(p.state.transmissionRenderTarget===null){p.state.transmissionRenderTarget=new Zn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?An:zn,minFilter:En,samples:4,stencilBuffer:r});const Ie=I.get(p.state.transmissionRenderTarget);Ie.__isTransmissionRenderTarget=!0}const re=p.state.transmissionRenderTarget;m.getDrawingBufferSize(ae),re.setSize(ae.x,ae.y);const ue=m.getRenderTarget();m.setRenderTarget(re),m.getClearColor(T),K=m.getClearAlpha(),K<1&&m.setClearColor(16777215,.5),m.clear();const ve=m.toneMapping;m.toneMapping=mn,as(w,H,N),y.updateMultisampleRenderTarget(re),y.updateRenderTargetMipmap(re);let we=!1;for(let Ie=0,be=z.length;Ie<be;Ie++){const Se=z[Ie],rt=Se.object,Bt=Se.geometry,lt=Se.material,sn=Se.group;if(lt.side===Zt&&rt.layers.test(N.layers)){const st=lt.side;lt.side=Ct,lt.needsUpdate=!0,Ua(rt,H,N,Bt,lt,sn),lt.side=st,lt.needsUpdate=!0,we=!0}}we===!0&&(y.updateMultisampleRenderTarget(re),y.updateRenderTargetMipmap(re)),m.setRenderTarget(ue),m.setClearColor(T,K),m.toneMapping=ve}function as(w,z,H){const N=z.isScene===!0?z.overrideMaterial:null;for(let O=0,re=w.length;O<re;O++){const ue=w[O],ve=ue.object,we=ue.geometry,Ie=N===null?ue.material:N,be=ue.group;ve.layers.test(H.layers)&&Ua(ve,z,H,we,Ie,be)}}function Ua(w,z,H,N,O,re){w.onBeforeRender(m,z,H,N,O,re),w.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),O.onBeforeRender(m,z,H,N,w,re),O.transparent===!0&&O.side===Zt&&O.forceSinglePass===!1?(O.side=Ct,O.needsUpdate=!0,m.renderBufferDirect(H,z,N,O,w,re),O.side=Qt,O.needsUpdate=!0,m.renderBufferDirect(H,z,N,O,w,re),O.side=Zt):m.renderBufferDirect(H,z,N,O,w,re),w.onAfterRender(m,z,H,N,O,re)}function os(w,z,H){z.isScene!==!0&&(z=ze);const N=I.get(w),O=p.state.lights,re=p.state.shadowsArray,ue=O.state.version,ve=Z.getParameters(w,O.state,re,z,H),we=Z.getProgramCacheKey(ve);let Ie=N.programs;N.environment=w.isMeshStandardMaterial?z.environment:null,N.fog=z.fog,N.envMap=(w.isMeshStandardMaterial?X:U).get(w.envMap||N.environment),N.envMapRotation=N.environment!==null&&w.envMap===null?z.environmentRotation:w.envMapRotation,Ie===void 0&&(w.addEventListener("dispose",me),Ie=new Map,N.programs=Ie);let be=Ie.get(we);if(be!==void 0){if(N.currentProgram===be&&N.lightsStateVersion===ue)return qa(w,ve),be}else ve.uniforms=Z.getUniforms(w),w.onBuild(H,ve,m),w.onBeforeCompile(ve,m),be=Z.acquireProgram(ve,we),Ie.set(we,be),N.uniforms=ve.uniforms;const Se=N.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Se.clippingPlanes=oe.uniform),qa(w,ve),N.needsLights=Jh(w),N.lightsStateVersion=ue,N.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),N.currentProgram=be,N.uniformsList=null,be}function Ka(w){if(w.uniformsList===null){const z=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(z.seq,w.uniforms)}return w.uniformsList}function qa(w,z){const H=I.get(w);H.outputColorSpace=z.outputColorSpace,H.batching=z.batching,H.instancing=z.instancing,H.instancingColor=z.instancingColor,H.instancingMorph=z.instancingMorph,H.skinning=z.skinning,H.morphTargets=z.morphTargets,H.morphNormals=z.morphNormals,H.morphColors=z.morphColors,H.morphTargetsCount=z.morphTargetsCount,H.numClippingPlanes=z.numClippingPlanes,H.numIntersection=z.numClipIntersection,H.vertexAlphas=z.vertexAlphas,H.vertexTangents=z.vertexTangents,H.toneMapping=z.toneMapping}function Zh(w,z,H,N,O){z.isScene!==!0&&(z=ze),y.resetTextureUnits();const re=z.fog,ue=N.isMeshStandardMaterial?z.environment:null,ve=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:en,we=(N.isMeshStandardMaterial?X:U).get(N.envMap||ue),Ie=N.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,be=!!H.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),Se=!!H.morphAttributes.position,rt=!!H.morphAttributes.normal,Bt=!!H.morphAttributes.color;let lt=mn;N.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(lt=m.toneMapping);const sn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,st=sn!==void 0?sn.length:0,Ee=I.get(N),dr=p.state.lights;if(Y===!0&&($===!0||w!==M)){const Lt=w===M&&N.id===D;oe.setState(N,w,Lt)}let tt=!1;N.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==dr.state.version||Ee.outputColorSpace!==ve||O.isBatchedMesh&&Ee.batching===!1||!O.isBatchedMesh&&Ee.batching===!0||O.isInstancedMesh&&Ee.instancing===!1||!O.isInstancedMesh&&Ee.instancing===!0||O.isSkinnedMesh&&Ee.skinning===!1||!O.isSkinnedMesh&&Ee.skinning===!0||O.isInstancedMesh&&Ee.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ee.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ee.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ee.instancingMorph===!1&&O.morphTexture!==null||Ee.envMap!==we||N.fog===!0&&Ee.fog!==re||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==oe.numPlanes||Ee.numIntersection!==oe.numIntersection)||Ee.vertexAlphas!==Ie||Ee.vertexTangents!==be||Ee.morphTargets!==Se||Ee.morphNormals!==rt||Ee.morphColors!==Bt||Ee.toneMapping!==lt||Ee.morphTargetsCount!==st)&&(tt=!0):(tt=!0,Ee.__version=N.version);let Hn=Ee.currentProgram;tt===!0&&(Hn=os(N,z,O));let ka=!1,Fi=!1,pr=!1;const mt=Hn.getUniforms(),_n=Ee.uniforms;if(Ce.useProgram(Hn.program)&&(ka=!0,Fi=!0,pr=!0),N.id!==D&&(D=N.id,Fi=!0),ka||M!==w){mt.setValue(R,"projectionMatrix",w.projectionMatrix),mt.setValue(R,"viewMatrix",w.matrixWorldInverse);const Lt=mt.map.cameraPosition;Lt!==void 0&&Lt.setValue(R,Be.setFromMatrixPosition(w.matrixWorld)),ot.logarithmicDepthBuffer&&mt.setValue(R,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&mt.setValue(R,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Fi=!0,pr=!0)}if(O.isSkinnedMesh){mt.setOptional(R,O,"bindMatrix"),mt.setOptional(R,O,"bindMatrixInverse");const Lt=O.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),mt.setValue(R,"boneTexture",Lt.boneTexture,y))}O.isBatchedMesh&&(mt.setOptional(R,O,"batchingTexture"),mt.setValue(R,"batchingTexture",O._matricesTexture,y));const Ar=H.morphAttributes;if((Ar.position!==void 0||Ar.normal!==void 0||Ar.color!==void 0)&&fe.update(O,H,Hn),(Fi||Ee.receiveShadow!==O.receiveShadow)&&(Ee.receiveShadow=O.receiveShadow,mt.setValue(R,"receiveShadow",O.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(_n.envMap.value=we,_n.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),Fi&&(mt.setValue(R,"toneMappingExposure",m.toneMappingExposure),Ee.needsLights&&Qh(_n,pr),re&&N.fog===!0&&ge.refreshFogUniforms(_n,re),ge.refreshMaterialUniforms(_n,N,se,W,p.state.transmissionRenderTarget),ks.upload(R,Ka(Ee),_n,y)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(ks.upload(R,Ka(Ee),_n,y),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&mt.setValue(R,"center",O.center),mt.setValue(R,"modelViewMatrix",O.modelViewMatrix),mt.setValue(R,"normalMatrix",O.normalMatrix),mt.setValue(R,"modelMatrix",O.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Lt=N.uniformsGroups;for(let gr=0,$h=Lt.length;gr<$h;gr++){const Ya=Lt[gr];$e.update(Ya,Hn),$e.bind(Ya,Hn)}}return Hn}function Qh(w,z){w.ambientLightColor.needsUpdate=z,w.lightProbe.needsUpdate=z,w.directionalLights.needsUpdate=z,w.directionalLightShadows.needsUpdate=z,w.pointLights.needsUpdate=z,w.pointLightShadows.needsUpdate=z,w.spotLights.needsUpdate=z,w.spotLightShadows.needsUpdate=z,w.rectAreaLights.needsUpdate=z,w.hemisphereLights.needsUpdate=z}function Jh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(w,z,H){I.get(w.texture).__webglTexture=z,I.get(w.depthTexture).__webglTexture=H;const N=I.get(w);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=H===void 0,N.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,z){const H=I.get(w);H.__webglFramebuffer=z,H.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(w,z=0,H=0){b=w,E=z,P=H;let N=!0,O=null,re=!1,ue=!1;if(w){const we=I.get(w);we.__useDefaultFramebuffer!==void 0?(Ce.bindFramebuffer(R.FRAMEBUFFER,null),N=!1):we.__webglFramebuffer===void 0?y.setupRenderTarget(w):we.__hasExternalTextures&&y.rebindTextures(w,I.get(w.texture).__webglTexture,I.get(w.depthTexture).__webglTexture);const Ie=w.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(ue=!0);const be=I.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(be[z])?O=be[z][H]:O=be[z],re=!0):w.samples>0&&y.useMultisampledRTT(w)===!1?O=I.get(w).__webglMultisampledFramebuffer:Array.isArray(be)?O=be[H]:O=be,v.copy(w.viewport),L.copy(w.scissor),F=w.scissorTest}else v.copy(Q).multiplyScalar(se).floor(),L.copy(de).multiplyScalar(se).floor(),F=Re;if(Ce.bindFramebuffer(R.FRAMEBUFFER,O)&&N&&Ce.drawBuffers(w,O),Ce.viewport(v),Ce.scissor(L),Ce.setScissorTest(F),re){const we=I.get(w.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+z,we.__webglTexture,H)}else if(ue){const we=I.get(w.texture),Ie=z||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,we.__webglTexture,H||0,Ie)}D=-1},this.readRenderTargetPixels=function(w,z,H,N,O,re,ue){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=I.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ue!==void 0&&(ve=ve[ue]),ve){Ce.bindFramebuffer(R.FRAMEBUFFER,ve);try{const we=w.texture,Ie=we.format,be=we.type;if(Ie!==kt&&Ue.convert(Ie)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Se=be===An&&(xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float"));if(be!==zn&&Ue.convert(be)!==R.getParameter(R.IMPLEMENTATION_COLOR_READ_TYPE)&&be!==zt&&!Se){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=w.width-N&&H>=0&&H<=w.height-O&&R.readPixels(z,H,N,O,Ue.convert(Ie),Ue.convert(be),re)}finally{const we=b!==null?I.get(b).__webglFramebuffer:null;Ce.bindFramebuffer(R.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(w,z,H=0){const N=Math.pow(2,-H),O=Math.floor(z.image.width*N),re=Math.floor(z.image.height*N);y.setTexture2D(z,0),R.copyTexSubImage2D(R.TEXTURE_2D,H,0,0,w.x,w.y,O,re),Ce.unbindTexture()},this.copyTextureToTexture=function(w,z,H,N=0){const O=z.image.width,re=z.image.height,ue=Ue.convert(H.format),ve=Ue.convert(H.type);y.setTexture2D(H,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,H.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,H.unpackAlignment),z.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,N,w.x,w.y,O,re,ue,ve,z.image.data):z.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,N,w.x,w.y,z.mipmaps[0].width,z.mipmaps[0].height,ue,z.mipmaps[0].data):R.texSubImage2D(R.TEXTURE_2D,N,w.x,w.y,ue,ve,z.image),N===0&&H.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(w,z,H,N,O=0){const re=Math.round(w.max.x-w.min.x),ue=Math.round(w.max.y-w.min.y),ve=w.max.z-w.min.z+1,we=Ue.convert(N.format),Ie=Ue.convert(N.type);let be;if(N.isData3DTexture)y.setTexture3D(N,0),be=R.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)y.setTexture2DArray(N,0),be=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,N.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,N.unpackAlignment);const Se=R.getParameter(R.UNPACK_ROW_LENGTH),rt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Bt=R.getParameter(R.UNPACK_SKIP_PIXELS),lt=R.getParameter(R.UNPACK_SKIP_ROWS),sn=R.getParameter(R.UNPACK_SKIP_IMAGES),st=H.isCompressedTexture?H.mipmaps[O]:H.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,st.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,st.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,w.min.x),R.pixelStorei(R.UNPACK_SKIP_ROWS,w.min.y),R.pixelStorei(R.UNPACK_SKIP_IMAGES,w.min.z),H.isDataTexture||H.isData3DTexture?R.texSubImage3D(be,O,z.x,z.y,z.z,re,ue,ve,we,Ie,st.data):N.isCompressedArrayTexture?R.compressedTexSubImage3D(be,O,z.x,z.y,z.z,re,ue,ve,we,st.data):R.texSubImage3D(be,O,z.x,z.y,z.z,re,ue,ve,we,Ie,st),R.pixelStorei(R.UNPACK_ROW_LENGTH,Se),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,rt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Bt),R.pixelStorei(R.UNPACK_SKIP_ROWS,lt),R.pixelStorei(R.UNPACK_SKIP_IMAGES,sn),O===0&&N.generateMipmaps&&R.generateMipmap(be),Ce.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),Ce.unbindTexture()},this.resetState=function(){E=0,P=0,b=null,Ce.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===wa?"display-p3":"srgb",t.unpackColorSpace=Xe.workingColorSpace===or?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Bh extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jt,this.environmentIntensity=1,this.environmentRotation=new Jt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Lg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ua,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return lh("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new B;class nr{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Kt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ke(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Kt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Kt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Kt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Kt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),i=Ke(i,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Pt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Gg extends On{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let pi;const qi=new B,Ai=new B,gi=new B,mi=new le,ki=new le,Eh=new Le,Ds=new B,Yi=new B,zs=new B,uc=new le,jr=new le,dc=new le;class pv extends ke{constructor(e=new Gg){if(super(),this.isSprite=!0,this.type="Sprite",pi===void 0){pi=new At;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Lg(t,5);pi.setIndex([0,1,2,0,2,3]),pi.setAttribute("position",new nr(n,3,0,!1)),pi.setAttribute("uv",new nr(n,2,3,!1))}this.geometry=pi,this.material=e,this.center=new le(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ai.setFromMatrixScale(this.matrixWorld),Eh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ai.multiplyScalar(-gi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const a=this.center;Ls(Ds.set(-.5,-.5,0),gi,a,Ai,i,r),Ls(Yi.set(.5,-.5,0),gi,a,Ai,i,r),Ls(zs.set(.5,.5,0),gi,a,Ai,i,r),uc.set(0,0),jr.set(1,0),dc.set(1,1);let o=e.ray.intersectTriangle(Ds,Yi,zs,!1,qi);if(o===null&&(Ls(Yi.set(-.5,.5,0),gi,a,Ai,i,r),jr.set(0,1),o=e.ray.intersectTriangle(Ds,zs,Yi,!1,qi),o===null))return;const c=e.ray.origin.distanceTo(qi);c<e.near||c>e.far||t.push({distance:c,point:qi.clone(),uv:qt.getInterpolation(qi,Ds,Yi,zs,uc,jr,dc,new le),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ls(s,e,t,n,i,r){mi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(ki.x=r*mi.x-i*mi.y,ki.y=i*mi.x+r*mi.y):ki.copy(mi),s.copy(e),s.x+=ki.x,s.y+=ki.y,s.applyMatrix4(Eh)}const pc=new B,Ac=new Ve,gc=new Ve,Rg=new B,mc=new Le,Gs=new B,Zr=new tn,vc=new Le,Qr=new ns;class Av extends dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Za,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new St),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gs),this.boundingBox.expandByPoint(Gs)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new tn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Gs),this.boundingSphere.expandByPoint(Gs)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zr.copy(this.boundingSphere),Zr.applyMatrix4(i),e.ray.intersectsSphere(Zr)!==!1&&(vc.copy(i).invert(),Qr.copy(e.ray).applyMatrix4(vc),!(this.boundingBox!==null&&Qr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Za?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Rl?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ac.fromBufferAttribute(i.attributes.skinIndex,e),gc.fromBufferAttribute(i.attributes.skinWeight,e),pc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=gc.getComponent(r);if(a!==0){const o=Ac.getComponent(r);mc.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Rg.copy(pc).applyMatrix4(mc),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Og extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ba extends pt{constructor(e=null,t=1,n=1,i,r,a,o,c,h=It,l=It,f,d){super(null,a,o,c,h,l,i,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _c=new Le,Fg=new Le;class Th{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Fg;_c.multiplyMatrices(o,t[r]),_c.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Th(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ba(t,e,e,kt,zt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Og),this.bones.push(a),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class yc extends Pt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const vi=new Le,Mc=new Le,Rs=[],xc=new St,Hg=new Le,Xi=new dt,Wi=new tn;class gv extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new St),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),xc.copy(e.boundingBox).applyMatrix4(vi),this.boundingBox.union(xc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,vi),Wi.copy(e.boundingSphere).applyMatrix4(vi),this.boundingSphere.union(Wi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Xi.geometry=this.geometry,Xi.material=this.material,Xi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wi.copy(this.boundingSphere),Wi.applyMatrix4(n),e.ray.intersectsSphere(Wi)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,vi),Mc.multiplyMatrices(n,vi),Xi.matrixWorld=Mc,Xi.raycast(e,Rs);for(let a=0,o=Rs.length;a<o;a++){const c=Rs[a];c.instanceId=r,c.object=this,t.push(c)}Rs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yc(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ba(new Float32Array(i*this.count),i,this.count,nh,zt));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class hr extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new B,Cc=new B,Pc=new Le,Jr=new ns,Os=new tn;class Ea extends ke{constructor(e=new At,t=new hr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)wc.fromBufferAttribute(t,i-1),Cc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wc.distanceTo(Cc);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Os.copy(n.boundingSphere),Os.applyMatrix4(i),Os.radius+=r,e.ray.intersectsSphere(Os)===!1)return;Pc.copy(i).invert(),Jr.copy(e.ray).applyMatrix4(Pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=new B,l=new B,f=new B,d=new B,A=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const u=Math.max(0,a.start),x=Math.min(g.count,a.start+a.count);for(let m=u,C=x-1;m<C;m+=A){const E=g.getX(m),P=g.getX(m+1);if(h.fromBufferAttribute(p,E),l.fromBufferAttribute(p,P),Jr.distanceSqToSegment(h,l,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}else{const u=Math.max(0,a.start),x=Math.min(p.count,a.start+a.count);for(let m=u,C=x-1;m<C;m+=A){if(h.fromBufferAttribute(p,m),l.fromBufferAttribute(p,m+1),Jr.distanceSqToSegment(h,l,d,f)>c)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:m,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}const bc=new B,Ic=new B;class Dh extends Ea{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)bc.fromBufferAttribute(t,i),Ic.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+bc.distanceTo(Ic);e.setAttribute("lineDistance",new nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class mv extends Ea{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ng extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Sc=new Le,pa=new ns,Fs=new tn,Hs=new B;class vv extends ke{constructor(e=new At,t=new Ng){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,e.ray.intersectsSphere(Fs)===!1)return;Sc.copy(i).invert(),pa.copy(e.ray).applyMatrix4(Sc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),A=Math.min(h.count,a.start+a.count);for(let g=d,_=A;g<_;g++){const p=h.getX(g);Hs.fromBufferAttribute(f,p),Bc(Hs,p,c,i,e,t,this)}}else{const d=Math.max(0,a.start),A=Math.min(f.count,a.start+a.count);for(let g=d,_=A;g<_;g++)Hs.fromBufferAttribute(f,g),Bc(Hs,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bc(s,e,t,n,i,r,a){const o=pa.distanceSqToPoint(s);if(o<t){const c=new B;pa.closestPointToPoint(s,c),c.applyMatrix4(n);const h=i.ray.origin.distanceTo(c);if(h<i.near||h>i.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class _v extends pt{constructor(e,t,n,i,r,a,o,c,h,l,f,d){super(null,a,o,c,h,l,i,r,f,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class yv extends pt{constructor(e,t,n,i,r,a,o,c,h){super(e,t,n,i,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class lr extends At{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;i=Math.floor(i),r=Math.floor(r);const l=[],f=[],d=[],A=[];let g=0;const _=[],p=n/2;let u=0;x(),a===!1&&(e>0&&m(!0),t>0&&m(!1)),this.setIndex(l),this.setAttribute("position",new nt(f,3)),this.setAttribute("normal",new nt(d,3)),this.setAttribute("uv",new nt(A,2));function x(){const C=new B,E=new B;let P=0;const b=(t-e)/n;for(let D=0;D<=r;D++){const M=[],v=D/r,L=v*(t-e)+e;for(let F=0;F<=i;F++){const T=F/i,K=T*c+o,k=Math.sin(K),W=Math.cos(K);E.x=L*k,E.y=-v*n+p,E.z=L*W,f.push(E.x,E.y,E.z),C.set(k,b,W).normalize(),d.push(C.x,C.y,C.z),A.push(T,1-v),M.push(g++)}_.push(M)}for(let D=0;D<i;D++)for(let M=0;M<r;M++){const v=_[M][D],L=_[M+1][D],F=_[M+1][D+1],T=_[M][D+1];l.push(v,L,T),l.push(L,F,T),P+=6}h.addGroup(u,P,0),u+=P}function m(C){const E=g,P=new le,b=new B;let D=0;const M=C===!0?e:t,v=C===!0?1:-1;for(let F=1;F<=i;F++)f.push(0,p*v,0),d.push(0,v,0),A.push(.5,.5),g++;const L=g;for(let F=0;F<=i;F++){const K=F/i*c+o,k=Math.cos(K),W=Math.sin(K);b.x=M*W,b.y=p*v,b.z=M*k,f.push(b.x,b.y,b.z),d.push(0,v,0),P.x=k*.5+.5,P.y=W*.5*v+.5,A.push(P.x,P.y),g++}for(let F=0;F<i;F++){const T=E+F,K=L+F;C===!0?l.push(K,K+1,T):l.push(K+1,K,T),D+=3}h.addGroup(u,D,C===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ta extends lr{constructor(e=1,t=1,n=32,i=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ta(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Da extends At{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],a=[];o(i),h(n),l(),this.setAttribute("position",new nt(r,3)),this.setAttribute("normal",new nt(r.slice(),3)),this.setAttribute("uv",new nt(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(x){const m=new B,C=new B,E=new B;for(let P=0;P<t.length;P+=3)A(t[P+0],m),A(t[P+1],C),A(t[P+2],E),c(m,C,E,x)}function c(x,m,C,E){const P=E+1,b=[];for(let D=0;D<=P;D++){b[D]=[];const M=x.clone().lerp(C,D/P),v=m.clone().lerp(C,D/P),L=P-D;for(let F=0;F<=L;F++)F===0&&D===P?b[D][F]=M:b[D][F]=M.clone().lerp(v,F/L)}for(let D=0;D<P;D++)for(let M=0;M<2*(P-D)-1;M++){const v=Math.floor(M/2);M%2===0?(d(b[D][v+1]),d(b[D+1][v]),d(b[D][v])):(d(b[D][v+1]),d(b[D+1][v+1]),d(b[D+1][v]))}}function h(x){const m=new B;for(let C=0;C<r.length;C+=3)m.x=r[C+0],m.y=r[C+1],m.z=r[C+2],m.normalize().multiplyScalar(x),r[C+0]=m.x,r[C+1]=m.y,r[C+2]=m.z}function l(){const x=new B;for(let m=0;m<r.length;m+=3){x.x=r[m+0],x.y=r[m+1],x.z=r[m+2];const C=p(x)/2/Math.PI+.5,E=u(x)/Math.PI+.5;a.push(C,1-E)}g(),f()}function f(){for(let x=0;x<a.length;x+=6){const m=a[x+0],C=a[x+2],E=a[x+4],P=Math.max(m,C,E),b=Math.min(m,C,E);P>.9&&b<.1&&(m<.2&&(a[x+0]+=1),C<.2&&(a[x+2]+=1),E<.2&&(a[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function A(x,m){const C=x*3;m.x=e[C+0],m.y=e[C+1],m.z=e[C+2]}function g(){const x=new B,m=new B,C=new B,E=new B,P=new le,b=new le,D=new le;for(let M=0,v=0;M<r.length;M+=9,v+=6){x.set(r[M+0],r[M+1],r[M+2]),m.set(r[M+3],r[M+4],r[M+5]),C.set(r[M+6],r[M+7],r[M+8]),P.set(a[v+0],a[v+1]),b.set(a[v+2],a[v+3]),D.set(a[v+4],a[v+5]),E.copy(x).add(m).add(C).divideScalar(3);const L=p(E);_(P,v+0,x,L),_(b,v+2,m,L),_(D,v+4,C,L)}}function _(x,m,C,E){E<0&&x.x===1&&(a[m]=x.x-1),C.x===0&&C.z===0&&(a[m]=E/2/Math.PI+.5)}function p(x){return Math.atan2(x.z,-x.x)}function u(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Da(e.vertices,e.indices,e.radius,e.details)}}class zh extends Da{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new zh(e.radius,e.detail)}}class Li extends At{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],f=new B,d=new B,A=[],g=[],_=[],p=[];for(let u=0;u<=n;u++){const x=[],m=u/n;let C=0;u===0&&a===0?C=.5/t:u===n&&c===Math.PI&&(C=-.5/t);for(let E=0;E<=t;E++){const P=E/t;f.x=-e*Math.cos(i+P*r)*Math.sin(a+m*o),f.y=e*Math.cos(a+m*o),f.z=e*Math.sin(i+P*r)*Math.sin(a+m*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(P+C,1-m),x.push(h++)}l.push(x)}for(let u=0;u<n;u++)for(let x=0;x<t;x++){const m=l[u][x+1],C=l[u][x],E=l[u+1][x],P=l[u+1][x+1];(u!==0||a>0)&&A.push(m,C,P),(u!==n-1||c<Math.PI)&&A.push(C,E,P)}this.setIndex(A),this.setAttribute("position",new nt(g,3)),this.setAttribute("normal",new nt(_,3)),this.setAttribute("uv",new nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Lh extends At{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const a=[],o=[],c=[],h=[],l=new B,f=new B,d=new B;for(let A=0;A<=n;A++)for(let g=0;g<=i;g++){const _=g/i*r,p=A/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(_),f.y=(e+t*Math.cos(p))*Math.sin(_),f.z=t*Math.sin(p),o.push(f.x,f.y,f.z),l.x=e*Math.cos(_),l.y=e*Math.sin(_),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/i),h.push(A/n)}for(let A=1;A<=n;A++)for(let g=1;g<=i;g++){const _=(i+1)*A+g-1,p=(i+1)*(A-1)+g-1,u=(i+1)*(A-1)+g,x=(i+1)*A+g;a.push(_,p,x),a.push(p,u,x)}this.setIndex(a),this.setAttribute("position",new nt(o,3)),this.setAttribute("normal",new nt(c,3)),this.setAttribute("uv",new nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fr extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oh,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mv extends fr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new le(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ut(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ug extends hr{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Ns(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Kg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function qg(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Ec(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Gh(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class ur{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kg extends ur{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:yi,endingEnd:yi}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Mi:r=e,o=2*t-n;break;case Zs:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Mi:a=e,c=2*n-t;break;case Zs:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const h=(n-t)*.5,l=this.valueSize;this._weightPrev=h/(t-o),this._weightNext=h/(c-n),this._offsetPrev=r*l,this._offsetNext=a*l}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,A=this._weightNext,g=(n-t)/(i-t),_=g*g,p=_*g,u=-d*p+2*d*_-d*g,x=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*g+1,m=(-1-A)*p+(1.5+A)*_+.5*g,C=A*p-A*_;for(let E=0;E!==o;++E)r[E]=u*a[l+E]+x*a[h+E]+m*a[c+E]+C*a[f+E];return r}}class Rh extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,h=c-o,l=(n-t)/(i-t),f=1-l;for(let d=0;d!==o;++d)r[d]=a[h+d]*f+a[c+d]*l;return r}}class Yg extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class nn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Yg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Vs:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case wr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Vs;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return wr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&Kg(i))for(let o=0,c=i.length;o!==c;++o){const h=i[o];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,h),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===wr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const h=e[o],l=e[o+1];if(h!==l&&(o!==1||h!==e[0]))if(i)c=!0;else{const f=o*n,d=f-n,A=f+n;for(let g=0;g!==n;++g){const _=t[f+g];if(_!==t[d+g]||_!==t[A+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const f=o*n,d=a*n;for(let A=0;A!==n;++A)t[d+A]=t[f+A]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,h=0;h!==n;++h)t[c+h]=t[o+h];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}nn.prototype.TimeBufferType=Float32Array;nn.prototype.ValueBufferType=Float32Array;nn.prototype.DefaultInterpolation=js;class Gi extends nn{}Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=Vs;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;class Oh extends nn{}Oh.prototype.ValueTypeName="color";class ir extends nn{}ir.prototype.ValueTypeName="number";class Xg extends ur{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let h=e*o;for(let l=h+o;h!==l;h+=4)Xt.slerpFlat(r,0,a,h-o,a,h,c);return r}}class ss extends nn{InterpolantFactoryMethodLinear(e){return new Xg(this.times,this.values,this.getValueSize(),e)}}ss.prototype.ValueTypeName="quaternion";ss.prototype.DefaultInterpolation=js;ss.prototype.InterpolantFactoryMethodSmooth=void 0;class Ri extends nn{}Ri.prototype.ValueTypeName="string";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=Vs;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;class sr extends nn{}sr.prototype.ValueTypeName="vector";class Tc{constructor(e="",t=-1,n=[],i=xa){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Vg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(nn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],h=[];c.push((o+r-1)%r,o,(o+1)%r),h.push(0,1,0);const l=qg(c);c=Ec(c,1,l),h=Ec(h,1,l),!i&&c[0]===0&&(c.push(r),h.push(h[0])),a.push(new ir(".morphTargetInfluences["+t[o].name+"]",c,h).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const h=e[o],l=h.name.match(r);if(l&&l.length>1){const f=l[1];let d=i[f];d||(i[f]=d=[]),d.push(h)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,d,A,g,_){if(A.length!==0){const p=[],u=[];Gh(A,p,u,g),p.length!==0&&_.push(new f(d,p,u))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const h=e.hierarchy||[];for(let f=0;f<h.length;f++){const d=h[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const A={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)A[d[g].morphTargets[_]]=-1;for(const _ in A){const p=[],u=[];for(let x=0;x!==d[g].morphTargets.length;++x){const m=d[g];p.push(m.time),u.push(m.morphTarget===_?1:0)}i.push(new ir(".morphTargetInfluence["+_+"]",p,u))}c=A.length*a}else{const A=".bones["+t[f].name+"]";n(sr,A+".position",d,"pos",i),n(ss,A+".quaternion",d,"rot",i),n(sr,A+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ir;case"vector":case"vector2":case"vector3":case"vector4":return sr;case"color":return Oh;case"quaternion":return ss;case"bool":case"boolean":return Gi;case"string":return Ri}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Vg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wg(s.type);if(s.times===void 0){const t=[],n=[];Gh(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Tn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class jg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(l){o++,r===!1&&i.onStart!==void 0&&i.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,i.onProgress!==void 0&&i.onProgress(l,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(l){i.onError!==void 0&&i.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){const f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){const A=h[f],g=h[f+1];if(A.global&&(A.lastIndex=0),A.test(l))return g}return null}}}const Zg=new jg;class Oi{constructor(e){this.manager=e!==void 0?e:Zg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Oi.DEFAULT_MATERIAL_NAME="__DEFAULT";const ln={};class Qg extends Error{constructor(e,t){super(e),this.response=t}}class Jg extends Oi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Tn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(ln[e]!==void 0){ln[e].push({onLoad:t,onProgress:n,onError:i});return}ln[e]=[],ln[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const l=ln[e],f=h.body.getReader(),d=h.headers.get("Content-Length")||h.headers.get("X-File-Size"),A=d?parseInt(d):0,g=A!==0;let _=0;const p=new ReadableStream({start(u){x();function x(){f.read().then(({done:m,value:C})=>{if(m)u.close();else{_+=C.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:A});for(let P=0,b=l.length;P<b;P++){const D=l[P];D.onProgress&&D.onProgress(E)}u.enqueue(C),x()}})}}});return new Response(p)}else throw new Qg(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(c){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(l=>new DOMParser().parseFromString(l,o));case"json":return h.json();default:if(o===void 0)return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,A=new TextDecoder(d);return h.arrayBuffer().then(g=>A.decode(g))}}}).then(h=>{Tn.add(e,h);const l=ln[e];delete ln[e];for(let f=0,d=l.length;f<d;f++){const A=l[f];A.onLoad&&A.onLoad(h)}}).catch(h=>{const l=ln[e];if(l===void 0)throw this.manager.itemError(e),h;delete ln[e];for(let f=0,d=l.length;f<d;f++){const A=l[f];A.onError&&A.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $g extends Oi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Tn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=es("img");function c(){l(),Tn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function h(f){l(),i&&i(f),r.manager.itemError(e),r.manager.itemEnd(e)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class em extends Oi{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Ba,o=new Jg(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let h;try{h=r.parse(c)}catch(l){if(i!==void 0)i(l);else{console.error(l);return}}h.image!==void 0?a.image=h.image:h.data!==void 0&&(a.image.width=h.width,a.image.height=h.height,a.image.data=h.data),a.wrapS=h.wrapS!==void 0?h.wrapS:pn,a.wrapT=h.wrapT!==void 0?h.wrapT:pn,a.magFilter=h.magFilter!==void 0?h.magFilter:Mt,a.minFilter=h.minFilter!==void 0?h.minFilter:Mt,a.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(a.colorSpace=h.colorSpace),h.flipY!==void 0&&(a.flipY=h.flipY),h.format!==void 0&&(a.format=h.format),h.type!==void 0&&(a.type=h.type),h.mipmaps!==void 0&&(a.mipmaps=h.mipmaps,a.minFilter=En),h.mipmapCount===1&&(a.minFilter=Mt),h.generateMipmaps!==void 0&&(a.generateMipmaps=h.generateMipmaps),a.needsUpdate=!0,t&&t(a,h)},n,i),a}}class xv extends Oi{constructor(e){super(e)}load(e,t,n,i){const r=new pt,a=new $g(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class rs extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class tm extends rs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const $r=new Le,Dc=new B,zc=new B;class za{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Dc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),$r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nm extends za{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ei*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class wv extends rs{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nm}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Lc=new Le,Vi=new B,ea=new B;class im extends za{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Vi),ea.copy(n.position),ea.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ea),n.updateMatrixWorld(),i.makeTranslation(-Vi.x,-Vi.y,-Vi.z),Lc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lc)}}class sm extends rs{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new im}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rm extends za{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class am extends rs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new rm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class om extends rs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Cv{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Pv extends Oi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Tn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(h=>{t&&t(h),r.manager.itemEnd(e)}).catch(h=>{i&&i(h)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(h){return Tn.add(e,h),t&&t(h),r.manager.itemEnd(e),h}).catch(function(h){i&&i(h),Tn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Tn.add(e,c),r.manager.itemStart(e)}}class cm{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,a;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==i;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,i)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,h=t+t;c!==h;++c)if(n[c]!==n[c+t]){o.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,a=i;r!==a;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,i){Xt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const a=this._workIndex*r;Xt.multiplyQuaternionsFlat(e,a,e,t,e,n),Xt.slerpFlat(e,t,e,t,e,a,i)}_lerp(e,t,n,i,r){const a=1-i;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*i}}_lerpAdditive(e,t,n,i,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*i}}}const La="\\[\\]\\.:\\/",hm=new RegExp("["+La+"]","g"),Ga="[^"+La+"]",lm="[^"+La.replace("\\.","")+"]",fm=/((?:WC+[\/:])*)/.source.replace("WC",Ga),um=/(WCOD+)?/.source.replace("WCOD",lm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ga),pm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ga),Am=new RegExp("^"+fm+um+dm+pm+"$"),gm=["material","materials","bones","map"];class mm{constructor(e,t,n){const i=n||qe.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class qe{constructor(e,t,n){this.path=t,this.parsedPath=n||qe.parseTrackName(t),this.node=qe.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new qe.Composite(e,t,n):new qe(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(hm,"")}static parseTrackName(e){const t=Am.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);gm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=qe.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let h=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let l=0;l<e.length;l++)if(e[l].name===h){h=l;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(h!==void 0){if(e[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[h]}}const a=e[i];if(a===void 0){const h=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qe.Composite=mm;qe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qe.prototype.GetterByBindingType=[qe.prototype._getValue_direct,qe.prototype._getValue_array,qe.prototype._getValue_arrayElement,qe.prototype._getValue_toArray];qe.prototype.SetterByBindingTypeAndVersioning=[[qe.prototype._setValue_direct,qe.prototype._setValue_direct_setNeedsUpdate,qe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_array,qe.prototype._setValue_array_setNeedsUpdate,qe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_arrayElement,qe.prototype._setValue_arrayElement_setNeedsUpdate,qe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qe.prototype._setValue_fromArray,qe.prototype._setValue_fromArray_setNeedsUpdate,qe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class vm{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:yi,endingEnd:yi};for(let h=0;h!==a;++h){const l=r[h].createInterpolant(null);o[h]=l,l.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Vl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,a=r/i,o=i/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=i._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,h=o.sampleValues;return c[0]=r,c[1]=r+n,h[0]=e/a,h[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case Zl:for(let l=0,f=c.length;l!==f;++l)c[l].evaluate(a),h[l].accumulateAdditive(o);break;case xa:default:for(let l=0,f=c.length;l!==f;++l)c[l].evaluate(a),h[l].accumulate(i,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const a=n===jl;if(e===0)return r===-1?i:a&&(r&1)===1?t-i:i;if(n===Wl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),i>=t||i<0){const o=Math.floor(i/t);i-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const h=e<0;this._setEndings(h,!h,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=i;if(a&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Mi,i.endingEnd=Mi):(e?i.endingStart=this.zeroSlopeAtStart?Mi:yi:i.endingStart=Zs,t?i.endingEnd=this.zeroSlopeAtEnd?Mi:yi:i.endingEnd=Zs)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let a=this._weightInterpolant;a===null&&(a=i._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const _m=new Float32Array(1);class bv extends Rn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,h=this._bindingsByRootAndName;let l=h[c];l===void 0&&(l={},h[c]=l);for(let f=0;f!==r;++f){const d=i[f],A=d.name;let g=l[A];if(g!==void 0)++g.referenceCount,a[f]=g;else{if(g=a[f],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,A));continue}const _=t&&t._propertyBindings[f].binding.parsedPath;g=new cm(qe.create(n,A,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,A),a[f]=g}o[f].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=i.length,i.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,h=c[c.length-1],l=e._byClipCacheIndex;h._byClipCacheIndex=l,c[l]=h,c.pop(),e._byClipCacheIndex=null;const f=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete f[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let a=i[t];a===void 0&&(a={},i[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[i],c=t[t.length-1],h=e._cacheIndex;c._cacheIndex=h,t[h]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new Rh(new Float32Array(2),new Float32Array(2),1,_m),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let a=typeof e=="string"?Tc.findByName(i,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let h=null;if(n===void 0&&(a!==null?n=a.blendMode:n=xa),c!==void 0){const f=c.actionByRoot[r];if(f!==void 0&&f.blendMode===n)return f;h=c.knownActions[0],a===null&&(a=h._clip)}if(a===null)return null;const l=new vm(this,a,t,n);return this._bindAction(l,h),this._addInactiveAction(l,o,r),l}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Tc.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let h=0;h!==n;++h)t[h]._update(i,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let h=0;h!==c;++h)o[h].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const h=a[o];this._deactivateAction(h);const l=h._cacheIndex,f=t[t.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,f._cacheIndex=l,t[l]=f,t.pop(),this._removeInactiveBindingsForAction(h)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class Fh{constructor(e){this.value=e}clone(){return new Fh(this.value.clone===void 0?this.value:this.value.clone())}}const Gc=new Le;class ym{constructor(e,t,n=0,i=1/0){this.ray=new ns(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Gc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Gc),this}intersectObject(e,t=!0,n=[]){return Aa(e,this,n,t),n.sort(Rc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)Aa(e[i],this,n,t);return n.sort(Rc),n}}function Rc(s,e){return s.distance-e.distance}function Aa(s,e,t,n){if(s.layers.test(e.layers)&&s.raycast(e,t),n===!0){const i=s.children;for(let r=0,a=i.length;r<a;r++)Aa(i[r],e,t,!0)}}class Oc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ut(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Mm extends Dh{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),i=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],r=new At;r.setIndex(new Pt(n,1)),r.setAttribute("position",new nt(i,3)),super(r,new hr({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class Iv extends Dh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new At;i.setAttribute("position",new nt(t,3)),i.setAttribute("color",new nt(n,3));const r=new hr({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(e,t,n){const i=new ye,r=this.geometry.attributes.color.array;return i.set(e),i.toArray(r,0),i.toArray(r,3),i.set(t),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ya}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ya);var xm=Object.defineProperty,wm=(s,e,t)=>e in s?xm(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,rr=(s,e,t)=>wm(s,typeof e!="symbol"?e+"":e,t);const Cm=1,Sv=2,Hh=4,Nh=8,$t=16,Zi={fov:70,near:.001,far:1e3},ga=class Ys extends bt{constructor(e=Zi){super(e.fov||Zi.fov,1,e.near||Zi.near,e.far||Zi.far),rr(this,"isDIVEPerspectiveCamera",!0),rr(this,"onSetCameraLayer",()=>{}),this.layers.mask=Ys.EDITOR_VIEW_LAYER_MASK}onResize(e,t){this.aspect=e/t,this.updateProjectionMatrix()}setCameraLayer(e){this.layers.mask=e==="LIVE"?Ys.LIVE_VIEW_LAYER_MASK:Ys.EDITOR_VIEW_LAYER_MASK,this.onSetCameraLayer(this.layers.mask)}};rr(ga,"EDITOR_VIEW_LAYER_MASK",Cm|Hh|Nh|$t),rr(ga,"LIVE_VIEW_LAYER_MASK",$t);let Fc=ga;const Pm=`
#define STANDARD

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
}
`,bm=`
#define STANDARD

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

	// accumulation
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>

	// modulation
	#include <aomap_fragment>

	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;

	#include <transmission_fragment>

	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;

	#ifdef USE_SHEEN

		// Sheen energy compensation approximation calculation can be found at the end of
		// https://drive.google.com/file/d/1T0D1VSyR4AllqIJTQAraEIzjlb5h4FKH/view?usp=sharing
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

}
`,Hc={meshphysical_vert:Pm,meshphysical_frag:bm},Im="",In="srgb",Ra="srgb-linear",Sm="display-p3",Uh="display-p3-linear",ma="linear",Nc="srgb",Uc="rec709",Kc="p3";class Ye{constructor(e,t,n,i,r,a,o,c,h){Ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,h)}set(e,t,n,i,r,a,o,c,h){const l=this.elements;return l[0]=e,l[1]=i,l[2]=o,l[3]=t,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],A=n[5],g=n[8],_=i[0],p=i[3],u=i[6],x=i[1],m=i[4],C=i[7],E=i[2],P=i[5],b=i[8];return r[0]=a*_+o*x+c*E,r[3]=a*p+o*m+c*P,r[6]=a*u+o*C+c*b,r[1]=h*_+l*x+f*E,r[4]=h*p+l*m+f*P,r[7]=h*u+l*C+f*b,r[2]=d*_+A*x+g*E,r[5]=d*p+A*m+g*P,r[8]=d*u+A*C+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8];return t*a*l-t*o*h-n*r*l+n*o*c+i*r*h-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],h=e[7],l=e[8],f=l*a-o*h,d=o*c-l*r,A=h*r-a*c,g=t*f+n*d+i*A;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*h-l*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(l*t-i*c)*_,e[5]=(i*r-o*t)*_,e[6]=A*_,e[7]=(n*c-h*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+e,-i*h,i*c,-i*(-h*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ta.makeScale(e,t)),this}rotate(e){return this.premultiply(ta.makeRotation(-e)),this}translate(e,t){return this.premultiply(ta.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ta=new Ye,qc=new Ye().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kc=new Ye().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[Ra]:{transfer:ma,primaries:Uc,toReference:s=>s,fromReference:s=>s},[In]:{transfer:Nc,primaries:Uc,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Uh]:{transfer:ma,primaries:Kc,toReference:s=>s.applyMatrix3(kc),fromReference:s=>s.applyMatrix3(qc)},[Sm]:{transfer:Nc,primaries:Kc,toReference:s=>s.convertSRGBToLinear().applyMatrix3(kc),fromReference:s=>s.applyMatrix3(qc).convertLinearToSRGB()}},Bm=new Set([Ra,Uh]),Nt={enabled:!0,_workingColorSpace:Ra,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Bm.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Us[e].toReference,i=Us[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Us[s].primaries},getTransfer:function(s){return s===Im?ma:Us[s].transfer}};function na(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ia(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}function Em(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Kh(s){const e={};for(let t=0;t<s.length;t++){const n=Em(s[t]);for(const i in n)e[i]=n[i]}return e}function _i(s,e,t){return Math.max(e,Math.min(t,s))}function Tm(s,e){return(s%e+e)%e}function sa(s,e,t){return(1-t)*s+t*e}class bi{constructor(e=0,t=0){bi.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_i(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}const qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function ra(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Gn{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=In){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Nt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Nt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Nt.workingColorSpace){if(e=Tm(e,1),t=_i(t,0,1),n=_i(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ra(a,r,e+1/3),this.g=ra(a,r,e),this.b=ra(a,r,e-1/3)}return Nt.toWorkingColorSpace(this,i),this}setStyle(e,t=In){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=In){const n=qh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=na(e.r),this.g=na(e.g),this.b=na(e.b),this}copyLinearToSRGB(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=In){return Nt.fromWorkingColorSpace(yt.copy(this),e),Math.round(_i(yt.r*255,0,255))*65536+Math.round(_i(yt.g*255,0,255))*256+Math.round(_i(yt.b*255,0,255))}getHexString(e=In){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Nt.workingColorSpace){Nt.fromWorkingColorSpace(yt.copy(this),t);const n=yt.r,i=yt.g,r=yt.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=h,e.l=l,e}getRGB(e,t=Nt.workingColorSpace){return Nt.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=In){Nt.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,n=yt.g,i=yt.b;return e!==In?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(Ks);const n=sa(bn.h,Ks.h,t),i=sa(bn.s,Ks.s,t),r=sa(bn.l,Ks.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new Gn;Gn.NAMES=qh;const Rt={common:{diffuse:{value:new Gn(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new bi(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gn(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}}},Yc={standard:{uniforms:Kh([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Gn(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}])}};Yc.physical={uniforms:Kh([Yc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new bi(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new Gn(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new bi},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new Gn(0)},specularColor:{value:new Gn(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new bi},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Hc.meshphysical_vert,fragmentShader:Hc.meshphysical_frag};const Dm=`varying vec3 vWorldPosition;

void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    gl_Position = projectionMatrix * viewMatrix * worldPos;
}`,zm=`uniform float uGridSize;
uniform float uMajorLineEvery;
uniform vec3 uMinorLineColor;
uniform vec3 uMajorLineColor;
uniform float uFadeDistance;

varying vec3 vWorldPosition;

void main() {
    vec2 coord = vWorldPosition.xz;

    // Minor grid
    vec2 minorCoord = coord / uGridSize;
    vec2 minorGrid = abs(fract(minorCoord - 0.5) - 0.5) / fwidth(minorCoord);
    float lineMinor = min(minorGrid.x, minorGrid.y);

    // Major grid
    float majorSize = uGridSize * uMajorLineEvery;
    vec2 majorCoord = coord / majorSize;
    vec2 majorGrid = abs(fract(majorCoord - 0.5) - 0.5) / fwidth(majorCoord);
    float lineMajor = min(majorGrid.x, majorGrid.y);

    // Line alpha: minor = 1px, major = 2px wide
    float minorAlpha = 1.0 - min(lineMinor, 1.0);
    float majorAlpha = 1.0 - min(lineMajor / 2.0, 1.0);

    float alpha = max(minorAlpha, majorAlpha);
    vec3 color = mix(uMinorLineColor, uMajorLineColor, step(minorAlpha, majorAlpha));

    // Radial fade from camera
    float dist = length(vWorldPosition.xz - cameraPosition.xz);
    alpha *= 1.0 - smoothstep(uFadeDistance * 0.5, uFadeDistance, dist);

    if (alpha < 0.001) discard;

    gl_FragColor = vec4(color, alpha);
}`,Lm={uniforms:{uGridSize:{value:1},uMajorLineEvery:{value:10},uMinorLineColor:{value:new ye("#dddddd")},uMajorLineColor:{value:new ye("#888888")},uFadeDistance:{value:10}},vertexShader:Dm,fragmentShader:zm},Gm={grid:Lm};class Rm extends vn{}var Om=Object.defineProperty,Fm=(s,e,t)=>e in s?Om(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t,G=(s,e,t)=>Fm(s,typeof e!="symbol"?e+"":e,t);class Hm{constructor(){G(this,"isDIVEClock",!0),G(this,"_lastTime",0),G(this,"_isRunning",!1),G(this,"_tickers",[])}start(){this._isRunning||(this._isRunning=!0,this._lastTime=performance.now(),requestAnimationFrame(this._tick.bind(this)))}stop(){this._isRunning=!1}addTicker(e){this._tickers.find(t=>t.uuid===e.uuid)||this._tickers.push(e)}hasTicker(e){return this._tickers.find(t=>t.uuid===e.uuid)!==void 0}removeTicker(e){const t=this._tickers.findIndex(n=>n.uuid===e.uuid);t!==-1&&this._tickers.splice(t,1)}dispose(){this.stop(),this._tickers=[],this._isRunning=!1,this._lastTime=0}_tick(e){if(!this._isRunning)return;const t=(e-this._lastTime)/1e3;this._lastTime=e,this._tickers.forEach(n=>n.tick(t)),requestAnimationFrame(this._tick.bind(this))}}class Nm extends em{constructor(e){super(e),this.type=An}parse(e){const t=function(u,x){switch(u){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},i=function(u,x,m){x=x||1024;let C=u.pos,E=-1,P=0,b="",D=String.fromCharCode.apply(null,new Uint16Array(u.subarray(C,C+128)));for(;0>(E=D.indexOf(`
`))&&P<x&&C<u.byteLength;)b+=D,P+=D.length,C+=128,D+=String.fromCharCode.apply(null,new Uint16Array(u.subarray(C,C+128)));return-1<E?(u.pos+=P+E+1,b+D.slice(0,E)):!1},r=function(u){const x=/^#\?(\S+)/,m=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,b={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let D,M;for((u.pos>=u.byteLength||!(D=i(u)))&&t(1,"no header found"),(M=D.match(x))||t(3,"bad initial token"),b.valid|=1,b.programtype=M[1],b.string+=D+`
`;D=i(u),D!==!1;){if(b.string+=D+`
`,D.charAt(0)==="#"){b.comments+=D+`
`;continue}if((M=D.match(m))&&(b.gamma=parseFloat(M[1])),(M=D.match(C))&&(b.exposure=parseFloat(M[1])),(M=D.match(E))&&(b.valid|=2,b.format=M[1]),(M=D.match(P))&&(b.valid|=4,b.height=parseInt(M[1],10),b.width=parseInt(M[2],10)),b.valid&2&&b.valid&4)break}return b.valid&2||t(3,"missing format specifier"),b.valid&4||t(3,"missing image size specifier"),b},a=function(u,x,m){const C=x;if(C<8||C>32767||u[0]!==2||u[1]!==2||u[2]&128)return new Uint8Array(u);C!==(u[2]<<8|u[3])&&t(3,"wrong scanline width");const E=new Uint8Array(4*x*m);E.length||t(4,"unable to allocate buffer space");let P=0,b=0;const D=4*C,M=new Uint8Array(4),v=new Uint8Array(D);let L=m;for(;L>0&&b<u.byteLength;){b+4>u.byteLength&&t(1),M[0]=u[b++],M[1]=u[b++],M[2]=u[b++],M[3]=u[b++],(M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=C)&&t(3,"bad rgbe scanline format");let F=0,T;for(;F<D&&b<u.byteLength;){T=u[b++];const k=T>128;if(k&&(T-=128),(T===0||F+T>D)&&t(3,"bad scanline data"),k){const W=u[b++];for(let se=0;se<T;se++)v[F++]=W}else v.set(u.subarray(b,b+T),F),F+=T,b+=T}const K=C;for(let k=0;k<K;k++){let W=0;E[P]=v[k+W],W+=C,E[P+1]=v[k+W],W+=C,E[P+2]=v[k+W],W+=C,E[P+3]=v[k+W],P+=4}L--}return E},o=function(u,x,m,C){const E=u[x+3],P=Math.pow(2,E-128)/255;m[C+0]=u[x+0]*P,m[C+1]=u[x+1]*P,m[C+2]=u[x+2]*P,m[C+3]=1},c=function(u,x,m,C){const E=u[x+3],P=Math.pow(2,E-128)/255;m[C+0]=vs.toHalfFloat(Math.min(u[x+0]*P,65504)),m[C+1]=vs.toHalfFloat(Math.min(u[x+1]*P,65504)),m[C+2]=vs.toHalfFloat(Math.min(u[x+2]*P,65504)),m[C+3]=vs.toHalfFloat(1)},h=new Uint8Array(e);h.pos=0;const l=r(h),f=l.width,d=l.height,A=a(h.subarray(h.pos),f,d);let g,_,p;switch(this.type){case zt:p=A.length/4;const u=new Float32Array(p*4);for(let m=0;m<p;m++)o(A,m*4,u,m*4);g=u,_=zt;break;case An:p=A.length/4;const x=new Uint16Array(p*4);for(let m=0;m<p;m++)c(A,m*4,x,m*4);g=x,_=An;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:f,height:d,data:g,header:l.string,gamma:l.gamma,exposure:l.exposure,type:_}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case zt:case An:a.colorSpace=en,a.minFilter=Mt,a.magFilter=Mt,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}const kh="data:application/octet-stream;base64,Iz9SQURJQU5DRQojIE1hZGUgd2l0aCBBZG9iZSBQaG90b3Nob3AKRk9STUFUPTMyLWJpdF9ybGVfcmdiZQoKLVkgNTEyICtYIDEwMjQKAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/3P/c/9z/3P/c/9z/3P/ciNz/gf+B/4H/gf+B/4H/gf+BiIECAgQA/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/9z/3P/c/9z/3P/c/9z/3Ijc/4H/gf+B/4H/gf+B/4H/gYiBAgIEAP/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P/c/9z/3P/c/9z/3P/c/9yI3P+B/4H/gf+B/4H/gf+B/4GIgQICBAD/3P/c/9z/3P/c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0AfX/ZOnuMrZodwH0sKyoI7y0v/Q/9AI0NDQ75Ksx9vk3OCAs4H/gNCAtYH/gNOAq4H/gP+AhoDogQICBAAIzs/Oz8/Ozs6GzwvOz8/Oz8/Pzs/OzobPBs7Pzs/OzobPEM7Pzs7Pzs/Oz8/Ozs/Pz86EzwXOz8/PzobPhM4Iz87Pzs/Ozs6JzwzOzs/PztT7kqS0xNSc3BTazL2unYntz8/Oz8/Oz8/Pzs7PzoTPC87Pz87Pzs7Pzs/Ohs8BzoTPBc7Pz8/OhM8Dzs/Oh88BzojPAc6FzwTOz87OhM8Ezs/PzorPB87Pz8/Ozs6IzwXOz87PzoTPhM6EzwbOz87Pz86Ezw7Oz87Pz8/Oz87Pzs/OzofPAc6EzxHOz87Oz87Ozs/Pz87Pz87PzoXPB87Ozs/Pzs6NzwfOzs/Oz8/PhM4Uz8/U6YGMlpyjqrG3vsXMzNHU1NmG3BLZ1NTQzMrEvLWtpZ6WjoTz2c6FzwHOhM8Fzs/Pz86FzyTOzs/Oz8/Oz87Ozs/Oz8/Pzs/Pzs/Oz8/Pzs/Pzs/Pz87Pzs6IzwXOzs/OzobPCM7Pz8/Ozs/Ohc8Ezs/PzpTPBM7Pz86EzwbOz87Pzs+EzoXPCc7Pz87Pz8/OzoTPHM7Pz8/Ozs/Oz8/Ozs/Pzs/Pzs/Pz87Oz8/Ozs6EzwXOzs7PzoTPhM4Dz8/Ohc8BzoXPG87Pz87Pz8/Oz8/PztDmgo6Yoaqzu8XMztTU24XcDtTUz8zFvrSropmRhvLXhM8Gzs7Pzs/OiM8BzoTPC87Oz8/Pzs7Pzs7Oh88Jzs7Pz87Pzs/Ohs8Nzs/Pzs/Pzs7Oz8/PzoXPEs7Pzs/Pzs/Pzs7Oz8/Ozs/OzobPB87Ozs/Pz86EzwTOz87PhM4az87Pzs/Oz8/Ozs/Pz87Pzs/Oz8/Oz87Pz86GzxDOz8/Oz87Oz87Oz87Pzs/OhM8Gzs/Oz8/OhM8Lzs/Pz87Pz87Pzs6EzybOz8/Ozs7Pz8/Ozs/Ozs7Pz87Pz87Ozs/Pzs/Oz87Oz87Pzs7PzoTPAc6Ez4XOhc8BzoTPAc6FzwvOz8/Oz8/ahqG71eDcAc+HzgXPzs/PzoTPFM7Oz87Oz8/Oz8/Pzs/Ozs7Pz8/Ohs8Hzs7Pz8/OzobPBM7Pz86EzxHOz87Pz87Pzs7Pz87Pz87PzoXPBc7Pzs7PhM4Mz8/Pzs/U+5KktMTUnNwQ2sy9rp2J7c/Ozs/Oz8/PzoXPB87Pz8/Ozs6Fzx7Oz87Oz87Pzs7Oz87Pz87Pzs/Pz87Pz8/Ozs/Ozs6GzxDOzs/Pz87Oz87Pzs/Pzs/OhM8BzoTPC87Pzs/Oz8/Oz87Ohs+FzgPPzs+FzgnPz87Pz8/Ozs+EzhfPzs/Oz87Pzs/Pzs/Ozs/Oz87Ozs/PzoTPDs7Pzs7Pzs7Oz87Pz8/OhM8Mzs/Oz8/Pzs7Oz8/OhM8Gzs7Pz87PhM4Ez8/PzofPGM7Pz87Pz9TpgYyWnKOqsbe+xczM0dTU2YbcF9nU1NDMysS8ta2lnpaOhPPZzs/Ozs7Phc4Sz8/Ozs/Oz87Ozs/Oz8/Pzs7Phs4Mz87Pzs/Pz87Pzs7Phc4Lz87Pzs7Oz8/Oz8+FzoLPh84Kz8/Pzs/Oz87OzoXPHs7Pz87Pzs/Ozs7Pz87Pzs/Ozs7Pzs/Pz87Ozs/PzoTPgs6EzxrOz8/Pzs7Oz87Ozs/Pzs/Pz87Oz87Oz8/OzoTPEc7Oz87Ozs/Pz87Pz8/Oz87PhM6Ezw3Ozs/Ozs/Pzs7Pz87Phc4ez87Oz87Oz8/Oz87Oz87P0OaCjpihqrO7xczO1NTbhdwb1NTPzMW+tKuimZGG8tfPzs7Pz8/Ozs/Ozs/PhM41z8/Oz87Pzs7Pzs/Pzs/Pzs/Pzs/Oz87Pz87Pz87Pz87Pzs/Pzs/Oz8/Ozs/Ozs7Pzs/Pzs+EzoLPhc6Cz4XOBs/Pzs7Pz4TOCM/Ozs/Ozs/Ohc+EzoPPhM4Hz8/Oz87OzoXPBc7Ozs/PhM4dz87Pz8/Oz8/Pzs/Oz87Ozs/Oz87Ozs/Oz87Pzs+FzgfPzs/Oz8/OhM8hzs7Pzs7Oz8/Oz87Oz87Oz87Ozs/Ozs/Ozs/Ozs7Pz87OiM+CzobPB87Pzs/Pz86EzxnOz87Ozs/Pz87Ozs/Pzs/Ozs/Oz9qGobvV4NwEz8/PzojPA87PzofPAc6IzwHOhc8Ezs/OzoTPBM7Pz86KzwHOhM+CzojPBc7Pzs/Ohc+DzoTPEM7Pzs/Pzs/Pz9T7kqS0xNSc3AnazL2unYntz86GzwbOzs/Pzs6Nz4LOhc+EzgrPz87Pzs7Pz87Ohc8Rzs/Pz87Oz87Pz87Pz8/Oz86EzwHOhM+DzoXPAc6EzwXOz8/PzoXPFs7Oz87Pz87Pzs7Oz87Pz8/Oz8/Oz86GzwjOz8/Pzs/PzonPBM7Pzs6GzwHOhs8BzoXPBM7Pz86SzwHOk88Yzs/Pz87P1OmBjJaco6qxt77FzMzR1NTZhtwc2dTU0MzKxLy1raWelo6E89nOz8/Oz87Pz87PzoXPgs6GzxPOz8/Pzs/Pz87Pz8/Ozs/Ozs/OhM8Hzs7Pz87PzofPhM4Hz8/Oz8/PzojPCc7Oz8/Oz87PzoXPBc7Pz8/OhM+CzoTPgs6FzwbOz87Pzs6FzwXOz87PzofPgs6Hz4POhc8Gzs7Pz87OhM8Rzs/Oz87Pzs/Oz87Oz87Pz86EzxXOz87Pz8/Oz8/Pzs/Oz8/Oz8/Pzs6Mzw/Q5oKOmKGqs7vFzM7U1NuF3BPU1M/Mxb60q6KZkYby18/Pz87OlM8Wzs7Pz87Oz8/Pzs7Pzs/Pzs/Oz8/PzoXPAc6Fzw3Oz8/Ozs7Pzs/Oz8/Ojc8Dzs/Oh8+CzoXPAc6FzwHOh88Izs/Pzs7Pz86EzwTOz87Oh88BzoTPB87Pzs/Pz86EzwHOjs8Bzo/PAc6EzwHOjs8Ezs/OzoTPA87Pz4TOBs/Oz87PzoXPB87Ozs/Pz86IzwLOz4XOCc/Oz8/Ozs7PzoXPBs7ahqG71eDc5oCngf+A3oClgf+A4YCegf+A/4CRgOSBAgIEAOvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3OvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3OvNHd7/i5ehq7fByc3U1tzc3NbU0MzKwrmvpZuRhevR/83/zf/N/83/zf/Nnc0Fz/aVsMvc3O2AmYH/gP+A/4D/gP+A/4ChgN+BAgIEAP/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P/M/8z/zP/M/8z/zP/Mq8wF34miu9TX3P+A/4D/gP+A/4D/gP+ArIDbgQICBAD/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/y//L/8v/y//L/8v/y7DLBe2QqcHY0tz/gP+A/4D/gP+A/4D/gLGA1oECAgQA/8n/yf/J/8n/yf/J/8m0yQbO+ZOpv9XN3P/J/8n/yf/J/8n/yf/JtMkGzvmTqb/Vzdz/yf/J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AgQA/5n/mf+Z/5mlmQKRxIe+AoCG/4qpigL2pYe+Afa7mQHwhb4Bsf+KtYoBxYW+Acelmf+Z/5n/mf+ZpZkCkcSHvgKAhv+KqYoC9qWHvgH2u5kB8IW+AbH/irWKAcWFvgHHpZn/mf+Z/5n/maWZApHEh74CgIb/iqmKAvalh74B9ruZAfCFvgGx/4q1igHFhb4Bx6WZ/4D/gP+A/4CmgIh/AYH/gqqCAoGAiH+7gIZ/AYH/grWCAYGGf6WAAgIEAP+Y/5j/mP+YpZgB0oa8AsCp/4qsigKCyoe8Af26mAHdhbwB0v+KtYoCh/2FvAGJpJj/mP+Y/5j/mKWYAdKGvALAqf+KrIoCgsqHvAH9upgB3YW8AdL/irWKAof9hbwBiaSY/5j/mP+Y/5ilmAHShrwCwKn/iqyKAoLKh7wB/bqYAd2FvAHS/4q1igKH/YW8AYmkmP+A/4D/gP+ApYCIfwGB/4KtggGAiH+6gIZ/AYH/graChn+lgAICBAD/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/l/+X/5f/l6SXAeKGuwLGvP+KrooChtGHuwGCuZcB0YW7Aej/iraKAYmFuwHtpJf/gP+A/4D/gKSAiH8Bgf+Cr4IBgId/uoCGfwGB/4K2ggGBhn+kgAICBAD/lf+V/5X/laOVAfeGuQLExf+KsIoChcWGuQK/jriVAcSFuQH9/4q2igHOhbkB0aSV/5X/lf+V/5WjlQH3hrkCxMX/irCKAoXFhrkCv464lQHEhbkB/f+KtooBzoW5AdGklf+V/5X/lf+Vo5UB94a5AsTF/4qwigKFxYa5Ar+OuJUBxIW5Af3/iraKAc6FuQHRpJX/gP+A/4D/gKOAiH8Bgf+CsYIBgId/uYCGfwGB/4K2ggGBhn+kgAICBAD/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/lP+U/5T/lKKUAYCHuAG2/4qyigKDrYa4AeK4lAG7hbgBhv+KtooChtWFuAGSo5T/gP+A/4D/gKOAh38Bgf+Cs4IBgId/uICGf/+CuIKGf6SAAgIEAP+T/5P/k/+ToZMCjL2GtgGa/4q0igL7hoa2Afy3k4a2/4q4igHLhbYBhaOT/5P/k/+T/5OhkwKMvYa2AZr/irSKAvuGhrYB/LeThrb/iriKAcuFtgGFo5P/k/+T/5P/k6GTAoy9hrYBmv+KtIoC+4aGtgH8t5OGtv+KuIoBy4W2AYWjk/+A/4D/gP+AooCHfwGB/4K0ggKBgId/t4CGf/+CuIIBgIV/pIACAgQA/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/5L/kv+S/5KhkgHphrUB6v+KtooC3cOFtQK4ibWSAZCFtQHL/4q4igGchbUB7qOS/4D/gP+A/4ChgId/AYD/graCAYGHf7eAhn//griCAYGGf6OAAgIEAP+R/5H/kf+RoJEBhYazAoyB/4q3igGjhrMB3rWRAY2FswHq/4q4igHOhbMB1aOR/5H/kf+R/5GgkQGFhrMCjIH/ireKAaOGswHetZEBjYWzAer/iriKAc6FswHVo5H/kf+R/5H/kaCRAYWGswKMgf+Kt4oBo4azAd61kQGNhbMB6v+KuIoBzoWzAdWjkf+A/4D/gP+AoYCGfwGA/4K4ggGBh3+2gIZ//4K4ggGBhn+jgAICBAD/kP+Q/5D/kKCQAdeFsgK22/+KuIoCiLuGsgGCtJABj4ay/4q4igH3hbIBwKOQ/5D/kP+Q/5CgkAHXhbICttv/iriKAoi7hrIBgrSQAY+Gsv+KuIoB94WyAcCjkP+Q/5D/kP+QoJAB14WyArbb/4q4igKIu4ayAYK0kAGPhrL/iriKAfeFsgHAo5D/gP+A/4D/gKCAh38Bgf+CuYIBgIZ/toCGf/+CuIIBgYZ/o4ACAgQA/47/jv+O/46fjgGBhrEBhP+KuooC79GFsQHMtY6Gsf+KuYoB4IWxAYuijv+O/47/jv+On44BgYaxAYT/irqKAu/RhbEBzLWOhrH/irmKAeCFsQGLoo7/jv+O/47/jp+OAYGGsQGE/4q6igLv0YWxAcy1joax/4q5igHghbEBi6KO/4D/gP+A/4CggIZ/AYH/grqCAYGHf7WAhn//grmChn+jgAICBAD/jf+N/43/jZ+NAdaFrwLqgf+Ku4oBoIavAfy0jQG0ha8Bhf+KuIoBqoWvAYSijf+N/43/jf+Nn40B1oWvAuqB/4q7igGghq8B/LSNAbSFrwGF/4q4igGqha8BhKKN/43/jf+N/42fjQHWha8C6oH/iruKAaCGrwH8tI0BtIWvAYX/iriKAaqFrwGEoo3/gP+A/4D/gJ+Ah3//gryCAYGHf7SAhn//grmCAYCFf6OAAgIEAP+M/4z/jP+MnowBgIauAav/iryKAoaIha4BybSMAbqFrgH4/4q4igHgha4B+aKM/4z/jP+M/4yejAGAhq4Bq/+KvIoChoiFrgHJtIwBuoWuAfj/iriKAeCFrgH5ooz/jP+M/4z/jJ6MAYCGrgGr/4q8igKGiIWuAcm0jAG6ha4B+P+KuIoB4IWuAfmijP+A/4D/gP+An4CGfwGB/4K9ggGAhn+0gIZ/AYH/griCAYCGf6KAAgIEAP+L/4v/i/+LnosB24WsAvaF/4q9igG+hqwB+bOLAcCFrAHo/4q4igGIhawB66KL/4v/i/+L/4ueiwHbhawC9oX/ir2KAb6GrAH5s4sBwIWsAej/iriKAYiFrAHroov/i/+L/4v/i56LAduFrAL2hf+KvYoBvoasAfmziwHAhawB6P+KuIoBiIWsAeyii/+A/4D/gP+AnoCHf/+CvoIBgYd/s4CGfwGB/4K4ggGBhn+igAICBAD/iv+K/4r/ip6KAbqFqwGk/4q/igGihasBzbOKAceFqwHU/4q4igGbhasB4aKK/4r/iv+K/4qeigG6hasBpP+Kv4oBooWrAc2zigHHhasB1P+KuIoBm4WrAeGiiv+K/4r/iv+KnooBuoWrAaT/ir+KAaKFqwHNs4oBx4WrAdT/iriKAZuFqwHhoor/gP+A/4D/gJ6Ahn8Bgf+Cv4IBgIZ/s4CGfwGB/4K4ggGBhn+igAICBAD/if+J/4n/iZ2JCPWpqqqqqcOC/4q/igi+qqqpqqqq+7KJB9Gqqampqrv/iriKB6yqqaqpqdiiif+J/4n/if+JnYkI9aqpqaqqw4L/ir+KCL6qqqqpqan7sokH0amqqamqu/+KuIoHrKmqqqmp2KKJ/4n/if+J/4mdiQj1qqmqqqnDgv+Kv4oIvqqpqqqqqfuyiQfRqqmpqqm7/4q4igesqqmpqqrYoon/gP+A/4D/gJ2Ah3//gsCCAYGHf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4j/iP+I/4idiAHShagB7/+KwIoCiIuFqAHWsogB2oWoAaL/iriKAbSFqAHSooj/iP+I/4j/iJ2IAdKFqAHv/4rAigKIi4WoAdayiAHahagBov+KuIoBtIWoAdKiiP+I/4j/iP+InYgB0oWoAe//isCKAoiLhagB1rKIAduFqAGi/4q4igG0hagB0qKI/4D/gP+A/4CdgIZ/AYD/gsGCAYCGf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4b/hv+G/4adhgGzhacBz/+KwYoBrIWnAbWyhgHmhacBhP+KuIoBwoWnAcuihv+G/4b/hv+GnYYBs4WnAc//isGKAayFpwG1soYB5oWnAYT/iriKAcKFpwHLoob/hv+G/4b/hp2GAbOFpwHP/4rBigGshacBtbKGAeaFpwGE/4q4igHChacBy6KG/4D/gP+A/4CdgIZ/AYH/gsGCAYGGf7KAhn8Bgf+CuIIBgYZ/ooACAgQA/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4X/hf+F/4WchQH6haUC6Ij/isGKAoG8haUB77GFAfKFpQHD/4q4igHChaUByaKF/4D/gP+A/4CcgId//4LDgod/sYCGfwGA/4K4ggGBhn+igAICBAD/hP+E/4T/hJyEAeGFpAH4/4rDigHthaQBzLGEAf6FpAGE/4q4igHBhaQBx6KE/4T/hP+E/4SchAHhhaQB+P+Kw4oB7YWkAcyxhAH+haQBhP+KuIoBwYWkAceihP+E/4T/hP+EnIQB4YWkAfj/isOKAe2FpAHMsYQB/oWkAYT/iriKAcGFpAHHooT/gP+A/4D/gJyAhn8BgP+Cw4IBgIZ/sYCGfwGA/4K4ggGBhn+igAICBAC+gwWArreExrgABcalt6+AkIMFiuymydj/3NPcBdXEpuqKj4MFgK63hMa4AAXGpbevgNuDAceFowG8/4rDigHPhaMBrbKDAaiFowGD/4q3igG+haMBx6KDvoMFgK63hMa4AAXGpbevgJCDBYrspsnY/9zT3AXVxKbqio+DBYCut4TGuAAFxqW3r4DbgwHHhaMBvP+Kw4oBz4WjAa2ygwGohaMBg/+Kt4oBvoWjAceig76DBYCut4TGuAAFxqW3r4CQgwWK7KbJ2P/c09wF1cSm6oqPgwWArreExrgABcalt6+A24MBx4WjAbz/isOKAc+FowGtsoMBqIWjAYP/ireKAb6FowHHooO/gAR/fn16uAAEe31+f5OA/4HZgZKABH9+fXq4AAR7fX5/3ICGfwGB/4LDggGBhn+ygIZ//4K4ggGBhn+igAICBAC9ggKyk8AAApOxjoIC5cb/3NvcAsbmjYICspPAAAKTsdqCAa6FoQH2/4rDigKI7IWhAe2xggG4haEB3f+Kt4oBs4WhAcqigr2CArKTwAACk7GOggLlxv/c29wCxuaNggKyk8AAApOx2oIBroWhAfb/isOKAojshaEB7bGCAbiFoQHd/4q3igGzhaEByqKCvYICspPAAAKTsY6CAuXG/9zb3ALG5o2CArKTwAACk7HaggGuhaEB9v+Kw4oCiOyFoQHtsYIBuIWhAd3/ireKAbOFoQHKooK9gAJ/fcAAAn1/j4D/gd2BjoACf33AAAJ9f9qAhn8Bgf+CxIKHf7GAhn8Bgf+Ct4IBgYZ/ooACAgQAu4ECgO/EAALvgIqBAoWU/9zf3AKUhYmBAoDvxAAC74DXgQH6haAB8v+KxYoBgIWgAcyxgQHHhaABtv+Kt4oBr4WgAcqigbuBAoDvxAAC74CKgQKFlP/c39wClIWJgQKA78QAAu+A14EB+oWgAfL/isWKAYCFoAHMsYEBx4WgAbb/ireKAa+FoAHKooG7gQKA78QAAu+AioEChZT/3N/cApSFiYECgO/EAALvgNeBAfqFoAHy/4rFigGAhaABzLGBAceFoAG2/4q3igGvhaAByqKBvIABfsQAAX6MgP+B4YGLgAF+xAABftiAh3//gsWCAYGGf7GAhn8Bgf+Ct4IBgYZ/ooACAgQAu4AB7cYAAe2KgAGU/9zh3AGUiYAB7cYAAe3XgAHlhZ8B1f+KxYoBxoWfAbOxgAHXhZ//iriKAaSFnwHNooC7gAHtxgAB7YqAAZT/3OHcAZSJgAHtxgAB7deAAeWFnwHV/4rFigHGhZ8Bs7GAAdeFn/+KuIoBpIWfAc2igLuAAe3GAAHtioABlP/c4dwBlImAAe3GAAHt14AB5YWfAdX/isWKAcaFnwGzsYAB14Wf/4q4igGkhZ8BzaKAu4ABfsYAAX6KgP+B44GJgAF+xgABfteAhn8BgP+CxYIBgYZ/sYCGfwGB/4K3ggGBhn+igAICBAC6/gGqyAABqoj+Aeb/3OPcAeaH/gGqyAABqtb+AdKFnQGU/4rFigKDtIWdAfyw/gHqhZ0Bs/+Kt4oBkoWdAdKi/rr+AarIAAGqiP4B5v/c49wB5of+AarIAAGq1v4B0oWdAZT/isWKAoO0hZ0B/LD+AeqFnQGz/4q3igGShZ0B0qL+uv4BqsgAAaqI/gHm/9zj3AHmh/4BqsgAAarW/gHShZ0BlP+KxYoCg7SFnQH8sP4B6oWdAbP/ireKAZKFnQHSov67f8gAiX8BgP+B44EBgIh/yADdfwGB/4LGgr1/AYD/greCAYGofwICBAC5/AL23cgAAtX2hvwChcv/3OPcAsuFhfwC9t3IAALV9tX8AcKFnAG2/4rGigHHhZwB47D8AfmFnAK6iP+KtooBgIWcAdii/Ln8AvbdyAAC1faG/AKFy//c49wCy4WF/AL23cgAAtX21fwBwoWcAbb/isaKAceFnAHjsPwB+YWcArqI/4q2igGAhZwB2KL8ufwC9t3IAALV9ob8AoXL/9zj3ALLhYX8AvbdyAAC1fbV/AHChZwBtv+KxooBx4WcAeOw/AH5hZwCuoj/iraKAYCFnAHYovy6fwF8yAABfId/AYD/geWBAYCGfwF8yAABfNx/AYH/gsaCAYC9f/+Ct4IBgah/AgIEALn6AaHKAAGghvoB7v/c5dwB74X6AaHKAAGg1foBtIWbAdT/isaKAZmFmwHHsfoBrYWbAeb/iraKAdaFmwHeovq5+gGhygABoIb6Ae7/3OXcAe+F+gGhygABoNX6AbSFmwHU/4rGigGZhZsBx7H6Aa2FmwHm/4q2igHWhZsB3qL6ufoBocoAAaCG+gHu/9zl3AHvhfoBocoAAaDV+gG0hZsB1P+KxooBmYWbAcex+gGthZsB5v+KtooB1oWbAd6i+rp/ygCHfwGA/4HlgQGAhn/KANx/AYH/gsaCAYG9fwGB/4K2ggGAqH8CAgQAufgBo8oAAaGG+AGo/9zl3AGohfgBo8oAAaHV+AGphZkB7f+KxooB0IWZAa+x+AHBhZkBsf+KtooBsIWZAeSi+Ln4AaPKAAGhhvgBqP/c5dwBqIX4AaPKAAGh1fgBqYWZAe3/isaKAdCFmQGvsfgBwYWZAbH/iraKAbCFmQHkovi5+AGjygABoYb4Aaj/3OXcAaiF+AGjygABodX4AamFmQHt/4rGigHQhZkBr7H4AcGFmQGx/4q2igGwhZkB5KL4uX8BfsoAAX6Gf/+B54GFfwF+ygABftt/AYH/gsaCAYG9fwGB/4K2ggGAqH8CAgQAufYB78oAAe+G9gHJ/9zl3AHJhfYB78oAAe/V9gGghZgBgP+KxooCg6CFmAH1sPYB1YWYAfX/iraKAYCFmAHrova59gHvygAB74b2Acn/3OXcAcmF9gHvygAB79X2AaCFmAGA/4rGigKDoIWYAfWw9gHVhZgB9f+KtooBgIWYAeui9rn2Ae/KAAHvhvYByf/c5dwByYX2Ae/KAAHv1fYBoIWYAYD/isaKAoOghZgB9bD2AdWFmAH1/4q2igGAhZgB66L2uX8BfMoAAXyGf/+B54GFfwF8ygABfNt//4LIgr1/AYD/graCAYCofwICBAC59AHWygABuIb0Adj/3OXcAdiF9AHWygABuNX0AZiFlwGI/4rHigGahZcB5LD0AeiFlwGH/4q1igKIooWXAfOi9Ln0AdbKAAG4hvQB2P/c5dwB2IX0AdbKAAG41fQBmIWXAYj/iseKAZqFlwHksPQB6IWXAYf/irWKAoiihZcB86L0ufQB1soAAbiG9AHY/9zl3AHYhfQB1soAAbjV9AGYhZcBiP+Kx4oBmoWXAeSw9AHohZcBh/+KtYoCiKKFlwHzovS5fwF6ygABeoZ//4HngYV/AXrKAAF623//gsiCAYC8fwGA/4K2gql/AgIEALnyzACG8v/c59yF8swA1PIB7oWWAbj/isiKAfSFlgHRsfIBoIWWAfn/irSKAfeFlgGho/K58swAhvL/3OfchfLMANTyAe6FlgG4/4rIigH0hZYB0bHyAaCFlgH5/4q0igH3hZYBoaPyufLMAIby/9zn3IXyzADU8gHuhZYBuP+KyIoB9IWWAdGx8gGghZYB+f+KtIoB94WWAaGj8rl/zACGf/+B54GFf8wA23//gsiCAYC9fwGB/4K0ggGBqX8CAgQAufDMAIbw/9zn3IXwzADU8AHqhZUBzf+KyIoBooWVAcCx8AG0hZUBvv+KtIoB1oWVAayj8LnwzACG8P/c59yF8MwA1PAB6oWVAc3/isiKAaKFlQHAsfABtIWVAb7/irSKAdaFlQGso/C58MwAhvD/3OfchfDMANTwAeqFlQHN/4rIigGihZUBwLHwAbSFlQG+/4q0igHWhZUBrKPwuX/MAIZ//4HngYV/zADbf/+CyIIBgb1/AYH/grSCAYGpfwICBAC57swAhu7/3Ofche7MANTuAeiFkwHM/4rIigHLhZMBr7HuAciFkwH+/4q0igG0hZMBuKPuue7MAIbu/9zn3IXuzADU7gHohZMBzP+KyIoBy4WTAa+x7gHIhZMB/v+KtIoBtIWTAbij7rnuzACG7v/c59yF7swA1O4B6IWTAcz/isiKAcuFkwGvse4ByIWTAf7/irSKAbSFkwG4o+65f8wAhn//geeBhX/MANt//4LIggGBvX8BgP+CtIIBgal/AgIEALnszACG7P/c59yF7MwA1OwB54WSAcv/isiKAfSFkgGesewB3IWSAYX/irSKAZCFkgHEo+y57MwAhuz/3OfchezMANTsAeeFkgHL/4rIigH0hZIBnrHsAdyFkgGF/4q0igGQhZIBxKPsuezMAIbs/9zn3IXszADU7AHnhZIBy/+KyIoB9IWSAZ6x7AHchZIBhf+KtIoBkIWSAcSj7Ll/zACGf/+B54GFf8wA23//gsiCAYG9fwGA/4K0ggGBqX8CAgQAuerMAIbq/9zn3IXqzADU6gHphZEBnP+KyIoCiaiFkQHoseoBmYWRAff/irOKAdSFkQHQo+q56swAhur/3OfcherMANTqAemFkQGc/4rIigKJqIWRAeix6gGZhZEB9/+Ks4oB1IWRAdCj6rnqzACG6v/c59yF6swA1OoB6YWRAZz/isiKAomohZEB6LHqAZmFkQH3/4qzigHUhZEB0KPquX/MAIZ//4HngYV/zADbf/+CyYK+fwGB/4KzggGAqX8CAgQAuejMAIbo/9zn3IXozADV6IaQ/4rJigGGhZAB3bHoAa6FkAG4/4qzigGGhZAB3aPouejMAIbo/9zn3IXozADV6IaQ/4rJigGGhZAB3bHoAa6FkAG4/4qzigGGhZAB3aPouejMAIbo/9zn3IXozADV6IaQ/4rJigGGhZAB3bHoAa6FkAG4/4qzigGGhZAB3aPouX/MAIZ//4HngYV/zADbf/+CyYIBgL1/AYH/grOCAYCpfwICBAC558wAhuf/3OfchefMANXnAZOFjwGD/4rIigG+hY8B0bHnAcOFjwH1/4qyigKEk4WPAeaj57nnzACG5//c59yF58wA1ecBk4WPAYP/isiKAb6FjwHRsecBw4WPAfX/irKKAoSThY8B5qPnuefMAIbn/9zn3IXnzADV5wGThY8Bg/+KyIoBvoWPAdGx5wHDhY8B9f+KsooChJOFjwHmo+e5f8wAhn//geeBhX/MANt//4LJggGAvX8BgP+Cs4KqfwICBAC55cwAhuX/3OfcheXMANXlAZiFjgH2/4rIigHzhY4BxbHlAdaFjgH0/4qyigHfhY4BoaTlueXMAIbl/9zn3IXlzADV5QGYhY4B9v+KyIoB84WOAcWx5QHWhY4B9P+KsooB34WOAaGk5bnlzACG5f/c59yF5cwA1eUBmIWOAfb/isiKAfOFjgHFseUB1oWOAfT/irKKAd+FjgGhpOW5f8wAhn//geeBhX/MANt/AYH/gsiCAYC+f/+CsoIBgap/AgIEALnjzACG4//c59yF48wA1eMBnoWMAeH/isiKAZaFjAG6suMBloWMAfD/irGKAa2FjAGxpOO548wAhuP/3OfchePMANXjAZ6FjAHh/4rIigGWhYwBurLjAZaFjAHw/4qxigGthYwBsaTjuePMAIbj/9zn3IXjzADV4wGehYwB4f+KyIoBloWMAbqy4wGWhYwB8P+KsYoBrYWMAbGk47l/zACGf/+B54GFf8wA238Bgf+CyIIBgb5/AYH/grGCAYGqfwICBAC54cwAhuH/3OfcheHMANXhAaaFiwHK/4rIigGshYsBsLLhAauFiwGy/4qxigH+hYsBwKThueHMAIbh/9zn3IXhzADV4QGmhYsByv+KyIoBrIWLAbCy4QGrhYsBsv+KsYoB/oWLAcCk4bnhzACG4f/c59yF4cwA1eEBpoWLAcr/isiKAayFiwGwsuEBq4WLAbL/irGKAf6FiwHApOG5f8wAhn//geeBhX/MANt/AYH/gsiCAYG+fwGB/4KxggGAqn8CAgQAud/MAIbf/9zn3IXfzADV3wGrhYoBtv+KyIoBu4WKAamy3wG/hYoB6P+KsYoBnoWKAc+k37nfzACG3//c59yF38wA1d8Bq4WKAbb/isiKAbuFigGpst8Bv4WKAej/irGKAZ6FigHPpN+538wAht//3Ofchd/MANXfAauFigG2/4rIigG7hYoBqbLfAb+FigHo/4qxigGehYoBz6TfuX/MAIZ//4HngYV/zADbfwGB/4LIggGBvn8BgP+CsYIBgKp/AgIEALnezACG3v/c59yF3swA1d4BtIWJAZj/isiKAcuFiQGist4B0oWJAdn/irCKAoaYhYkB3KTeud7MAIbe/9zn3IXezADV3gG0hYkBmP+KyIoBy4WJAaKy3gHShYkB2f+KsIoChpiFiQHcpN653swAht7/3Ofchd7MANXeAbSFiQGY/4rIigHLhYkBorLeAdKFiQHZ/4qwigKGmIWJAdyk3rl/zACGf/+B54GFf8wA238Bgf+CyIIBgb9//4Kxgqt/AgIEALnczAD/3PLczADV3AG+hYgB7/+KyIoB3IWIAZuz3AGThYgB6v+Kr4oB4YWIAZql3LnczAD/3PLczADV3AG+hYgB7/+KyIoB3IWIAZuz3AGThYgB6v+Kr4oB4YWIAZql3LnczAD/3PLczADV3AG+hYgB7/+KyIoB3IWIAZuz3AGThYgB6v+Kr4oB4YWIAZql3Ll/zACGf/+B54GFf8wA238BgP+CyIIBgb9/AYH/gq+CAYGrfwICBAC52swAhtr/3OfchdrMANXaAciFhwGs/4rIigHshYcBlbPaAaeFhwGs/4qvigGrhYcBq6XaudrMAIba/9zn3IXazADV2gHIhYcBrP+KyIoB7IWHAZWz2gGnhYcBrP+Kr4oBq4WHAaul2rnazACG2v/c59yF2swA1doByIWHAaz/isiKAeyFhwGVs9oBp4WHAaz/iq+KAauFhwGrpdq5f8wAhn//geeBhX/MANt/AYD/gsiCAYG/fwGB/4KvggGBq38CAgQAudnMAIbZ/9zn3IXZzADV2QHUhYYBu/+KyIoB+IWGAY+z2QG7hYYB3/+Kr4oB64WGAbyl2bnZzACG2f/c59yF2cwA1dkB1IWGAbv/isiKAfiFhgGPs9kBu4WGAd//iq+KAeuFhgG8pdm52cwAhtn/3OfchdnMANXZAdSFhgG7/4rIigH4hYYBj7PZAbuFhgHf/4qvigHrhYYBvKXZuX/MAIZ//4HngYV/zADcf/+CyIIBgb9/AYD/gq+CAYCrfwICBAC518wAhtf/3OfchdfMANbXAY6FhQH6/4rHigH9hYUBjbPXAc2FhQHR/4qvigH0hYUBzaXXudfMAIbX/9zn3IXXzADW1wGOhYUB+v+Kx4oB/YWFAY2z1wHNhYUB0f+Kr4oB9IWFAc2l17nXzACG1//c59yF18wA1tcBjoWFAfr/iseKAf2FhQGNs9cBzYWFAdH/iq+KAfSFhQHNpde5f8wAhn//geeBhX/MANx/AYH/gseCAYHAf/+Cr4KsfwICBAC51cwAhtX/3OfchdXMANbVAZyFhAHN/4rHigGDhYQBiLTVAZCFhAHs/4qtigH6hYQBjabVudXMAIbV/9zn3IXVzADW1QGchYQBzf+Kx4oBg4WEAYi01QGQhYQB7P+KrYoB+oWEAY2m1bnVzACG1f/c59yF1cwA1tUBnIWEAc3/iseKAYOFhAGItNUBkIWEAez/iq2KAfqFhAGNptW5f8wAhn//geeBhX/MANx/AYH/gsiCwH8Bgf+CrYIBgax/AgIEALnUzACG1P/c59yF1MwA1tQBqoWDAZ7/iseKhoMBh7TUAaOFgwGw/4qtigHDhYMBnabUudTMAIbU/9zn3IXUzADW1AGqhYMBnv+Kx4qGgwGHtNQBo4WDAbD/iq2KAcOFgwGdptS51MwAhtT/3OfchdTMANbUAaqFgwGe/4rHioaDAYe01AGjhYMBsP+KrYoBw4WDAZ2m1Ll/zACGf/+B54GFf8wA3H8Bgf+CyILAfwGB/4KtggGBrH8CAgQAudLMAIbS/9zn3IXSzADW0gG4hYIB3P+Kx4oBh4WCAYS00gG1hYIB6v+KrYoBiIWCAa+m0rnSzACG0v/c59yF0swA1tIBuIWCAdz/iseKAYeFggGEtNIBtYWCAer/iq2KAYiFggGvptK50swAhtL/3OfchdLMANbSAbiFggHc/4rHigGHhYIBhLTSAbWFggHq/4qtigGIhYIBr6bSuX/MAIZ//4HngYV/zADcfwGA/4LIgsB/AYD/gq2CAYGsfwICBAC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC50MwAhtD/3OfchdDMANbQAciFgQHl/4rIioaBtNABxoWBAeX/iq2KAZeFgQHBptC5f8wAhn//geeBhX/MAN1//4LIgsF//4KtggGArH8CAgQAuc/MAIbP/9zn3IXPzADXzwGI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hcAB0debAobGicACjcPpigOFqtuJwAHuwpu5m8wAhpv/3OfchZvMAOObAcqFwAHt/4qyigGrhcAB0debAobGicACjcPpigOFqtuJwAHuwpu5m8wAhpv/3OfchZvMAOObAcqFwAHt/4qyigGrhcAB0debAobGicACjcPpigOFqtuJwAHuwpu5f8wAhn//geeBhX/MAON/hn4Bgf+CsoIBgYZ+2H+KfgKAgeqCAoF/in7CfwICBAC5m8wAhpv/3OfchZvMAOObAemFwAGj/4qyigGThcAB9NibApPuisADh62E5IoD95azisABgMObuZvMAIab/9zn3IWbzADjmwHphcABo/+KsooBk4XAAfTYmwKT7orAA4ethOSKA/eWs4rAAYDDm7mbzACGm//c59yFm8wA45sB6YXAAaP/irKKAZOFwAH02JsCk+6KwAOHrYTkigP3lrOKwAGAw5u5f8wAhn//geeBhX/MAON/hn4Bgf+CsoIBgIZ+2X+LfgKAgeWCA4GBf4p+xH8CAgQAuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuZvMAIab/9zn3IWbzADjmwGFhcABsf+KsYoB3obAAY3amwKEworAA5eB4d+KBIW9v9CKwALHhsSbuX/MAIZ//4HngYV/zADkf4V+AYD/grGCAYGGftx/i34Df4GB4IICgYCMfsV/AgIEALmazACGmv/c59yFmswA45oBkoXAAueD/4qwigHqhcAB4NyaApHsjMAD447i2YoE9rHOh4zAAveTxZq5mswAhpr/3OfchZrMAOOaAZKFwALng/+KsIoB6oXAAeDcmgKR7IzAA+OO4tmKBPaxzoeMwAL3k8WauZrMAIaa/9zn3IWazADjmgGShcAC54P/irCKAeqFwAHg3JoCkeyMwAPjjuLZigT2sc6HjMAC95PFmrl/zACGf/+B54GFf8wA5H+Gfv+CsYIBgIZ+3X+NfgN/gYHZggSBgYB/jX7GfwICBAC5mswAhpr/3OfchZrMAOSaAdmFvwG9/4qvigL874W/AYjemgKL2I6/A+S3/NGKBO64/PKOvwLljseauZrM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xf/c59yFxcwA/8X/xf/F/8XCxbl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5x8wAhsf/3OfchcfMAP/H/8f/x//Hwse5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIucjMAIbI/9zn3IXIzAD/yP/I/8j/yMLIuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnKzACGyv/c59yFyswA/8r/yv/K/8rCyrnKzACGyv/c59yFyswA/8r/yv/K/8rCyrnKzACGyv/c59yFyswA/8r/yv/K/8rCyrl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5y8wAhsv/3OfchcvMAP/L/8v/y//Lwsu5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuc3MAIbN/9zn3IXNzAD/zf/N/83/zcLNuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnPzACGz//c59yFz8wA/8//z//P/8/Cz7nPzACGz//c59yFz8wA/8//z//P/8/Cz7nPzACGz//c59yFz8wA/8//z//P/8/Cz7l/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC50MwAhtD/3OfchdDMAP/Q/9D/0P/QwtC5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSudLMAIbS/9zn3IXSzAD/0v/S/9L/0sLSuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnUzACG1P/c59yF1MwA/9T/1P/U/9TC1LnUzACG1P/c59yF1MwA/9T/1P/U/9TC1LnUzACG1P/c59yF1MwA/9T/1P/U/9TC1Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW51cwAhtX/3OfchdXMAP/V/9X/1f/VwtW5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAudfMAIbX/9zn3IXXzAD/1//X/9f/18LXudfMAIbX/9zn3IXXzAD/1//X/9f/18LXudfMAIbX/9zn3IXXzAD/1//X/9f/18LXuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bnZzACG2f/c59yF2cwA/9n/2f/Z/9nC2bl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC528wAhtv/3OfchdvMAP/b/9v/2//bwtu528wAhtv/3OfchdvMAP/b/9v/2//bwtu528wAhtv/3OfchdvMAP/b/9v/2//bwtu5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAud3MAIbd/9zn3IXdzAD/3f/d/93/3cLdud3MAIbd/9zn3IXdzAD/3f/d/93/3cLdud3MAIbd/9zn3IXdzAD/3f/d/93/3cLduX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnezACG3v/c59yF3swA/97/3v/e/97C3rnezACG3v/c59yF3swA/97/3v/e/97C3rnezACG3v/c59yF3swA/97/3v/e/97C3rl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC54MwAhuD/3OfcheDMAP/g/+D/4P/gwuC5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiueLMAIbi/9zn3IXizAD/4v/i/+L/4sLiuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnkzACG5P/c59yF5MwA/+T/5P/k/+TC5LnkzACG5P/c59yF5MwA/+T/5P/k/+TC5LnkzACG5P/c59yF5MwA/+T/5P/k/+TC5Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC55swAhub/3OfchebMAP/m/+b/5v/mwua55swAhub/3OfchebMAP/m/+b/5v/mwua55swAhub/3OfchebMAP/m/+b/5v/mwua5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAuejMAIbo/9zn3IXozAD/6P/o/+j/6MLouejMAIbo/9zn3IXozAD/6P/o/+j/6MLouejMAIbo/9zn3IXozAD/6P/o/+j/6MLouX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnqzACG6v/c59yF6swA/+r/6v/q/+rC6rnqzACG6v/c59yF6swA/+r/6v/q/+rC6rnqzACG6v/c59yF6swA/+r/6v/q/+rC6rl/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC57MwAhuz/3OfchezMAP/s/+z/7P/swuy57MwAhuz/3OfchezMAP/s/+z/7P/swuy57MwAhuz/3OfchezMAP/s/+z/7P/swuy5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuue7MAIbu/9zn3IXuzAD/7v/u/+7/7sLuuX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALnwzACG8P/c59yF8MwA//D/8P/w//DC8LnwzACG8P/c59yF8MwA//D/8P/w//DC8LnwzACG8P/c59yF8MwA//D/8P/w//DC8Ll/zACGf/+B54GFf8wA/3//f/9//3/CfwICBAC58swAhvL/3OfchfLMAP/y//L/8v/ywvK58swAhvL/3OfchfLMAP/y//L/8v/ywvK58swAhvL/3OfchfLMAP/y//L/8v/ywvK5f8wAhn//geeBhX/MAP9//3//f/9/wn8CAgQAufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0ufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0ufTMAIb0/9zn3IX0zAD/9P/0//T/9ML0uX/MAIZ//4HngYV/zAD/f/9//3//f8J/AgIEALn2zACG9v/c59yF9swA//b/9v/2//bC9rn2zACG9v/c59yF9swA//b/9v/2//bC9rn2zACG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p8en/6f/p/+n/6f/p5ynAaKJAAG+/5qOmgGGiQABrf+nx6f/gP+A/4D/gP+AnIABf4kAAYH/go6CAYGJAAF//4DHgAICBAD/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/qP+o/6j/qP+om6gCmL6IAALyl/+ajpoCioiIAALTmP+oxqj/gP+A/4D/gP+AnIABe4gAAX7/gpCCAX2IAAF7/4DHgAICBAD/qv+q/6r/qv+qm6oBqIkAAaf/mpCaAf+JAAGh/6rGqv+q/6r/qv+q/6qbqgGoiQABp/+akJoB/4kAAaH/qsaq/6r/qv+q/6r/qpuqAaiJAAGn/5qQmgH/iQABof+qxqr/gP+A/4D/gP+Am4ABf4kAAYH/gpCCAYCJAAF//4DGgAICBAD/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/q/+r/6v/q/+rmqsCmqyIAAKbkf+akJoCh+mIAAKBlf+rxav/gP+A/4D/gP+Am4ABe4gAAX7/gpKCAXyIAAF6/4DGgAICBAD/rP+s/6z/rP+smqwBp4kAAYz/mpKaAYOJAAGD/6zFrP+s/6z/rP+s/6yarAGniQABjP+akpoBg4kAAYP/rMWs/6z/rP+s/6z/rJqsAaeJAAGM/5qSmgGDiQABg/+sxaz/gP+A/4D/gP+AmoABf4kAAYH/gpKCAYGJAAF//4DFgAICBAD/rv+u/67/rv+uma4CnJiIAAKujP+akpoCi8KJAAGL/67Erv+u/67/rv+u/66ZrgKcmIgAAq6M/5qSmgKLwokAAYv/rsSu/67/rv+u/67/rpmuApyYiAACroz/mpKaAovCiQABi/+uxK7/gP+A/4D/gP+AmoABe4gAAX3/gpSCAX2JAP+AxYACAgQA/6//r/+v/6//r5mvAaeJAAGK/5qUmgGQiQABu/+vxK//r/+v/6//r/+vma8Bp4kAAYr/mpSaAZCJAAG7/6/Er/+v/6//r/+v/6+ZrwGniQABiv+alJoBkIkAAbv/r8Sv/4D/gP+A/4D/gJmAAX+JAAGB/4KUggGBiQABfv+AxIACAgQA/7D/sP+w/7D/sJiwAp2FiAACwoz/mpSaAo+uiQAB+v+ww7D/sP+w/7D/sP+wmLACnYWIAALCjP+alJoCj66JAAH6/7DDsP+w/7D/sP+w/7CYsAKdhYgAAsKM/5qUmgKProkAAfr/sMOw/4D/gP+A/4D/gJmAAXuIAAF9/4KWggF+iQABf/+Aw4ACAgQA/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/7H/sf+x/7H/sZixAaSJAAGM/5qWmgGtiQACp6b/scKx/4D/gP+A/4D/gJiAAX+JAAGB/4KWggGBiQABff+Aw4ACAgQA/7P/s/+z/7P/s5ezAZyJAALVjf+alpoCl66JAAHU/7PCs/+z/7P/s/+z/7OXswGciQAC1Y3/mpaaApeuiQAB1P+zwrP/s/+z/7P/s/+zl7MBnIkAAtWN/5qWmgKXrokAAdT/s8Kz/4D/gP+A/4D/gJiAiQABff+CmIIBf4kAAX//gMKAAgIEAP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+0/7T/tP+0/7SXtAGQiQABj/+amJoB0IkAArWk/7TBtP+A/4D/gP+A/4CXgAF/iQABgf+CmIIBgYkAAXz/gMKAAgIEAP+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+1/7X/tf+1/7WWtQGXiQAC6Y7/mpmaAY+JAAGu/7XBtf+A/4D/gP+A/4CXgIkAAX3/gpqCAYCJAAF//4DBgAICBAD/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/t/+3/7f/t/+3lrcB8YkAAZT/mpqaAvSbiQABnf+3wLf/gP+A/4D/gP+AloABfokAAYH/gpqCAoF6iQD/gMGAAgIEAP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+4/7j/uP+4/7iVuAGQiQACrpH/mpuaAdiJAAH2/7jAuP+A/4D/gP+A/4CWgIkAAX7/gpyCAYCJAAF+/4DAgAICBAD/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/uv+6/7r/uv+6lboByYkAAaf/mpyaAoibiQABhP+6v7r/gP+A/4D/gP+AlYABfokAAYH/gp2CAX2JAP+AwIACAgQA/7v/u/+7/7v/u5S7AYiJAAKIlf+anZoBj4kAArCv/7u+u/+7/7v/u/+7/7uUuwGIiQACiJX/mp2aAY+JAAKwr/+7vrv/u/+7/7v/u/+7lLsBiIkAAoiV/5qdmgGPiQACsK//u767/4D/gP+A/4D/gJWAiQABf/+CnoIBgYkAAX3/gL+AAgIEAP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+8/7z/vP+8/7yUvAGOiQABvf+anpoCkcyJAAHd/7y+vP+A/4D/gP+A/4CUgAF+iQABgf+Cn4IBfokAAX//gL6AAgIEAP+9/73/vf+9/72TvQHviQACwpj/mp+aAbyJAAKOqf+9vb3/vf+9/73/vf+9k70B74kAAsKY/5qfmgG8iQACjqn/vb29/73/vf+9/73/vZO9Ae+JAALCmP+an5oBvIkAAo+p/729vf+A/4D/gP+A/4CTgAF/iQABf/+CoIIBgYkAAXz/gL6AAgIEAP+//7//v/+//7+SvwKwj4kAAc//mqCaApnpiQABoP+/vb//v/+//7//v/+/kr8CsI+JAAHP/5qgmgKZ6YkAAaD/v72//7//v/+//7//v5K/ArCPiQABz/+aoJoCmemJAAGg/7+9v/+A/4D/gP+A/4CTgAF9iQABgf+CoYIBf4kAAX//gL2AAgIEAP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP/A/8D/wP/A/8CSwAHHiQABg/+aopoC65uJAAGZ/8C8wP+A/4D/gP+A/4CSgAF/iQABgP+CooICgXqJAP+AvYACAgQA/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/8H/wf/B/8H/wZHBAquRiQAB6f+ao5oB2okAAbb/wbzB/4D/gP+A/4D/gJKAAXuJAAGB/4KjggGAiQABfv+AvIACAgQA/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/8P/w//D/8P/w5HDAZ+JAAG//5qkmgKK6YkAAfb/w7vD/4D/gP+A/4D/gJGAAX+JAAGA/4KlggF9iQABf/+Au4ACAgQA/8T/xP/E/8T/xJDEAaCJAAKbg/+apZoBoYkAAt2y/8S6xP/E/8T/xP/E/8SQxAGgiQACm4P/mqWaAaGJAALdsv/EusT/xP/E/8T/xP/EkMQBoIkAApuD/5qlmgGhiQAC3bL/xLrE/4D/gP+A/4D/gJGAiQABfP+CpoIBgYkAAXz/gLuAAgIEAP/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf/F/8X/xf/F/8WQxQHliQABg/+appoClrOJAAGq/8W6xf+A/4D/gP+A/4CQgAF+iQABgf+Cp4IBf4kAAX//gLqAAgIEAP/H/8f/x//H/8ePxwGMiQACkY7/mqeaAdqKAAGg/8e5xwTHx8fGlMcBxo7HAcaUxwHGlccBxoXHAcanxwHGkMcBxoTHAcaMxwXGx8fHxoTHAcaJxwHGnccBxqzHAcaPxwHGh8cBxqTHAcaNx4LGjccBxo/HAcaExwHGhscBxofHBMbGx8aPxwHGlscBxrbHAcbIxwHGk8cBxpfHAcaMxwHGl8cBxo7HAsaMiQACkY7/mqeaAdqKAAGghccBxobHBcbHx8fGnMcBxonHAcaSxwHGtMcBxoTHgsaJxwHGpccDxsfH/8f/x//H/8f/x4/HAYyJAAKRjv+ap5oB2ooAAaD/x7nH/4D/gP+A/4D/gJCAiQABfv+CqIIBgYoA/4C6gAICBAD/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/yP/I/8j/yP/IjsgCuraJAAGl/5qpmgG/iQABvP/Iucj/gP+A/4D/gP+Aj4ABfYkAAYH/gqmCAYCJAAF+/4C5gAICBAD/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/yf/J/8n/yf/JjskB44kAgpb/mqmaAoabiQAB/v/JuMn/gP+A/4D/gP+AjoABf4kAAX//gquCAX2JAAF//4C4gAICBAD/yv/K/8r/yv/KjcoCs+WJAAHJ/5qrmgGdiQACpbT/yrfK/8r/yv/K/8r/yo3KArPliQAByf+aq5oBnYkAAqW0/8q3yv/K/8r/yv/K/8qNygKz5YkAAcn/mquaAZ2JAAKltP/Kt8r/gP+A/4D/gP+AjoABe4kAAYH/gquCAYGJAAF8/4C4gAICBAD/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/zP/M/8z/zP/MjcwBqIkAAYz/mqyaApaliQABlv/Mt8z/gP+A/4D/gP+AjYABf4kAAYD/gq2CAX+JAAF//4C3gAICBAD/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/zf/N/83/zf/NjM0BpIkAApv2/5qtmgHaigABj//Nts3/gP+A/4D/gP+AjYCJAAJ7gf+CrYIBgYoA/4C3gAICBAD/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/zv/O/87/zv/OjM4BzIkAAen/mq+aAb+JAAKuv//Otc7/gP+A/4D/gP+AjIABfokAAYD/gq+CAYCJAAF9/4C2gAICBAD/z//P/8//z//Pi88BhokAAoiM/5qvmgKJ/IkAAcb/z7XP/8//z//P/8//z4vPAYaJAAKIjP+ar5oCifyJAAHG/8+1z//P/8//z//P/8+LzwGGiQACiIz/mq+aAon8iQABxv/Ptc//gP+A/4D/gP+AjICJAAF+/4KxggF9iQABf/+AtYACAgQA/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/9D/0P/Q/9D/0IrQAr75iQABo/+asZoBsYoAAZT/0LTQ/4D/gP+A/4D/gIuAAXyJAAGB/4KxggGBigD/gLWAAgIEAP/S/9L/0v/S/9KK0gG7iQACrpb/mrGaApmDiQCCxf/Ss9L/0v/S/9L/0v/SitIBu4kAAq6W/5qxmgKZg4kAgsX/0rPS/9L/0v/S/9L/0orSAbuJAAKulv+asZoCmYOJAILF/9Kz0v+A/4D/gP+A/4CKgAF/iQABf/+Cs4IBgIkAAX3/gLSAAgIEAP/T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0//T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0//T/9P/0//T/9OJ0wGrigAB1/+as5oC/JuJAAHF/9Oz0/+A/4D/gP+A/4CKgIoAAYH/grOCAoF8iQABf/+As4ACAgQA/9T/1P/U/9T/1InUAcuJAAG2/5q1mgGPigABlP/UstT/1P/U/9T/1P/UidQBy4kAAbb/mrWaAY+KAAGU/9Sy1P/U/9T/1P/U/9SJ1AHLiQABtv+atZoBj4oAAZT/1LLU/4D/gP+A/4D/gImAAX6JAAGA/4K1ggGBigD/gLOAAgIEAP/V/9X/1f/V/9WI1QGCiQACm4b/mrWaApSliQACtcX/1bHV/9X/1f/V/9X/1YjVAYKJAAKbhv+atZoClKWJAAK1xf/VsdX/1f/V/9X/1f/ViNUBgokAApuG/5q1mgKUpYkAArXF/9Wx1f+A/4D/gP+A/4CJgIkAAX3/greCAX+JAAF9/4CygAICBAD/1v/W/9b/1v/Wh9YCt7yJAAGZ/5q3mgLjm4kAAcD/1rHW/9b/1v/W/9b/1ofWAre8iQABmf+at5oC45uJAAHA/9ax1v/W/9b/1v/W/9aH1gK3vIkAAZn/mreaAuObiQABwP/Wsdb/gP+A/4D/gP+AiIABe4kAAYH/greCAoF6iQABf/+AsYACAgQA/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/9j/2P/Y/9j/2IfYAeaJAAKglv+auJoBhIoAAZL/2LDY/4D/gP+A/4D/gIeAAX6JAAF//4K5ggGBigD/gLGAAgIEAP/Z/9n/2f/Z/9mG2QGtigAB2f+auZoClL2JAAKVxP/Zr9n/2f/Z/9n/2f/ZhtkBrYoAAdn/mrmaApS9iQAClcT/2a/Z/9n/2f/Z/9n/2YbZAa2KAAHZ/5q5mgKUvYkAApXE/9mv2f+A/4D/gP+A/4CGgAF/igABgf+CuoIBf4kAAX3/gLCAAgIEAP/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v/a/9r/2v/a/9qF2gHIigABzP+au5oC9JuJAAGY/9qv2v+A/4D/gP+A/4CFgAF/igABgP+Cu4ICgXyJAAF//4CvgAICBAD/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/2//b/9v/2//bhNsB0ooAAtWN/5q8mgGXigAByf/brtv/gP+A/4D/gP+AhIABf4oAAX7/gr2CAYGKAAF//4CugAICBAD/3P/c/9z/3P/cBNzc3JyLAAHQ/5q9mgKX94oAAZj/3K3c/9z/3P/c/9z/3ATc3NyciwAB0P+avZoCl/eKAAGY/9yt3P/c/9z/3P/c/9wE3NzcnIsAAdD/mr2aApf3igABmP/crdz/gP+A/4D/gP+AhICLAAGB/4K+ggF/igD/gK6AAgIEAP/d/93/3f/d/90E3d3G+ooAAYH/mr+aAoGuiQACrcv/3azd/93/3f/d/93/3QTd3cb6igABgf+av5oCga6JAAKty//drN3/3f/d/93/3f/dBN3dxvqKAAGB/5q/mgKBrokAAq3L/92s3f+A/4D/gP+A/4AEgICAfIoAAYH/gsCCAX2JAAF9/4CtgAICBAD/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/3v/e/97/3v/eA97N7YoAAvyX/5rAmgG3igAB///erN7/gP+A/4D/gP+AA4CAfYoAAX//gsGCAYGKAAF+/4CsgAICBAAD4ODfh+AM3+Df4ODf4ODg3+DfhuBe3+Df4ODf4ODf4ODf4N/f3+Df4N/f4ODf3+Dg4N/g39/g4N/f4N/f4ODf4ODg3+Df4ODg39/f4ODf4N/g3+Df3+Df4ODf3+Df4N/g4ODf3+Df3+Dg4N/g4ODf3+Dg34XgAd+H4AHfh+AB34TgIN/f3+Df4ODg39/g3+Dg3+Df4ODf3+Dg39/g4ODf4N/fhuAX3+Df4N/g3+Dg39/g4N/f4N/g4ODf39+E4ATf4ODfheAN3+Df3+Df3+Df4ODf34TgGt/g39/g4N/g4N/g3+Df4ODg3+Df4ODf4N/fhOAG39/f4ODfhOAB34ngBd/f4ODfi+AF39/f4N+F4ILfheAY3+Dg4N/g4N/g4ODf4N/f3+Dg39/f4ODfhOCE34Tggt+E4ATf4ODfhOAF39/f4N+I4AHfhOAH3+Dg4N/g34bgiN8l4ODf4N/g3+Dg4N/f4ODg3+Df3+Dg39/g4N/g4N/g4N/g3+Dg34Tght+D4IXfCODg3+Dg4N/fhOAF39/g39+F4Arf4ODf3+Df4ODghN8b4N/f4ODf4ODf3+Dg39/f4N/g4ODf4ODg3+DfhuAE39/g34bgBd/f4ODfhOAN3+Df4ODf39/g3+Df4ITfEeDg3+Dg39/g4N/g4ODf4N/fheAm39/g3+Df3+Df3+Dg4N/g39/g39/f4ODf3+Dg4N/g4ODf3+Dg4N+E4ALPqIoAAsyH/5rCmgHMigAGs9/f4ODfhOAW3+Dg3+Df4N/f4N/f3+Dg4N/g39/g34XgB9/f3+Dg39+F4APf4N+F4Aff3+Df4N/ghN+C4ITfBODf39+E4B7f3+Dg39/f4N/f4N/g4ODf4N/g4ODf39/g4ODf39+E4ILfhOAF3+Dg4N+E4Cjf39/g3+Dg3+Df39/g3+Dg4N/g4N/g3+Dg4N/g4N/g4ODf4N/f4ODfC9/g4N/f4N/f3+Dght8j4N/f4ODg3+Dg3+Df4ODf4N/f4ODf3+Dg39/f4ODg3+Df4OCK3wjg39/f4N/f4ITfA+Df4ITfEODg39/f4N/g39/g39/f4N+E4Ajf39/g3+Dg4IXfJODf3+Df39/g39/g39/g4N/g39/g4N/g39/g39/g4N/f4N/g34TgBd/f3+Dghd+D4ITfN+Dg4N/g39/g3+Df4N/f3+Df4N/f3+Df4N/f3+Df39/g4N/g3+Dg4N/f4N/f4N/g4ODf4N/f3+CE3xDg39/f4ODf3+Df3+Df39/gid8N4N/g39/g3+Df39/g4IffCeDf4ODg39/g4I7fBeDf4N/fhOAI3+Df4ODf4OCI3xbg3+Dg4N/g3+Df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z//PiM//z//P/8//z//P/8//z//PiM//gP+A/4D/gP+A/4D/gP+AiIACAgQA/83/zf/N/83/zf/N/83/zYjN/83/zf/N/83/zf/N/83/zYjN/83/zf/N/83/zf/N/83/zYjN/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP/L/8v/y//L/8v/y//L/8uIy//L/8v/y//L/8v/y//L/8uIy//L/8v/y//L/8v/y//L/8uIy/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/yf/J/8n/yf/J/8n/yf/JiMn/yf/J/8n/yf/J/8n/yf/JiMn/yf/J/8n/yf/J/8n/yf/JiMn/gP+A/4D/gP+A/4D/gP+AiIACAgQA/8f/x//H/8f/x//H/8f/x4jH/8f/x//H/8f/x//H/8f/x4jH/8f/x//H/8f/x//H/8f/x4jH/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP/F/8X/xf/F/8X/xf/F/8WIxf/F/8X/xf/F/8X/xf/F/8WIxf/F/8X/xf/F/8X/xf/F/8WIxf+A/4D/gP+A/4D/gP+A/4CIgAICBAD/w//D/8P/w//D/8P/w//DiMP/w//D/8P/w//D/8P/w//DiMP/w//D/8P/w//D/8P/w//DiMP/gP+A/4D/gP+A/4D/gP+AiIACAgQA/8H/wf/B/8H/wf/B/8H/wYjB/8H/wf/B/8H/wf/B/8H/wYjB/8H/wf/B/8H/wf/B/8H/wYjB/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+//7//v/+//7//v/+//7+Iv/+//7//v/+//7//v/+//7+Iv/+//7//v/+//7//v/+//7+Iv/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/vf+9/73/vf+9/73/vf+9iL3/vf+9/73/vf+9/73/vf+9iL3/vf+9/73/vf+9/73/vf+9iL3/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7v/u/+7/7v/u/+7/7v/u4i7/7v/u/+7/7v/u/+7/7v/u4i7/7v/u/+7/7v/u/+7/7v/u4i7/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+6/7r/uv+6/7r/uv+6/7qIuv+6/7r/uv+6/7r/uv+6/7qIuv+6/7r/uv+6/7r/uv+6/7qIuv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/uP+4/7j/uP+4/7j/uP+4iLj/uP+4/7j/uP+4/7j/uP+4iLj/uP+4/7j/uP+4/7j/uP+4iLj/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7b/tv+2/7b/tv+2/7b/toi2/7b/tv+2/7b/tv+2/7b/toi2/7b/tv+2/7b/tv+2/7b/toi2/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+0/7T/tP+0/7T/tP+0/7SItP+0/7T/tP+0/7T/tP+0/7SItP+0/7T/tP+0/7T/tP+0/7SItP+A/4D/gP+A/4D/gP+A/4CIgAICBAD/s/+z/7P/s/+z/7P/s/+ziLP/s/+z/7P/s/+z/7P/s/+ziLP/s/+z/7P/s/+z/7P/s/+ziLP/gP+A/4D/gP+A/4D/gP+AiIACAgQA/7H/sf+x/7H/sf+x/7H/sYix/7H/sf+x/7H/sf+x/7H/sYix/7H/sf+x/7H/sf+x/7H/sYix/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+v/6//r/+v/6//r/+v/6+Ir/+v/6//r/+v/6//r/+v/6+Ir/+v/6//r/+v/6//r/+v/6+Ir/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/rv+u/67/rv+u/67/rv+uiK7/rv+u/67/rv+u/67/rv+uiK7/rv+u/67/rv+u/67/rv+uiK7/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6z/rP+s/6z/rP+s/6z/rIis/6z/rP+s/6z/rP+s/6z/rIis/6z/rP+s/6z/rP+s/6z/rIis/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+q/6r/qv+q/6r/qv+q/6qIqv+q/6r/qv+q/6r/qv+q/6qIqv+q/6r/qv+q/6r/qv+q/6qIqv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/qf+p/6n/qf+p/6n/qf+piKn/qf+p/6n/qf+p/6n/qf+piKn/qf+p/6n/qf+p/6n/qf+piKn/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6f/p/+n/6f/p/+n/6f/p4in/6f/p/+n/6f/p/+n/6f/p4in/6f/p/+n/6f/p/+n/6f/p4in/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+m/6b/pv+m/6b/pv+m/6aIpv+m/6b/pv+m/6b/pv+m/6aIpv+m/6b/pv+m/6b/pv+m/6aIpv+A/4D/gP+A/4D/gP+A/4CIgAICBAD/pf+l/6X/pf+l/6X/pf+liKX/pf+l/6X/pf+l/6X/pf+liKX/pf+l/6X/pf+l/6X/pf+liKX/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6P/o/+j/6P/o/+j/6P/o4ij/6P/o/+j/6P/o/+j/6P/o4ij/6P/o/+j/6P/o/+j/6P/o4ij/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+i/6L/ov+i/6L/ov+i/6KIov+i/6L/ov+i/6L/ov+i/6KIov+i/6L/ov+i/6L/ov+i/6KIov+A/4D/gP+A/4D/gP+A/4CIgAICBAD/of+h/6H/of+h/6H/of+hiKH/of+h/6H/of+h/6H/of+hiKH/of+h/6H/of+h/6H/of+hiKH/gP+A/4D/gP+A/4D/gP+AiIACAgQA/6D/oP+g/6D/oP+g/6D/oIig/6D/oP+g/6D/oP+g/6D/oIig/6D/oP+g/6D/oP+g/6D/oIig/4D/gP+A/4D/gP+A/4D/gIiAAgIEAAKfnoefBJ6fn56EnwGeiZ8Nnp+fnp+fnp+en56fnoafBJ6fn56EnwGehp8Enp+enoefB56enp+fn56HnwSen5+eiJ+CnoufAZ6OnwGehJ8BnoWfAZ6Hnwien5+fnp+fnpGfAZ6PnwWenp+enoafAZ6MnwGehJ8BnoafAZ6In4KekJ+CnpafAZ6MnwWen5+fnoSfAZ6UnwGeip8BnoSfg56UnwGejJ8BnoafB56en56fn56GnwGehZ8Hnp+fnp+fno+fAZ6KnwGehJ8BnomfAZ6FnwOen56HnwGekZ8BnoefBp6fnp+fnoafg56HnwGeip8BnoyfAZ6GnwWen5+fnoifCZ6fn5+enp+fnomfAZ6NnwGehp8Bnoyfgp6GnwGehJ8BnoafAZ6PnwGehJ8BnoqfAZ6Jnweenp+fnp+eiZ8Enp+fnoSfBJ6fn56GnwGehZ+CnoafAZ6Inwaen56en56Hn4KejZ8Jnp+fnp+fnp6ehJ8BnpGfAZ6EnwGeiZ8Fnp+fn56GnxSen5+fnp+fn56enp+fn56en5+fnoafgp6EnwGehZ+CnoifBZ6fn5+eip8BnpGfAZ6TnwGeip8BnqyfAZ6NnwSen5+ehJ8Mnp+fnp+fn56fn5+ehJ8BnomfAZ6Mn4Wfg56EnwWen5+fnoSfA56fnoefg56Jn4KehZ8Fnp+fn56FnwGelp8Gnp+enp+eh58Gnp+fn56ehJ8BnoWfCp6en56fnp+fn56FnwOen56Gnwmen56fn56fnp6GnwGehZ+CnoSfBp6fn56fnoifAZ6KnwGehZ8Bnomfgp6EnxSenp+fnp+fnp+fnp6fn56fnp+fnoqfE56enp+fnp6en5+fnp6fnp+fn56Gn4KehJ8BnoSfCp6fn5+en56fn56Enweenp+fnp+ehJ8Gnp+fn56ehZ8Gnp+en5+ehJ8Jnp6fn5+enp+ehp8Snp+fn56fnp6fn5+en5+en56fhJ4Ln5+fnp+fnp+en56Fnwyenp6fn5+en56fn5+EngOfn56En4KehZ8Fnp+en56FnwGeip8Nnp6fn56fn5+en56enoSfAZ6Enwqenp+fnp+en5+eiZ8BnoSfCZ6fn56fn56fnoifAZ6HnwGehJ8BnoWfCJ6enp+fnp+ekJ8Knp+fnp+fnp+fn4SeEZ+fn56fnp+enp6fn56fn5+ei58anp6fnp6fn5+en5+enp+fnp+en5+enp+fn56JnwSen56eh58BnoSfBZ6fn5+emZ8fnp+fn56fn56fn56fn56en56fnp+en5+fnp6en5+fnoafDp6fnp6fn5+en56fnp+ehJ8BnoSfBp6fnp+enoWfCZ6enp+en5+fnoWfEZ6fn56fn5+en56fnp6en5+ei5+CnoefCJ6fnp+fnp+ehJ8BnomfAZ6JnwGehp8Knp6fn56enp+fnoefBJ6fn56Fn4Keh58Fnp+fnp6Fnween5+en56fhJ4Cn56JnwGeiZ8Gnp+fnp+ehZ8Fnp6fnp6Gn4KehJ8BnoWfg56Gn4KehZ8BnoefAZ6EnwSen5+ehp8Hnp+fn56enoSfAZ6FnwWenp6fnoSfA56fnoWfCJ6enp+fnp+ejJ8Enp6fn4ifBZ6fn5+ek58BnoSfAZ6PnwGekp8BnpafAZ6MnwWen5+fnoSfAZ6fnwGehZ+CnqGfAZ6GnwGehZ8BnoafAZ6InwGesp8Dnp+emZ8BnoefBp6fnp+fnoafgp6WnwGejZ8BnpefAZ6OnwGehJ8BnoafAZ6Lnwaen5+fnp6HnwGehp8BnoyfBZ6en5+ehZ8Fnp6fn56ZnwGehJ8BnpCfAZ6LnwGeiJ8BnpSfBZ6en5+ejp8Fnp6fn56Onw6en56fnp+en5+fnp+fnp6fAZ6TnwGenJ8BnoqfAZ6qnwOen56On4KejJ8Enp+fnpGfAZ6TnwGehJ8BnpGfBp6fn5+enpOfAZ6OnwGehJ8BnoefAZ6GnwGeip8BnpGfAZ6Vn4KelJ8Bno2fA56fnqaf/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+d/53/nf+d/53/nf+d/52Inf+d/53/nf+d/53/nf+d/52Inf+d/53/nf+d/53/nf+d/52Inf+A/4D/gP+A/4D/gP+A/4CIgAICBAD/nP+c/5z/nP+c/5z/nP+ciJz/nP+c/5z/nP+c/5z/nP+ciJz/nP+c/5z/nP+c/5z/nP+ciJz/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5z/nP+c/5z/nP+c/5z/nIic/5z/nP+c/5z/nP+c/5z/nIic/5z/nP+c/5z/nP+c/5z/nIic/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+b/5v/m/+b/5v/m/+b/5uIm/+b/5v/m/+b/5v/m/+b/5uIm/+b/5v/m/+b/5v/m/+b/5uIm/+A/4D/gP+A/4D/gP+A/4CIgAICBAD/mv+a/5r/mv+a/5r/mv+aiJr/mv+a/5r/mv+a/5r/mv+aiJr/mv+a/5r/mv+a/5r/mv+aiJr/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5n/mf+Z/5n/mf+Z/5n/mYiZ/5n/mf+Z/5n/mf+Z/5n/mYiZ/5n/mf+Z/5n/mf+Z/5n/mYiZ/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+Y/5j/mP+Y/5j/mP+Y/5iImP+Y/5j/mP+Y/5j/mP+Y/5iImP+Y/5j/mP+Y/5j/mP+Y/5iImP+A/4D/gP+A/4D/gP+A/4CIgAICBAD/mP+Y/5j/mP+Y/5j/mP+YiJj/mP+Y/5j/mP+Y/5j/mP+YiJj/mP+Y/5j/mP+Y/5j/mP+YiJj/gP+A/4D/gP+A/4D/gP+AiIACAgQA/5f/l/+X/5f/l/+X/5f/l4iX/5f/l/+X/5f/l/+X/5f/l4iX/5f/l/+X/5f/l/+X/5f/l4iX/4D/gP+A/4D/gP+A/4D/gIiAAgIEAP+X/5f/l/+X/5f/l/+X/5eIl/+X/5f/l/+X/5f/l/+X/5eIl/+X/5f/l/+X/5f/l/+X/5eIl/+A/4D/gP+A/4D/gP+A/4CIgA==",Um={enabled:!0,imageUrl:kh,useAsBackground:!1,rotateY:0,globalEnvIntensity:1,exposure:1,replaceLights:!1};class Km{constructor(e,t,n={}){G(this,"originalBackground"),G(this,"renderer"),G(this,"scene"),G(this,"pmrem"),G(this,"currentEnvRT",null),G(this,"currentBackgroundCube",null),G(this,"sourceImage",null),G(this,"options"),this.renderer=e,this.scene=t,this.originalBackground=this.scene.background,this.pmrem=new tr(e),this.options={...Um,...n},this.loadHDRImage(this.options.imageUrl).then(i=>{this.sourceImage=i,this.update()})}dispose(){var e;this.pmrem.dispose(),(e=this.sourceImage)==null||e.dispose(),this.sourceImage=null,this.clearEnvironment()}clearEnvironment(){this.scene.environment=null,this.scene.background=this.originalBackground,this.currentEnvRT&&(this.currentEnvRT.texture.dispose(),this.currentEnvRT.dispose(),this.currentEnvRT=null),this.currentBackgroundCube&&(this.currentBackgroundCube.texture.dispose(),this.currentBackgroundCube.dispose(),this.currentBackgroundCube=null)}update(){if(!this.sourceImage){this.clearEnvironment();return}const e=new Bh,t=new Li(10,60,40),n=new is({map:this.sourceImage,side:Ct}),i=new dt(t,n);i.scale.set(1,1,-1),i.rotation.y=this.options.rotateY??0,e.add(i);const r=this.renderer.toneMapping,a=this.renderer.outputColorSpace;this.renderer.toneMapping=mn,this.renderer.outputColorSpace=en;const o=new yh(1024,{type:An});new vh(.1,1e3,o).update(this.renderer,e),this.renderer.toneMapping=r,this.renderer.outputColorSpace=a;const c=this.pmrem.fromCubemap(o.texture);this.currentEnvRT&&(this.currentEnvRT.texture.dispose(),this.currentEnvRT.dispose(),this.currentEnvRT=null),this.currentBackgroundCube&&(this.currentBackgroundCube.texture.dispose(),this.currentBackgroundCube.dispose(),this.currentBackgroundCube=null),this.currentEnvRT=c,this.scene.environment=c.texture,this.options.useAsBackground?(this.scene.background=o.texture,this.currentBackgroundCube=o):(this.scene.background=this.originalBackground,o.texture.dispose(),o.dispose())}setRenderer(e){this.renderer=e,this.pmrem.dispose(),this.pmrem=new tr(e),this.update()}async setImageUrl(e){var t;this.options.imageUrl=e??kh,(t=this.sourceImage)==null||t.dispose(),this.sourceImage=null,this.sourceImage=await this.loadHDRImage(this.options.imageUrl),this.update()}setRotationY(e){this.options.rotateY=e,this.update()}setUseAsBackground(e){this.options.useAsBackground=e,this.update()}async loadHDRImage(e){const t=await new Nm().loadAsync(e);return t.mapping=Ws,t}setGlobalEnvIntensity(e){console.warn("setGlobalEnvIntensity is deprecated and does nothing.")}setExposure(e){console.warn("setExposure is deprecated and does nothing.")}disable(){console.warn("disable is deprecated and does nothing. Environment is enabled by default.")}async enable(){this.update()}}const Yh={canvas:void 0,antialias:!0,alpha:!0,powerPreference:"high-performance",precision:"highp",stencil:!1,depth:!0,logarithmicDepthBuffer:!0,shadows:!0,shadowQuality:"high"};class qm{constructor(e,t,n){G(this,"isDIVERenderer",!0),G(this,"_webglrenderer"),G(this,"_environment"),G(this,"_settings"),this._scene=e,this._camera=t,this._settings={...Yh,...n??{}},this._webglrenderer=this._createWebGLRenderer(),this._environment=new Km(this._webglrenderer,this._scene)}get webglrenderer(){return this._webglrenderer}get environment(){return this._environment}get canvas(){return this._webglrenderer.domElement}render(){this._webglrenderer.render(this._scene,this._camera)}onResize(e,t){this._webglrenderer.setSize(e,t)}dispose(){this._environment.dispose(),this._webglrenderer.dispose()}setCanvas(e){this._webglrenderer.dispose(),this._settings.canvas=e,this._webglrenderer=this._createWebGLRenderer(),this._environment.setRenderer(this._webglrenderer)}_createWebGLRenderer(){var e;const t=(e=this._settings.canvas)==null?void 0:e.getContext("webgl2");t==null||t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t==null||t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);const n=new zg(this._settings);return n.shadowMap.enabled=this._settings.shadows,n.shadowMap.type=this._settings.shadowQuality==="high"?Vc:this._settings.shadowQuality==="medium"?Ma:nl,n.setPixelRatio(window.devicePixelRatio),n.outputColorSpace=Ut,n.toneMapping=Zc,n.toneMappingExposure=1,n}}class km{constructor(e,t){G(this,"isDIVEResizeManager",!0),G(this,"_resizeObserver"),G(this,"_width",0),G(this,"_height",0),this._renderer=e,this._camera=t,this._resizeObserver=new ResizeObserver(n=>{const i=n[0],{width:r,height:a}=i.contentRect;r===this._width&&a===this._height||(this._camera.onResize(r,a),this._renderer.onResize(r,a),this._width=r,this._height=a,this._renderer.render())}),this._observeCanvas(this._renderer.canvas)}setCanvas(e){this._resizeObserver.disconnect(),this._observeCanvas(e);const{width:t,height:n}=e.getBoundingClientRect();this._camera.onResize(t,n),this._renderer.onResize(t,n),this._width=t,this._height=n,this._renderer.render()}dispose(){this._resizeObserver.disconnect()}_observeCanvas(e){if(e.parentElement)this._resizeObserver.observe(e.parentElement);else{const t=setInterval(()=>{e.parentElement&&(this._resizeObserver.observe(e.parentElement),clearInterval(t))},16)}}}class Xc{constructor(e,t,n){G(this,"isDIVEView",!0),G(this,"uuid",Pa.generateUUID()),G(this,"_paused",!1),G(this,"_renderer"),G(this,"_resizeManager"),this._scene=e,this._camera=t,this._settings=n,this._renderer=new qm(this._scene,this._camera,this._settings),this._resizeManager=new km(this._renderer,this._camera)}get renderer(){return this._renderer}get camera(){return this._camera}get canvas(){return this._renderer.canvas}tick(){this._paused||this._renderer.render()}dispose(){this._resizeManager.dispose(),this._renderer.dispose()}onResize(e,t){this._renderer.onResize(e,t),this._camera.onResize(e,t)}setCanvas(e){this._renderer.setCanvas(e),this._resizeManager.setCanvas(e),this.onResize(this._renderer.canvas.clientWidth,this._renderer.canvas.clientHeight)}pause(){this._paused=!0}resume(){this._paused=!1}}class Ym extends ke{constructor(){super(),G(this,"isDIVELight",!0),G(this,"isDIVEAmbientLight",!0),G(this,"isSelectable",!0),G(this,"_light"),this.name="DIVEAmbientLight",this._light=new om(16777215,1),this._light.layers.mask=$t,this.add(this._light)}setColor(e){this._light.color=e}setIntensity(e){this._light.intensity=e}setEnabled(e){this._light.visible=e}}class Xm extends ke{constructor(){super(),G(this,"isDIVELight",!0),G(this,"isDIVEPointLight",!0),G(this,"isMovable",!0),G(this,"isSelectable",!0),G(this,"gizmo",null),G(this,"light"),G(this,"mesh"),this.name="DIVEPointLight",this.light=new sm(16777215,1),this.light.layers.mask=$t,this.light.castShadow=!0,this.light.shadow.mapSize.width=512,this.light.shadow.mapSize.height=512,this.add(this.light);const e=.1,t=new Li(e,e*320,e*320),n=new is({color:this.light.color,transparent:!0,opacity:.8,side:Qt});this.mesh=new dt(t,n),this.mesh.layers.mask=Hh,this.add(this.mesh)}setColor(e){this.light.color=e,this.mesh.material.color=e}setIntensity(e){this.light.intensity=e,this.mesh.material.opacity=e>.8?.8:e*.8}setEnabled(e){this.light.visible=e}onMove(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.position})})}onSelect(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("SELECT_OBJECT",{id:this.userData.id})})}onDeselect(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("DESELECT_OBJECT",{id:this.userData.id})})}}class Wm extends ke{constructor(){super(),G(this,"isDIVELight",!0),G(this,"isDIVESceneLight",!0),G(this,"isSelectable",!0),G(this,"_hemiLight"),G(this,"_dirLight"),this.name="DIVESceneLight",this._hemiLight=new tm(16777215,16777215,2),this._hemiLight.layers.mask=$t,this._hemiLight.position.set(0,50,0),this._hemiLight.visible=!0,this.add(this._hemiLight),this._dirLight=new am(16777215,3),this._dirLight.layers.mask=$t,this._dirLight.position.set(1,1.75,1),this._dirLight.position.multiplyScalar(30),this._dirLight.castShadow=!0,this._dirLight.visible=!0,this._dirLight.shadow.mapSize.width=2048,this._dirLight.shadow.mapSize.height=2048;const e=5;this._dirLight.shadow.camera.left=-e,this._dirLight.shadow.camera.right=e,this._dirLight.shadow.camera.top=e,this._dirLight.shadow.camera.bottom=-e,this._dirLight.shadow.camera.far=3500,this.add(this._dirLight)}setColor(e){this._hemiLight.color=e,this._dirLight.color=e}setIntensity(e){this._hemiLight.intensity=e*2,this._dirLight.intensity=e*3}setEnabled(e){this._hemiLight.visible=e,this._dirLight.visible=e}}const Xh=s=>s.parent?Xh(s.parent):s;class Oa extends ke{constructor(){super(),G(this,"isSelectable",!0),G(this,"isMovable",!0),G(this,"isDIVENode",!0),G(this,"gizmo",null),G(this,"_positionWorldBuffer"),G(this,"_boundingBox"),this.layers.mask=$t,this._positionWorldBuffer=new B,this._boundingBox=new St}setPosition(e){if(!this.parent){this.position.set(e.x,e.y,e.z);return}const t=new B(e.x,e.y,e.z);this.position.copy(this.parent.worldToLocal(t)),"isDIVEGroup"in this.parent&&this.parent.updateLineTo(this)}setRotation(e){this.rotation.set(e.x,e.y,e.z)}setScale(e){this.scale.set(e.x,e.y,e.z)}setVisibility(e){this.visible=e}setToWorldOrigin(){this.position.set(0,0,0),Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.getWorldPosition(this._positionWorldBuffer),rotation:this.rotation,scale:this.scale})})}onMove(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("UPDATE_OBJECT",{id:this.userData.id,position:this.getWorldPosition(this._positionWorldBuffer),rotation:this.rotation,scale:this.scale})})}onSelect(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("SELECT_OBJECT",{id:this.userData.id})})}onDeselect(){Dt(async()=>{const{State:e}=await import("./index-BcHRqL4F.js");return{State:e}},__vite__mapDeps([0,1,2])).then(({State:e})=>{var t;(t=e.get(this.userData.id))==null||t.performAction("DESELECT_OBJECT",{id:this.userData.id})})}}class va extends Oa{constructor(e,t=!1,n=65280){super(),G(this,"_box"),G(this,"_sphere"),G(this,"_center"),G(this,"_radius"),G(this,"_boxHelper"),G(this,"_sphereHelper"),G(this,"_size");const i=new St;t?i.setFromObject(e):(e.updateWorldMatrix(!0,!0),e.traverse(a=>{if(!("isMesh"in a)||!a.isMesh)return;const o=a;o.geometry.computeBoundingBox(),o.geometry.boundingBox&&i.union(o.geometry.boundingBox.clone().applyMatrix4(o.matrixWorld))})),this.rotation.copy(e.rotation),this._box=i,this._size=i.getSize(new B),this._center=i.getCenter(new B),this._boxHelper=new Mm(this._box,n),this._boxHelper.visible=!1,this.add(this._boxHelper),this._sphere=i.getBoundingSphere(new tn),this._radius=this._sphere.radius;const r=new Li(this._radius,32,32);r.translate(this._center.x,this._center.y,this._center.z),this._sphereHelper=new dt(r,new is({color:n,wireframe:!0})),this._sphereHelper.visible=!1,this.add(this._sphereHelper)}get box(){return this._box}get sphere(){return this._sphere}get center(){return this._center}get radius(){return this._radius}get size(){return this._size}setBoxHelperVisible(e){this._boxHelper.visible=e}setSphereHelperVisible(e){this._sphereHelper.visible=e}}class Fa extends Oa{constructor(){super(),G(this,"isDIVEModel",!0),G(this,"_gltf",null),G(this,"_mesh",null),G(this,"_material",null),G(this,"_assetLoader",null),this.name="DIVEModel",this.userData.isDIVEModel=!0}async _getAssetLoader(){return this._assetLoader||(this._assetLoader=new(await Dt(async()=>{const{AssetLoader:e}=await import("./index-DGg-ZmG0.js");return{AssetLoader:e}},__vite__mapDeps([3,1,2,4]))).AssetLoader),this._assetLoader}async setFromURL(e){const t=await(await this._getAssetLoader()).load(e);return this.setFromGLTF(t),Dt(async()=>{const{State:n}=await import("./index-BcHRqL4F.js");return{State:n}},__vite__mapDeps([0,1,2])).then(({State:n})=>{var i;(i=n.get(this.userData.id))==null||i.performAction("MODEL_LOADED",{id:this.userData.id})}),this}setFromGLTF(e){this.clear(),this._boundingBox.makeEmpty();let t=null;return e.traverse(n=>{!t&&n.userData.isDIVEModel&&(t=n),n.castShadow=!0,n.receiveShadow=!0,n.layers.mask=this.layers.mask,this._boundingBox.expandByObject(n),!this._mesh&&"isMesh"in n&&(this._mesh=n,this._material?this._mesh.material=this._material:this._material=n.material)}),t||(t=e),this.position.copy(t.position),this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.add(...t.children),this.animations=e.animations,this}setMaterial(e){this._material||(this._material=new fr),e.vertexColors!==void 0&&(this._material.vertexColors=e.vertexColors),e.color!==void 0&&this._material.color.set(e.color),e.map!==void 0&&(this._material.map=e.map),e.normalMap!==void 0&&(this._material.normalMap=e.normalMap),e.roughness!==void 0&&(this._material.roughness=e.roughness),e.roughnessMap!==void 0&&(this._material.roughnessMap=e.roughnessMap,this._material.roughnessMap&&(this._material.roughness=1)),e.metalness!==void 0&&(this._material.metalness=e.metalness),e.metalnessMap!==void 0&&(this._material.metalnessMap=e.metalnessMap,this._material.metalnessMap&&(this._material.metalness=1)),this._mesh&&(this._mesh.material=this._material)}placeOnFloor(){this.updateWorldMatrix(!0,!0);const e=this.getWorldPosition(this._positionWorldBuffer),t=e.clone(),n=new St;this.children.forEach(r=>{r instanceof va||n.expandByObject(r,!0)});const i=-n.min.y;Math.abs(i)<1e-9||(e.y+=i,e.y!==t.y&&(this.setPosition(e),Dt(async()=>{const{State:r}=await import("./index-BcHRqL4F.js");return{State:r}},__vite__mapDeps([0,1,2])).then(({State:r})=>{var a;(a=r.get(this.userData.id))==null||a.performAction("UPDATE_OBJECT",{id:this.userData.id,position:e,rotation:this.rotation,scale:this.scale})}),this.onMove()))}dropIt(){if(!this.parent){console.warn("DIVEModel: dropIt() called on a model that is not in the scene.",this);return}const e=this.getWorldPosition(this._positionWorldBuffer),t=e.clone(),n=new St;this.children.forEach(o=>{o instanceof va||n.expandByObject(o,!0)});const i=n.getCenter(new B);i.y=n.min.y;const r=new ym(i,new B(0,-1,0));r.layers.mask=$t;const a=r.intersectObjects(Xh(this).root.children,!0);if(a.length>0){const o=a[0].object,c=new St().setFromObject(o).max.y-n.min.y;if(Math.abs(c)<1e-9||(e.y+=c,e.y===t.y))return;this.setPosition(e),Dt(async()=>{const{State:h}=await import("./index-BcHRqL4F.js");return{State:h}},__vite__mapDeps([0,1,2])).then(({State:h})=>{var l;(l=h.get(this.userData.id))==null||l.performAction("UPDATE_OBJECT",{id:this.userData.id,position:e,rotation:this.rotation,scale:this.scale})}),this.onMove()}else this.placeOnFloor()}}class Vm extends Fa{constructor(){super(),G(this,"isDIVEPrimitive",!0),G(this,"_mesh"),G(this,"_material"),this._mesh=new dt,this._mesh.name="PrimitiveMesh",this._mesh.layers.mask=$t,this._mesh.castShadow=!0,this._mesh.receiveShadow=!0,this.add(this._mesh),this._material=new fr,this._mesh.material=this._material}setGeometry(e){const t=this.assembleGeometry(e);t&&(t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere(),this._mesh.geometry=t,this._boundingBox.setFromObject(this._mesh))}assembleGeometry(e){switch(this._material.flatShading=!1,e.name.toLowerCase()){case"cylinder":return this.createCylinderGeometry(e);case"sphere":return this.createSphereGeometry(e);case"pyramid":return this._material.flatShading=!0,this.createPyramidGeometry(e);case"cube":case"box":return this.createBoxGeometry(e);case"cone":return this.createConeGeometry(e);case"wall":return this.createWallGeometry(e);case"plane":return this.createPlaneGeometry(e);default:return console.warn("DIVEPrimitive.assembleGeometry: Invalid geometry type:",e.name.toLowerCase()),null}}createCylinderGeometry(e){const t=new lr(e.width/2,e.width/2,e.height,64);return t.translate(0,e.height/2,0),t}createSphereGeometry(e){return new Li(e.width/2,256,256)}createPyramidGeometry(e){const t=new Float32Array([-e.width/2,0,-e.depth/2,e.width/2,0,-e.depth/2,e.width/2,0,e.depth/2,-e.width/2,0,e.depth/2,0,e.height,0]),n=new Uint16Array([0,1,2,0,2,3,0,4,1,1,4,2,2,4,3,3,4,0]),i=new At;return i.setAttribute("position",new Pt(t,3)),i.setIndex(new Pt(n,1)),i}createBoxGeometry(e){const t=new Ln(e.width,e.height,e.depth);return t.translate(0,e.height/2,0),t}createConeGeometry(e){const t=new Ta(e.width/2,e.height,256);return t.translate(0,e.height/2,0),t}createWallGeometry(e){const t=new Ln(e.width,e.height,e.depth||.05,16);return t.translate(0,e.height/2,0),t}createPlaneGeometry(e){const t=new Ln(e.width,e.height,e.depth);return t.translate(0,e.height/2,0),t}}class jm extends Oa{constructor(){super(),G(this,"isDIVEGroup",!0),G(this,"_members"),G(this,"_lines"),this.name="DIVEGroup",this._members=[],this._lines=[]}get members(){return this._members}setPosition(e){super.setPosition(e),this._members.forEach(t=>{"isDIVENode"in t&&t.onMove()})}setLinesVisibility(e,t){if(!t){this._lines.forEach(i=>{i.visible=e});return}const n=this._members.indexOf(t);n!==-1&&(this._lines[n].visible=e)}attach(e){if(this._members.includes(e))return this;const t=this.createLine();return this.add(t),this._lines.push(t),super.attach(e),this._members.push(e),this._updateLineTo(t,e),this.setLinesVisibility(!0,e),this}remove(e){const t=this._members.indexOf(e);if(t===-1)return this;const n=this._lines[t];return super.remove(n),this._lines.splice(t,1),super.remove(e),this._members.splice(t,1),this}updateLineTo(e){const t=this._members.indexOf(e);t!==-1&&this._updateLineTo(this._lines[t],e)}createLine(){const e=new At,t=new Ug({color:6710886,dashSize:.05,gapSize:.025}),n=new Ea(e,t);return n.visible=!1,n}_updateLineTo(e,t){const n=[new B(0,0,0),t.position.clone()];e.geometry.setFromPoints(n),e.computeLineDistances()}}class Zm extends dt{constructor(){const e=new Di(1,1);e.scale(1e3,1e3,1),e.rotateX(-Math.PI/2);const t=new fr({color:new ye(16777215),side:Qt});super(e,t),G(this,"isDIVEFloor",!0),this.name="Floor",this.layers.mask=$t,this.receiveShadow=!0}setVisibility(e){this.visible=e}setColor(e){this.material.color=new ye(e)}}class Qm extends ke{constructor(){super(),G(this,"isDIVERoot",!0),G(this,"_floor"),this.name="Root",this._floor=new Zm,this.add(this._floor)}get floor(){return this._floor}computeSceneBB(){const e=new St;return this.children.forEach(t=>{"isDIVEFloor"in t||t.traverse(n=>{"isObject3D"in n&&e.expandByObject(n)})}),e}getSceneObject(e){let t;return this.traverse(n=>{t||n.userData.id===e.id&&(t=n)}),t}addSceneObject(e){let t=this.getSceneObject(e);if(t)return console.warn(`DIVERoot.addSceneObject: Scene object with id ${e.id} already exists`),t;switch(e.entityType){case"pov":break;case"light":{switch(e.type){case"scene":{t=new Wm;break}case"ambient":{t=new Ym;break}case"point":{t=new Xm;break}default:throw new Error(`DIVERoot.addSceneObject: Unknown light type: ${e.type}`)}t.name=e.name,t.userData.id=e.id,this.add(t),this._updateLight(t,e);break}case"model":{t=new Fa,t.name=e.name,t.userData.id=e.id,t.userData.uri=e.uri,this.add(t),this._updateModel(t,e);break}case"primitive":{t=new Vm,t.name=e.name,t.userData.id=e.id,this.add(t),this._updatePrimitive(t,e);break}case"group":{t=new jm,t.name=e.name,t.userData.id=e.id,this.add(t),this._updateGroup(t,e);break}default:throw new Error(`DIVERoot.addSceneObject: Unknown entity type: ${e.entityType}`)}return t}updateSceneObject(e){const t=this.getSceneObject(e);if(!t){console.warn(`DIVERoot.updateSceneObject: Scene object with id ${e.id} does not exist`);return}switch(e.entityType){case"pov":break;case"light":{this._updateLight(t,e);break}case"model":{this._updateModel(t,e);break}case"primitive":{this._updatePrimitive(t,e);break}case"group":{this._updateGroup(t,e);break}default:throw new Error(`DIVERoot.updateSceneObject: Unknown entity type: ${e.entityType}`)}}deleteSceneObject(e){const t=this.getSceneObject(e);if(!t){console.warn(`DIVERoot.deleteSceneObject: Object with id ${e.id} not found`);return}switch(e.entityType){case"pov":break;case"light":{this._deleteLight(t);break}case"model":{this._deleteModel(t);break}case"primitive":{this._deletePrimitive(t);break}case"group":{this._deleteGroup(t);break}default:throw new Error(`DIVERoot.deleteSceneObject: Unknown entity type: ${e.entityType}`)}}_updateLight(e,t){t.name!==void 0&&t.name!==null&&(e.name=t.name),t.position!==void 0&&t.position!==null&&e.position.set(t.position.x,t.position.y,t.position.z),t.intensity!==void 0&&t.intensity!==null&&e.setIntensity(t.intensity),t.enabled!==void 0&&t.enabled!==null&&e.setEnabled(t.enabled),t.color!==void 0&&t.color!==null&&e.setColor(new ye(t.color)),t.visible!==void 0&&t.visible!==null&&(e.visible=t.visible),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updateModel(e,t){t.uri!==void 0&&e.setFromURL(t.uri),t.name!==void 0&&(e.name=t.name),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.material!==void 0&&e.setMaterial(t.material),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updatePrimitive(e,t){t.name!==void 0&&(e.name=t.name),t.geometry!==void 0&&e.setGeometry(t.geometry),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.material!==void 0&&e.setMaterial(t.material),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_updateGroup(e,t){t.name!==void 0&&(e.name=t.name),t.position!==void 0&&e.setPosition(t.position),t.rotation!==void 0&&e.setRotation(t.rotation),t.scale!==void 0&&e.setScale(t.scale),t.visible!==void 0&&e.setVisibility(t.visible),t.bbVisible!==void 0&&e.setLinesVisibility(t.bbVisible),t.parentId!==void 0&&this._setParent({...t,parentId:t.parentId})}_deleteLight(e){this._detachTransformControls(e),e.parent.remove(e)}_deleteModel(e){this._detachTransformControls(e),e.parent.remove(e)}_deletePrimitive(e){this._detachTransformControls(e),e.parent.remove(e)}_deleteGroup(e){this._detachTransformControls(e);for(let t=e.members.length-1;t>=0;t--)this.attach(e.members[t]);e.parent.remove(e)}_setParent(e){const t=this.getSceneObject(e);if(e.parentId!==null){const n=this.getSceneObject({id:e.parentId,entityType:e.entityType});if(!n)return;n.attach(t)}else this.attach(t)}_detachTransformControls(e){this._findScene(e).children.find(t=>{"isTransformControls"in t&&t.detach()})}_findScene(e){return e.parent!==null?this._findScene(e.parent):e}}const Jm="#dddddd",$m="#888888",aa=50,ev=1,tv=10;class Wc extends ke{constructor(e){super(),G(this,"_mesh"),G(this,"_material"),G(this,"_gridSize"),this.name="Grid",this._gridSize=(e==null?void 0:e.gridSize)??ev;const t=(e==null?void 0:e.majorLineEvery)??tv,n=new Di(aa,aa);n.rotateX(-Math.PI/2),this._material=new Rm({...Gm.grid,uniforms:{uGridSize:{value:this._gridSize},uMajorLineEvery:{value:t},uMinorLineColor:{value:new ye(Jm)},uMajorLineColor:{value:new ye($m)},uFadeDistance:{value:aa/2}},transparent:!0,depthWrite:!1,side:Zt}),this._mesh=new dt(n,this._material),this._mesh.layers.mask=Nh,this._mesh.frustumCulled=!1,this._mesh.renderOrder=-1,this._mesh.onBeforeRender=(i,r,a)=>{const o=this._gridSize;this._mesh.position.x=Math.round(a.position.x/o)*o,this._mesh.position.z=Math.round(a.position.z/o)*o,this._mesh.updateMatrixWorld(!0)},this.add(this._mesh)}setVisibility(e){this.visible=e}setGridSize(e){this._gridSize=e,this._material.uniforms.uGridSize.value=e}setMajorLineEvery(e){this._material.uniforms.uMajorLineEvery.value=e}dispose(){this._mesh.geometry.dispose(),this._material.dispose()}}const Wh={displayFloor:!1,displayGrid:!1,gridSize:1,gridMajorLineEvery:5,backgroundColor:"transparent"};class nv extends Bh{constructor(e){super(),G(this,"isDIVEScene",!0),G(this,"_settings"),G(this,"_root"),G(this,"_grid",null),this._settings={...Wh,...e??{}},this.setBackground(this._settings.backgroundColor),this._root=new Qm,this._root.floor.setVisibility(this._settings.displayFloor),this.add(this._root),this._settings.displayGrid&&(this._grid=new Wc({gridSize:this._settings.gridSize,majorLineEvery:this._settings.gridMajorLineEvery}),this._grid.setVisibility(this._settings.displayGrid),this.add(this._grid))}get root(){return this._root}get grid(){return this._grid||(this._grid=new Wc({gridSize:this._settings.gridSize,majorLineEvery:this._settings.gridMajorLineEvery}),this._grid.setVisibility(this._settings.displayGrid),this.add(this._grid)),this._grid}setBackground(e){e==="transparent"?this.background=null:typeof e=="string"||typeof e=="number"?this.background=new ye(e):this.background=e}computeSceneBB(){return this._root.computeSceneBB()}dispose(){this.remove(this._root),this._grid&&this.remove(this._grid)}}const iv={enableDamping:!0,dampingFactor:.05,enabled:!0,target:new B,minDistance:0,maxDistance:1/0,minZoom:0,maxZoom:1/0,minPolarAngle:0,maxPolarAngle:Math.PI,minAzimuthAngle:-1/0,maxAzimuthAngle:1/0,enableZoom:!0,zoomSpeed:1,enableRotate:!0,rotateSpeed:1,enablePan:!0,panSpeed:1,screenSpacePanning:!0,keyPanSpeed:7,autoRotate:!1,autoRotateSpeed:2,keys:{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},mouseButtons:{LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN},touches:{ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN}},Vh=class _a extends Rn{constructor(e,t,n){super(),G(this,"object"),G(this,"domElements"),G(this,"enabled",!0),G(this,"target",new B),G(this,"minDistance",0),G(this,"maxDistance",1/0),G(this,"minZoom",0),G(this,"maxZoom",1/0),G(this,"minPolarAngle",0),G(this,"maxPolarAngle",Math.PI),G(this,"minAzimuthAngle",-1/0),G(this,"maxAzimuthAngle",1/0),G(this,"enableDamping",!0),G(this,"dampingFactor",.05),G(this,"enableZoom",!0),G(this,"zoomSpeed",1),G(this,"enableRotate",!0),G(this,"rotateSpeed",1),G(this,"enablePan",!0),G(this,"panSpeed",1),G(this,"screenSpacePanning",!0),G(this,"keyPanSpeed",7),G(this,"autoRotate",!1),G(this,"autoRotateSpeed",2),G(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),G(this,"mouseButtons",{LEFT:un.ROTATE,MIDDLE:un.DOLLY,RIGHT:un.PAN}),G(this,"touches",{ONE:Sn.ROTATE,TWO:Sn.DOLLY_PAN}),G(this,"target0"),G(this,"position0"),G(this,"zoom0"),G(this,"uuid",Pa.generateUUID()),G(this,"state",-1),G(this,"EPS",1e-6),G(this,"spherical",new Oc),G(this,"sphericalDelta",new Oc),G(this,"scale",1),G(this,"panOffset",new B),G(this,"zoomChanged",!1),G(this,"rotateStart",new le),G(this,"rotateEnd",new le),G(this,"rotateDelta",new le),G(this,"panStart",new le),G(this,"panEnd",new le),G(this,"panDelta",new le),G(this,"dollyStart",new le),G(this,"dollyEnd",new le),G(this,"dollyDelta",new le),G(this,"pointers",[]),G(this,"pointerPositions",{}),G(this,"offset",new B),G(this,"quat"),G(this,"quatInverse"),G(this,"lastPosition",new B),G(this,"lastQuaternion",new Xt),G(this,"lastTarget",new B),G(this,"panLeft",(()=>{const i=new B;return(r,a)=>{i.setFromMatrixColumn(a,0),i.multiplyScalar(-r),this.panOffset.add(i)}})()),G(this,"panUp",(()=>{const i=new B;return(r,a)=>{this.screenSpacePanning===!0?i.setFromMatrixColumn(a,1):(i.setFromMatrixColumn(a,0),i.crossVectors(this.object.up,i)),i.multiplyScalar(r),this.panOffset.add(i)}})()),G(this,"onMouseDown",i=>{let r;switch(i.button){case 0:r=this.mouseButtons.LEFT;break;case 1:r=this.mouseButtons.MIDDLE;break;case 2:r=this.mouseButtons.RIGHT;break;default:r=-1}switch(r){case un.DOLLY:if(this.enableZoom===!1)return;this.handleMouseDownDolly(i),this.state=1;break;case un.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}else{if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}break;case un.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this.handleMouseDownRotate(i),this.state=0}else{if(this.enablePan===!1)return;this.handleMouseDownPan(i),this.state=2}break;default:this.state=-1}this.state!==-1&&this.dispatchEvent({type:"start"})}),G(this,"onMouseMove",i=>{if(this.enabled!==!1)switch(this.state){case 0:if(this.enableRotate===!1)return;this.handleMouseMoveRotate(i);break;case 1:if(this.enableZoom===!1)return;this.handleMouseMoveDolly(i);break;case 2:if(this.enablePan===!1)return;this.handleMouseMovePan(i);break}}),G(this,"onMouseWheel",i=>{this.enabled===!1||this.enableZoom===!1||this.state!==-1||(i.preventDefault(),this.dispatchEvent({type:"start"}),this.handleMouseWheel(i),this.dispatchEvent({type:"end"}))}),G(this,"onKeyDown",i=>{this.enabled===!1||this.enablePan===!1||this.handleKeyDown(i)}),G(this,"onTouchStart",i=>{switch(this.trackPointer(i),this.pointers.length){case 1:switch(this.touches.ONE){case Sn.ROTATE:if(this.enableRotate===!1)return;this.handleTouchStartRotate(i),this.state=3;break;case Sn.PAN:if(this.enablePan===!1)return;this.handleTouchStartPan(i),this.state=4;break;default:this.state=-1}break;case 2:switch(this.touches.TWO){case Sn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchStartDollyPan(i),this.state=5;break;case Sn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchStartDollyRotate(i),this.state=6;break;default:this.state=-1}break;default:this.state=-1}this.state!==-1&&this.dispatchEvent({type:"start"})}),G(this,"onTouchMove",i=>{switch(this.trackPointer(i),this.state){case 3:if(this.enableRotate===!1)return;this.handleTouchMoveRotate(i),this.update();break;case 4:if(this.enablePan===!1)return;this.handleTouchMovePan(i),this.update();break;case 5:if(this.enableZoom===!1&&this.enablePan===!1)return;this.handleTouchMoveDollyPan(i),this.update();break;case 6:if(this.enableZoom===!1&&this.enableRotate===!1)return;this.handleTouchMoveDollyRotate(i),this.update();break;default:this.state=-1}}),G(this,"onPointerDown",i=>{if(this.enabled!==!1){if(this.pointers.length===0){const r=i.currentTarget;r.setPointerCapture(i.pointerId),r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp)}this.isTrackingPointer(i)||(this.addPointer(i),i.pointerType==="touch"?this.onTouchStart(i):this.onMouseDown(i))}}),G(this,"onPointerMove",i=>{this.enabled!==!1&&(i.pointerType==="touch"?this.onTouchMove(i):this.onMouseMove(i))}),G(this,"onPointerUp",i=>{if(this.removePointer(i),this.pointers.length===0){const r=i.currentTarget;r.releasePointerCapture(i.pointerId),r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),this.dispatchEvent({type:"end"}),this.state=-1}}),G(this,"onPointerCancel",i=>{this.removePointer(i)}),G(this,"onContextMenu",i=>{this.enabled!==!1&&i.preventDefault()}),this.object=e,this.domElements=Array.isArray(t)?t:[t],Object.assign(this,n),this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.quat=new Xt().setFromUnitVectors(e.up,new B(0,1,0)),this.quatInverse=this.quat.clone().invert(),this.domElements.forEach(i=>this.addEventListeners(i)),this.update()}get domElement(){return this.domElements[0]}tick(){this.enabled&&this.update()}getPolarAngle(){return this.spherical.phi}getAzimuthalAngle(){return this.spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent({type:"change"}),this.update(),this.state=-1}update(){return this.offset.copy(this.object.position).sub(this.target),this.offset.applyQuaternion(this.quat),this.spherical.setFromVector3(this.offset),this.autoRotate&&this.state===-1&&this.rotateLeft(this.getAutoRotationAngle()),this.enableDamping?(this.spherical.theta+=this.sphericalDelta.theta*this.dampingFactor,this.spherical.phi+=this.sphericalDelta.phi*this.dampingFactor):(this.spherical.theta+=this.sphericalDelta.theta,this.spherical.phi+=this.sphericalDelta.phi),this.spherical.theta=Math.max(this.minAzimuthAngle,Math.min(this.maxAzimuthAngle,this.spherical.theta)),this.spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this.spherical.phi)),this.spherical.makeSafe(),this.spherical.radius*=this.scale,this.spherical.radius=Math.max(this.minDistance,Math.min(this.maxDistance,this.spherical.radius)),this.enableDamping===!0?this.target.addScaledVector(this.panOffset,this.dampingFactor):this.target.add(this.panOffset),this.offset.setFromSpherical(this.spherical),this.offset.applyQuaternion(this.quatInverse),this.object.position.copy(this.target).add(this.offset),this.object.lookAt(this.target),this.enableDamping===!0?(this.sphericalDelta.theta*=1-this.dampingFactor,this.sphericalDelta.phi*=1-this.dampingFactor,this.panOffset.multiplyScalar(1-this.dampingFactor)):(this.sphericalDelta.set(0,0,0),this.panOffset.set(0,0,0)),this.scale=1,this.zoomChanged||this.lastPosition.distanceToSquared(this.object.position)>this.EPS||8*(1-this.lastQuaternion.dot(this.object.quaternion))>this.EPS||this.lastTarget.distanceToSquared(this.target)>this.EPS?(this.dispatchEvent({type:"change"}),this.lastPosition.copy(this.object.position),this.lastQuaternion.copy(this.object.quaternion),this.lastTarget.copy(this.target),this.zoomChanged=!1,!0):!1}dispose(){this.domElements.forEach(e=>this.removeEventListeners(e)),this.dispatchEvent({type:"dispose"})}addDomElements(...e){e.forEach(t=>{this.domElements.includes(t)||(this.domElements.push(t),this.addEventListeners(t))})}removeDomElements(...e){e.forEach(t=>{const n=this.domElements.indexOf(t);n>-1&&(this.removeEventListeners(t),this.domElements.splice(n,1))})}setDomElements(...e){this.removeDomElements(...this.domElements),this.domElements=[],this.addDomElements(...e)}computeEncompassingView(e,t=0){const n=e.center,i=e.sphere.radius,r=this.object.fov*(Math.PI/180),a=this.object.aspect,o=r/2,c=Math.atan(Math.tan(o)*a),h=i/Math.sin(o),l=i/Math.sin(c),f=Math.max(h,l)*(1+t),d=this.object.position.clone().sub(this.target).normalize(),A=d.length()>.001?d:new B(0,0,1);return{position:n.clone().add(A.multiplyScalar(f)),target:n}}focusObject(e,t=0){const n=new va(e),i=this.computeEncompassingView(n,t);this.object.position.copy(i.position),this.target.copy(i.target),this.update()}zoomIn(e){this.dollyIn(Math.pow(.95,e??_a.DEFAULT_ZOOM_FACTOR)),this.update()}zoomOut(e){this.dollyOut(Math.pow(.95,e??_a.DEFAULT_ZOOM_FACTOR)),this.update()}getState(){return{target:this.target.clone(),azimuthalAngle:this.getAzimuthalAngle(),polarAngle:this.getPolarAngle(),distance:this.getDistance(),position:this.object.position.clone(),quaternion:this.object.quaternion.clone()}}setState(e){this.target.copy(e.target),this.object.position.copy(e.position),this.object.quaternion.copy(e.quaternion),this.update()}addEventListeners(e){e.style.touchAction="none",e.addEventListener("contextmenu",this.onContextMenu),e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerCancel),e.addEventListener("wheel",this.onMouseWheel,{passive:!1}),e.addEventListener("keydown",this.onKeyDown)}removeEventListeners(e){e.removeEventListener("contextmenu",this.onContextMenu),e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointercancel",this.onPointerCancel),e.removeEventListener("wheel",this.onMouseWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp)}getAutoRotationAngle(){return 2*Math.PI/60/60*this.autoRotateSpeed}getZoomScale(){return Math.pow(.95,this.zoomSpeed)}rotateLeft(e){this.sphericalDelta.theta-=e}rotateUp(e){this.sphericalDelta.phi-=e}pan(e,t,n){const i=new B;if("isPerspectiveCamera"in this.object){const r=this.object.position;i.copy(r).sub(this.target);let a=i.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this.panLeft(2*e*a/n.clientHeight,this.object.matrix),this.panUp(2*t*a/n.clientHeight,this.object.matrix)}else"isOrthographicCamera"in this.object?(this.panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this.panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitController encountered an unknown camera type - pan disabled."),this.enablePan=!1)}dollyIn(e){"isPerspectiveCamera"in this.object||"isOrthographicCamera"in this.object?this.scale*=e:(console.warn("WARNING: OrbitController encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}dollyOut(e){"isPerspectiveCamera"in this.object||"isOrthographicCamera"in this.object?this.scale/=e:(console.warn("WARNING: OrbitController encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}handleMouseDownRotate(e){this.rotateStart.set(e.clientX,e.clientY)}handleMouseDownDolly(e){this.dollyStart.set(e.clientX,e.clientY)}handleMouseDownPan(e){this.panStart.set(e.clientX,e.clientY)}handleMouseMoveRotate(e){this.rotateEnd.set(e.clientX,e.clientY),this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed);const t=e.currentTarget;this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.rotateStart.copy(this.rotateEnd),this.update()}handleMouseMoveDolly(e){this.dollyEnd.set(e.clientX,e.clientY),this.dollyDelta.subVectors(this.dollyEnd,this.dollyStart),this.dollyDelta.y>0?this.dollyIn(this.getZoomScale()):this.dollyDelta.y<0&&this.dollyOut(this.getZoomScale()),this.dollyStart.copy(this.dollyEnd),this.update()}handleMouseMovePan(e){const t=e.currentTarget;this.panEnd.set(e.clientX,e.clientY),this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y,t),this.panStart.copy(this.panEnd),this.update()}handleMouseWheel(e){e.deltaY<0?this.dollyIn(this.getZoomScale()):e.deltaY>0&&this.dollyOut(this.getZoomScale()),this.update()}handleKeyDown(e){let t=!1;const n=e.currentTarget;switch(e.code){case this.keys.UP:this.pan(0,this.keyPanSpeed,n),t=!0;break;case this.keys.BOTTOM:this.pan(0,-this.keyPanSpeed,n),t=!0;break;case this.keys.LEFT:this.pan(this.keyPanSpeed,0,n),t=!0;break;case this.keys.RIGHT:this.pan(-this.keyPanSpeed,0,n),t=!0;break}t&&(e.preventDefault(),this.update())}handleTouchStartRotate(e){if(this.pointers.length===1)this.rotateStart.set(e.pageX,e.pageY);else{const t=this.getSecondPointer(e),n=.5*(e.pageX+t.pageX),i=.5*(e.pageY+t.pageY);this.rotateStart.set(n,i)}}handleTouchStartPan(e){if(this.pointers.length===1)this.panStart.set(e.pageX,e.pageY);else{const t=this.getSecondPointer(e),n=.5*(e.pageX+t.pageX),i=.5*(e.pageY+t.pageY);this.panStart.set(n,i)}}handleTouchStartDolly(e){const t=this.getSecondPointer(e),n=e.pageX-t.pageX,i=e.pageY-t.pageY,r=Math.sqrt(n*n+i*i);this.dollyStart.set(0,r)}handleTouchStartDollyPan(e){this.enableZoom&&this.handleTouchStartDolly(e),this.enablePan&&this.handleTouchStartPan(e)}handleTouchStartDollyRotate(e){this.enableZoom&&this.handleTouchStartDolly(e),this.enableRotate&&this.handleTouchStartRotate(e)}handleTouchMoveRotate(e){if(this.pointers.length===1)this.rotateEnd.set(e.pageX,e.pageY);else{const n=this.getSecondPointer(e),i=.5*(e.pageX+n.pageX),r=.5*(e.pageY+n.pageY);this.rotateEnd.set(i,r)}const t=e.currentTarget;this.rotateDelta.subVectors(this.rotateEnd,this.rotateStart).multiplyScalar(this.rotateSpeed),this.rotateLeft(2*Math.PI*this.rotateDelta.x/t.clientHeight),this.rotateUp(2*Math.PI*this.rotateDelta.y/t.clientHeight),this.rotateStart.copy(this.rotateEnd)}handleTouchMovePan(e){if(this.pointers.length===1)this.panEnd.set(e.pageX,e.pageY);else{const n=this.getSecondPointer(e),i=.5*(e.pageX+n.pageX),r=.5*(e.pageY+n.pageY);this.panEnd.set(i,r)}const t=e.currentTarget;this.panDelta.subVectors(this.panEnd,this.panStart).multiplyScalar(this.panSpeed),this.pan(this.panDelta.x,this.panDelta.y,t),this.panStart.copy(this.panEnd)}handleTouchMoveDolly(e){const t=this.getSecondPointer(e),n=e.pageX-t.pageX,i=e.pageY-t.pageY,r=Math.sqrt(n*n+i*i);this.dollyEnd.set(0,r),this.dollyDelta.set(0,Math.pow(this.dollyEnd.y/this.dollyStart.y,this.zoomSpeed)),this.dollyOut(this.dollyDelta.y),this.dollyStart.copy(this.dollyEnd)}handleTouchMoveDollyPan(e){this.enableZoom&&this.handleTouchMoveDolly(e),this.enablePan&&this.handleTouchMovePan(e)}handleTouchMoveDollyRotate(e){this.enableZoom&&this.handleTouchMoveDolly(e),this.enableRotate&&this.handleTouchMoveRotate(e)}addPointer(e){this.pointers.push(e)}removePointer(e){delete this.pointerPositions[e.pointerId];for(let t=0;t<this.pointers.length;t++)if(this.pointers[t].pointerId==e.pointerId){this.pointers.splice(t,1);return}}trackPointer(e){let t=this.pointerPositions[e.pointerId];t===void 0&&(t=new le,this.pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}getSecondPointer(e){return this.pointers[0].pointerId===e.pointerId?this.pointers[1]:this.pointers[0]}isTrackingPointer(e){return this.pointers.some(t=>t.pointerId===e.pointerId)}};G(Vh,"DEFAULT_ZOOM_FACTOR",1);let sv=Vh;const rv=`
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
`;window.DIVE={instances:[],get instance(){return window.DIVE.instances[0]}};const qs={autoStart:!0,displayAxes:!1,...Wh,...Zi,...Yh,...iv};class av{constructor(e){G(this,"_instanceId",Pa.generateUUID()),G(this,"_settings"),G(this,"_views"),G(this,"_mainView"),G(this,"_scene"),G(this,"_clock"),G(this,"_orientationDisplay",null),this._settings={...qs,...e??{}},this._clock=new Hm,this._scene=new nv({backgroundColor:(e==null?void 0:e.backgroundColor)??qs.backgroundColor,displayGrid:(e==null?void 0:e.displayGrid)??qs.displayGrid,displayFloor:(e==null?void 0:e.displayFloor)??qs.displayFloor});const t=new Xc(this._scene,new Fc,this._settings);this._clock.addTicker(t),this._views=[t],this._mainView=t,this._settings.displayAxes&&Dt(async()=>{const{OrientationDisplay:n}=await import("./index-CbbcT78C.js");return{OrientationDisplay:n}},__vite__mapDeps([5,6,1,2])).then(({OrientationDisplay:n})=>{this._orientationDisplay=new n(this.mainView.renderer,this.scene,this.mainView.camera),this._clock.addTicker(this._orientationDisplay)}),this._settings.autoStart&&this.start(),console.log("DIVE 2.3.4 initialized successfully!"),console.log(rv),window.DIVE.instances.push(this)}static async QuickView(e,t){return Dt(async()=>{const{QuickView:n}=await Promise.resolve().then(()=>hv);return{QuickView:n}},void 0).then(({QuickView:n})=>n(e,t))}get engine(){return{scene:this.scene,camera:this.mainView.camera,renderer:this.mainView.renderer,setCanvas:e=>{this.mainView.setCanvas(e)},clock:this.clock,start:()=>{this.start()},stop:()=>{this.stop()},dispose:()=>{this.dispose()}}}get views(){return this._views}get mainView(){return this._mainView}get canvas(){return this.mainView.canvas}get scene(){return this._scene}get clock(){return this._clock}start(){this._clock.start()}stop(){this._clock.stop()}async dispose(){return new Promise(e=>{this._views.forEach(t=>{t.dispose()}),this._views=[],this._orientationDisplay&&(this._clock.removeTicker(this._orientationDisplay),this._orientationDisplay.dispose()),this.scene.dispose(),window.DIVE.instances=window.DIVE.instances.filter(t=>t._instanceId!==this._instanceId),e()})}createView(e){const t=new Xc(this._scene,e??new Fc,{...this._settings,canvas:void 0});return this._views.push(t),this._clock.addTicker(t),this._views.length===1&&(this._mainView=t),t}disposeView(e){this._views=this._views.filter(t=>t!==e),this._clock.removeTicker(e),this._mainView===e&&(this._mainView=this._views[0]),e.dispose()}}const ov={glb:{key:"glb",extension:"glb"},gltf:{key:"gltf",extension:"gltf"},usdz:{key:"usdz",extension:"usdz"},step:{key:"step",extension:"step"},stp:{key:"stp",extension:"stp"},iges:{key:"iges",extension:"iges"},igs:{key:"igs",extension:"igs"}},Bv=Object.values(ov).map(s=>s.extension),cv=async(s,e)=>{const t=new av(e);t.mainView.camera.position.set(0,1,2);const n=await new Fa().setFromURL(s);t.scene.root.add(n),n.placeOnFloor();const i=new sv(t.mainView.camera,t.mainView.canvas);i.focusObject(n),t.clock.addTicker(i);const r=Object.assign(t,{orbitController:i,model:n}),a=t.dispose.bind(t);return r.dispose=async()=>{i.dispose(),await a()},r},hv=Object.freeze(Object.defineProperty({__proto__:null,QuickView:cv},Symbol.toStringTag,{value:"Module"}));export{am as $,bv as A,Ln as B,lr as C,Zt as D,Rn as E,nt as F,Oi as G,Cv as H,Jg as I,Ts as J,Sv as K,Wl as L,Pa as M,Pt as N,ke as O,Di as P,Xt as Q,ym as R,Hh as S,Lh as T,fr as U,le as V,en as W,Mv as X,wv as Y,sm as Z,Fc as _,jl as a,gv as a0,yc as a1,xv as a2,Pv as a3,Lg as a4,En as a5,cs as a6,mr as a7,Ol as a8,Mt as a9,uv as aA,ur as aB,St as aC,tn as aD,Bn as aE,_v as aF,fh as aG,kt as aH,Bh as aI,vn as aJ,Fh as aK,zg as aL,It as aa,la as ab,fa as ac,pn as ad,pt as ae,Ng as af,On as ag,qe as ah,Av as ai,Dh as aj,mv as ak,vv as al,bt as am,Th as an,Tc as ao,Og as ap,Vs as aq,js as ar,nr as as,sr as at,ir as au,ss as av,Xe as aw,Qt as ax,fv as ay,dv as az,Vl as b,ba as c,$t as d,B as e,is as f,hr as g,At as h,dt as i,zh as j,Ea as k,Li as l,Jt as m,Le as n,va as o,pv as p,yv as q,Ut as r,Gg as s,xh as t,Ve as u,Iv as v,ye as w,cv as x,ov as y,Bv as z};
