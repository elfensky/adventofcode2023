//MARKDOWN
import { useState, useEffect } from 'react';
import Content from '../../../components/Markdown'; // markdown

const Part01 = () => {
    return (
        <section className="w-full flex-grow overflow-auto rounded-md bg-gray-50 p-4 dark:bg-gray-800">
            <Content
                questionURL="days/02/01question.md"
                solutionURL="days/02/01solution.md"
            />
            <Answer />
        </section>
    );
};
export default Part01;

//ANSWER
const Answer = () => {
    const [data, setData] = useState([]);
    const [numbers, setNumers] = useState([]);
    const [values, setValues] = useState([]);
    const [answer, setAnswer] = useState(0);

    //get file
    useEffect(() => {
        fetch('days/02/input.txt')
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
        // Initialize an empty object to store the processed games
        const processedGames = [];

        // Process each game segment
        data.forEach((game, index) => {
            // Remove "Game X: " from the game string
            const cleanedGame = game.replace(`Game ${index + 1}: `, '');

            // Split the game string into individual color segments
            const colorSegments = cleanedGame.split(';');

            // Initialize an empty array to store the processed color segments
            const processedColorSegments = [];

            // Process each color segment
            colorSegments.forEach((segment) => {
                // Split the color segment into color and count
                const [count, color] = segment.trim().split(' ');

                // Create an object with color and count properties
                const processedSegment = {
                    red: 0,
                    green: 0,
                    blue: 0,
                };
                processedSegment[color] = parseInt(count);

                // Add the processed segment to the array
                processedColorSegments.push(processedSegment);
            });

            // Add the processed color segments to the game object
            processedGames[index + 1] = processedColorSegments;
        });

        console.log(processedGames);
    }, [data]);

    return (
        <section className="mt-4 flex w-full justify-center rounded-md  bg-green-800 p-4 align-middle text-gray-900 dark:text-white">
            <h3>Answer: {answer}</h3>
        </section>
    );
};
