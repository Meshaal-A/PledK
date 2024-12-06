import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-2xl font-bold text-white">PledgeIt</span>
            </div>
            <p className="mt-4 text-gray-400">
              Connecting passionate volunteers with meaningful opportunities to make a difference in their communities.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a></li>
              <li><a href="#opportunities" className="text-gray-400 hover:text-white">Opportunities</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-white">Impact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">support@pledgeit.com</li>
              <li className="text-gray-400">1-800-PLEDGE-IT</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-center">
            © {new Date().getFullYear()} PledgeIt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}