#!/usr/bin/env node

const ora = require('ora');
const spinner = ora({text: ''});
const cli = require('./utils/cli.js');
const init = require('./utils/init.js');
const to = require('await-to-js').default;
const theEnd = require('./utils/theEnd.js');
const handleError = require('cli-handle-error');
const {green} = require('chalk');
const sym = require('log-symbols');

// CLI.
const [input] = cli.input;
const option = cli.flags.option;

(async () => {
	init();
	console.log(
		`${sym.info} INPUT: ${input ? input : `You didn't provide any input.`}`
	);
	console.log(
		`${sym.info} INPUT: ${
			option ? option : `You didn't provide any option.`
		}`
	);
	console.log();
	theEnd();
})();
