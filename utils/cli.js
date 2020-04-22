const meow = require('meow');
const chalk = require('chalk');
const green = chalk.green;
const yellow = chalk.yellow;
const cyan = chalk.cyan;
const dim = chalk.dim;

module.exports = meow(
	`
	Usage
	  ${green(`nodecli`)} ${cyan(`<command>`)} ${yellow(`[--option]`)}

	Commands
	  ${cyan(`command`)}         Description

	Options
	  ${yellow(`--option`)}, ${yellow(`-o`)}         Description

	Examples
	  ${green(`nodecli`)} ${cyan(`command`)}
	  ${green(`nodecli`)} ${yellow(`--option`)}

	❯ You can also run command + option at once:
	  ${green(`nodecli`)} ${cyan(`command`)} ${yellow(`-o`)}
`,
	{
		booleanDefault: undefined,
		hardRejection: false,
		inferType: false,
		flags: {
			option: {
				type: 'boolean',
				default: false,
				alias: 'o'
			}
		}
	}
);
