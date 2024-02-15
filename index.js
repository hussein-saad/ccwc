const fs = require('fs');

const commander = require('commander');

const program = new commander.Command();

program
  .name('ccwc')
  .description(
    'count the number of bytes, words, lines, and characters in a file'
  )
  .version('1.0.0');

program
  .arguments('[file] [option]')
  .option('-c', 'print the byte counts')
  .option('-l', 'print the number of lines')
  .option('-w', 'print the number of words')
  .option('-m', 'print the number of characters')
  .action((file, options) => {
    const readStream = file ? fs.createReadStream(file, 'utf8') : process.stdin;
    let data = '';

    readStream.on('data', (chunk) => {
      data += chunk;
    });

    readStream.on('end', () => {
      const options = program.opts();

      const numOfBytes = Buffer.byteLength(data, 'utf8');
      const numOfLines = data.match(/\n/g).length;
      const numOfWords = data.match(/\S+/g).length;
      const numOfChars = data.length;

      const fileName = file ? file : '';

      if (options.c) {
        console.log(numOfBytes, fileName);
      } else if (options.l) {
        console.log(numOfLines, fileName);
      } else if (options.w) {
        console.log(numOfWords, fileName);
      } else if (options.m) {
        console.log(numOfChars, fileName);
      } else if (Object.keys(options).length === 0) {
        console.log(numOfLines, numOfWords, numOfChars, fileName);
      }
    });
  });

program.parse(process.argv);
