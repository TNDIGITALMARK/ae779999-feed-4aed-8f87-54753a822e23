'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { ListingCard } from '@/components/snowtrader/ListingCard';
import { mockListings } from '@/lib/mock-data';
import { ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with parallax effect */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-snowmobile.jpg"
            alt="Snowmobile adventure"
            fill
            className="object-cover scale-110"
            priority
          />
          {/* Enhanced gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-transparent" />
          {/* Accent gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
        </div>

        {/* Hero Content - Enhanced */}
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Trusted by 10,000+ riders</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
            UNLEASH YOUR<br />
            <span className="text-primary drop-shadow-[0_0_30px_rgba(74,159,219,0.5)]">WINTER ADVENTURE</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Discover the perfect snowmobile from thousands of verified listings. Buy with confidence, sell with ease.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link href="/">
              <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-10 py-7 text-lg rounded-lg shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all">
                Shop Sleds
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="/sell">
              <Button variant="outline" className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground font-semibold px-10 py-7 text-lg rounded-lg transition-all">
                List Your Sled
              </Button>
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/80 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              <span>Secure Transactions</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>Instant Messaging</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>Verified Sellers</span>
            </div>
          </div>
        </div>

        {/* Decorative bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>

      {/* Featured Listings Grid - Enhanced */}
      <section className="container mx-auto px-6 py-20 -mt-16 relative z-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-8 bg-primary rounded-full" />
              <h2 className="text-3xl md:text-4xl font-bold">Featured Snowmobiles</h2>
            </div>
            <p className="text-muted-foreground ml-3">Handpicked premium sleds ready for adventure</p>
          </div>
          <Link href="/" className="hidden md:flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all group">
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockListings.map((listing, index) => (
            <div
              key={listing.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ListingCard listing={listing} />
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden mt-8 text-center">
          <Link href="/">
            <Button variant="outline" className="w-full sm:w-auto">
              View All Listings
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Community Section - Enhanced */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(74,159,219,0.1),transparent_50%)]" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Community Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/community-riders.jpg"
                  alt="Snowmobile community"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-foreground">10,000+</p>
                      <p className="text-sm text-muted-foreground">Active Members</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Community Content */}
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Community Driven
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                  JOIN THE<br />
                  <span className="gradient-text">COMMUNITY</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Connect with thousands of snowmobile enthusiasts. Share your adventures, get riding tips, and discover the best trails across North America.
                </p>
              </div>

              {/* Features list */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Verified Reviews</h4>
                    <p className="text-sm text-muted-foreground">Real feedback from actual buyers and sellers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Advice</h4>
                    <p className="text-sm text-muted-foreground">Get tips from experienced riders and mechanics</p>
                  </div>
                </div>
              </div>

              <Link href="/">
                <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all group">
                  Learn More
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Parts & Gear Section - Enhanced */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Parts Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div>
              <div className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Premium Parts
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                QUALITY PARTS<br />
                <span className="gradient-text">& GEAR</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Find premium parts and essential gear for your snowmobile. From performance upgrades to safety equipment, we've got you covered.
              </p>
            </div>

            {/* Categories grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors">
                <p className="font-semibold mb-1">Performance</p>
                <p className="text-sm text-muted-foreground">Engines, exhausts & more</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors">
                <p className="font-semibold mb-1">Safety Gear</p>
                <p className="text-sm text-muted-foreground">Helmets, jackets & gloves</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors">
                <p className="font-semibold mb-1">Accessories</p>
                <p className="text-sm text-muted-foreground">Covers, bags & tools</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-4 hover:bg-muted transition-colors">
                <p className="font-semibold mb-1">Maintenance</p>
                <p className="text-sm text-muted-foreground">Oils, filters & parts</p>
              </div>
            </div>

            <Link href="/parts">
              <Button className="bg-secondary hover:bg-secondary/90 text-white font-semibold px-8 py-6 text-base rounded-lg shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all group">
                Shop Parts
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Parts Image */}
          <div className="relative group order-1 lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-l from-secondary/20 to-primary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/generated/parts-gear.jpg"
                alt="Quality parts and gear"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner - Enhanced */}
      <section className="relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 gradient-primary" />
        {/* Pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-medium">No Fees for 30 Days</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              READY TO SELL YOUR SLED?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto">
              List your snowmobile and reach thousands of qualified buyers. Fast, easy, and secure transactions.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-2xl font-bold mb-1">5 min</p>
                <p className="text-sm text-white/80">Quick Listing</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-2xl font-bold mb-1">10k+</p>
                <p className="text-sm text-white/80">Active Buyers</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-2xl font-bold mb-1">24/7</p>
                <p className="text-sm text-white/80">Secure Support</p>
              </div>
            </div>

            <Link href="/sell">
              <Button className="bg-white text-foreground hover:bg-white/90 font-semibold px-12 py-7 text-lg rounded-lg shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1 group">
                Get Started Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}