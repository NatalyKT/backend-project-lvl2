import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

/* Было:
const getDataFromJson = (filepath) => JSON.parse(fs.readFileSync(filepath, 'utf-8'));
Добавлен поиск относит. путей
*/
const getDataFromJson = (filepath) => JSON.parse(fs.readFileSync(path.resolve(process.cwd(), filepath), 'utf-8'));

// eslint: Function yaml.safeLoad is removed in js-yaml 4.
// Use yaml.load instead, which is now safe by default.
const getDataFromYml = (filepath) => yaml.load(fs.readFileSync(filepath, 'utf-8'));
const getDataFromYaml = (filepath) => yaml.load(fs.readFileSync(filepath, 'utf-8'));

export { getDataFromJson };
export { getDataFromYml };
export { getDataFromYaml };

// Или доработать, или убрать
/*
const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const getFormat = (filepath) => path.extname(filepath).substr(1);
const readFile = (filepath) => fs.readFileSync(filepath, 'utf-8');
const parsers = {json: JSON.parse,};
const parse = (data, format) => parsers[format](data);

const getDataFromJson = (fileName) => {
const filepath = getFullPath(fileName);
return parse(readFile(filepath), getFormat(filepath));
};
*/
