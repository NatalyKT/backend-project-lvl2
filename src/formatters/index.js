// import _ from 'lodash';
import makeStylish from './stylish.js';
import makePlain from './plain.js';

const formatters = {
  stylish: makeStylish,
  plain: makePlain,
  json: JSON.stringify,
};

const outputFormat = (data, type) => {
  const format = formatters[type];
  if (!format) {
    throw new Error(`This "${type}" does not exist`);
  }
  return format(data);
};
export default outputFormat;

// вариант с библиотекой lodash:
/*
const outputFormat = (data, format) => {
  if (!_.has(formatters, format)) {
    throw new Error(`This "${format}" does not exist`);
  }
  return formatters[format](data);
};
*/
