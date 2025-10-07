import fs from 'fs';

console.log('Current directory:', process.cwd());
console.log('dist exists:', fs.existsSync('dist'));
console.log('dist contents:', fs.readdirSync('dist'));