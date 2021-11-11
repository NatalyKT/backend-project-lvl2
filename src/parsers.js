// import _ from 'lodash';
import yaml from 'js-yaml';

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
};

const parser = (data, format) => {
  const parse = parsers[format];
  return parse(data);
};

export default parser;

// вариант с lodash:
/*
const parser = (data, format) => {
  if (!_.has(parsers, format)) {
    throw new Error(`${format} is unknown data format.`);
  }
  const parse = parsers[format];
  return parse(data);
};
export default parser;
*/
