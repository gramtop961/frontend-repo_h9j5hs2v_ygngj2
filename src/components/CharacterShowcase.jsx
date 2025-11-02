import { motion } from 'framer-motion';
import { Flame, Shield, Heart } from 'lucide-react';

const characters = [
  {
    name: 'Yuji Itadori',
    title: 'Vessel of Sukuna',
    color: 'from-pink-500/30 to-red-500/30',
    badge: 'Black Flash Prodigy',
    stats: [
      { label: 'Power', value: 86, icon: Flame },
      { label: 'Defense', value: 74, icon: Shield },
      { label: 'Resolve', value: 95, icon: Heart },
    ],
    blurb:
      'A kind soul with monstrous physicality. Fights to give others a proper death.',
  },
  {
    name: 'Megumi Fushiguro',
    title: 'Ten Shadows Technique',
    color: 'from-indigo-500/30 to-blue-500/30',
    badge: 'Domain Innovator',
    stats: [
      { label: 'Power', value: 78, icon: Flame },
      { label: 'Defense', value: 82, icon: Shield },
      { label: 'Resolve', value: 88, icon: Heart },
    ],
    blurb:
      'A tactician who summons shikigami and bends the battlefield to his will.',
  },
  {
    name: 'Satoru Gojo',
    title: 'The Strongest',
    color: 'from-cyan-500/30 to-emerald-500/30',
    badge: 'Limitless + Six Eyes',
    stats: [
      { label: 'Power', value: 100, icon: Flame },
      { label: 'Defense', value: 100, icon: Shield },
      { label: 'Resolve', value: 92, icon: Heart },
    ],
    blurb:
      'Infinity between you and defeat. A teacher who laughs in the face of curses.',
  },
];

export default function CharacterShowcase() {
  return (
    <section id="characters" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Fan-Favorite Sorcerers</h2>
            <p className="mt-1 text-white/70">Stats are purely for fun — argue with friends responsibly.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characters.map((c, idx) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`rounded-2xl border border-white/10 bg-gradient-to-br ${c.color} p-6 backdrop-blur`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                  <p className="text-sm text-white/70">{c.title}</p>
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90">
                  {c.badge}
                </span>
              </div>

              <p className="mt-4 text-sm leading-6 text-white/80">{c.blurb}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {c.stats.map((s) => (
                  <div key={s.label} className="rounded-xl bg-black/30 p-3">
                    <div className="flex items-center gap-2 text-white/80">
                      <s.icon className="h-4 w-4" />
                      <span className="text-xs">{s.label}</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-2 rounded-full bg-white"
                        style={{ width: `${s.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
