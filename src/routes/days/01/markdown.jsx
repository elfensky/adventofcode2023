import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

const Content = () => {
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');

    //get markdown files
    useEffect(() => {
        fetch('days/01/question.md')
            .then((response) => response.text())
            .then((contents) => {
                setQuestion(contents);
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });

        fetch('days/01/solution.md')
            .then((response) => response.text())
            .then((contents) => {
                setSolution(contents);
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });
    }, []);

    return (
        <>
            <Markdown>{question}</Markdown>
            <Markdown>{solution}</Markdown>
        </>
    );
};

export default Content;
