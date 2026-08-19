import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './extra-notes.js';
import NotebookApp from './NotebookApp.jsx';
import '../styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotebookApp />
  </StrictMode>
);
