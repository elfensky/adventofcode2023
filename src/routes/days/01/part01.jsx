//MARKDOWN
import { useState, useEffect } from 'react';
import Content from '../../../components/markdown'; // markdown

const Day01Part01 = () => {
    return (
        <section className="w-full flex-grow overflow-auto rounded-md bg-gray-50 p-4 dark:bg-gray-800">
            <Content
                questionURL="days/01/question1.md"
                solutionURL="days/01/solution1.md"
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

    //generate the special values for each line
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

    //calculate the answer
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

    return (
        <>
            <h3>Answer: {answer}</h3>
        </>
    );
};
