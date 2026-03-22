const ContactSection = () => {
  return (
    <section id="contact" className="py-32 w-full border-t border-border/40 pb-40">
      <div className="max-w-[800px] mx-auto px-6 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-textPrimary mb-4">Get in Touch</h2>
        <p className="text-textSecondary mb-16 text-lg">
          Have any questions? We're here to help.
        </p>

        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-sm font-semibold text-textSecondary mb-2 uppercase tracking-wider">Email Us</h3>
            <a href="mailto:sumanthgajjela@gmail.com" className="text-textPrimary font-medium text-lg hover:text-accent transition-colors break-words">
              sumanthgajjela@gmail.com
            </a>
          </div>
          
          <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-sm font-semibold text-textSecondary mb-2 uppercase tracking-wider">Live Chat</h3>
            <p className="text-textPrimary font-medium text-lg cursor-pointer hover:text-accent transition-colors">
              Chat with our team
            </p>
          </div>

          <div className="glass-panel p-6 rounded-xl hover:-translate-y-1 transition-all">
            <h3 className="text-sm font-semibold text-textSecondary mb-2 uppercase tracking-wider">Call</h3>
            <p className="text-textPrimary font-medium text-lg cursor-pointer hover:text-accent transition-colors">
              Schedule a Call
            </p>
          </div>
        </div>

        <a 
          href="https://www.linkedin.com/in/sumanth-gajjela-b6650b26b/" 
          target="_blank" 
          rel="noreferrer"
          className="text-accent text-lg font-medium hover:underline transition-all"
        >
          Follow us on LinkedIn &rarr;
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
