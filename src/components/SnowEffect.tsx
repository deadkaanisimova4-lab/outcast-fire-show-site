import { useEffect } from 'react';

const SnowEffect = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      
      const left = Math.random() * 100;
      const duration = 5 + Math.random() * 10;
      const size = 8 + Math.random() * 8;
      const delay = Math.random() * 5;
      const drift = (Math.random() - 0.5) * 100;
      
      const symbols = ['❄', '❅', '❆', '✨', '⛄', '🎄'];
      snowflake.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      
      snowflake.style.left = `${left}%`;
      snowflake.style.animationDuration = `${duration}s`;
      snowflake.style.animationDelay = `${delay}s`;
      snowflake.style.fontSize = `${size}px`;
      snowflake.style.setProperty('--drift', `${drift}px`);
      snowflake.style.opacity = (0.3 + Math.random() * 0.7).toString();
      
      const container = document.getElementById('snow-container');
      if (container) {
        container.appendChild(snowflake);
        setTimeout(() => snowflake.remove(), (duration + delay) * 1000);
      }
    };

    const interval = setInterval(createSnowflake, 300);
    
    for (let i = 0; i < 20; i++) {
      setTimeout(createSnowflake, i * 150);
    }
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      id="snow-container" 
      className="fixed inset-0 pointer-events-none z-50 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default SnowEffect;
