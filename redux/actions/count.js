import {
	increaseCountAction,
	decreaseCountAction,
} from './actionTypes';

function increaseCount() {
	return dispatch => {
		dispatch( increaseCountAction({}) );
    }
}

function decreaseCount() {
	return dispatch => {
		dispatch( decreaseCountAction({}) );
	}
}

module.exports = {
	increaseCount,
	decreaseCount,
}