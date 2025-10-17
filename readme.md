# jwt-turbo-decode

A performant JWT decoder specializing in turbo-encoded tokens, featuring built-in deobfuscation. Works identically in Node.js and browser environments while keeping full API compatibility with conventional JWT decoding solutions.

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