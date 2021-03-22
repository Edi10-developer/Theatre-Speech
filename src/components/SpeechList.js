import React, {useState} from 'react';
import Button from './Button'
import data from '../data.json'
//import data2 from '../data2.json.json'

const SpeechList = () => {
    const [count, setCount]= useState(0)

    const julieta = data.map(speechs => speechs.julieta)
    const romeo = data.map(speechs => speechs.romeo)
   
    const [speech, setSpeech] = useState('')

    for(let speech of julieta){}
    //const newSpeech = () => setCount(count => count  + 1)
    const newSpeech = () => setSpeech(speech => julieta.speech)
    const oldSpeech = () => setCount(count => count - 1)
 
    //console.log(data2);
    console.log(julieta);
    
 return(
     <div>
     <Button 
     title="Adelante" 
     onClick={newSpeech}
     />

     <Button 
     title="Atras"
      onClick={oldSpeech}/>
     </div>
 )
}

export default SpeechList;
