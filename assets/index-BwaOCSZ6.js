var jd=Object.defineProperty;var Kd=(e,t,n)=>t in e?jd(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var $r=(e,t,n)=>Kd(e,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const oc="169",Pr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},$d=0,Xc=1,Zd=2,Vh=1,Jd=2,Yn=3,Pi=0,en=1,Kn=2,bi=0,Lr=1,qc=2,Yc=3,jc=4,Qd=5,Ji=100,tp=101,ep=102,np=103,ip=104,rp=200,sp=201,op=202,ap=203,nl=204,il=205,lp=206,cp=207,up=208,hp=209,fp=210,dp=211,pp=212,mp=213,gp=214,rl=0,sl=1,ol=2,Br=3,al=4,ll=5,cl=6,ul=7,Gh=0,_p=1,vp=2,Ai=0,xp=1,Mp=2,Sp=3,yp=4,Ep=5,Tp=6,bp=7,kh=300,zr=301,Hr=302,hl=303,fl=304,Xo=306,dl=1e3,yi=1001,pl=1002,_n=1003,Ap=1004,Hs=1005,gn=1006,la=1007,Ei=1008,ei=1009,Wh=1010,Xh=1011,Ms=1012,ac=1013,sr=1014,Jn=1015,Ds=1016,lc=1017,cc=1018,Vr=1020,qh=35902,Yh=1021,jh=1022,bn=1023,Kh=1024,$h=1025,Dr=1026,Gr=1027,Zh=1028,uc=1029,Jh=1030,hc=1031,fc=1033,vo=33776,xo=33777,Mo=33778,So=33779,ml=35840,gl=35841,_l=35842,vl=35843,xl=36196,Ml=37492,Sl=37496,yl=37808,El=37809,Tl=37810,bl=37811,Al=37812,wl=37813,Cl=37814,Rl=37815,Pl=37816,Ll=37817,Dl=37818,Il=37819,Ul=37820,Nl=37821,yo=36492,Fl=36494,Ol=36495,Qh=36283,Bl=36284,zl=36285,Hl=36286,wp=3200,Cp=3201,Rp=0,Pp=1,Si="",Un="srgb",Ni="srgb-linear",dc="display-p3",qo="display-p3-linear",Po="linear",de="srgb",Lo="rec709",Do="p3",cr=7680,Kc=519,Lp=512,Dp=513,Ip=514,tf=515,Up=516,Np=517,Fp=518,Op=519,$c=35044,Io=35048,Zc="300 es",Qn=2e3,Uo=2001;class lr{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(n)===-1&&i[t].push(n)}hasEventListener(t,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(n)!==-1}removeEventListener(t,n){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Jc=1234567;const cs=Math.PI/180,Ss=180/Math.PI;function Wr(){const e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[e&255]+Ue[e>>8&255]+Ue[e>>16&255]+Ue[e>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[n&63|128]+Ue[n>>8&255]+"-"+Ue[n>>16&255]+Ue[n>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Oe(e,t,n){return Math.max(t,Math.min(n,e))}function pc(e,t){return(e%t+t)%t}function Bp(e,t,n,i,r){return i+(e-t)*(r-i)/(n-t)}function zp(e,t,n){return e!==t?(n-e)/(t-e):0}function us(e,t,n){return(1-n)*e+n*t}function Hp(e,t,n,i){return us(e,t,1-Math.exp(-n*i))}function Vp(e,t=1){return t-Math.abs(pc(e,t*2)-t)}function Gp(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*(3-2*e))}function kp(e,t,n){return e<=t?0:e>=n?1:(e=(e-t)/(n-t),e*e*e*(e*(e*6-15)+10))}function Wp(e,t){return e+Math.floor(Math.random()*(t-e+1))}function Xp(e,t){return e+Math.random()*(t-e)}function qp(e){return e*(.5-Math.random())}function Yp(e){e!==void 0&&(Jc=e);let t=Jc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function jp(e){return e*cs}function Kp(e){return e*Ss}function $p(e){return(e&e-1)===0&&e!==0}function Zp(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.LN2))}function Jp(e){return Math.pow(2,Math.floor(Math.log(e)/Math.LN2))}function Qp(e,t,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((t+i)/2),c=o((t+i)/2),h=s((t-i)/2),f=o((t-i)/2),p=s((i-t)/2),v=o((i-t)/2);switch(r){case"XYX":e.set(a*c,l*h,l*f,a*u);break;case"YZY":e.set(l*f,a*c,l*h,a*u);break;case"ZXZ":e.set(l*h,l*f,a*c,a*u);break;case"XZX":e.set(a*c,l*v,l*p,a*u);break;case"YXY":e.set(l*p,a*c,l*v,a*u);break;case"ZYZ":e.set(l*v,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function br(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw new Error("Invalid component type.")}}function ke(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw new Error("Invalid component type.")}}const tm={DEG2RAD:cs,RAD2DEG:Ss,generateUUID:Wr,clamp:Oe,euclideanModulo:pc,mapLinear:Bp,inverseLerp:zp,lerp:us,damp:Hp,pingpong:Vp,smoothstep:Gp,smootherstep:kp,randInt:Wp,randFloat:Xp,randFloatSpread:qp,seededRandom:Yp,degToRad:jp,radToDeg:Kp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Jp,setQuaternionFromProperEuler:Qp,normalize:ke,denormalize:br};class Kt{constructor(t=0,n=0){Kt.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,i=this.y,r=t.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y;return n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,n,i,r,s,o,a,l,u){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,u)}set(t,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(t,n,i){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],f=i[2],p=i[5],v=i[8],S=r[0],m=r[3],d=r[6],A=r[1],E=r[4],b=r[7],I=r[2],R=r[5],C=r[8];return s[0]=o*S+a*A+l*I,s[3]=o*m+a*E+l*R,s[6]=o*d+a*b+l*C,s[1]=u*S+c*A+h*I,s[4]=u*m+c*E+h*R,s[7]=u*d+c*b+h*C,s[2]=f*S+p*A+v*I,s[5]=f*m+p*E+v*R,s[8]=f*d+p*b+v*C,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=c*o-a*u,f=a*l-c*s,p=u*s-o*l,v=n*h+i*f+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/v;return t[0]=h*S,t[1]=(r*u-c*i)*S,t[2]=(a*i-r*o)*S,t[3]=f*S,t[4]=(c*n-r*l)*S,t[5]=(r*s-a*n)*S,t[6]=p*S,t[7]=(i*l-u*n)*S,t[8]=(o*n-i*s)*S,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+t,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(t,n){return this.premultiply(ca.makeScale(t,n)),this}rotate(t){return this.premultiply(ca.makeRotation(-t)),this}translate(t,n){return this.premultiply(ca.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<9;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ca=new jt;function ef(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function ys(e){return document.createElementNS("http://www.w3.org/1999/xhtml",e)}function em(){const e=ys("canvas");return e.style.display="block",e}const Qc={};function Eo(e){e in Qc||(Qc[e]=!0,console.warn(e))}function nm(e,t,n){return new Promise(function(i,r){function s(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:r();break;case e.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function im(e){const t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rm(e){const t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const tu=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),eu=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zr={[Ni]:{transfer:Po,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e,fromReference:e=>e},[Un]:{transfer:de,primaries:Lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:e=>e.convertSRGBToLinear(),fromReference:e=>e.convertLinearToSRGB()},[qo]:{transfer:Po,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.applyMatrix3(eu),fromReference:e=>e.applyMatrix3(tu)},[dc]:{transfer:de,primaries:Do,luminanceCoefficients:[.2289,.6917,.0793],toReference:e=>e.convertSRGBToLinear().applyMatrix3(eu),fromReference:e=>e.applyMatrix3(tu).convertLinearToSRGB()}},sm=new Set([Ni,qo]),ae={enabled:!0,_workingColorSpace:Ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(e){if(!sm.has(e))throw new Error(`Unsupported working color space, "${e}".`);this._workingColorSpace=e},convert:function(e,t,n){if(this.enabled===!1||t===n||!t||!n)return e;const i=Zr[t].toReference,r=Zr[n].fromReference;return r(i(e))},fromWorkingColorSpace:function(e,t){return this.convert(e,this._workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this._workingColorSpace)},getPrimaries:function(e){return Zr[e].primaries},getTransfer:function(e){return e===Si?Po:Zr[e].transfer},getLuminanceCoefficients:function(e,t=this._workingColorSpace){return e.fromArray(Zr[t].luminanceCoefficients)}};function Ir(e){return e<.04045?e*.0773993808:Math.pow(e*.9478672986+.0521327014,2.4)}function ua(e){return e<.0031308?e*12.92:1.055*Math.pow(e,.41666)-.055}let ur;class om{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ur===void 0&&(ur=ys("canvas")),ur.width=t.width,ur.height=t.height;const i=ur.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=ys("canvas");n.width=t.width,n.height=t.height;const i=n.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ir(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(t.data){const n=t.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ir(n[i]/255)*255):n[i]=Ir(n[i]);return{data:n,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let am=0;class nf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Wr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ha(r[o].image)):s.push(ha(r[o]))}else s=ha(r);i.url=s}return n||(t.images[this.uuid]=i),i}}function ha(e){return typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap?om.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lm=0;class He extends lr{constructor(t=He.DEFAULT_IMAGE,n=He.DEFAULT_MAPPING,i=yi,r=yi,s=gn,o=Ei,a=bn,l=ei,u=He.DEFAULT_ANISOTROPY,c=Si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=Wr(),this.name="",this.source=new nf(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dl:t.x=t.x-Math.floor(t.x);break;case yi:t.x=t.x<0?0:1;break;case pl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dl:t.y=t.y-Math.floor(t.y);break;case yi:t.y=t.y<0?0:1;break;case pl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}He.DEFAULT_IMAGE=null;He.DEFAULT_MAPPING=kh;He.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,n=0,i=0,r=1){Me.prototype.isVector4=!0,this.x=t,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,i,r){return this.x=t,this.y=n,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,i,r,s;const l=t.elements,u=l[0],c=l[4],h=l[8],f=l[1],p=l[5],v=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(c-f)<.01&&Math.abs(h-S)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+f)<.1&&Math.abs(h+S)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const E=(u+1)/2,b=(p+1)/2,I=(d+1)/2,R=(c+f)/4,C=(h+S)/4,D=(v+m)/4;return E>b&&E>I?E<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(E),r=R/i,s=C/i):b>I?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=D/r):I<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(I),i=C/s,r=D/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-v)*(m-v)+(h-S)*(h-S)+(f-c)*(f-c));return Math.abs(A)<.001&&(A=1),this.x=(m-v)/A,this.y=(h-S)/A,this.z=(f-c)/A,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this.w=Math.max(t.w,Math.min(n.w,this.w)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this.w=Math.max(t,Math.min(n,this.w)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this.w=t.w+(n.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cm extends lr{constructor(t=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=1,this.scissor=new Me(0,0,t,n),this.scissorTest=!1,this.viewport=new Me(0,0,t,n);const r={width:t,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new He(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,n,i=1){if(this.width!==t||this.height!==n||this.depth!==i){this.width=t,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},t.texture.image);return this.texture.source=new nf(n),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class or extends cm{constructor(t=1,n=1,i={}){super(t,n,i),this.isWebGLRenderTarget=!0}}class rf extends He{constructor(t=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class um extends He{constructor(t=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:i,depth:r},this.magFilter=_n,this.minFilter=_n,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=i,this._w=r}static slerpFlat(t,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const f=s[o+0],p=s[o+1],v=s[o+2],S=s[o+3];if(a===0){t[n+0]=l,t[n+1]=u,t[n+2]=c,t[n+3]=h;return}if(a===1){t[n+0]=f,t[n+1]=p,t[n+2]=v,t[n+3]=S;return}if(h!==S||l!==f||u!==p||c!==v){let m=1-a;const d=l*f+u*p+c*v+h*S,A=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const I=Math.sqrt(E),R=Math.atan2(I,d*A);m=Math.sin(m*R)/I,a=Math.sin(a*R)/I}const b=a*A;if(l=l*m+f*b,u=u*m+p*b,c=c*m+v*b,h=h*m+S*b,m===1-a){const I=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=I,u*=I,c*=I,h*=I}}t[n]=l,t[n+1]=u,t[n+2]=c,t[n+3]=h}static multiplyQuaternionsFlat(t,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],f=s[o+1],p=s[o+2],v=s[o+3];return t[n]=a*v+c*h+l*p-u*f,t[n+1]=l*v+c*f+u*h-a*p,t[n+2]=u*v+c*p+a*f-l*h,t[n+3]=c*v-a*h-l*f-u*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,i,r){return this._x=t,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),f=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=f*c*h+u*p*v,this._y=u*p*h-f*c*v,this._z=u*c*v+f*p*h,this._w=u*c*h-f*p*v;break;case"YXZ":this._x=f*c*h+u*p*v,this._y=u*p*h-f*c*v,this._z=u*c*v-f*p*h,this._w=u*c*h+f*p*v;break;case"ZXY":this._x=f*c*h-u*p*v,this._y=u*p*h+f*c*v,this._z=u*c*v+f*p*h,this._w=u*c*h-f*p*v;break;case"ZYX":this._x=f*c*h-u*p*v,this._y=u*p*h+f*c*v,this._z=u*c*v-f*p*h,this._w=u*c*h+f*p*v;break;case"YZX":this._x=f*c*h+u*p*v,this._y=u*p*h+f*c*v,this._z=u*c*v-f*p*h,this._w=u*c*h-f*p*v;break;case"XZY":this._x=f*c*h-u*p*v,this._y=u*p*h-f*c*v,this._z=u*c*v+f*p*h,this._w=u*c*h+f*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const i=n/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],f=i+a+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let i=t.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Oe(this.dot(t),-1,1)))}rotateTowards(t,n){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const i=t._x,r=t._y,s=t._z,o=t._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(t,n){if(n===0)return this;if(n===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,f=Math.sin(n*c)/u;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,n,i){return this.copy(t).slerp(n,i)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(n),s*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(t=0,n=0,i=0){j.prototype.isVector3=!0,this.x=t,this.y=n,this.z=i}set(t,n,i){return i===void 0&&(i=this.z),this.x=t,this.y=n,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(nu.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(nu.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const n=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,l=t.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=Math.max(t.x,Math.min(n.x,this.x)),this.y=Math.max(t.y,Math.min(n.y,this.y)),this.z=Math.max(t.z,Math.min(n.z,this.z)),this}clampScalar(t,n){return this.x=Math.max(t,Math.min(n,this.x)),this.y=Math.max(t,Math.min(n,this.y)),this.z=Math.max(t,Math.min(n,this.z)),this}clampLength(t,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,i){return this.x=t.x+(n.x-t.x)*i,this.y=t.y+(n.y-t.y)*i,this.z=t.z+(n.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const i=t.x,r=t.y,s=t.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const i=t.dot(this)/n;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return fa.copy(this).projectOnVector(t),this.sub(fa)}reflect(t){return this.sub(fa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(t)/n;return Math.acos(Oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return n*n+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,i){const r=Math.sin(n)*t;return this.x=r*Math.sin(i),this.y=Math.cos(n)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,i){return this.x=t*Math.sin(n),this.y=i,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(t),this.y=n,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new j,nu=new ar;class Is{constructor(t=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,i=t.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,i=t.length;n<i;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Vs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Vs.copy(i.boundingBox)),Vs.applyMatrix4(t.matrixWorld),this.union(Vs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,i;return t.normal.x>0?(n=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),n<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Jr),Gs.subVectors(this.max,Jr),hr.subVectors(t.a,Jr),fr.subVectors(t.b,Jr),dr.subVectors(t.c,Jr),ci.subVectors(fr,hr),ui.subVectors(dr,fr),zi.subVectors(hr,dr);let n=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-zi.z,zi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,zi.z,0,-zi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-zi.y,zi.x,0];return!da(n,hr,fr,dr,Gs)||(n=[1,0,0,0,1,0,0,0,1],!da(n,hr,fr,dr,Gs))?!1:(ks.crossVectors(ci,ui),n=[ks.x,ks.y,ks.z],da(n,hr,fr,dr,Gs))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Hn=[new j,new j,new j,new j,new j,new j,new j,new j],Sn=new j,Vs=new Is,hr=new j,fr=new j,dr=new j,ci=new j,ui=new j,zi=new j,Jr=new j,Gs=new j,ks=new j,Hi=new j;function da(e,t,n,i,r){for(let s=0,o=e.length-3;s<=o;s+=3){Hi.fromArray(e,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=t.dot(Hi),u=n.dot(Hi),c=i.dot(Hi);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const hm=new Is,Qr=new j,pa=new j;class Xr{constructor(t=new j,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const i=this.center;n!==void 0?i.copy(n):hm.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const i=this.center.distanceToSquared(t);return n.copy(t),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);const n=Qr.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Qr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(pa)),this.expandByPoint(Qr.copy(t.center).sub(pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new j,ma=new j,Ws=new j,hi=new j,ga=new j,Xs=new j,_a=new j;class Us{constructor(t=new j,n=new j(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Vn.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,n),Vn.distanceToSquared(t))}distanceSqToSegment(t,n,i,r){ma.copy(t).add(n).multiplyScalar(.5),Ws.copy(n).sub(t).normalize(),hi.copy(this.origin).sub(ma);const s=t.distanceTo(n)*.5,o=-this.direction.dot(Ws),a=hi.dot(this.direction),l=-hi.dot(Ws),u=hi.lengthSq(),c=Math.abs(1-o*o);let h,f,p,v;if(c>0)if(h=o*l-a,f=o*a-l,v=s*c,h>=0)if(f>=-v)if(f<=v){const S=1/c;h*=S,f*=S,p=h*(h+o*f+2*a)+f*(o*h+f+2*l)+u}else f=s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f=-s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;else f<=-v?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u):f<=v?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+u):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+u);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),p=-h*h+f*(f+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ma).addScaledVector(Ws,f),p}intersectSphere(t,n){Vn.subVectors(t.center,this.origin);const i=Vn.dot(this.direction),r=Vn.dot(Vn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/n;return i>=0?i:null}intersectPlane(t,n){const i=this.distanceToPlane(t);return i===null?null:this.at(i,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,f=this.origin;return u>=0?(i=(t.min.x-f.x)*u,r=(t.max.x-f.x)*u):(i=(t.max.x-f.x)*u,r=(t.min.x-f.x)*u),c>=0?(s=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,n,i,r,s){ga.subVectors(n,t),Xs.subVectors(i,t),_a.crossVectors(ga,Xs);let o=this.direction.dot(_a),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hi.subVectors(this.origin,t);const l=a*this.direction.dot(Xs.crossVectors(hi,Xs));if(l<0)return null;const u=a*this.direction.dot(ga.cross(hi));if(u<0||l+u>o)return null;const c=-a*hi.dot(_a);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ge{constructor(t,n,i,r,s,o,a,l,u,c,h,f,p,v,S,m){ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,i,r,s,o,a,l,u,c,h,f,p,v,S,m)}set(t,n,i,r,s,o,a,l,u,c,h,f,p,v,S,m){const d=this.elements;return d[0]=t,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=h,d[14]=f,d[3]=p,d[7]=v,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ge().fromArray(this.elements)}copy(t){const n=this.elements,i=t.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(t){const n=this.elements,i=t.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,i){return t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,n,i){return this.set(t.x,n.x,i.x,0,t.y,n.y,i.y,0,t.z,n.z,i.z,0,0,0,0,1),this}extractRotation(t){const n=this.elements,i=t.elements,r=1/pr.setFromMatrixColumn(t,0).length(),s=1/pr.setFromMatrixColumn(t,1).length(),o=1/pr.setFromMatrixColumn(t,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const f=o*c,p=o*h,v=a*c,S=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+v*u,n[5]=f-S*u,n[9]=-a*l,n[2]=S-f*u,n[6]=v+p*u,n[10]=o*l}else if(t.order==="YXZ"){const f=l*c,p=l*h,v=u*c,S=u*h;n[0]=f+S*a,n[4]=v*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-v,n[6]=S+f*a,n[10]=o*l}else if(t.order==="ZXY"){const f=l*c,p=l*h,v=u*c,S=u*h;n[0]=f-S*a,n[4]=-o*h,n[8]=v+p*a,n[1]=p+v*a,n[5]=o*c,n[9]=S-f*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(t.order==="ZYX"){const f=o*c,p=o*h,v=a*c,S=a*h;n[0]=l*c,n[4]=v*u-p,n[8]=f*u+S,n[1]=l*h,n[5]=S*u+f,n[9]=p*u-v,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*u,v=a*l,S=a*u;n[0]=l*c,n[4]=S-f*h,n[8]=v*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+v,n[10]=f-S*h}else if(t.order==="XZY"){const f=o*l,p=o*u,v=a*l,S=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=f*h+S,n[5]=o*c,n[9]=p*h-v,n[2]=v*h-p,n[6]=a*c,n[10]=S*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(fm,t,dm)}lookAt(t,n,i){const r=this.elements;return rn.subVectors(t,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),fi.crossVectors(i,rn),fi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),fi.crossVectors(i,rn)),fi.normalize(),qs.crossVectors(rn,fi),r[0]=fi.x,r[4]=qs.x,r[8]=rn.x,r[1]=fi.y,r[5]=qs.y,r[9]=rn.y,r[2]=fi.z,r[6]=qs.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const i=t.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],f=i[9],p=i[13],v=i[2],S=i[6],m=i[10],d=i[14],A=i[3],E=i[7],b=i[11],I=i[15],R=r[0],C=r[4],D=r[8],k=r[12],x=r[1],y=r[5],L=r[9],W=r[13],Z=r[2],it=r[6],H=r[10],K=r[14],X=r[3],ut=r[7],dt=r[11],pt=r[15];return s[0]=o*R+a*x+l*Z+u*X,s[4]=o*C+a*y+l*it+u*ut,s[8]=o*D+a*L+l*H+u*dt,s[12]=o*k+a*W+l*K+u*pt,s[1]=c*R+h*x+f*Z+p*X,s[5]=c*C+h*y+f*it+p*ut,s[9]=c*D+h*L+f*H+p*dt,s[13]=c*k+h*W+f*K+p*pt,s[2]=v*R+S*x+m*Z+d*X,s[6]=v*C+S*y+m*it+d*ut,s[10]=v*D+S*L+m*H+d*dt,s[14]=v*k+S*W+m*K+d*pt,s[3]=A*R+E*x+b*Z+I*X,s[7]=A*C+E*y+b*it+I*ut,s[11]=A*D+E*L+b*H+I*dt,s[15]=A*k+E*W+b*K+I*pt,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],l=t[9],u=t[13],c=t[2],h=t[6],f=t[10],p=t[14],v=t[3],S=t[7],m=t[11],d=t[15];return v*(+s*l*h-r*u*h-s*a*f+i*u*f+r*a*p-i*l*p)+S*(+n*l*p-n*u*f+s*o*f-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*h+n*a*f+r*o*h-i*o*f+i*l*c)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=n,r[14]=i),this}invert(){const t=this.elements,n=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],l=t[6],u=t[7],c=t[8],h=t[9],f=t[10],p=t[11],v=t[12],S=t[13],m=t[14],d=t[15],A=h*m*u-S*f*u+S*l*p-a*m*p-h*l*d+a*f*d,E=v*f*u-c*m*u-v*l*p+o*m*p+c*l*d-o*f*d,b=c*S*u-v*h*u+v*a*p-o*S*p-c*a*d+o*h*d,I=v*h*l-c*S*l-v*a*f+o*S*f+c*a*m-o*h*m,R=n*A+i*E+r*b+s*I;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return t[0]=A*C,t[1]=(S*f*s-h*m*s-S*r*p+i*m*p+h*r*d-i*f*d)*C,t[2]=(a*m*s-S*l*s+S*r*u-i*m*u-a*r*d+i*l*d)*C,t[3]=(h*l*s-a*f*s-h*r*u+i*f*u+a*r*p-i*l*p)*C,t[4]=E*C,t[5]=(c*m*s-v*f*s+v*r*p-n*m*p-c*r*d+n*f*d)*C,t[6]=(v*l*s-o*m*s-v*r*u+n*m*u+o*r*d-n*l*d)*C,t[7]=(o*f*s-c*l*s+c*r*u-n*f*u-o*r*p+n*l*p)*C,t[8]=b*C,t[9]=(v*h*s-c*S*s-v*i*p+n*S*p+c*i*d-n*h*d)*C,t[10]=(o*S*s-v*a*s+v*i*u-n*S*u-o*i*d+n*a*d)*C,t[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*C,t[12]=I*C,t[13]=(c*S*r-v*h*r+v*i*f-n*S*f-c*i*m+n*h*m)*C,t[14]=(v*a*r-o*S*r-v*i*l+n*S*l+o*i*m-n*a*m)*C,t[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*f+n*a*f)*C,this}scale(t){const n=this.elements,i=t.x,r=t.y,s=t.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(t,n,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),i=Math.sin(t);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=t.x,a=t.y,l=t.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(t,n,i){return this.set(t,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,n,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,n,r,1,0,0,0,0,1),this}compose(t,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,f=s*u,p=s*c,v=s*h,S=o*c,m=o*h,d=a*h,A=l*u,E=l*c,b=l*h,I=i.x,R=i.y,C=i.z;return r[0]=(1-(S+d))*I,r[1]=(p+b)*I,r[2]=(v-E)*I,r[3]=0,r[4]=(p-b)*R,r[5]=(1-(f+d))*R,r[6]=(m+A)*R,r[7]=0,r[8]=(v+E)*C,r[9]=(m-A)*C,r[10]=(1-(f+S))*C,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,n,i){const r=this.elements;let s=pr.set(r[0],r[1],r[2]).length();const o=pr.set(r[4],r[5],r[6]).length(),a=pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],yn.copy(this);const u=1/s,c=1/o,h=1/a;return yn.elements[0]*=u,yn.elements[1]*=u,yn.elements[2]*=u,yn.elements[4]*=c,yn.elements[5]*=c,yn.elements[6]*=c,yn.elements[8]*=h,yn.elements[9]*=h,yn.elements[10]*=h,n.setFromRotationMatrix(yn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,n,i,r,s,o,a=Qn){const l=this.elements,u=2*s/(n-t),c=2*s/(i-r),h=(n+t)/(n-t),f=(i+r)/(i-r);let p,v;if(a===Qn)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Uo)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,n,i,r,s,o,a=Qn){const l=this.elements,u=1/(n-t),c=1/(i-r),h=1/(o-s),f=(n+t)*u,p=(i+r)*c;let v,S;if(a===Qn)v=(o+s)*h,S=-2*h;else if(a===Uo)v=s*h,S=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const n=this.elements,i=t.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(t,n=0){for(let i=0;i<16;i++)this.elements[i]=t[i+n];return this}toArray(t=[],n=0){const i=this.elements;return t[n]=i[0],t[n+1]=i[1],t[n+2]=i[2],t[n+3]=i[3],t[n+4]=i[4],t[n+5]=i[5],t[n+6]=i[6],t[n+7]=i[7],t[n+8]=i[8],t[n+9]=i[9],t[n+10]=i[10],t[n+11]=i[11],t[n+12]=i[12],t[n+13]=i[13],t[n+14]=i[14],t[n+15]=i[15],t}}const pr=new j,yn=new ge,fm=new j(0,0,0),dm=new j(1,1,1),fi=new j,qs=new j,rn=new j,iu=new ge,ru=new ar;class ni{constructor(t=0,n=0,i=0,r=ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,i,r=this._order){return this._x=t,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Oe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,i){return iu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(iu,n,i)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return ru.setFromEuler(this),this.setFromQuaternion(ru,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ni.DEFAULT_ORDER="XYZ";class mc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pm=0;const su=new j,mr=new ar,Gn=new ge,Ys=new j,ts=new j,mm=new j,gm=new ar,ou=new j(1,0,0),au=new j(0,1,0),lu=new j(0,0,1),cu={type:"added"},_m={type:"removed"},gr={type:"childadded",child:null},va={type:"childremoved",child:null};class Ke extends lr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new j,n=new ni,i=new ar,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ge},normalMatrix:{value:new jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.multiply(mr),this}rotateOnWorldAxis(t,n){return mr.setFromAxisAngle(t,n),this.quaternion.premultiply(mr),this}rotateX(t){return this.rotateOnAxis(ou,t)}rotateY(t){return this.rotateOnAxis(au,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,n){return su.copy(t).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(ou,t)}translateY(t){return this.translateOnAxis(au,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,n,i){t.isVector3?Ys.copy(t):Ys.set(t,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ts.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(ts,Ys,this.up):Gn.lookAt(Ys,ts,this.up),this.quaternion.setFromRotationMatrix(Gn),r&&(Gn.extractRotation(r.matrixWorld),mr.setFromRotationMatrix(Gn),this.quaternion.premultiply(mr.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),gr.child=t,this.dispatchEvent(gr),gr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(_m),va.child=t,this.dispatchEvent(va),va.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),gr.child=t,this.dispatchEvent(gr),gr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,n);if(o!==void 0)return o}}getObjectsByProperty(t,n,i=[]){this[t]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,n,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,t,mm),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ts,gm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(t)}updateWorldMatrix(t,n){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",i={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(t.materials,this.material[l]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(t.animations,l))}}if(n){const a=o(t.geometries),l=o(t.materials),u=o(t.textures),c=o(t.images),h=o(t.shapes),f=o(t.skeletons),p=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Ke.DEFAULT_UP=new j(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new j,kn=new j,xa=new j,Wn=new j,_r=new j,vr=new j,uu=new j,Ma=new j,Sa=new j,ya=new j,Ea=new Me,Ta=new Me,ba=new Me;class Tn{constructor(t=new j,n=new j,i=new j){this.a=t,this.b=n,this.c=i}static getNormal(t,n,i,r){r.subVectors(i,n),En.subVectors(t,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,n,i,r,s){En.subVectors(r,n),kn.subVectors(i,n),xa.subVectors(t,n);const o=En.dot(En),a=En.dot(kn),l=En.dot(xa),u=kn.dot(kn),c=kn.dot(xa),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,p=(u*l-a*c)*f,v=(o*c-a*l)*f;return s.set(1-p-v,v,p)}static containsPoint(t,n,i,r){return this.getBarycoord(t,n,i,r,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,n,i,r,s,o,a,l){return this.getBarycoord(t,n,i,r,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Wn.x),l.addScaledVector(o,Wn.y),l.addScaledVector(a,Wn.z),l)}static getInterpolatedAttribute(t,n,i,r,s,o){return Ea.setScalar(0),Ta.setScalar(0),ba.setScalar(0),Ea.fromBufferAttribute(t,n),Ta.fromBufferAttribute(t,i),ba.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Ea,s.x),o.addScaledVector(Ta,s.y),o.addScaledVector(ba,s.z),o}static isFrontFacing(t,n,i,r){return En.subVectors(i,n),kn.subVectors(t,n),En.cross(kn).dot(r)<0}set(t,n,i){return this.a.copy(t),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(t,n,i,r){return this.a.copy(t[n]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,n,i,r){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return En.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),En.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return Tn.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,i,r,s){return Tn.getInterpolation(t,this.a,this.b,this.c,n,i,r,s)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const i=this.a,r=this.b,s=this.c;let o,a;_r.subVectors(r,i),vr.subVectors(s,i),Ma.subVectors(t,i);const l=_r.dot(Ma),u=vr.dot(Ma);if(l<=0&&u<=0)return n.copy(i);Sa.subVectors(t,r);const c=_r.dot(Sa),h=vr.dot(Sa);if(c>=0&&h<=c)return n.copy(r);const f=l*h-c*u;if(f<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(_r,o);ya.subVectors(t,s);const p=_r.dot(ya),v=vr.dot(ya);if(v>=0&&p<=v)return n.copy(s);const S=p*u-l*v;if(S<=0&&u>=0&&v<=0)return a=u/(u-v),n.copy(i).addScaledVector(vr,a);const m=c*v-p*h;if(m<=0&&h-c>=0&&p-v>=0)return uu.subVectors(s,r),a=(h-c)/(h-c+(p-v)),n.copy(r).addScaledVector(uu,a);const d=1/(m+S+f);return o=S*d,a=f*d,n.copy(i).addScaledVector(_r,o).addScaledVector(vr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},js={h:0,s:0,l:0};function Aa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}class Jt{constructor(t,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,i)}set(t,n,i){if(n===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,n,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,n),this}setRGB(t,n,i,r=ae.workingColorSpace){return this.r=t,this.g=n,this.b=i,ae.toWorkingColorSpace(this,r),this}setHSL(t,n,i,r=ae.workingColorSpace){if(t=pc(t,1),n=Oe(n,0,1),i=Oe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Aa(o,s,t+1/3),this.g=Aa(o,s,t),this.b=Aa(o,s,t-1/3)}return ae.toWorkingColorSpace(this,r),this}setStyle(t,n=Un){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Un){const i=sf[t.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ir(t.r),this.g=Ir(t.g),this.b=Ir(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Un){return ae.fromWorkingColorSpace(Ne.copy(this),t),Math.round(Oe(Ne.r*255,0,255))*65536+Math.round(Oe(Ne.g*255,0,255))*256+Math.round(Oe(Ne.b*255,0,255))}getHexString(t=Un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=ae.workingColorSpace){ae.fromWorkingColorSpace(Ne.copy(this),n);const i=Ne.r,r=Ne.g,s=Ne.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=c,t}getRGB(t,n=ae.workingColorSpace){return ae.fromWorkingColorSpace(Ne.copy(this),n),t.r=Ne.r,t.g=Ne.g,t.b=Ne.b,t}getStyle(t=Un){ae.fromWorkingColorSpace(Ne.copy(this),t);const n=Ne.r,i=Ne.g,r=Ne.b;return t!==Un?`color(${t} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,n,i){return this.getHSL(di),this.setHSL(di.h+t,di.s+n,di.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,i){return this.r=t.r+(n.r-t.r)*i,this.g=t.g+(n.g-t.g)*i,this.b=t.b+(n.b-t.b)*i,this}lerpHSL(t,n){this.getHSL(di),t.getHSL(js);const i=us(di.h,js.h,n),r=us(di.s,js.s,n),s=us(di.l,js.l,n);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ne=new Jt;Jt.NAMES=sf;let vm=0;class qr extends lr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Lr,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cr,this.stencilZFail=cr,this.stencilZPass=cr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const i=t[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Lr&&(i.blending=this.blending),this.side!==Pi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nl&&(i.blendSrc=this.blendSrc),this.blendDst!==il&&(i.blendDst=this.blendDst),this.blendEquation!==Ji&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class gc extends qr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Te=new j,Ks=new Kt;class nn{constructor(t,n,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=i,this.usage=$c,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,i){t*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=n.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ks.fromBufferAttribute(this,n),Ks.applyMatrix3(t),this.setXY(n,Ks.x,Ks.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Te.fromBufferAttribute(this,n),Te.applyMatrix3(t),this.setXYZ(n,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let n=0,i=this.count;n<i;n++)Te.fromBufferAttribute(this,n),Te.applyMatrix4(t),this.setXYZ(n,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let n=0,i=this.count;n<i;n++)Te.fromBufferAttribute(this,n),Te.applyNormalMatrix(t),this.setXYZ(n,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let n=0,i=this.count;n<i;n++)Te.fromBufferAttribute(this,n),Te.transformDirection(t),this.setXYZ(n,Te.x,Te.y,Te.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let i=this.array[t*this.itemSize+n];return this.normalized&&(i=br(i,this.array)),i}setComponent(t,n,i){return this.normalized&&(i=ke(i,this.array)),this.array[t*this.itemSize+n]=i,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=br(n,this.array)),n}setX(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=br(n,this.array)),n}setY(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=br(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=br(n,this.array)),n}setW(t,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,i){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),i=ke(i,this.array)),this.array[t+0]=n,this.array[t+1]=i,this}setXYZ(t,n,i,r){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,n,i,r,s){return t*=this.itemSize,this.normalized&&(n=ke(n,this.array),i=ke(i,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[t+0]=n,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class of extends nn{constructor(t,n,i){super(new Uint16Array(t),n,i)}}class af extends nn{constructor(t,n,i){super(new Uint32Array(t),n,i)}}class An extends nn{constructor(t,n,i){super(new Float32Array(t),n,i)}}let xm=0;const fn=new ge,wa=new Ke,xr=new j,sn=new Is,es=new Is,Pe=new j;class cn extends lr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?af:of)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,i=0){this.groups.push({start:t,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new jt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,n,i){return fn.makeTranslation(t,n,i),this.applyMatrix4(fn),this}scale(t,n,i){return fn.makeScale(t,n,i),this.applyMatrix4(fn),this}lookAt(t){return wa.lookAt(t),wa.updateMatrix(),this.applyMatrix4(wa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xr).negate(),this.translate(xr.x,xr.y,xr.z),this}setFromPoints(t){const n=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new An(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pe.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Pe),Pe.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Pe)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xr);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];es.setFromBufferAttribute(a),this.morphTargetsRelative?(Pe.addVectors(sn.min,es.min),sn.expandByPoint(Pe),Pe.addVectors(sn.max,es.max),sn.expandByPoint(Pe)):(sn.expandByPoint(es.min),sn.expandByPoint(es.max))}sn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Pe.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Pe));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pe.fromBufferAttribute(a,u),l&&(xr.fromBufferAttribute(t,u),Pe.add(xr)),r=Math.max(r,i.distanceToSquared(Pe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new j,l[D]=new j;const u=new j,c=new j,h=new j,f=new Kt,p=new Kt,v=new Kt,S=new j,m=new j;function d(D,k,x){u.fromBufferAttribute(i,D),c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,x),f.fromBufferAttribute(s,D),p.fromBufferAttribute(s,k),v.fromBufferAttribute(s,x),c.sub(u),h.sub(u),p.sub(f),v.sub(f);const y=1/(p.x*v.y-v.x*p.y);isFinite(y)&&(S.copy(c).multiplyScalar(v.y).addScaledVector(h,-p.y).multiplyScalar(y),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(y),a[D].add(S),a[k].add(S),a[x].add(S),l[D].add(m),l[k].add(m),l[x].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:t.count}]);for(let D=0,k=A.length;D<k;++D){const x=A[D],y=x.start,L=x.count;for(let W=y,Z=y+L;W<Z;W+=3)d(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const E=new j,b=new j,I=new j,R=new j;function C(D){I.fromBufferAttribute(r,D),R.copy(I);const k=a[D];E.copy(k),E.sub(I.multiplyScalar(I.dot(k))).normalize(),b.crossVectors(R,k);const y=b.dot(l[D])<0?-1:1;o.setXYZW(D,E.x,E.y,E.z,y)}for(let D=0,k=A.length;D<k;++D){const x=A[D],y=x.start,L=x.count;for(let W=y,Z=y+L;W<Z;W+=3)C(t.getX(W+0)),C(t.getX(W+1)),C(t.getX(W+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new j,s=new j,o=new j,a=new j,l=new j,u=new j,c=new j,h=new j;if(t)for(let f=0,p=t.count;f<p;f+=3){const v=t.getX(f+0),S=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,S),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,i=t.count;n<i;n++)Pe.fromBufferAttribute(t,n),Pe.normalize(),t.setXYZ(n,Pe.x,Pe.y,Pe.z)}toNonIndexed(){function t(a,l){const u=a.array,c=a.itemSize,h=a.normalized,f=new u.constructor(l.length*c);let p=0,v=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*c;for(let d=0;d<c;d++)f[v++]=u[p++]}return new nn(f,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new cn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=t(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const f=u[c],p=t(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,f=u.length;h<f;h++){const p=u[h];c.push(p.toJSON(t.data))}c.length>0&&(r[l]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(n));const r=t.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=t.morphAttributes;for(const u in s){const c=[],h=s[u];for(let f=0,p=h.length;f<p;f++)c.push(h[f].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hu=new ge,Vi=new Us,$s=new Xr,fu=new j,Zs=new j,Js=new j,Qs=new j,Ca=new j,to=new j,du=new j,eo=new j;class Bn extends Ke{constructor(t=new cn,n=new gc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(Ca.fromBufferAttribute(h,t),o?to.addScaledVector(Ca,c):to.addScaledVector(Ca.sub(n),c))}n.add(to)}return n}raycast(t,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),$s.copy(i.boundingSphere),$s.applyMatrix4(s),Vi.copy(t.ray).recast(t.near),!($s.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere($s,fu)===null||Vi.origin.distanceToSquared(fu)>(t.far-t.near)**2))&&(hu.copy(s).invert(),Vi.copy(t.ray).applyMatrix4(hu),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,n,Vi)))}_computeIntersections(t,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],d=o[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,I=E;b<I;b+=3){const R=a.getX(b),C=a.getX(b+1),D=a.getX(b+2);r=no(this,d,t,i,u,c,h,R,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const A=a.getX(m),E=a.getX(m+1),b=a.getX(m+2);r=no(this,o,t,i,u,c,h,A,E,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,S=f.length;v<S;v++){const m=f[v],d=o[m.materialIndex],A=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=A,I=E;b<I;b+=3){const R=b,C=b+1,D=b+2;r=no(this,d,t,i,u,c,h,R,C,D),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const v=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=v,d=S;m<d;m+=3){const A=m,E=m+1,b=m+2;r=no(this,o,t,i,u,c,h,A,E,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Mm(e,t,n,i,r,s,o,a){let l;if(t.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,t.side===Pi,a),l===null)return null;eo.copy(a),eo.applyMatrix4(e.matrixWorld);const u=n.ray.origin.distanceTo(eo);return u<n.near||u>n.far?null:{distance:u,point:eo.clone(),object:e}}function no(e,t,n,i,r,s,o,a,l,u){e.getVertexPosition(a,Zs),e.getVertexPosition(l,Js),e.getVertexPosition(u,Qs);const c=Mm(e,t,n,i,Zs,Js,Qs,du);if(c){const h=new j;Tn.getBarycoord(du,Zs,Js,Qs,h),r&&(c.uv=Tn.getInterpolatedAttribute(r,a,l,u,h,new Kt)),s&&(c.uv1=Tn.getInterpolatedAttribute(s,a,l,u,h,new Kt)),o&&(c.normal=Tn.getInterpolatedAttribute(o,a,l,u,h,new j),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new j,materialIndex:0};Tn.getNormal(Zs,Js,Qs,f.normal),c.face=f,c.barycoord=h}return c}class Ns extends cn{constructor(t=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let f=0,p=0;v("z","y","x",-1,-1,i,n,t,o,s,0),v("z","y","x",1,-1,i,n,-t,o,s,1),v("x","z","y",1,1,t,i,n,r,o,2),v("x","z","y",1,-1,t,i,-n,r,o,3),v("x","y","z",1,-1,t,n,i,r,s,4),v("x","y","z",-1,-1,t,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new An(u,3)),this.setAttribute("normal",new An(c,3)),this.setAttribute("uv",new An(h,2));function v(S,m,d,A,E,b,I,R,C,D,k){const x=b/C,y=I/D,L=b/2,W=I/2,Z=R/2,it=C+1,H=D+1;let K=0,X=0;const ut=new j;for(let dt=0;dt<H;dt++){const pt=dt*y-W;for(let gt=0;gt<it;gt++){const zt=gt*x-L;ut[S]=zt*A,ut[m]=pt*E,ut[d]=Z,u.push(ut.x,ut.y,ut.z),ut[S]=0,ut[m]=0,ut[d]=R>0?1:-1,c.push(ut.x,ut.y,ut.z),h.push(gt/C),h.push(1-dt/D),K+=1}}for(let dt=0;dt<D;dt++)for(let pt=0;pt<C;pt++){const gt=f+pt+it*dt,zt=f+pt+it*(dt+1),nt=f+(pt+1)+it*(dt+1),tt=f+(pt+1)+it*dt;l.push(gt,zt,tt),l.push(zt,nt,tt),X+=6}a.addGroup(p,X,k),p+=X,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ns(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function kr(e){const t={};for(const n in e){t[n]={};for(const i in e[n]){const r=e[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][i]=null):t[n][i]=r.clone():Array.isArray(r)?t[n][i]=r.slice():t[n][i]=r}}return t}function Xe(e){const t={};for(let n=0;n<e.length;n++){const i=kr(e[n]);for(const r in i)t[r]=i[r]}return t}function Sm(e){const t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function lf(e){const t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const ym={clone:kr,merge:Xe};var Em=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Tm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends qr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Em,this.fragmentShader=Tm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=kr(t.uniforms),this.uniformsGroups=Sm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class cf extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Qn}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new j,pu=new Kt,mu=new Kt;class pn extends cf{constructor(t=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Ss*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ss*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,i){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-t/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(pi.x,pi.y).multiplyScalar(-t/pi.z)}getViewSize(t,n){return this.getViewBounds(t,pu,mu),n.subVectors(mu,pu)}setViewOffset(t,n,i,r,s,o){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(cs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Mr=-90,Sr=1;class bm extends Ke{constructor(t,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Mr,Sr,t,n);r.layers=this.layers,this.add(r);const s=new pn(Mr,Sr,t,n);s.layers=this.layers,this.add(s);const o=new pn(Mr,Sr,t,n);o.layers=this.layers,this.add(o);const a=new pn(Mr,Sr,t,n);a.layers=this.layers,this.add(a);const l=new pn(Mr,Sr,t,n);l.layers=this.layers,this.add(l);const u=new pn(Mr,Sr,t,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(t===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of n)this.add(u),u.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(n,s),t.setRenderTarget(i,1,r),t.render(n,o),t.setRenderTarget(i,2,r),t.render(n,a),t.setRenderTarget(i,3,r),t.render(n,l),t.setRenderTarget(i,4,r),t.render(n,u),i.texture.generateMipmaps=S,t.setRenderTarget(i,5,r),t.render(n,c),t.setRenderTarget(h,f,p),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class uf extends He{constructor(t,n,i,r,s,o,a,l,u,c){t=t!==void 0?t:[],n=n!==void 0?n:zr,super(t,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Am extends or{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];this.texture=new uf(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:gn}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ns(5,5,5),s=new Li({name:"CubemapFromEquirect",uniforms:kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:bi});s.uniforms.tEquirect.value=n;const o=new Bn(r,s),a=n.minFilter;return n.minFilter===Ei&&(n.minFilter=gn),new bm(1,10,this).update(t,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,n,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(n,i,r);t.setRenderTarget(s)}}const Ra=new j,wm=new j,Cm=new jt;class _i{constructor(t=new j(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,i,r){return this.normal.set(t,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,i){const r=Ra.subVectors(i,n).cross(wm.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const i=t.delta(Ra),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const n=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return n<0&&i>0||i<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const i=n||Cm.getNormalMatrix(t),r=this.coplanarPoint(Ra).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new Xr,io=new j;class hf{constructor(t=new _i,n=new _i,i=new _i,r=new _i,s=new _i,o=new _i){this.planes=[t,n,i,r,s,o]}set(t,n,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,n=Qn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],f=r[7],p=r[8],v=r[9],S=r[10],m=r[11],d=r[12],A=r[13],E=r[14],b=r[15];if(i[0].setComponents(l-s,f-u,m-p,b-d).normalize(),i[1].setComponents(l+s,f+u,m+p,b+d).normalize(),i[2].setComponents(l+o,f+c,m+v,b+A).normalize(),i[3].setComponents(l-o,f-c,m-v,b-A).normalize(),i[4].setComponents(l-a,f-h,m-S,b-E).normalize(),n===Qn)i[5].setComponents(l+a,f+h,m+S,b+E).normalize();else if(n===Uo)i[5].setComponents(a,h,S,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(t){return Gi.center.set(0,0,0),Gi.radius=.7071067811865476,Gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(t){const n=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(io.x=r.normal.x>0?t.max.x:t.min.x,io.y=r.normal.y>0?t.max.y:t.min.y,io.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let e=null,t=!1,n=null,i=null;function r(s,o){n(s,o),i=e.requestAnimationFrame(r)}return{start:function(){t!==!0&&n!==null&&(i=e.requestAnimationFrame(r),t=!0)},stop:function(){e.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){n=s},setContext:function(s){e=s}}}function Rm(e){const t=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,f=e.createBuffer();e.bindBuffer(l,f),e.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=e.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=e.HALF_FLOAT:p=e.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=e.SHORT;else if(u instanceof Uint32Array)p=e.UNSIGNED_INT;else if(u instanceof Int32Array)p=e.INT;else if(u instanceof Int8Array)p=e.BYTE;else if(u instanceof Uint8Array)p=e.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=e.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(e.bindBuffer(u,a),h.length===0)e.bufferSubData(u,0,c);else{h.sort((p,v)=>p.start-v.start);let f=0;for(let p=1;p<h.length;p++){const v=h[f],S=h[p];S.start<=v.start+v.count+1?v.count=Math.max(v.count,S.start+S.count-v.start):(++f,h[f]=S)}h.length=f+1;for(let p=0,v=h.length;p<v;p++){const S=h[p];e.bufferSubData(u,S.start*c.BYTES_PER_ELEMENT,c,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(e.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=t.get(a);if(u===void 0)t.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Yo extends cn{constructor(t=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:i,heightSegments:r};const s=t/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=t/a,f=n/l,p=[],v=[],S=[],m=[];for(let d=0;d<c;d++){const A=d*f-o;for(let E=0;E<u;E++){const b=E*h-s;v.push(b,-A,0),S.push(0,0,1),m.push(E/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let A=0;A<a;A++){const E=A+u*d,b=A+u*(d+1),I=A+1+u*(d+1),R=A+1+u*d;p.push(E,b,R),p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new An(v,3)),this.setAttribute("normal",new An(S,3)),this.setAttribute("uv",new An(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lm=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Im=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fm=`#ifdef USE_AOMAP
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
#endif`,Om=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,km=`#ifdef USE_IRIDESCENCE
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
#endif`,Wm=`#ifdef USE_BUMPMAP
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
#endif`,Xm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$m=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Qm=`#define PI 3.141592653589793
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
} // validated`,tg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eg=`vec3 transformedNormal = objectNormal;
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
#endif`,ng=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ig=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,og="gl_FragColor = linearToOutputTexel( gl_FragColor );",ag=`
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
}`,lg=`#ifdef USE_ENVMAP
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
#endif`,cg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ug=`#ifdef USE_ENVMAP
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
#endif`,hg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fg=`#ifdef USE_ENVMAP
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
#endif`,dg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_g=`#ifdef USE_GRADIENTMAP
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
}`,vg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sg=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,yg=`#ifdef USE_ENVMAP
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
#endif`,Eg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wg=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,Cg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,Rg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Pg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ig=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ug=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ng=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Og=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zg=`#if defined( USE_POINTS_UV )
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
#endif`,Hg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,qg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,jg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$g=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jg=`#ifdef USE_NORMALMAP
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
#endif`,Qg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,t_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,e_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,r_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,s_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,u_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,h_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,f_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,d_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,__=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,M_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,S_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,E_=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,T_=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,b_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,L_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N_=`#include <common>
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
}`,F_=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,O_=`#define DISTANCE
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
}`,B_=`#define DISTANCE
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
}`,z_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,H_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,V_=`uniform float scale;
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
}`,G_=`uniform vec3 diffuse;
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
}`,k_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define LAMBERT
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
}`,Y_=`#define MATCAP
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
}`,j_=`#define MATCAP
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
}`,K_=`#define NORMAL
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
}`,$_=`#define NORMAL
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
}`,Z_=`#define PHONG
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
}`,J_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,t0=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,e0=`#define TOON
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
}`,n0=`#define TOON
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
}`,i0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,o0=`uniform vec3 color;
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
}`,a0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,l0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Pm,alphahash_pars_fragment:Lm,alphamap_fragment:Dm,alphamap_pars_fragment:Im,alphatest_fragment:Um,alphatest_pars_fragment:Nm,aomap_fragment:Fm,aomap_pars_fragment:Om,batching_pars_vertex:Bm,batching_vertex:zm,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Gm,iridescence_fragment:km,bumpmap_pars_fragment:Wm,clipping_planes_fragment:Xm,clipping_planes_pars_fragment:qm,clipping_planes_pars_vertex:Ym,clipping_planes_vertex:jm,color_fragment:Km,color_pars_fragment:$m,color_pars_vertex:Zm,color_vertex:Jm,common:Qm,cube_uv_reflection_fragment:tg,defaultnormal_vertex:eg,displacementmap_pars_vertex:ng,displacementmap_vertex:ig,emissivemap_fragment:rg,emissivemap_pars_fragment:sg,colorspace_fragment:og,colorspace_pars_fragment:ag,envmap_fragment:lg,envmap_common_pars_fragment:cg,envmap_pars_fragment:ug,envmap_pars_vertex:hg,envmap_physical_pars_fragment:yg,envmap_vertex:fg,fog_vertex:dg,fog_pars_vertex:pg,fog_fragment:mg,fog_pars_fragment:gg,gradientmap_pars_fragment:_g,lightmap_pars_fragment:vg,lights_lambert_fragment:xg,lights_lambert_pars_fragment:Mg,lights_pars_begin:Sg,lights_toon_fragment:Eg,lights_toon_pars_fragment:Tg,lights_phong_fragment:bg,lights_phong_pars_fragment:Ag,lights_physical_fragment:wg,lights_physical_pars_fragment:Cg,lights_fragment_begin:Rg,lights_fragment_maps:Pg,lights_fragment_end:Lg,logdepthbuf_fragment:Dg,logdepthbuf_pars_fragment:Ig,logdepthbuf_pars_vertex:Ug,logdepthbuf_vertex:Ng,map_fragment:Fg,map_pars_fragment:Og,map_particle_fragment:Bg,map_particle_pars_fragment:zg,metalnessmap_fragment:Hg,metalnessmap_pars_fragment:Vg,morphinstance_vertex:Gg,morphcolor_vertex:kg,morphnormal_vertex:Wg,morphtarget_pars_vertex:Xg,morphtarget_vertex:qg,normal_fragment_begin:Yg,normal_fragment_maps:jg,normal_pars_fragment:Kg,normal_pars_vertex:$g,normal_vertex:Zg,normalmap_pars_fragment:Jg,clearcoat_normal_fragment_begin:Qg,clearcoat_normal_fragment_maps:t_,clearcoat_pars_fragment:e_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:r_,premultiplied_alpha_fragment:s_,project_vertex:o_,dithering_fragment:a_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:u_,shadowmap_pars_fragment:h_,shadowmap_pars_vertex:f_,shadowmap_vertex:d_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:__,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:M_,tonemapping_fragment:S_,tonemapping_pars_fragment:y_,transmission_fragment:E_,transmission_pars_fragment:T_,uv_pars_fragment:b_,uv_pars_vertex:A_,uv_vertex:w_,worldpos_vertex:C_,background_vert:R_,background_frag:P_,backgroundCube_vert:L_,backgroundCube_frag:D_,cube_vert:I_,cube_frag:U_,depth_vert:N_,depth_frag:F_,distanceRGBA_vert:O_,distanceRGBA_frag:B_,equirect_vert:z_,equirect_frag:H_,linedashed_vert:V_,linedashed_frag:G_,meshbasic_vert:k_,meshbasic_frag:W_,meshlambert_vert:X_,meshlambert_frag:q_,meshmatcap_vert:Y_,meshmatcap_frag:j_,meshnormal_vert:K_,meshnormal_frag:$_,meshphong_vert:Z_,meshphong_frag:J_,meshphysical_vert:Q_,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:r0,shadow_vert:s0,shadow_frag:o0,sprite_vert:a0,sprite_frag:l0},wt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Fn={basic:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Xe([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Xe([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Xe([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Xe([wt.points,wt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Xe([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Xe([wt.common,wt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Xe([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Xe([wt.sprite,wt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Xe([wt.common,wt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Xe([wt.lights,wt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Fn.physical={uniforms:Xe([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ro={r:0,b:0,g:0},ki=new ni,c0=new ge;function u0(e,t,n,i,r,s,o){const a=new Jt(0);let l=s===!0?0:1,u,c,h=null,f=0,p=null;function v(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?n:t).get(E)),E}function S(A){let E=!1;const b=v(A);b===null?d(a,l):b&&b.isColor&&(d(b,1),E=!0);const I=e.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(e.autoClear||E)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function m(A,E){const b=v(E);b&&(b.isCubeTexture||b.mapping===Xo)?(c===void 0&&(c=new Bn(new Ns(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:kr(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(I,R,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),ki.copy(E.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),c.material.uniforms.envMap.value=b,c.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(c0.makeRotationFromEuler(ki)),c.material.toneMapped=ae.getTransfer(b.colorSpace)!==de,(h!==b||f!==b.version||p!==e.toneMapping)&&(c.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Bn(new Yo(2,2),new Li({name:"BackgroundMaterial",uniforms:kr(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,u.material.toneMapped=ae.getTransfer(b.colorSpace)!==de,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||f!==b.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,h=b,f=b.version,p=e.toneMapping),u.layers.enableAll(),A.unshift(u,u.geometry,u.material,0,0,null))}function d(A,E){A.getRGB(ro,lf(e)),i.buffers.color.setClear(ro.r,ro.g,ro.b,E,o)}return{getClearColor:function(){return a},setClearColor:function(A,E=1){a.set(A),l=E,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,d(a,l)},render:S,addToRenderList:m}}function h0(e,t){const n=e.getParameter(e.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(x,y,L,W,Z){let it=!1;const H=h(W,L,y);s!==H&&(s=H,u(s.object)),it=p(x,W,L,Z),it&&v(x,W,L,Z),Z!==null&&t.update(Z,e.ELEMENT_ARRAY_BUFFER),(it||o)&&(o=!1,b(x,y,L,W),Z!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function l(){return e.createVertexArray()}function u(x){return e.bindVertexArray(x)}function c(x){return e.deleteVertexArray(x)}function h(x,y,L){const W=L.wireframe===!0;let Z=i[x.id];Z===void 0&&(Z={},i[x.id]=Z);let it=Z[y.id];it===void 0&&(it={},Z[y.id]=it);let H=it[W];return H===void 0&&(H=f(l()),it[W]=H),H}function f(x){const y=[],L=[],W=[];for(let Z=0;Z<n;Z++)y[Z]=0,L[Z]=0,W[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:L,attributeDivisors:W,object:x,attributes:{},index:null}}function p(x,y,L,W){const Z=s.attributes,it=y.attributes;let H=0;const K=L.getAttributes();for(const X in K)if(K[X].location>=0){const dt=Z[X];let pt=it[X];if(pt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),dt===void 0||dt.attribute!==pt||pt&&dt.data!==pt.data)return!0;H++}return s.attributesNum!==H||s.index!==W}function v(x,y,L,W){const Z={},it=y.attributes;let H=0;const K=L.getAttributes();for(const X in K)if(K[X].location>=0){let dt=it[X];dt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor));const pt={};pt.attribute=dt,dt&&dt.data&&(pt.data=dt.data),Z[X]=pt,H++}s.attributes=Z,s.attributesNum=H,s.index=W}function S(){const x=s.newAttributes;for(let y=0,L=x.length;y<L;y++)x[y]=0}function m(x){d(x,0)}function d(x,y){const L=s.newAttributes,W=s.enabledAttributes,Z=s.attributeDivisors;L[x]=1,W[x]===0&&(e.enableVertexAttribArray(x),W[x]=1),Z[x]!==y&&(e.vertexAttribDivisor(x,y),Z[x]=y)}function A(){const x=s.newAttributes,y=s.enabledAttributes;for(let L=0,W=y.length;L<W;L++)y[L]!==x[L]&&(e.disableVertexAttribArray(L),y[L]=0)}function E(x,y,L,W,Z,it,H){H===!0?e.vertexAttribIPointer(x,y,L,Z,it):e.vertexAttribPointer(x,y,L,W,Z,it)}function b(x,y,L,W){S();const Z=W.attributes,it=L.getAttributes(),H=y.defaultAttributeValues;for(const K in it){const X=it[K];if(X.location>=0){let ut=Z[K];if(ut===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(ut=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(ut=x.instanceColor)),ut!==void 0){const dt=ut.normalized,pt=ut.itemSize,gt=t.get(ut);if(gt===void 0)continue;const zt=gt.buffer,nt=gt.type,tt=gt.bytesPerElement,lt=nt===e.INT||nt===e.UNSIGNED_INT||ut.gpuType===ac;if(ut.isInterleavedBufferAttribute){const ht=ut.data,St=ht.stride,At=ut.offset;if(ht.isInstancedInterleavedBuffer){for(let Pt=0;Pt<X.locationSize;Pt++)d(X.location+Pt,ht.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Pt=0;Pt<X.locationSize;Pt++)m(X.location+Pt);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let Pt=0;Pt<X.locationSize;Pt++)E(X.location+Pt,pt/X.locationSize,nt,dt,St*tt,(At+pt/X.locationSize*Pt)*tt,lt)}else{if(ut.isInstancedBufferAttribute){for(let ht=0;ht<X.locationSize;ht++)d(X.location+ht,ut.meshPerAttribute);x.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let ht=0;ht<X.locationSize;ht++)m(X.location+ht);e.bindBuffer(e.ARRAY_BUFFER,zt);for(let ht=0;ht<X.locationSize;ht++)E(X.location+ht,pt/X.locationSize,nt,dt,pt*tt,pt/X.locationSize*ht*tt,lt)}}else if(H!==void 0){const dt=H[K];if(dt!==void 0)switch(dt.length){case 2:e.vertexAttrib2fv(X.location,dt);break;case 3:e.vertexAttrib3fv(X.location,dt);break;case 4:e.vertexAttrib4fv(X.location,dt);break;default:e.vertexAttrib1fv(X.location,dt)}}}}A()}function I(){D();for(const x in i){const y=i[x];for(const L in y){const W=y[L];for(const Z in W)c(W[Z].object),delete W[Z];delete y[L]}delete i[x]}}function R(x){if(i[x.id]===void 0)return;const y=i[x.id];for(const L in y){const W=y[L];for(const Z in W)c(W[Z].object),delete W[Z];delete y[L]}delete i[x.id]}function C(x){for(const y in i){const L=i[y];if(L[x.id]===void 0)continue;const W=L[x.id];for(const Z in W)c(W[Z].object),delete W[Z];delete L[x.id]}}function D(){k(),o=!0,s!==r&&(s=r,u(s.object))}function k(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:k,dispose:I,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:S,enableAttribute:m,disableUnusedAttributes:A}}function f0(e,t,n){let i;function r(u){i=u}function s(u,c){e.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(e.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let v=0;v<h;v++)p+=c[v];n.update(p,i,1)}function l(u,c,h,f){if(h===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<u.length;v++)o(u[v],c[v],f[v]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,f,0,h);let v=0;for(let S=0;S<h;S++)v+=c[S];for(let S=0;S<f.length;S++)n.update(v,i,f[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function d0(e,t,n,i){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");r=e.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==bn&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Ds&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ei&&i.convert(C)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Jn&&!D)}function l(C){if(C==="highp"){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),v=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=e.getParameter(e.MAX_TEXTURE_SIZE),m=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),d=e.getParameter(e.MAX_VERTEX_ATTRIBS),A=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),E=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),I=v>0,R=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:v,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:I,maxSamples:R}}function p0(e){const t=this;let n=null,i=0,r=!1,s=!1;const o=new _i,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||i!==0||r;return r=f,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=c(h,f,0)},this.setState=function(h,f,p){const v=h.clippingPlanes,S=h.clipIntersection,m=h.clipShadows,d=e.get(h);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const A=s?0:i,E=A*4;let b=d.clippingState||null;l.value=b,b=c(v,f,E,p);for(let I=0;I!==E;++I)b[I]=n[I];d.clippingState=b,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=A}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(h,f,p,v){const S=h!==null?h.length:0;let m=null;if(S!==0){if(m=l.value,v!==!0||m===null){const d=p+S*4,A=f.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,b=p;E!==S;++E,b+=4)o.copy(h[E]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=S,t.numIntersection=0,m}}function m0(e){let t=new WeakMap;function n(o,a){return a===hl?o.mapping=zr:a===fl&&(o.mapping=Hr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===hl||a===fl)if(t.has(o)){const l=t.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Am(l.height);return u.fromEquirectangularTexture(e,o),t.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class g0 extends cf{constructor(t=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rr=4,gu=[.125,.215,.35,.446,.526,.582],Qi=20,Pa=new g0,_u=new Jt;let La=null,Da=0,Ia=0,Ua=!1;const Ki=(1+Math.sqrt(5))/2,yr=1/Ki,vu=[new j(-Ki,yr,0),new j(Ki,yr,0),new j(-yr,0,Ki),new j(yr,0,Ki),new j(0,Ki,-yr),new j(0,Ki,yr),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class xu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,n=0,i=.1,r=100){La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Su(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(La,Da,Ia),this._renderer.xr.enabled=Ua,t.scissorTest=!1,so(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===zr||t.mapping===Hr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),La=this._renderer.getRenderTarget(),Da=this._renderer.getActiveCubeFace(),Ia=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:Ds,format:bn,colorSpace:Ni,depthBuffer:!1},r=Mu(t,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mu(t,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_0(s)),this._blurMaterial=v0(s,t,n)}return r}_compileMaterial(t){const n=new Bn(this._lodPlanes[0],t);this._renderer.compile(n,Pa)}_sceneToCubeUV(t,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,f=c.toneMapping;c.getClearColor(_u),c.toneMapping=Ai,c.autoClear=!1;const p=new gc({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),v=new Bn(new Ns,p);let S=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,S=!0):(p.color.copy(_u),S=!0);for(let d=0;d<6;d++){const A=d%3;A===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):A===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const E=this._cubeSize;so(r,A*E,d>2?E:0,E,E),c.setRenderTarget(r),S&&c.render(v,a),c.render(t,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=f,c.autoClear=h,t.background=m}_textureToCubeUV(t,n){const i=this._renderer,r=t.mapping===zr||t.mapping===Hr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=yu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Su());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;so(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Pa)}_applyPMREM(t){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=vu[(r-s-1)%vu.length];this._blur(t,s-1,s,o,a)}n.autoClear=i}_blur(t,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,n,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Bn(this._lodPlanes[r],u),f=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),S=s/v,m=isFinite(s)?1+Math.floor(c*S):Qi;m>Qi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const d=[];let A=0;for(let C=0;C<Qi;++C){const D=C/S,k=Math.exp(-D*D/2);d.push(k),C===0?A+=k:C<m&&(A+=2*k)}for(let C=0;C<d.length;C++)d[C]=d[C]/A;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:E}=this;f.dTheta.value=v,f.mipInt.value=E-i;const b=this._sizeLods[r],I=3*b*(r>E-Rr?r-E+Rr:0),R=4*(this._cubeSize-b);so(n,I,R,3*b,2*b),l.setRenderTarget(n),l.render(h,Pa)}}function _0(e){const t=[],n=[],i=[];let r=e;const s=e-Rr+1+gu.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>e-Rr?l=gu[o-e+Rr-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,f=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,v=6,S=3,m=2,d=1,A=new Float32Array(S*v*p),E=new Float32Array(m*v*p),b=new Float32Array(d*v*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,D=R>2?0:-1,k=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];A.set(k,S*v*R),E.set(f,m*v*R);const x=[R,R,R,R,R,R];b.set(x,d*v*R)}const I=new cn;I.setAttribute("position",new nn(A,S)),I.setAttribute("uv",new nn(E,m)),I.setAttribute("faceIndex",new nn(b,d)),t.push(I),r>Rr&&r--}return{lodPlanes:t,sizeLods:n,sigmas:i}}function Mu(e,t,n){const i=new or(e,t,n);return i.texture.mapping=Xo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function so(e,t,n,i,r){e.viewport.set(t,n,i,r),e.scissor.set(t,n,i,r)}function v0(e,t,n){const i=new Float32Array(Qi),r=new j(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_c(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Su(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

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
		`,blending:bi,depthTest:!1,depthWrite:!1})}function yu(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function _c(){return`

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
	`}function x0(e){let t=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===hl||l===fl,c=l===zr||l===Hr;if(u||c){let h=t.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new xu(e)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new xu(e)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function M0(e){const t={};function n(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=e.getExtension("WEBGL_depth_texture")||e.getExtension("MOZ_WEBGL_depth_texture")||e.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=e.getExtension("WEBGL_compressed_texture_s3tc")||e.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=e.getExtension(i)}return t[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Eo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function S0(e,t,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const v in f.attributes)t.remove(f.attributes[v]);for(const v in f.morphAttributes){const S=f.morphAttributes[v];for(let m=0,d=S.length;m<d;m++)t.remove(S[m])}f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const v in f)t.update(f[v],e.ARRAY_BUFFER);const p=h.morphAttributes;for(const v in p){const S=p[v];for(let m=0,d=S.length;m<d;m++)t.update(S[m],e.ARRAY_BUFFER)}}function u(h){const f=[],p=h.index,v=h.attributes.position;let S=0;if(p!==null){const A=p.array;S=p.version;for(let E=0,b=A.length;E<b;E+=3){const I=A[E+0],R=A[E+1],C=A[E+2];f.push(I,R,R,C,C,I)}}else if(v!==void 0){const A=v.array;S=v.version;for(let E=0,b=A.length/3-1;E<b;E+=3){const I=E+0,R=E+1,C=E+2;f.push(I,R,R,C,C,I)}}else return;const m=new(ef(f)?af:of)(f,1);m.version=S;const d=s.get(h);d&&t.remove(d),s.set(h,m)}function c(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function y0(e,t,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){e.drawElements(i,p,s,f*o),n.update(p,i,1)}function u(f,p,v){v!==0&&(e.drawElementsInstanced(i,p,s,f*o,v),n.update(p,i,v))}function c(f,p,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,v);let m=0;for(let d=0;d<v;d++)m+=p[d];n.update(m,i,1)}function h(f,p,v,S){if(v===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)u(f[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,S,0,v);let d=0;for(let A=0;A<v;A++)d+=p[A];for(let A=0;A<S.length;A++)n.update(d,i,S[A])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function E0(e){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case e.TRIANGLES:n.triangles+=a*(s/3);break;case e.LINES:n.lines+=a*(s/2);break;case e.LINE_STRIP:n.lines+=a*(s-1);break;case e.LINE_LOOP:n.lines+=a*s;break;case e.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:r,update:i}}function T0(e,t,n){const i=new WeakMap,r=new Me;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let x=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const v=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let b=0;v===!0&&(b=1),S===!0&&(b=2),m===!0&&(b=3);let I=a.attributes.position.count*b,R=1;I>t.maxTextureSize&&(R=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const C=new Float32Array(I*R*4*h),D=new rf(C,I,R,h);D.type=Jn,D.needsUpdate=!0;const k=b*4;for(let y=0;y<h;y++){const L=d[y],W=A[y],Z=E[y],it=I*R*4*y;for(let H=0;H<L.count;H++){const K=H*k;v===!0&&(r.fromBufferAttribute(L,H),C[it+K+0]=r.x,C[it+K+1]=r.y,C[it+K+2]=r.z,C[it+K+3]=0),S===!0&&(r.fromBufferAttribute(W,H),C[it+K+4]=r.x,C[it+K+5]=r.y,C[it+K+6]=r.z,C[it+K+7]=0),m===!0&&(r.fromBufferAttribute(Z,H),C[it+K+8]=r.x,C[it+K+9]=r.y,C[it+K+10]=r.z,C[it+K+11]=Z.itemSize===4?r.w:1)}}f={count:h,texture:D,size:new Kt(I,R)},i.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(e,"morphTexture",o.morphTexture,n);else{let v=0;for(let m=0;m<u.length;m++)v+=u[m];const S=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(e,"morphTargetBaseInfluence",S),l.getUniforms().setValue(e,"morphTargetInfluences",u)}l.getUniforms().setValue(e,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(e,"morphTargetsTextureSize",f.size)}return{update:s}}function b0(e,t,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=t.get(l,c);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,e.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,e.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class df extends He{constructor(t,n,i,r,s,o,a,l,u,c=Dr){if(c!==Dr&&c!==Gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Dr&&(i=sr),i===void 0&&c===Gr&&(i=Vr),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:t,height:n},this.magFilter=a!==void 0?a:_n,this.minFilter=l!==void 0?l:_n,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const pf=new He,Eu=new df(1,1),mf=new rf,gf=new um,_f=new uf,Tu=[],bu=[],Au=new Float32Array(16),wu=new Float32Array(9),Cu=new Float32Array(4);function Yr(e,t,n){const i=e[0];if(i<=0||i>0)return e;const r=t*n;let s=Tu[r];if(s===void 0&&(s=new Float32Array(r),Tu[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=n,e[o].toArray(s,a)}return s}function we(e,t){if(e.length!==t.length)return!1;for(let n=0,i=e.length;n<i;n++)if(e[n]!==t[n])return!1;return!0}function Ce(e,t){for(let n=0,i=t.length;n<i;n++)e[n]=t[n]}function jo(e,t){let n=bu[t];n===void 0&&(n=new Int32Array(t),bu[t]=n);for(let i=0;i!==t;++i)n[i]=e.allocateTextureUnit();return n}function A0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function w0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2fv(this.addr,t),Ce(n,t)}}function C0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(we(n,t))return;e.uniform3fv(this.addr,t),Ce(n,t)}}function R0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4fv(this.addr,t),Ce(n,t)}}function P0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Ce(n,t)}else{if(we(n,i))return;Cu.set(i),e.uniformMatrix2fv(this.addr,!1,Cu),Ce(n,i)}}function L0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Ce(n,t)}else{if(we(n,i))return;wu.set(i),e.uniformMatrix3fv(this.addr,!1,wu),Ce(n,i)}}function D0(e,t){const n=this.cache,i=t.elements;if(i===void 0){if(we(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Ce(n,t)}else{if(we(n,i))return;Au.set(i),e.uniformMatrix4fv(this.addr,!1,Au),Ce(n,i)}}function I0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function U0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2iv(this.addr,t),Ce(n,t)}}function N0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3iv(this.addr,t),Ce(n,t)}}function F0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4iv(this.addr,t),Ce(n,t)}}function O0(e,t){const n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function B0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(we(n,t))return;e.uniform2uiv(this.addr,t),Ce(n,t)}}function z0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(we(n,t))return;e.uniform3uiv(this.addr,t),Ce(n,t)}}function H0(e,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(we(n,t))return;e.uniform4uiv(this.addr,t),Ce(n,t)}}function V0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r);let s;this.type===e.SAMPLER_2D_SHADOW?(Eu.compareFunction=tf,s=Eu):s=pf,n.setTexture2D(t||s,r)}function G0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(t||gf,r)}function k0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(t||_f,r)}function W0(e,t,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(e.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(t||mf,r)}function X0(e){switch(e){case 5126:return A0;case 35664:return w0;case 35665:return C0;case 35666:return R0;case 35674:return P0;case 35675:return L0;case 35676:return D0;case 5124:case 35670:return I0;case 35667:case 35671:return U0;case 35668:case 35672:return N0;case 35669:case 35673:return F0;case 5125:return O0;case 36294:return B0;case 36295:return z0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return G0;case 35680:case 36300:case 36308:case 36293:return k0;case 36289:case 36303:case 36311:case 36292:return W0}}function q0(e,t){e.uniform1fv(this.addr,t)}function Y0(e,t){const n=Yr(t,this.size,2);e.uniform2fv(this.addr,n)}function j0(e,t){const n=Yr(t,this.size,3);e.uniform3fv(this.addr,n)}function K0(e,t){const n=Yr(t,this.size,4);e.uniform4fv(this.addr,n)}function $0(e,t){const n=Yr(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Z0(e,t){const n=Yr(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function J0(e,t){const n=Yr(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Q0(e,t){e.uniform1iv(this.addr,t)}function tv(e,t){e.uniform2iv(this.addr,t)}function ev(e,t){e.uniform3iv(this.addr,t)}function nv(e,t){e.uniform4iv(this.addr,t)}function iv(e,t){e.uniform1uiv(this.addr,t)}function rv(e,t){e.uniform2uiv(this.addr,t)}function sv(e,t){e.uniform3uiv(this.addr,t)}function ov(e,t){e.uniform4uiv(this.addr,t)}function av(e,t,n){const i=this.cache,r=t.length,s=jo(n,r);we(i,s)||(e.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)n.setTexture2D(t[o]||pf,s[o])}function lv(e,t,n){const i=this.cache,r=t.length,s=jo(n,r);we(i,s)||(e.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)n.setTexture3D(t[o]||gf,s[o])}function cv(e,t,n){const i=this.cache,r=t.length,s=jo(n,r);we(i,s)||(e.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)n.setTextureCube(t[o]||_f,s[o])}function uv(e,t,n){const i=this.cache,r=t.length,s=jo(n,r);we(i,s)||(e.uniform1iv(this.addr,s),Ce(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(t[o]||mf,s[o])}function hv(e){switch(e){case 5126:return q0;case 35664:return Y0;case 35665:return j0;case 35666:return K0;case 35674:return $0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return tv;case 35668:case 35672:return ev;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return rv;case 36295:return sv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return uv}}class fv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.setValue=X0(n.type)}}class dv{constructor(t,n,i){this.id=t,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=hv(n.type)}}class pv{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,n[a.id],i)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Ru(e,t){e.seq.push(t),e.map[t.id]=t}function mv(e,t,n){const i=e.name,r=i.length;for(Na.lastIndex=0;;){const s=Na.exec(i),o=Na.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Ru(n,u===void 0?new fv(a,e,t):new dv(a,e,t));break}else{let h=n.map[a];h===void 0&&(h=new pv(a),Ru(n,h)),n=h}}}class To{constructor(t,n){this.seq=[],this.map={};const i=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(n,r),o=t.getUniformLocation(n,s.name);mv(s,o,this)}}setValue(t,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(t,i,r)}setOptional(t,n,i){const r=n[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,r)}}static seqWithValue(t,n){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in n&&i.push(o)}return i}}function Pu(e,t,n){const i=e.createShader(t);return e.shaderSource(i,n),e.compileShader(i),i}const gv=37297;let _v=0;function vv(e,t){const n=e.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function xv(e){const t=ae.getPrimaries(ae.workingColorSpace),n=ae.getPrimaries(e);let i;switch(t===n?i="":t===Do&&n===Lo?i="LinearDisplayP3ToLinearSRGB":t===Lo&&n===Do&&(i="LinearSRGBToLinearDisplayP3"),e){case Ni:case qo:return[i,"LinearTransferOETF"];case Un:case dc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",e),[i,"LinearTransferOETF"]}}function Lu(e,t,n){const i=e.getShaderParameter(t,e.COMPILE_STATUS),r=e.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+vv(e.getShaderSource(t),o)}else return r}function Mv(e,t){const n=xv(t);return`vec4 ${e}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Sv(e,t){let n;switch(t){case xp:n="Linear";break;case Mp:n="Reinhard";break;case Sp:n="Cineon";break;case yp:n="ACESFilmic";break;case Tp:n="AgX";break;case bp:n="Neutral";break;case Ep:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),n="Linear"}return"vec3 "+e+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const oo=new j;function yv(){ae.getLuminanceCoefficients(oo);const e=oo.x.toFixed(4),t=oo.y.toFixed(4),n=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${e}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ev(e){return[e.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",e.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function Tv(e){const t=[];for(const n in e){const i=e[n];i!==!1&&t.push("#define "+n+" "+i)}return t.join(`
`)}function bv(e,t){const n={},i=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=e.getActiveAttrib(t,r),o=s.name;let a=1;s.type===e.FLOAT_MAT2&&(a=2),s.type===e.FLOAT_MAT3&&(a=3),s.type===e.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:e.getAttribLocation(t,o),locationSize:a}}return n}function ss(e){return e!==""}function Du(e,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Iu(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Av=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(e){return e.replace(Av,Cv)}const wv=new Map;function Cv(e,t){let n=Yt[t];if(n===void 0){const i=wv.get(t);if(i!==void 0)n=Yt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Vl(n)}const Rv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uu(e){return e.replace(Rv,Pv)}function Pv(e,t,n,i){let r="";for(let s=parseInt(t);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Nu(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision==="highp"?t+=`
#define HIGH_PRECISION`:e.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:e.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lv(e){let t="SHADOWMAP_TYPE_BASIC";return e.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":e.shadowMapType===Jd?t="SHADOWMAP_TYPE_PCF_SOFT":e.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Dv(e){let t="ENVMAP_TYPE_CUBE";if(e.envMap)switch(e.envMapMode){case zr:case Hr:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Iv(e){let t="ENVMAP_MODE_REFLECTION";if(e.envMap)switch(e.envMapMode){case Hr:t="ENVMAP_MODE_REFRACTION";break}return t}function Uv(e){let t="ENVMAP_BLENDING_NONE";if(e.envMap)switch(e.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case _p:t="ENVMAP_BLENDING_MIX";break;case vp:t="ENVMAP_BLENDING_ADD";break}return t}function Nv(e){const t=e.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Fv(e,t,n,i){const r=e.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Lv(n),u=Dv(n),c=Iv(n),h=Uv(n),f=Nv(n),p=Ev(n),v=Tv(s),S=r.createProgram();let m,d,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(ss).join(`
`),d.length>0&&(d+=`
`)):(m=[Nu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),d=[Nu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ai?"#define TONE_MAPPING":"",n.toneMapping!==Ai?Yt.tonemapping_pars_fragment:"",n.toneMapping!==Ai?Sv("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,Mv("linearToOutputTexel",n.outputColorSpace),yv(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),o=Vl(o),o=Du(o,n),o=Iu(o,n),a=Vl(a),a=Du(a,n),a=Iu(a,n),o=Uu(o),a=Uu(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=A+m+o,b=A+d+a,I=Pu(r,r.VERTEX_SHADER,E),R=Pu(r,r.FRAGMENT_SHADER,b);r.attachShader(S,I),r.attachShader(S,R),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function C(y){if(e.debug.checkShaderErrors){const L=r.getProgramInfoLog(S).trim(),W=r.getShaderInfoLog(I).trim(),Z=r.getShaderInfoLog(R).trim();let it=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(it=!1,typeof e.debug.onShaderError=="function")e.debug.onShaderError(r,S,I,R);else{const K=Lu(r,I,"vertex"),X=Lu(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+L+`
`+K+`
`+X)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(W===""||Z==="")&&(H=!1);H&&(y.diagnostics={runnable:it,programLog:L,vertexShader:{log:W,prefix:m},fragmentShader:{log:Z,prefix:d}})}r.deleteShader(I),r.deleteShader(R),D=new To(r,S),k=bv(r,S)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let k;this.getAttributes=function(){return k===void 0&&C(this),k};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,gv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=_v++,this.cacheKey=t,this.usedTimes=1,this.program=S,this.vertexShader=I,this.fragmentShader=R,this}let Ov=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let i=n.get(t);return i===void 0&&(i=new Set,n.set(t,i)),i}_getShaderStage(t){const n=this.shaderCache;let i=n.get(t);return i===void 0&&(i=new zv(t),n.set(t,i)),i}}class zv{constructor(t){this.id=Ov++,this.code=t,this.usedTimes=0}}function Hv(e,t,n,i,r,s,o){const a=new mc,l=new Bv,u=new Set,c=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,p=r.vertexTextures;let v=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return u.add(x),x===0?"uv":`uv${x}`}function d(x,y,L,W,Z){const it=W.fog,H=Z.geometry,K=x.isMeshStandardMaterial?W.environment:null,X=(x.isMeshStandardMaterial?n:t).get(x.envMap||K),ut=X&&X.mapping===Xo?X.image.height:null,dt=S[x.type];x.precision!==null&&(v=r.getMaxPrecision(x.precision),v!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",v,"instead."));const pt=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,gt=pt!==void 0?pt.length:0;let zt=0;H.morphAttributes.position!==void 0&&(zt=1),H.morphAttributes.normal!==void 0&&(zt=2),H.morphAttributes.color!==void 0&&(zt=3);let nt,tt,lt,ht;if(dt){const re=Fn[dt];nt=re.vertexShader,tt=re.fragmentShader}else nt=x.vertexShader,tt=x.fragmentShader,l.update(x),lt=l.getVertexShaderID(x),ht=l.getFragmentShaderID(x);const St=e.getRenderTarget(),At=Z.isInstancedMesh===!0,Pt=Z.isBatchedMesh===!0,Gt=!!x.map,Ut=!!x.matcap,_=!!X,P=!!x.aoMap,B=!!x.lightMap,J=!!x.bumpMap,V=!!x.normalMap,$=!!x.displacementMap,Q=!!x.emissiveMap,M=!!x.metalnessMap,g=!!x.roughnessMap,w=x.anisotropy>0,z=x.clearcoat>0,N=x.dispersion>0,F=x.iridescence>0,ot=x.sheen>0,rt=x.transmission>0,ct=w&&!!x.anisotropyMap,vt=z&&!!x.clearcoatMap,at=z&&!!x.clearcoatNormalMap,ft=z&&!!x.clearcoatRoughnessMap,bt=F&&!!x.iridescenceMap,yt=F&&!!x.iridescenceThicknessMap,mt=ot&&!!x.sheenColorMap,Ht=ot&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,It=!!x.specularColorMap,U=!!x.specularIntensityMap,xt=rt&&!!x.transmissionMap,et=rt&&!!x.thicknessMap,st=!!x.gradientMap,Tt=!!x.alphaMap,Et=x.alphaTest>0,Wt=!!x.alphaHash,Qt=!!x.extensions;let ce=Ai;x.toneMapped&&(St===null||St.isXRRenderTarget===!0)&&(ce=e.toneMapping);const kt={shaderID:dt,shaderType:x.type,shaderName:x.name,vertexShader:nt,fragmentShader:tt,defines:x.defines,customVertexShaderID:lt,customFragmentShaderID:ht,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:v,batching:Pt,batchingColor:Pt&&Z._colorsTexture!==null,instancing:At,instancingColor:At&&Z.instanceColor!==null,instancingMorph:At&&Z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:St===null?e.outputColorSpace:St.isXRRenderTarget===!0?St.texture.colorSpace:Ni,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:Ut,envMap:_,envMapMode:_&&X.mapping,envMapCubeUVHeight:ut,aoMap:P,lightMap:B,bumpMap:J,normalMap:V,displacementMap:p&&$,emissiveMap:Q,normalMapObjectSpace:V&&x.normalMapType===Pp,normalMapTangentSpace:V&&x.normalMapType===Rp,metalnessMap:M,roughnessMap:g,anisotropy:w,anisotropyMap:ct,clearcoat:z,clearcoatMap:vt,clearcoatNormalMap:at,clearcoatRoughnessMap:ft,dispersion:N,iridescence:F,iridescenceMap:bt,iridescenceThicknessMap:yt,sheen:ot,sheenColorMap:mt,sheenRoughnessMap:Ht,specularMap:Rt,specularColorMap:It,specularIntensityMap:U,transmission:rt,transmissionMap:xt,thicknessMap:et,gradientMap:st,opaque:x.transparent===!1&&x.blending===Lr&&x.alphaToCoverage===!1,alphaMap:Tt,alphaTest:Et,alphaHash:Wt,combine:x.combine,mapUv:Gt&&m(x.map.channel),aoMapUv:P&&m(x.aoMap.channel),lightMapUv:B&&m(x.lightMap.channel),bumpMapUv:J&&m(x.bumpMap.channel),normalMapUv:V&&m(x.normalMap.channel),displacementMapUv:$&&m(x.displacementMap.channel),emissiveMapUv:Q&&m(x.emissiveMap.channel),metalnessMapUv:M&&m(x.metalnessMap.channel),roughnessMapUv:g&&m(x.roughnessMap.channel),anisotropyMapUv:ct&&m(x.anisotropyMap.channel),clearcoatMapUv:vt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:at&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:yt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:mt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(x.sheenRoughnessMap.channel),specularMapUv:Rt&&m(x.specularMap.channel),specularColorMapUv:It&&m(x.specularColorMap.channel),specularIntensityMapUv:U&&m(x.specularIntensityMap.channel),transmissionMapUv:xt&&m(x.transmissionMap.channel),thicknessMapUv:et&&m(x.thicknessMap.channel),alphaMapUv:Tt&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(V||w),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!H.attributes.uv&&(Gt||Tt),fog:!!it,useFog:x.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:Z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:zt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:e.shadowMap.enabled&&L.length>0,shadowMapType:e.shadowMap.type,toneMapping:ce,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&ae.getTransfer(x.map.colorSpace)===de,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Kn,flipSided:x.side===en,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Qt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qt&&x.extensions.multiDraw===!0||Pt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return kt.vertexUv1s=u.has(1),kt.vertexUv2s=u.has(2),kt.vertexUv3s=u.has(3),u.clear(),kt}function A(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)y.push(L),y.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(E(y,x),b(y,x),y.push(e.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function E(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.numLightProbes),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function b(x,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),x.push(a.mask)}function I(x){const y=S[x.type];let L;if(y){const W=Fn[y];L=ym.clone(W.uniforms)}else L=x.uniforms;return L}function R(x,y){let L;for(let W=0,Z=c.length;W<Z;W++){const it=c[W];if(it.cacheKey===y){L=it,++L.usedTimes;break}}return L===void 0&&(L=new Fv(e,y,x,s),c.push(L)),L}function C(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),x.destroy()}}function D(x){l.remove(x)}function k(){l.dispose()}return{getParameters:d,getProgramCacheKey:A,getUniforms:I,acquireProgram:R,releaseProgram:C,releaseShaderCache:D,programs:c,dispose:k}}function Vv(){let e=new WeakMap;function t(o){return e.has(o)}function n(o){let a=e.get(o);return a===void 0&&(a={},e.set(o,a)),a}function i(o){e.delete(o)}function r(o,a,l){e.get(o)[a]=l}function s(){e=new WeakMap}return{has:t,get:n,remove:i,update:r,dispose:s}}function Gv(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.material.id!==t.material.id?e.material.id-t.material.id:e.z!==t.z?e.z-t.z:e.id-t.id}function Fu(e,t){return e.groupOrder!==t.groupOrder?e.groupOrder-t.groupOrder:e.renderOrder!==t.renderOrder?e.renderOrder-t.renderOrder:e.z!==t.z?t.z-e.z:e.id-t.id}function Ou(){const e=[];let t=0;const n=[],i=[],r=[];function s(){t=0,n.length=0,i.length=0,r.length=0}function o(h,f,p,v,S,m){let d=e[t];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:v,renderOrder:h.renderOrder,z:S,group:m},e[t]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=v,d.renderOrder=h.renderOrder,d.z=S,d.group=m),t++,d}function a(h,f,p,v,S,m){const d=o(h,f,p,v,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(h,f,p,v,S,m){const d=o(h,f,p,v,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,f){n.length>1&&n.sort(h||Gv),i.length>1&&i.sort(f||Fu),r.length>1&&r.sort(f||Fu)}function c(){for(let h=t,f=e.length;h<f;h++){const p=e[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function kv(){let e=new WeakMap;function t(i,r){const s=e.get(i);let o;return s===void 0?(o=new Ou,e.set(i,[o])):r>=s.length?(o=new Ou,s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function Wv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new j,color:new Jt};break;case"SpotLight":n={position:new j,direction:new j,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":n={color:new Jt,position:new j,halfWidth:new j,halfHeight:new j};break}return e[t.id]=n,n}}}function Xv(){const e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return e[t.id]=n,n}}}let qv=0;function Yv(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+(t.map?1:0)-(e.map?1:0)}function jv(e){const t=new Wv,n=Xv(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new j);const r=new j,s=new ge,o=new ge;function a(u){let c=0,h=0,f=0;for(let k=0;k<9;k++)i.probe[k].set(0,0,0);let p=0,v=0,S=0,m=0,d=0,A=0,E=0,b=0,I=0,R=0,C=0;u.sort(Yv);for(let k=0,x=u.length;k<x;k++){const y=u[k],L=y.color,W=y.intensity,Z=y.distance,it=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)c+=L.r*W,h+=L.g*W,f+=L.b*W;else if(y.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(y.sh.coefficients[H],W);C++}else if(y.isDirectionalLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const K=y.shadow,X=n.get(y);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.directionalShadow[p]=X,i.directionalShadowMap[p]=it,i.directionalShadowMatrix[p]=y.shadow.matrix,A++}i.directional[p]=H,p++}else if(y.isSpotLight){const H=t.get(y);H.position.setFromMatrixPosition(y.matrixWorld),H.color.copy(L).multiplyScalar(W),H.distance=Z,H.coneCos=Math.cos(y.angle),H.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),H.decay=y.decay,i.spot[S]=H;const K=y.shadow;if(y.map&&(i.spotLightMap[I]=y.map,I++,K.updateMatrices(y),y.castShadow&&R++),i.spotLightMatrix[S]=K.matrix,y.castShadow){const X=n.get(y);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,i.spotShadow[S]=X,i.spotShadowMap[S]=it,b++}S++}else if(y.isRectAreaLight){const H=t.get(y);H.color.copy(L).multiplyScalar(W),H.halfWidth.set(y.width*.5,0,0),H.halfHeight.set(0,y.height*.5,0),i.rectArea[m]=H,m++}else if(y.isPointLight){const H=t.get(y);if(H.color.copy(y.color).multiplyScalar(y.intensity),H.distance=y.distance,H.decay=y.decay,y.castShadow){const K=y.shadow,X=n.get(y);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,i.pointShadow[v]=X,i.pointShadowMap[v]=it,i.pointShadowMatrix[v]=y.shadow.matrix,E++}i.point[v]=H,v++}else if(y.isHemisphereLight){const H=t.get(y);H.skyColor.copy(y.color).multiplyScalar(W),H.groundColor.copy(y.groundColor).multiplyScalar(W),i.hemi[d]=H,d++}}m>0&&(e.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=wt.LTC_FLOAT_1,i.rectAreaLTC2=wt.LTC_FLOAT_2):(i.rectAreaLTC1=wt.LTC_HALF_1,i.rectAreaLTC2=wt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==v||D.spotLength!==S||D.rectAreaLength!==m||D.hemiLength!==d||D.numDirectionalShadows!==A||D.numPointShadows!==E||D.numSpotShadows!==b||D.numSpotMaps!==I||D.numLightProbes!==C)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=v,i.hemi.length=d,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=E,i.pointShadowMap.length=E,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=E,i.spotLightMatrix.length=b+I-R,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=C,D.directionalLength=p,D.pointLength=v,D.spotLength=S,D.rectAreaLength=m,D.hemiLength=d,D.numDirectionalShadows=A,D.numPointShadows=E,D.numSpotShadows=b,D.numSpotMaps=I,D.numLightProbes=C,i.version=qv++)}function l(u,c){let h=0,f=0,p=0,v=0,S=0;const m=c.matrixWorldInverse;for(let d=0,A=u.length;d<A;d++){const E=u[d];if(E.isDirectionalLight){const b=i.directional[h];b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(E.isSpotLight){const b=i.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=i.rectArea[v];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),v++}else if(E.isPointLight){const b=i.point[f];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),f++}else if(E.isHemisphereLight){const b=i.hemi[S];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function Bu(e){const t=new jv(e),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){t.setup(n)}function l(c){t.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Kv(e){let t=new WeakMap;function n(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new Bu(e),t.set(r,[a])):s>=o.length?(a=new Bu(e),o.push(a)):a=o[s],a}function i(){t=new WeakMap}return{get:n,dispose:i}}class $v extends qr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Zv extends qr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`;function tx(e,t,n){let i=new hf;const r=new Kt,s=new Kt,o=new Me,a=new $v({depthPacking:Cp}),l=new Zv,u={},c=n.maxTextureSize,h={[Pi]:en,[en]:Pi,[Kn]:Kn},f=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:Jv,fragmentShader:Qv}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const v=new cn;v.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Bn(v,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let d=this.type;this.render=function(R,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const k=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),L=e.state;L.setBlending(bi),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const W=d!==Yn&&this.type===Yn,Z=d===Yn&&this.type!==Yn;for(let it=0,H=R.length;it<H;it++){const K=R[it],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const ut=X.getFrameExtents();if(r.multiply(ut),s.copy(X.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/ut.x),r.x=s.x*ut.x,X.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/ut.y),r.y=s.y*ut.y,X.mapSize.y=s.y)),X.map===null||W===!0||Z===!0){const pt=this.type!==Yn?{minFilter:_n,magFilter:_n}:{};X.map!==null&&X.map.dispose(),X.map=new or(r.x,r.y,pt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}e.setRenderTarget(X.map),e.clear();const dt=X.getViewportCount();for(let pt=0;pt<dt;pt++){const gt=X.getViewport(pt);o.set(s.x*gt.x,s.y*gt.y,s.x*gt.z,s.y*gt.w),L.viewport(o),X.updateMatrices(K,pt),i=X.getFrustum(),b(C,D,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===Yn&&A(X,D),X.needsUpdate=!1}d=this.type,m.needsUpdate=!1,e.setRenderTarget(k,x,y)};function A(R,C){const D=t.update(S);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new or(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,e.setRenderTarget(R.mapPass),e.clear(),e.renderBufferDirect(C,null,D,f,S,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,e.setRenderTarget(R.map),e.clear(),e.renderBufferDirect(C,null,D,p,S,null)}function E(R,C,D,k){let x=null;const y=D.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)x=y;else if(x=D.isPointLight===!0?l:a,e.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const L=x.uuid,W=C.uuid;let Z=u[L];Z===void 0&&(Z={},u[L]=Z);let it=Z[W];it===void 0&&(it=x.clone(),Z[W]=it,C.addEventListener("dispose",I)),x=it}if(x.visible=C.visible,x.wireframe=C.wireframe,k===Yn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:h[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,D.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const L=e.properties.get(x);L.light=D}return x}function b(R,C,D,k,x){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===Yn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,R.matrixWorld);const W=t.update(R),Z=R.material;if(Array.isArray(Z)){const it=W.groups;for(let H=0,K=it.length;H<K;H++){const X=it[H],ut=Z[X.materialIndex];if(ut&&ut.visible){const dt=E(R,ut,k,x);R.onBeforeShadow(e,R,C,D,W,dt,X),e.renderBufferDirect(D,null,W,dt,R,X),R.onAfterShadow(e,R,C,D,W,dt,X)}}}else if(Z.visible){const it=E(R,Z,k,x);R.onBeforeShadow(e,R,C,D,W,it,null),e.renderBufferDirect(D,null,W,it,R,null),R.onAfterShadow(e,R,C,D,W,it,null)}}const L=R.children;for(let W=0,Z=L.length;W<Z;W++)b(L[W],C,D,k,x)}function I(R){R.target.removeEventListener("dispose",I);for(const D in u){const k=u[D],x=R.target.uuid;x in k&&(k[x].dispose(),delete k[x])}}}const ex={[rl]:sl,[ol]:cl,[al]:ul,[Br]:ll,[sl]:rl,[cl]:ol,[ul]:al,[ll]:Br};function nx(e){function t(){let U=!1;const xt=new Me;let et=null;const st=new Me(0,0,0,0);return{setMask:function(Tt){et!==Tt&&!U&&(e.colorMask(Tt,Tt,Tt,Tt),et=Tt)},setLocked:function(Tt){U=Tt},setClear:function(Tt,Et,Wt,Qt,ce){ce===!0&&(Tt*=Qt,Et*=Qt,Wt*=Qt),xt.set(Tt,Et,Wt,Qt),st.equals(xt)===!1&&(e.clearColor(Tt,Et,Wt,Qt),st.copy(xt))},reset:function(){U=!1,et=null,st.set(-1,0,0,0)}}}function n(){let U=!1,xt=!1,et=null,st=null,Tt=null;return{setReversed:function(Et){xt=Et},setTest:function(Et){Et?lt(e.DEPTH_TEST):ht(e.DEPTH_TEST)},setMask:function(Et){et!==Et&&!U&&(e.depthMask(Et),et=Et)},setFunc:function(Et){if(xt&&(Et=ex[Et]),st!==Et){switch(Et){case rl:e.depthFunc(e.NEVER);break;case sl:e.depthFunc(e.ALWAYS);break;case ol:e.depthFunc(e.LESS);break;case Br:e.depthFunc(e.LEQUAL);break;case al:e.depthFunc(e.EQUAL);break;case ll:e.depthFunc(e.GEQUAL);break;case cl:e.depthFunc(e.GREATER);break;case ul:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}st=Et}},setLocked:function(Et){U=Et},setClear:function(Et){Tt!==Et&&(e.clearDepth(Et),Tt=Et)},reset:function(){U=!1,et=null,st=null,Tt=null}}}function i(){let U=!1,xt=null,et=null,st=null,Tt=null,Et=null,Wt=null,Qt=null,ce=null;return{setTest:function(kt){U||(kt?lt(e.STENCIL_TEST):ht(e.STENCIL_TEST))},setMask:function(kt){xt!==kt&&!U&&(e.stencilMask(kt),xt=kt)},setFunc:function(kt,re,_e){(et!==kt||st!==re||Tt!==_e)&&(e.stencilFunc(kt,re,_e),et=kt,st=re,Tt=_e)},setOp:function(kt,re,_e){(Et!==kt||Wt!==re||Qt!==_e)&&(e.stencilOp(kt,re,_e),Et=kt,Wt=re,Qt=_e)},setLocked:function(kt){U=kt},setClear:function(kt){ce!==kt&&(e.clearStencil(kt),ce=kt)},reset:function(){U=!1,xt=null,et=null,st=null,Tt=null,Et=null,Wt=null,Qt=null,ce=null}}}const r=new t,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},h=new WeakMap,f=[],p=null,v=!1,S=null,m=null,d=null,A=null,E=null,b=null,I=null,R=new Jt(0,0,0),C=0,D=!1,k=null,x=null,y=null,L=null,W=null;const Z=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,H=0;const K=e.getParameter(e.VERSION);K.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(K)[1]),it=H>=1):K.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),it=H>=2);let X=null,ut={};const dt=e.getParameter(e.SCISSOR_BOX),pt=e.getParameter(e.VIEWPORT),gt=new Me().fromArray(dt),zt=new Me().fromArray(pt);function nt(U,xt,et,st){const Tt=new Uint8Array(4),Et=e.createTexture();e.bindTexture(U,Et),e.texParameteri(U,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(U,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let Wt=0;Wt<et;Wt++)U===e.TEXTURE_3D||U===e.TEXTURE_2D_ARRAY?e.texImage3D(xt,0,e.RGBA,1,1,st,0,e.RGBA,e.UNSIGNED_BYTE,Tt):e.texImage2D(xt+Wt,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,Tt);return Et}const tt={};tt[e.TEXTURE_2D]=nt(e.TEXTURE_2D,e.TEXTURE_2D,1),tt[e.TEXTURE_CUBE_MAP]=nt(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[e.TEXTURE_2D_ARRAY]=nt(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),tt[e.TEXTURE_3D]=nt(e.TEXTURE_3D,e.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),lt(e.DEPTH_TEST),s.setFunc(Br),B(!1),J(Xc),lt(e.CULL_FACE),_(bi);function lt(U){u[U]!==!0&&(e.enable(U),u[U]=!0)}function ht(U){u[U]!==!1&&(e.disable(U),u[U]=!1)}function St(U,xt){return c[U]!==xt?(e.bindFramebuffer(U,xt),c[U]=xt,U===e.DRAW_FRAMEBUFFER&&(c[e.FRAMEBUFFER]=xt),U===e.FRAMEBUFFER&&(c[e.DRAW_FRAMEBUFFER]=xt),!0):!1}function At(U,xt){let et=f,st=!1;if(U){et=h.get(xt),et===void 0&&(et=[],h.set(xt,et));const Tt=U.textures;if(et.length!==Tt.length||et[0]!==e.COLOR_ATTACHMENT0){for(let Et=0,Wt=Tt.length;Et<Wt;Et++)et[Et]=e.COLOR_ATTACHMENT0+Et;et.length=Tt.length,st=!0}}else et[0]!==e.BACK&&(et[0]=e.BACK,st=!0);st&&e.drawBuffers(et)}function Pt(U){return p!==U?(e.useProgram(U),p=U,!0):!1}const Gt={[Ji]:e.FUNC_ADD,[tp]:e.FUNC_SUBTRACT,[ep]:e.FUNC_REVERSE_SUBTRACT};Gt[np]=e.MIN,Gt[ip]=e.MAX;const Ut={[rp]:e.ZERO,[sp]:e.ONE,[op]:e.SRC_COLOR,[nl]:e.SRC_ALPHA,[fp]:e.SRC_ALPHA_SATURATE,[up]:e.DST_COLOR,[lp]:e.DST_ALPHA,[ap]:e.ONE_MINUS_SRC_COLOR,[il]:e.ONE_MINUS_SRC_ALPHA,[hp]:e.ONE_MINUS_DST_COLOR,[cp]:e.ONE_MINUS_DST_ALPHA,[dp]:e.CONSTANT_COLOR,[pp]:e.ONE_MINUS_CONSTANT_COLOR,[mp]:e.CONSTANT_ALPHA,[gp]:e.ONE_MINUS_CONSTANT_ALPHA};function _(U,xt,et,st,Tt,Et,Wt,Qt,ce,kt){if(U===bi){v===!0&&(ht(e.BLEND),v=!1);return}if(v===!1&&(lt(e.BLEND),v=!0),U!==Qd){if(U!==S||kt!==D){if((m!==Ji||E!==Ji)&&(e.blendEquation(e.FUNC_ADD),m=Ji,E=Ji),kt)switch(U){case Lr:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qc:e.blendFunc(e.ONE,e.ONE);break;case Yc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jc:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Lr:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case qc:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case Yc:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case jc:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}d=null,A=null,b=null,I=null,R.set(0,0,0),C=0,S=U,D=kt}return}Tt=Tt||xt,Et=Et||et,Wt=Wt||st,(xt!==m||Tt!==E)&&(e.blendEquationSeparate(Gt[xt],Gt[Tt]),m=xt,E=Tt),(et!==d||st!==A||Et!==b||Wt!==I)&&(e.blendFuncSeparate(Ut[et],Ut[st],Ut[Et],Ut[Wt]),d=et,A=st,b=Et,I=Wt),(Qt.equals(R)===!1||ce!==C)&&(e.blendColor(Qt.r,Qt.g,Qt.b,ce),R.copy(Qt),C=ce),S=U,D=!1}function P(U,xt){U.side===Kn?ht(e.CULL_FACE):lt(e.CULL_FACE);let et=U.side===en;xt&&(et=!et),B(et),U.blending===Lr&&U.transparent===!1?_(bi):_(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),s.setFunc(U.depthFunc),s.setTest(U.depthTest),s.setMask(U.depthWrite),r.setMask(U.colorWrite);const st=U.stencilWrite;o.setTest(st),st&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?lt(e.SAMPLE_ALPHA_TO_COVERAGE):ht(e.SAMPLE_ALPHA_TO_COVERAGE)}function B(U){k!==U&&(U?e.frontFace(e.CW):e.frontFace(e.CCW),k=U)}function J(U){U!==$d?(lt(e.CULL_FACE),U!==x&&(U===Xc?e.cullFace(e.BACK):U===Zd?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))):ht(e.CULL_FACE),x=U}function V(U){U!==y&&(it&&e.lineWidth(U),y=U)}function $(U,xt,et){U?(lt(e.POLYGON_OFFSET_FILL),(L!==xt||W!==et)&&(e.polygonOffset(xt,et),L=xt,W=et)):ht(e.POLYGON_OFFSET_FILL)}function Q(U){U?lt(e.SCISSOR_TEST):ht(e.SCISSOR_TEST)}function M(U){U===void 0&&(U=e.TEXTURE0+Z-1),X!==U&&(e.activeTexture(U),X=U)}function g(U,xt,et){et===void 0&&(X===null?et=e.TEXTURE0+Z-1:et=X);let st=ut[et];st===void 0&&(st={type:void 0,texture:void 0},ut[et]=st),(st.type!==U||st.texture!==xt)&&(X!==et&&(e.activeTexture(et),X=et),e.bindTexture(U,xt||tt[U]),st.type=U,st.texture=xt)}function w(){const U=ut[X];U!==void 0&&U.type!==void 0&&(e.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function z(){try{e.compressedTexImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{e.compressedTexImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function F(){try{e.texSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{e.texSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ct(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{e.texStorage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{e.texStorage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{e.texImage2D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{e.texImage3D.apply(e,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function yt(U){gt.equals(U)===!1&&(e.scissor(U.x,U.y,U.z,U.w),gt.copy(U))}function mt(U){zt.equals(U)===!1&&(e.viewport(U.x,U.y,U.z,U.w),zt.copy(U))}function Ht(U,xt){let et=l.get(xt);et===void 0&&(et=new WeakMap,l.set(xt,et));let st=et.get(U);st===void 0&&(st=e.getUniformBlockIndex(xt,U.name),et.set(U,st))}function Rt(U,xt){const st=l.get(xt).get(U);a.get(xt)!==st&&(e.uniformBlockBinding(xt,st,U.__bindingPointIndex),a.set(xt,st))}function It(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},X=null,ut={},c={},h=new WeakMap,f=[],p=null,v=!1,S=null,m=null,d=null,A=null,E=null,b=null,I=null,R=new Jt(0,0,0),C=0,D=!1,k=null,x=null,y=null,L=null,W=null,gt.set(0,0,e.canvas.width,e.canvas.height),zt.set(0,0,e.canvas.width,e.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:lt,disable:ht,bindFramebuffer:St,drawBuffers:At,useProgram:Pt,setBlending:_,setMaterial:P,setFlipSided:B,setCullFace:J,setLineWidth:V,setPolygonOffset:$,setScissorTest:Q,activeTexture:M,bindTexture:g,unbindTexture:w,compressedTexImage2D:z,compressedTexImage3D:N,texImage2D:ft,texImage3D:bt,updateUBOMapping:Ht,uniformBlockBinding:Rt,texStorage2D:vt,texStorage3D:at,texSubImage2D:F,texSubImage3D:ot,compressedTexSubImage2D:rt,compressedTexSubImage3D:ct,scissor:yt,viewport:mt,reset:It}}function zu(e,t,n,i){const r=ix(i);switch(n){case Yh:return e*t;case Kh:return e*t;case $h:return e*t*2;case Zh:return e*t/r.components*r.byteLength;case uc:return e*t/r.components*r.byteLength;case Jh:return e*t*2/r.components*r.byteLength;case hc:return e*t*2/r.components*r.byteLength;case jh:return e*t*3/r.components*r.byteLength;case bn:return e*t*4/r.components*r.byteLength;case fc:return e*t*4/r.components*r.byteLength;case vo:case xo:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Mo:case So:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case gl:case vl:return Math.max(e,16)*Math.max(t,8)/4;case ml:case _l:return Math.max(e,8)*Math.max(t,8)/2;case xl:case Ml:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case Sl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case yl:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case Tl:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case bl:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case wl:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Dl:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Il:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case yo:case Fl:case Ol:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Qh:case Bl:return Math.ceil(e/4)*Math.ceil(t/4)*8;case zl:case Hl:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ix(e){switch(e){case ei:case Wh:return{byteLength:1,components:1};case Ms:case Xh:case Ds:return{byteLength:2,components:1};case lc:case cc:return{byteLength:2,components:4};case sr:case ac:case Jn:return{byteLength:4,components:1};case qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${e}.`)}function rx(e,t,n,i,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Kt,c=new WeakMap;let h;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(M,g){return p?new OffscreenCanvas(M,g):ys("canvas")}function S(M,g,w){let z=1;const N=Q(M);if((N.width>w||N.height>w)&&(z=w/Math.max(N.width,N.height)),z<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const F=Math.floor(z*N.width),ot=Math.floor(z*N.height);h===void 0&&(h=v(F,ot));const rt=g?v(F,ot):h;return rt.width=F,rt.height=ot,rt.getContext("2d").drawImage(M,0,0,F,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+F+"x"+ot+")."),rt}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),M;return M}function m(M){return M.generateMipmaps&&M.minFilter!==_n&&M.minFilter!==gn}function d(M){e.generateMipmap(M)}function A(M,g,w,z,N=!1){if(M!==null){if(e[M]!==void 0)return e[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let F=g;if(g===e.RED&&(w===e.FLOAT&&(F=e.R32F),w===e.HALF_FLOAT&&(F=e.R16F),w===e.UNSIGNED_BYTE&&(F=e.R8)),g===e.RED_INTEGER&&(w===e.UNSIGNED_BYTE&&(F=e.R8UI),w===e.UNSIGNED_SHORT&&(F=e.R16UI),w===e.UNSIGNED_INT&&(F=e.R32UI),w===e.BYTE&&(F=e.R8I),w===e.SHORT&&(F=e.R16I),w===e.INT&&(F=e.R32I)),g===e.RG&&(w===e.FLOAT&&(F=e.RG32F),w===e.HALF_FLOAT&&(F=e.RG16F),w===e.UNSIGNED_BYTE&&(F=e.RG8)),g===e.RG_INTEGER&&(w===e.UNSIGNED_BYTE&&(F=e.RG8UI),w===e.UNSIGNED_SHORT&&(F=e.RG16UI),w===e.UNSIGNED_INT&&(F=e.RG32UI),w===e.BYTE&&(F=e.RG8I),w===e.SHORT&&(F=e.RG16I),w===e.INT&&(F=e.RG32I)),g===e.RGB_INTEGER&&(w===e.UNSIGNED_BYTE&&(F=e.RGB8UI),w===e.UNSIGNED_SHORT&&(F=e.RGB16UI),w===e.UNSIGNED_INT&&(F=e.RGB32UI),w===e.BYTE&&(F=e.RGB8I),w===e.SHORT&&(F=e.RGB16I),w===e.INT&&(F=e.RGB32I)),g===e.RGBA_INTEGER&&(w===e.UNSIGNED_BYTE&&(F=e.RGBA8UI),w===e.UNSIGNED_SHORT&&(F=e.RGBA16UI),w===e.UNSIGNED_INT&&(F=e.RGBA32UI),w===e.BYTE&&(F=e.RGBA8I),w===e.SHORT&&(F=e.RGBA16I),w===e.INT&&(F=e.RGBA32I)),g===e.RGB&&w===e.UNSIGNED_INT_5_9_9_9_REV&&(F=e.RGB9_E5),g===e.RGBA){const ot=N?Po:ae.getTransfer(z);w===e.FLOAT&&(F=e.RGBA32F),w===e.HALF_FLOAT&&(F=e.RGBA16F),w===e.UNSIGNED_BYTE&&(F=ot===de?e.SRGB8_ALPHA8:e.RGBA8),w===e.UNSIGNED_SHORT_4_4_4_4&&(F=e.RGBA4),w===e.UNSIGNED_SHORT_5_5_5_1&&(F=e.RGB5_A1)}return(F===e.R16F||F===e.R32F||F===e.RG16F||F===e.RG32F||F===e.RGBA16F||F===e.RGBA32F)&&t.get("EXT_color_buffer_float"),F}function E(M,g){let w;return M?g===null||g===sr||g===Vr?w=e.DEPTH24_STENCIL8:g===Jn?w=e.DEPTH32F_STENCIL8:g===Ms&&(w=e.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===sr||g===Vr?w=e.DEPTH_COMPONENT24:g===Jn?w=e.DEPTH_COMPONENT32F:g===Ms&&(w=e.DEPTH_COMPONENT16),w}function b(M,g){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==_n&&M.minFilter!==gn?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function I(M){const g=M.target;g.removeEventListener("dispose",I),C(g),g.isVideoTexture&&c.delete(g)}function R(M){const g=M.target;g.removeEventListener("dispose",R),k(g)}function C(M){const g=i.get(M);if(g.__webglInit===void 0)return;const w=M.source,z=f.get(w);if(z){const N=z[g.__cacheKey];N.usedTimes--,N.usedTimes===0&&D(M),Object.keys(z).length===0&&f.delete(w)}i.remove(M)}function D(M){const g=i.get(M);e.deleteTexture(g.__webglTexture);const w=M.source,z=f.get(w);delete z[g.__cacheKey],o.memory.textures--}function k(M){const g=i.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let z=0;z<6;z++){if(Array.isArray(g.__webglFramebuffer[z]))for(let N=0;N<g.__webglFramebuffer[z].length;N++)e.deleteFramebuffer(g.__webglFramebuffer[z][N]);else e.deleteFramebuffer(g.__webglFramebuffer[z]);g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer[z])}else{if(Array.isArray(g.__webglFramebuffer))for(let z=0;z<g.__webglFramebuffer.length;z++)e.deleteFramebuffer(g.__webglFramebuffer[z]);else e.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&e.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&e.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let z=0;z<g.__webglColorRenderbuffer.length;z++)g.__webglColorRenderbuffer[z]&&e.deleteRenderbuffer(g.__webglColorRenderbuffer[z]);g.__webglDepthRenderbuffer&&e.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const w=M.textures;for(let z=0,N=w.length;z<N;z++){const F=i.get(w[z]);F.__webglTexture&&(e.deleteTexture(F.__webglTexture),o.memory.textures--),i.remove(w[z])}i.remove(M)}let x=0;function y(){x=0}function L(){const M=x;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),x+=1,M}function W(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.colorSpace),g.join()}function Z(M,g){const w=i.get(M);if(M.isVideoTexture&&V(M),M.isRenderTargetTexture===!1&&M.version>0&&w.__version!==M.version){const z=M.image;if(z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{zt(w,M,g);return}}n.bindTexture(e.TEXTURE_2D,w.__webglTexture,e.TEXTURE0+g)}function it(M,g){const w=i.get(M);if(M.version>0&&w.__version!==M.version){zt(w,M,g);return}n.bindTexture(e.TEXTURE_2D_ARRAY,w.__webglTexture,e.TEXTURE0+g)}function H(M,g){const w=i.get(M);if(M.version>0&&w.__version!==M.version){zt(w,M,g);return}n.bindTexture(e.TEXTURE_3D,w.__webglTexture,e.TEXTURE0+g)}function K(M,g){const w=i.get(M);if(M.version>0&&w.__version!==M.version){nt(w,M,g);return}n.bindTexture(e.TEXTURE_CUBE_MAP,w.__webglTexture,e.TEXTURE0+g)}const X={[dl]:e.REPEAT,[yi]:e.CLAMP_TO_EDGE,[pl]:e.MIRRORED_REPEAT},ut={[_n]:e.NEAREST,[Ap]:e.NEAREST_MIPMAP_NEAREST,[Hs]:e.NEAREST_MIPMAP_LINEAR,[gn]:e.LINEAR,[la]:e.LINEAR_MIPMAP_NEAREST,[Ei]:e.LINEAR_MIPMAP_LINEAR},dt={[Lp]:e.NEVER,[Op]:e.ALWAYS,[Dp]:e.LESS,[tf]:e.LEQUAL,[Ip]:e.EQUAL,[Fp]:e.GEQUAL,[Up]:e.GREATER,[Np]:e.NOTEQUAL};function pt(M,g){if(g.type===Jn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===gn||g.magFilter===la||g.magFilter===Hs||g.magFilter===Ei||g.minFilter===gn||g.minFilter===la||g.minFilter===Hs||g.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),e.texParameteri(M,e.TEXTURE_WRAP_S,X[g.wrapS]),e.texParameteri(M,e.TEXTURE_WRAP_T,X[g.wrapT]),(M===e.TEXTURE_3D||M===e.TEXTURE_2D_ARRAY)&&e.texParameteri(M,e.TEXTURE_WRAP_R,X[g.wrapR]),e.texParameteri(M,e.TEXTURE_MAG_FILTER,ut[g.magFilter]),e.texParameteri(M,e.TEXTURE_MIN_FILTER,ut[g.minFilter]),g.compareFunction&&(e.texParameteri(M,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(M,e.TEXTURE_COMPARE_FUNC,dt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===_n||g.minFilter!==Hs&&g.minFilter!==Ei||g.type===Jn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const w=t.get("EXT_texture_filter_anisotropic");e.texParameterf(M,w.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function gt(M,g){let w=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",I));const z=g.source;let N=f.get(z);N===void 0&&(N={},f.set(z,N));const F=W(g);if(F!==M.__cacheKey){N[F]===void 0&&(N[F]={texture:e.createTexture(),usedTimes:0},o.memory.textures++,w=!0),N[F].usedTimes++;const ot=N[M.__cacheKey];ot!==void 0&&(N[M.__cacheKey].usedTimes--,ot.usedTimes===0&&D(g)),M.__cacheKey=F,M.__webglTexture=N[F].texture}return w}function zt(M,g,w){let z=e.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(z=e.TEXTURE_2D_ARRAY),g.isData3DTexture&&(z=e.TEXTURE_3D);const N=gt(M,g),F=g.source;n.bindTexture(z,M.__webglTexture,e.TEXTURE0+w);const ot=i.get(F);if(F.version!==ot.__version||N===!0){n.activeTexture(e.TEXTURE0+w);const rt=ae.getPrimaries(ae.workingColorSpace),ct=g.colorSpace===Si?null:ae.getPrimaries(g.colorSpace),vt=g.colorSpace===Si||rt===ct?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let at=S(g.image,!1,r.maxTextureSize);at=$(g,at);const ft=s.convert(g.format,g.colorSpace),bt=s.convert(g.type);let yt=A(g.internalFormat,ft,bt,g.colorSpace,g.isVideoTexture);pt(z,g);let mt;const Ht=g.mipmaps,Rt=g.isVideoTexture!==!0,It=ot.__version===void 0||N===!0,U=F.dataReady,xt=b(g,at);if(g.isDepthTexture)yt=E(g.format===Gr,g.type),It&&(Rt?n.texStorage2D(e.TEXTURE_2D,1,yt,at.width,at.height):n.texImage2D(e.TEXTURE_2D,0,yt,at.width,at.height,0,ft,bt,null));else if(g.isDataTexture)if(Ht.length>0){Rt&&It&&n.texStorage2D(e.TEXTURE_2D,xt,yt,Ht[0].width,Ht[0].height);for(let et=0,st=Ht.length;et<st;et++)mt=Ht[et],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,mt.width,mt.height,ft,bt,mt.data):n.texImage2D(e.TEXTURE_2D,et,yt,mt.width,mt.height,0,ft,bt,mt.data);g.generateMipmaps=!1}else Rt?(It&&n.texStorage2D(e.TEXTURE_2D,xt,yt,at.width,at.height),U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,at.width,at.height,ft,bt,at.data)):n.texImage2D(e.TEXTURE_2D,0,yt,at.width,at.height,0,ft,bt,at.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Rt&&It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xt,yt,Ht[0].width,Ht[0].height,at.depth);for(let et=0,st=Ht.length;et<st;et++)if(mt=Ht[et],g.format!==bn)if(ft!==null)if(Rt){if(U)if(g.layerUpdates.size>0){const Tt=zu(mt.width,mt.height,g.format,g.type);for(const Et of g.layerUpdates){const Wt=mt.data.subarray(Et*Tt/mt.data.BYTES_PER_ELEMENT,(Et+1)*Tt/mt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,Et,mt.width,mt.height,1,ft,Wt,0,0)}g.clearLayerUpdates()}else n.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,mt.width,mt.height,at.depth,ft,mt.data,0,0)}else n.compressedTexImage3D(e.TEXTURE_2D_ARRAY,et,yt,mt.width,mt.height,at.depth,0,mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Rt?U&&n.texSubImage3D(e.TEXTURE_2D_ARRAY,et,0,0,0,mt.width,mt.height,at.depth,ft,bt,mt.data):n.texImage3D(e.TEXTURE_2D_ARRAY,et,yt,mt.width,mt.height,at.depth,0,ft,bt,mt.data)}else{Rt&&It&&n.texStorage2D(e.TEXTURE_2D,xt,yt,Ht[0].width,Ht[0].height);for(let et=0,st=Ht.length;et<st;et++)mt=Ht[et],g.format!==bn?ft!==null?Rt?U&&n.compressedTexSubImage2D(e.TEXTURE_2D,et,0,0,mt.width,mt.height,ft,mt.data):n.compressedTexImage2D(e.TEXTURE_2D,et,yt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Rt?U&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,mt.width,mt.height,ft,bt,mt.data):n.texImage2D(e.TEXTURE_2D,et,yt,mt.width,mt.height,0,ft,bt,mt.data)}else if(g.isDataArrayTexture)if(Rt){if(It&&n.texStorage3D(e.TEXTURE_2D_ARRAY,xt,yt,at.width,at.height,at.depth),U)if(g.layerUpdates.size>0){const et=zu(at.width,at.height,g.format,g.type);for(const st of g.layerUpdates){const Tt=at.data.subarray(st*et/at.data.BYTES_PER_ELEMENT,(st+1)*et/at.data.BYTES_PER_ELEMENT);n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,st,at.width,at.height,1,ft,bt,Tt)}g.clearLayerUpdates()}else n.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,ft,bt,at.data)}else n.texImage3D(e.TEXTURE_2D_ARRAY,0,yt,at.width,at.height,at.depth,0,ft,bt,at.data);else if(g.isData3DTexture)Rt?(It&&n.texStorage3D(e.TEXTURE_3D,xt,yt,at.width,at.height,at.depth),U&&n.texSubImage3D(e.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,ft,bt,at.data)):n.texImage3D(e.TEXTURE_3D,0,yt,at.width,at.height,at.depth,0,ft,bt,at.data);else if(g.isFramebufferTexture){if(It)if(Rt)n.texStorage2D(e.TEXTURE_2D,xt,yt,at.width,at.height);else{let et=at.width,st=at.height;for(let Tt=0;Tt<xt;Tt++)n.texImage2D(e.TEXTURE_2D,Tt,yt,et,st,0,ft,bt,null),et>>=1,st>>=1}}else if(Ht.length>0){if(Rt&&It){const et=Q(Ht[0]);n.texStorage2D(e.TEXTURE_2D,xt,yt,et.width,et.height)}for(let et=0,st=Ht.length;et<st;et++)mt=Ht[et],Rt?U&&n.texSubImage2D(e.TEXTURE_2D,et,0,0,ft,bt,mt):n.texImage2D(e.TEXTURE_2D,et,yt,ft,bt,mt);g.generateMipmaps=!1}else if(Rt){if(It){const et=Q(at);n.texStorage2D(e.TEXTURE_2D,xt,yt,et.width,et.height)}U&&n.texSubImage2D(e.TEXTURE_2D,0,0,0,ft,bt,at)}else n.texImage2D(e.TEXTURE_2D,0,yt,ft,bt,at);m(g)&&d(z),ot.__version=F.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function nt(M,g,w){if(g.image.length!==6)return;const z=gt(M,g),N=g.source;n.bindTexture(e.TEXTURE_CUBE_MAP,M.__webglTexture,e.TEXTURE0+w);const F=i.get(N);if(N.version!==F.__version||z===!0){n.activeTexture(e.TEXTURE0+w);const ot=ae.getPrimaries(ae.workingColorSpace),rt=g.colorSpace===Si?null:ae.getPrimaries(g.colorSpace),ct=g.colorSpace===Si||ot===rt?e.NONE:e.BROWSER_DEFAULT_WEBGL;e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,g.flipY),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),e.pixelStorei(e.UNPACK_ALIGNMENT,g.unpackAlignment),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const vt=g.isCompressedTexture||g.image[0].isCompressedTexture,at=g.image[0]&&g.image[0].isDataTexture,ft=[];for(let st=0;st<6;st++)!vt&&!at?ft[st]=S(g.image[st],!0,r.maxCubemapSize):ft[st]=at?g.image[st].image:g.image[st],ft[st]=$(g,ft[st]);const bt=ft[0],yt=s.convert(g.format,g.colorSpace),mt=s.convert(g.type),Ht=A(g.internalFormat,yt,mt,g.colorSpace),Rt=g.isVideoTexture!==!0,It=F.__version===void 0||z===!0,U=N.dataReady;let xt=b(g,bt);pt(e.TEXTURE_CUBE_MAP,g);let et;if(vt){Rt&&It&&n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Ht,bt.width,bt.height);for(let st=0;st<6;st++){et=ft[st].mipmaps;for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];g.format!==bn?yt!==null?Rt?U&&n.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,Et.width,Et.height,yt,Et.data):n.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,Ht,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,0,0,Et.width,Et.height,yt,mt,Et.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt,Ht,Et.width,Et.height,0,yt,mt,Et.data)}}}else{if(et=g.mipmaps,Rt&&It){et.length>0&&xt++;const st=Q(ft[0]);n.texStorage2D(e.TEXTURE_CUBE_MAP,xt,Ht,st.width,st.height)}for(let st=0;st<6;st++)if(at){Rt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,ft[st].width,ft[st].height,yt,mt,ft[st].data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,ft[st].width,ft[st].height,0,yt,mt,ft[st].data);for(let Tt=0;Tt<et.length;Tt++){const Wt=et[Tt].image[st].image;Rt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,Wt.width,Wt.height,yt,mt,Wt.data):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,Ht,Wt.width,Wt.height,0,yt,mt,Wt.data)}}else{Rt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,yt,mt,ft[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Ht,yt,mt,ft[st]);for(let Tt=0;Tt<et.length;Tt++){const Et=et[Tt];Rt?U&&n.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,0,0,yt,mt,Et.image[st]):n.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+st,Tt+1,Ht,yt,mt,Et.image[st])}}}m(g)&&d(e.TEXTURE_CUBE_MAP),F.__version=N.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function tt(M,g,w,z,N,F){const ot=s.convert(w.format,w.colorSpace),rt=s.convert(w.type),ct=A(w.internalFormat,ot,rt,w.colorSpace);if(!i.get(g).__hasExternalTextures){const at=Math.max(1,g.width>>F),ft=Math.max(1,g.height>>F);N===e.TEXTURE_3D||N===e.TEXTURE_2D_ARRAY?n.texImage3D(N,F,ct,at,ft,g.depth,0,ot,rt,null):n.texImage2D(N,F,ct,at,ft,0,ot,rt,null)}n.bindFramebuffer(e.FRAMEBUFFER,M),J(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,z,N,i.get(w).__webglTexture,0,B(g)):(N===e.TEXTURE_2D||N>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,z,N,i.get(w).__webglTexture,F),n.bindFramebuffer(e.FRAMEBUFFER,null)}function lt(M,g,w){if(e.bindRenderbuffer(e.RENDERBUFFER,M),g.depthBuffer){const z=g.depthTexture,N=z&&z.isDepthTexture?z.type:null,F=E(g.stencilBuffer,N),ot=g.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,rt=B(g);J(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,rt,F,g.width,g.height):w?e.renderbufferStorageMultisample(e.RENDERBUFFER,rt,F,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,F,g.width,g.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,ot,e.RENDERBUFFER,M)}else{const z=g.textures;for(let N=0;N<z.length;N++){const F=z[N],ot=s.convert(F.format,F.colorSpace),rt=s.convert(F.type),ct=A(F.internalFormat,ot,rt,F.colorSpace),vt=B(g);w&&J(g)===!1?e.renderbufferStorageMultisample(e.RENDERBUFFER,vt,ct,g.width,g.height):J(g)?a.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,vt,ct,g.width,g.height):e.renderbufferStorage(e.RENDERBUFFER,ct,g.width,g.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function ht(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(e.FRAMEBUFFER,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Z(g.depthTexture,0);const z=i.get(g.depthTexture).__webglTexture,N=B(g);if(g.depthTexture.format===Dr)J(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0,N):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_ATTACHMENT,e.TEXTURE_2D,z,0);else if(g.depthTexture.format===Gr)J(g)?a.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0,N):e.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,z,0);else throw new Error("Unknown depthTexture format")}function St(M){const g=i.get(M),w=M.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==M.depthTexture){const z=M.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),z){const N=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,z.removeEventListener("dispose",N)};z.addEventListener("dispose",N),g.__depthDisposeCallback=N}g.__boundDepthTexture=z}if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(w)throw new Error("target.depthTexture not supported in Cube render targets");ht(g.__webglFramebuffer,M)}else if(w){g.__webglDepthbuffer=[];for(let z=0;z<6;z++)if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer[z]),g.__webglDepthbuffer[z]===void 0)g.__webglDepthbuffer[z]=e.createRenderbuffer(),lt(g.__webglDepthbuffer[z],M,!1);else{const N=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,F=g.__webglDepthbuffer[z];e.bindRenderbuffer(e.RENDERBUFFER,F),e.framebufferRenderbuffer(e.FRAMEBUFFER,N,e.RENDERBUFFER,F)}}else if(n.bindFramebuffer(e.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=e.createRenderbuffer(),lt(g.__webglDepthbuffer,M,!1);else{const z=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,N=g.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,N),e.framebufferRenderbuffer(e.FRAMEBUFFER,z,e.RENDERBUFFER,N)}n.bindFramebuffer(e.FRAMEBUFFER,null)}function At(M,g,w){const z=i.get(M);g!==void 0&&tt(z.__webglFramebuffer,M,M.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),w!==void 0&&St(M)}function Pt(M){const g=M.texture,w=i.get(M),z=i.get(g);M.addEventListener("dispose",R);const N=M.textures,F=M.isWebGLCubeRenderTarget===!0,ot=N.length>1;if(ot||(z.__webglTexture===void 0&&(z.__webglTexture=e.createTexture()),z.__version=g.version,o.memory.textures++),F){w.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer[rt]=[];for(let ct=0;ct<g.mipmaps.length;ct++)w.__webglFramebuffer[rt][ct]=e.createFramebuffer()}else w.__webglFramebuffer[rt]=e.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){w.__webglFramebuffer=[];for(let rt=0;rt<g.mipmaps.length;rt++)w.__webglFramebuffer[rt]=e.createFramebuffer()}else w.__webglFramebuffer=e.createFramebuffer();if(ot)for(let rt=0,ct=N.length;rt<ct;rt++){const vt=i.get(N[rt]);vt.__webglTexture===void 0&&(vt.__webglTexture=e.createTexture(),o.memory.textures++)}if(M.samples>0&&J(M)===!1){w.__webglMultisampledFramebuffer=e.createFramebuffer(),w.__webglColorRenderbuffer=[],n.bindFramebuffer(e.FRAMEBUFFER,w.__webglMultisampledFramebuffer);for(let rt=0;rt<N.length;rt++){const ct=N[rt];w.__webglColorRenderbuffer[rt]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,w.__webglColorRenderbuffer[rt]);const vt=s.convert(ct.format,ct.colorSpace),at=s.convert(ct.type),ft=A(ct.internalFormat,vt,at,ct.colorSpace,M.isXRRenderTarget===!0),bt=B(M);e.renderbufferStorageMultisample(e.RENDERBUFFER,bt,ft,M.width,M.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+rt,e.RENDERBUFFER,w.__webglColorRenderbuffer[rt])}e.bindRenderbuffer(e.RENDERBUFFER,null),M.depthBuffer&&(w.__webglDepthRenderbuffer=e.createRenderbuffer(),lt(w.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(e.FRAMEBUFFER,null)}}if(F){n.bindTexture(e.TEXTURE_CUBE_MAP,z.__webglTexture),pt(e.TEXTURE_CUBE_MAP,g);for(let rt=0;rt<6;rt++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)tt(w.__webglFramebuffer[rt][ct],M,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,ct);else tt(w.__webglFramebuffer[rt],M,g,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(g)&&d(e.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ot){for(let rt=0,ct=N.length;rt<ct;rt++){const vt=N[rt],at=i.get(vt);n.bindTexture(e.TEXTURE_2D,at.__webglTexture),pt(e.TEXTURE_2D,vt),tt(w.__webglFramebuffer,M,vt,e.COLOR_ATTACHMENT0+rt,e.TEXTURE_2D,0),m(vt)&&d(e.TEXTURE_2D)}n.unbindTexture()}else{let rt=e.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(rt=M.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),n.bindTexture(rt,z.__webglTexture),pt(rt,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)tt(w.__webglFramebuffer[ct],M,g,e.COLOR_ATTACHMENT0,rt,ct);else tt(w.__webglFramebuffer,M,g,e.COLOR_ATTACHMENT0,rt,0);m(g)&&d(rt),n.unbindTexture()}M.depthBuffer&&St(M)}function Gt(M){const g=M.textures;for(let w=0,z=g.length;w<z;w++){const N=g[w];if(m(N)){const F=M.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:e.TEXTURE_2D,ot=i.get(N).__webglTexture;n.bindTexture(F,ot),d(F),n.unbindTexture()}}}const Ut=[],_=[];function P(M){if(M.samples>0){if(J(M)===!1){const g=M.textures,w=M.width,z=M.height;let N=e.COLOR_BUFFER_BIT;const F=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,ot=i.get(M),rt=g.length>1;if(rt)for(let ct=0;ct<g.length;ct++)n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,null),n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,null,0);n.bindFramebuffer(e.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(N|=e.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(N|=e.STENCIL_BUFFER_BIT)),rt){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);const vt=i.get(g[ct]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,vt,0)}e.blitFramebuffer(0,0,w,z,0,0,w,z,N,e.NEAREST),l===!0&&(Ut.length=0,_.length=0,Ut.push(e.COLOR_ATTACHMENT0+ct),M.depthBuffer&&M.resolveDepthBuffer===!1&&(Ut.push(F),_.push(F),e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,_)),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(e.READ_FRAMEBUFFER,null),n.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),rt)for(let ct=0;ct<g.length;ct++){n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.RENDERBUFFER,ot.__webglColorRenderbuffer[ct]);const vt=i.get(g[ct]).__webglTexture;n.bindFramebuffer(e.FRAMEBUFFER,ot.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+ct,e.TEXTURE_2D,vt,0)}n.bindFramebuffer(e.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const g=M.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[g])}}}function B(M){return Math.min(r.maxSamples,M.samples)}function J(M){const g=i.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function V(M){const g=o.render.frame;c.get(M)!==g&&(c.set(M,g),M.update())}function $(M,g){const w=M.colorSpace,z=M.format,N=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||w!==Ni&&w!==Si&&(ae.getTransfer(w)===de?(z!==bn||N!==ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",w)),g}function Q(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(u.width=M.naturalWidth||M.width,u.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(u.width=M.displayWidth,u.height=M.displayHeight):(u.width=M.width,u.height=M.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=y,this.setTexture2D=Z,this.setTexture2DArray=it,this.setTexture3D=H,this.setTextureCube=K,this.rebindTextures=At,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=P,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=J}function sx(e,t){function n(i,r=Si){let s;const o=ae.getTransfer(r);if(i===ei)return e.UNSIGNED_BYTE;if(i===lc)return e.UNSIGNED_SHORT_4_4_4_4;if(i===cc)return e.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return e.UNSIGNED_INT_5_9_9_9_REV;if(i===Wh)return e.BYTE;if(i===Xh)return e.SHORT;if(i===Ms)return e.UNSIGNED_SHORT;if(i===ac)return e.INT;if(i===sr)return e.UNSIGNED_INT;if(i===Jn)return e.FLOAT;if(i===Ds)return e.HALF_FLOAT;if(i===Yh)return e.ALPHA;if(i===jh)return e.RGB;if(i===bn)return e.RGBA;if(i===Kh)return e.LUMINANCE;if(i===$h)return e.LUMINANCE_ALPHA;if(i===Dr)return e.DEPTH_COMPONENT;if(i===Gr)return e.DEPTH_STENCIL;if(i===Zh)return e.RED;if(i===uc)return e.RED_INTEGER;if(i===Jh)return e.RG;if(i===hc)return e.RG_INTEGER;if(i===fc)return e.RGBA_INTEGER;if(i===vo||i===xo||i===Mo||i===So)if(o===de)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===xo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Mo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ml||i===gl||i===_l||i===vl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ml)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_l)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xl||i===Ml||i===Sl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xl||i===Ml)return o===de?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Sl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===yl||i===El||i===Tl||i===bl||i===Al||i===wl||i===Cl||i===Rl||i===Pl||i===Ll||i===Dl||i===Il||i===Ul||i===Nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(i===yl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===El)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Tl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Al)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===wl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ll)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Dl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Il)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ul)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Nl)return o===de?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===yo||i===Fl||i===Ol)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(i===yo)return o===de?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ol)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qh||i===Bl||i===zl||i===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(i===yo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Bl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===zl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vr?e.UNSIGNED_INT_24_8:e[i]!==void 0?e[i]:null}return{convert:n}}class ox extends pn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ao extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ao,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ao,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ao,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const i of t.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(u&&t.hand){o=!0;for(const S of t.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(u,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],f=c.position.distanceTo(h.position),p=.02,v=.005;u.inputState.pinching&&f>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&f<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=n.getPose(t.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const i=new ao;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[n.jointName]=i,t.add(i)}return t.joints[n.jointName]}}const lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`;class ux{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n,i){if(this.texture===null){const r=new He,s=t.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,i=new Li({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new Yo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hx extends lr{constructor(t,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,f=null,p=null,v=null;const S=new ux,m=n.getContextAttributes();let d=null,A=null;const E=[],b=[],I=new Kt;let R=null;const C=new pn;C.layers.enable(1),C.viewport=new Me;const D=new pn;D.layers.enable(2),D.viewport=new Me;const k=[C,D],x=new ox;x.layers.enable(1),x.layers.enable(2);let y=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let tt=E[nt];return tt===void 0&&(tt=new Fa,E[nt]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(nt){let tt=E[nt];return tt===void 0&&(tt=new Fa,E[nt]=tt),tt.getGripSpace()},this.getHand=function(nt){let tt=E[nt];return tt===void 0&&(tt=new Fa,E[nt]=tt),tt.getHandSpace()};function W(nt){const tt=b.indexOf(nt.inputSource);if(tt===-1)return;const lt=E[tt];lt!==void 0&&(lt.update(nt.inputSource,nt.frame,u||o),lt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",it);for(let nt=0;nt<E.length;nt++){const tt=b[nt];tt!==null&&(b[nt]=null,E[nt].disconnect(tt))}y=null,L=null,S.reset(),t.setRenderTarget(d),p=null,f=null,h=null,r=null,A=null,zt.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){s=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){a=nt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(nt){u=nt},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(nt){if(r=nt,r!==null){if(d=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",it),m.xrCompatible!==!0&&await n.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(I),r.renderState.layers===void 0){const tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,tt),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),A=new or(p.framebufferWidth,p.framebufferHeight,{format:bn,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,lt=null,ht=null;m.depth&&(ht=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,tt=m.stencil?Gr:Dr,lt=m.stencil?Vr:sr);const St={colorFormat:n.RGBA8,depthFormat:ht,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(St),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),A=new or(f.textureWidth,f.textureHeight,{format:bn,type:ei,depthTexture:new df(f.textureWidth,f.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),zt.setContext(r),zt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function it(nt){for(let tt=0;tt<nt.removed.length;tt++){const lt=nt.removed[tt],ht=b.indexOf(lt);ht>=0&&(b[ht]=null,E[ht].disconnect(lt))}for(let tt=0;tt<nt.added.length;tt++){const lt=nt.added[tt];let ht=b.indexOf(lt);if(ht===-1){for(let At=0;At<E.length;At++)if(At>=b.length){b.push(lt),ht=At;break}else if(b[At]===null){b[At]=lt,ht=At;break}if(ht===-1)break}const St=E[ht];St&&St.connect(lt)}}const H=new j,K=new j;function X(nt,tt,lt){H.setFromMatrixPosition(tt.matrixWorld),K.setFromMatrixPosition(lt.matrixWorld);const ht=H.distanceTo(K),St=tt.projectionMatrix.elements,At=lt.projectionMatrix.elements,Pt=St[14]/(St[10]-1),Gt=St[14]/(St[10]+1),Ut=(St[9]+1)/St[5],_=(St[9]-1)/St[5],P=(St[8]-1)/St[0],B=(At[8]+1)/At[0],J=Pt*P,V=Pt*B,$=ht/(-P+B),Q=$*-P;if(tt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Q),nt.translateZ($),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),St[10]===-1)nt.projectionMatrix.copy(tt.projectionMatrix),nt.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const M=Pt+$,g=Gt+$,w=J-Q,z=V+(ht-Q),N=Ut*Gt/g*M,F=_*Gt/g*M;nt.projectionMatrix.makePerspective(w,z,N,F,M,g),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function ut(nt,tt){tt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(tt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(r===null)return;let tt=nt.near,lt=nt.far;S.texture!==null&&(S.depthNear>0&&(tt=S.depthNear),S.depthFar>0&&(lt=S.depthFar)),x.near=D.near=C.near=tt,x.far=D.far=C.far=lt,(y!==x.near||L!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),y=x.near,L=x.far);const ht=nt.parent,St=x.cameras;ut(x,ht);for(let At=0;At<St.length;At++)ut(St[At],ht);St.length===2?X(x,C,D):x.projectionMatrix.copy(C.projectionMatrix),dt(nt,x,ht)};function dt(nt,tt,lt){lt===null?nt.matrix.copy(tt.matrixWorld):(nt.matrix.copy(lt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(tt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(tt.projectionMatrix),nt.projectionMatrixInverse.copy(tt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=Ss*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(nt){l=nt,f!==null&&(f.fixedFoveation=nt),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=nt)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let pt=null;function gt(nt,tt){if(c=tt.getViewerPose(u||o),v=tt,c!==null){const lt=c.views;p!==null&&(t.setRenderTargetFramebuffer(A,p.framebuffer),t.setRenderTarget(A));let ht=!1;lt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let At=0;At<lt.length;At++){const Pt=lt[At];let Gt=null;if(p!==null)Gt=p.getViewport(Pt);else{const _=h.getViewSubImage(f,Pt);Gt=_.viewport,At===0&&(t.setRenderTargetTextures(A,_.colorTexture,f.ignoreDepthValues?void 0:_.depthStencilTexture),t.setRenderTarget(A))}let Ut=k[At];Ut===void 0&&(Ut=new pn,Ut.layers.enable(At),Ut.viewport=new Me,k[At]=Ut),Ut.matrix.fromArray(Pt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Pt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),At===0&&(x.matrix.copy(Ut.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Ut)}const St=r.enabledFeatures;if(St&&St.includes("depth-sensing")){const At=h.getDepthInformation(lt[0]);At&&At.isValid&&At.texture&&S.init(t,At,r.renderState)}}for(let lt=0;lt<E.length;lt++){const ht=b[lt],St=E[lt];ht!==null&&St!==void 0&&St.update(ht,tt,u||o)}pt&&pt(nt,tt),tt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:tt}),v=null}const zt=new ff;zt.setAnimationLoop(gt),this.setAnimationLoop=function(nt){pt=nt},this.dispose=function(){}}}const Wi=new ni,fx=new ge;function dx(e,t){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,lf(e)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,A,E,b){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,b)):d.isMeshMatcapMaterial?(s(m,d),v(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,A,E):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===en&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===en&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const A=t.get(d),E=A.envMap,b=A.envMapRotation;E&&(m.envMap.value=E,Wi.copy(b),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Wi)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,A,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=E*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===en&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const A=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function px(e,t,n,i){let r={},s={},o=[];const a=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const b=E.program;i.uniformBlockBinding(A,b)}function u(A,E){let b=r[A.id];b===void 0&&(v(A),b=c(A),r[A.id]=b,A.addEventListener("dispose",m));const I=E.program;i.updateUBOMapping(A,I);const R=t.render.frame;s[A.id]!==R&&(f(A),s[A.id]=R)}function c(A){const E=h();A.__bindingPointIndex=E;const b=e.createBuffer(),I=A.__size,R=A.usage;return e.bindBuffer(e.UNIFORM_BUFFER,b),e.bufferData(e.UNIFORM_BUFFER,I,R),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,E,b),b}function h(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const E=r[A.id],b=A.uniforms,I=A.__cache;e.bindBuffer(e.UNIFORM_BUFFER,E);for(let R=0,C=b.length;R<C;R++){const D=Array.isArray(b[R])?b[R]:[b[R]];for(let k=0,x=D.length;k<x;k++){const y=D[k];if(p(y,R,k,I)===!0){const L=y.__offset,W=Array.isArray(y.value)?y.value:[y.value];let Z=0;for(let it=0;it<W.length;it++){const H=W[it],K=S(H);typeof H=="number"||typeof H=="boolean"?(y.__data[0]=H,e.bufferSubData(e.UNIFORM_BUFFER,L+Z,y.__data)):H.isMatrix3?(y.__data[0]=H.elements[0],y.__data[1]=H.elements[1],y.__data[2]=H.elements[2],y.__data[3]=0,y.__data[4]=H.elements[3],y.__data[5]=H.elements[4],y.__data[6]=H.elements[5],y.__data[7]=0,y.__data[8]=H.elements[6],y.__data[9]=H.elements[7],y.__data[10]=H.elements[8],y.__data[11]=0):(H.toArray(y.__data,Z),Z+=K.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,L,y.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(A,E,b,I){const R=A.value,C=E+"_"+b;if(I[C]===void 0)return typeof R=="number"||typeof R=="boolean"?I[C]=R:I[C]=R.clone(),!0;{const D=I[C];if(typeof R=="number"||typeof R=="boolean"){if(D!==R)return I[C]=R,!0}else if(D.equals(R)===!1)return D.copy(R),!0}return!1}function v(A){const E=A.uniforms;let b=0;const I=16;for(let C=0,D=E.length;C<D;C++){const k=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,y=k.length;x<y;x++){const L=k[x],W=Array.isArray(L.value)?L.value:[L.value];for(let Z=0,it=W.length;Z<it;Z++){const H=W[Z],K=S(H),X=b%I,ut=X%K.boundary,dt=X+ut;b+=ut,dt!==0&&I-dt<K.storage&&(b+=I-dt),L.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=b,b+=K.storage}}}const R=b%I;return R>0&&(b+=I-R),A.__size=b,A.__cache={},this}function S(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function m(A){const E=A.target;E.removeEventListener("dispose",m);const b=o.indexOf(E.__bindingPointIndex);o.splice(b,1),e.deleteBuffer(r[E.id]),delete r[E.id],delete s[E.id]}function d(){for(const A in r)e.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class mx{constructor(t={}){const{canvas:n=em(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const p=new Uint32Array(4),v=new Int32Array(4);let S=null,m=null;const d=[],A=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Un,this.toneMapping=Ai,this.toneMappingExposure=1;const E=this;let b=!1,I=0,R=0,C=null,D=-1,k=null;const x=new Me,y=new Me;let L=null;const W=new Jt(0);let Z=0,it=n.width,H=n.height,K=1,X=null,ut=null;const dt=new Me(0,0,it,H),pt=new Me(0,0,it,H);let gt=!1;const zt=new hf;let nt=!1,tt=!1;const lt=new ge,ht=new ge,St=new j,At=new Me,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Gt=!1;function Ut(){return C===null?K:1}let _=i;function P(T,O){return n.getContext(T,O)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${oc}`),n.addEventListener("webglcontextlost",st,!1),n.addEventListener("webglcontextrestored",Tt,!1),n.addEventListener("webglcontextcreationerror",Et,!1),_===null){const O="webgl2";if(_=P(O,T),_===null)throw P(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let B,J,V,$,Q,M,g,w,z,N,F,ot,rt,ct,vt,at,ft,bt,yt,mt,Ht,Rt,It,U;function xt(){B=new M0(_),B.init(),Rt=new sx(_,B),J=new d0(_,B,t,Rt),V=new nx(_),J.reverseDepthBuffer&&V.buffers.depth.setReversed(!0),$=new E0(_),Q=new Vv,M=new rx(_,B,V,Q,J,Rt,$),g=new m0(E),w=new x0(E),z=new Rm(_),It=new h0(_,z),N=new S0(_,z,$,It),F=new b0(_,N,z,$),yt=new T0(_,J,M),at=new p0(Q),ot=new Hv(E,g,w,B,J,It,at),rt=new dx(E,Q),ct=new kv,vt=new Kv(B),bt=new u0(E,g,w,V,F,f,l),ft=new tx(E,F,J),U=new px(_,$,J,V),mt=new f0(_,B,$),Ht=new y0(_,B,$),$.programs=ot.programs,E.capabilities=J,E.extensions=B,E.properties=Q,E.renderLists=ct,E.shadowMap=ft,E.state=V,E.info=$}xt();const et=new hx(E,_);this.xr=et,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=B.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=B.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(T){T!==void 0&&(K=T,this.setSize(it,H,!1))},this.getSize=function(T){return T.set(it,H)},this.setSize=function(T,O,Y=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=T,H=O,n.width=Math.floor(T*K),n.height=Math.floor(O*K),Y===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(it*K,H*K).floor()},this.setDrawingBufferSize=function(T,O,Y){it=T,H=O,K=Y,n.width=Math.floor(T*Y),n.height=Math.floor(O*Y),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(dt)},this.setViewport=function(T,O,Y,q){T.isVector4?dt.set(T.x,T.y,T.z,T.w):dt.set(T,O,Y,q),V.viewport(x.copy(dt).multiplyScalar(K).round())},this.getScissor=function(T){return T.copy(pt)},this.setScissor=function(T,O,Y,q){T.isVector4?pt.set(T.x,T.y,T.z,T.w):pt.set(T,O,Y,q),V.scissor(y.copy(pt).multiplyScalar(K).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(T){V.setScissorTest(gt=T)},this.setOpaqueSort=function(T){X=T},this.setTransparentSort=function(T){ut=T},this.getClearColor=function(T){return T.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(T=!0,O=!0,Y=!0){let q=0;if(T){let G=!1;if(C!==null){const _t=C.texture.format;G=_t===fc||_t===hc||_t===uc}if(G){const _t=C.texture.type,Ct=_t===ei||_t===sr||_t===Ms||_t===Vr||_t===lc||_t===cc,Lt=bt.getClearColor(),Dt=bt.getClearAlpha(),Ot=Lt.r,Bt=Lt.g,Nt=Lt.b;Ct?(p[0]=Ot,p[1]=Bt,p[2]=Nt,p[3]=Dt,_.clearBufferuiv(_.COLOR,0,p)):(v[0]=Ot,v[1]=Bt,v[2]=Nt,v[3]=Dt,_.clearBufferiv(_.COLOR,0,v))}else q|=_.COLOR_BUFFER_BIT}O&&(q|=_.DEPTH_BUFFER_BIT,_.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(q|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",st,!1),n.removeEventListener("webglcontextrestored",Tt,!1),n.removeEventListener("webglcontextcreationerror",Et,!1),ct.dispose(),vt.dispose(),Q.dispose(),g.dispose(),w.dispose(),F.dispose(),It.dispose(),U.dispose(),ot.dispose(),et.dispose(),et.removeEventListener("sessionstart",$e),et.removeEventListener("sessionend",Mt),Ee.stop()};function st(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const T=$.autoReset,O=ft.enabled,Y=ft.autoUpdate,q=ft.needsUpdate,G=ft.type;xt(),$.autoReset=T,ft.enabled=O,ft.autoUpdate=Y,ft.needsUpdate=q,ft.type=G}function Et(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Wt(T){const O=T.target;O.removeEventListener("dispose",Wt),Qt(O)}function Qt(T){ce(T),Q.remove(T)}function ce(T){const O=Q.get(T).programs;O!==void 0&&(O.forEach(function(Y){ot.releaseProgram(Y)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,Y,q,G,_t){O===null&&(O=Pt);const Ct=G.isMesh&&G.matrixWorld.determinant()<0,Lt=ve(T,O,Y,q,G);V.setMaterial(q,Ct);let Dt=Y.index,Ot=1;if(q.wireframe===!0){if(Dt=N.getWireframeAttribute(Y),Dt===void 0)return;Ot=2}const Bt=Y.drawRange,Nt=Y.attributes.position;let ee=Bt.start*Ot,ne=(Bt.start+Bt.count)*Ot;_t!==null&&(ee=Math.max(ee,_t.start*Ot),ne=Math.min(ne,(_t.start+_t.count)*Ot)),Dt!==null?(ee=Math.max(ee,0),ne=Math.min(ne,Dt.count)):Nt!=null&&(ee=Math.max(ee,0),ne=Math.min(ne,Nt.count));const se=ne-ee;if(se<0||se===1/0)return;It.setup(G,q,Lt,Y,Dt);let De,Zt=mt;if(Dt!==null&&(De=z.get(Dt),Zt=Ht,Zt.setIndex(De)),G.isMesh)q.wireframe===!0?(V.setLineWidth(q.wireframeLinewidth*Ut()),Zt.setMode(_.LINES)):Zt.setMode(_.TRIANGLES);else if(G.isLine){let Ft=q.linewidth;Ft===void 0&&(Ft=1),V.setLineWidth(Ft*Ut()),G.isLineSegments?Zt.setMode(_.LINES):G.isLineLoop?Zt.setMode(_.LINE_LOOP):Zt.setMode(_.LINE_STRIP)}else G.isPoints?Zt.setMode(_.POINTS):G.isSprite&&Zt.setMode(_.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Zt.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(B.get("WEBGL_multi_draw"))Zt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ft=G._multiDrawStarts,xe=G._multiDrawCounts,$t=G._multiDrawCount,Ge=Dt?z.get(Dt).bytesPerElement:1,Ln=Q.get(q).currentProgram.getUniforms();for(let be=0;be<$t;be++)Ln.setValue(_,"_gl_DrawID",be),Zt.render(Ft[be]/Ge,xe[be])}else if(G.isInstancedMesh)Zt.renderInstances(ee,se,G.count);else if(Y.isInstancedBufferGeometry){const Ft=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,xe=Math.min(Y.instanceCount,Ft);Zt.renderInstances(ee,se,xe)}else Zt.render(ee,se)};function kt(T,O,Y){T.transparent===!0&&T.side===Kn&&T.forceSinglePass===!1?(T.side=en,T.needsUpdate=!0,Pn(T,O,Y),T.side=Pi,T.needsUpdate=!0,Pn(T,O,Y),T.side=Kn):Pn(T,O,Y)}this.compile=function(T,O,Y=null){Y===null&&(Y=T),m=vt.get(Y),m.init(O),A.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==Y&&T.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const q=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _t=G.material;if(_t)if(Array.isArray(_t))for(let Ct=0;Ct<_t.length;Ct++){const Lt=_t[Ct];kt(Lt,Y,G),q.add(Lt)}else kt(_t,Y,G),q.add(_t)}),A.pop(),m=null,q},this.compileAsync=function(T,O,Y=null){const q=this.compile(T,O,Y);return new Promise(G=>{function _t(){if(q.forEach(function(Ct){Q.get(Ct).currentProgram.isReady()&&q.delete(Ct)}),q.size===0){G(T);return}setTimeout(_t,10)}B.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let re=null;function _e(T){re&&re(T)}function $e(){Ee.stop()}function Mt(){Ee.start()}const Ee=new ff;Ee.setAnimationLoop(_e),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(T){re=T,et.setAnimationLoop(T),T===null?Ee.stop():Ee.start()},et.addEventListener("sessionstart",$e),et.addEventListener("sessionend",Mt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(O),O=et.getCamera()),T.isScene===!0&&T.onBeforeRender(E,T,O,C),m=vt.get(T,A.length),m.init(O),A.push(m),ht.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),zt.setFromProjectionMatrix(ht),tt=this.localClippingEnabled,nt=at.init(this.clippingPlanes,tt),S=ct.get(T,d.length),S.init(),d.push(S),et.enabled===!0&&et.isPresenting===!0){const _t=E.xr.getDepthSensingMesh();_t!==null&&Le(_t,O,-1/0,E.sortObjects)}Le(T,O,0,E.sortObjects),S.finish(),E.sortObjects===!0&&S.sort(X,ut),Gt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Gt&&bt.addToRenderList(S,T),this.info.render.frame++,nt===!0&&at.beginShadows();const Y=m.state.shadowsArray;ft.render(Y,T,O),nt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,G=S.transmissive;if(m.setupLights(),O.isArrayCamera){const _t=O.cameras;if(G.length>0)for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++){const Dt=_t[Ct];te(q,G,T,Dt)}Gt&&bt.render(T);for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++){const Dt=_t[Ct];Rn(S,T,Dt,Dt.viewport)}}else G.length>0&&te(q,G,T,O),Gt&&bt.render(T),Rn(S,T,O);C!==null&&(M.updateMultisampleRenderTarget(C),M.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(E,T,O),It.resetDefaultState(),D=-1,k=null,A.pop(),A.length>0?(m=A[A.length-1],nt===!0&&at.setGlobalState(E.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Le(T,O,Y,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||zt.intersectsSprite(T)){q&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ht);const Ct=F.update(T),Lt=T.material;Lt.visible&&S.push(T,Ct,Lt,Y,At.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||zt.intersectsObject(T))){const Ct=F.update(T),Lt=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),At.copy(Ct.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(ht)),Array.isArray(Lt)){const Dt=Ct.groups;for(let Ot=0,Bt=Dt.length;Ot<Bt;Ot++){const Nt=Dt[Ot],ee=Lt[Nt.materialIndex];ee&&ee.visible&&S.push(T,Ct,ee,Y,At.z,Nt)}}else Lt.visible&&S.push(T,Ct,Lt,Y,At.z,null)}}const _t=T.children;for(let Ct=0,Lt=_t.length;Ct<Lt;Ct++)Le(_t[Ct],O,Y,q)}function Rn(T,O,Y,q){const G=T.opaque,_t=T.transmissive,Ct=T.transparent;m.setupLightsView(Y),nt===!0&&at.setGlobalState(E.clippingPlanes,Y),q&&V.viewport(x.copy(q)),G.length>0&&Mn(G,O,Y),_t.length>0&&Mn(_t,O,Y),Ct.length>0&&Mn(Ct,O,Y),V.buffers.depth.setTest(!0),V.buffers.depth.setMask(!0),V.buffers.color.setMask(!0),V.setPolygonOffset(!1)}function te(T,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[q.id]===void 0&&(m.state.transmissionRenderTarget[q.id]=new or(1,1,{generateMipmaps:!0,type:B.has("EXT_color_buffer_half_float")||B.has("EXT_color_buffer_float")?Ds:ei,minFilter:Ei,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const _t=m.state.transmissionRenderTarget[q.id],Ct=q.viewport||x;_t.setSize(Ct.z,Ct.w);const Lt=E.getRenderTarget();E.setRenderTarget(_t),E.getClearColor(W),Z=E.getClearAlpha(),Z<1&&E.setClearColor(16777215,.5),E.clear(),Gt&&bt.render(Y);const Dt=E.toneMapping;E.toneMapping=Ai;const Ot=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),m.setupLightsView(q),nt===!0&&at.setGlobalState(E.clippingPlanes,q),Mn(T,Y,q),M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t),B.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Nt=0,ee=O.length;Nt<ee;Nt++){const ne=O[Nt],se=ne.object,De=ne.geometry,Zt=ne.material,Ft=ne.group;if(Zt.side===Kn&&se.layers.test(q.layers)){const xe=Zt.side;Zt.side=en,Zt.needsUpdate=!0,oi(se,Y,q,De,Zt,Ft),Zt.side=xe,Zt.needsUpdate=!0,Bt=!0}}Bt===!0&&(M.updateMultisampleRenderTarget(_t),M.updateRenderTargetMipmap(_t))}E.setRenderTarget(Lt),E.setClearColor(W,Z),Ot!==void 0&&(q.viewport=Ot),E.toneMapping=Dt}function Mn(T,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let G=0,_t=T.length;G<_t;G++){const Ct=T[G],Lt=Ct.object,Dt=Ct.geometry,Ot=q===null?Ct.material:q,Bt=Ct.group;Lt.layers.test(Y.layers)&&oi(Lt,O,Y,Dt,Ot,Bt)}}function oi(T,O,Y,q,G,_t){T.onBeforeRender(E,O,Y,q,G,_t),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(E,O,Y,q,T,_t),G.transparent===!0&&G.side===Kn&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,E.renderBufferDirect(Y,O,q,G,T,_t),G.side=Pi,G.needsUpdate=!0,E.renderBufferDirect(Y,O,q,G,T,_t),G.side=Kn):E.renderBufferDirect(Y,O,q,G,T,_t),T.onAfterRender(E,O,Y,q,G,_t)}function Pn(T,O,Y){O.isScene!==!0&&(O=Pt);const q=Q.get(T),G=m.state.lights,_t=m.state.shadowsArray,Ct=G.state.version,Lt=ot.getParameters(T,G.state,_t,O,Y),Dt=ot.getProgramCacheKey(Lt);let Ot=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?w:g).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ot===void 0&&(T.addEventListener("dispose",Wt),Ot=new Map,q.programs=Ot);let Bt=Ot.get(Dt);if(Bt!==void 0){if(q.currentProgram===Bt&&q.lightsStateVersion===Ct)return Ze(T,Lt),Bt}else Lt.uniforms=ot.getUniforms(T),T.onBeforeCompile(Lt,E),Bt=ot.acquireProgram(Lt,Dt),Ot.set(Dt,Bt),q.uniforms=Lt.uniforms;const Nt=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Nt.clippingPlanes=at.uniform),Ze(T,Lt),q.needsLights=ai(T),q.lightsStateVersion=Ct,q.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Bt,q.uniformsList=null,Bt}function un(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=To.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function Ze(T,O){const Y=Q.get(T);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function ve(T,O,Y,q,G){O.isScene!==!0&&(O=Pt),M.resetTextureUnits();const _t=O.fog,Ct=q.isMeshStandardMaterial?O.environment:null,Lt=C===null?E.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ni,Dt=(q.isMeshStandardMaterial?w:g).get(q.envMap||Ct),Ot=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Bt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Nt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,ne=!!Y.morphAttributes.color;let se=Ai;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(se=E.toneMapping);const De=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Zt=De!==void 0?De.length:0,Ft=Q.get(q),xe=m.state.lights;if(nt===!0&&(tt===!0||T!==k)){const Qe=T===k&&q.id===D;at.setState(q,T,Qe)}let $t=!1;q.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==xe.state.version||Ft.outputColorSpace!==Lt||G.isBatchedMesh&&Ft.batching===!1||!G.isBatchedMesh&&Ft.batching===!0||G.isBatchedMesh&&Ft.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ft.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ft.instancing===!1||!G.isInstancedMesh&&Ft.instancing===!0||G.isSkinnedMesh&&Ft.skinning===!1||!G.isSkinnedMesh&&Ft.skinning===!0||G.isInstancedMesh&&Ft.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ft.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ft.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ft.instancingMorph===!1&&G.morphTexture!==null||Ft.envMap!==Dt||q.fog===!0&&Ft.fog!==_t||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==at.numPlanes||Ft.numIntersection!==at.numIntersection)||Ft.vertexAlphas!==Ot||Ft.vertexTangents!==Bt||Ft.morphTargets!==Nt||Ft.morphNormals!==ee||Ft.morphColors!==ne||Ft.toneMapping!==se||Ft.morphTargetsCount!==Zt)&&($t=!0):($t=!0,Ft.__version=q.version);let Ge=Ft.currentProgram;$t===!0&&(Ge=Pn(q,O,G));let Ln=!1,be=!1,li=!1;const ue=Ge.getUniforms(),hn=Ft.uniforms;if(V.useProgram(Ge.program)&&(Ln=!0,be=!0,li=!0),q.id!==D&&(D=q.id,be=!0),Ln||k!==T){J.reverseDepthBuffer?(lt.copy(T.projectionMatrix),im(lt),rm(lt),ue.setValue(_,"projectionMatrix",lt)):ue.setValue(_,"projectionMatrix",T.projectionMatrix),ue.setValue(_,"viewMatrix",T.matrixWorldInverse);const Qe=ue.map.cameraPosition;Qe!==void 0&&Qe.setValue(_,St.setFromMatrixPosition(T.matrixWorld)),J.logarithmicDepthBuffer&&ue.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ue.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),k!==T&&(k=T,be=!0,li=!0)}if(G.isSkinnedMesh){ue.setOptional(_,G,"bindMatrix"),ue.setOptional(_,G,"bindMatrixInverse");const Qe=G.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),ue.setValue(_,"boneTexture",Qe.boneTexture,M))}G.isBatchedMesh&&(ue.setOptional(_,G,"batchingTexture"),ue.setValue(_,"batchingTexture",G._matricesTexture,M),ue.setOptional(_,G,"batchingIdTexture"),ue.setValue(_,"batchingIdTexture",G._indirectTexture,M),ue.setOptional(_,G,"batchingColorTexture"),G._colorsTexture!==null&&ue.setValue(_,"batchingColorTexture",G._colorsTexture,M));const Bi=Y.morphAttributes;if((Bi.position!==void 0||Bi.normal!==void 0||Bi.color!==void 0)&&yt.update(G,Y,Ge),(be||Ft.receiveShadow!==G.receiveShadow)&&(Ft.receiveShadow=G.receiveShadow,ue.setValue(_,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(hn.envMap.value=Dt,hn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(hn.envMapIntensity.value=O.environmentIntensity),be&&(ue.setValue(_,"toneMappingExposure",E.toneMappingExposure),Ft.needsLights&&Je(hn,li),_t&&q.fog===!0&&rt.refreshFogUniforms(hn,_t),rt.refreshMaterialUniforms(hn,q,K,H,m.state.transmissionRenderTarget[T.id]),To.upload(_,un(Ft),hn,M)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(To.upload(_,un(Ft),hn,M),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ue.setValue(_,"center",G.center),ue.setValue(_,"modelViewMatrix",G.modelViewMatrix),ue.setValue(_,"normalMatrix",G.normalMatrix),ue.setValue(_,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Qe=q.uniformsGroups;for(let Kr=0,aa=Qe.length;Kr<aa;Kr++){const zs=Qe[Kr];U.update(zs,Ge),U.bind(zs,Ge)}}return Ge}function Je(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function ai(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,O,Y){Q.get(T.texture).__webglTexture=O,Q.get(T.depthTexture).__webglTexture=Y;const q=Q.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||B.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const Y=Q.get(T);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,Y=0){C=T,I=O,R=Y;let q=!0,G=null,_t=!1,Ct=!1;if(T){const Dt=Q.get(T);if(Dt.__useDefaultFramebuffer!==void 0)V.bindFramebuffer(_.FRAMEBUFFER,null),q=!1;else if(Dt.__webglFramebuffer===void 0)M.setupRenderTarget(T);else if(Dt.__hasExternalTextures)M.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Nt=T.depthTexture;if(Dt.__boundDepthTexture!==Nt){if(Nt!==null&&Q.has(Nt)&&(T.width!==Nt.image.width||T.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(T)}}const Ot=T.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Ct=!0);const Bt=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Bt[O])?G=Bt[O][Y]:G=Bt[O],_t=!0):T.samples>0&&M.useMultisampledRTT(T)===!1?G=Q.get(T).__webglMultisampledFramebuffer:Array.isArray(Bt)?G=Bt[Y]:G=Bt,x.copy(T.viewport),y.copy(T.scissor),L=T.scissorTest}else x.copy(dt).multiplyScalar(K).floor(),y.copy(pt).multiplyScalar(K).floor(),L=gt;if(V.bindFramebuffer(_.FRAMEBUFFER,G)&&q&&V.drawBuffers(T,G),V.viewport(x),V.scissor(y),V.setScissorTest(L),_t){const Dt=Q.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,Y)}else if(Ct){const Dt=Q.get(T.texture),Ot=O||0;_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,Dt.__webglTexture,Y||0,Ot)}D=-1},this.readRenderTargetPixels=function(T,O,Y,q,G,_t,Ct){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){V.bindFramebuffer(_.FRAMEBUFFER,Lt);try{const Dt=T.texture,Ot=Dt.format,Bt=Dt.type;if(!J.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!J.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&Y>=0&&Y<=T.height-G&&_.readPixels(O,Y,q,G,Rt.convert(Ot),Rt.convert(Bt),_t)}finally{const Dt=C!==null?Q.get(C).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(T,O,Y,q,G,_t,Ct){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){const Dt=T.texture,Ot=Dt.format,Bt=Dt.type;if(!J.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!J.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=T.width-q&&Y>=0&&Y<=T.height-G){V.bindFramebuffer(_.FRAMEBUFFER,Lt);const Nt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Nt),_.bufferData(_.PIXEL_PACK_BUFFER,_t.byteLength,_.STREAM_READ),_.readPixels(O,Y,q,G,Rt.convert(Ot),Rt.convert(Bt),0);const ee=C!==null?Q.get(C).__webglFramebuffer:null;V.bindFramebuffer(_.FRAMEBUFFER,ee);const ne=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await nm(_,ne,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Nt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,_t),_.deleteBuffer(Nt),_.deleteSync(ne),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,O=null,Y=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,T=arguments[1]);const q=Math.pow(2,-Y),G=Math.floor(T.image.width*q),_t=Math.floor(T.image.height*q),Ct=O!==null?O.x:0,Lt=O!==null?O.y:0;M.setTexture2D(T,0),_.copyTexSubImage2D(_.TEXTURE_2D,Y,0,0,Ct,Lt,G,_t),V.unbindTexture()},this.copyTextureToTexture=function(T,O,Y=null,q=null,G=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,T=arguments[1],O=arguments[2],G=arguments[3]||0,Y=null);let _t,Ct,Lt,Dt,Ot,Bt;Y!==null?(_t=Y.max.x-Y.min.x,Ct=Y.max.y-Y.min.y,Lt=Y.min.x,Dt=Y.min.y):(_t=T.image.width,Ct=T.image.height,Lt=0,Dt=0),q!==null?(Ot=q.x,Bt=q.y):(Ot=0,Bt=0);const Nt=Rt.convert(O.format),ee=Rt.convert(O.type);M.setTexture2D(O,0),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,O.unpackAlignment);const ne=_.getParameter(_.UNPACK_ROW_LENGTH),se=_.getParameter(_.UNPACK_IMAGE_HEIGHT),De=_.getParameter(_.UNPACK_SKIP_PIXELS),Zt=_.getParameter(_.UNPACK_SKIP_ROWS),Ft=_.getParameter(_.UNPACK_SKIP_IMAGES),xe=T.isCompressedTexture?T.mipmaps[G]:T.image;_.pixelStorei(_.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Lt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Dt),T.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,G,Ot,Bt,_t,Ct,Nt,ee,xe.data):T.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,G,Ot,Bt,xe.width,xe.height,Nt,xe.data):_.texSubImage2D(_.TEXTURE_2D,G,Ot,Bt,_t,Ct,Nt,ee,xe),_.pixelStorei(_.UNPACK_ROW_LENGTH,ne),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(_.UNPACK_SKIP_PIXELS,De),_.pixelStorei(_.UNPACK_SKIP_ROWS,Zt),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ft),G===0&&O.generateMipmaps&&_.generateMipmap(_.TEXTURE_2D),V.unbindTexture()},this.copyTextureToTexture3D=function(T,O,Y=null,q=null,G=0){T.isTexture!==!0&&(Eo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,T=arguments[2],O=arguments[3],G=arguments[4]||0);let _t,Ct,Lt,Dt,Ot,Bt,Nt,ee,ne;const se=T.isCompressedTexture?T.mipmaps[G]:T.image;Y!==null?(_t=Y.max.x-Y.min.x,Ct=Y.max.y-Y.min.y,Lt=Y.max.z-Y.min.z,Dt=Y.min.x,Ot=Y.min.y,Bt=Y.min.z):(_t=se.width,Ct=se.height,Lt=se.depth,Dt=0,Ot=0,Bt=0),q!==null?(Nt=q.x,ee=q.y,ne=q.z):(Nt=0,ee=0,ne=0);const De=Rt.convert(O.format),Zt=Rt.convert(O.type);let Ft;if(O.isData3DTexture)M.setTexture3D(O,0),Ft=_.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)M.setTexture2DArray(O,0),Ft=_.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,O.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,O.unpackAlignment);const xe=_.getParameter(_.UNPACK_ROW_LENGTH),$t=_.getParameter(_.UNPACK_IMAGE_HEIGHT),Ge=_.getParameter(_.UNPACK_SKIP_PIXELS),Ln=_.getParameter(_.UNPACK_SKIP_ROWS),be=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,se.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,se.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Dt),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ot),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Bt),T.isDataTexture||T.isData3DTexture?_.texSubImage3D(Ft,G,Nt,ee,ne,_t,Ct,Lt,De,Zt,se.data):O.isCompressedArrayTexture?_.compressedTexSubImage3D(Ft,G,Nt,ee,ne,_t,Ct,Lt,De,se.data):_.texSubImage3D(Ft,G,Nt,ee,ne,_t,Ct,Lt,De,Zt,se),_.pixelStorei(_.UNPACK_ROW_LENGTH,xe),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,$t),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ge),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ln),_.pixelStorei(_.UNPACK_SKIP_IMAGES,be),G===0&&O.generateMipmaps&&_.generateMipmap(Ft),V.unbindTexture()},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&M.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?M.setTextureCube(T,0):T.isData3DTexture?M.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?M.setTexture2DArray(T,0):M.setTexture2D(T,0),V.unbindTexture()},this.resetState=function(){I=0,R=0,C=null,V.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=t===dc?"display-p3":"srgb",n.unpackColorSpace=ae.workingColorSpace===qo?"display-p3":"srgb"}}class gx extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Gl extends qr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Jt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const No=new j,Fo=new j,Hu=new ge,ns=new Us,lo=new Xr,Oa=new j,Vu=new j;class Gu extends Ke{constructor(t=new cn,n=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const n=t.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)No.fromBufferAttribute(n,r-1),Fo.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=No.distanceTo(Fo);t.setAttribute("lineDistance",new An(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),lo.copy(i.boundingSphere),lo.applyMatrix4(r),lo.radius+=s,t.ray.intersectsSphere(lo)===!1)return;Hu.copy(r).invert(),ns.copy(t.ray).applyMatrix4(Hu);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,f=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),v=Math.min(c.count,o.start+o.count);for(let S=p,m=v-1;S<m;S+=u){const d=c.getX(S),A=c.getX(S+1),E=co(this,t,ns,l,d,A);E&&n.push(E)}if(this.isLineLoop){const S=c.getX(v-1),m=c.getX(p),d=co(this,t,ns,l,S,m);d&&n.push(d)}}else{const p=Math.max(0,o.start),v=Math.min(f.count,o.start+o.count);for(let S=p,m=v-1;S<m;S+=u){const d=co(this,t,ns,l,S,S+1);d&&n.push(d)}if(this.isLineLoop){const S=co(this,t,ns,l,v-1,p);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function co(e,t,n,i,r,s){const o=e.geometry.attributes.position;if(No.fromBufferAttribute(o,r),Fo.fromBufferAttribute(o,s),n.distanceSqToSegment(No,Fo,Oa,Vu)>i)return;Oa.applyMatrix4(e.matrixWorld);const l=t.ray.origin.distanceTo(Oa);if(!(l<t.near||l>t.far))return{distance:l,point:Vu.clone().applyMatrix4(e.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:e}}class vf extends qr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ku=new ge,kl=new Us,uo=new Xr,ho=new j;class _x extends Ke{constructor(t=new cn,n=new vf){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=n,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,n){const i=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(r),uo.radius+=s,t.ray.intersectsSphere(uo)===!1)return;ku.copy(r).invert(),kl.copy(t.ray).applyMatrix4(ku);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=i.index,h=i.attributes.position;if(u!==null){const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let v=f,S=p;v<S;v++){const m=u.getX(v);ho.fromBufferAttribute(h,m),Wu(ho,m,l,r,t,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let v=f,S=p;v<S;v++)ho.fromBufferAttribute(h,v),Wu(ho,v,l,r,t,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wu(e,t,n,i,r,s,o){const a=kl.distanceSqToPoint(e);if(a<n){const l=new j;kl.closestPointToPoint(e,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class vx extends He{constructor(t,n,i,r,s,o,a,l,u){super(t,n,i,r,s,o,a,l,u),this.isCanvasTexture=!0,this.needsUpdate=!0}}class vc extends cn{constructor(t=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new j,f=new j,p=[],v=[],S=[],m=[];for(let d=0;d<=i;d++){const A=[],E=d/i;let b=0;d===0&&o===0?b=.5/n:d===i&&l===Math.PI&&(b=-.5/n);for(let I=0;I<=n;I++){const R=I/n;h.x=-t*Math.cos(r+R*s)*Math.sin(o+E*a),h.y=t*Math.cos(o+E*a),h.z=t*Math.sin(r+R*s)*Math.sin(o+E*a),v.push(h.x,h.y,h.z),f.copy(h).normalize(),S.push(f.x,f.y,f.z),m.push(R+b,1-E),A.push(u++)}c.push(A)}for(let d=0;d<i;d++)for(let A=0;A<n;A++){const E=c[d][A+1],b=c[d][A],I=c[d+1][A],R=c[d+1][A+1];(d!==0||o>0)&&p.push(E,b,R),(d!==i-1||l<Math.PI)&&p.push(b,I,R)}this.setIndex(p),this.setAttribute("position",new An(v,3)),this.setAttribute("normal",new An(S,3)),this.setAttribute("uv",new An(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}const Xu={enabled:!1,files:{},add:function(e,t){this.enabled!==!1&&(this.files[e]=t)},get:function(e){if(this.enabled!==!1)return this.files[e]},remove:function(e){delete this.files[e]},clear:function(){this.files={}}};class xx{constructor(t,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=t,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,f=u.length;h<f;h+=2){const p=u[h],v=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return v}return null}}}const Mx=new xx;class xc{constructor(t){this.manager=t!==void 0?t:Mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,n){const i=this;return new Promise(function(r,s){i.load(t,r,n,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}xc.DEFAULT_MATERIAL_NAME="__DEFAULT";class Sx extends xc{constructor(t){super(t)}load(t,n,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Xu.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){n&&n(o),s.manager.itemEnd(t)},0),o;const a=ys("img");function l(){c(),Xu.add(t,this),n&&n(this),s.manager.itemEnd(t)}function u(h){c(),r&&r(h),s.manager.itemError(t),s.manager.itemEnd(t)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class yx extends xc{constructor(t){super(t)}load(t,n,i,r){const s=new He,o=new Sx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}const qu=new ge;class Ex{constructor(t,n,i=0,r=1/0){this.ray=new Us(t,n),this.near=i,this.far=r,this.camera=null,this.layers=new mc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,n){this.ray.set(t,n)}setFromCamera(t,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(t){return qu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qu),this}intersectObject(t,n=!0,i=[]){return Wl(t,this,i,n),i.sort(Yu),i}intersectObjects(t,n=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Wl(t[r],this,i,n);return i.sort(Yu),i}}function Yu(e,t){return e.distance-t.distance}function Wl(e,t,n,i){let r=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(r=!1),r===!0&&i===!0){const s=e.children;for(let o=0,a=s.length;o<a;o++)Wl(s[o],t,n,!0)}}class ju{constructor(t=1,n=0,i=0){return this.radius=t,this.phi=n,this.theta=i,this}set(t,n,i){return this.radius=t,this.phi=n,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,n,i){return this.radius=Math.sqrt(t*t+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Oe(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Tx extends lr{constructor(t,n=null){super(),this.object=t,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:oc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=oc);var bx=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ax(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var xf={exports:{}};(function(e,t){(function(n,i){e.exports=i()})(bx,function(){var n=function(){function i(p){return o.appendChild(p.dom),p}function r(p){for(var v=0;v<o.children.length;v++)o.children[v].style.display=v===p?"block":"none";s=p}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(p){p.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),l=a,u=0,c=i(new n.Panel("FPS","#0ff","#002")),h=i(new n.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var f=i(new n.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:i,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){u++;var p=(performance||Date).now();if(h.update(p-a,200),p>l+1e3&&(c.update(1e3*u/(p-l),100),l=p,u=0,f)){var v=performance.memory;f.update(v.usedJSHeapSize/1048576,v.jsHeapSizeLimit/1048576)}return p},update:function(){a=this.end()},domElement:o,setMode:r}};return n.Panel=function(i,r,s){var o=1/0,a=0,l=Math.round,u=l(window.devicePixelRatio||1),c=80*u,h=48*u,f=3*u,p=2*u,v=3*u,S=15*u,m=74*u,d=30*u,A=document.createElement("canvas");A.width=c,A.height=h,A.style.cssText="width:80px;height:48px";var E=A.getContext("2d");return E.font="bold "+9*u+"px Helvetica,Arial,sans-serif",E.textBaseline="top",E.fillStyle=s,E.fillRect(0,0,c,h),E.fillStyle=r,E.fillText(i,f,p),E.fillRect(v,S,m,d),E.fillStyle=s,E.globalAlpha=.9,E.fillRect(v,S,m,d),{dom:A,update:function(b,I){o=Math.min(o,b),a=Math.max(a,b),E.fillStyle=s,E.globalAlpha=1,E.fillRect(0,0,c,S),E.fillStyle=r,E.fillText(l(b)+" "+i+" ("+l(o)+"-"+l(a)+")",f,p),E.drawImage(A,v+u,S,m-u,d,v,S,m-u,d),E.fillRect(v+m-u,S,u,d),E.fillStyle=s,E.globalAlpha=.9,E.fillRect(v+m-u,S,u,l((1-b/I)*d))}}},n})})(xf);var wx=xf.exports;const Cx=Ax(wx),Ku={type:"change"},Mc={type:"start"},Mf={type:"end"},fo=new Us,$u=new _i,Rx=Math.cos(70*tm.DEG2RAD),Ae=new j,tn=2*Math.PI,le={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Ba=1e-6;class Px extends Tx{constructor(t,n=null){super(t,n),this.state=le.NONE,this.enabled=!0,this.target=new j,this.cursor=new j,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Cr.ROTATE,TWO:Cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new j,this._lastQuaternion=new ar,this._lastTargetPosition=new j,this._quat=new ar().setFromUnitVectors(t.up,new j(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ju,this._sphericalDelta=new ju,this._scale=1,this._panOffset=new j,this._rotateStart=new Kt,this._rotateEnd=new Kt,this._rotateDelta=new Kt,this._panStart=new Kt,this._panEnd=new Kt,this._panDelta=new Kt,this._dollyStart=new Kt,this._dollyEnd=new Kt,this._dollyDelta=new Kt,this._dollyDirection=new j,this._mouse=new Kt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Dx.bind(this),this._onPointerDown=Lx.bind(this),this._onPointerUp=Ix.bind(this),this._onContextMenu=Hx.bind(this),this._onMouseWheel=Fx.bind(this),this._onKeyDown=Ox.bind(this),this._onTouchStart=Bx.bind(this),this._onTouchMove=zx.bind(this),this._onMouseDown=Ux.bind(this),this._onMouseMove=Nx.bind(this),this._interceptControlDown=Vx.bind(this),this._interceptControlUp=Gx.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ku),this.update(),this.state=le.NONE}update(t=null){const n=this.object.position;Ae.copy(n).sub(this.target),Ae.applyQuaternion(this._quat),this._spherical.setFromVector3(Ae),this.autoRotate&&this.state===le.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Ae.setFromSpherical(this._spherical),Ae.applyQuaternion(this._quatInverse),n.copy(this.target).add(Ae),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Ae.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new j(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new j(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Ae.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(fo.origin.copy(this.object.position),fo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(fo.direction))<Rx?this.object.lookAt(this.target):($u.setFromNormalAndCoplanarPoint(this.object.up,this.target),fo.intersectPlane($u,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Ba||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Ba||this._lastTargetPosition.distanceToSquared(this.target)>Ba?(this.dispatchEvent(Ku),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){const n=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,n){Ae.setFromMatrixColumn(n,0),Ae.multiplyScalar(-t),this._panOffset.add(Ae)}_panUp(t,n){this.screenSpacePanning===!0?Ae.setFromMatrixColumn(n,1):(Ae.setFromMatrixColumn(n,0),Ae.crossVectors(this.object.up,Ae)),Ae.multiplyScalar(t),this._panOffset.add(Ae)}_pan(t,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Ae.copy(r).sub(this.target);let s=Ae.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=t-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let n=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),r=.5*(t.pageX+i.x),s=.5*(t.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),i=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const n=this._getSecondPointerPosition(t),i=t.pageX-n.x,r=t.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+n.x)*.5,a=(t.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(t){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==t.pointerId)return!0;return!1}_trackPointer(t){let n=this._pointerPositions[t.pointerId];n===void 0&&(n=new Kt,this._pointerPositions[t.pointerId]=n),n.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const n=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(t){const n=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Lx(e){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(e.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(e)&&(this._addPointer(e),e.pointerType==="touch"?this._onTouchStart(e):this._onMouseDown(e)))}function Dx(e){this.enabled!==!1&&(e.pointerType==="touch"?this._onTouchMove(e):this._onMouseMove(e))}function Ix(e){switch(this._removePointer(e),this._pointers.length){case 0:this.domElement.releasePointerCapture(e.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Mf),this.state=le.NONE;break;case 1:const t=this._pointers[0],n=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:n.x,pageY:n.y});break}}function Ux(e){let t;switch(e.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(e),this.state=le.DOLLY;break;case Pr.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}break;case Pr.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(e),this.state=le.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(e),this.state=le.PAN}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Mc)}function Nx(e){switch(this.state){case le.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(e);break;case le.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(e);break;case le.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(e);break}}function Fx(e){this.enabled===!1||this.enableZoom===!1||this.state!==le.NONE||(e.preventDefault(),this.dispatchEvent(Mc),this._handleMouseWheel(this._customWheelEvent(e)),this.dispatchEvent(Mf))}function Ox(e){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(e)}function Bx(e){switch(this._trackPointer(e),this._pointers.length){case 1:switch(this.touches.ONE){case Cr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(e),this.state=le.TOUCH_ROTATE;break;case Cr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(e),this.state=le.TOUCH_PAN;break;default:this.state=le.NONE}break;case 2:switch(this.touches.TWO){case Cr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(e),this.state=le.TOUCH_DOLLY_PAN;break;case Cr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(e),this.state=le.TOUCH_DOLLY_ROTATE;break;default:this.state=le.NONE}break;default:this.state=le.NONE}this.state!==le.NONE&&this.dispatchEvent(Mc)}function zx(e){switch(this._trackPointer(e),this.state){case le.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(e),this.update();break;case le.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(e),this.update();break;case le.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(e),this.update();break;case le.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(e),this.update();break;default:this.state=le.NONE}}function Hx(e){this.enabled!==!1&&e.preventDefault()}function Vx(e){e.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Gx(e){e.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}/*!
 * satellite-js v5.0.0
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/satellite-js
 * License: MIT
 */var Ve=Math.PI,me=Ve*2,os=Ve/180,kx=180/Ve,Wx=1440,Xx=398600.8,an=6378.135,ti=60/Math.sqrt(an*an*an/Xx),za=an*ti/60,qx=1/ti,er=.001082616,Yx=-253881e-11,jx=-165597e-11,nr=Yx/er,Es=2/3;function Kx(e,t){for(var n=[31,e%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(t),r=1,s=0;i>s+n[r-1]&&r<12;)s+=n[r-1],r+=1;var o=r,a=i-s,l=(t-i)*24,u=Math.floor(l);l=(l-u)*60;var c=Math.floor(l),h=(l-c)*60;return{mon:o,day:a,hr:u,minute:c,sec:h}}function Zu(e,t,n,i,r,s){var o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*e-Math.floor(7*(e+Math.floor((t+9)/12))*.25)+Math.floor(275*t/9)+n+17210135e-1+((o/6e4+s/60+r)/60+i)/24}function Sc(e,t,n,i,r,s,o){if(e instanceof Date){var a=e;return Zu(a.getUTCFullYear(),a.getUTCMonth()+1,a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())}return Zu(e,t,n,i,r,s,o)}function Sf(e,t){var n=e.e3,i=e.ee2,r=e.peo,s=e.pgho,o=e.pho,a=e.pinco,l=e.plo,u=e.se2,c=e.se3,h=e.sgh2,f=e.sgh3,p=e.sgh4,v=e.sh2,S=e.sh3,m=e.si2,d=e.si3,A=e.sl2,E=e.sl3,b=e.sl4,I=e.t,R=e.xgh2,C=e.xgh3,D=e.xgh4,k=e.xh2,x=e.xh3,y=e.xi2,L=e.xi3,W=e.xl2,Z=e.xl3,it=e.xl4,H=e.zmol,K=e.zmos,X=t.init,ut=t.opsmode,dt=t.ep,pt=t.inclp,gt=t.nodep,zt=t.argpp,nt=t.mp,tt,lt,ht,St,At,Pt,Gt,Ut,_,P,B,J,V,$,Q,M,g,w,z,N,F,ot=119459e-10,rt=.01675,ct=.00015835218,vt=.0549;F=K+ot*I,X==="y"&&(F=K),N=F+2*rt*Math.sin(F),g=Math.sin(N),P=.5*g*g-.25,B=-.5*g*Math.cos(N);var at=u*P+c*B,ft=m*P+d*B,bt=A*P+E*B+b*g,yt=h*P+f*B+p*g,mt=v*P+S*B;F=H+ct*I,X==="y"&&(F=H),N=F+2*vt*Math.sin(F),g=Math.sin(N),P=.5*g*g-.25,B=-.5*g*Math.cos(N);var Ht=i*P+n*B,Rt=y*P+L*B,It=W*P+Z*B+it*g,U=R*P+C*B+D*g,xt=k*P+x*B;return J=at+Ht,Q=ft+Rt,M=bt+It,V=yt+U,$=mt+xt,X==="n"&&(J-=r,Q-=a,M-=l,V-=s,$-=o,pt+=Q,dt+=J,St=Math.sin(pt),ht=Math.cos(pt),pt>=.2?($/=St,V-=ht*$,zt+=V,gt+=$,nt+=M):(Pt=Math.sin(gt),At=Math.cos(gt),tt=St*Pt,lt=St*At,Gt=$*At+Q*ht*Pt,Ut=-$*Pt+Q*ht*At,tt+=Gt,lt+=Ut,gt%=me,gt<0&&ut==="a"&&(gt+=me),w=nt+zt+ht*gt,_=M+V-Q*gt*St,w+=_,z=gt,gt=Math.atan2(tt,lt),gt<0&&ut==="a"&&(gt+=me),Math.abs(z-gt)>Ve&&(gt<z?gt+=me:gt-=me),nt+=M,zt=w-nt-ht*gt)),{ep:dt,inclp:pt,nodep:gt,argpp:zt,mp:nt}}function $x(e){var t=e.epoch,n=e.ep,i=e.argpp,r=e.tc,s=e.inclp,o=e.nodep,a=e.np,l,u,c,h,f,p,v,S,m,d,A,E,b,I,R,C,D,k,x,y,L,W,Z,it,H,K,X,ut,dt,pt,gt,zt,nt,tt,lt,ht,St,At,Pt,Gt,Ut,_,P,B,J,V,$,Q,M,g,w,z,N,F,ot,rt,ct,vt,at,ft,bt,yt,mt,Ht=.01675,Rt=.0549,It=29864797e-13,U=47968065e-14,xt=.39785416,et=.91744867,st=.1945905,Tt=-.98088458,Et=a,Wt=n,Qt=Math.sin(o),ce=Math.cos(o),kt=Math.sin(i),re=Math.cos(i),_e=Math.sin(s),$e=Math.cos(s),Mt=Wt*Wt,Ee=1-Mt,Le=Math.sqrt(Ee),Rn=0,te=0,Mn=0,oi=0,Pn=0,un=t+18261.5+r/1440,Ze=(4.523602-.00092422029*un)%me,ve=Math.sin(Ze),Je=Math.cos(Ze),ai=.91375164-.03568096*Je,T=Math.sqrt(1-ai*ai),O=.089683511*ve/T,Y=Math.sqrt(1-O*O),q=5.8351514+.001944368*un,G=.39785416*ve/T,_t=Y*Je+.91744867*O*ve;G=Math.atan2(G,_t),G+=q-Ze;var Ct=Math.cos(G),Lt=Math.sin(G);y=st,L=Tt,it=et,H=xt,W=ce,Z=Qt,A=It;for(var Dt=1/Et,Ot=0;Ot<2;)Ot+=1,l=y*W+L*it*Z,c=-L*W+y*it*Z,v=-y*Z+L*it*W,S=L*H,m=L*Z+y*it*W,d=y*H,u=$e*v+_e*S,h=$e*m+_e*d,f=-_e*v+$e*S,p=-_e*m+$e*d,E=l*re+u*kt,b=c*re+h*kt,I=-l*kt+u*re,R=-c*kt+h*re,C=f*kt,D=p*kt,k=f*re,x=p*re,bt=12*E*E-3*I*I,yt=24*E*b-6*I*R,mt=12*b*b-3*R*R,z=3*(l*l+u*u)+bt*Mt,N=6*(l*c+u*h)+yt*Mt,F=3*(c*c+h*h)+mt*Mt,ot=-6*l*f+Mt*(-24*E*k-6*I*C),rt=-6*(l*p+c*f)+Mt*(-24*(b*k+E*x)+-6*(I*D+R*C)),ct=-6*c*p+Mt*(-24*b*x-6*R*D),vt=6*u*f+Mt*(24*E*C-6*I*k),at=6*(h*f+u*p)+Mt*(24*(b*C+E*D)-6*(R*k+I*x)),ft=6*h*p+Mt*(24*b*D-6*R*x),z=z+z+Ee*bt,N=N+N+Ee*yt,F=F+F+Ee*mt,$=A*Dt,V=-.5*$/Le,Q=$*Le,J=-15*Wt*Q,M=E*I+b*R,g=b*I+E*R,w=b*R-E*I,Ot===1&&(K=J,X=V,ut=$,dt=Q,pt=M,gt=g,zt=w,nt=z,tt=N,lt=F,ht=ot,St=rt,At=ct,Pt=vt,Gt=at,Ut=ft,_=bt,P=yt,B=mt,y=Ct,L=Lt,it=ai,H=T,W=Y*ce+O*Qt,Z=Qt*Y-ce*O,A=U);var Bt=(4.7199672+(.2299715*un-q))%me,Nt=(6.2565837+.017201977*un)%me,ee=2*K*gt,ne=2*K*zt,se=2*X*St,De=2*X*(At-ht),Zt=-2*ut*tt,Ft=-2*ut*(lt-nt),xe=-2*ut*(-21-9*Mt)*Ht,$t=2*dt*P,Ge=2*dt*(B-_),Ln=-18*dt*Ht,be=-2*X*Gt,li=-2*X*(Ut-Pt),ue=2*J*g,hn=2*J*w,Bi=2*V*rt,Qe=2*V*(ct-ot),Kr=-2*$*N,aa=-2*$*(F-z),zs=-2*$*(-21-9*Mt)*Rt,kd=2*Q*yt,Wd=2*Q*(mt-bt),Xd=-18*Q*Rt,qd=-2*V*at,Yd=-2*V*(ft-vt);return{snodm:Qt,cnodm:ce,sinim:_e,cosim:$e,sinomm:kt,cosomm:re,day:un,e3:hn,ee2:ue,em:Wt,emsq:Mt,gam:q,peo:Rn,pgho:oi,pho:Pn,pinco:te,plo:Mn,rtemsq:Le,se2:ee,se3:ne,sgh2:$t,sgh3:Ge,sgh4:Ln,sh2:be,sh3:li,si2:se,si3:De,sl2:Zt,sl3:Ft,sl4:xe,s1:J,s2:V,s3:$,s4:Q,s5:M,s6:g,s7:w,ss1:K,ss2:X,ss3:ut,ss4:dt,ss5:pt,ss6:gt,ss7:zt,sz1:nt,sz2:tt,sz3:lt,sz11:ht,sz12:St,sz13:At,sz21:Pt,sz22:Gt,sz23:Ut,sz31:_,sz32:P,sz33:B,xgh2:kd,xgh3:Wd,xgh4:Xd,xh2:qd,xh3:Yd,xi2:Bi,xi3:Qe,xl2:Kr,xl3:aa,xl4:zs,nm:Et,z1:z,z2:N,z3:F,z11:ot,z12:rt,z13:ct,z21:vt,z22:at,z23:ft,z31:bt,z32:yt,z33:mt,zmol:Bt,zmos:Nt}}function Zx(e){var t=e.cosim,n=e.argpo,i=e.s1,r=e.s2,s=e.s3,o=e.s4,a=e.s5,l=e.sinim,u=e.ss1,c=e.ss2,h=e.ss3,f=e.ss4,p=e.ss5,v=e.sz1,S=e.sz3,m=e.sz11,d=e.sz13,A=e.sz21,E=e.sz23,b=e.sz31,I=e.sz33,R=e.t,C=e.tc,D=e.gsto,k=e.mo,x=e.mdot,y=e.no,L=e.nodeo,W=e.nodedot,Z=e.xpidot,it=e.z1,H=e.z3,K=e.z11,X=e.z13,ut=e.z21,dt=e.z23,pt=e.z31,gt=e.z33,zt=e.ecco,nt=e.eccsq,tt=e.emsq,lt=e.em,ht=e.argpm,St=e.inclm,At=e.mm,Pt=e.nm,Gt=e.nodem,Ut=e.irez,_=e.atime,P=e.d2201,B=e.d2211,J=e.d3210,V=e.d3222,$=e.d4410,Q=e.d4422,M=e.d5220,g=e.d5232,w=e.d5421,z=e.d5433,N=e.dedt,F=e.didt,ot=e.dmdt,rt=e.dnodt,ct=e.domdt,vt=e.del1,at=e.del2,ft=e.del3,bt=e.xfact,yt=e.xlamo,mt=e.xli,Ht=e.xni,Rt,It,U,xt,et,st,Tt,Et,Wt,Qt,ce,kt,re,_e,$e,Mt,Ee,Le,Rn,te,Mn,oi,Pn,un,Ze,ve,Je,ai,T,O,Y,q,G=17891679e-13,_t=21460748e-13,Ct=22123015e-14,Lt=17891679e-13,Dt=73636953e-16,Ot=21765803e-16,Bt=.0043752690880113,Nt=37393792e-14,ee=11428639e-14,ne=.00015835218,se=119459e-10;Ut=0,Pt<.0052359877&&Pt>.0034906585&&(Ut=1),Pt>=.00826&&Pt<=.00924&&lt>=.5&&(Ut=2);var De=u*se*p,Zt=c*se*(m+d),Ft=-se*h*(v+S-14-6*tt),xe=f*se*(b+I-6),$t=-se*c*(A+E);(St<.052359877||St>Ve-.052359877)&&($t=0),l!==0&&($t/=l);var Ge=xe-t*$t;N=De+i*ne*a,F=Zt+r*ne*(K+X),ot=Ft-ne*s*(it+H-14-6*tt);var Ln=o*ne*(pt+gt-6),be=-ne*r*(ut+dt);(St<.052359877||St>Ve-.052359877)&&(be=0),ct=Ge+Ln,rt=$t,l!==0&&(ct-=t/l*be,rt+=be/l);var li=0,ue=(D+C*Bt)%me;if(lt+=N*R,St+=F*R,ht+=ct*R,Gt+=rt*R,At+=ot*R,Ut!==0){if(O=Math.pow(Pt/ti,Es),Ut===2){Y=t*t;var hn=lt;lt=zt;var Bi=tt;tt=nt,q=lt*tt,_e=-.306-(lt-.64)*.44,lt<=.65?($e=3.616-13.247*lt+16.29*tt,Ee=-19.302+117.39*lt-228.419*tt+156.591*q,Le=-18.9068+109.7927*lt-214.6334*tt+146.5816*q,Rn=-41.122+242.694*lt-471.094*tt+313.953*q,te=-146.407+841.88*lt-1629.014*tt+1083.435*q,Mn=-532.114+3017.977*lt-5740.032*tt+3708.276*q):($e=-72.099+331.819*lt-508.738*tt+266.724*q,Ee=-346.844+1582.851*lt-2415.925*tt+1246.113*q,Le=-342.585+1554.908*lt-2366.899*tt+1215.972*q,Rn=-1052.797+4758.686*lt-7193.992*tt+3651.957*q,te=-3581.69+16178.11*lt-24462.77*tt+12422.52*q,lt>.715?Mn=-5149.66+29936.92*lt-54087.36*tt+31324.56*q:Mn=1464.74-4664.75*lt+3763.64*tt),lt<.7?(un=-919.2277+4988.61*lt-9064.77*tt+5542.21*q,oi=-822.71072+4568.6173*lt-8491.4146*tt+5337.524*q,Pn=-853.666+4690.25*lt-8624.77*tt+5341.4*q):(un=-37995.78+161616.52*lt-229838.2*tt+109377.94*q,oi=-51752.104+218913.95*lt-309468.16*tt+146349.42*q,Pn=-40023.88+170470.89*lt-242699.48*tt+115605.82*q),Ze=l*l,Rt=.75*(1+2*t+Y),It=1.5*Ze,xt=1.875*l*(1-2*t-3*Y),et=-1.875*l*(1+2*t-3*Y),Tt=35*Ze*Rt,Et=39.375*Ze*Ze,Wt=9.84375*l*(Ze*(1-2*t-5*Y)+.33333333*(-2+4*t+6*Y)),Qt=l*(4.92187512*Ze*(-2-4*t+10*Y)+6.56250012*(1+2*t-3*Y)),ce=29.53125*l*(2-8*t+Y*(-12+8*t+10*Y)),kt=29.53125*l*(-2-8*t+Y*(12+8*t-10*Y)),ai=Pt*Pt,T=O*O,Je=3*ai*T,ve=Je*Lt,P=ve*Rt*_e,B=ve*It*$e,Je*=O,ve=Je*Nt,J=ve*xt*Ee,V=ve*et*Le,Je*=O,ve=2*Je*Dt,$=ve*Tt*Rn,Q=ve*Et*te,Je*=O,ve=Je*ee,M=ve*Wt*Mn,g=ve*Qt*Pn,ve=2*Je*Ot,w=ve*ce*oi,z=ve*kt*un,yt=(k+L+L-(ue+ue))%me,bt=x+ot+2*(W+rt-Bt)-y,lt=hn,tt=Bi}Ut===1&&(re=1+tt*(-2.5+.8125*tt),Ee=1+2*tt,Mt=1+tt*(-6+6.60937*tt),Rt=.75*(1+t)*(1+t),U=.9375*l*l*(1+3*t)-.75*(1+t),st=1+t,st*=1.875*st*st,vt=3*Pt*Pt*O*O,at=2*vt*Rt*re*G,ft=3*vt*st*Mt*Ct*O,vt=vt*U*Ee*_t*O,yt=(k+L+n-ue)%me,bt=x+Z+ot+ct+rt-(y+Bt)),mt=yt,Ht=y,_=0,Pt=y+li}return{em:lt,argpm:ht,inclm:St,mm:At,nm:Pt,nodem:Gt,irez:Ut,atime:_,d2201:P,d2211:B,d3210:J,d3222:V,d4410:$,d4422:Q,d5220:M,d5232:g,d5421:w,d5433:z,dedt:N,didt:F,dmdt:ot,dndt:li,dnodt:rt,domdt:ct,del1:vt,del2:at,del3:ft,xfact:bt,xlamo:yt,xli:mt,xni:Ht}}function Ju(e){var t=(e-2451545)/36525,n=-62e-7*t*t*t+.093104*t*t+(876600*3600+8640184812866e-6)*t+67310.54841;return n=n*os/240%me,n<0&&(n+=me),n}function yc(){return(arguments.length<=0?void 0:arguments[0])instanceof Date||arguments.length>1?Ju(Sc.apply(void 0,arguments)):Ju.apply(void 0,arguments)}function Jx(e){var t=e.ecco,n=e.epoch,i=e.inclo,r=e.opsmode,s=e.no,o=t*t,a=1-o,l=Math.sqrt(a),u=Math.cos(i),c=u*u,h=Math.pow(ti/s,Es),f=.75*er*(3*c-1)/(l*a),p=f/(h*h),v=h*(1-p*p-p*(1/3+134*p*p/81));p=f/(v*v),s/=1+p;var S=Math.pow(ti/s,Es),m=Math.sin(i),d=S*a,A=1-5*c,E=-A-c-c,b=1/S,I=d*d,R=S*(1-t),C="n",D;if(r==="a"){var k=n-7305,x=Math.floor(k+1e-8),y=k-x,L=.017202791694070362,W=1.7321343856509375,Z=5075514194322695e-30,it=L+me;D=(W+L*x+it*y+k*k*Z)%me,D<0&&(D+=me)}else D=yc(n+24332815e-1);return{no:s,method:C,ainv:b,ao:S,con41:E,con42:A,cosio:u,cosio2:c,eccsq:o,omeosq:a,posq:I,rp:R,rteosq:l,sinio:m,gsto:D}}function Qx(e){var t=e.irez,n=e.d2201,i=e.d2211,r=e.d3210,s=e.d3222,o=e.d4410,a=e.d4422,l=e.d5220,u=e.d5232,c=e.d5421,h=e.d5433,f=e.dedt,p=e.del1,v=e.del2,S=e.del3,m=e.didt,d=e.dmdt,A=e.dnodt,E=e.domdt,b=e.argpo,I=e.argpdot,R=e.t,C=e.tc,D=e.gsto,k=e.xfact,x=e.xlamo,y=e.no,L=e.atime,W=e.em,Z=e.argpm,it=e.inclm,H=e.xli,K=e.mm,X=e.xni,ut=e.nodem,dt=e.nm,pt=.13130908,gt=2.8843198,zt=.37448087,nt=5.7686396,tt=.95240898,lt=1.8014998,ht=1.050833,St=4.4108898,At=.0043752690880113,Pt=720,Gt=-720,Ut=259200,_,P,B,J,V,$,Q,M,g=0,w=0,z=(D+C*At)%me;if(W+=f*R,it+=m*R,Z+=E*R,ut+=A*R,K+=d*R,t!==0){(L===0||R*L<=0||Math.abs(R)<Math.abs(L))&&(L=0,X=y,H=x),R>0?_=Pt:_=Gt;for(var N=381;N===381;)t!==2?(Q=p*Math.sin(H-pt)+v*Math.sin(2*(H-gt))+S*Math.sin(3*(H-zt)),V=X+k,$=p*Math.cos(H-pt)+2*v*Math.cos(2*(H-gt))+3*S*Math.cos(3*(H-zt)),$*=V):(M=b+I*L,B=M+M,P=H+H,Q=n*Math.sin(B+H-nt)+i*Math.sin(H-nt)+r*Math.sin(M+H-tt)+s*Math.sin(-M+H-tt)+o*Math.sin(B+P-lt)+a*Math.sin(P-lt)+l*Math.sin(M+H-ht)+u*Math.sin(-M+H-ht)+c*Math.sin(M+P-St)+h*Math.sin(-M+P-St),V=X+k,$=n*Math.cos(B+H-nt)+i*Math.cos(H-nt)+r*Math.cos(M+H-tt)+s*Math.cos(-M+H-tt)+l*Math.cos(M+H-ht)+u*Math.cos(-M+H-ht)+2*(o*Math.cos(B+P-lt)+a*Math.cos(P-lt)+c*Math.cos(M+P-St)+h*Math.cos(-M+P-St)),$*=V),Math.abs(R-L)>=Pt?N=381:(w=R-L,N=0),N===381&&(H+=V*_+Q*Ut,X+=Q*_+$*Ut,L+=_);dt=X+Q*w+$*w*w*.5,J=H+V*w+Q*w*w*.5,t!==1?(K=J-2*ut+2*z,g=dt-y):(K=J-ut-Z+z,g=dt-y),dt=y+g}return{atime:L,em:W,argpm:Z,inclm:it,xli:H,mm:K,xni:X,nodem:ut,dndt:g,nm:dt}}function yf(e,t){var n,i,r,s,o,a,l,u,c,h,f,p,v,S,m,d,A,E,b,I,R,C,D,k,x,y,L,W=15e-13;e.t=t,e.error=0;var Z=e.mo+e.mdot*e.t,it=e.argpo+e.argpdot*e.t,H=e.nodeo+e.nodedot*e.t;c=it,R=Z;var K=e.t*e.t;if(D=H+e.nodecf*K,A=1-e.cc1*e.t,E=e.bstar*e.cc4*e.t,b=e.t2cof*K,e.isimp!==1){l=e.omgcof*e.t;var X=1+e.eta*Math.cos(Z);a=e.xmcof*(X*X*X-e.delmo),d=l+a,R=Z+d,c=it-d,p=K*e.t,v=p*e.t,A=A-e.d2*K-e.d3*p-e.d4*v,E+=e.bstar*e.cc5*(Math.sin(R)-e.sinmao),b=b+e.t3cof*p+v*(e.t4cof+e.t*e.t5cof)}C=e.no;var ut=e.ecco;if(I=e.inclo,e.method==="d"){S=e.t;var dt={irez:e.irez,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,del1:e.del1,del2:e.del2,del3:e.del3,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,argpo:e.argpo,argpdot:e.argpdot,t:e.t,tc:S,gsto:e.gsto,xfact:e.xfact,xlamo:e.xlamo,no:e.no,atime:e.atime,em:ut,argpm:c,inclm:I,xli:e.xli,mm:R,xni:e.xni,nodem:D,nm:C},pt=Qx(dt);ut=pt.em,c=pt.argpm,I=pt.inclm,R=pt.mm,D=pt.nodem,C=pt.nm}if(C<=0)return e.error=2,[!1,!1];var gt=Math.pow(ti/C,Es)*A*A;if(C=ti/Math.pow(gt,1.5),ut-=E,ut>=1||ut<-.001)return e.error=1,[!1,!1];ut<1e-6&&(ut=1e-6),R+=e.no*b,x=R+c+D,D%=me,c%=me,x%=me,R=(x-c-D)%me;var zt=Math.sin(I),nt=Math.cos(I),tt=ut;if(k=I,h=c,L=D,y=R,s=zt,r=nt,e.method==="d"){var lt={inclo:e.inclo,init:"n",ep:tt,inclp:k,nodep:L,argpp:h,mp:y,opsmode:e.operationmode},ht=Sf(e,lt);if(tt=ht.ep,L=ht.nodep,h=ht.argpp,y=ht.mp,k=ht.inclp,k<0&&(k=-k,L+=Ve,h-=Ve),tt<0||tt>1)return e.error=3,[!1,!1]}e.method==="d"&&(s=Math.sin(k),r=Math.cos(k),e.aycof=-.5*nr*s,Math.abs(r+1)>15e-13?e.xlcof=-.25*nr*s*(3+5*r)/(1+r):e.xlcof=-.25*nr*s*(3+5*r)/W);var St=tt*Math.cos(h);d=1/(gt*(1-tt*tt));var At=tt*Math.sin(h)+d*e.aycof,Pt=y+h+L+d*e.xlcof*St,Gt=(Pt-L)%me;u=Gt,m=9999.9;for(var Ut=1;Math.abs(m)>=1e-12&&Ut<=10;)i=Math.sin(u),n=Math.cos(u),m=1-n*St-i*At,m=(Gt-At*n+St*i-u)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),u+=m,Ut+=1;var _=St*n+At*i,P=St*i-At*n,B=St*St+At*At,J=gt*(1-B);if(J<0)return e.error=4,[!1,!1];var V=gt*(1-_),$=Math.sqrt(gt)*P/V,Q=Math.sqrt(J)/V,M=Math.sqrt(1-B);d=P/(1+M);var g=gt/V*(i-At-St*d),w=gt/V*(n-St+At*d);f=Math.atan2(g,w);var z=(w+w)*g,N=1-2*g*g;d=1/J;var F=.5*er*d,ot=F*d;e.method==="d"&&(o=r*r,e.con41=3*o-1,e.x1mth2=1-o,e.x7thm1=7*o-1);var rt=V*(1-1.5*ot*M*e.con41)+.5*F*e.x1mth2*N;if(rt<1)return e.error=6,{position:!1,velocity:!1};f-=.25*ot*e.x7thm1*z;var ct=L+1.5*ot*r*z,vt=k+1.5*ot*r*s*N,at=$-C*F*e.x1mth2*z/ti,ft=Q+C*F*(e.x1mth2*N+1.5*e.con41)/ti,bt=Math.sin(f),yt=Math.cos(f),mt=Math.sin(ct),Ht=Math.cos(ct),Rt=Math.sin(vt),It=Math.cos(vt),U=-mt*It,xt=Ht*It,et=U*bt+Ht*yt,st=xt*bt+mt*yt,Tt=Rt*bt,Et=U*yt-Ht*bt,Wt=xt*yt-mt*bt,Qt=Rt*yt,ce={x:rt*et*an,y:rt*st*an,z:rt*Tt*an},kt={x:(at*et+ft*Et)*za,y:(at*st+ft*Wt)*za,z:(at*Tt+ft*Qt)*za};return{position:ce,velocity:kt}}function tM(e,t){var n=t.opsmode,i=t.satn,r=t.epoch,s=t.xbstar,o=t.xecco,a=t.xargpo,l=t.xinclo,u=t.xmo,c=t.xno,h=t.xnodeo,f,p,v,S,m,d,A,E,b,I,R,C,D,k,x,y,L,W,Z,it,H,K,X,ut,dt,pt,gt,zt,nt,tt,lt,ht,St,At,Pt,Gt,Ut,_,P,B,J,V,$,Q,M,g,w,z,N,F,ot,rt,ct,vt,at,ft,bt=15e-13;e.isimp=0,e.method="n",e.aycof=0,e.con41=0,e.cc1=0,e.cc4=0,e.cc5=0,e.d2=0,e.d3=0,e.d4=0,e.delmo=0,e.eta=0,e.argpdot=0,e.omgcof=0,e.sinmao=0,e.t=0,e.t2cof=0,e.t3cof=0,e.t4cof=0,e.t5cof=0,e.x1mth2=0,e.x7thm1=0,e.mdot=0,e.nodedot=0,e.xlcof=0,e.xmcof=0,e.nodecf=0,e.irez=0,e.d2201=0,e.d2211=0,e.d3210=0,e.d3222=0,e.d4410=0,e.d4422=0,e.d5220=0,e.d5232=0,e.d5421=0,e.d5433=0,e.dedt=0,e.del1=0,e.del2=0,e.del3=0,e.didt=0,e.dmdt=0,e.dnodt=0,e.domdt=0,e.e3=0,e.ee2=0,e.peo=0,e.pgho=0,e.pho=0,e.pinco=0,e.plo=0,e.se2=0,e.se3=0,e.sgh2=0,e.sgh3=0,e.sgh4=0,e.sh2=0,e.sh3=0,e.si2=0,e.si3=0,e.sl2=0,e.sl3=0,e.sl4=0,e.gsto=0,e.xfact=0,e.xgh2=0,e.xgh3=0,e.xgh4=0,e.xh2=0,e.xh3=0,e.xi2=0,e.xi3=0,e.xl2=0,e.xl3=0,e.xl4=0,e.xlamo=0,e.zmol=0,e.zmos=0,e.atime=0,e.xli=0,e.xni=0,e.bstar=s,e.ecco=o,e.argpo=a,e.inclo=l,e.mo=u,e.no=c,e.nodeo=h,e.operationmode=n;var yt=78/an+1,mt=42/an,Ht=mt*mt*mt*mt;e.init="y",e.t=0;var Rt={satn:i,ecco:e.ecco,epoch:r,inclo:e.inclo,no:e.no,method:e.method,opsmode:e.operationmode},It=Jx(Rt),U=It.ao,xt=It.con42,et=It.cosio,st=It.cosio2,Tt=It.eccsq,Et=It.omeosq,Wt=It.posq,Qt=It.rp,ce=It.rteosq,kt=It.sinio;if(e.no=It.no,e.con41=It.con41,e.gsto=It.gsto,e.a=Math.pow(e.no*qx,-2/3),e.alta=e.a*(1+e.ecco)-1,e.altp=e.a*(1-e.ecco)-1,e.error=0,Et>=0||e.no>=0){if(e.isimp=0,Qt<220/an+1&&(e.isimp=1),gt=yt,H=Ht,W=(Qt-1)*an,W<156){gt=W-78,W<98&&(gt=20);var re=(120-gt)/an;H=re*re*re*re,gt=gt/an+1}Z=1/Wt,g=1/(U-gt),e.eta=U*e.ecco*g,C=e.eta*e.eta,R=e.ecco*e.eta,it=Math.abs(1-C),d=H*Math.pow(g,4),A=d/Math.pow(it,3.5),S=A*e.no*(U*(1+1.5*C+R*(4+C))+.375*er*g/it*e.con41*(8+3*C*(8+C))),e.cc1=e.bstar*S,m=0,e.ecco>1e-4&&(m=-2*d*g*nr*e.no*kt/e.ecco),e.x1mth2=1-st,e.cc4=2*e.no*A*U*Et*(e.eta*(2+.5*C)+e.ecco*(.5+2*C)-er*g/(U*it)*(-3*e.con41*(1-2*R+C*(1.5-.5*R))+.75*e.x1mth2*(2*C-R*(1+C))*Math.cos(2*e.argpo))),e.cc5=2*A*U*Et*(1+2.75*(C+R)+R*C),E=st*st,$=1.5*er*Z*e.no,Q=.5*$*er*Z,M=-.46875*jx*Z*Z*e.no,e.mdot=e.no+.5*$*ce*e.con41+.0625*Q*ce*(13-78*st+137*E),e.argpdot=-.5*$*xt+.0625*Q*(7-114*st+395*E)+M*(3-36*st+49*E),z=-$*et,e.nodedot=z+(.5*Q*(4-19*st)+2*M*(3-7*st))*et,w=e.argpdot+e.nodedot,e.omgcof=e.bstar*m*Math.cos(e.argpo),e.xmcof=0,e.ecco>1e-4&&(e.xmcof=-Es*d*e.bstar/R),e.nodecf=3.5*Et*z*e.cc1,e.t2cof=1.5*e.cc1,Math.abs(et+1)>15e-13?e.xlcof=-.25*nr*kt*(3+5*et)/(1+et):e.xlcof=-.25*nr*kt*(3+5*et)/bt,e.aycof=-.5*nr*kt;var _e=1+e.eta*Math.cos(e.mo);if(e.delmo=_e*_e*_e,e.sinmao=Math.sin(e.mo),e.x7thm1=7*st-1,2*Ve/e.no>=225){e.method="d",e.isimp=1,J=0,x=e.inclo;var $e={epoch:r,ep:e.ecco,argpp:e.argpo,tc:J,inclp:e.inclo,nodep:e.nodeo,np:e.no,e3:e.e3,ee2:e.ee2,peo:e.peo,pgho:e.pgho,pho:e.pho,pinco:e.pinco,plo:e.plo,se2:e.se2,se3:e.se3,sgh2:e.sgh2,sgh3:e.sgh3,sgh4:e.sgh4,sh2:e.sh2,sh3:e.sh3,si2:e.si2,si3:e.si3,sl2:e.sl2,sl3:e.sl3,sl4:e.sl4,xgh2:e.xgh2,xgh3:e.xgh3,xgh4:e.xgh4,xh2:e.xh2,xh3:e.xh3,xi2:e.xi2,xi3:e.xi3,xl2:e.xl2,xl3:e.xl3,xl4:e.xl4,zmol:e.zmol,zmos:e.zmos},Mt=$x($e);e.e3=Mt.e3,e.ee2=Mt.ee2,e.peo=Mt.peo,e.pgho=Mt.pgho,e.pho=Mt.pho,e.pinco=Mt.pinco,e.plo=Mt.plo,e.se2=Mt.se2,e.se3=Mt.se3,e.sgh2=Mt.sgh2,e.sgh3=Mt.sgh3,e.sgh4=Mt.sgh4,e.sh2=Mt.sh2,e.sh3=Mt.sh3,e.si2=Mt.si2,e.si3=Mt.si3,e.sl2=Mt.sl2,e.sl3=Mt.sl3,e.sl4=Mt.sl4,p=Mt.sinim,f=Mt.cosim,b=Mt.em,I=Mt.emsq,K=Mt.s1,X=Mt.s2,ut=Mt.s3,dt=Mt.s4,pt=Mt.s5,zt=Mt.ss1,nt=Mt.ss2,tt=Mt.ss3,lt=Mt.ss4,ht=Mt.ss5,St=Mt.sz1,At=Mt.sz3,Pt=Mt.sz11,Gt=Mt.sz13,Ut=Mt.sz21,_=Mt.sz23,P=Mt.sz31,B=Mt.sz33,e.xgh2=Mt.xgh2,e.xgh3=Mt.xgh3,e.xgh4=Mt.xgh4,e.xh2=Mt.xh2,e.xh3=Mt.xh3,e.xi2=Mt.xi2,e.xi3=Mt.xi3,e.xl2=Mt.xl2,e.xl3=Mt.xl3,e.xl4=Mt.xl4,e.zmol=Mt.zmol,e.zmos=Mt.zmos,L=Mt.nm,N=Mt.z1,F=Mt.z3,ot=Mt.z11,rt=Mt.z13,ct=Mt.z21,vt=Mt.z23,at=Mt.z31,ft=Mt.z33;var Ee={inclo:x,init:e.init,ep:e.ecco,inclp:e.inclo,nodep:e.nodeo,argpp:e.argpo,mp:e.mo,opsmode:e.operationmode},Le=Sf(e,Ee);e.ecco=Le.ep,e.inclo=Le.inclp,e.nodeo=Le.nodep,e.argpo=Le.argpp,e.mo=Le.mp,D=0,k=0,y=0;var Rn={cosim:f,emsq:I,argpo:e.argpo,s1:K,s2:X,s3:ut,s4:dt,s5:pt,sinim:p,ss1:zt,ss2:nt,ss3:tt,ss4:lt,ss5:ht,sz1:St,sz3:At,sz11:Pt,sz13:Gt,sz21:Ut,sz23:_,sz31:P,sz33:B,t:e.t,tc:J,gsto:e.gsto,mo:e.mo,mdot:e.mdot,no:e.no,nodeo:e.nodeo,nodedot:e.nodedot,xpidot:w,z1:N,z3:F,z11:ot,z13:rt,z21:ct,z23:vt,z31:at,z33:ft,ecco:e.ecco,eccsq:Tt,em:b,argpm:D,inclm:x,mm:y,nm:L,nodem:k,irez:e.irez,atime:e.atime,d2201:e.d2201,d2211:e.d2211,d3210:e.d3210,d3222:e.d3222,d4410:e.d4410,d4422:e.d4422,d5220:e.d5220,d5232:e.d5232,d5421:e.d5421,d5433:e.d5433,dedt:e.dedt,didt:e.didt,dmdt:e.dmdt,dnodt:e.dnodt,domdt:e.domdt,del1:e.del1,del2:e.del2,del3:e.del3,xfact:e.xfact,xlamo:e.xlamo,xli:e.xli,xni:e.xni},te=Zx(Rn);e.irez=te.irez,e.atime=te.atime,e.d2201=te.d2201,e.d2211=te.d2211,e.d3210=te.d3210,e.d3222=te.d3222,e.d4410=te.d4410,e.d4422=te.d4422,e.d5220=te.d5220,e.d5232=te.d5232,e.d5421=te.d5421,e.d5433=te.d5433,e.dedt=te.dedt,e.didt=te.didt,e.dmdt=te.dmdt,e.dnodt=te.dnodt,e.domdt=te.domdt,e.del1=te.del1,e.del2=te.del2,e.del3=te.del3,e.xfact=te.xfact,e.xlamo=te.xlamo,e.xli=te.xli,e.xni=te.xni}e.isimp!==1&&(v=e.cc1*e.cc1,e.d2=4*U*g*v,V=e.d2*g*e.cc1/3,e.d3=(17*U+gt)*V,e.d4=.5*V*U*g*(221*U+31*gt)*e.cc1,e.t3cof=e.d2+2*v,e.t4cof=.25*(3*e.d3+e.cc1*(12*e.d2+10*v)),e.t5cof=.2*(3*e.d4+12*e.cc1*e.d3+6*e.d2*e.d2+15*v*(2*e.d2+v)))}yf(e,0),e.init="n"}function eM(e,t){var n="i",i=1440/(2*Ve),r=0,s={};s.error=0,s.satnum=e.substring(2,7),s.epochyr=parseInt(e.substring(18,20),10),s.epochdays=parseFloat(e.substring(20,32)),s.ndot=parseFloat(e.substring(33,43)),s.nddot=parseFloat(".".concat(parseInt(e.substring(44,50),10),"E").concat(e.substring(50,52))),s.bstar=parseFloat("".concat(e.substring(53,54),".").concat(parseInt(e.substring(54,59),10),"E").concat(e.substring(59,61))),s.inclo=parseFloat(t.substring(8,16)),s.nodeo=parseFloat(t.substring(17,25)),s.ecco=parseFloat(".".concat(t.substring(26,33))),s.argpo=parseFloat(t.substring(34,42)),s.mo=parseFloat(t.substring(43,51)),s.no=parseFloat(t.substring(52,63)),s.no/=i,s.inclo*=os,s.nodeo*=os,s.argpo*=os,s.mo*=os,s.epochyr<57?r=s.epochyr+2e3:r=s.epochyr+1900;var o=Kx(r,s.epochdays),a=o.mon,l=o.day,u=o.hr,c=o.minute,h=o.sec;return s.jdsatepoch=Sc(r,a,l,u,c,h),tM(s,{opsmode:n,satn:s.satnum,epoch:s.jdsatepoch-24332815e-1,xbstar:s.bstar,xecco:s.ecco,xargpo:s.argpo,xinclo:s.inclo,xmo:s.mo,xno:s.no,xnodeo:s.nodeo}),s}function nM(e){return iM(e)||rM(e)||sM(e)||oM()}function iM(e){if(Array.isArray(e))return Xl(e)}function rM(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function sM(e,t){if(e){if(typeof e=="string")return Xl(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xl(e,t)}}function Xl(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function oM(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qu(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var i=t[0],r=Array.prototype.slice.call(t,1),s=Sc.apply(void 0,nM(r)),o=(s-i.jdsatepoch)*Wx;return yf(i,o)}function Ef(e){return e*kx}function aM(e){if(e<-Ve/2||e>Ve/2)throw new RangeError("Latitude radians must be in range [-pi/2; pi/2].");return Ef(e)}function lM(e){if(e<-Ve||e>Ve)throw new RangeError("Longitude radians must be in range [-pi; pi].");return Ef(e)}function cM(e,t){for(var n=6378.137,i=6356.7523142,r=Math.sqrt(e.x*e.x+e.y*e.y),s=(n-i)/n,o=2*s-s*s,a=Math.atan2(e.y,e.x)-t;a<-Ve;)a+=me;for(;a>Ve;)a-=me;for(var l=20,u=0,c=Math.atan2(e.z,Math.sqrt(e.x*e.x+e.y*e.y)),h;u<l;)h=1/Math.sqrt(1-o*(Math.sin(c)*Math.sin(c))),c=Math.atan2(e.z+n*h*o*Math.sin(c),r),u+=1;var f=r/Math.cos(c)-n*h;return{longitude:a,latitude:c,height:f}}const uM=6371,hM=72921159e-12;class fM{constructor(t){this.scene=t;const r=new yx().load("/Satellite-tracker/textures/earth_day.jpg"),s=new gc({map:r}),o=new vc(uM,64,64);this.earthMesh=new Bn(o,s),this.earthMesh.rotation.y=yc(new Date),t.add(this.earthMesh)}update(t){this.earthMesh.rotation.y+=hM*t/1e3}}const th=new Jt(16777215),Ha=new Jt(65280);let dM=class{constructor(t,n,i){$r(this,"positionAndVelocity");$r(this,"oribitLine");$r(this,"groundTrackLine");this.name=t,this.satrec=eM(n,i),this.color=th.clone(),this.selected=!1,this.position=new j;const r=new cn,s=new Gl({color:Ha});this.groundTrackLine=new Gu(r,s)}updatePosition(t){if(this.date=t,this.positionAndVelocity=Qu(this.satrec,this.date),this.positionAndVelocity.position){const n=this.positionAndVelocity.position;this.position.set(n.x,n.z,-n.y)}this.selected&&(this.groundTrackLine.geometry.setFromPoints([new j(0,0,0),this.position]),this.groundTrackLine.geometry.attributes.position.needsUpdate=!0)}getOrbitalPeriod(){return 1/(this.satrec.no/(2*Math.PI))}getSatelliteInfo(){const t=this.getOrbitalPeriod(),n=(this.satrec.inclo*180/Math.PI).toFixed(2),i=yc(this.date),r=cM(this.positionAndVelocity.position,i),s=aM(r.latitude).toFixed(2),o=lM(r.longitude).toFixed(2),a=r.height.toFixed(2),l=Math.sqrt(this.positionAndVelocity.velocity.x**2+this.positionAndVelocity.velocity.y**2+this.positionAndVelocity.velocity.z**2).toFixed(2);return{name:this.name,inclination:n,latitude:s,longitude:o,altitude:a,velocity:l,period:t}}getProjectedPath(t=720){this.date||(this.date=new Date);const i=this.getOrbitalPeriod()*6e4/t,r=(t+1)*3;let s,o;if(this.oribitLine)s=this.oribitLine.geometry,o=s.getAttribute("position"),(!o||o.array.length!==r)&&(o=new nn(new Float32Array(r),3),o.setUsage(Io),s.setAttribute("position",o));else{s=new cn,o=new nn(new Float32Array(r),3),o.setUsage(Io),s.setAttribute("position",o);const l=new Gl({color:Ha});this.oribitLine=new Gu(s,l)}const a=o.array;for(let l=0;l<=t;l++){const u=new Date(this.date.getTime()+l*i),c=Qu(this.satrec,u),h=l*3;c.position;const f=c.position;a[h+0]=f.x,a[h+1]=f.z,a[h+2]=-f.y}o.needsUpdate=!0,s.computeBoundingSphere()}dispose(){this.oribitLine&&(this.oribitLine.geometry.dispose(),this.oribitLine.material.dispose()),this.groundTrackLine&&(this.groundTrackLine.geometry.dispose(),this.groundTrackLine.material.dispose())}toggle(t){this.selected=!0,this.color.copy(Ha),this.getProjectedPath(),t.add(this.oribitLine),t.add(this.groundTrackLine)}untoggle(t){this.selected=!1,this.color=th.clone(),this.oribitLine&&(t.remove(this.oribitLine),this.oribitLine.geometry.dispose(),this.oribitLine.material.dispose()),this.groundTrackLine&&(t.remove(this.groundTrackLine),this.groundTrackLine.geometry.dispose(),this.groundTrackLine.material.dispose())}};const pM=new Jt(16777215);function mM(e=64){const t=document.createElement("canvas");t.width=t.height=e;const n=t.getContext("2d");n.clearRect(0,0,e,e),n.beginPath(),n.arc(e/2,e/2,e/2,0,Math.PI*2,!1),n.closePath(),n.fillStyle="#ffffff",n.fill();const i=new vx(t);return i.generateMipmaps=!0,i.minFilter=Ei,i.magFilter=gn,i.wrapS=i.wrapT=yi,i.needsUpdate=!0,i}class gM{constructor(t,{size:n=5,opacity:i=.95,transparent:r=!0,sizeAttenuation:s=!1,circleTextureSize:o=64}={}){this.count=Math.max(0,t|0),this.positions=new Float32Array(this.count*3),this.colors=new Float32Array(this.count*3),this.geometry=new cn,this.positionAttr=new nn(this.positions,3),this.colorAttr=new nn(this.colors,3),this.positionAttr.setUsage(Io),this.colorAttr.setUsage(Io),this.geometry.setAttribute("position",this.positionAttr),this.geometry.setAttribute("color",this.colorAttr),this.circleTexture=mM(o),this.material=new vf({size:n,sizeAttenuation:s,transparent:r,opacity:i,vertexColors:!0,map:this.circleTexture,alphaTest:.5,depthWrite:!0}),this.mesh=new _x(this.geometry,this.material),this.mesh.frustumCulled=!0,this._tmpColor=new Jt,this._touchedMaxIndex=-1,this.geometry.boundingSphere=new Xr(new j(0,0,0),1)}updateInstance(t,n,i=pM){if(t<0||t>=this.count)return;const r=t*3;this.positions[r]=n.x,this.positions[r+1]=n.y,this.positions[r+2]=n.z;const s=this._tmpColor;s.copy(i),this.colors[r]=s.r,this.colors[r+1]=s.g,this.colors[r+2]=s.b,t>this._touchedMaxIndex&&(this._touchedMaxIndex=t)}commit({recomputeBounds:t=!0}={}){this._touchedMaxIndex<0||(this.positionAttr.needsUpdate=!0,this.colorAttr.needsUpdate=!0,t&&this.geometry.computeBoundingSphere(),this._touchedMaxIndex=-1)}dispose(){this.geometry.dispose(),this.material.dispose(),this.circleTexture&&this.circleTexture.dispose()}}const eh="satellite-data-cache",_M="https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle",vM="https://celestrak.org/NORAD/elements/gp.php?NAME=DEB&FORMAT=tle",nh=8,as={async cacheData(e,t,n=24){const i=await caches.open(eh),r={timestamp:Date.now().toString(),"max-age":(n*3600).toString()},s=new Response(JSON.stringify(t),{headers:r});await i.put(e,s)},async getCachedData(e){const t=await caches.open(eh),n=await t.match(e);if(!n)return null;const i=parseInt(n.headers.get("timestamp")),r=parseInt(n.headers.get("max-age"));return Date.now()-i>r*1e3?(await t.delete(e),null):JSON.parse(await n.text())},async fetchTLEData(){try{const e=await as.getCachedData("active-satellites");if(e)return e;const i=(await(await fetch(_M)).text()).trim().split(`
`);return await as.cacheData("active-satellites",i,nh),i}catch(e){throw console.error("Error fetching TLE data:",e),e}},async fetchDebrisData(){try{const e=await as.getCachedData("debris-data");if(e)return e;const i=(await(await fetch(vM)).text()).trim().split(`
`);return await as.cacheData("debris-data",i,nh),i}catch(e){throw console.error("Error fetching debris data:",e),e}}};/**
* @vue/shared v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ec(e){const t=Object.create(null);for(const n of e.split(","))t[n]=1;return n=>n in t}const he={},Ur=[],zn=()=>{},xM=()=>!1,Ko=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Tc=e=>e.startsWith("onUpdate:"),Re=Object.assign,bc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},MM=Object.prototype.hasOwnProperty,oe=(e,t)=>MM.call(e,t),Vt=Array.isArray,Nr=e=>$o(e)==="[object Map]",Tf=e=>$o(e)==="[object Set]",qt=e=>typeof e=="function",ye=e=>typeof e=="string",Fi=e=>typeof e=="symbol",pe=e=>e!==null&&typeof e=="object",bf=e=>(pe(e)||qt(e))&&qt(e.then)&&qt(e.catch),Af=Object.prototype.toString,$o=e=>Af.call(e),SM=e=>$o(e).slice(8,-1),wf=e=>$o(e)==="[object Object]",Ac=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,hs=Ec(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yM=/-(\w)/g,Di=Zo(e=>e.replace(yM,(t,n)=>n?n.toUpperCase():"")),EM=/\B([A-Z])/g,Oi=Zo(e=>e.replace(EM,"-$1").toLowerCase()),Cf=Zo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Va=Zo(e=>e?`on${Cf(e)}`:""),wi=(e,t)=>!Object.is(e,t),bo=(e,...t)=>{for(let n=0;n<e.length;n++)e[n](...t)},ql=(e,t,n,i=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:i,value:n})},Yl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},TM=e=>{const t=ye(e)?Number(e):NaN;return isNaN(t)?e:t};let ih;const Jo=()=>ih||(ih=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function wc(e){if(Vt(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],r=ye(i)?CM(i):wc(i);if(r)for(const s in r)t[s]=r[s]}return t}else if(ye(e)||pe(e))return e}const bM=/;(?![^(]*\))/g,AM=/:([^]+)/,wM=/\/\*[^]*?\*\//g;function CM(e){const t={};return e.replace(wM,"").split(bM).forEach(n=>{if(n){const i=n.split(AM);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function jr(e){let t="";if(ye(e))t=e;else if(Vt(e))for(let n=0;n<e.length;n++){const i=jr(e[n]);i&&(t+=i+" ")}else if(pe(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const RM="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PM=Ec(RM);function Rf(e){return!!e||e===""}const Pf=e=>!!(e&&e.__v_isRef===!0),Nn=e=>ye(e)?e:e==null?"":Vt(e)||pe(e)&&(e.toString===Af||!qt(e.toString))?Pf(e)?Nn(e.value):JSON.stringify(e,Lf,2):String(e),Lf=(e,t)=>Pf(t)?Lf(e,t.value):Nr(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[i,r],s)=>(n[Ga(i,s)+" =>"]=r,n),{})}:Tf(t)?{[`Set(${t.size})`]:[...t.values()].map(n=>Ga(n))}:Fi(t)?Ga(t):pe(t)&&!Vt(t)&&!wf(t)?String(t):t,Ga=(e,t="")=>{var n;return Fi(e)?`Symbol(${(n=e.description)!=null?n:t})`:e};/**
* @vue/reactivity v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fe;class Df{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Fe,!t&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].pause();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,n;if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].resume();for(t=0,n=this.effects.length;t<n;t++)this.effects[t].resume()}}run(t){if(this._active){const n=Fe;try{return Fe=this,t()}finally{Fe=n}}}on(){++this._on===1&&(this.prevScope=Fe,Fe=this)}off(){this._on>0&&--this._on===0&&(Fe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function If(e){return new Df(e)}function Uf(){return Fe}function LM(e,t=!1){Fe&&Fe.cleanups.push(e)}let fe;const ka=new WeakSet;class Nf{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Fe&&Fe.active&&Fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Of(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,rh(this),Bf(this);const t=fe,n=wn;fe=this,wn=!0;try{return this.fn()}finally{zf(this),fe=t,wn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Pc(t);this.deps=this.depsTail=void 0,rh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){jl(this)&&this.run()}get dirty(){return jl(this)}}let Ff=0,fs,ds;function Of(e,t=!1){if(e.flags|=8,t){e.next=ds,ds=e;return}e.next=fs,fs=e}function Cc(){Ff++}function Rc(){if(--Ff>0)return;if(ds){let t=ds;for(ds=void 0;t;){const n=t.next;t.next=void 0,t.flags&=-9,t=n}}let e;for(;fs;){let t=fs;for(fs=void 0;t;){const n=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){e||(e=i)}t=n}}if(e)throw e}function Bf(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function zf(e){let t,n=e.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Pc(i),DM(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}e.deps=t,e.depsTail=n}function jl(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Hf(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Hf(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Ts)||(e.globalVersion=Ts,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!jl(e))))return;e.flags|=2;const t=e.dep,n=fe,i=wn;fe=e,wn=!0;try{Bf(e);const r=e.fn(e._value);(t.version===0||wi(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{fe=n,wn=i,zf(e),e.flags&=-3}}function Pc(e,t=!1){const{dep:n,prevSub:i,nextSub:r}=e;if(i&&(i.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=i,e.nextSub=void 0),n.subs===e&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Pc(s,!0)}!t&&!--n.sc&&n.map&&n.map.delete(n.key)}function DM(e){const{prevDep:t,nextDep:n}=e;t&&(t.nextDep=n,e.prevDep=void 0),n&&(n.prevDep=t,e.nextDep=void 0)}let wn=!0;const Vf=[];function ii(){Vf.push(wn),wn=!1}function ri(){const e=Vf.pop();wn=e===void 0?!0:e}function rh(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const n=fe;fe=void 0;try{t()}finally{fe=n}}}let Ts=0;class IM{constructor(t,n){this.sub=t,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lc{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!fe||!wn||fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==fe)n=this.activeLink=new IM(fe,this),fe.deps?(n.prevDep=fe.depsTail,fe.depsTail.nextDep=n,fe.depsTail=n):fe.deps=fe.depsTail=n,Gf(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=fe.depsTail,n.nextDep=void 0,fe.depsTail.nextDep=n,fe.depsTail=n,fe.deps===n&&(fe.deps=i)}return n}trigger(t){this.version++,Ts++,this.notify(t)}notify(t){Cc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Rc()}}}function Gf(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)Gf(i)}const n=e.dep.subs;n!==e&&(e.prevSub=n,n&&(n.nextSub=e)),e.dep.subs=e}}const Oo=new WeakMap,ir=Symbol(""),Kl=Symbol(""),bs=Symbol("");function Be(e,t,n){if(wn&&fe){let i=Oo.get(e);i||Oo.set(e,i=new Map);let r=i.get(n);r||(i.set(n,r=new Lc),r.map=i,r.key=n),r.track()}}function $n(e,t,n,i,r,s){const o=Oo.get(e);if(!o){Ts++;return}const a=l=>{l&&l.trigger()};if(Cc(),t==="clear")o.forEach(a);else{const l=Vt(e),u=l&&Ac(n);if(l&&n==="length"){const c=Number(i);o.forEach((h,f)=>{(f==="length"||f===bs||!Fi(f)&&f>=c)&&a(h)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(bs)),t){case"add":l?u&&a(o.get("length")):(a(o.get(ir)),Nr(e)&&a(o.get(Kl)));break;case"delete":l||(a(o.get(ir)),Nr(e)&&a(o.get(Kl)));break;case"set":Nr(e)&&a(o.get(ir));break}}Rc()}function UM(e,t){const n=Oo.get(e);return n&&n.get(t)}function Er(e){const t=ie(e);return t===e?t:(Be(t,"iterate",bs),xn(e)?t:t.map(Ie))}function Qo(e){return Be(e=ie(e),"iterate",bs),e}const NM={__proto__:null,[Symbol.iterator](){return Wa(this,Symbol.iterator,Ie)},concat(...e){return Er(this).concat(...e.map(t=>Vt(t)?Er(t):t))},entries(){return Wa(this,"entries",e=>(e[1]=Ie(e[1]),e))},every(e,t){return Xn(this,"every",e,t,void 0,arguments)},filter(e,t){return Xn(this,"filter",e,t,n=>n.map(Ie),arguments)},find(e,t){return Xn(this,"find",e,t,Ie,arguments)},findIndex(e,t){return Xn(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Xn(this,"findLast",e,t,Ie,arguments)},findLastIndex(e,t){return Xn(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Xn(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xa(this,"includes",e)},indexOf(...e){return Xa(this,"indexOf",e)},join(e){return Er(this).join(e)},lastIndexOf(...e){return Xa(this,"lastIndexOf",e)},map(e,t){return Xn(this,"map",e,t,void 0,arguments)},pop(){return is(this,"pop")},push(...e){return is(this,"push",e)},reduce(e,...t){return sh(this,"reduce",e,t)},reduceRight(e,...t){return sh(this,"reduceRight",e,t)},shift(){return is(this,"shift")},some(e,t){return Xn(this,"some",e,t,void 0,arguments)},splice(...e){return is(this,"splice",e)},toReversed(){return Er(this).toReversed()},toSorted(e){return Er(this).toSorted(e)},toSpliced(...e){return Er(this).toSpliced(...e)},unshift(...e){return is(this,"unshift",e)},values(){return Wa(this,"values",Ie)}};function Wa(e,t,n){const i=Qo(e),r=i[t]();return i!==e&&!xn(e)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=n(s.value)),s}),r}const FM=Array.prototype;function Xn(e,t,n,i,r,s){const o=Qo(e),a=o!==e&&!xn(e),l=o[t];if(l!==FM[t]){const h=l.apply(e,s);return a?Ie(h):h}let u=n;o!==e&&(a?u=function(h,f){return n.call(this,Ie(h),f,e)}:n.length>2&&(u=function(h,f){return n.call(this,h,f,e)}));const c=l.call(o,u,i);return a&&r?r(c):c}function sh(e,t,n,i){const r=Qo(e);let s=n;return r!==e&&(xn(e)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,e)}):s=function(o,a,l){return n.call(this,o,Ie(a),l,e)}),r[t](s,...i)}function Xa(e,t,n){const i=ie(e);Be(i,"iterate",bs);const r=i[t](...n);return(r===-1||r===!1)&&Uc(n[0])?(n[0]=ie(n[0]),i[t](...n)):r}function is(e,t,n=[]){ii(),Cc();const i=ie(e)[t].apply(e,n);return Rc(),ri(),i}const OM=Ec("__proto__,__v_isRef,__isVue"),kf=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fi));function BM(e){Fi(e)||(e=String(e));const t=ie(this);return Be(t,"has",e),t.hasOwnProperty(e)}class Wf{constructor(t=!1,n=!1){this._isReadonly=t,this._isShallow=n}get(t,n,i){if(n==="__v_skip")return t.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?jM:jf:s?Yf:qf).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Vt(t);if(!r){let l;if(o&&(l=NM[n]))return l;if(n==="hasOwnProperty")return BM}const a=Reflect.get(t,n,Se(t)?t:i);return(Fi(n)?kf.has(n):OM(n))||(r||Be(t,"get",n),s)?a:Se(a)?o&&Ac(n)?a:a.value:pe(a)?r?Kf(a):ta(a):a}}class Xf extends Wf{constructor(t=!1){super(!1,t)}set(t,n,i,r){let s=t[n];if(!this._isShallow){const l=Ii(s);if(!xn(i)&&!Ii(i)&&(s=ie(s),i=ie(i)),!Vt(t)&&Se(s)&&!Se(i))return l?!1:(s.value=i,!0)}const o=Vt(t)&&Ac(n)?Number(n)<t.length:oe(t,n),a=Reflect.set(t,n,i,Se(t)?t:r);return t===ie(r)&&(o?wi(i,s)&&$n(t,"set",n,i):$n(t,"add",n,i)),a}deleteProperty(t,n){const i=oe(t,n);t[n];const r=Reflect.deleteProperty(t,n);return r&&i&&$n(t,"delete",n,void 0),r}has(t,n){const i=Reflect.has(t,n);return(!Fi(n)||!kf.has(n))&&Be(t,"has",n),i}ownKeys(t){return Be(t,"iterate",Vt(t)?"length":ir),Reflect.ownKeys(t)}}class zM extends Wf{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const HM=new Xf,VM=new zM,GM=new Xf(!0);const $l=e=>e,po=e=>Reflect.getPrototypeOf(e);function kM(e,t,n){return function(...i){const r=this.__v_raw,s=ie(r),o=Nr(s),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=r[e](...i),c=n?$l:t?Bo:Ie;return!t&&Be(s,"iterate",l?Kl:ir),{next(){const{value:h,done:f}=u.next();return f?{value:h,done:f}:{value:a?[c(h[0]),c(h[1])]:c(h),done:f}},[Symbol.iterator](){return this}}}}function mo(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function WM(e,t){const n={get(r){const s=this.__v_raw,o=ie(s),a=ie(r);e||(wi(r,a)&&Be(o,"get",r),Be(o,"get",a));const{has:l}=po(o),u=t?$l:e?Bo:Ie;if(l.call(o,r))return u(s.get(r));if(l.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!e&&Be(ie(r),"iterate",ir),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,o=ie(s),a=ie(r);return e||(wi(r,a)&&Be(o,"has",r),Be(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ie(a),u=t?$l:e?Bo:Ie;return!e&&Be(l,"iterate",ir),a.forEach((c,h)=>r.call(s,u(c),u(h),o))}};return Re(n,e?{add:mo("add"),set:mo("set"),delete:mo("delete"),clear:mo("clear")}:{add(r){!t&&!xn(r)&&!Ii(r)&&(r=ie(r));const s=ie(this);return po(s).has.call(s,r)||(s.add(r),$n(s,"add",r,r)),this},set(r,s){!t&&!xn(s)&&!Ii(s)&&(s=ie(s));const o=ie(this),{has:a,get:l}=po(o);let u=a.call(o,r);u||(r=ie(r),u=a.call(o,r));const c=l.call(o,r);return o.set(r,s),u?wi(s,c)&&$n(o,"set",r,s):$n(o,"add",r,s),this},delete(r){const s=ie(this),{has:o,get:a}=po(s);let l=o.call(s,r);l||(r=ie(r),l=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return l&&$n(s,"delete",r,void 0),u},clear(){const r=ie(this),s=r.size!==0,o=r.clear();return s&&$n(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=kM(r,e,t)}),n}function Dc(e,t){const n=WM(e,t);return(i,r,s)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?i:Reflect.get(oe(n,r)&&r in i?n:i,r,s)}const XM={get:Dc(!1,!1)},qM={get:Dc(!1,!0)},YM={get:Dc(!0,!1)};const qf=new WeakMap,Yf=new WeakMap,jf=new WeakMap,jM=new WeakMap;function KM(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $M(e){return e.__v_skip||!Object.isExtensible(e)?0:KM(SM(e))}function ta(e){return Ii(e)?e:Ic(e,!1,HM,XM,qf)}function ZM(e){return Ic(e,!1,GM,qM,Yf)}function Kf(e){return Ic(e,!0,VM,YM,jf)}function Ic(e,t,n,i,r){if(!pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=$M(e);if(s===0)return e;const o=r.get(e);if(o)return o;const a=new Proxy(e,s===2?i:n);return r.set(e,a),a}function Ci(e){return Ii(e)?Ci(e.__v_raw):!!(e&&e.__v_isReactive)}function Ii(e){return!!(e&&e.__v_isReadonly)}function xn(e){return!!(e&&e.__v_isShallow)}function Uc(e){return e?!!e.__v_raw:!1}function ie(e){const t=e&&e.__v_raw;return t?ie(t):e}function Nc(e){return!oe(e,"__v_skip")&&Object.isExtensible(e)&&ql(e,"__v_skip",!0),e}const Ie=e=>pe(e)?ta(e):e,Bo=e=>pe(e)?Kf(e):e;function Se(e){return e?e.__v_isRef===!0:!1}function As(e){return JM(e,!1)}function JM(e,t){return Se(e)?e:new QM(e,t)}class QM{constructor(t,n){this.dep=new Lc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?t:ie(t),this._value=n?t:Ie(t),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(t){const n=this._rawValue,i=this.__v_isShallow||xn(t)||Ii(t);t=i?t:ie(t),wi(t,n)&&(this._rawValue=t,this._value=i?t:Ie(t),this.dep.trigger())}}function Ao(e){return Se(e)?e.value:e}const tS={get:(e,t,n)=>t==="__v_raw"?e:Ao(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const r=e[t];return Se(r)&&!Se(n)?(r.value=n,!0):Reflect.set(e,t,n,i)}};function $f(e){return Ci(e)?e:new Proxy(e,tS)}function eS(e){const t=Vt(e)?new Array(e.length):{};for(const n in e)t[n]=iS(e,n);return t}class nS{constructor(t,n,i){this._object=t,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return UM(ie(this._object),this._key)}}function iS(e,t,n){const i=e[t];return Se(i)?i:new nS(e,t,n)}class rS{constructor(t,n,i){this.fn=t,this.setter=n,this._value=void 0,this.dep=new Lc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ts-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&fe!==this)return Of(this,!0),!0}get value(){const t=this.dep.track();return Hf(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function sS(e,t,n=!1){let i,r;return qt(e)?i=e:(i=e.get,r=e.set),new rS(i,r,n)}const go={},zo=new WeakMap;let $i;function oS(e,t=!1,n=$i){if(n){let i=zo.get(n);i||zo.set(n,i=[]),i.push(e)}}function aS(e,t,n=he){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,u=b=>r?b:xn(b)||r===!1||r===0?Zn(b,1):Zn(b);let c,h,f,p,v=!1,S=!1;if(Se(e)?(h=()=>e.value,v=xn(e)):Ci(e)?(h=()=>u(e),v=!0):Vt(e)?(S=!0,v=e.some(b=>Ci(b)||xn(b)),h=()=>e.map(b=>{if(Se(b))return b.value;if(Ci(b))return u(b);if(qt(b))return l?l(b,2):b()})):qt(e)?t?h=l?()=>l(e,2):e:h=()=>{if(f){ii();try{f()}finally{ri()}}const b=$i;$i=c;try{return l?l(e,3,[p]):e(p)}finally{$i=b}}:h=zn,t&&r){const b=h,I=r===!0?1/0:r;h=()=>Zn(b(),I)}const m=Uf(),d=()=>{c.stop(),m&&m.active&&bc(m.effects,c)};if(s&&t){const b=t;t=(...I)=>{b(...I),d()}}let A=S?new Array(e.length).fill(go):go;const E=b=>{if(!(!(c.flags&1)||!c.dirty&&!b))if(t){const I=c.run();if(r||v||(S?I.some((R,C)=>wi(R,A[C])):wi(I,A))){f&&f();const R=$i;$i=c;try{const C=[I,A===go?void 0:S&&A[0]===go?[]:A,p];A=I,l?l(t,3,C):t(...C)}finally{$i=R}}}else c.run()};return a&&a(E),c=new Nf(h),c.scheduler=o?()=>o(E,!1):E,p=b=>oS(b,!1,c),f=c.onStop=()=>{const b=zo.get(c);if(b){if(l)l(b,4);else for(const I of b)I();zo.delete(c)}},t?i?E(!0):A=c.run():o?o(E.bind(null,!0),!0):c.run(),d.pause=c.pause.bind(c),d.resume=c.resume.bind(c),d.stop=d,d}function Zn(e,t=1/0,n){if(t<=0||!pe(e)||e.__v_skip||(n=n||new Set,n.has(e)))return e;if(n.add(e),t--,Se(e))Zn(e.value,t,n);else if(Vt(e))for(let i=0;i<e.length;i++)Zn(e[i],t,n);else if(Tf(e)||Nr(e))e.forEach(i=>{Zn(i,t,n)});else if(wf(e)){for(const i in e)Zn(e[i],t,n);for(const i of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,i)&&Zn(e[i],t,n)}return e}/**
* @vue/runtime-core v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Fs(e,t,n,i){try{return i?e(...i):e()}catch(r){ea(r,t,n)}}function Cn(e,t,n,i){if(qt(e)){const r=Fs(e,t,n,i);return r&&bf(r)&&r.catch(s=>{ea(s,t,n)}),r}if(Vt(e)){const r=[];for(let s=0;s<e.length;s++)r.push(Cn(e[s],t,n,i));return r}}function ea(e,t,n,i=!0){const r=t?t.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||he;if(t){let a=t.parent;const l=t.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const c=a.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](e,l,u)===!1)return}a=a.parent}if(s){ii(),Fs(s,null,10,[e,l,u]),ri();return}}lS(e,n,r,i,o)}function lS(e,t,n,i=!0,r=!1){if(r)throw e;console.error(e)}const qe=[];let In=-1;const Fr=[];let vi=null,Ar=0;const Zf=Promise.resolve();let Ho=null;function Jf(e){const t=Ho||Zf;return e?t.then(this?e.bind(this):e):t}function cS(e){let t=In+1,n=qe.length;for(;t<n;){const i=t+n>>>1,r=qe[i],s=ws(r);s<e||s===e&&r.flags&2?t=i+1:n=i}return t}function Fc(e){if(!(e.flags&1)){const t=ws(e),n=qe[qe.length-1];!n||!(e.flags&2)&&t>=ws(n)?qe.push(e):qe.splice(cS(t),0,e),e.flags|=1,Qf()}}function Qf(){Ho||(Ho=Zf.then(ed))}function uS(e){Vt(e)?Fr.push(...e):vi&&e.id===-1?vi.splice(Ar+1,0,e):e.flags&1||(Fr.push(e),e.flags|=1),Qf()}function oh(e,t,n=In+1){for(;n<qe.length;n++){const i=qe[n];if(i&&i.flags&2){if(e&&i.id!==e.uid)continue;qe.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function td(e){if(Fr.length){const t=[...new Set(Fr)].sort((n,i)=>ws(n)-ws(i));if(Fr.length=0,vi){vi.push(...t);return}for(vi=t,Ar=0;Ar<vi.length;Ar++){const n=vi[Ar];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}vi=null,Ar=0}}const ws=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ed(e){try{for(In=0;In<qe.length;In++){const t=qe[In];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Fs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;In<qe.length;In++){const t=qe[In];t&&(t.flags&=-2)}In=-1,qe.length=0,td(),Ho=null,(qe.length||Fr.length)&&ed()}}let vn=null,nd=null;function Vo(e){const t=vn;return vn=e,nd=e&&e.type.__scopeId||null,t}function id(e,t=vn,n){if(!t||e._n)return e;const i=(...r)=>{i._d&&mh(-1);const s=Vo(t);let o;try{o=e(...r)}finally{Vo(s),i._d&&mh(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function hS(e,t){if(vn===null)return e;const n=oa(vn),i=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[s,o,a,l=he]=t[r];s&&(qt(s)&&(s={mounted:s,updated:s}),s.deep&&Zn(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return e}function Xi(e,t,n,i){const r=e.dirs,s=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ii(),Cn(l,n,8,[e.el,a,e,t]),ri())}}const fS=Symbol("_vte"),rd=e=>e.__isTeleport,xi=Symbol("_leaveCb"),_o=Symbol("_enterCb");function dS(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Oc(()=>{e.isMounted=!0}),Bc(()=>{e.isUnmounting=!0}),e}const dn=[Function,Array],sd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},od=e=>{const t=e.subTree;return t.component?od(t.component):t},pS={name:"BaseTransition",props:sd,setup(e,{slots:t}){const n=kc(),i=dS();return()=>{const r=t.default&&cd(t.default(),!0);if(!r||!r.length)return;const s=ad(r),o=ie(e),{mode:a}=o;if(i.isLeaving)return qa(s);const l=ah(s);if(!l)return qa(s);let u=Zl(l,o,i,n,h=>u=h);l.type!==Ye&&Cs(l,u);let c=n.subTree&&ah(n.subTree);if(c&&c.type!==Ye&&!tr(l,c)&&od(n).type!==Ye){let h=Zl(c,o,i,n);if(Cs(c,h),a==="out-in"&&l.type!==Ye)return i.isLeaving=!0,h.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete h.afterLeave,c=void 0},qa(s);a==="in-out"&&l.type!==Ye?h.delayLeave=(f,p,v)=>{const S=ld(i,c);S[String(c.key)]=c,f[xi]=()=>{p(),f[xi]=void 0,delete u.delayedLeave,c=void 0},u.delayedLeave=()=>{v(),delete u.delayedLeave,c=void 0}}:c=void 0}else c&&(c=void 0);return s}}};function ad(e){let t=e[0];if(e.length>1){for(const n of e)if(n.type!==Ye){t=n;break}}return t}const mS=pS;function ld(e,t){const{leavingVNodes:n}=e;let i=n.get(t.type);return i||(i=Object.create(null),n.set(t.type,i)),i}function Zl(e,t,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:c,onEnterCancelled:h,onBeforeLeave:f,onLeave:p,onAfterLeave:v,onLeaveCancelled:S,onBeforeAppear:m,onAppear:d,onAfterAppear:A,onAppearCancelled:E}=t,b=String(e.key),I=ld(n,e),R=(k,x)=>{k&&Cn(k,i,9,x)},C=(k,x)=>{const y=x[1];R(k,x),Vt(k)?k.every(L=>L.length<=1)&&y():k.length<=1&&y()},D={mode:o,persisted:a,beforeEnter(k){let x=l;if(!n.isMounted)if(s)x=m||l;else return;k[xi]&&k[xi](!0);const y=I[b];y&&tr(e,y)&&y.el[xi]&&y.el[xi](),R(x,[k])},enter(k){let x=u,y=c,L=h;if(!n.isMounted)if(s)x=d||u,y=A||c,L=E||h;else return;let W=!1;const Z=k[_o]=it=>{W||(W=!0,it?R(L,[k]):R(y,[k]),D.delayedLeave&&D.delayedLeave(),k[_o]=void 0)};x?C(x,[k,Z]):Z()},leave(k,x){const y=String(e.key);if(k[_o]&&k[_o](!0),n.isUnmounting)return x();R(f,[k]);let L=!1;const W=k[xi]=Z=>{L||(L=!0,x(),Z?R(S,[k]):R(v,[k]),k[xi]=void 0,I[y]===e&&delete I[y])};I[y]=e,p?C(p,[k,W]):W()},clone(k){const x=Zl(k,t,n,i,r);return r&&r(x),x}};return D}function qa(e){if(na(e))return e=Ui(e),e.children=null,e}function ah(e){if(!na(e))return rd(e.type)&&e.children?ad(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:n}=e;if(n){if(t&16)return n[0];if(t&32&&qt(n.default))return n.default()}}function Cs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Cs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function cd(e,t=!1,n){let i=[],r=0;for(let s=0;s<e.length;s++){let o=e[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===mn?(o.patchFlag&128&&r++,i=i.concat(cd(o.children,t,a))):(t||o.type!==Ye)&&i.push(a!=null?Ui(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ud(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function ps(e,t,n,i,r=!1){if(Vt(e)){e.forEach((v,S)=>ps(v,t&&(Vt(t)?t[S]:t),n,i,r));return}if(ms(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ps(e,t,n,i.component.subTree);return}const s=i.shapeFlag&4?oa(i.component):i.el,o=r?null:s,{i:a,r:l}=e,u=t&&t.r,c=a.refs===he?a.refs={}:a.refs,h=a.setupState,f=ie(h),p=h===he?()=>!1:v=>oe(f,v);if(u!=null&&u!==l&&(ye(u)?(c[u]=null,p(u)&&(h[u]=null)):Se(u)&&(u.value=null)),qt(l))Fs(l,a,12,[o,c]);else{const v=ye(l),S=Se(l);if(v||S){const m=()=>{if(e.f){const d=v?p(l)?h[l]:c[l]:l.value;r?Vt(d)&&bc(d,s):Vt(d)?d.includes(s)||d.push(s):v?(c[l]=[s],p(l)&&(h[l]=c[l])):(l.value=[s],e.k&&(c[e.k]=l.value))}else v?(c[l]=o,p(l)&&(h[l]=o)):S&&(l.value=o,e.k&&(c[e.k]=o))};o?(m.id=-1,on(m,n)):m()}}}Jo().requestIdleCallback;Jo().cancelIdleCallback;const ms=e=>!!e.type.__asyncLoader,na=e=>e.type.__isKeepAlive;function gS(e,t){hd(e,"a",t)}function _S(e,t){hd(e,"da",t)}function hd(e,t,n=je){const i=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(ia(t,i,n),n){let r=n.parent;for(;r&&r.parent;)na(r.parent.vnode)&&vS(i,t,n,r),r=r.parent}}function vS(e,t,n,i){const r=ia(t,e,i,!0);fd(()=>{bc(i[t],r)},n)}function ia(e,t,n=je,i=!1){if(n){const r=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...o)=>{ii();const a=Os(n),l=Cn(t,n,e,o);return a(),ri(),l});return i?r.unshift(s):r.push(s),s}}const si=e=>(t,n=je)=>{(!Ps||e==="sp")&&ia(e,(...i)=>t(...i),n)},xS=si("bm"),Oc=si("m"),MS=si("bu"),SS=si("u"),Bc=si("bum"),fd=si("um"),yS=si("sp"),ES=si("rtg"),TS=si("rtc");function bS(e,t=je){ia("ec",e,t)}const AS=Symbol.for("v-ndc");function wS(e,t,n,i){let r;const s=n,o=Vt(e);if(o||ye(e)){const a=o&&Ci(e);let l=!1,u=!1;a&&(l=!xn(e),u=Ii(e),e=Qo(e)),r=new Array(e.length);for(let c=0,h=e.length;c<h;c++)r[c]=t(l?u?Bo(Ie(e[c])):Ie(e[c]):e[c],c,void 0,s)}else if(typeof e=="number"){r=new Array(e);for(let a=0;a<e;a++)r[a]=t(a+1,a,void 0,s)}else if(pe(e))if(e[Symbol.iterator])r=Array.from(e,(a,l)=>t(a,l,void 0,s));else{const a=Object.keys(e);r=new Array(a.length);for(let l=0,u=a.length;l<u;l++){const c=a[l];r[l]=t(e[c],c,l,s)}}else r=[];return r}const Jl=e=>e?Dd(e)?oa(e):Jl(e.parent):null,gs=Re(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Jl(e.parent),$root:e=>Jl(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>zc(e),$forceUpdate:e=>e.f||(e.f=()=>{Fc(e.update)}),$nextTick:e=>e.n||(e.n=Jf.bind(e.proxy)),$watch:e=>$S.bind(e)}),Ya=(e,t)=>e!==he&&!e.__isScriptSetup&&oe(e,t),CS={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=e;let u;if(t[0]!=="$"){const p=o[t];if(p!==void 0)switch(p){case 1:return i[t];case 2:return r[t];case 4:return n[t];case 3:return s[t]}else{if(Ya(i,t))return o[t]=1,i[t];if(r!==he&&oe(r,t))return o[t]=2,r[t];if((u=e.propsOptions[0])&&oe(u,t))return o[t]=3,s[t];if(n!==he&&oe(n,t))return o[t]=4,n[t];Ql&&(o[t]=0)}}const c=gs[t];let h,f;if(c)return t==="$attrs"&&Be(e.attrs,"get",""),c(e);if((h=a.__cssModules)&&(h=h[t]))return h;if(n!==he&&oe(n,t))return o[t]=4,n[t];if(f=l.config.globalProperties,oe(f,t))return f[t]},set({_:e},t,n){const{data:i,setupState:r,ctx:s}=e;return Ya(r,t)?(r[t]=n,!0):i!==he&&oe(i,t)?(i[t]=n,!0):oe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||e!==he&&oe(e,o)||Ya(t,o)||(a=s[0])&&oe(a,o)||oe(i,o)||oe(gs,o)||oe(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:oe(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function lh(e){return Vt(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ql=!0;function RS(e){const t=zc(e),n=e.proxy,i=e.ctx;Ql=!1,t.beforeCreate&&ch(t.beforeCreate,e,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:u,created:c,beforeMount:h,mounted:f,beforeUpdate:p,updated:v,activated:S,deactivated:m,beforeDestroy:d,beforeUnmount:A,destroyed:E,unmounted:b,render:I,renderTracked:R,renderTriggered:C,errorCaptured:D,serverPrefetch:k,expose:x,inheritAttrs:y,components:L,directives:W,filters:Z}=t;if(u&&PS(u,i,null),o)for(const K in o){const X=o[K];qt(X)&&(i[K]=X.bind(n))}if(r){const K=r.call(n,n);pe(K)&&(e.data=ta(K))}if(Ql=!0,s)for(const K in s){const X=s[K],ut=qt(X)?X.bind(n,n):qt(X.get)?X.get.bind(n,n):zn,dt=!qt(X)&&qt(X.set)?X.set.bind(n):zn,pt=Ti({get:ut,set:dt});Object.defineProperty(i,K,{enumerable:!0,configurable:!0,get:()=>pt.value,set:gt=>pt.value=gt})}if(a)for(const K in a)dd(a[K],i,n,K);if(l){const K=qt(l)?l.call(n):l;Reflect.ownKeys(K).forEach(X=>{FS(X,K[X])})}c&&ch(c,e,"c");function H(K,X){Vt(X)?X.forEach(ut=>K(ut.bind(n))):X&&K(X.bind(n))}if(H(xS,h),H(Oc,f),H(MS,p),H(SS,v),H(gS,S),H(_S,m),H(bS,D),H(TS,R),H(ES,C),H(Bc,A),H(fd,b),H(yS,k),Vt(x))if(x.length){const K=e.exposed||(e.exposed={});x.forEach(X=>{Object.defineProperty(K,X,{get:()=>n[X],set:ut=>n[X]=ut,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===zn&&(e.render=I),y!=null&&(e.inheritAttrs=y),L&&(e.components=L),W&&(e.directives=W),k&&ud(e)}function PS(e,t,n=zn){Vt(e)&&(e=tc(e));for(const i in e){const r=e[i];let s;pe(r)?"default"in r?s=_s(r.from||i,r.default,!0):s=_s(r.from||i):s=_s(r),Se(s)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):t[i]=s}}function ch(e,t,n){Cn(Vt(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function dd(e,t,n,i){let r=i.includes(".")?Ad(n,i):()=>n[i];if(ye(e)){const s=t[e];qt(s)&&wo(r,s)}else if(qt(e))wo(r,e.bind(n));else if(pe(e))if(Vt(e))e.forEach(s=>dd(s,t,n,i));else{const s=qt(e.handler)?e.handler.bind(n):t[e.handler];qt(s)&&wo(r,s,e)}}function zc(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:!r.length&&!n&&!i?l=t:(l={},r.length&&r.forEach(u=>Go(l,u,o,!0)),Go(l,t,o)),pe(t)&&s.set(t,l),l}function Go(e,t,n,i=!1){const{mixins:r,extends:s}=t;s&&Go(e,s,n,!0),r&&r.forEach(o=>Go(e,o,n,!0));for(const o in t)if(!(i&&o==="expose")){const a=LS[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const LS={data:uh,props:hh,emits:hh,methods:ls,computed:ls,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:ls,directives:ls,watch:IS,provide:uh,inject:DS};function uh(e,t){return t?e?function(){return Re(qt(e)?e.call(this,this):e,qt(t)?t.call(this,this):t)}:t:e}function DS(e,t){return ls(tc(e),tc(t))}function tc(e){if(Vt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function ls(e,t){return e?Re(Object.create(null),e,t):t}function hh(e,t){return e?Vt(e)&&Vt(t)?[...new Set([...e,...t])]:Re(Object.create(null),lh(e),lh(t??{})):t}function IS(e,t){if(!e)return t;if(!t)return e;const n=Re(Object.create(null),e);for(const i in t)n[i]=We(e[i],t[i]);return n}function pd(){return{app:null,config:{isNativeTag:xM,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let US=0;function NS(e,t){return function(i,r=null){qt(i)||(i=Re({},i)),r!=null&&!pe(r)&&(r=null);const s=pd(),o=new WeakSet,a=[];let l=!1;const u=s.app={_uid:US++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:vy,get config(){return s.config},set config(c){},use(c,...h){return o.has(c)||(c&&qt(c.install)?(o.add(c),c.install(u,...h)):qt(c)&&(o.add(c),c(u,...h))),u},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),u},component(c,h){return h?(s.components[c]=h,u):s.components[c]},directive(c,h){return h?(s.directives[c]=h,u):s.directives[c]},mount(c,h,f){if(!l){const p=u._ceVNode||ze(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),h&&t?t(p,c):e(p,c,f),l=!0,u._container=c,c.__vue_app__=u,oa(p.component)}},onUnmount(c){a.push(c)},unmount(){l&&(Cn(a,u._instance,16),e(null,u._container),delete u._container.__vue_app__)},provide(c,h){return s.provides[c]=h,u},runWithContext(c){const h=rr;rr=u;try{return c()}finally{rr=h}}};return u}}let rr=null;function FS(e,t){if(je){let n=je.provides;const i=je.parent&&je.parent.provides;i===n&&(n=je.provides=Object.create(i)),n[e]=t}}function _s(e,t,n=!1){const i=kc();if(i||rr){let r=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return n&&qt(t)?t.call(i&&i.proxy):t}}function OS(){return!!(kc()||rr)}const md={},gd=()=>Object.create(md),_d=e=>Object.getPrototypeOf(e)===md;function BS(e,t,n,i=!1){const r={},s=gd();e.propsDefaults=Object.create(null),vd(e,t,r,s);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=i?r:ZM(r):e.type.props?e.props=r:e.props=s,e.attrs=s}function zS(e,t,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=e,a=ie(r),[l]=e.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const c=e.vnode.dynamicProps;for(let h=0;h<c.length;h++){let f=c[h];if(ra(e.emitsOptions,f))continue;const p=t[f];if(l)if(oe(s,f))p!==s[f]&&(s[f]=p,u=!0);else{const v=Di(f);r[v]=ec(l,a,v,p,e,!1)}else p!==s[f]&&(s[f]=p,u=!0)}}}else{vd(e,t,r,s)&&(u=!0);let c;for(const h in a)(!t||!oe(t,h)&&((c=Oi(h))===h||!oe(t,c)))&&(l?n&&(n[h]!==void 0||n[c]!==void 0)&&(r[h]=ec(l,a,h,void 0,e,!0)):delete r[h]);if(s!==a)for(const h in s)(!t||!oe(t,h))&&(delete s[h],u=!0)}u&&$n(e.attrs,"set","")}function vd(e,t,n,i){const[r,s]=e.propsOptions;let o=!1,a;if(t)for(let l in t){if(hs(l))continue;const u=t[l];let c;r&&oe(r,c=Di(l))?!s||!s.includes(c)?n[c]=u:(a||(a={}))[c]=u:ra(e.emitsOptions,l)||(!(l in i)||u!==i[l])&&(i[l]=u,o=!0)}if(s){const l=ie(n),u=a||he;for(let c=0;c<s.length;c++){const h=s[c];n[h]=ec(r,l,h,u[h],e,!oe(u,h))}}return o}function ec(e,t,n,i,r,s){const o=e[n];if(o!=null){const a=oe(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qt(l)){const{propsDefaults:u}=r;if(n in u)i=u[n];else{const c=Os(r);i=u[n]=l.call(null,t),c()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Oi(n))&&(i=!0))}return i}const HS=new WeakMap;function xd(e,t,n=!1){const i=n?HS:t.propsCache,r=i.get(e);if(r)return r;const s=e.props,o={},a=[];let l=!1;if(!qt(e)){const c=h=>{l=!0;const[f,p]=xd(h,t,!0);Re(o,f),p&&a.push(...p)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!s&&!l)return pe(e)&&i.set(e,Ur),Ur;if(Vt(s))for(let c=0;c<s.length;c++){const h=Di(s[c]);fh(h)&&(o[h]=he)}else if(s)for(const c in s){const h=Di(c);if(fh(h)){const f=s[c],p=o[h]=Vt(f)||qt(f)?{type:f}:Re({},f),v=p.type;let S=!1,m=!0;if(Vt(v))for(let d=0;d<v.length;++d){const A=v[d],E=qt(A)&&A.name;if(E==="Boolean"){S=!0;break}else E==="String"&&(m=!1)}else S=qt(v)&&v.name==="Boolean";p[0]=S,p[1]=m,(S||oe(p,"default"))&&a.push(h)}}const u=[o,a];return pe(e)&&i.set(e,u),u}function fh(e){return e[0]!=="$"&&!hs(e)}const Hc=e=>e==="_"||e==="__"||e==="_ctx"||e==="$stable",Vc=e=>Vt(e)?e.map(On):[On(e)],VS=(e,t,n)=>{if(t._n)return t;const i=id((...r)=>Vc(t(...r)),n);return i._c=!1,i},Md=(e,t,n)=>{const i=e._ctx;for(const r in e){if(Hc(r))continue;const s=e[r];if(qt(s))t[r]=VS(r,s,i);else if(s!=null){const o=Vc(s);t[r]=()=>o}}},Sd=(e,t)=>{const n=Vc(t);e.slots.default=()=>n},yd=(e,t,n)=>{for(const i in t)(n||!Hc(i))&&(e[i]=t[i])},GS=(e,t,n)=>{const i=e.slots=gd();if(e.vnode.shapeFlag&32){const r=t.__;r&&ql(i,"__",r,!0);const s=t._;s?(yd(i,t,n),n&&ql(i,"_",s,!0)):Md(t,i)}else t&&Sd(e,t)},kS=(e,t,n)=>{const{vnode:i,slots:r}=e;let s=!0,o=he;if(i.shapeFlag&32){const a=t._;a?n&&a===1?s=!1:yd(r,t,n):(s=!t.$stable,Md(t,r)),o=t}else t&&(Sd(e,t),o={default:1});if(s)for(const a in r)!Hc(a)&&o[a]==null&&delete r[a]},on=iy;function WS(e){return XS(e)}function XS(e,t){const n=Jo();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:u,setElementText:c,parentNode:h,nextSibling:f,setScopeId:p=zn,insertStaticContent:v}=e,S=(_,P,B,J=null,V=null,$=null,Q=void 0,M=null,g=!!P.dynamicChildren)=>{if(_===P)return;_&&!tr(_,P)&&(J=ht(_),gt(_,V,$,!0),_=null),P.patchFlag===-2&&(g=!1,P.dynamicChildren=null);const{type:w,ref:z,shapeFlag:N}=P;switch(w){case sa:m(_,P,B,J);break;case Ye:d(_,P,B,J);break;case $a:_==null&&A(P,B,J,Q);break;case mn:L(_,P,B,J,V,$,Q,M,g);break;default:N&1?I(_,P,B,J,V,$,Q,M,g):N&6?W(_,P,B,J,V,$,Q,M,g):(N&64||N&128)&&w.process(_,P,B,J,V,$,Q,M,g,Pt)}z!=null&&V?ps(z,_&&_.ref,$,P||_,!P):z==null&&_&&_.ref!=null&&ps(_.ref,null,$,_,!0)},m=(_,P,B,J)=>{if(_==null)i(P.el=a(P.children),B,J);else{const V=P.el=_.el;P.children!==_.children&&u(V,P.children)}},d=(_,P,B,J)=>{_==null?i(P.el=l(P.children||""),B,J):P.el=_.el},A=(_,P,B,J)=>{[_.el,_.anchor]=v(_.children,P,B,J,_.el,_.anchor)},E=({el:_,anchor:P},B,J)=>{let V;for(;_&&_!==P;)V=f(_),i(_,B,J),_=V;i(P,B,J)},b=({el:_,anchor:P})=>{let B;for(;_&&_!==P;)B=f(_),r(_),_=B;r(P)},I=(_,P,B,J,V,$,Q,M,g)=>{P.type==="svg"?Q="svg":P.type==="math"&&(Q="mathml"),_==null?R(P,B,J,V,$,Q,M,g):k(_,P,V,$,Q,M,g)},R=(_,P,B,J,V,$,Q,M)=>{let g,w;const{props:z,shapeFlag:N,transition:F,dirs:ot}=_;if(g=_.el=o(_.type,$,z&&z.is,z),N&8?c(g,_.children):N&16&&D(_.children,g,null,J,V,ja(_,$),Q,M),ot&&Xi(_,null,J,"created"),C(g,_,_.scopeId,Q,J),z){for(const ct in z)ct!=="value"&&!hs(ct)&&s(g,ct,null,z[ct],$,J);"value"in z&&s(g,"value",null,z.value,$),(w=z.onVnodeBeforeMount)&&Dn(w,J,_)}ot&&Xi(_,null,J,"beforeMount");const rt=qS(V,F);rt&&F.beforeEnter(g),i(g,P,B),((w=z&&z.onVnodeMounted)||rt||ot)&&on(()=>{w&&Dn(w,J,_),rt&&F.enter(g),ot&&Xi(_,null,J,"mounted")},V)},C=(_,P,B,J,V)=>{if(B&&p(_,B),J)for(let $=0;$<J.length;$++)p(_,J[$]);if(V){let $=V.subTree;if(P===$||Cd($.type)&&($.ssContent===P||$.ssFallback===P)){const Q=V.vnode;C(_,Q,Q.scopeId,Q.slotScopeIds,V.parent)}}},D=(_,P,B,J,V,$,Q,M,g=0)=>{for(let w=g;w<_.length;w++){const z=_[w]=M?Mi(_[w]):On(_[w]);S(null,z,P,B,J,V,$,Q,M)}},k=(_,P,B,J,V,$,Q)=>{const M=P.el=_.el;let{patchFlag:g,dynamicChildren:w,dirs:z}=P;g|=_.patchFlag&16;const N=_.props||he,F=P.props||he;let ot;if(B&&qi(B,!1),(ot=F.onVnodeBeforeUpdate)&&Dn(ot,B,P,_),z&&Xi(P,_,B,"beforeUpdate"),B&&qi(B,!0),(N.innerHTML&&F.innerHTML==null||N.textContent&&F.textContent==null)&&c(M,""),w?x(_.dynamicChildren,w,M,B,J,ja(P,V),$):Q||X(_,P,M,null,B,J,ja(P,V),$,!1),g>0){if(g&16)y(M,N,F,B,V);else if(g&2&&N.class!==F.class&&s(M,"class",null,F.class,V),g&4&&s(M,"style",N.style,F.style,V),g&8){const rt=P.dynamicProps;for(let ct=0;ct<rt.length;ct++){const vt=rt[ct],at=N[vt],ft=F[vt];(ft!==at||vt==="value")&&s(M,vt,at,ft,V,B)}}g&1&&_.children!==P.children&&c(M,P.children)}else!Q&&w==null&&y(M,N,F,B,V);((ot=F.onVnodeUpdated)||z)&&on(()=>{ot&&Dn(ot,B,P,_),z&&Xi(P,_,B,"updated")},J)},x=(_,P,B,J,V,$,Q)=>{for(let M=0;M<P.length;M++){const g=_[M],w=P[M],z=g.el&&(g.type===mn||!tr(g,w)||g.shapeFlag&198)?h(g.el):B;S(g,w,z,null,J,V,$,Q,!0)}},y=(_,P,B,J,V)=>{if(P!==B){if(P!==he)for(const $ in P)!hs($)&&!($ in B)&&s(_,$,P[$],null,V,J);for(const $ in B){if(hs($))continue;const Q=B[$],M=P[$];Q!==M&&$!=="value"&&s(_,$,M,Q,V,J)}"value"in B&&s(_,"value",P.value,B.value,V)}},L=(_,P,B,J,V,$,Q,M,g)=>{const w=P.el=_?_.el:a(""),z=P.anchor=_?_.anchor:a("");let{patchFlag:N,dynamicChildren:F,slotScopeIds:ot}=P;ot&&(M=M?M.concat(ot):ot),_==null?(i(w,B,J),i(z,B,J),D(P.children||[],B,z,V,$,Q,M,g)):N>0&&N&64&&F&&_.dynamicChildren?(x(_.dynamicChildren,F,B,V,$,Q,M),(P.key!=null||V&&P===V.subTree)&&Ed(_,P,!0)):X(_,P,B,z,V,$,Q,M,g)},W=(_,P,B,J,V,$,Q,M,g)=>{P.slotScopeIds=M,_==null?P.shapeFlag&512?V.ctx.activate(P,B,J,Q,g):Z(P,B,J,V,$,Q,g):it(_,P,g)},Z=(_,P,B,J,V,$,Q)=>{const M=_.component=hy(_,J,V);if(na(_)&&(M.ctx.renderer=Pt),fy(M,!1,Q),M.asyncDep){if(V&&V.registerDep(M,H,Q),!_.el){const g=M.subTree=ze(Ye);d(null,g,P,B),_.placeholder=g.el}}else H(M,_,P,B,V,$,Q)},it=(_,P,B)=>{const J=P.component=_.component;if(ey(_,P,B))if(J.asyncDep&&!J.asyncResolved){K(J,P,B);return}else J.next=P,J.update();else P.el=_.el,J.vnode=P},H=(_,P,B,J,V,$,Q)=>{const M=()=>{if(_.isMounted){let{next:N,bu:F,u:ot,parent:rt,vnode:ct}=_;{const yt=Td(_);if(yt){N&&(N.el=ct.el,K(_,N,Q)),yt.asyncDep.then(()=>{_.isUnmounted||M()});return}}let vt=N,at;qi(_,!1),N?(N.el=ct.el,K(_,N,Q)):N=ct,F&&bo(F),(at=N.props&&N.props.onVnodeBeforeUpdate)&&Dn(at,rt,N,ct),qi(_,!0);const ft=Ka(_),bt=_.subTree;_.subTree=ft,S(bt,ft,h(bt.el),ht(bt),_,V,$),N.el=ft.el,vt===null&&ny(_,ft.el),ot&&on(ot,V),(at=N.props&&N.props.onVnodeUpdated)&&on(()=>Dn(at,rt,N,ct),V)}else{let N;const{el:F,props:ot}=P,{bm:rt,m:ct,parent:vt,root:at,type:ft}=_,bt=ms(P);if(qi(_,!1),rt&&bo(rt),!bt&&(N=ot&&ot.onVnodeBeforeMount)&&Dn(N,vt,P),qi(_,!0),F&&Ut){const yt=()=>{_.subTree=Ka(_),Ut(F,_.subTree,_,V,null)};bt&&ft.__asyncHydrate?ft.__asyncHydrate(F,_,yt):yt()}else{at.ce&&at.ce._def.shadowRoot!==!1&&at.ce._injectChildStyle(ft);const yt=_.subTree=Ka(_);S(null,yt,B,J,_,V,$),P.el=yt.el}if(ct&&on(ct,V),!bt&&(N=ot&&ot.onVnodeMounted)){const yt=P;on(()=>Dn(N,vt,yt),V)}(P.shapeFlag&256||vt&&ms(vt.vnode)&&vt.vnode.shapeFlag&256)&&_.a&&on(_.a,V),_.isMounted=!0,P=B=J=null}};_.scope.on();const g=_.effect=new Nf(M);_.scope.off();const w=_.update=g.run.bind(g),z=_.job=g.runIfDirty.bind(g);z.i=_,z.id=_.uid,g.scheduler=()=>Fc(z),qi(_,!0),w()},K=(_,P,B)=>{P.component=_;const J=_.vnode.props;_.vnode=P,_.next=null,zS(_,P.props,J,B),kS(_,P.children,B),ii(),oh(_),ri()},X=(_,P,B,J,V,$,Q,M,g=!1)=>{const w=_&&_.children,z=_?_.shapeFlag:0,N=P.children,{patchFlag:F,shapeFlag:ot}=P;if(F>0){if(F&128){dt(w,N,B,J,V,$,Q,M,g);return}else if(F&256){ut(w,N,B,J,V,$,Q,M,g);return}}ot&8?(z&16&&lt(w,V,$),N!==w&&c(B,N)):z&16?ot&16?dt(w,N,B,J,V,$,Q,M,g):lt(w,V,$,!0):(z&8&&c(B,""),ot&16&&D(N,B,J,V,$,Q,M,g))},ut=(_,P,B,J,V,$,Q,M,g)=>{_=_||Ur,P=P||Ur;const w=_.length,z=P.length,N=Math.min(w,z);let F;for(F=0;F<N;F++){const ot=P[F]=g?Mi(P[F]):On(P[F]);S(_[F],ot,B,null,V,$,Q,M,g)}w>z?lt(_,V,$,!0,!1,N):D(P,B,J,V,$,Q,M,g,N)},dt=(_,P,B,J,V,$,Q,M,g)=>{let w=0;const z=P.length;let N=_.length-1,F=z-1;for(;w<=N&&w<=F;){const ot=_[w],rt=P[w]=g?Mi(P[w]):On(P[w]);if(tr(ot,rt))S(ot,rt,B,null,V,$,Q,M,g);else break;w++}for(;w<=N&&w<=F;){const ot=_[N],rt=P[F]=g?Mi(P[F]):On(P[F]);if(tr(ot,rt))S(ot,rt,B,null,V,$,Q,M,g);else break;N--,F--}if(w>N){if(w<=F){const ot=F+1,rt=ot<z?P[ot].el:J;for(;w<=F;)S(null,P[w]=g?Mi(P[w]):On(P[w]),B,rt,V,$,Q,M,g),w++}}else if(w>F)for(;w<=N;)gt(_[w],V,$,!0),w++;else{const ot=w,rt=w,ct=new Map;for(w=rt;w<=F;w++){const Rt=P[w]=g?Mi(P[w]):On(P[w]);Rt.key!=null&&ct.set(Rt.key,w)}let vt,at=0;const ft=F-rt+1;let bt=!1,yt=0;const mt=new Array(ft);for(w=0;w<ft;w++)mt[w]=0;for(w=ot;w<=N;w++){const Rt=_[w];if(at>=ft){gt(Rt,V,$,!0);continue}let It;if(Rt.key!=null)It=ct.get(Rt.key);else for(vt=rt;vt<=F;vt++)if(mt[vt-rt]===0&&tr(Rt,P[vt])){It=vt;break}It===void 0?gt(Rt,V,$,!0):(mt[It-rt]=w+1,It>=yt?yt=It:bt=!0,S(Rt,P[It],B,null,V,$,Q,M,g),at++)}const Ht=bt?YS(mt):Ur;for(vt=Ht.length-1,w=ft-1;w>=0;w--){const Rt=rt+w,It=P[Rt],U=P[Rt+1],xt=Rt+1<z?U.el||U.placeholder:J;mt[w]===0?S(null,It,B,xt,V,$,Q,M,g):bt&&(vt<0||w!==Ht[vt]?pt(It,B,xt,2):vt--)}}},pt=(_,P,B,J,V=null)=>{const{el:$,type:Q,transition:M,children:g,shapeFlag:w}=_;if(w&6){pt(_.component.subTree,P,B,J);return}if(w&128){_.suspense.move(P,B,J);return}if(w&64){Q.move(_,P,B,Pt);return}if(Q===mn){i($,P,B);for(let N=0;N<g.length;N++)pt(g[N],P,B,J);i(_.anchor,P,B);return}if(Q===$a){E(_,P,B);return}if(J!==2&&w&1&&M)if(J===0)M.beforeEnter($),i($,P,B),on(()=>M.enter($),V);else{const{leave:N,delayLeave:F,afterLeave:ot}=M,rt=()=>{_.ctx.isUnmounted?r($):i($,P,B)},ct=()=>{N($,()=>{rt(),ot&&ot()})};F?F($,rt,ct):ct()}else i($,P,B)},gt=(_,P,B,J=!1,V=!1)=>{const{type:$,props:Q,ref:M,children:g,dynamicChildren:w,shapeFlag:z,patchFlag:N,dirs:F,cacheIndex:ot}=_;if(N===-2&&(V=!1),M!=null&&(ii(),ps(M,null,B,_,!0),ri()),ot!=null&&(P.renderCache[ot]=void 0),z&256){P.ctx.deactivate(_);return}const rt=z&1&&F,ct=!ms(_);let vt;if(ct&&(vt=Q&&Q.onVnodeBeforeUnmount)&&Dn(vt,P,_),z&6)tt(_.component,B,J);else{if(z&128){_.suspense.unmount(B,J);return}rt&&Xi(_,null,P,"beforeUnmount"),z&64?_.type.remove(_,P,B,Pt,J):w&&!w.hasOnce&&($!==mn||N>0&&N&64)?lt(w,P,B,!1,!0):($===mn&&N&384||!V&&z&16)&&lt(g,P,B),J&&zt(_)}(ct&&(vt=Q&&Q.onVnodeUnmounted)||rt)&&on(()=>{vt&&Dn(vt,P,_),rt&&Xi(_,null,P,"unmounted")},B)},zt=_=>{const{type:P,el:B,anchor:J,transition:V}=_;if(P===mn){nt(B,J);return}if(P===$a){b(_);return}const $=()=>{r(B),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(_.shapeFlag&1&&V&&!V.persisted){const{leave:Q,delayLeave:M}=V,g=()=>Q(B,$);M?M(_.el,$,g):g()}else $()},nt=(_,P)=>{let B;for(;_!==P;)B=f(_),r(_),_=B;r(P)},tt=(_,P,B)=>{const{bum:J,scope:V,job:$,subTree:Q,um:M,m:g,a:w,parent:z,slots:{__:N}}=_;dh(g),dh(w),J&&bo(J),z&&Vt(N)&&N.forEach(F=>{z.renderCache[F]=void 0}),V.stop(),$&&($.flags|=8,gt(Q,_,P,B)),M&&on(M,P),on(()=>{_.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},lt=(_,P,B,J=!1,V=!1,$=0)=>{for(let Q=$;Q<_.length;Q++)gt(_[Q],P,B,J,V)},ht=_=>{if(_.shapeFlag&6)return ht(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const P=f(_.anchor||_.el),B=P&&P[fS];return B?f(B):P};let St=!1;const At=(_,P,B)=>{_==null?P._vnode&&gt(P._vnode,null,null,!0):S(P._vnode||null,_,P,null,null,null,B),P._vnode=_,St||(St=!0,oh(),td(),St=!1)},Pt={p:S,um:gt,m:pt,r:zt,mt:Z,mc:D,pc:X,pbc:x,n:ht,o:e};let Gt,Ut;return{render:At,hydrate:Gt,createApp:NS(At,Gt)}}function ja({type:e,props:t},n){return n==="svg"&&e==="foreignObject"||n==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:n}function qi({effect:e,job:t},n){n?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function qS(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ed(e,t,n=!1){const i=e.children,r=t.children;if(Vt(i)&&Vt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Mi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Ed(o,a)),a.type===sa&&(a.el=o.el),a.type===Ye&&!a.el&&(a.el=o.el)}}function YS(e){const t=e.slice(),n=[0];let i,r,s,o,a;const l=e.length;for(i=0;i<l;i++){const u=e[i];if(u!==0){if(r=n[n.length-1],e[r]<u){t[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,e[n[a]]<u?s=a+1:o=a;u<e[n[s]]&&(s>0&&(t[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=t[o];return n}function Td(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Td(t)}function dh(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const jS=Symbol.for("v-scx"),KS=()=>_s(jS);function wo(e,t,n){return bd(e,t,n)}function bd(e,t,n=he){const{immediate:i,deep:r,flush:s,once:o}=n,a=Re({},n),l=t&&i||!t&&s!=="post";let u;if(Ps){if(s==="sync"){const p=KS();u=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=zn,p.resume=zn,p.pause=zn,p}}const c=je;a.call=(p,v,S)=>Cn(p,c,v,S);let h=!1;s==="post"?a.scheduler=p=>{on(p,c&&c.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(p,v)=>{v?p():Fc(p)}),a.augmentJob=p=>{t&&(p.flags|=4),h&&(p.flags|=2,c&&(p.id=c.uid,p.i=c))};const f=aS(e,t,a);return Ps&&(u?u.push(f):l&&f()),f}function $S(e,t,n){const i=this.proxy,r=ye(e)?e.includes(".")?Ad(i,e):()=>i[e]:e.bind(i,i);let s;qt(t)?s=t:(s=t.handler,n=t);const o=Os(this),a=bd(r,s.bind(i),n);return o(),a}function Ad(e,t){const n=t.split(".");return()=>{let i=e;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const ZS=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Di(t)}Modifiers`]||e[`${Oi(t)}Modifiers`];function JS(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||he;let r=n;const s=t.startsWith("update:"),o=s&&ZS(i,t.slice(7));o&&(o.trim&&(r=n.map(c=>ye(c)?c.trim():c)),o.number&&(r=n.map(Yl)));let a,l=i[a=Va(t)]||i[a=Va(Di(t))];!l&&s&&(l=i[a=Va(Oi(t))]),l&&Cn(l,e,6,r);const u=i[a+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Cn(u,e,6,r)}}function wd(e,t,n=!1){const i=t.emitsCache,r=i.get(e);if(r!==void 0)return r;const s=e.emits;let o={},a=!1;if(!qt(e)){const l=u=>{const c=wd(u,t,!0);c&&(a=!0,Re(o,c))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!s&&!a?(pe(e)&&i.set(e,null),null):(Vt(s)?s.forEach(l=>o[l]=null):Re(o,s),pe(e)&&i.set(e,o),o)}function ra(e,t){return!e||!Ko(t)?!1:(t=t.slice(2).replace(/Once$/,""),oe(e,t[0].toLowerCase()+t.slice(1))||oe(e,Oi(t))||oe(e,t))}function Ka(e){const{type:t,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:u,renderCache:c,props:h,data:f,setupState:p,ctx:v,inheritAttrs:S}=e,m=Vo(e);let d,A;try{if(n.shapeFlag&4){const b=r||i,I=b;d=On(u.call(I,b,c,h,p,f,v)),A=a}else{const b=t;d=On(b.length>1?b(h,{attrs:a,slots:o,emit:l}):b(h,null)),A=t.props?a:QS(a)}}catch(b){vs.length=0,ea(b,e,1),d=ze(Ye)}let E=d;if(A&&S!==!1){const b=Object.keys(A),{shapeFlag:I}=E;b.length&&I&7&&(s&&b.some(Tc)&&(A=ty(A,s)),E=Ui(E,A,!1,!0))}return n.dirs&&(E=Ui(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&Cs(E,n.transition),d=E,Vo(m),d}const QS=e=>{let t;for(const n in e)(n==="class"||n==="style"||Ko(n))&&((t||(t={}))[n]=e[n]);return t},ty=(e,t)=>{const n={};for(const i in e)(!Tc(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function ey(e,t,n){const{props:i,children:r,component:s}=e,{props:o,children:a,patchFlag:l}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?ph(i,o,u):!!o;if(l&8){const c=t.dynamicProps;for(let h=0;h<c.length;h++){const f=c[h];if(o[f]!==i[f]&&!ra(u,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?ph(i,o,u):!0:!!o;return!1}function ph(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(t[s]!==e[s]&&!ra(n,s))return!0}return!1}function ny({vnode:e,parent:t},n){for(;t;){const i=t.subTree;if(i.suspense&&i.suspense.activeBranch===e&&(i.el=e.el),i===e)(e=t.vnode).el=n,t=t.parent;else break}}const Cd=e=>e.__isSuspense;function iy(e,t){t&&t.pendingBranch?Vt(e)?t.effects.push(...e):t.effects.push(e):uS(e)}const mn=Symbol.for("v-fgt"),sa=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),$a=Symbol.for("v-stc"),vs=[];let ln=null;function Ri(e=!1){vs.push(ln=e?null:[])}function ry(){vs.pop(),ln=vs[vs.length-1]||null}let Rs=1;function mh(e,t=!1){Rs+=e,e<0&&ln&&t&&(ln.hasOnce=!0)}function Rd(e){return e.dynamicChildren=Rs>0?ln||Ur:null,ry(),Rs>0&&ln&&ln.push(e),e}function Or(e,t,n,i,r,s){return Rd(Xt(e,t,n,i,r,s,!0))}function Pd(e,t,n,i,r){return Rd(ze(e,t,n,i,r,!0))}function ko(e){return e?e.__v_isVNode===!0:!1}function tr(e,t){return e.type===t.type&&e.key===t.key}const Ld=({key:e})=>e??null,Co=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Se(e)||qt(e)?{i:vn,r:e,k:t,f:!!n}:e:null);function Xt(e,t=null,n=null,i=0,r=null,s=e===mn?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ld(t),ref:t&&Co(t),scopeId:nd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:vn};return a?(Gc(l,n),s&128&&e.normalize(l)):n&&(l.shapeFlag|=ye(n)?8:16),Rs>0&&!o&&ln&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ln.push(l),l}const ze=sy;function sy(e,t=null,n=null,i=0,r=null,s=!1){if((!e||e===AS)&&(e=Ye),ko(e)){const a=Ui(e,t,!0);return n&&Gc(a,n),Rs>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(e)]=a:ln.push(a)),a.patchFlag=-2,a}if(gy(e)&&(e=e.__vccOpts),t){t=oy(t);let{class:a,style:l}=t;a&&!ye(a)&&(t.class=jr(a)),pe(l)&&(Uc(l)&&!Vt(l)&&(l=Re({},l)),t.style=wc(l))}const o=ye(e)?1:Cd(e)?128:rd(e)?64:pe(e)?4:qt(e)?2:0;return Xt(e,t,n,i,r,o,s,!0)}function oy(e){return e?Uc(e)||_d(e)?Re({},e):e:null}function Ui(e,t,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=e,u=t?ly(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:u,key:u&&Ld(u),ref:t&&t.ref?n&&s?Vt(s)?s.concat(Co(t)):[s,Co(t)]:Co(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==mn?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ui(e.ssContent),ssFallback:e.ssFallback&&Ui(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&i&&Cs(c,l.clone(c)),c}function Zi(e=" ",t=0){return ze(sa,null,e,t)}function ay(e="",t=!1){return t?(Ri(),Pd(Ye,null,e)):ze(Ye,null,e)}function On(e){return e==null||typeof e=="boolean"?ze(Ye):Vt(e)?ze(mn,null,e.slice()):ko(e)?Mi(e):ze(sa,null,String(e))}function Mi(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ui(e)}function Gc(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(Vt(t))n=16;else if(typeof t=="object")if(i&65){const r=t.default;r&&(r._c&&(r._d=!1),Gc(e,r()),r._c&&(r._d=!0));return}else{n=32;const r=t._;!r&&!_d(t)?t._ctx=vn:r===3&&vn&&(vn.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else qt(t)?(t={default:t,_ctx:vn},n=32):(t=String(t),i&64?(n=16,t=[Zi(t)]):n=8);e.children=t,e.shapeFlag|=n}function ly(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const r in i)if(r==="class")t.class!==i.class&&(t.class=jr([t.class,i.class]));else if(r==="style")t.style=wc([t.style,i.style]);else if(Ko(r)){const s=t[r],o=i[r];o&&s!==o&&!(Vt(s)&&s.includes(o))&&(t[r]=s?[].concat(s,o):o)}else r!==""&&(t[r]=i[r])}return t}function Dn(e,t,n,i=null){Cn(e,t,7,[n,i])}const cy=pd();let uy=0;function hy(e,t,n){const i=e.type,r=(t?t.appContext:e.appContext)||cy,s={uid:uy++,vnode:e,type:i,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Df(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xd(i,r),emitsOptions:wd(i,r),emit:null,emitted:null,propsDefaults:he,inheritAttrs:i.inheritAttrs,ctx:he,data:he,props:he,attrs:he,slots:he,refs:he,setupState:he,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=JS.bind(null,s),e.ce&&e.ce(s),s}let je=null;const kc=()=>je||vn;let Wo,nc;{const e=Jo(),t=(n,i)=>{let r;return(r=e[n])||(r=e[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Wo=t("__VUE_INSTANCE_SETTERS__",n=>je=n),nc=t("__VUE_SSR_SETTERS__",n=>Ps=n)}const Os=e=>{const t=je;return Wo(e),e.scope.on(),()=>{e.scope.off(),Wo(t)}},gh=()=>{je&&je.scope.off(),Wo(null)};function Dd(e){return e.vnode.shapeFlag&4}let Ps=!1;function fy(e,t=!1,n=!1){t&&nc(t);const{props:i,children:r}=e.vnode,s=Dd(e);BS(e,i,s,t),GS(e,r,n||t);const o=s?dy(e,t):void 0;return t&&nc(!1),o}function dy(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,CS);const{setup:i}=n;if(i){ii();const r=e.setupContext=i.length>1?my(e):null,s=Os(e),o=Fs(i,e,0,[e.props,r]),a=bf(o);if(ri(),s(),(a||e.sp)&&!ms(e)&&ud(e),a){if(o.then(gh,gh),t)return o.then(l=>{_h(e,l,t)}).catch(l=>{ea(l,e,0)});e.asyncDep=o}else _h(e,o,t)}else Id(e,t)}function _h(e,t,n){qt(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:pe(t)&&(e.setupState=$f(t)),Id(e,n)}let vh;function Id(e,t,n){const i=e.type;if(!e.render){if(!t&&vh&&!i.render){const r=i.template||zc(e).template;if(r){const{isCustomElement:s,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=i,u=Re(Re({isCustomElement:s,delimiters:a},o),l);i.render=vh(r,u)}}e.render=i.render||zn}{const r=Os(e);ii();try{RS(e)}finally{ri(),r()}}}const py={get(e,t){return Be(e,"get",""),e[t]}};function my(e){const t=n=>{e.exposed=n||{}};return{attrs:new Proxy(e.attrs,py),slots:e.slots,emit:e.emit,expose:t}}function oa(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy($f(Nc(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in gs)return gs[n](e)},has(t,n){return n in t||n in gs}})):e.proxy}function gy(e){return qt(e)&&"__vccOpts"in e}const Ti=(e,t)=>sS(e,t,Ps);function _y(e,t,n){const i=arguments.length;return i===2?pe(t)&&!Vt(t)?ko(t)?ze(e,null,[t]):ze(e,t):ze(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ko(n)&&(n=[n]),ze(e,t,n))}const vy="3.5.18";/**
* @vue/runtime-dom v3.5.18
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ic;const xh=typeof window<"u"&&window.trustedTypes;if(xh)try{ic=xh.createPolicy("vue",{createHTML:e=>e})}catch{}const Ud=ic?e=>ic.createHTML(e):e=>e,xy="http://www.w3.org/2000/svg",My="http://www.w3.org/1998/Math/MathML",jn=typeof document<"u"?document:null,Mh=jn&&jn.createElement("template"),Sy={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t==="svg"?jn.createElementNS(xy,e):t==="mathml"?jn.createElementNS(My,e):n?jn.createElement(e,{is:n}):jn.createElement(e);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>jn.createTextNode(e),createComment:e=>jn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const o=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Mh.innerHTML=Ud(i==="svg"?`<svg>${e}</svg>`:i==="mathml"?`<math>${e}</math>`:e);const a=Mh.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},mi="transition",rs="animation",Ls=Symbol("_vtc"),Nd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},yy=Re({},sd,Nd),Ey=e=>(e.displayName="Transition",e.props=yy,e),Ty=Ey((e,{slots:t})=>_y(mS,by(e),t)),Yi=(e,t=[])=>{Vt(e)?e.forEach(n=>n(...t)):e&&e(...t)},Sh=e=>e?Vt(e)?e.some(t=>t.length>1):e.length>1:!1;function by(e){const t={};for(const L in e)L in Nd||(t[L]=e[L]);if(e.css===!1)return t;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:u=o,appearToClass:c=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,v=Ay(r),S=v&&v[0],m=v&&v[1],{onBeforeEnter:d,onEnter:A,onEnterCancelled:E,onLeave:b,onLeaveCancelled:I,onBeforeAppear:R=d,onAppear:C=A,onAppearCancelled:D=E}=t,k=(L,W,Z,it)=>{L._enterCancelled=it,ji(L,W?c:a),ji(L,W?u:o),Z&&Z()},x=(L,W)=>{L._isLeaving=!1,ji(L,h),ji(L,p),ji(L,f),W&&W()},y=L=>(W,Z)=>{const it=L?C:A,H=()=>k(W,L,Z);Yi(it,[W,H]),yh(()=>{ji(W,L?l:s),qn(W,L?c:a),Sh(it)||Eh(W,i,S,H)})};return Re(t,{onBeforeEnter(L){Yi(d,[L]),qn(L,s),qn(L,o)},onBeforeAppear(L){Yi(R,[L]),qn(L,l),qn(L,u)},onEnter:y(!1),onAppear:y(!0),onLeave(L,W){L._isLeaving=!0;const Z=()=>x(L,W);qn(L,h),L._enterCancelled?(qn(L,f),Ah()):(Ah(),qn(L,f)),yh(()=>{L._isLeaving&&(ji(L,h),qn(L,p),Sh(b)||Eh(L,i,m,Z))}),Yi(b,[L,Z])},onEnterCancelled(L){k(L,!1,void 0,!0),Yi(E,[L])},onAppearCancelled(L){k(L,!0,void 0,!0),Yi(D,[L])},onLeaveCancelled(L){x(L),Yi(I,[L])}})}function Ay(e){if(e==null)return null;if(pe(e))return[Za(e.enter),Za(e.leave)];{const t=Za(e);return[t,t]}}function Za(e){return TM(e)}function qn(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e[Ls]||(e[Ls]=new Set)).add(t)}function ji(e,t){t.split(/\s+/).forEach(i=>i&&e.classList.remove(i));const n=e[Ls];n&&(n.delete(t),n.size||(e[Ls]=void 0))}function yh(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wy=0;function Eh(e,t,n,i){const r=e._endId=++wy,s=()=>{r===e._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Cy(e,t);if(!o)return i();const u=o+"end";let c=0;const h=()=>{e.removeEventListener(u,f),s()},f=p=>{p.target===e&&++c>=l&&h()};setTimeout(()=>{c<l&&h()},a+1),e.addEventListener(u,f)}function Cy(e,t){const n=window.getComputedStyle(e),i=v=>(n[v]||"").split(", "),r=i(`${mi}Delay`),s=i(`${mi}Duration`),o=Th(r,s),a=i(`${rs}Delay`),l=i(`${rs}Duration`),u=Th(a,l);let c=null,h=0,f=0;t===mi?o>0&&(c=mi,h=o,f=s.length):t===rs?u>0&&(c=rs,h=u,f=l.length):(h=Math.max(o,u),c=h>0?o>u?mi:rs:null,f=c?c===mi?s.length:l.length:0);const p=c===mi&&/\b(transform|all)(,|$)/.test(i(`${mi}Property`).toString());return{type:c,timeout:h,propCount:f,hasTransform:p}}function Th(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,i)=>bh(n)+bh(e[i])))}function bh(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ah(){return document.body.offsetHeight}function Ry(e,t,n){const i=e[Ls];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const wh=Symbol("_vod"),Py=Symbol("_vsh"),Ly=Symbol(""),Dy=/(^|;)\s*display\s*:/;function Iy(e,t,n){const i=e.style,r=ye(n);let s=!1;if(n&&!r){if(t)if(ye(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ro(i,a,"")}else for(const o in t)n[o]==null&&Ro(i,o,"");for(const o in n)o==="display"&&(s=!0),Ro(i,o,n[o])}else if(r){if(t!==n){const o=i[Ly];o&&(n+=";"+o),i.cssText=n,s=Dy.test(n)}}else t&&e.removeAttribute("style");wh in e&&(e[wh]=s?i.display:"",e[Py]&&(i.display="none"))}const Ch=/\s*!important$/;function Ro(e,t,n){if(Vt(n))n.forEach(i=>Ro(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=Uy(e,t);Ch.test(n)?e.setProperty(Oi(i),n.replace(Ch,""),"important"):e[i]=n}}const Rh=["Webkit","Moz","ms"],Ja={};function Uy(e,t){const n=Ja[t];if(n)return n;let i=Di(t);if(i!=="filter"&&i in e)return Ja[t]=i;i=Cf(i);for(let r=0;r<Rh.length;r++){const s=Rh[r]+i;if(s in e)return Ja[t]=s}return t}const Ph="http://www.w3.org/1999/xlink";function Lh(e,t,n,i,r,s=PM(t)){i&&t.startsWith("xlink:")?n==null?e.removeAttributeNS(Ph,t.slice(6,t.length)):e.setAttributeNS(Ph,t,n):n==null||s&&!Rf(n)?e.removeAttribute(t):e.setAttribute(t,s?"":Fi(n)?String(n):n)}function Dh(e,t,n,i,r){if(t==="innerHTML"||t==="textContent"){n!=null&&(e[t]=t==="innerHTML"?Ud(n):n);return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?e.getAttribute("value")||"":e.value,l=n==null?e.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in e))&&(e.value=l),n==null&&e.removeAttribute(t),e._value=n;return}let o=!1;if(n===""||n==null){const a=typeof e[t];a==="boolean"?n=Rf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{e[t]=n}catch{}o&&e.removeAttribute(r||t)}function wr(e,t,n,i){e.addEventListener(t,n,i)}function Ny(e,t,n,i){e.removeEventListener(t,n,i)}const Ih=Symbol("_vei");function Fy(e,t,n,i,r=null){const s=e[Ih]||(e[Ih]={}),o=s[t];if(i&&o)o.value=i;else{const[a,l]=Oy(t);if(i){const u=s[t]=Hy(i,r);wr(e,a,u,l)}else o&&(Ny(e,a,o,l),s[t]=void 0)}}const Uh=/(?:Once|Passive|Capture)$/;function Oy(e){let t;if(Uh.test(e)){t={};let i;for(;i=e.match(Uh);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Oi(e.slice(2)),t]}let Qa=0;const By=Promise.resolve(),zy=()=>Qa||(By.then(()=>Qa=0),Qa=Date.now());function Hy(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Cn(Vy(i,n.value),t,5,[i])};return n.value=e,n.attached=zy(),n}function Vy(e,t){if(Vt(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const Nh=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gy=(e,t,n,i,r,s)=>{const o=r==="svg";t==="class"?Ry(e,i,o):t==="style"?Iy(e,n,i):Ko(t)?Tc(t)||Fy(e,t,n,i,s):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ky(e,t,i,o))?(Dh(e,t,i),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Lh(e,t,i,o,s,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!ye(i))?Dh(e,Di(t),i,s,t):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),Lh(e,t,i,o))};function ky(e,t,n,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in e&&Nh(t)&&qt(n));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Nh(t)&&ye(n)?!1:t in e}const Fh=e=>{const t=e.props["onUpdate:modelValue"]||!1;return Vt(t)?n=>bo(t,n):t};function Wy(e){e.target.composing=!0}function Oh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const tl=Symbol("_assign"),Xy={created(e,{modifiers:{lazy:t,trim:n,number:i}},r){e[tl]=Fh(r);const s=i||r.props&&r.props.type==="number";wr(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),s&&(a=Yl(a)),e[tl](a)}),n&&wr(e,"change",()=>{e.value=e.value.trim()}),t||(wr(e,"compositionstart",Wy),wr(e,"compositionend",Oh),wr(e,"change",Oh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(e[tl]=Fh(o),e.composing)return;const a=(s||e.type==="number")&&!/^0\d/.test(e.value)?Yl(e.value):e.value,l=t??"";a!==l&&(document.activeElement===e&&e.type!=="range"&&(i&&t===n||r&&e.value.trim()===l)||(e.value=l))}},qy={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yy=(e,t)=>{const n=e._withKeys||(e._withKeys={}),i=t.join(".");return n[i]||(n[i]=r=>{if(!("key"in r))return;const s=Oi(r.key);if(t.some(o=>o===s||qy[o]===s))return e(r)})},jy=Re({patchProp:Gy},Sy);let Bh;function Ky(){return Bh||(Bh=WS(jy))}const $y=(...e)=>{const t=Ky().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=Jy(i);if(!r)return;const s=t._component;!qt(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,Zy(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t};function Zy(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function Jy(e){return ye(e)?document.querySelector(e):e}var Qy=!1;/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let Fd;const Bs=e=>Fd=e,Od=Symbol();function rc(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var xs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(xs||(xs={}));function tE(){const e=If(!0),t=e.run(()=>As({}));let n=[],i=[];const r=Nc({install(s){Bs(r),r._a=s,s.provide(Od,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!Qy?i.push(s):n.push(s),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const Bd=()=>{};function zh(e,t,n,i=Bd){e.push(t);const r=()=>{const s=e.indexOf(t);s>-1&&(e.splice(s,1),i())};return!n&&Uf()&&LM(r),r}function Tr(e,...t){e.slice().forEach(n=>{n(...t)})}const eE=e=>e(),Hh=Symbol(),el=Symbol();function sc(e,t){e instanceof Map&&t instanceof Map?t.forEach((n,i)=>e.set(i,n)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const i=t[n],r=e[n];rc(r)&&rc(i)&&e.hasOwnProperty(n)&&!Se(i)&&!Ci(i)?e[n]=sc(r,i):e[n]=i}return e}const nE=Symbol();function iE(e){return!rc(e)||!e.hasOwnProperty(nE)}const{assign:gi}=Object;function rE(e){return!!(Se(e)&&e.effect)}function sE(e,t,n,i){const{state:r,actions:s,getters:o}=t,a=n.state.value[e];let l;function u(){a||(n.state.value[e]=r?r():{});const c=eS(n.state.value[e]);return gi(c,s,Object.keys(o||{}).reduce((h,f)=>(h[f]=Nc(Ti(()=>{Bs(n);const p=n._s.get(e);return o[f].call(p,p)})),h),{}))}return l=zd(e,u,t,n,i,!0),l}function zd(e,t,n={},i,r,s){let o;const a=gi({actions:{}},n),l={deep:!0};let u,c,h=[],f=[],p;const v=i.state.value[e];!s&&!v&&(i.state.value[e]={}),As({});let S;function m(D){let k;u=c=!1,typeof D=="function"?(D(i.state.value[e]),k={type:xs.patchFunction,storeId:e,events:p}):(sc(i.state.value[e],D),k={type:xs.patchObject,payload:D,storeId:e,events:p});const x=S=Symbol();Jf().then(()=>{S===x&&(u=!0)}),c=!0,Tr(h,k,i.state.value[e])}const d=s?function(){const{state:k}=n,x=k?k():{};this.$patch(y=>{gi(y,x)})}:Bd;function A(){o.stop(),h=[],f=[],i._s.delete(e)}const E=(D,k="")=>{if(Hh in D)return D[el]=k,D;const x=function(){Bs(i);const y=Array.from(arguments),L=[],W=[];function Z(K){L.push(K)}function it(K){W.push(K)}Tr(f,{args:y,name:x[el],store:I,after:Z,onError:it});let H;try{H=D.apply(this&&this.$id===e?this:I,y)}catch(K){throw Tr(W,K),K}return H instanceof Promise?H.then(K=>(Tr(L,K),K)).catch(K=>(Tr(W,K),Promise.reject(K))):(Tr(L,H),H)};return x[Hh]=!0,x[el]=k,x},b={_p:i,$id:e,$onAction:zh.bind(null,f),$patch:m,$reset:d,$subscribe(D,k={}){const x=zh(h,D,k.detached,()=>y()),y=o.run(()=>wo(()=>i.state.value[e],L=>{(k.flush==="sync"?c:u)&&D({storeId:e,type:xs.direct,events:p},L)},gi({},l,k)));return x},$dispose:A},I=ta(b);i._s.set(e,I);const C=(i._a&&i._a.runWithContext||eE)(()=>i._e.run(()=>(o=If()).run(()=>t({action:E}))));for(const D in C){const k=C[D];if(Se(k)&&!rE(k)||Ci(k))s||(v&&iE(k)&&(Se(k)?k.value=v[D]:sc(k,v[D])),i.state.value[e][D]=k);else if(typeof k=="function"){const x=E(k,D);C[D]=x,a.actions[D]=k}}return gi(I,C),gi(ie(I),C),Object.defineProperty(I,"$state",{get:()=>i.state.value[e],set:D=>{m(k=>{gi(k,D)})}}),i._p.forEach(D=>{gi(I,o.run(()=>D({store:I,app:i._a,pinia:i,options:a})))}),v&&s&&n.hydrate&&n.hydrate(I.$state,v),u=!0,c=!0,I}/*! #__NO_SIDE_EFFECTS__ */function oE(e,t,n){let i,r;const s=typeof t=="function";i=e,r=s?n:t;function o(a,l){const u=OS();return a=a||(u?_s(Od,null):null),a&&Bs(a),a=Fd,a._s.has(i)||(s?zd(i,t,r,a):sE(i,r,a)),a._s.get(i)}return o.$id=i,o}const Hd=oE("satellite",{state:()=>({names:[],selectedInfo:null,toast:{show:!1,type:"info",message:""},searchTerm:"",searchNonce:0}),getters:{isSelected:e=>!!e.selectedInfo},actions:{setNames(e){this.names=Array.isArray(e)?e:[]},setSelected(e){this.selectedInfo=e||null},clearSelected(){this.selectedInfo=null},updateSelected(e){this.selectedInfo&&(this.selectedInfo={...this.selectedInfo,...e})},showToast(e={},{duration:t=2500}={}){this._toastTimer&&(clearTimeout(this._toastTimer),this._toastTimer=null),this.toast={show:!0,type:e.type||"info",message:e.message||""},this._toastTimer=setTimeout(()=>{this.toast.show=!1,this._toastTimer=null},t)},requestSearch(e){this.searchTerm=e||"",this.searchNonce++}}});class aE{constructor(t,n,i){$r(this,"selectedSatellite");this.scene=t,this.camera=n,this.renderer=i,this.store=Hd(),this.raycaster=new Ex,this.raycaster.params.Points={threshold:24},this.mouse=new Kt,this.renderer.domElement.addEventListener("mousedown",r=>this.onMouseDown(r),!1),this.renderer.domElement.addEventListener("mouseup",r=>this.onMouseUp(r),!1),this.objects=[],this.satelliteInstancing=null,this.initiateObjects(),this.store.$subscribe((r,s)=>{r.events.key==="searchNonce"&&this.searchSatellite(s.searchTerm)})}async initiateObjects(){const t=await as.fetchTLEData(),n=Math.floor(t.length/3);this.satelliteInstancing=new gM(n,{size:100,opacity:.9,sizeAttenuation:!0}),this.scene.add(this.satelliteInstancing.mesh);for(let i=0;i<t.length;i+=3){const r=t[i].trim(),s=t[i+1],o=t[i+2],a=new dM(r,s,o);this.objects.push(a)}this.store.setNames(this.objects.map(i=>i.name)),console.log("number of objects loaded: "+this.objects.length)}updatePositions(t){this.objects.forEach((n,i)=>{n.updatePosition(t),this.satelliteInstancing.updateInstance(i,n.position,n.color),this.selectedSatellite&&n===this.selectedSatellite&&this.store.updateSelected(n.getSatelliteInfo())}),this.satelliteInstancing.commit()}getSatelliteUnderMouse(t){this.mouse.x=t.clientX/window.innerWidth*2-1,this.mouse.y=-(t.clientY/window.innerHeight)*2+1,this.raycaster.setFromCamera(this.mouse,this.camera);const n=this.raycaster.intersectObject(this.satelliteInstancing.mesh,!1);if(n.length>0){console.log(n);const i=n[0].index;return this.objects[i]}return null}onMouseDown(t){this.mouseDownSatellite=this.getSatelliteUnderMouse(t)}onMouseUp(t){const n=this.getSatelliteUnderMouse(t);this.mouseDownSatellite&&n&&n.name===this.mouseDownSatellite.name&&this.selectSatellite(n),this.mouseDownSatellite=null}selectSatellite(t){if(this.selectedSatellite&&(this.selectedSatellite.untoggle(this.scene),t.name===this.selectedSatellite.name)){this.selectedSatellite=null,this.store.setSelected(null);return}this.selectedSatellite=t,this.selectedSatellite.toggle(this.scene),this.store.setSelected(t.getSatelliteInfo())}searchSatellite(t){const n=this.objects.find(i=>i.name.toLowerCase().includes(t.toLowerCase()));n?this.selectSatellite(n):this.store.showToast({type:"error",message:"Object not found"})}}class lE{constructor(t){this.container=t,this.scene=new gx,this.camera=new pn(60,window.innerWidth/window.innerHeight,.1,1e6),this.renderer=new mx({antialias:!0}),this.stats=new Cx,this.stats.showPanel(0),document.body.appendChild(this.stats.dom),this.renderer.setSize(window.innerWidth,window.innerHeight),this.container.appendChild(this.renderer.domElement),this.camera.position.z=2e4,this.controls=new Px(this.camera,this.renderer.domElement),this.controls.enableDamping=!0,this.controls.dampingFactor=.03,this.controls.screenSpacePanning=!1,this.controls.minDistance=7e3,this.controls.maxDistance=1e5,this.initialDate=new Date,this.earth=new fM(this.scene),this.satelliteManager=new aE(this.scene,this.camera,this.renderer),this.lastUpdateTime=Date.now(),window.addEventListener("resize",()=>this.onWindowResize(),!1)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}animate(){requestAnimationFrame(()=>this.animate());const n=Date.now()-this.lastUpdateTime;if(n>=100){const i=new Date;this.satelliteManager.updatePositions(i),this.earth.update(n),this.lastUpdateTime=i}this.controls.update(),this.renderer.render(this.scene,this.camera),this.stats.update()}}const Wc=(e,t)=>{const n=e.__vccOpts||e;for(const[i,r]of t)n[i]=r;return n},cE={class:"search-container"},uE={class:"search-bar"},hE=["onClick"],fE={__name:"SearchBar",props:{satellites:{type:Array,default:()=>[]}},emits:["search"],setup(e,{emit:t}){const n=e,i=t,r=As(""),s=As([]),o=Ti(()=>{const f=r.value.trim().toLowerCase();return f?n.satellites.filter(p=>p.toLowerCase().includes(f)).slice(0,1e3):[]});function a(){s.value=o.value}function l(){r.value.trim()&&(i("search",r.value.trim()),s.value=[])}function u(f){r.value=f,s.value=[],i("search",f)}function c(f){if(!f||!f.target)return;const p=document.querySelector(".search-bar");p&&!p.contains(f.target)&&(s.value=[])}let h=null;return Oc(()=>{h=f=>c(f),document.addEventListener("click",h)}),Bc(()=>{h&&document.removeEventListener("click",h)}),(f,p)=>(Ri(),Or("div",cE,[Xt("div",uE,[p[1]||(p[1]=Xt("i",{"data-lucide":"search"},null,-1)),hS(Xt("input",{type:"text",placeholder:"Search satellites...","onUpdate:modelValue":p[0]||(p[0]=v=>r.value=v),onKeyup:Yy(l,["enter"]),onInput:a},null,544),[[Xy,r.value]]),Xt("button",{onClick:l},"Search"),Xt("div",{class:jr(["suggestions-container",{visible:s.value.length>0}])},[(Ri(!0),Or(mn,null,wS(s.value,v=>(Ri(),Or("div",{class:"suggestion-item",key:v,onClick:S=>u(v)},Nn(v),9,hE))),128))],2)])]))}},dE=Wc(fE,[["__scopeId","data-v-c7168aa7"]]),pE={class:"info-header"},mE={class:"header-content"},gE={id:"satellite-name"},_E={class:"info-content"},vE={class:"info-grid"},xE={class:"info-column"},ME={class:"info-item"},SE={class:"value-container"},yE={id:"satellite-inclination"},EE={class:"info-item"},TE={class:"value-container"},bE={id:"satellite-period"},AE={class:"info-column"},wE={class:"info-item"},CE={class:"value-container"},RE={id:"satellite-altitude"},PE={class:"info-item"},LE={class:"value-container"},DE={id:"satellite-velocity"},IE={class:"coordinates-section"},UE={class:"info-item"},NE={class:"value-container"},FE={id:"satellite-latitude"},OE={class:"info-item"},BE={class:"value-container"},zE={id:"satellite-longitude"},HE={__name:"SatelliteInfo",props:{info:{type:Object,default:()=>({name:"Satellite Name",inclination:"0",period:"0",altitude:"0",velocity:"0",latitude:"0",longitude:"0"})},visible:{type:Boolean,default:!1}},setup(e){const t=As(!1);return(n,i)=>(Ri(),Or("div",{id:"satellite-info",class:jr(["info-panel",{visible:e.visible,expanded:t.value}])},[Xt("div",pE,[Xt("div",mE,[i[1]||(i[1]=Xt("i",{"data-lucide":"satellite"},null,-1)),Xt("h2",gE,Nn(e.info.name),1)]),Xt("button",{id:"expand-button",onClick:i[0]||(i[0]=r=>t.value=!t.value)},i[2]||(i[2]=[Xt("i",{"data-lucide":"x"},null,-1)]))]),Xt("div",_E,[Xt("div",vE,[Xt("div",xE,[Xt("div",ME,[i[4]||(i[4]=Xt("label",null,"Inclination",-1)),Xt("div",SE,[Xt("span",yE,Nn(e.info.inclination),1),i[3]||(i[3]=Zi("° ",-1))])]),Xt("div",EE,[i[6]||(i[6]=Xt("label",null,"Period",-1)),Xt("div",TE,[Xt("span",bE,Nn(e.info.period),1),i[5]||(i[5]=Zi(" min ",-1))])])]),Xt("div",AE,[Xt("div",wE,[i[8]||(i[8]=Xt("label",null,"Altitude",-1)),Xt("div",CE,[Xt("span",RE,Nn(e.info.altitude),1),i[7]||(i[7]=Zi(" km ",-1))])]),Xt("div",PE,[i[10]||(i[10]=Xt("label",null,"Velocity",-1)),Xt("div",LE,[Xt("span",DE,Nn(e.info.velocity),1),i[9]||(i[9]=Zi(" km/s ",-1))])])])]),Xt("div",IE,[Xt("div",UE,[i[12]||(i[12]=Xt("label",null,"Latitude",-1)),Xt("div",NE,[Xt("span",FE,Nn(e.info.latitude),1),i[11]||(i[11]=Zi("° ",-1))])]),Xt("div",OE,[i[14]||(i[14]=Xt("label",null,"Longitude",-1)),Xt("div",BE,[Xt("span",zE,Nn(e.info.longitude),1),i[13]||(i[13]=Zi("° ",-1))])])])])],2))}},VE=Wc(HE,[["__scopeId","data-v-1cb1eb50"]]),GE={__name:"Toast",props:{show:{type:Boolean,default:!1},type:{type:String,default:"info"},message:{type:String,default:""}},setup(e){const t=e,n=Ti(()=>`toast toast-${t.type}`);return(i,r)=>(Ri(),Pd(Ty,{name:"toast-fade",appear:""},{default:id(()=>[e.show?(Ri(),Or("div",{key:0,class:jr(n.value)},Nn(e.message),3)):ay("",!0)]),_:1}))}},kE=Wc(GE,[["__scopeId","data-v-ec203b86"]]),WE={__name:"App",setup(e){const t=Hd(),n=Ti(()=>t.names),i=Ti(()=>t.selectedInfo||{name:"Satellite Name",inclination:"0",period:"0",altitude:"0",velocity:"0",latitude:"0",longitude:"0"}),r=Ti(()=>!!t.selectedInfo),s=Ti(()=>t.toast);function o(a){t.requestSearch(a)}return(a,l)=>(Ri(),Or(mn,null,[ze(Ao(dE),{satellites:n.value,onSearch:o},null,8,["satellites"]),ze(Ao(VE),{info:i.value,visible:r.value},null,8,["info","visible"]),ze(Ao(kE),{show:s.value.show,type:s.value.type,message:s.value.message},null,8,["show","type","message"])],64))}},Vd=$y(WE),Gd=tE();Vd.use(Gd);Bs(Gd);const XE=document.getElementById("scene-container"),qE=new lE(XE);qE.animate();Vd.mount("#app");
