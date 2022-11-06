import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
// import './sass/App.scss';
import App from './App';

const LightTheme = React.lazy(() => import('./components/LightTheme'));
const DarkTheme = React.lazy(() => import('./components/DarkTheme'));

const ThemeSelector = ({children}) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light");
  console.log(theme)
  localStorage.setItem('theme', theme)
  return(
    <React.Suspense fallback={<></>} >
      {theme === 'dark' && <DarkTheme />}
      {!theme === 'light' && <LightTheme />}
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}> Change Mode</button>
      {children}
    </React.Suspense>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeSelector>
      <App />
    </ThemeSelector>
  </React.StrictMode>
);
