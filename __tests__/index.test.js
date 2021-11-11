/* eslint-disable jest/no-commented-out-tests */
import { test, expect, describe } from '@jest/globals';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFixture = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8').trim();

const stylishResult = readFixture('expected_stylish.txt');
const plainResult = readFixture('expected_plain.txt');
const jsonResult = readFixture('expected_json.txt');

const formats = [
  'json',
  'yaml',
  'yml',
];

describe.each(formats)('Test genDiff', (format) => {
  const path1 = getFixturePath(`file1.${format}`);
  const path2 = getFixturePath(`file2.${format}`);

  test(`${format}`, () => {
    expect(genDiff(path1, path2)).toEqual(stylishResult);
    expect(genDiff(path1, path2, 'stylish')).toEqual(stylishResult);
    expect(genDiff(path1, path2, 'plain')).toEqual(plainResult);
    expect(genDiff(path1, path2, 'json')).toEqual(jsonResult);
    expect(() => { JSON.parse(genDiff(path1, path2, 'json')); }).not.toThrow();
  });
});

/*
const outputFormats = ['stylish', 'plain', 'json'];
const extensions = [
  ['json', 'json'],
  ['yml', 'yml'],
  ['yaml', 'yaml'],
];
*/
// или: вариант "многосторонней" проверки
/*
const extensions = [
  ['json', 'json'],
  ['yml', 'yml'],
  ['yaml', 'yaml'],

  ['json', 'yml'],
  ['json', 'yaml'],

  ['yml', 'json'],
  ['yaml', 'json'],
];

describe('genDiff', () => {
  outputFormats.forEach((outputFormat) => {
    describe(`${outputFormat} format`, () => {
      extensions.forEach(([fileExt1, fileExt2]) => {
        const result = readFixture(`expected_${outputFormat}.txt`);

        test(`Should return correct diff between *.${fileExt1} *.${fileExt2} files`, () => {
          const filePath1 = getFixturePath(`file1.${fileExt1}`);
          const filePath2 = getFixturePath(`file2.${fileExt2}`);

          expect(genDiff(filePath1, filePath2, outputFormat)).toBe(result);
        });
      });
    });
  });
});

*/