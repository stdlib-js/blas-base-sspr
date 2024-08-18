<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sspr

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Perform the symmetric rank 1 operation `A = α*x*x^T + A`.

<section class = "usage">

## Usage

```javascript
import sspr from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sspr@esm/index.mjs';
```

#### sspr( order, uplo, N, α, x, sx, AP )

Performs the symmetric rank 1 operation `A = α*x*x^T + A` where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

sspr( 'row-major', 'upper', 3, 1.0, x, 1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

The function has the following parameters:

-   **order**: storage layout.
-   **uplo**: specifies whether the upper or lower triangular part of the symmetric matrix `A` is supplied.
-   **N**: number of elements along each dimension of `A`.
-   **α**: scalar constant.
-   **x**: input [`Float32Array`][mdn-float32array].
-   **sx**: index increment for `x`.
-   **AP**: packed form of a symmetric matrix `A` stored as a [`Float32Array`][mdn-float32array].

The stride parameters determine how elements in the input arrays are accessed at runtime. For example, to iterate over the elements of `x` in reverse order,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

sspr( 'row-major', 'upper', 3, 1.0, x, -1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

<!-- eslint-disable stdlib/capitalized-comments -->

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

// Initial arrays...
var x0 = new Float32Array( [ 0.0, 3.0, 2.0, 1.0 ] );
var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );

// Create offset views...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

sspr( 'row-major', 'upper', 3, 1.0, x1, -1, AP );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

#### sspr.ndarray( uplo, N, α, x, sx, ox, AP, sap, oap )

Performs the symmetric rank 1 operation `A = α*x*x^T + A`, using alternative indexing semantics and where `α` is a scalar, `x` is an `N` element vector, and `A` is an `N` by `N` symmetric matrix supplied in packed form.

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var AP = new Float32Array( [ 1.0, 1.0, 2.0, 1.0, 2.0, 3.0 ] );
var x = new Float32Array( [ 1.0, 2.0, 3.0 ] );

sspr.ndarray( 'row-major', 'lower', 3, 1.0, x, 1, 0, AP, 1, 0 );
// AP => <Float32Array>[ 2.0, 3.0, 6.0, 4.0, 8.0, 12.0 ]
```

The function has the following additional parameters:

-   **ox**: starting index for `x`.
-   **sap**: `AP` stride length.
-   **oap**: starting index for `AP`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example,

```javascript
import Float32Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float32@esm/index.mjs';

var AP = new Float32Array( [ 1.0, 2.0, 3.0, 1.0, 2.0, 1.0 ] );
var x = new Float32Array( [ 3.0, 2.0, 1.0 ] );

sspr.ndarray( 'row-major', 'upper', 3, 1.0, x, -1, 2, AP, 1, 0 );
// AP => <Float32Array>[ 2.0, 4.0, 6.0, 5.0, 8.0, 10.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   `sspr()` corresponds to the [BLAS][blas] level 2 function [`sspr`][blas-sspr].

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-discrete-uniform@esm/index.mjs';
import sspr from 'https://cdn.jsdelivr.net/gh/stdlib-js/blas-base-sspr@esm/index.mjs';

var opts = {
    'dtype': 'float32'
};

var N = 5;

var AP = discreteUniform( N * ( N + 1 ) / 2, -10.0, 10.0, opts );
var x = discreteUniform( N, -10.0, 10.0, opts );

sspr( 'column-major', 'upper', N, 1.0, x, 1, AP );
console.log( AP );

sspr.ndarray( 'column-major', 'upper', N, 1.0, x, 1, 0, AP, 1, 0 );
console.log( AP );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-base-sspr.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-base-sspr

[test-image]: https://github.com/stdlib-js/blas-base-sspr/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-base-sspr/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-base-sspr/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-base-sspr?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-base-sspr.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-base-sspr/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-base-sspr/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-base-sspr/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-base-sspr/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-base-sspr/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-base-sspr/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-base-sspr/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-base-sspr/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-base-sspr/main/LICENSE

[blas]: http://www.netlib.org/blas

[blas-sspr]: https://www.netlib.org/lapack/explore-html/d5/df9/group__hpr_ga7cacbe603f23f8b0aca186fba51ad490.html#ga7cacbe603f23f8b0aca186fba51ad490

[mdn-float32array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Float32Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
