# {{{personalInfo.name}}}

> **Note:** I recently lost my account to a shady hotspot and I ended up just creating a new one.

## Featured Projects

🚀 **[Job Hunter](https://github.com/ejokelly/job-hunter)** - An example of how I approach building modern applications with React, Next.js, and AI integration. Built in under 8 hours using my development methods.

🤖 **[Whytilt.com](https://whytilt.com)** - My Vision/Action agent that automates jobs, tasks, and tests using AI-powered computer vision and action models.

## Project Screenshots

<table>
  <tr>
    <td width="25%"><a href="screenshots/1.png"><img src="screenshots/1.png" width="100%" alt="Screenshot 1"></a></td>
    <td width="25%"><a href="screenshots/2.png"><img src="screenshots/2.png" width="100%" alt="Screenshot 2"></a></td>
    <td width="25%"><a href="screenshots/3.png"><img src="screenshots/3.png" width="100%" alt="Screenshot 3"></a></td>
    <td width="25%"><a href="screenshots/4.png"><img src="screenshots/4.png" width="100%" alt="Screenshot 4"></a></td>
  </tr>
  <tr>
    <td width="25%"><a href="screenshots/5.png"><img src="screenshots/5.png" width="100%" alt="Screenshot 5"></a></td>
    <td width="25%"><a href="screenshots/6.png"><img src="screenshots/6.png" width="100%" alt="Screenshot 6"></a></td>
    <td width="25%"><a href="screenshots/7.png"><img src="screenshots/7.png" width="100%" alt="Screenshot 7"></a></td>
    <td width="25%"><a href="screenshots/8.png"><img src="screenshots/8.png" width="100%" alt="Screenshot 8"></a></td>
  </tr>
  <tr>
    <td width="25%"><a href="screenshots/9.png"><img src="screenshots/9.png" width="100%" alt="Screenshot 9"></a></td>
    <td width="25%"><a href="screenshots/10.png"><img src="screenshots/10.png" width="100%" alt="Screenshot 10"></a></td>
    <td width="25%"><a href="screenshots/11.png"><img src="screenshots/11.png" width="100%" alt="Screenshot 11"></a></td>
    <td width="25%"><a href="screenshots/12.png"><img src="screenshots/12.png" width="100%" alt="Screenshot 12"></a></td>
  </tr>
</table>

---

**{{{personalInfo.title}}}**  
📧 {{{personalInfo.email}}} | 📞 {{personalInfo.phone}} | 📍 {{personalInfo.location}}  
🔗 [GitHub]({{personalInfo.github}})

## Summary

{{{summary}}}

## Technical Skills

**Languages:** {{#each skills.languages}}{{name}} ({{years}}){{#unless @last}}, {{/unless}}{{/each}}

**Frontend:** {{#each skills.frontend}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**Backend:** {{#each skills.backend}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**AI/ML:** {{#each skills.aiMl}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**AWS:** {{#each skills.awsServices}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**DevOps:** {{#each skills.cloudDevops}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**Databases:** {{#each skills.databases}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**Testing:** {{#each skills.testing}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

**Specialties:** {{#each skills.specialties}}{{name}}{{#unless @last}}, {{/unless}}{{/each}}

## Professional Experience

{{#each experience}}
### {{role}}
**{{company}}** | {{location}} | {{startDate}} - {{endDate}}

{{#each achievements}}
• {{this}}  
{{/each}}


{{/each}}

## Education

{{#each education}}
### {{degree}}
**{{institution}}** | {{location}}{{#if graduationDate}} | {{graduationDate}}{{/if}}

{{#if coursework}}
**Relevant Coursework:** {{#each coursework}}{{this}}{{#unless @last}}, {{/unless}}{{/each}}
{{/if}}

{{#if capstone}}
**Capstone Project:** {{capstone}}
{{/if}}

{{/each}}

---
*Generated from data.json*