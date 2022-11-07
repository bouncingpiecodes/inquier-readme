const licenses = {
  Apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  GNU: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  Mozilla:
    "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)",
};
function renderLicenseBadge(license) {}

function renderLicenseLink(license) {}

function renderLicenseSection(license) {}

function generateMarkdown(data) {
  return `# ${data.title} 
  ${data.description}
  ${licenses[data.license]}

  # Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)

  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # License
  This project is covered under the ${data.license} license.

  # Contributing
  ${data.contributing}

  # Tests
  ${data.tests}

  # Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
