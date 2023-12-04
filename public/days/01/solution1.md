## Solution

Steps:

1. Read the file & split it into lines
2. For each line, get the first and last integers
3. Combine the integers into a two-digit number
4. Add the two-digit number to a running total
5. Print the running total

```js
// 1. get the file contents and split it into an array of lines
useEffect(() => {
    fetch('days/01/data.txt')
        .then((response) => response.text())
        .then((contents) => {
            setData(contents.split('\n')); // split on newlines
        })
        .catch((error) => {
            console.error('Error fetching file:', error);
        });
}, []);
```

```js
// 2. extract numbers
useEffect(() => {
    function extractNumbers(data) {
        const result = data.map((line) => {
            return line.match(/\d/g);
        });
        setNumers(result);

        // for (let index = 0; index < 5; index++) {
        //     console.log(data[index], array[index]);
        // }

        //
    }

    if (data.length !== 0) {
        extractNumbers(data);
    }
}, [data]);
```

```js
// 3. generate the special values for each line
useEffect(() => {
    function combineNumbers(numbers) {
        const values = numbers.map((line) => {
            if (line === null) {
                return null;
            } else if (line.length === 1) {
                return `${line[0]}${line[0]}`;
            } else {
                const firstItem = line[0];
                const lastItem = line[line.length - 1];
                return `${firstItem}${lastItem}`;
            }
        });
        setValues(values);
    }

    if (numbers.length !== 0) {
        combineNumbers(numbers);
    }
}, [numbers]);
```

```js
// 4. calculate the answer
useEffect(() => {
    function calculateAnswer(values) {
        let result = 0;
        values.forEach((value) => {
            if (value === null) {
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
