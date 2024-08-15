"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var E=c(function(X,V){
var y=require('@stdlib/number-float64-base-to-float32/dist');function M(i,r,e,s,n,a,m,t,v,x){var q,g,o,f,l,u,w,h;if(h=m,w=x,i==="column-major"&&r==="upper"||i==="row-major"&&r==="lower"){for(o=h,u=0;u<e;u++){if(n[o]!==0)for(q=y(s*n[o]),g=h,f=w,l=0;l<=u;l++)t[f]+=y(n[g]*q),g+=a,f+=v;o+=a,w+=(u+1)*v}return t}for(o=h,u=0;u<e;u++){if(n[o]!==0)for(q=y(s*n[o]),g=o,f=w,l=0;l<e-u;l++)t[f]+=y(n[g]*q),g+=a,f+=v;o+=a,w+=(e-u)*v}return t}V.exports=M
});var R=c(function(N,T){
var _=require('@stdlib/blas-base-assert-is-layout/dist'),O=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),B=require('@stdlib/strided-base-stride2offset/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),C=E();function D(i,r,e,s,n,a,m){var t;if(!_(i))throw new TypeError(d('nullFx',i));if(!O(r))throw new TypeError(d('nullFy',r));if(e<0)throw new RangeError(d('nullFz',e));if(a===0)throw new RangeError(d('nullGB',a));return e===0||s===0?m:(t=B(e,a),C(i,r,e,s,n,a,t,m,1,0))}T.exports=D
});var S=c(function(A,j){
var G=require('@stdlib/blas-base-assert-is-layout/dist'),H=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),I=E();function J(i,r,e,s,n,a,m,t,v,x){if(!G(i))throw new TypeError(p('nullFx',i));if(!H(r))throw new TypeError(p('nullFy',r));if(e<0)throw new RangeError(p('nullFz',e));if(a===0)throw new RangeError(p('nullGB',a));if(v===0)throw new RangeError(p('nullGS',v));return e===0||s===0?t:I(i,r,e,s,n,a,m,t,v,x)}j.exports=J
});var F=c(function(P,k){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),z=R(),Q=S();K(z,"ndarray",Q);k.exports=z
});var U=require("path").join,W=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=F(),b,L=W(U(__dirname,"./native.js"));Y(L)?b=Z:b=L;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
