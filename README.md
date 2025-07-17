<<<<<<< HEAD
<<<<<<< HEAD
# spec3-chatbot-frontend
Frontend package for the NASA Spec3 chatbot
=======
# Getting Started with Create React App
=======
# Spec3 Chatbot Frontend
>>>>>>> 54fea21 (Initial Spec3 Chatbot release)

A modern, responsive React TypeScript frontend for the Spec3 Chatbot powered by AWS Bedrock.

## Features

- 🎨 Modern, clean UI with Tailwind CSS
- 💬 Real-time chat interface
- 📱 Responsive design for all devices
- ⚡ TypeScript for better development experience
- 🔄 Auto-scrolling messages
- ⌨️ Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- 🗑️ Clear conversation functionality
- 📊 Character count for messages
- 🎯 Session management

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Headless UI** - Accessible components

## Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd spec3-chatbot-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=http://localhost:3001
```

4. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

## Configuration

### Environment Variables

- `REACT_APP_API_URL` - The URL of your chatbot API endpoint (default: http://localhost:3001)

<<<<<<< HEAD
To learn React, check out the [React documentation](https://reactjs.org/).
>>>>>>> 113b631 (Initialize project using Create React App)
=======
### API Integration

The frontend expects the backend API to have the following endpoint:

**POST** `/chat`

Request body:
```json
{
  "message": "User message",
  "session_id": "session_identifier"
}
```

Response:
```json
{
  "response": "Bot response",
  "session_id": "session_identifier"
}
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Chat.tsx        # Main chat interface
│   ├── Message.tsx     # Individual message component
│   ├── MessageInput.tsx # Message input component
│   └── TypingIndicator.tsx # Loading indicator
├── hooks/              # Custom React hooks
│   └── useChat.ts      # Chat state management
├── types/              # TypeScript type definitions
│   └── chat.ts         # Chat-related types
├── App.tsx             # Main app component
├── App.css             # App-specific styles
└── index.css           # Global styles with Tailwind
```

## Development

### Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style

This project uses:
- TypeScript for type safety
- ESLint for code linting
- Prettier for code formatting (recommended)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
>>>>>>> 54fea21 (Initial Spec3 Chatbot release)
