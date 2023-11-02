import React, { useState, useEffect } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Use o estado local ou localStorage para persistir o modo escuro
  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    // Aplicar/retirar estilos ou classes CSS aqui
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <h1>Meu Aplicativo</h1>
      <p>Conteúdo do aplicativo.</p>
    </div>
  );
};

export default App;
