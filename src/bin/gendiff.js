#!/usr/bin/env node
import commander from 'commander';
import compareFiles from '../index.js';

const program = new commander.Command();

program
  .version('1.0.0', '-V, --version', 'output the version number')
  .description('Compares two configuration files and shows a difference.')
  .helpOption('-h, --help', 'output usage information')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')

  .action((filepath1, filepath2) => {
    const showDiff = compareFiles(filepath1, filepath2, program.opts().format);
    console.log(showDiff);
  });

program.parse(process.argv);
