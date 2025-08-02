#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Simple template engine to replace {{variables}} and handle basic loops
function processTemplate(template, data) {
  let result = template;

  // Replace simple variables like {{personalInfo.name}}
  result = result.replace(/\{\{([^{}#\/]+?)\}\}/g, (match, path) => {
    const value = getNestedValue(data, path.trim());
    return value !== undefined ? value : match;
  });

  // Handle {{#each}} loops
  result = result.replace(/\{\{#each\s+([^}]+)\}\}([\s\S]*?)\{\{\/each\}\}/g, (match, arrayPath, template) => {
    const array = getNestedValue(data, arrayPath.trim());
    if (!Array.isArray(array)) return '';
    
    return array.map((item, index) => {
      let itemTemplate = template;
      // Replace {{this}} with the current item (for primitive arrays)
      itemTemplate = itemTemplate.replace(/\{\{this\}\}/g, item);
      
      // Replace {{@last}} with boolean check
      itemTemplate = itemTemplate.replace(/\{\{#unless\s+@last\}\}([\s\S]*?)\{\{\/unless\}\}/g, (match, content) => {
        return index < array.length - 1 ? content : '';
      });
      
      // Replace object properties like {{name}}, {{years}}
      if (typeof item === 'object') {
        itemTemplate = itemTemplate.replace(/\{\{([^{}#\/]+?)\}\}/g, (match, prop) => {
          const value = item[prop.trim()];
          return value !== undefined ? value : match;
        });
      }
      
      return itemTemplate;
    }).join('');
  });

  // Handle {{#if}} conditionals
  result = result.replace(/\{\{#if\s+([^}]+)\}\}([\s\S]*?)\{\{\/if\}\}/g, (match, condition, content) => {
    const value = getNestedValue(data, condition.trim());
    return value ? content : '';
  });

  return result;
}

// Helper function to get nested object values using dot notation
function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => {
    return current && current[key] !== undefined ? current[key] : undefined;
  }, obj);
}

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
    const template = fs.readFileSync(templatePath, 'utf8');

    // Process the template
    const readme = processTemplate(template, data);

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

module.exports = { generateReadme, processTemplate };