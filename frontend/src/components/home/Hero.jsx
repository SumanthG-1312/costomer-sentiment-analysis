import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero = () => {
  const [stats, setStats] = useState({
    customers: '12,842',
    accuracy: '94.2%',
    segments: '4',
    datasetName: 'Online Retail (UK)'
  });

  useEffect(() => {
    const lastResult = localStorage.getItem('lastAnalysis');
    if (lastResult) {
      const data = JSON.parse(lastResult);
      setStats({
        customers: data.metrics.Total_Customers.toLocaleString(),
        accuracy: '98.1%', // Based on the Confidence Index in UploadSection
        segments: Object.keys(data.distribution).length.toString(),
        datasetName: 'Last Uploaded Dataset'
      });
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] w-full flex items-center overflow-hidden pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6 w-full flex flex-col md:flex-row items-center justify-between z-10 gap-12">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full text-left"
        >
          <p className="text-sm font-semibold text-textSecondary uppercase tracking-widest mb-4">
            Customer Intelligence Platform
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-textPrimary leading-[1.1] mb-6 tracking-tight">
            Segment Your Customers<br/>
            with Precision
          </h1>
          <p className="text-lg md:text-xl text-textSecondary mb-10 max-w-xl leading-relaxed">
            Understand behavioral patterns using real transaction data. Transform raw datasets into actionable customer insights.
          </p>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link to="/upload" className="bg-accent text-background font-semibold py-3.5 px-8 rounded-xl hover:bg-opacity-90 transition-all text-center w-full sm:w-auto">
              Upload Dataset
            </Link>
            <button className="bg-transparent border border-border text-textPrimary font-semibold py-3.5 px-8 rounded-xl bg-surface/30 backdrop-blur-sm hover:bg-surface/60 transition-all text-center w-full sm:w-auto">
              View Demo
            </button>
          </div>
          
          <p className="mt-8 text-sm text-textSecondary font-medium">
            Dataset: {stats.datasetName} · {stats.customers} customers analyzed
          </p>
        </motion.div>

        {/* Right Visual / Floating Stats */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative w-full h-[500px] hidden md:block"
        >
          
          {/* Top Right Stat */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 right-0 glass-panel border border-border rounded-xl p-6 w-64"
          >
            <p className="text-4xl font-bold text-textPrimary mb-1">+{stats.accuracy}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Segmentation Accuracy</p>
          </motion.div>

          {/* Bottom Right Stat */}
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-20 right-10 glass-panel border border-border rounded-xl p-6 w-52"
          >
            <p className="text-4xl font-bold text-textPrimary mb-1">{stats.customers}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Customers Processed</p>
          </motion.div>

          {/* Bottom Left Stat */}
          <motion.div 
            animate={{ y: [0, -8, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-36 left-0 glass-panel border border-border rounded-xl p-6 pr-12"
          >
            <div className="flex items-center gap-3 mb-1">
              <div className="w-6 h-6 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
              </div>
              <p className="text-4xl font-bold text-textPrimary">{stats.segments}</p>
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-textSecondary">Active Segments</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
