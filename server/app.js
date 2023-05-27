const express = require('express');
const app = express();
const port = 3000;

// Level 1 API
const fizzBuzz = (num, i = 1, result = []) => {

    if (i % 3 === 0) {
        if (i % 5  === 0 ) {
            result.push('Buzz Lightyear');
        } else {
            result.push('Buzz');
        }
    } else if (i % 5 === 0) {
        result.push('Lightyear');
    } else {
        result.push(i);
    }

    if (i === num) return result;

    return fizzBuzz(num, i + 1, result)
}

app.get('/fb/:num', (req, res) => {
    const num = +req.params.num;

    if (isNaN(num)) {
        res.status(400).json({ message: 'Invalid Number' })
    } else {
        res.status(200).json(fizzBuzz(num))
    }
})

// 2. Level 2 API
const countNumbers = (arr, hashTable = {}) => {
    if (arr.length === 0) return Object.values(hashTable).reduce((a, b) => a > b ? a : b, 0);

    const num = arr.shift();

    hashTable[num] ? hashTable[num] += 1 : hashTable[num] = 1;

    // console.log(num, hashTable);

    return countNumbers(arr, hashTable);
}

app.get('/count/:arr', (req, res) => {
    const arr = JSON.parse(req.params.arr);
    // console.log(arr);

    if (!Array.isArray(arr)) {
        res.status(400).json({ message: 'Invalid Array' })
    } else {
        res.status(200).json(countNumbers(arr))
    }
})

app.listen(port, () => {
    console.log('Server is running at port ' + port);
})
