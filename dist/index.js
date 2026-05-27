"use strict";var c=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var E=c(function(A,V){
var L=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),_=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),y=require('@stdlib/number-float64-base-to-float32/dist');function C(i,r,e,s,n,a,m,t,v,x){var q,g,o,f,l,u,w,h;if(h=m,w=x,_(i)&&r==="upper"||L(i)&&r==="lower"){for(o=h,u=0;u<e;u++){if(n[o]!==0)for(q=y(s*n[o]),g=h,f=w,l=0;l<=u;l++)t[f]+=y(n[g]*q),g+=a,f+=v;o+=a,w+=(u+1)*v}return t}for(o=h,u=0;u<e;u++){if(n[o]!==0)for(q=y(s*n[o]),g=o,f=w,l=0;l<e-u;l++)t[f]+=y(n[g]*q),g+=a,f+=v;o+=a,w+=(e-u)*v}return t}V.exports=C
});var T=c(function(P,R){
var O=require('@stdlib/blas-base-assert-is-layout/dist'),B=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),D=require('@stdlib/strided-base-stride2offset/dist'),d=require('@stdlib/error-tools-fmtprodmsg/dist'),G=E();function H(i,r,e,s,n,a,m){var t;if(!O(i))throw new TypeError(d('1z9Fx',i));if(!B(r))throw new TypeError(d('1z9Fy',r));if(e<0)throw new RangeError(d('1z9Fz',e));if(a===0)throw new RangeError(d('1z9GB',a));return e===0||s===0?m:(t=D(e,a),G(i,r,e,s,n,a,t,m,1,0))}R.exports=H
});var M=c(function(rr,j){
var I=require('@stdlib/blas-base-assert-is-layout/dist'),J=require('@stdlib/blas-base-assert-is-matrix-triangle/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),K=E();function Q(i,r,e,s,n,a,m,t,v,x){if(!I(i))throw new TypeError(p('1z9Fx',i));if(!J(r))throw new TypeError(p('1z9Fy',r));if(e<0)throw new RangeError(p('1z9Fz',e));if(a===0)throw new RangeError(p('1z9GB',a));if(v===0)throw new RangeError(p('1z9GS',v));return e===0||s===0?t:K(i,r,e,s,n,a,m,t,v,x)}j.exports=Q
});var k=c(function(er,z){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),S=T(),W=M();U(S,"ndarray",W);z.exports=S
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),X=k(),b,F=Z(Y(__dirname,"./native.js"));$(F)?b=X:b=F;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
