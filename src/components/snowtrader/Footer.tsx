'use client';

import Link from 'next/link';
import { Snowflake, Facebook, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-muted/30 to-muted/50 border-t border-border mt-20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <Snowflake className="w-7 h-7 text-primary group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
              <span className="text-lg font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SNOWTRADER</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The premier marketplace for snowmobile enthusiasts. Buy, sell, and discover quality machines.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-white transition-all group">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-white transition-all group">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center text-primary hover:text-white transition-all group">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h6 className="font-bold text-sm mb-4 uppercase tracking-wide">Explore</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Browse Sleds</span>
                </Link>
              </li>
              <li>
                <Link href="/parts" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Parts & Gear</span>
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Sell Your Sled</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-bold text-sm mb-4 uppercase tracking-wide">Contact</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">FAQ</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="font-bold text-sm mb-4 uppercase tracking-wide">Legal</h6>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center group">
                  <span className="group-hover:translate-x-1 transition-transform">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} SnowTrader. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with ❄️ by passionate riders
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
