mutual-information-dimension
==================================

Mutual Information Dimension (MID) for measuring statistical dependence between two random variables.
WebAssembly port of the native [MID](https://github.com/BorgwardtLab/MID) package


Summary
-------

An estimation algorithm for MID (Mutual Information Dimension), which measures statistical dependence between two random variables.
This algorithm has the following advantages:

* **Nonlinear dependences** (and also linear dependences) can be measured,
* **Scalable**; the average-case time complexity is O(nlogn), where *n* is the number of data points, and
* **Parameter-free**

Please see the following article for detailed information and refer it in your published research:

* Sugiyama, M., Borgwardt, K. M.: **Measuring Statistical Dependence via the Mutual Information Dimension**,
	*Proceedings of the 23rd International Joint Conference on Artificial Intelligence (IJCAI 2013)*, to appear.


Installation
------------
```
npm install mutual-information-dimension -S
```

Usage
-----

```javascript
const mid = require('mutual-information-dimension')
```

To calculate MID between two variables `x`, `y`, type:

```javascript
const m = mid(x, y)
```
	
Information
-----------

* Author of the native MID package: Mahito Sugiyama
* Affiliation: Machine Learning & Computational Biology Research Group, MPIs Tübingen, Germany
* Mail: mahito.sugiyama@tuebingen.mpg.de

* Author of the WebAssembly port: Anton Zemlyansky
* Mail: anton.zemlyansky@gmail.com
