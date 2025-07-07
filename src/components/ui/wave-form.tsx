export const WaveformIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="pointer-events-none"
    >
      {[0, 1, 2, 3].map((i) => {
        const delay = (Math.random() * 0.5).toFixed(2);
        const dur = (0.7 + Math.random() * 0.6).toFixed(2);
        const minHeight = 4 + Math.random() * 3;
        const maxHeight = 16 + Math.random() * 4;

        return (
          <rect
            key={i}
            x={i * 5}
            y={24 - maxHeight}
            width="3"
            height={maxHeight}
            rx="1.5"
          >
            <animate
              attributeName="height"
              values={`${minHeight};${maxHeight};${minHeight}`}
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values={`${24 - minHeight};${24 - maxHeight};${24 - minHeight}`}
              dur={`${dur}s`}
              begin={`${delay}s`}
              repeatCount="indefinite"
            />
          </rect>
        );
      })}
    </svg>
  );
};
