'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { Snowflake, Users, Shield, Zap, Heart, Target, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-snowmobile.jpg"
            alt="About SnowTrader"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Snowflake className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Established for the Community</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            ABOUT <span className="text-primary drop-shadow-[0_0_30px_rgba(74,159,219,0.5)]">SNOWTRADER</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            The premier marketplace built by riders, for riders
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              CONNECTING THE<br />
              <span className="gradient-text">SNOWMOBILE COMMUNITY</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              SnowTrader was created with a single mission: to provide the snowmobile community with a trusted,
              efficient, and user-friendly platform to buy, sell, and discover quality snowmobiles. We understand
              the passion that comes with winter riding, and we're dedicated to making every transaction as smooth
              as fresh powder.
            </p>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Trust & Safety</h3>
              <p className="text-muted-foreground">
                Every listing is verified, and every transaction is protected. Your security is our top priority.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Built by riders who understand the community. We're here to support your passion for winter adventures.
              </p>
            </div>

            <div className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all">
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Fast & Simple</h3>
              <p className="text-muted-foreground">
                List your sled in minutes, connect with buyers instantly. No complexity, just results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/generated/community-riders.jpg"
                  alt="SnowTrader community"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  OUR <span className="gradient-text">STORY</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                  SnowTrader began in the heart of winter country, founded by a group of passionate snowmobile
                  enthusiasts who saw a need for a better way to connect buyers and sellers. We were frustrated
                  with scattered listings, unclear pricing, and the lack of trust in existing platforms.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to serve over 10,000 active members across North America, facilitating
                  thousands of successful transactions every year. From trail riders to performance enthusiasts,
                  our community continues to grow stronger every season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10,000+</div>
            <p className="text-muted-foreground font-medium">Active Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5,000+</div>
            <p className="text-muted-foreground font-medium">Sleds Listed</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3,200+</div>
            <p className="text-muted-foreground font-medium">Successful Sales</p>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                WHY CHOOSE <span className="gradient-text">SNOWTRADER</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We're more than just a marketplace—we're your partner in every winter adventure
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Targeted Audience</h4>
                  <p className="text-muted-foreground">
                    Your listing reaches thousands of qualified snowmobile enthusiasts actively searching for their next ride.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Verified Listings</h4>
                  <p className="text-muted-foreground">
                    Every sled is verified with detailed specifications, real photos, and honest seller reviews.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Expert Support</h4>
                  <p className="text-muted-foreground">
                    Our team of snowmobile experts is available 24/7 to help with questions, concerns, and technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary" />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              JOIN OUR COMMUNITY
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Whether you're buying or selling, SnowTrader is your trusted partner for all things snowmobile.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="bg-white text-foreground hover:bg-white/90 font-semibold px-10 py-7 text-lg rounded-lg shadow-2xl hover:shadow-white/20 transition-all">
                  Browse Sleds
                </Button>
              </Link>
              <Link href="/sell">
                <Button variant="outline" className="border-2 border-white/80 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-foreground font-semibold px-10 py-7 text-lg rounded-lg transition-all">
                  List Your Sled
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
