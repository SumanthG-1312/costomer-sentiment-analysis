import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import { LogIn, Loader2 } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Logged in successfully');
      navigate("/"); // Redirect to Home as requested
    } catch (err) {
      console.error(err.message);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log("Google Login:", result.user);
      navigate("/"); // Redirect to Home as requested
    } catch (err) {
      console.error(err.message);
      setError('Google login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="glass-panel p-8 rounded-xl w-full max-w-[400px]">
        <h2 className="text-3xl font-bold text-textPrimary mb-2 text-center font-sans tracking-tight">Login</h2>
        <p className="text-textSecondary text-center mb-8 font-medium">Welcome back! Sign in to access your dashboard.</p>
        
        {error && (
          <div className="text-red-400 bg-red-400/10 p-3 rounded mb-4 text-sm text-center border border-red-500/20">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-xs text-textSecondary uppercase tracking-widest pl-1 font-semibold">Email Address</label>
            <input 
              type="email" 
              placeholder="name@example.com" 
              required
              disabled={loading}
              className="w-full bg-surface border border-border p-3.5 rounded-xl text-textPrimary outline-none focus:border-accent transition-all placeholder:text-textSecondary/40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs text-textSecondary uppercase tracking-widest pl-1 font-semibold">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              required
              disabled={loading}
              className="w-full bg-surface border border-border p-3.5 rounded-xl text-textPrimary outline-none focus:border-accent transition-all placeholder:text-textSecondary/40"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading || !email || !password}
            className="w-full bg-accent text-background font-bold py-4 rounded-xl hover:bg-opacity-90 disabled:opacity-50 transition-all flex items-center justify-center gap-2 mt-2 shadow-lg shadow-accent/20"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><LogIn className="w-5 h-5" /> Sign In</>}
          </button>
        </form>

        <div className="my-8 flex items-center">
          <div className="flex-1 border-t border-border"></div>
          <span className="px-4 text-textSecondary text-xs uppercase tracking-widest font-bold">Or</span>
          <div className="flex-1 border-t border-border"></div>
        </div>

        <button 
          onClick={handleGoogleLogin} 
          disabled={loading}
          className="w-full bg-white text-black font-bold py-3.5 rounded-xl hover:bg-gray-100 disabled:opacity-50 transition-all flex items-center justify-center gap-3"
        >
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>

        <p className="text-center text-textSecondary mt-8 text-sm font-medium">
          Don't have an account? <Link to="/signup" className="text-accent hover:underline font-bold">Sign Up Free</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
