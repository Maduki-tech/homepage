const STARS: [number, number, number, number, number][] = [
  // [x%, y%, size(px), delay(s), duration(s)]
  // Row 1 – y: 2–10
  [3, 4, 1, 0.0, 3.0],
  [8, 7, 2, 1.2, 4.0],
  [15, 3, 1, 2.1, 2.5],
  [22, 9, 2, 0.5, 3.5],
  [28, 5, 1, 1.8, 4.0],
  [35, 8, 2, 3.2, 3.0],
  [42, 3, 1, 0.9, 2.0],
  [50, 6, 2, 2.5, 4.5],
  [58, 4, 1, 1.1, 3.0],
  [65, 9, 2, 3.7, 2.5],
  [72, 2, 1, 0.3, 4.0],
  [80, 7, 2, 2.0, 3.5],
  [88, 5, 1, 1.5, 2.0],
  [95, 3, 2, 3.0, 4.0],
  // Row 2 – y: 11–20
  [2, 14, 1, 1.3, 3.5],
  [10, 18, 2, 2.8, 4.0],
  [18, 12, 1, 0.6, 2.5],
  [25, 16, 2, 3.5, 3.0],
  [33, 13, 1, 1.9, 4.5],
  [40, 19, 2, 0.2, 2.0],
  [47, 15, 1, 2.3, 3.5],
  [55, 11, 2, 1.6, 4.0],
  [62, 17, 1, 3.1, 2.5],
  [70, 14, 2, 0.8, 3.0],
  [78, 19, 1, 2.6, 4.5],
  [85, 12, 2, 1.4, 2.0],
  [92, 16, 1, 3.3, 3.5],
  [97, 18, 2, 0.1, 4.0],
  // Row 3 – y: 21–30
  [4, 24, 1, 2.2, 3.0],
  [11, 28, 2, 0.4, 4.5],
  [19, 22, 1, 3.6, 2.5],
  [27, 27, 2, 1.7, 3.5],
  [34, 23, 1, 0.9, 4.0],
  [41, 29, 2, 2.4, 2.0],
  [48, 25, 1, 1.2, 3.0],
  [56, 21, 2, 3.8, 4.5],
  [63, 28, 1, 0.7, 2.5],
  [71, 24, 2, 2.9, 3.0],
  [79, 26, 1, 1.5, 4.0],
  [87, 22, 2, 3.4, 2.5],
  [94, 29, 1, 0.3, 3.5],
  // Row 4 – y: 31–40
  [6, 34, 2, 1.8, 4.0],
  [14, 39, 1, 3.2, 2.5],
  [21, 33, 2, 0.6, 3.0],
  [29, 37, 1, 2.7, 4.5],
  [36, 32, 2, 1.1, 2.0],
  [43, 38, 1, 3.6, 3.5],
  [51, 35, 2, 0.4, 4.0],
  [59, 31, 1, 2.1, 2.5],
  [66, 39, 2, 1.5, 3.0],
  [74, 33, 1, 3.9, 4.5],
  [82, 36, 2, 0.8, 2.0],
  [90, 32, 1, 2.3, 3.5],
  [96, 38, 2, 1.6, 4.0],
  // Row 5 – y: 41–48
  [1, 44, 1, 3.1, 3.0],
  [9, 47, 2, 0.5, 4.0],
  [17, 42, 1, 2.0, 2.5],
  [26, 46, 2, 1.3, 3.5],
  [38, 43, 1, 3.7, 4.5],
  [45, 48, 2, 0.9, 2.0],
  [53, 45, 1, 2.6, 3.0],
  [61, 42, 2, 1.8, 4.0],
  [68, 47, 1, 3.4, 2.5],
  [76, 44, 2, 0.2, 3.5],
  [83, 46, 1, 2.8, 4.0],
  [91, 43, 2, 1.0, 2.0],
  [98, 45, 1, 3.5, 3.0],
];

// [left%, top%, length(px), delay(s), period(s)]
const SHOOTING_STARS: [number, number, number, number, number][] = [
  [10, 8, 160, 1.0, 9.0],
  [35, 5, 120, 4.5, 12.0],
  [60, 12, 180, 7.0, 10.0],
  [80, 4, 140, 2.5, 14.0],
];

export default function StarField() {
  return (
    <>
      <style>{`
                @keyframes twinkle {
                    0%, 100% { opacity: 0.15; transform: scale(1); }
                    50% { opacity: 0.9; transform: scale(1.4); }
                }
                @keyframes shoot {
                    0%   { opacity: 0;   transform: translate(0, 0) rotate(215deg); }
                    5%   { opacity: 1; }
                    20%  { opacity: 0;   transform: translate(310px, 220px) rotate(215deg); }
                    100% { opacity: 0;   transform: translate(310px, 220px) rotate(215deg); }
                }
            `}</style>

      {/* Twinkling stars – only visible in dark mode */}
      {STARS.map(([x, y, size, delay, duration], i) => (
        <div
          key={i}
          className="absolute hidden rounded-full bg-white dark:block"
          style={{
            left: `${x}%`,
            top: `${y}%`,
            width: size,
            height: size,
            animation: `twinkle ${duration}s ${delay}s infinite ease-in-out`,
          }}
        />
      ))}

      {/* Shooting stars – only visible in dark mode */}
      {SHOOTING_STARS.map(([left, top, length, delay, period], i) => (
        <div
          key={`shoot-${i}`}
          className="absolute hidden dark:block"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: length,
            height: 1.5,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 60%, transparent 100%)",
            borderRadius: 2,
            opacity: 0,
            animation: `shoot ${period}s ${delay}s infinite ease-in`,
          }}
        />
      ))}
    </>
  );
}
