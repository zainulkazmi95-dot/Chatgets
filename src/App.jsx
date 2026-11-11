
import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = (e) => {
    e.preventDefault()
    if (!message.trim()) return

    setMessages([...messages, message.trim()])
    setMessage('')
  }

  const newChat = () => {
    setMessages([])
    setMessage('')
  }

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-icon">C</div>
          <span>Chatgets</span>
        </div>

        <button className="new-chat" onClick={newChat}>
          + New Chat
        </button>

        <div className="sidebar-label">YOUR SPACE</div>
        <div className="side-link">⌕ Search chats</div>
        <div className="side-link">▤ Chat History</div>
        <div className="side-link">▧ Images</div>
        <div className="side-link">◉ Explore AI</div>

        <div className="sidebar-bottom">
          <div className="side-link">⚙ Settings</div>
          <div className="profile">
            <div className="avatar">Z</div>
            <div>
              <strong>My Account</strong>
              <small>Free Plan</small>
            </div>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <span>AI Assistant</span>
          <button className="plan-button">✦ Upgrade Plan</button>
        </header>

        <section className="chat-area">
          {messages.length === 0 ? (
            <div className="welcome">
              <div className="welcome-icon">✦</div>
              <h1>Welcome to <span>Chatgets</span></h1>
              <p>Intelligence Beyond Limits.</p>
              <p className="subtitle">
                Your ideas, questions and creativity start here.
              </p>

              <div className="suggestions">
                <button onClick={() => setMessage('Help me write a story')}>
                  ✍️ Write something
                </button>
                <button onClick={() => setMessage('Explain artificial intelligence')}>
                  ✦ Learn something
                </button>
                <button onClick={() => setMessage('Help me write code')}>
                  &lt;/&gt; Write code
                </button>
                <button onClick={() => setMessage('Give me creative ideas')}>
                  ◈ Get ideas
                </button>
              </div>
            </div>
          ) : (
            <div className="messages">
              {messages.map((item, index) => (
                <div className="user-message" key={index}>
                  {item}
                </div>
              ))}
            </div>
          )}
        </section>

        <div className="composer-area">
          <form className="composer" onSubmit={sendMessage}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message Chatgets..."
              rows="1"
            />
            <button type="submit" aria-label="Send message">↑</button>
          </form>
          <p className="disclaimer">
            Chatgets is under development. AI connection coming soon.
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
