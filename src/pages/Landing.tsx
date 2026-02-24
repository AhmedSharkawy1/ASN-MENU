import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChefHat, Smartphone, Zap } from 'lucide-react';

export default function Landing() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white overflow-hidden selection:bg-[#ff2d55]/30">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#00e5ff]/20 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ff2d55]/20 blur-[120px]" />
      </div>

      <nav className="relative z-10 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-[#00e5ff] to-[#ff2d55] bg-clip-text text-transparent">
          MenuVerse
        </div>
        <div className="flex items-center gap-6">
          <Link to="/login" className="text-sm font-medium hover:text-[#00e5ff] transition-colors">
            Sign In
          </Link>
          <Link
            to="/login"
            className="px-5 py-2.5 text-sm font-medium rounded-full bg-white/10 border border-white/20 hover:bg-white/20 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 backdrop-blur-md"
          >
            Get Started
          </Link>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00e5ff] via-white to-[#ff2d55]">
              Digital Menus
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Build premium, glassmorphic, and highly converting digital menus for your restaurant in minutes. Multi-tenant, real-time orders, and futuristic design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/login"
              className="group relative px-8 py-4 bg-white text-black rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00e5ff] to-[#ff2d55] opacity-0 group-hover:opacity-20 transition-opacity" />
              <span className="relative flex items-center gap-2">
                Start Building <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
            <Link
              to="/demo-restaurant"
              className="px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/5 backdrop-blur-sm transition-colors"
            >
              View Demo Menu
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 max-w-6xl mx-auto">
          {[
            { icon: ChefHat, title: "125+ Themes", desc: "Mix and match layouts, cards, and headers for a unique brand identity." },
            { icon: Zap, title: "Real-time Orders", desc: "Instant notifications and live order tracking powered by Supabase." },
            { icon: Smartphone, title: "Mobile First", desc: "App-like experience with sticky navigation and smooth gestures." }
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors group"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00e5ff]/20 to-[#ff2d55]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
}
