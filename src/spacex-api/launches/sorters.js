import { selectRocketPayloadsCount } from './selectors';

const sort = (a, b) => {
    if (a > b) {
        return -1;
    }
    if (a < b) {
        return 1;
    }
    return 0;
};

const sortMissionsByInverseChronologicalOrder = missions =>
    missions
        .sort(({ launch_date_unix: dateA }, { launch_date_unix: dateB }) =>
            sort(dateA, dateB));

const sortMissionsByPayloadsCount = missions => missions.sort((missionA, missionB) => {
    const countA = selectRocketPayloadsCount(missionA.rocket);
    const countB = selectRocketPayloadsCount(missionB.rocket);

    return sort(countA, countB);
});

module.exports = {
    sortMissionsByInverseChronologicalOrder,
    sortMissionsByPayloadsCount
};