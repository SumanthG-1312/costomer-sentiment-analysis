import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent flex items-center justify-center">
            <span className="text-accent font-bold text-lg">S</span>
          </div>
          <span className="text-textPrimary font-semibold text-xl tracking-tight">Segmanta</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-textSecondary">
          <Link to="/#about" className="hover:text-textPrimary transition-colors">Team</Link>
          <Link to="/#contact" className="hover:text-textPrimary transition-colors">Contact</Link>
        </div>
        <div className="flex items-center space-x-4">
          {currentUser ? (
            <>
              <Link to="/upload" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">Workspace</Link>
              <button onClick={logout} className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors pl-4">Sign In</Link>
              <Link to="/signup" className="text-sm font-medium bg-accent text-background px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors">Get Started</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
