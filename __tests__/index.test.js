import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { genDiff } from '../src/index.js';
import { getDataFromJson, getDataFromYml } from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedValue = () => `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

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
