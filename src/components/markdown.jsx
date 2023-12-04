import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
//highlight
// import 'highlight.js/styles/default.css'; // Import the CSS style
import 'highlight.js/styles/monokai-sublime.min.css';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript.js';

const Content = ({ questionURL, solutionURL }) => {
    const [question, setQuestion] = useState('');
    const [solution, setSolution] = useState('');

    useEffect(() => {
        if (questionURL !== undefined || solutionURL !== undefined) {
            fetch(questionURL)
                .then((response) => response.text())
                .then((contents) => {
                    setQuestion(contents);
                })
                .catch((error) => {
                    console.error('Error fetching file:', error);
                });

            fetch(solutionURL)
                .then((response) => response.text())
                .then((contents) => {
                    setSolution(contents);
                })
                .catch((error) => {
                    console.error('Error fetching file:', error);
                });
        }
    }, [questionURL, solutionURL]);

    //highlight
    useEffect(() => {
        if (question !== '' && solution !== '') {
            hljs.registerLanguage('javascript', javascript); // register the languages you need
            hljs.highlightAll(); // Initialize Highlight.js
        }
    }, [question, solution]);

    return (
        <>
            <Markdown>{question}</Markdown>
            <Markdown className="space-y-4">{solution}</Markdown>
        </>
    );
};

export default Content;
