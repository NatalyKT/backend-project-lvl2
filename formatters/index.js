import _ from 'lodash';
import stylishFormat from './stylish.js';
import plainFormat from './plain.js';

const formatters = {
    stylish: stylishFormat, 
    plain: plainFormat, 
    json: JSON.stringify,
};

export default (data, format) => {
  if (!_.has(formatters, format)) {
    throw new Error(`This "${format}" does not exist`);
  }
  return formatters[format](data);
};


// еще один вариант
/*
export default (data, type) => {
  const format = formatters[type];

  if (!format) {
    throw new Error(`This "${type}" does not exist`);
  }

  return format(data);
};
*/