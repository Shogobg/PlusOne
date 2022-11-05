import * as fs from 'fs';
import readline from 'readline';
import { Router } from "express";

const wordList = new Map();

const rl = readline.createInterface({
  input: fs.createReadStream( __dirname + '/dictionary.txt', {
    flags: 'r'
  }),
  crlfDelay: Infinity
})

rl.on('line', (line) => {
  wordList.set(line.toLowerCase(), line);
})

const router = Router();

const checkWords = router.post('/', function (req, res, next) {
  const badWords = [];
  
  req.body.split(' ').forEach(word => {
    const regCheck = word.match(/[a-zA-Z\']*/);

    if(word === '') {
      return;
    }

    if(regCheck[0] === '' || !wordList.has(regCheck[0].toLowerCase())) {
      badWords.push(word);
    }
  });

  res.json(badWords)
});

export default router;