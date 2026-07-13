"use strict";var c=function(i,e){return function(){try{return e||i((e={exports:{}}).exports,e),e.exports}catch(r){throw (e=0, r)}};};var b=c(function(A,x){
var M=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),_=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),y=require('@stdlib/number-float64-base-to-float32/dist');function C(i,e,r,s,u,a,l,t,n,E){var m,f,v,g,w,o,p,h;if(h=l,p=E,_(i)&&e==="upper"||M(i)&&e==="lower"){for(v=h,o=0;o<r;o++){if(u[v]!==0)for(m=y(s*u[v]),f=h,g=p,w=0;w<=o;w++)t[g]+=y(u[f]*m),f+=a,g+=n;v+=a,p+=(o+1)*n}return t}for(v=h,o=0;o<r;o++){if(u[v]!==0)for(m=y(s*u[v]),f=v,g=p,w=0;w<r-o;w++)t[g]+=y(u[f]*m),f+=a,g+=n;v+=a,p+=(r-o)*n}return t}x.exports=C
});var S=c(function(P,R){
var O=require('@stdlib/blas-base-assert-is-layout/dist'),B=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),G=b();function H(i,e,r,s,u,a,l){var t,n;if(!O(i))throw new TypeError(d('1z9Fx',i));if(n=B(e),n===null)throw new TypeError(d('1z9Fy',e));if(r<0)throw new RangeError(d('1z9Fz',r));if(a===0)throw new RangeError(d('1z9GB',a));return r===0||s===0?l:(t=D(r,a),G(i,n,r,s,u,a,t,l,1,0))}R.exports=H
});var j=c(function(rr,T){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/blas-base-matrix-triangle-resolve-str/dist'),q=require('@stdlib/error-tools-fmtprodmsg/dist'),K=b();function Q(i,e,r,s,u,a,l,t,n,E){var m;if(!I(i))throw new TypeError(q('1z9Fx',i));if(m=J(e),m===null)throw new TypeError(q('1z9Fy',e));if(r<0)throw new RangeError(q('1z9Fz',r));if(a===0)throw new RangeError(q('1z9GB',a));if(n===0)throw new RangeError(q('1z9GS',n));return r===0||s===0?t:K(i,m,r,s,u,a,l,t,n,E)}T.exports=Q
});var F=c(function(er,k){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=S(),W=j();U(z,"ndarray",W);k.exports=z
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),X=F(),V,L=Z(Y(__dirname,"./native.js"));$(L)?V=X:V=L;module.exports=V;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
