#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');

// Main function
function generateReadme() {
  try {
    // Read the data file
    const dataPath = path.join(__dirname, 'data.json');
    const templatePath = path.join(__dirname, 'template.md');
    const outputPath = path.join(__dirname, 'README.md');

    if (!fs.existsSync(dataPath)) {
      console.error('Error: data.json not found');
      process.exit(1);
    }

    if (!fs.existsSync(templatePath)) {
      console.error('Error: template.md not found');
      process.exit(1);
    }

    const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    const templateContent = fs.readFileSync(templatePath, 'utf8');

    // Compile the template
    const template = Handlebars.compile(templateContent);
    
    // Process the template
    const readme = template(data);

    // Write the output
    fs.writeFileSync(outputPath, readme);
    console.log('README.md generated successfully!');

  } catch (error) {
    console.error('Error generating README:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  generateReadme();
}

module.exports = { generateReadme };