const fs = require('fs');
const path = require('path');
const unsupportedConfig = path.join(process.cwd(), 'next.config.ts');

if (fs.existsSync(unsupportedConfig)) {
  fs.rmSync(unsupportedConfig, { force: true });
}
