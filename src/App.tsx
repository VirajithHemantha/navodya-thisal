import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Phone, MapPin, Calendar, Clock } from "lucide-react";

/**
 * Premium Sri Lankan Wedding Invitation Theme
 * Names: Naween & Nadeesha
 * Background: Cream/Sand
 * Accents: Gold/Brown
 */

const mandalaImage = "/images/mandala_gold.png";
const elephantLeft = "/images/elephant_gold_left.png";
const elephantRight = "/images/elephant_gold_right.png";

function FloatingPetals() {
  const petals = useMemo(() =>
    Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 12 + Math.random() * 10,
      size: 8 + Math.random() * 12,
      rotation: Math.random() * 360,
    })), []);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-amber-200/20"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size * 1.2,
            borderRadius: "50% 5% 50% 5%",
            rotate: p.rotation
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: [0, 1200], opacity: [0, 0.5, 0], rotate: p.rotation + 360 }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "linear" }}
        />
      ))}
    </div>
  );
}

export default function WeddingInvitation() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <main className="h-[100dvh] w-full bg-[#fdfaf5] overflow-hidden relative flex items-center justify-center font-montserrat">
      <FloatingPetals />

      <AnimatePresence mode="wait">
        {!isOpened ? (
          <motion.div
            key="envelope-stage"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{
              opacity: 0,
              scale: 1.1,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="flex flex-col items-center justify-center p-6 relative z-10 w-full"
          >
            {/* Title */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-10">
              <span className="inline-block px-5 py-2 rounded-full bg-amber-50 border border-amber-200 text-[10px] uppercase tracking-[0.5em] text-amber-700 font-bold mb-6">
                Save the Date
              </span>
              <h1 className="font-cinzel text-4xl md:text-5xl text-stone-800 mb-4 tracking-tight">
                Naween & Nadeesha
              </h1>
              <p className="text-stone-500 text-sm tracking-[0.2em] font-light">APRIL 20, 2025</p>
            </motion.div>

            {/* Gatefold Envelope */}
            <div
              className="relative w-full max-w-[400px] aspect-[1/1.4] flex items-center justify-center group cursor-pointer perspective-1000"
              onClick={() => setIsOpened(true)}
            >
              <div className="absolute inset-0 bg-[#fffdfa] rounded-xl shadow-2xl border border-amber-100/50 overflow-hidden" />

              {/* Left Flap */}
              <motion.div
                className="absolute inset-y-0 left-0 w-1/2 bg-[#3a352f] z-20 shadow-[5px_0_15px_rgba(0,0,0,0.3)] origin-left flex items-center justify-end pr-4 overflow-hidden"
                whileHover={{ rotateY: -10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute right-0 top-0 bottom-0 w-1 bg-amber-400/30" />

                {/* Envelope Illustrations */}
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -top-10 -left-10 w-40 h-40 opacity-40 mix-blend-screen"
                  alt=""
                />
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -bottom-10 -left-10 w-40 h-40 opacity-40 mix-blend-screen -rotate-90"
                  alt=""
                />

                <div className="text-amber-200/20 rotate-90 whitespace-nowrap text-xs tracking-[0.5em] uppercase font-bold relative z-10">
                  NAWEEN & NADEESHA
                </div>
              </motion.div>

              {/* Right Flap */}
              <motion.div
                className="absolute inset-y-0 right-0 w-1/2 bg-[#3a352f] z-20 shadow-[-5px_0_15px_rgba(0,0,0,0.3)] origin-right flex items-center justify-start pl-4 overflow-hidden"
                whileHover={{ rotateY: 10 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber-400/30" />

                {/* Envelope Illustrations */}
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -top-10 -right-10 w-40 h-40 opacity-40 mix-blend-screen rotate-90"
                  alt=""
                />
                <img
                  src="/images/envelope_mandala.png"
                  className="absolute -bottom-10 -right-10 w-40 h-40 opacity-40 mix-blend-screen rotate-180"
                  alt=""
                />
              </motion.div>

              {/* The Seal Button */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-24 h-24 rounded-full bg-gradient-to-br from-amber-200 via-amber-100 to-amber-300 shadow-2xl border-4 border-[#3a352f] flex items-center justify-center group-hover:shadow-amber-500/20"
              >
                <div className="text-center">
                  <p className="font-cinzel text-2xl font-bold text-stone-800 leading-none">N&N</p>
                  <div className="h-px w-10 bg-stone-400 mx-auto my-1.5" />
                  <p className="text-[8px] uppercase tracking-[0.3em] font-bold text-stone-600">Open</p>
                </div>
              </motion.div>

              {/* Card Preview inside (Mandala) */}
              <div className="absolute inset-10 opacity-30 flex items-center justify-center">
                <img src={mandalaImage} alt="" className="w-full h-auto animate-spin-slow mix-blend-multiply" style={{ animationDuration: '20s' }} />
              </div>
            </div>

            <p className="mt-8 text-[11px] uppercase tracking-[0.6em] text-stone-400 font-bold animate-pulse">
              Tap to Reveal
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="card-stage"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.3 }}
            className="relative z-10 w-full h-full flex flex-col items-center justify-center p-2 sm:p-4"
          >
            {/* The Main Card */}
            <div className="relative w-full max-w-[450px] max-h-[85vh] bg-[#fffcf7] shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-2xl border-[6px] md:border-[12px] border-white p-3 md:p-6 flex flex-col items-center text-center text-stone-800">

              {/* Background Textures */}
              <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />

              {/* Top Mandala */}
              <img src={mandalaImage} alt="Mandala" className="w-12 h-12 md:w-20 md:h-20 object-contain mix-blend-multiply mb-1 md:mb-2" />

              {/* Side Elephants */}
              <div className="absolute inset-y-0 -left-4 sm:-left-10 md:-left-24 lg:-left-32 flex items-center z-0 pointer-events-none">
                <motion.img
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.6 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  src={elephantLeft}
                  className="w-32 sm:w-20 md:w-32 lg:w-48 h-auto select-none mix-blend-multiply"
                  alt=""
                />
              </div>
              <div className="absolute inset-y-0 -right-4 sm:-right-10 md:-right-24 lg:-right-32 flex items-center z-0 pointer-events-none">
                <motion.img
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 0.6 }}
                  transition={{ delay: 0.8, duration: 1.2 }}
                  src={elephantRight}
                  className="w-32 sm:w-20 md:w-32 lg:w-48 h-auto select-none mix-blend-multiply"
                  alt=""
                />
              </div>

              {/* Content Container */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-1 md:space-y-2 relative z-10 w-full overflow-hidden">
                <p className="text-[7px] md:text-[9px] tracking-[0.2em] font-medium text-stone-500 uppercase">Loving daughter of</p>
                <p className="text-[9px] md:text-[11px] font-cinzel">Mr. & Mrs. S. K. Ananda Dias,</p>

                <h2 className="text-2xl md:text-5xl font-playball text-amber-700 leading-tight">Naween</h2>

                <p className="text-lg md:text-2xl font-playball italic text-stone-400">&</p>

                <p className="text-[7px] md:text-[9px] tracking-[0.2em] font-medium text-stone-500 uppercase">Loving son of</p>
                <p className="text-[9px] md:text-[11px] font-cinzel">Mr. & Mrs. Premasiri Kaluarachchi,</p>

                <h2 className="text-2xl md:text-5xl font-playball text-amber-700 leading-tight">Nadeesha</h2>

                <div className="py-1 space-y-0.5 md:space-y-1">
                  <p className="text-[8px] md:text-[10px] tracking-widest font-semibold text-stone-600">Together with their families</p>
                  <p className="text-[7px] md:text-[8px] italic text-stone-500">request the honor of your presence</p>
                  <div className="w-12 h-px bg-stone-200 mx-auto" />
                  <p className="text-[7px] md:text-[8px] tracking-[0.1em] font-bold text-stone-400 uppercase">Mr. & Mrs. / Mr. / Mrs. / Miss / Family</p>
                </div>

                <div className="py-1 space-y-1 md:space-y-2">
                  <div className="flex flex-col items-center">
                    <p className="text-[8px] md:text-[10px] font-cinzel tracking-[0.2em] font-bold uppercase">SUNDAY</p>
                    <p className="text-xl md:text-3xl font-cinzel text-amber-900 leading-none">20</p>
                    <p className="text-[8px] md:text-[10px] font-cinzel tracking-[0.2em] font-bold uppercase">April 2025</p>
                  </div>

                  <div className="space-y-0">
                    <h3 className="text-[10px] md:text-sm font-cinzel tracking-wider text-stone-800 uppercase font-bold">Hotel Neits 71</h3>
                    <p className="text-[7px] md:text-[8px] text-stone-500 uppercase tracking-widest leading-none"></p>
                  </div>

                  <div className="flex flex-col items-center gap-0.5">
                    <div className="flex items-center justify-center gap-1 text-[7px] md:text-[9px] font-semibold tracking-widest text-stone-700">
                      <Clock className="w-2 h-2 text-amber-600" />
                      <span>10:00AM - 04:00PM</span>
                    </div>
                    <p className="text-[6px] md:text-[7px] font-bold text-amber-700 tracking-[0.1em] uppercase">
                      (PORUWA CEREMONY AT 10:45 AM)
                    </p>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="pt-2 border-t border-stone-100 flex flex-row items-center justify-center gap-4 md:gap-8 w-full">
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-stone-100 p-0.5 border border-stone-200 rounded">
                      <div
                        className="w-full h-full bg-[url('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://www.hotelneits.com/')] bg-cover opacity-80 cursor-pointer"
                        onClick={() => window.open('http://www.hotelneits.com/', '_blank')}
                      />
                    </div>
                    <p className="text-[5px] tracking-[0.05em] font-bold text-white uppercase bg-amber-800 px-1 rounded-full">Location</p>
                  </div>

                  <div className="text-left space-y-0.5">
                    <p className="text-[7px] tracking-[0.1em] font-bold text-stone-400 uppercase">RSVP (Regrets only)</p>
                    <div className="text-[7px] md:text-[8px] font-semibold text-stone-600 leading-tight">
                      <p>Bride: 076 4609592</p>
                      <p>Groom: 077 2174992</p>
                    </div>
                  </div>
                </div>
              </div>


              {/* Return Button inside the card now */}
              <button
                onClick={() => setIsOpened(false)}
                className="mt-2 text-stone-400 hover:text-stone-600 transition-colors text-[7px] uppercase tracking-[0.2em] flex items-center justify-center gap-1 group w-full pt-1 border-t border-stone-50"
              >
                <div className="h-px w-3 bg-stone-200 group-hover:w-6 transition-all" />
                Return
                <div className="h-px w-3 bg-stone-200 group-hover:w-6 transition-all" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
      `}} />
    </main>
  );
}
