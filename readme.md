# jwt-turbo-decode

A lightweight JWT decoder with built-in deobfuscation, compatible with Node.js and browsers. Decodes obfuscated JWT tokens while maintaining the same simple API as popular JWT decoding libraries.

## Features

- 🔓 Built-in token deobfuscation
- 🚀 Fast and lightweight
- 🛡️ Secure token parsing
- 🔄 Dual support for CommonJS and ES Modules
- 🌐 Works in Node.js and browsers

## Installation

```bash
npm install jwt-turbo-decode
# or
yarn add jwt-turbo-decode


Usage

   import jwtTurboDecode from 'jwt-turbo-decode';

      const token = 'your.obfuscated.token.here';
         const decoded = jwtTurboDecode(token);
         console.log(decoded);