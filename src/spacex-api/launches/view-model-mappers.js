import { selectRocketPayloadsCount } from './selectors';

const mapMissionsToViewModel = missions =>
    missions.map(({ flight_number, mission_name, rocket }) => ({
        flight_number,
        mission_name,
        payloads_count: selectRocketPayloadsCount(rocket)
    }));

module.exports = {
    mapMissionsToViewModel
};