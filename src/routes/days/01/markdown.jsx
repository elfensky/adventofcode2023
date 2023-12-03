import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
//highlight
// import 'highlight.js/styles/default.css'; // Import the CSS style
import 'highlight.js/styles/monokai-sublime.min.css';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
// Then register the languages you need
hljs.registerLanguage('javascript', javascript);

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

    useEffect(() => {
        hljs.highlightAll(); // Initialize Highlight.js
    }, [question, solution]);

    return (
        <>
            <Markdown>{question}</Markdown>
            <Markdown className="space-y-4">{solution}</Markdown>
        </>
    );
};

export default Content;
