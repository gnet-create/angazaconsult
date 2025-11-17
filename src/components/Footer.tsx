import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <MapPin size={24} style={{ color: '#61B471' }} className="mb-3" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#61B471' }}>
              Location
            </h3>
            <p className="text-gray-300">Kakamega, Kenya</p>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Mail size={24} style={{ color: '#61B471' }} className="mb-3" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#61B471' }}>
              Email
            </h3>
            <a
              href="mailto:angazaconsult@gmail.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              angazaconsult@gmail.com
            </a>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <Phone size={24} style={{ color: '#61B471' }} className="mb-3" />
            <h3 className="text-lg font-semibold mb-2" style={{ color: '#61B471' }}>
              Phone
            </h3>
            <a
              href="tel:+254712345678"
              className="text-gray-300 hover:text-white transition-colors"
            >
              +254 712 345 678
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex justify-center space-x-6 mb-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Facebook"
            >
              <Facebook size={28} style={{ color: '#61B471' }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram size={28} style={{ color: '#61B471' }} />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} style={{ color: '#61B471' }} />
            </a>
          </div>
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} Angaza Nexus. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
