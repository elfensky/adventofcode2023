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
        <div>
            <Markdown>{content}</Markdown>
        </div>
    );
};

export default Home;
