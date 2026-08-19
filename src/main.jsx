import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './extra-notes.js';
import './n3-notes-02-06.js';
import NotebookApp from './NotebookApp.jsx';
import '../styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotebookApp />
  </StrictMode>
);
