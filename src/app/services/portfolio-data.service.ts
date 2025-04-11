import { Injectable } from '@angular/core';

// Define interfaces for structured data (optional but recommended)
export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  duration: string;
  responsibilities: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies?: string[];
  link?: string; // Link to GitHub repo, live demo, or detailed description
  imageUrl?: string; // Optional image
}


@Injectable({
  providedIn: 'root' // Service available application-wide
})
export class PortfolioDataService {

  constructor() { }

  // --- QA SKILLS ---
  getSkills(): Skill[] {
    return [
      {
        category: 'Testing Types',
        items: ['Manual Testing', 'Automated Testing', 'API Testing (REST/SOAP)', 'Performance Testing', 'Security Testing (Basics)', 'Usability Testing', 'Regression Testing', 'Integration Testing', 'End-to-End Testing', 'Mobile App Testing (iOS/Android)']
      },
      {
        category: 'Methodologies & Processes',
        items: ['Agile (Scrum/Kanban)', 'Waterfall', 'STLC (Software Testing Life Cycle)', 'Bug Tracking & Reporting', 'Test Planning & Strategy', 'Risk-Based Testing']
      },
      {
        category: 'Test Automation Tools',
        items: ['Selenium WebDriver (Java/Python/C#)', 'Cypress', 'Playwright', 'Appium', 'Postman', 'RestAssured', 'JMeter', 'K6', 'WebDriverIO']
      },
      {
        category: 'Test Management & CI/CD',
        items: ['Jira (with Zephyr/Xray)', 'TestRail', 'Azure DevOps (ADO)', 'Git / GitHub / GitLab', 'Jenkins', 'GitLab CI', 'GitHub Actions']
      },
      {
        category: 'Programming & Databases',
        items: ['JavaScript / TypeScript', 'Python', 'Java', 'SQL (Basic Queries)', 'HTML / CSS']
      },
      {
        category: 'Operating Systems & Tools',
        items: ['Windows', 'macOS', 'Linux', 'Browser Developer Tools', 'Virtual Machines']
      }
    ];
  }

  // --- WORK EXPERIENCE ---
  getExperience(): Experience[] {
    return [
      {
        role: 'Senior QA Engineer',
        company: 'Tech Solutions Inc.',
        duration: 'Jan 2021 - Present',
        responsibilities: [
          'Led QA efforts for the flagship product, ensuring high-quality releases in an Agile environment.',
          'Designed, developed, and maintained automated test suites using Cypress and TypeScript, reducing regression time by 40%.',
          'Performed comprehensive API testing using Postman for RESTful services.',
          'Created detailed test plans, test cases, and bug reports using Jira and TestRail.',
          'Mentored junior QA engineers and contributed to improving overall QA processes.',
          'Collaborated closely with developers and product managers to understand requirements and identify potential issues early.'
        ]
      },
      {
        role: 'QA Analyst',
        company: 'Web Innovators LLC',
        duration: 'Jun 2018 - Dec 2020',
        responsibilities: [
          'Executed manual test cases for web applications across different browsers and devices.',
          'Identified, documented, and tracked defects using Jira.',
          'Assisted in developing automated scripts using Selenium WebDriver with Java.',
          'Participated in requirement analysis and sprint planning meetings.',
          'Performed regression testing before each release.'
        ]
      }
      // Add more experience entries
    ];
  }

  // --- PROJECTS ---
  getProjects(): Project[] {
    return [
      {
        title: 'Cypress Automation Framework',
        description: 'Developed a scalable end-to-end test automation framework using Cypress and TypeScript for testing a complex e-commerce platform. Included features like page object model, data-driven testing, and integration with CI/CD pipeline (GitHub Actions).',
        technologies: ['Cypress', 'TypeScript', 'JavaScript', 'Node.js', 'GitHub Actions', 'Git'],
        link: 'https://github.com/your-username/cypress-framework-example' // Replace with your actual link
      },
      {
        title: 'API Test Suite for User Management',
        description: 'Created a comprehensive API test suite using Postman for validating the CRUD operations of a user management microservice. Included positive/negative tests, schema validation, and environment configuration.',
        technologies: ['Postman', 'REST API', 'JSON', 'Newman (for CI integration)'],
        // link: 'Link to Postman collection or description'
      },
      {
        title: 'Sample Test Plan Document',
        description: 'Authored a detailed test plan for a hypothetical mobile banking application feature, outlining scope, strategy, resources, schedule, and deliverables.',
        technologies: ['Test Planning', 'Risk Analysis', 'Documentation'],
        // link: 'Link to a PDF or Google Doc (ensure it's anonymized)'
      }
      // Add more projects
    ];
  }
}