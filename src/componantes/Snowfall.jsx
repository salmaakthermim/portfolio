const Snowfall = () => {
    return (
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-10">
        {/* Generate multiple snowflakes */}
        {Array.from({ length: 50 }).map((_, index) => (
          <div
            key={index}
            className="snowflake absolute bg-gray-500 w-2 h-2 rounded-full opacity-70 animate-fall"
            style={{
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 5 + 5}s`
            }}
          ></div>
        ))}
      </div>
    );
  };
  
  export default Snowfall;
  