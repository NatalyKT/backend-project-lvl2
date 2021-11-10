#!/usr/bin/env node
// import program from 'commander';
import { Command } from 'commander';
import process from 'process';
import genDiff from '../index.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2, program.opts().format));
    // или:
  /*
  const diff = genDiff(filePath1, filePath2, program.format);
  console.log(diff);
  */
  });

program.parse(process.argv);
