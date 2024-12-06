import { Heart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Heart className="h-8 w-8 text-rose-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">PledgeIt</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-rose-600">How It Works</a>
            <a href="#opportunities" className="text-gray-600 hover:text-rose-600">Opportunities</a>
            <a href="#impact" className="text-gray-600 hover:text-rose-600">Impact</a>
            <button className="bg-rose-600 text-white px-4 py-2 rounded-lg hover:bg-rose-700">
              Get Started
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-rose-600">How It Works</a>
            <a href="#opportunities" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Opportunities</a>
            <a href="#impact" className="block px-3 py-2 text-gray-600 hover:text-rose-600">Impact</a>
            <button className="w-full text-left px-3 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
}