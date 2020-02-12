const selectRocketPayloadsCount = rocket => rocket
    .second_stage
    .payloads
    .length;

module.exports = { selectRocketPayloadsCount };