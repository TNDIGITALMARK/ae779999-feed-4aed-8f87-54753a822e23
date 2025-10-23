'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { ListingCard } from '@/components/snowtrader/ListingCard';
import { mockListings } from '@/lib/mock-data';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[500px] lg:h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-snowmobile.jpg"
            alt="Snowmobile adventure"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 uppercase tracking-wide">
            UNLEASH YOUR WINTER<br />ADVENTURE
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-base rounded-[var(--radius-button)]">
                Shop Sleds
              </Button>
            </Link>
            <Link href="/sell">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-6 text-base rounded-[var(--radius-button)]">
                List Your Sled
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Listings Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Snowmobiles</h2>
          <Link href="/" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      </section>

      {/* Community Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Community Image */}
            <div className="relative aspect-video rounded-[var(--radius-card)] overflow-hidden shadow-card">
              <Image
                src="/generated/community-riders.jpg"
                alt="Snowmobile community"
                fill
                className="object-cover"
              />
            </div>

            {/* Community Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                JOIN THE COMMUNITY
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Connect with thousands of snowmobile enthusiasts. Share your adventures, get riding tips, and discover the best trails.
              </p>
              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-[var(--radius-button)]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Gear Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Parts Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              QUALITY PARTS & GEAR
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Find premium parts and essential gear for your snowmobile. From performance upgrades to safety equipment, we've got you covered.
            </p>
            <Link href="/parts">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 rounded-[var(--radius-button)]">
                Shop Parts
              </Button>
            </Link>
          </div>

          {/* Parts Image */}
          <div className="relative aspect-video rounded-[var(--radius-card)] overflow-hidden shadow-card order-1 lg:order-2">
            <Image
              src="/generated/parts-gear.jpg"
              alt="Quality parts and gear"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            READY TO SELL?
          </h2>
          <p className="text-secondary-foreground/90 mb-6 max-w-2xl mx-auto">
            List your snowmobile and reach thousands of qualified buyers. Fast, easy, and secure.
          </p>
          <Link href="/sell">
            <Button className="bg-white text-foreground hover:bg-white/90 font-semibold px-8 py-6 text-base rounded-[var(--radius-button)]">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}