import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Copy, Check, ExternalLink, Sparkles, User, Calendar, Link as LinkIcon, Trash2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface GeneratedLink {
  id: string;
  title: string;
  name: string;
  event: string;
  url: string;
  createdAt: string;
}

export const Admin: React.FC = () => {
  const [guestTitle, setGuestTitle] = useState('Mr.');
  const [guestName, setGuestName] = useState('');
  const [selectedEvent, setSelectedEvent] = useState('poruwa');
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [recentLinks, setRecentLinks] = useState<GeneratedLink[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('wedding_generated_links');
    if (saved) {
      try {
        setRecentLinks(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse recent links', e);
      }
    }
  }, []);

  const saveRecentLinks = (links: GeneratedLink[]) => {
    setRecentLinks(links);
    localStorage.setItem('wedding_generated_links', JSON.stringify(links));
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) {
      toast.error('Please enter a guest name');
      return;
    }

    // Build URL with params
    const baseUrl = window.location.origin;
    const params = new URLSearchParams();
    params.append('title', guestTitle);
    params.append('name', guestName.trim());
    params.append('event', selectedEvent);

    const fullUrl = `${baseUrl}/?${params.toString()}`;
    setGeneratedUrl(fullUrl);
    setCopied(false);

    // Add to recent links
    const newLink: GeneratedLink = {
      id: Date.now().toString(),
      title: guestTitle,
      name: guestName.trim(),
      event: selectedEvent,
      url: fullUrl,
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    };

    const updatedLinks = [newLink, ...recentLinks.filter(l => l.url !== fullUrl)].slice(0, 15);
    saveRecentLinks(updatedLinks);
    toast.success('Invitation link generated successfully!');
  };

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      toast.success('Link copied to clipboard!');
      setTimeout(() => setCopied(false), 3000);
    }).catch(() => {
      toast.error('Failed to copy link. Please select and copy manually.');
    });
  };

  const handleDeleteLink = (id: string) => {
    const filtered = recentLinks.filter(l => l.id !== id);
    saveRecentLinks(filtered);
    toast.success('Link removed from history');
  };

  const getEventLabel = (evt: string) => {
    switch (evt) {
      case 'poruwa': return 'Poruwa Ceremony & Reception Function';
      case 'homecoming': return 'Homecoming Function';
      case 'both': return 'Both Functions';
      default: return evt;
    }
  };

  return (
    <div className="min-h-screen bg-brand-ivory py-12 px-4 sm:px-6 lg:px-8 font-sans text-stone-800 relative overflow-hidden selection:bg-brand-beige-deep/20">
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-radial from-brand-beige/20 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto">
        {/* Back to main website button */}
        <div className="mb-8 flex justify-between items-center">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/80 border border-brand-beige/40 text-stone-600 hover:text-brand-beige-deep hover:bg-white transition-all shadow-sm font-medium text-sm group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Invitation
          </a>
          <span className="px-4 py-1.5 rounded-full bg-brand-champagne border border-brand-beige/30 text-brand-beige-deep text-xs font-bold uppercase tracking-widest shadow-sm">
            Admin Dashboard
          </span>
        </div>

        {/* Main Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />
            <span className="text-brand-beige-deep uppercase tracking-[0.5em] text-xs font-bold drop-shadow-sm">Invitation Generator</span>
            <Sparkles className="w-5 h-5 text-brand-gold animate-pulse" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-display text-stone-800 tracking-tight mb-4 drop-shadow-sm">
            Wedding <span className="italic font-light text-brand-beige-deep">Admin Panel</span>
          </h1>
          <p className="text-stone-500 font-serif italic text-lg max-w-xl mx-auto">
            Generate personalized invitation links for your guests with specific event access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Generator Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-2xl p-8 sm:p-10 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(176,137,104,0.15)] relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brand-champagne via-brand-beige-deep to-brand-champagne" />

            <form onSubmit={handleGenerate} className="space-y-8">
              {/* Guest Title & Name */}
              <div className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 flex items-center gap-2 ml-1">
                    <User className="w-4 h-4 text-brand-beige-deep" />
                    Guest Title
                  </label>
                  <select
                    value={guestTitle}
                    onChange={(e) => setGuestTitle(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-stone-200/80 focus:ring-2 focus:ring-brand-beige/30 focus:border-brand-beige-deep/40 outline-none transition-all font-serif text-lg shadow-inner text-stone-800 cursor-pointer"
                  >
                    <option value="Mr.">Mr.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Miss">Miss</option>
                    <option value="Mr. & Mrs.">Mr. & Mrs.</option>
                    <option value="Dr.">Dr.</option>
                    <option value="Prof.">Prof.</option>
                    <option value="Family">Family</option>
                    <option value="Rev.">Rev.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-3 flex items-center gap-2 ml-1">
                    <User className="w-4 h-4 text-brand-beige-deep" />
                    Guest Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter guest name..."
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full bg-white px-6 py-4 rounded-full border border-stone-200/80 focus:ring-2 focus:ring-brand-beige/30 focus:border-brand-beige-deep/40 outline-none transition-all font-serif italic text-lg shadow-inner text-stone-800 placeholder:text-stone-400"
                  />
                </div>
              </div>

              {/* Event Invitation Selection */}
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-bold text-stone-500 mb-4 flex items-center gap-2 ml-1">
                  <Calendar className="w-4 h-4 text-brand-beige-deep" />
                  Event Invitation
                </label>
                <div className="space-y-3">
                  {[
                    { id: 'poruwa', label: 'Poruwa Ceremony & Reception Function', desc: 'Senuri Grand Castello, Divulapitiya' },
                    { id: 'homecoming', label: 'Homecoming Function', desc: 'Jetwing Blue, Negombo' },
                    { id: 'both', label: 'Both Functions', desc: 'Access to all wedding & homecoming celebrations' },
                  ].map((evt) => (
                    <label
                      key={evt.id}
                      onClick={() => setSelectedEvent(evt.id)}
                      className={`flex items-center justify-between p-5 rounded-2xl border cursor-pointer transition-all ${
                        selectedEvent === evt.id
                          ? 'bg-brand-champagne/40 border-brand-beige-deep shadow-md'
                          : 'bg-white/50 border-stone-200/60 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          selectedEvent === evt.id ? 'border-brand-beige-deep bg-brand-beige-deep' : 'border-stone-300 bg-white'
                        }`}>
                          {selectedEvent === evt.id && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                        <div>
                          <span className="font-serif font-medium text-stone-800 block text-lg">{evt.label}</span>
                          <span className="text-xs text-stone-500 font-sans">{evt.desc}</span>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-stone-800 text-brand-champagne py-5 rounded-full font-sans tracking-[0.3em] font-bold text-xs uppercase hover:bg-stone-900 transition-all shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.25)] active:scale-[0.98] flex items-center justify-center gap-3"
              >
                <LinkIcon className="w-4 h-4 text-brand-gold" />
                Generate Invitation Link
              </button>
            </form>
          </motion.div>

          {/* Generated Link & History */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            {/* Active Generated Link Box */}
            <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(176,137,104,0.15)] relative overflow-hidden">
              <h3 className="font-serif text-2xl text-stone-800 mb-4 flex items-center gap-2">
                <LinkIcon className="w-5 h-5 text-brand-beige-deep" />
                Generated Link
              </h3>
              
              {generatedUrl ? (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 bg-stone-50 rounded-2xl border border-stone-200/80 word-break break-all font-mono text-xs text-stone-600 shadow-inner">
                    {generatedUrl}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleCopy(generatedUrl)}
                      className="flex-1 bg-brand-beige-deep text-white py-3.5 px-6 rounded-full font-sans tracking-[0.2em] font-bold text-[11px] uppercase hover:bg-brand-beige-deep/90 transition-all shadow-md flex items-center justify-center gap-2 active:scale-95"
                    >
                      {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                      {copied ? 'Copied!' : 'Copy Link'}
                    </button>
                    <a
                      href={generatedUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-stone-100 text-stone-700 py-3.5 px-6 rounded-full font-sans tracking-[0.2em] font-bold text-[11px] uppercase hover:bg-stone-200 transition-all shadow-sm flex items-center justify-center gap-2 border border-stone-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Test Link
                    </a>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 border-2 border-dashed border-stone-200 rounded-2xl">
                  <p className="text-stone-400 font-serif italic text-base">
                    Fill the form and click generate to create a link.
                  </p>
                </div>
              )}
            </div>

            {/* Recent Links History */}
            <div className="bg-white/80 backdrop-blur-2xl p-8 rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(176,137,104,0.15)] relative overflow-hidden">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-xl text-stone-800 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-brand-beige-deep" />
                  Recent Links
                </h3>
                {recentLinks.length > 0 && (
                  <span className="text-xs font-sans text-stone-400">{recentLinks.length} generated</span>
                )}
              </div>

              {recentLinks.length > 0 ? (
                <div className="space-y-4 max-h-[360px] overflow-y-auto pr-2 scrollbar-thin">
                  {recentLinks.map((link) => (
                    <div 
                      key={link.id} 
                      className="p-4 rounded-2xl bg-stone-50 border border-stone-100 hover:border-brand-beige/40 transition-all group relative"
                    >
                      <div className="flex justify-between items-start mb-1 pr-8">
                        <span className="font-serif font-bold text-stone-800 text-base">
                          {link.title} {link.name}
                        </span>
                        <span className="text-[10px] text-stone-400 font-sans">{link.createdAt}</span>
                      </div>
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-champagne/60 text-brand-beige-deep text-[10px] font-medium mb-3">
                        {getEventLabel(link.event)}
                      </span>
                      <div className="flex items-center gap-2 pt-2 border-t border-stone-200/60">
                        <button
                          onClick={() => handleCopy(link.url)}
                          className="text-[11px] font-sans font-bold text-brand-beige-deep hover:underline flex items-center gap-1"
                        >
                          <Copy className="w-3 h-3" /> Copy URL
                        </button>
                        <span className="text-stone-300">•</span>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-sans font-bold text-stone-600 hover:text-stone-900 flex items-center gap-1"
                        >
                          <ExternalLink className="w-3 h-3" /> Open
                        </a>
                      </div>
                      <button
                        onClick={() => handleDeleteLink(link.id)}
                        className="absolute top-4 right-4 text-stone-400 hover:text-red-500 transition-colors p-1"
                        title="Delete link"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 border border-dashed border-stone-200 rounded-2xl">
                  <p className="text-stone-400 font-serif italic text-sm">No recent links generated yet.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
