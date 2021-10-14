import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { genDiff, getDataFromJson } from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getPathToFile = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const expectedValue = () => `{
- follow: false
  host: hexlet.io
- proxy: 123.234.53.22
- timeout: 50
+ timeout: 20
+ verbose: true
}`;

test('genDiffForJson', () => {
  const data1 = getDataFromJson(getPathToFile('file1.json'));
  const data2 = getDataFromJson(getPathToFile('file2.json'));
  expect(genDiff(data1, data2)).toEqual(expectedValue());
});
