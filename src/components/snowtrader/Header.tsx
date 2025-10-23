'use client';

import Link from 'next/link';
import { Search, Snowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Snowflake className="w-8 h-8 text-primary" strokeWidth={2.5} />
            <span className="text-xl font-bold tracking-tight">SNOWTRADER</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Browse
            </Link>
            <Link href="/sell" className="text-sm font-medium hover:text-primary transition-colors">
              Sell
            </Link>
            <Link href="/parts" className="text-sm font-medium hover:text-primary transition-colors">
              Parts
            </Link>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-md hidden lg:block">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Find your perfect sled..."
                className="pl-10 bg-muted/50 border-border"
              />
            </div>
          </div>

          {/* CTA Button */}
          <Link href="/sell">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-[var(--radius-button)]">
              List Your Sled
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
