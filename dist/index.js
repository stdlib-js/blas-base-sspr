/** @license Apache-2.0 */

'use strict';

/**
* BLAS level 2 routine to perform the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.
*
* @module @stdlib/blas-base-sspr
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sspr = require( '@stdlib/blas-base-sspr' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* sspr( 'row-major', 'upper', 3, 1.0, x, 1, AP );
* // AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*
* @example
* var Float32Array = require( '@stdlib/array-float32' );
* var sspr = require( '@stdlib/blas-base-sspr' );
*
* var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] ); // => [ [ 1.0, 2.0, 3.0 ], [ 0.0, 1.0, 2.0 ], [ 0.0, 0.0, 1.0 ] ]
* var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );
*
* sspr.ndarray( 'row-major', 'upper', 3, 1.0, x, 1, 0, AP, 1, 0 );
* // AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
*/

// MODULES //

var join = require( 'path' ).join;
var tryRequire = require( '@stdlib/utils-try-require/dist' );
var isError = require( '@stdlib/assert-is-error/dist' );
var main = require( './main.js' );


// MAIN //

var sspr;
var tmp = tryRequire( join( __dirname, './native.js' ) );
if ( isError( tmp ) ) {
	sspr = main;
} else {
	sspr = tmp;
}


// EXPORTS //

module.exports = sspr;

// exports: { "ndarray": "sspr.ndarray" }
