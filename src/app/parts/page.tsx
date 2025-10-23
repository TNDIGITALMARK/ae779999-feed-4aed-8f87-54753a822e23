'use client';

import Image from 'next/image';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { Button } from '@/components/ui/button';

export default function PartsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/generated/parts-gear.jpg"
              alt="Quality parts and gear"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30" />
          </div>

          <div className="relative z-10 container mx-auto px-6 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
              PARTS & GEAR
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Premium components and accessories for your snowmobile
            </p>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We're building an extensive parts and gear marketplace to complement our snowmobile listings. Soon you'll be able to find everything from performance upgrades to essential safety equipment.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
              Notify Me When Available
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
