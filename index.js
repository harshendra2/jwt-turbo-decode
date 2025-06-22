function deobfuscateToken(obfuscatedToken) {
  return obfuscatedToken.split('').map(char => {
    if (/[a-z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(219 - code);
    } else if (/[A-Z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(155 - code);
    }
    return char;
  }).join('');
}

function jwtTurboDecode(token, options = {}) {
  if (typeof token !== 'string') {
    throw new Error('Invalid token specified: must be a string');
  }

  try {
    const deobfuscatedToken = deobfuscateToken(token);
    const parts = deobfuscatedToken.split('.');
    
    if (parts.length !== 3) {
      throw new Error('Invalid token format');
    }

    const payload = parts[1];
    const decoded = Buffer.from(payload, 'base64').toString('utf-8');
    
    return JSON.parse(decoded);
  } catch (err) {
    if (options.quiet) {
      return null;
    }
    throw new Error(`Invalid token specified: ${err.message}`);
  }
}


if (typeof module !== 'undefined' && module.exports) {
  module.exports = jwtTurboDecode;
  module.exports.deobfuscateToken = deobfuscateToken;
  module.exports.default = jwtTurboDecode;
}


if (typeof exports !== 'undefined') {
  exports.default = jwtTurboDecode;
  exports.jwtTurboDecode = jwtTurboDecode;
  exports.deobfuscateToken = deobfuscateToken;
}