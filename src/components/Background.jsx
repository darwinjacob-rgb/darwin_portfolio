import { useMemo } from "react";

const PARTICLE_COUNT = 22;

function seededRandom(seed) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export default function Background() {
  const particles = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        left: seededRandom(i * 7.1) * 100,
        top: seededRandom(i * 3.7 + 1) * 100,
        size: 1 + seededRandom(i * 5.3) * 2,
        duration: 18 + seededRandom(i * 2.1) * 22,
        delay: seededRandom(i * 9.9) * 10,
      })),
    []
  );

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void noise" aria-hidden="true">
      {/* base grid */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* radial glows */}
      <div
        className="absolute -top-40 -left-40 h-[560px] w-[560px] rounded-full opacity-40 blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-crimson), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full opacity-30 blur-[110px] animate-[drift_26s_ease-in-out_infinite]"
        style={{ background: "radial-gradient(circle, var(--color-neon-pink), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-1/4 h-[480px] w-[480px] rounded-full opacity-25 blur-[120px] animate-[drift_32s_ease-in-out_infinite_reverse]"
        style={{ background: "radial-gradient(circle, var(--color-magenta), transparent 70%)" }}
      />

      {/* light streak */}
      <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/5 to-transparent" />

      {/* particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
            animation: `floaty ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,5,6,0.7)_100%)]" />

      <style>{`
        @keyframes floaty {
          0%, 100% { transform: translateY(0px); opacity: 0.15; }
          50% { transform: translateY(-40px); opacity: 0.5; }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-30px, 30px); }
        }
      `}</style>
    </div>
  );
}
