import fs from 'fs';
import path from 'path';
import _ from 'lodash';
import format from '../formatters/index.js';
import parse from './parsers.js';

const buildTree = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const allSortedKeys = _.sortBy(keys);

  const result = allSortedKeys.map((key) => {
    if (!_.has(data1, key) && _.has(data2, key)) {
      return {
        key,
        type: 'added',
        value: data2[key],
      };
    }

    if (_.has(data1, key) && !_.has(data2, key)) {
      return {
        key,
        type: 'removed',
        value: data1[key],
      };
    }

    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return {
        key,
        type: 'object',
        children: buildTree(data1[key], data2[key]),
      };
    }

    if (!_.isEqual(data1[key], data2[key])) {
      return {
        key,
        type: 'changed',
        value1: data1[key],
        value2: data2[key],
      };
    }

    return {
      key,
      type: 'unchanged',
      value: data2[key],
    };
  });

  return result;
};

const genDiff = (data1, data2) => ({
  type: 'root',
  children: buildTree(data1, data2),
});

const getFullPath = (filePath) => path.resolve(process.cwd(), filePath);

const showDiff = (filePath1, filePath2, outputFormat = 'stylish') => {
  const dataOfFile1 = fs.readFileSync(getFullPath(filePath1), 'utf-8');
  const dataOfFile2 = fs.readFileSync(getFullPath(filePath2), 'utf-8');

  const extensionOfFile1 = path.extname(getFullPath(filePath1)).replace('.', '');
  const extensionOfFile2 = path.extname(getFullPath(filePath2)).replace('.', '');

  const parsedData1 = parse(dataOfFile1, extensionOfFile1);
  const parsedData2 = parse(dataOfFile2, extensionOfFile2);

  const getDiff = genDiff(parsedData1, parsedData2);
  const diff = format(getDiff, outputFormat);

  return diff;

  // или:
  // return format(genDiff(parsedData1, parsedData2), outputFormat);
};

export default showDiff;
