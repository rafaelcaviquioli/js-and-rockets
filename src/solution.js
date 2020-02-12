import { convertDataObjectToJson } from './convert-data-object-to-json';
import { putStringInPreHtmlTag } from './put-string-in-pre-html-tag';
import { getPastLaunches } from './spacex-api/launches/api';
import { filterMissionsOf2018WithNASAPayload } from './spacex-api/launches/filters';

const renderData = (data) => {
  const jsonString = convertDataObjectToJson(data);
  putStringInPreHtmlTag(jsonString);
};

const prepareData = (pastLaunches) => {
  const missions = filterMissionsOf2018WithNASAPayload(pastLaunches);

  return missions;
};

const applicationStart = () => {
  getPastLaunches().then(pastLaunches => {

    const missionsOf2018WithNASAPayload = prepareData(pastLaunches);

    renderData(missionsOf2018WithNASAPayload);
  });

};

module.exports = {
  prepareData,
  renderData,
  applicationStart,
};