import React from 'react'; // Imports React so JSX can be compiled and rendered.
import { createRoot } from 'react-dom/client'; // Imports the function that mounts React into the HTML page.
import App from './App.jsx'; // Imports the main application component.
import './App.css'; // Imports the stylesheet used by the application.


const rootElement = document.getElementById('root'); // Finds the empty root element in index.html.
createRoot(rootElement).render(<React.StrictMode><App /></React.StrictMode>); // Renders App into the root and enables development checks.
