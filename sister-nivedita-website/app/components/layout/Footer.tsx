import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';

/**
 * Footer component for the website
 * Contains quick links, contact information, and social media links
 */
const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Campus', href: '/campus' },
    { name: 'Contact', href: '/contact' },
  ];

  const contactInfo = {
    address: 'Ashoknagar, Bengaluru - 560 050',
    phone: '+91 XXXXXXXXXX', // Replace with actual phone number
    email: 'info@sisternivedita.edu.in', // Replace with actual email
  };

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sister Nivedita Convent</h3>
            <p className="text-sm">
              Providing quality education since 1990, nurturing future leaders with values and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-sm hover:text-accent-light transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic text-sm space-y-2">
              <p>{contactInfo.address}</p>
              <p>Phone: {contactInfo.phone}</p>
              <p>Email: {contactInfo.email}</p>
            </address>
            
            {/* Social Media Links */}
            <div className="mt-4">
              <h4 className="text-sm font-bold mb-2">Follow Us</h4>
              <a
                href="https://www.facebook.com/nivedita.convent.71"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-2xl hover:text-accent-light transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>© {new Date().getFullYear()} Sister Nivedita Convent. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
