import React, {useState, useEffect} from 'react';
import {Container, Button}  from '../assets/styles/components/StyleComponents';
import logo from '../../logo.svg';
import Phrase from '../components/Phrase';

const App = () => {

    const [phrase, setPhrase] = useState({});

    const getDataFromAPI = async () => {
        const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
        const data = await response.json();
        console.log(data[0])
        setPhrase(data[0]);
    }

    useEffect(() => getDataFromAPI(), []);

    return ( 
        <Container>
            <img src={logo} alt="logo"/>
            <Phrase phrase={phrase} />
            <Button onClick={() => getDataFromAPI()}>Get Phrase</Button>
        </Container>
     );
}
 
export default App;
