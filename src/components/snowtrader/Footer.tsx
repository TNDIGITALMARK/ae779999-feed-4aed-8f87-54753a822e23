'use client';

import Link from 'next/link';
import { Snowflake } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-border mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Snowflake className="w-7 h-7 text-primary" strokeWidth={2.5} />
              <span className="text-lg font-bold tracking-tight">SNOWTRADER</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The premier marketplace for snowmobile enthusiasts. Buy, sell, and discover quality machines.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h6 className="font-semibold text-sm mb-4">Explore</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Browse Sleds
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Parts & Gear
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sell Your Sled
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-semibold text-sm mb-4">Contact</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="font-semibold text-sm mb-4">Legal</h6>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} SnowTrader. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
