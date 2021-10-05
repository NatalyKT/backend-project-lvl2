import fs from 'fs';
import _ from 'lodash';

const getDataFromJson = (filepath) => JSON.parse(fs.readFileSync(filepath, 'utf-8'));

const genDiff = (data1, data2) => {
  const keys1 = Object.keys(data1);
  const keys2 = Object.keys(data2);
  const matchedKeys = _.union(keys1.concat(keys2).sort());

  const diffBetweenKeys = matchedKeys.map((key) => {
    if (!keys2.includes(key)) {
      return `- ${key}: ${data1[key]}`;
    } if (keys1.includes(key) && keys2.includes(key)) {
      return (data2[key] === data1[key]) ? `  ${key}: ${data1[key]}`
        : [`- ${key}: ${data1[key]}`, `+ ${key}: ${data2[key]}`];
    } return `+ ${key}: ${data2[key]}`;
  })
    .flat()
    .map((item) => `\n${item}`)
    .join('');
    // console.log(`{${diffBetweenKeys}\n}`); - пока оставляю для самопроверки
  return `{${diffBetweenKeys}\n}`;
};

const showDiff = (filepath1, filepath2) => {
  const data1 = getDataFromJson(filepath1);
  const data2 = getDataFromJson(filepath2);
  return genDiff(data1, data2);
};

export { genDiff };

export default showDiff;