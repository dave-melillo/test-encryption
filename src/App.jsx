import { useState } from 'react';
import { encrypt } from './utils/encryption';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState('caesar');
  const [result, setResult] = useState('');

  const handleEncrypt = () => {
    if (message.trim() === '') {
      setResult('');
      return;
    }
    const encrypted = encrypt(message, method);
    setResult(encrypted);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleEncrypt();
    }
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>🔐 Encryption Test App</h1>
          <p className="subtitle">Test different encryption methods</p>
        </header>

        <main>
          <div className="form-group">
            <label htmlFor="message">Enter your message:</label>
            <textarea
              id="message"
              className="input-area"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message here..."
              rows="4"
            />
          </div>

          <div className="form-group">
            <label htmlFor="method">Encryption Method:</label>
            <select
              id="method"
              className="method-selector"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              <option value="caesar">Caesar Cipher (Shift 3)</option>
              <option value="rot13">ROT13</option>
              <option value="base64">Base64</option>
            </select>
          </div>

          <button
            className="encrypt-button"
            onClick={handleEncrypt}
            disabled={!message.trim()}
          >
            🔒 Encrypt
          </button>

          {result && (
            <div className="result-section">
              <label>Result:</label>
              <div className="result-display">
                {result}
              </div>
              <button
                className="copy-button"
                onClick={() => navigator.clipboard.writeText(result)}
                title="Copy to clipboard"
              >
                📋 Copy
              </button>
            </div>
          )}
        </main>

        <footer>
          <p className="info">
            <strong>Caesar Cipher:</strong> Shifts letters by 3 positions<br />
            <strong>ROT13:</strong> Shifts letters by 13 positions (self-inverse)<br />
            <strong>Base64:</strong> Encodes text to Base64 format
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
