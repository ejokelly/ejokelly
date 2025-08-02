const fs = require('fs');

// Read the template
const template = fs.readFileSync('template.md', 'utf8');

// Find all {{#each}} blocks
const eachRegex = /\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g;
let match;
let count = 0;
while ((match = eachRegex.exec(template)) !== null) {
  count++;
  console.log(`Match ${count}:`);
  console.log('Path:', match[1]);
  console.log('Content preview:', match[2].substring(0, 100) + '...');
  console.log('---');
}

console.log(`Total matches: ${count}`);