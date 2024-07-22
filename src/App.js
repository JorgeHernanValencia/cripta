import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

const symbols = ['*', '#', '@', '!', '%'];
const spaceReplacement = '<<SPC>>'; // Sequence used to replace spaces

function App() {
    const [inputText, setInputText] = useState('');
    const [resultText, setResultText] = useState('');

    const encryptText = () => {
        let text = inputText;
        text = text.replace(/ /g, spaceReplacement); // Replace spaces with the replacement sequence
        let encryptedText = '';

        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i) + 5; // Shift ASCII code by 5
            encryptedText += String.fromCharCode(charCode);
            if ((i + 1) % 3 === 0 && i !== text.length - 1) {
                let symbolIndex = (i + 1) / 3 % symbols.length;
                encryptedText += symbols[symbolIndex]; // Add a special symbol from the sequence
            }
        }

        setResultText(encryptedText);
    };

    const decryptText = () => {
        let textToDecrypt = inputText || resultText;
        let decryptedText = '';
        let tempText = textToDecrypt;

        // Remove special symbols
        symbols.forEach(symbol => {
            tempText = tempText.split(symbol).join('');
        });

        // Decrypt text
        for (let i = 0; i < tempText.length; i++) {
            let charCode = tempText.charCodeAt(i) - 5; // Shift ASCII code back by 5
            decryptedText += String.fromCharCode(charCode);
        }

        // Restore spaces
        decryptedText = decryptedText.replace(new RegExp(spaceReplacement, 'g'), ' ');

        setResultText(decryptedText);
    };

    const clearText = () => {
        setInputText('');
        setResultText('');
    };

    const copyResult = () => {
        navigator.clipboard.writeText(resultText).then(() => {
            alert('Texto copiado: ' + resultText);
        });
    };

    return (
    
    
    <div className="App">
    
           <Header />
    
        <div className="Content">
          <h1 className="title"> </h1>
            <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Escribe tu texto aquí..."
                style={{ width: '80vw', minHeight: '40vh', background: 'rgba(255, 255, 255, 0.8)', border: 'none', padding: '10px', boxSizing: 'border-box', marginBottom: '10px', fontSize: '16px', borderRadius: '8px' }}
            />
            <div>
                <button onClick={encryptText}>Encriptar</button>
                <button onClick={decryptText}>Desencriptar</button>
                <button onClick={clearText}>Limpiar</button>
            </div>
            <textarea
                value={resultText}
                readOnly
                placeholder="El resultado aparecerá aquí..."
                style={{ width: '80vw', minHeight: '40vh', background: 'rgba(255, 255, 255, 0.8)', border: 'none', padding: '10px', boxSizing: 'border-box', marginTop: '10px', fontSize: '16px', borderRadius: '8px' }}
            />
        
        <br/>
            <button onClick={copyResult} style={{ marginTop: '10px' }}>Copiar resultado</button>
        </div>
    
           <Footer />
    
    </div>
    
    
    );
}

export default App;
