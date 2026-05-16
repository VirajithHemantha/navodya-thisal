import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import { FloatingPetals } from './FloatingPetals';

interface HeroProps {
  event?: string | null;
}

export const Hero: React.FC<HeroProps> = ({ event = 'both' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 400]);
  const scale = useTransform(scrollY, [0, 800], [1, 1.1]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-ivory/30">

      {/* Background Image with Parallax & Elegant Overlay */}
      <motion.div
        className="absolute inset-0 z-0 origin-center"
        style={{ y: y1, scale }}
      >
        <img
          src="/IMG_6940.JPG.jpeg"
          alt="Navodya and Thisal"
          className="w-full h-full object-cover opacity-95"
          style={{ objectPosition: 'center 20%' }}
        />
        {/* Sophisticated gradient overlays for dramatic luxury editorial contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ivory via-white/40 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/15 mix-blend-overlay" />
      </motion.div>

      {/* Persistent subtle falling petals in background */}
      <div className="absolute inset-0 z-[5] opacity-70">
        <FloatingPetals />
      </div>

      {/* Elegant Editorial Golden Inner Frame */}
      <div className="absolute inset-5 sm:inset-8 border border-brand-gold/30 rounded-3xl pointer-events-none z-20 hidden sm:block shadow-[inset_0_0_30px_rgba(201,169,110,0.1)]" />
      <div className="absolute inset-6 sm:inset-9 border border-brand-gold/15 rounded-[1.3rem] pointer-events-none z-20 hidden sm:block" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-6 w-full max-w-6xl mt-8 sm:mt-16"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Subtle luxury top decoration */}
          <div className="flex items-center gap-4 mb-6 sm:mb-8">
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-l from-brand-gold to-transparent" />
            <Heart className="w-5 h-5 text-brand-gold fill-brand-gold/30 animate-pulse" />
            <div className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-brand-gold to-transparent" />
          </div>

          {/* Premium Subtitle Badge with Champagne Gold Accent */}
          <div className="mb-6 sm:mb-10 inline-block bg-gradient-to-r from-brand-champagne/90 via-white/95 to-brand-champagne/90 backdrop-blur-md border border-brand-gold/40 px-8 sm:px-10 py-2.5 sm:py-3 rounded-full shadow-[0_10px_30px_rgba(201,169,110,0.2)]">
            <span className="text-stone-900 uppercase tracking-[0.6em] sm:tracking-[0.8em] text-[10px] sm:text-xs font-black block drop-shadow-sm font-sans">
              The Celebration of Love
            </span>
          </div>

          <div className="relative mb-6 sm:mb-12 w-full flex justify-center py-4 sm:py-10 px-2 overflow-visible">
            {/* Exquisite layered backdrop glow for pristine text clarity and luxury mood */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] sm:w-[125%] h-[150%] sm:h-[160%] bg-gradient-radial from-white/95 via-white/85 to-transparent blur-[40px] sm:blur-[70px] rounded-full pointer-events-none" />

            <h1 className="relative text-5xl sm:text-[7.5rem] lg:text-[10.5rem] font-display bg-gradient-to-r from-stone-900 via-brand-mocha to-stone-900 bg-clip-text text-transparent font-extrabold leading-normal sm:leading-[0.85] drop-shadow-[0_4px_16px_rgba(255,255,255,0.9)] tracking-normal sm:tracking-tight overflow-visible py-2">
              Navodya <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-brand-gold via-brand-beige-deep to-brand-gold bg-clip-text text-transparent italic font-bold mx-2 sm:mx-8 text-4xl sm:text-[6.5rem] lg:text-[8.5rem] inline-block -translate-y-1 sm:-translate-y-8 drop-shadow-[0_4px_12px_rgba(201,169,110,0.3)]">&</span>
              <br className="sm:hidden" />
              Thisal
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-12 sm:mb-16 relative z-10 bg-white/80 sm:bg-white/60 px-8 py-4 sm:py-3 rounded-full backdrop-blur-md border border-brand-gold/30 shadow-[0_10px_30px_rgba(201,169,110,0.15)]">
            <div className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
            <p className="text-[1.15rem] sm:text-2xl font-serif italic text-stone-900 font-bold tracking-wide px-2 text-center max-w-xl leading-relaxed drop-shadow-sm">
              Together with our families, we joyfully invite you to join us
            </p>
            <div className="hidden sm:block h-[1px] w-16 bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
          </div>

          {/* Ultra Premium Luxury Date pill - Stunning Dark Gold Contrast */}
          <div className="inline-block relative group mt-2 sm:mt-6 w-full sm:w-auto px-4 sm:px-0">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-gold via-brand-beige-deep to-brand-gold rounded-full blur-md opacity-90 group-hover:opacity-100 transition duration-700 transform group-hover:scale-[1.02] animate-pulse" />
            <div className="relative px-8 sm:px-16 py-4 sm:py-6 bg-stone-900 backdrop-blur-2xl border border-brand-gold/50 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden whitespace-nowrap flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" />
              <span className="relative text-[17px] sm:text-3xl font-serif text-brand-champagne tracking-[0.25em] sm:tracking-[0.45em] font-bold drop-shadow-[0_2px_8px_rgba(245,235,224,0.4)] flex items-center gap-3 sm:gap-4 whitespace-nowrap">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 animate-pulse" />
                {event === 'homecoming' ? '24 . 07 . 2026' : '22 . 07 . 2026'}
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 animate-pulse" />
              </span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Premium Side Decorative Text - Striking Dark Badges */}
      <div className="absolute left-6 sm:left-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-gold/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-champagne font-bold font-sans">
            {event === 'homecoming' ? 'Jetwing Blue • Negombo' : 'Senuri Grand Castello • Divulapitiya'}
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-gold to-transparent" />
      </div>

      <div className="absolute right-6 sm:right-12 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6 z-30">
        <div className="w-[1px] h-28 bg-gradient-to-b from-transparent via-brand-gold to-transparent" />
        <div className="bg-stone-900/90 backdrop-blur-md px-2.5 py-6 rounded-full border border-brand-gold/40 shadow-xl">
          <p className="writing-mode-vertical text-[11px] uppercase tracking-[0.7em] text-brand-champagne font-bold font-sans rotate-180">
            {event === 'homecoming' ? 'Save the Date • July 2026' : 'Save the Date • July 2026'}
          </p>
        </div>
        <div className="w-[1px] h-28 bg-gradient-to-t from-transparent via-brand-gold to-transparent" />
      </div>

      {/* Refined Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 cursor-pointer z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <span className="text-[9px] sm:text-[10px] font-sans uppercase tracking-[0.5em] text-stone-900 font-extrabold bg-gradient-to-r from-brand-champagne via-white to-brand-champagne px-5 py-2 rounded-full border border-brand-gold/40 backdrop-blur-md shadow-lg">Discover</span>
        <div className="w-[1px] h-10 sm:h-16 bg-gradient-to-b from-brand-gold to-transparent animate-bounce" />
      </motion.div>
    </div>
  );
};
