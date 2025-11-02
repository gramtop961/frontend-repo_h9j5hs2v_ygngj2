import { motion } from 'framer-motion';
import { Sparkles, Play, BookOpen } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-fuchsia-600/20 to-orange-500/30 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span>Welcome, Sorcerer. Power up your domain.</span>
          </div>
          <h1 className="mt-6 font-extrabold tracking-tight text-white text-4xl sm:text-6xl">
            Jujutsu Kaisen Lovers
          </h1>
          <p className="mt-4 text-lg leading-7 text-white/80 sm:text-xl">
            Dive into character builds, iconic arcs, and cursed techniques. Crafted for fans who want style, speed, and sorcery in one place.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#characters"
              className="group inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 font-semibold text-gray-900 shadow-lg shadow-white/20 transition hover:translate-y-[-2px] hover:shadow-xl"
            >
              Explore Characters
              <Play className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <a
              href="#arcs"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <BookOpen className="h-4 w-4" /> Story Arcs
            </a>
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {["Cursed Energy", "Domain Expansion", "Black Flash"].map((title, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur hover:from-white/20 hover:to-white/10"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <Sparkles className="h-5 w-5 text-yellow-300" />
              </div>
              <p className="mt-2 text-sm text-white/70">
                {title === 'Cursed Energy' && 'Master the fundamentals: control, flow, and reinforcement.'}
                {title === 'Domain Expansion' && 'Perfect your technique and guarantee hits within your territory.'}
                {title === 'Black Flash' && 'A momentary distortion of space when cursed energy strikes within 0.000001 seconds.'}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
