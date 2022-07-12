import PropTypes from 'prop-types';
import userFile from '../mock/user/12.json';
import activityFile from '../mock/user/12/activity.json'
import averageSessionFile from '../mock/user/12/average-sessions.json'
import performanceFile from '../mock/user/12/performance.json'


export let user;
export let activity;
export let averageSession;
export let performance;

/**
 * GetMockData - Get mock Data
 */
function GetMockData() {
        user = userFile.data;
        activity = activityFile.data;
        averageSession = averageSessionFile.data;
        performance = performanceFile.data;
}

export default GetMockData;