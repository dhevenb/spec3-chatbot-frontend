export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

export interface ChatResponse {
  response: string;
  session_id: string;
}

export interface ChatError {
  error: string;
}
