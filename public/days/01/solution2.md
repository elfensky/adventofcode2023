## Solution

```javascript
//extract the numbers using an array of keywords and indexOf to:
// - check if any of the keywords are in each line of text
// - at which position they are
// - sort the positions
useEffect(() => {
    const keywords = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
    ];

    //the function that does the work
    function findKeywordsPositions(string, valuesArray) {
        let positions = [];
        for (let i = 0; i < valuesArray.length; i++) {
            const value = valuesArray[i];
            let index = string.indexOf(value);
            while (index !== -1) {
                positions.push({ keyword: value, position: index });
                index = string.indexOf(value, index + 1);
            }
        }
        positions.sort((a, b) => a.position - b.position);
        return positions;
    }

    //map each line of the data to the function
    function getNumbers(data, keywords) {
        const result = data.map((line) => {
            return findKeywordsPositions(line, keywords);
        });
        return result;
    }

    //set the numbers
    if (data.length !== 0) {
        const result = getNumbers(data, keywords);
        setNumers(result);
    }
}, [data]);
```

```javascript
//we now have a list of arrays that contain all the keywords present in each line.
//here we map each keyword to the corresonding value, and generate the "magic number" that we'll later add together.
useEffect(() => {
    //object to convert keywords to numbers
    const s2n = {
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        0: 0,
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
    };

    //the function basically didn't change since part2, except we now also have to map the strings to the corresponding numbers.
    function combineNumbers(numbers) {
        const values = numbers.map((line) => {
            if (line !== undefined) {
                if (line === null || line.length === 0) {
                    return null;
                } else if (line.length === 1) {
                    const key = line[0].keyword;
                    return `${s2n[key]}${s2n[key]}`;
                } else if (line.length > 1) {
                    const firstItem = line[0].keyword;
                    const lastItem = line[line.length - 1].keyword;
                    return `${s2n[firstItem]}${s2n[lastItem]}`;
                } else {
                    return null;
                }
            }
        });
        return values;
    }

    //set the values
    if (numbers.length !== 0) {
        const result = combineNumbers(numbers);
        // console.log('setValues', result.length, result);
        setValues(result);
    }
}, [numbers]);
```

```javascript
//calculate the answer by adding all the values together
useEffect(() => {
    function calculateAnswer(values) {
        let result = 0;
        values.forEach((value) => {
            if (value === null) {
                console.log('value was null');
                return;
            } else {
                result += parseInt(value);
            }
        });
        setAnswer(result);
    }
    if (values.length !== 0) {
        calculateAnswer(values);
    }
}, [values]);
```
