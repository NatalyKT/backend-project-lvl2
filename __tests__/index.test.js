import path, { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { readFileSync } from 'fs';
import { genDiff } from '../src/index.js';
import { getDataFromJson, getDataFromYml } from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => resolve(__dirname, '..', '__fixtures__', filename);

const extensions = ['json', , 'yaml', 'yml'];
const formats = ['stylish'];

/*
test('genDiffForJson', () => {
  const data1 = getDataFromJson(getFixturePath('file1.json'));
  const data2 = getDataFromJson(getFixturePath('file2.json'));
  expect(genDiff(data1, data2)).toEqual(expectedValue());
});

test('genDiffForYml', () => {
  const data1 = getDataFromYml(getFixturePath('file1.yml'));
  const data2 = getDataFromYml(getFixturePath('file2.yml'));
  expect(genDiff(data1, data2)).toEqual(expectedValue());
});
*/
let expectedResult;

beforeAll(() => {
  expectedResult = {
    stylish: readFileSync(getFixturePath('expectedNestedJson.txt'), 'utf-8'),
    /*
    plain: readFileSync(getFixturePath('expectedPlainFormat.txt'), 'utf-8'),
    json: readFileSync(getFixturePath('expectedJsonFormat.txt'), 'utf-8'),
    */
  };
});

describe.each(extensions)('gendiff %s file', (extension) => {
  test.each(formats)('%s format result', (format) => {
    const path1 = getFixturePath(`file1.${extension}`);
    const path2 = getFixturePath(`file2.${extension}`);
    expect(genDiff(path1, path2, format)).toEqual(expectedResult[format]);
  });
});