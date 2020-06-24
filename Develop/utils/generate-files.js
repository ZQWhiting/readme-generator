const fs = require('fs');

// function to write README file
function writeFile(markdown) {
    return new Promise((resolve, reject) => {
        fs.writeFile('../dist/README.md', markdown, err => {
            if (err) {
                reject(err);
                return;
            };

            resolve({
                ok: true,
                message: 'ReadMe created!'
            });
        });
    });
}

// function to copy LICENSE and Contributor Covenant READMEs.
const copyLicense = (license) => {
    license = license
        .replace(' ', '-')
        .replace(' ', '-')
        .replace('/', '-')
    return new Promise((resolve, reject) => {
        fs.copyFile(`./src/licenses/${license}.txt`, '../dist/LICENSE.md', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'License copied!'
            });
        })
    });
};

const copyContributorCovenant = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/contributor-covenant.txt', '../dist/contributor-covenant.txt', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'Contributor Covenant copied! '
            });
        })
    });
};

module.exports = { writeFile, copyLicense, copyContributorCovenant }