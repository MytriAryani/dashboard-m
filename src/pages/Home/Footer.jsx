import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t-1 border-[#022122] mt-8 text-white pt-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-3">
        
     
        <div>
          <div className="flex items-center mb-3">
            <img className="w-10 h-10 rounded" src="logo-2.jpg" alt="MITR logo" />
            <p className="text-2xl font-bold ml-2">MITR</p>
          </div>
          <p className="text-gray-400">
            A smart SOS platform designed for safety, privacy & real-time emergency response.
          </p>
        </div>

      
        <div>
          <p className="text-lg font-semibold mb-3">Contact Us</p>
          <div className="flex items-start gap-2 mb-2">
            <Mail className="text-[#04969b]" />
            <p className="text-gray-300">support@mitr.com</p>
          </div>
          <div className="flex items-start gap-2 mb-2">
            <Phone className="text-[#04969b]" />
            <p className="text-gray-300">+91 98765 43210</p>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="text-[#04969b]" />
            <p className="text-gray-300">Pune, Maharashtra, India</p>
          </div>
        </div>

       
        <div>
          <p className="text-lg font-semibold mb-3">Quick Links</p>
          <ul className="space-y-2 text-gray-300">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Live Tracking</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">Device</Link></li>
            <li><Link to="/dashboard" className="hover:text-white">My Account</Link></li>
            <li><Link to="#" className="hover:text-white">Support</Link></li>
          </ul>
        </div>

        
      </div>
      <div className="text-center border-t-1 border-[#022122] pt-2">
        <p>© 2025 MITR SOS. All rights reserved.</p>
      </div>
    </footer>
  );
}
