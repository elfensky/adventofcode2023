import { useState, useEffect } from 'react';

const Data = ({ url }) => {
    const [data, setData] = useState([]);

    //get file
    useEffect(() => {
        fetch(url)
            .then((response) => response.text())
            .then((contents) => {
                //split string by 'newline' into array of lines
                setData(contents.split('\n'));
            })
            .catch((error) => {
                console.error(`Error fetching file from ${url}'. \n ${error}`);
            });
    }, [url]);

    return data;
};

export default Data;
