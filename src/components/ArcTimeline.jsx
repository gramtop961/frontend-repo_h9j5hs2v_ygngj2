import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

const arcs = [
  {
    name: 'Cursed Child & Beginnings',
    era: 'Year 1',
    description:
      'Where it all starts — the spark of a revolution against curses and fate.',
  },
  {
    name: 'Vs. Mahito',
    era: 'Year 1 - Fall',
    description:
      'A cruel lesson on souls, shaping our heroes in brutal, unforgettable ways.',
  },
  {
    name: 'Kyoto Goodwill Event',
    era: 'Year 1 - Winter',
    description:
      'Allied schools clash. Friendships tested. Rivalries forged in cursed energy.',
  },
  {
    name: 'Shibuya Incident',
    era: 'Halloween Night',
    description:
      'A city becomes a battlefield. Stakes rise. Legends are rewritten.',
  },
  {
    name: 'Culling Game',
    era: 'Aftermath',
    description:
      'A deadly ritual that reshapes the power map of sorcerers and curses alike.',
  },
];

export default function ArcTimeline() {
  return (
    <section id="arcs" className="relative">
      <div className="mx-auto max-w-7xl px-6 pb-10 pt-4 lg:px-8">
        <div className="mb-8 flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-white" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Legendary Story Arcs</h2>
        </div>

        <ol className="relative border-l border-white/15 pl-6">
          {arcs.map((arc, idx) => (
            <motion.li
              key={arc.name}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: idx * 0.06 }}
              className="mb-8 ml-2"
            >
              <div className="absolute -left-2 mt-1 h-3 w-3 rounded-full bg-white" />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{arc.name}</h3>
                  <span className="text-xs text-white/70">{arc.era}</span>
                </div>
                <p className="mt-2 text-sm text-white/80">{arc.description}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
