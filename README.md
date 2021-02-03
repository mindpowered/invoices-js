
invoices
========
Create, edit, and track invoices as part of your app

![Build Status](https://mindpowered.dev/assets/images/github-badges/build-passing.svg)

Contents
========

* [Source Code and Documentation](#source-code-and-documentation)
* [About](#about)
* [Requirements](#requirements)
* [Installation](#installation)
* [Usage](#usage)
* [Support](#support)
* [Licensing](#licensing)

# Source Code and Documentation
- Source Code: [https://github.com/mindpowered/invoices-js](https://github.com/mindpowered/invoices-js)
- Documentation: [https://mindpowered.github.io/invoices-js](https://mindpowered.github.io/invoices-js)

# About
An invoice lists the quantities and costs of the products or services provided by a seller to a buyer. The top of the invoice usually includes the:
- contact information of the seller
- contact information of the buyer
- date of the invoice

In the middle of the invoice is a list of products or services. A line item refers to a line from this list. The line item describes the product or service, quantity, rate, price, and taxes.

At the bottom of the invoice is a summary which usually includes:
- subtotal (before tax)
- total (with tax) amount
- payment terms.

This package aims to provide the tools to create and edit invoices. This is useful for sending by the seller or receiving by the buyer.

# Requirements
- ES6
- npm


Third-party dependencies may have additional requirements.

# Installation
## npm

You can retrieve the invoices package using npm https://www.npmjs.com/. After initializing your packages.json file in your project’s directory with `npm init`, you can install the invoices package with
```
npm i @mindpowered/invoices --save
```
hint: the `--save` option will add the newly installed dependency in your packages.json file.

## package.json

You can also add the package directly to your packages.json file.

...


# Usage
```javascript

let mpcinv = require('@mindpowered/invoices');
const {Invoices} = mpcinv;

let inv = new Invoices();
inv.Create("354", "2153", "2021-02-01", "2021-03-01", "Thanks for the business!");

```


# Support
We are here to support using this package. If it doesn't do what you're looking for, isn't working, or you just need help, please [Contact us][contact].

There is also a public [Issue Tracker][bugs] available for this package.

# Licensing
This package is released under the MIT License.



[bugs]: https://github.com/mindpowered/invoices-js/issues
[contact]: https://mindpowered.dev/support/?ref=invoices-js/
[docs]: https://mindpowered.github.io/invoices-js/
[licensing]: https://mindpowered.dev/?ref=invoices-js
[purchase]: https://mindpowered.dev/purchase/
