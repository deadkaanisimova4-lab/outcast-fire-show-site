const ChristmasLights = () => {
  const lights = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${(i * 100) / 30}%`,
    delay: `${i * 0.1}s`,
    color: ['#ff6b6b', '#4ecdc4', '#ffe66d', '#a8e6cf', '#ff8b94', '#ffd3b6'][i % 6]
  }));

  return (
    <div className="christmas-lights-container">
      {lights.map((light) => (
        <div
          key={light.id}
          className="christmas-light"
          style={{
            left: light.left,
            animationDelay: light.delay,
            backgroundColor: light.color,
            boxShadow: `0 0 10px ${light.color}, 0 0 20px ${light.color}`
          }}
        />
      ))}
    </div>
  );
};

export default ChristmasLights;
