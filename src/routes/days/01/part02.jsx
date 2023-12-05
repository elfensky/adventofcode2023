//MARKDOWN
import { useState, useEffect } from 'react';
import Content from '../../../components/Markdown'; // markdown

const Day01Part01 = () => {
    return (
        <section className="w-full flex-grow overflow-auto rounded-md bg-gray-50 p-4 dark:bg-gray-800">
            <Content
                questionURL="days/01/question2.md"
                solutionURL="days/01/solution2.md"
            />
            <Answer />
        </section>
    );
};
export default Day01Part01;

//ANSWER
const Answer = () => {
    const [data, setData] = useState([]);
    const [numbers, setNumers] = useState([]);
    const [values, setValues] = useState([]);
    const [answer, setAnswer] = useState(0);

    //get file
    useEffect(() => {
        fetch('days/01/data.txt')
            .then((response) => response.text())
            .then((contents) => {
                //split string by 'newline' into array of lines
                setData(contents.split('\n'));
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });
    }, []);

    //extract numbers
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

        function getNumbers(data, keywords) {
            const result = data.map((line) => {
                return findKeywordsPositions(line, keywords);
            });
            return result;
        }

        if (data.length !== 0) {
            const result = getNumbers(data, keywords);
            setNumers(result);
        }
    }, [data]);

    //generate the special values for each line
    useEffect(() => {
        //string to number conversion
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

        if (numbers.length !== 0) {
            const result = combineNumbers(numbers);
            // console.log('setValues', result.length, result);
            setValues(result);
        }
    }, [numbers]);

    //calculate the answer
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

    return (
        <section className="mt-4 flex w-full justify-center rounded-md  bg-green-800 p-4 align-middle text-gray-900 dark:text-white">
            <h3>Answer: {answer}</h3>
        </section>
    );
};
