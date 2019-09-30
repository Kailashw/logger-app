const chalk = require('chalk');

class Log {

    info({ msg = "", data = "" }) {
        console.log(`"${chalk.green(msg)}", "${data}" was posted on "${Date()}" with status ${chalk.green('✓')}`)
    }

    error({ msg = "", data = "" }) {
        console.log(`"${chalk.red(msg)}", "${data}" was posted on "${Date()}" with status ${chalk.red('X')}`)
    }

    warning({ msg = "", data = "" }) {
        console.log(`"${chalk.yellow(msg)}", "${data}" was posted on "${Date()}" with status ${chalk.yellow('-')}`)
    }

    trace({ msg = "", data = "" }) {
        console.log(`"${chalk.orange(msg)}", "${data}" was posted on "${Date()}" with status ${chalk.orange('--')}`)
    }

    debug({ msg = "", data = "" }) {
        console.log(`"${chalk.grey(msg)}", "${data}" was posted on "${Date()}" with status ${chalk.grey('---')}`)
    }

}

const logger = new Log()

module.exports = logger;