const path = require('path');

module.exports = {
    env: {
        PUBLIC_URL: "",
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
}