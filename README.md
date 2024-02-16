# CCWC 

CCWC is a command-line utility that counts the number of bytes, words, lines, and characters in a file or from standard input.

## Table of Contents

- [CCWC](#ccwc)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Acknowledgements](#acknowledgements)

## Installation

First, clone the repository:

```bash
git clone https://github.com/hussein-saad/ccwc.git
```
Then, navigate to the project directory and install the dependencies:

```bash
cd ccwc
npm install
```

## Usage

You can use CCWC in two ways:

1. Provide a file name as an argument:

```bash
node index.js yourfile.txt -option
```

2. Pipe input from another command

```bash
cat yourfile.txt | node index.js -option
```

CCWC also accepts the following options:
CCWC also accepts the following options:

| Option | Description                 |
|--------|-----------------------------|
| `-c`   | Print the byte counts       |
| `-l`   | Print the number of lines   |
| `-w`   | Print the number of words   |
| `-m`   | Print the number of characters |

If no options are provided, CCWC will print the number of lines, words, and characters.

## Acknowledgements

This project was created as part of a coding challenge from [Coding Challenges](https://codingchallenges.fyi/). Special thanks to them for providing the challenge that inspired this project.

