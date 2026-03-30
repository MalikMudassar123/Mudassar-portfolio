'use client'

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="flex gap-2">
        {['L', 'O', 'A', 'D', 'I', 'N', 'G'].map((letter, index) => (
          <span
            key={index}
            className="text-3xl font-bold text-white animate-bounce"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
