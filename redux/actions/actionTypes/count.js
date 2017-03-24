import { createAction } from 'redux-actions';

const INCREASE_COUNT = 'INCREASE_COUNT';
const DECREASE_COUNT = 'DECREASE_COUNT';

module.exports = {
    INCREASE_COUNT: INCREASE_COUNT,
    DECREASE_COUNT: DECREASE_COUNT,
    increaseCountAction : createAction(INCREASE_COUNT),
    decreaseCountAction : createAction(DECREASE_COUNT),
};