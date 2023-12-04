import { useState, useEffect } from 'react';
import Markdown from 'react-markdown';

const Home = () => {
    const [content, setContent] = useState('');

    //get markdown file
    useEffect(() => {
        fetch('home.md')
            .then((response) => response.text())
            .then((contents) => {
                //split string by 'newline' into array of lines
                setContent(contents);
            })
            .catch((error) => {
                console.error('Error fetching file:', error);
            });
    }, []);

    return (
        <section className="w-full flex-grow overflow-auto rounded-md bg-gray-50 p-4 dark:bg-gray-800">
            <Markdown>{content}</Markdown>
        </section>
    );
};

export default Home;
