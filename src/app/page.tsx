'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const SocialIcons = {
  INSTAGRAM: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 inline-block">
      <path fill="currentColor" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 inline-block">
      <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  ),
  GITHUB: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 inline-block">
      <path fill="currentColor" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
    </svg>
  ),
  LINKEDIN: (
    <svg viewBox="0 0 24 24" className="w-6 h-6 sm:w-8 sm:h-8 inline-block">
      <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
    </svg>
  ),
}

const links = [
  {
    title: 'INSTAGRAM',
    url: 'https://instagram.com/yourusername',
    color: 'bg-social-instagram',
    textColor: 'text-white',
    rotate: -2,
    delay: 0,
    icon: SocialIcons.INSTAGRAM
  },
  {
    title: 'X',
    url: 'https://x.com/yourusername',
    color: 'bg-social-x',
    textColor: 'text-white',
    rotate: 1,
    delay: 0.5,
    icon: SocialIcons.X
  },
  {
    title: 'GITHUB',
    url: 'https://github.com/yourusername',
    color: 'bg-social-github',
    textColor: 'text-white',
    rotate: -1,
    delay: 1,
    icon: SocialIcons.GITHUB
  },
  {
    title: 'LINKEDIN',
    url: 'https://linkedin.com/in/yourusername',
    color: 'bg-social-linkedin',
    textColor: 'text-white',
    rotate: 2,
    delay: 1.5,
    icon: SocialIcons.LINKEDIN
  },
]

const BackgroundChaos = () => {
  return (
    <div className="fixed inset-0 opacity-20 overflow-hidden pointer-events-none select-none">
      {/* Glitch background shadows */}
      <div className="fixed inset-0 bg-gradient-to-br from-nihil-primary/20 to-nihil-secondary/20 animate-glitch-slow" 
        style={{ transform: 'translateZ(0)' }}
      />
      <div className="fixed inset-0 bg-gradient-to-tr from-nihil-accent/10 to-transparent animate-glitch-fast" 
        style={{ 
          animationDelay: '0.2s',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />
      <div className="fixed inset-0 bg-gradient-to-bl from-nihil-dark/15 to-nihil-light/15 animate-glitch" 
        style={{ 
          animationDelay: '0.4s',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      />

      {/* Horizontal glitch lines with shadow */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`h-${i}`}
          className={`fixed animate-glitch-${i % 2 ? 'fast' : 'slow'}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: 0,
            width: '100%',
            height: '2px',
            background: i % 3 === 0 ? '#FF00FF' : i % 3 === 1 ? '#00FF00' : '#FF0000',
            opacity: Math.random() * 0.5 + 0.5,
            boxShadow: `0 0 ${10 + Math.random() * 20}px ${i % 3 === 0 ? '#FF00FF' : i % 3 === 1 ? '#00FF00' : '#FF0000'}`,
            filter: 'blur(1px)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      ))}

      {/* Diagonal chaos elements with glitch shadow */}
      {[...Array(10)].map((_, i) => (
        <div
          key={`d-${i}`}
          className="fixed animate-chaos"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '150px',
            height: '3px',
            background: i % 2 ? '#FF00FF' : '#00FF00',
            transform: `translateZ(0) rotate(${Math.random() * 360}deg)`,
            boxShadow: `0 0 ${15 + Math.random() * 25}px ${i % 2 ? '#FF00FF' : '#00FF00'}`,
            filter: 'blur(0.5px)',
            willChange: 'transform'
          }}
        />
      ))}

      {/* Floating squares with glitch effect */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`s-${i}`}
          className="fixed animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '30px',
            height: '30px',
            border: '2px solid',
            borderColor: i % 3 === 0 ? '#FF00FF' : i % 3 === 1 ? '#00FF00' : '#FF0000',
            transform: `translateZ(0) rotate(${Math.random() * 45}deg)`,
            animationDelay: `${i * 0.5}s`,
            boxShadow: `0 0 ${20 + Math.random() * 30}px ${i % 3 === 0 ? '#FF00FF' : i % 3 === 1 ? '#00FF00' : '#FF0000'}`,
            filter: 'blur(1px)',
            willChange: 'transform'
          }}
        />
      ))}

      {/* Random glitch dots with enhanced glow */}
      {[...Array(20)].map((_, i) => (
        <div
          key={`g-${i}`}
          className="fixed animate-glitch-fast"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            background: i % 2 ? '#FF00FF' : '#00FF00',
            boxShadow: `0 0 ${15 + Math.random() * 20}px ${i % 2 ? '#FF00FF' : '#00FF00'}`,
            filter: 'blur(0.5px)',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white p-8 relative overflow-x-hidden">
      <BackgroundChaos />

      <div className="max-w-2xl mx-auto relative">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-16"
        >
          <motion.div
            className="w-40 h-40 mx-auto mb-8 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-nihil-primary animate-glitch"></div>
            <div className="relative w-full h-full border-4 border-black shadow-nihil">
              <Image
                src="/image/profile.webp"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          <h1 className="text-6xl font-black mb-4 animate-glitch tracking-tighter">
            Rizki.tsx
          </h1>
          <p className="text-xl font-mono text-nihil-primary">@ezpzlemonsquizy</p>
        </motion.div>

        <div className="space-y-6">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full p-4 sm:p-6 ${link.color} ${link.textColor} text-center font-black text-lg sm:text-xl tracking-widest border-2 sm:border-4 border-black animate-shadow-glitch transition-transform relative overflow-hidden hover:animate-none backdrop-blur-sm`}
              style={{
                animationDelay: `${link.delay}s`,
                animationDuration: '0.8s',
                animationFillMode: 'both',
                animationTimingFunction: 'steps(15, end)'
              }}
              initial={{ x: -100, opacity: 0, rotate: link.rotate }}
              animate={{ x: 0, opacity: 1, rotate: link.rotate }}
              transition={{ 
                delay: i * 0.15,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.02,
                rotate: link.rotate * -1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ 
                scale: 0.95,
                rotate: link.rotate * 2
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-4">
                {link.icon}
                <span className="text-base sm:text-xl">{link.title}</span>
              </span>
              <div 
                className={`absolute inset-0 ${link.color} opacity-30 animate-glitch-fast mix-blend-hard-light`}
                style={{ 
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                  animationDelay: `${link.delay + 0.2}s`,
                  filter: 'contrast(200%) brightness(150%) hue-rotate(45deg)',
                  mixBlendMode: 'hard-light'
                }}
              />
              <div 
                className={`absolute inset-0 animate-glitch-slow mix-blend-overlay`}
                style={{ 
                  background: `repeating-linear-gradient(
                    ${Math.random() * 360}deg,
                    ${link.color} 0%,
                    transparent 2px,
                    ${link.color} 4px
                  )`,
                  opacity: 0.1,
                  animationDelay: `${link.delay + 0.1}s`
                }}
              />
            </motion.a>
          ))}
        </div>

        <motion.footer
          className="mt-16 text-center font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-sm text-nihil-primary animate-pulse">
            © 2025 <span className="text-nihil-accent">P-Word</span> {' // '}
            <span className="text-nihil-secondary">404_REALITY_NOT_FOUND</span>
          </p>
        </motion.footer>
      </div>
    </main>
  )
}
