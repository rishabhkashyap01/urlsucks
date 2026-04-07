import { useState } from 'react';
import './App.css';

function App() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortCode, setShortCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setShortCode('');

    try {
      // Note: This assumes you set up the proxy in vite.config.js
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ original_url: originalUrl }),
      });

      const data = await response.json();

      if (data.success) {
        setShortCode(data.short_code);
      } else {
        setError(data.message || 'Something went wrong');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1 className="logo">url<span>sucks</span></h1>
        <p>Shorten your messy links instantly.</p>
      </header>

      <main>
        <form onSubmit={handleSubmit} className="url-form">
          <input
            type="url"
            placeholder="Paste your long URL here..."
            value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Shrinking...' : 'Shorten'}
          </button>
        </form>

        {error && <p className="error-msg">{error}</p>}

        {shortCode && (
          <div className="result-card">
            <p>Your tiny URL is ready:</p>
            <div className="copy-box">
              {/* Change 'localhost:5000' to your actual domain later */}
              <span className="short-url">http://localhost:3000/{shortCode}</span>
              <button 
                onClick={() => navigator.clipboard.writeText(`http://localhost:3000/${shortCode}`)}
                className="copy-btn"
              >
                Copy
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;