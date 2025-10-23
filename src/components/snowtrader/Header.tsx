'use client';

import Link from 'next/link';
import { Search, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-all group">
            <Snowflake className="w-8 h-8 text-primary group-hover:rotate-180 transition-transform duration-500" strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">SNOWTRADER</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Browse
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/sell" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Sell
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
            <Link href="/parts" className="text-sm font-semibold hover:text-primary transition-colors relative group">
              Parts
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden lg:block">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input
                type="text"
                placeholder="Find your perfect sled..."
                className="pl-10 bg-muted/50 border-border focus:border-primary transition-all"
              />
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/sell">
            <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 py-2.5 rounded-lg shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30 transition-all hover:-translate-y-0.5">
              List Your Sled
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
