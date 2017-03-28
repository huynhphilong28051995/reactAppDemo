import { browserHistory } from 'react-router';

function redirect(path) {
    browserHistory.push(path);
}

module.exports = {
    redirect,
}