import { motion } from 'framer-motion';

const steps = [
  {
    num: "01",
    title: "Upload Your Dataset",
    desc: "Drag and drop your customer transaction CSV or Excel file. We securely process the data and prepare it for ML analysis."
  },
  {
    num: "02",
    title: "AI & ML Processing",
    desc: "Our model calculates RFM metrics (Recency, Frequency, Monetary value) and applies KMeans clustering automatically."
  },
  {
    num: "03",
    title: "Discover Segments",
    desc: "View clear, actionable segment tags (Champions, Loyalists, At Risk, Hibernating) to tailor your marketing strategies."
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-32 w-full border-t border-border/40 relative">
      <div className="max-w-[1000px] mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-textPrimary mb-4">How It Works</h2>
          <p className="text-textSecondary text-lg max-w-2xl mx-auto">
            A seamless three-step process built on robust machine learning to give you customer clarity.
          </p>
        </div>

        <div className="relative flex flex-col gap-12">
          {/* Vertical Line */}
          <div className="absolute left-[39px] top-6 bottom-6 w-px bg-border/60 hidden md:block"></div>
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="flex flex-col md:flex-row gap-6 md:gap-12 items-start relative"
            >
              <div className="w-20 h-20 shrink-0 bg-surface border border-border rounded-2xl flex flex-col items-center justify-center relative z-10 group hover:border-accent transition-colors">
                <span className="text-accent text-xl font-bold">{step.num}</span>
              </div>
              <div className="glass-panel p-8 rounded-2xl border border-border flex-1 hover:-translate-y-1 transition-transform">
                <h3 className="text-xl font-bold text-textPrimary mb-3">{step.title}</h3>
                <p className="text-textSecondary leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
