import path from 'path';
import _ from 'lodash';
import { getDataFromJson, getDataFromYml } from '../src/parsers.js';

/*
const buildNode = (data1, data2) => {
  const keys = _.union(_.keys(data1), _.keys(data2));
  const sortedKeys = _.sortBy(keys);

  const ast = sortedKeys.map((key) => {
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
        children: buildNode(data1[key], data2[key]),
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

  return ast;
};

const genDiff = (data1, data2) => ({
  type: 'root',
  children: buildNode(data1, data2),
});
*/

// export default genDiff;

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const matchedKeys = _.union(keys1.concat(keys2).sort());

  const diffBetweenKeys = matchedKeys
    .map((key) => {
      if (!keys2.includes(key)) {
        return `- ${key}: ${data1[key]}`;
      }
      if (keys1.includes(key) && keys2.includes(key)) {
        return data2[key] === data1[key]
          ? `  ${key}: ${data1[key]}`
          : [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
      }
      return `+ ${key}: ${data2[key]}`;
    })
    .flat()
    .map((item) => `\n${item}`)
    .join('');
  // console.log(`{${diffBetweenKeys}\n}`); - пока оставляю для самопроверки
  return `{${diffBetweenKeys}\n}`;
};




// Вариант 1 (Шаг 4)
/*
const showDiff = (filepath1, filepath2) => {
  const data1 = getDataFromJson(filepath1);
  const data2 = getDataFromJson(filepath2);
  return genDiff(data1, data2);
};
*/

// Вариант 2 (Шаг 5)
const showDiff = (filepath1, filepath2) => {
  const data1 = path.extname(filepath1) === '.json' ? getDataFromJson(filepath1) : getDataFromYaml(filepath1);
  const data2 = path.extname(filepath2) === '.yaml' ? getDataFromYaml(filepath2) : getDataFromJson(filepath2);
  return genDiff(data1, data2);
};

/*
const buildTreeDiff = (data1, data2) => ({
  type: 'root',
  children: genDiff(data1, data2),
});

export { buildTreeDiff };
*/
export { genDiff };
export default showDiff;
