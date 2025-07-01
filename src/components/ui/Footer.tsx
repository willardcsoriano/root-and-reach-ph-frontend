// src/components/ui/Footer.tsx
import Link from 'next/link';

export const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-gray-300 py-10">
    <div className="container mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <h4 className="font-semibold mb-2 text-white">Root &amp; Reach</h4>
        <p className="text-sm">© {new Date().getFullYear()} Root and Reach PH. All rights reserved.</p>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white">Navigate</h4>
        <ul className="space-y-1 text-sm">
          {['Home', 'About', 'Join', 'Blog', 'Contact'].map((txt) => (
            <li key={txt}>
              <Link
                href={txt === 'Home' ? '/' : `/${txt.toLowerCase()}`}
                className="hover:text-white transition-colors"
              >
                {txt}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white">Resources</h4>
        <ul className="space-y-1 text-sm">
          <li>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-semibold mb-2 text-white">Connect</h4>
        <ul className="flex space-x-4 text-xl">
          {[
            ['Twitter', 'https://twitter.com/rootandreacphp', '🐦'],
            ['Facebook', 'https://facebook.com/rootandreachph', '📘'],
            ['Instagram', 'https://instagram.com/rootandreachph', '📸'],
          ].map(([name, url, emoji]) => (
            <li key={name}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:text-white transition-colors"
              >
                {emoji}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </footer>
);
