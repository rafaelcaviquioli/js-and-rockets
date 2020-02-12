
const filterMissionsByYear = year => mission =>
    parseInt(mission.launch_year) === parseInt(year);

const filterMissionsByCustomerPayload = customerName => mission => {
    const { payloads } = mission.rocket.second_stage;

    for (let pCount = 0; pCount < payloads.length; pCount++) {
        const { customers } = payloads[pCount];

        for (let cCount = 0; cCount < customers.length; cCount++) {
            const customer = customers[cCount];
            if (customer.indexOf(customerName) > -1) {
                return true;
            }
        }
    }

    return false;
}

const filterMissionsOf2018WithNASAPayload = missions => missions
    .filter(filterMissionsByYear(2018))
    .filter(filterMissionsByCustomerPayload("NASA"));

module.exports = {
    filterMissionsOf2018WithNASAPayload
};