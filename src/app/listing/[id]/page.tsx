'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockListings } from '@/lib/mock-data';
import {
  MapPin,
  Gauge,
  Calendar,
  Fuel,
  ChevronLeft,
  ChevronRight,
  Star,
  Check,
  Mail,
  Phone
} from 'lucide-react';

export default function ListingDetailPage() {
  const params = useParams();
  const listing = mockListings.find(l => l.id === params.id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!listing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Listing Not Found</h2>
            <p className="text-muted-foreground mb-4">The listing you're looking for doesn't exist.</p>
            <Link href="/">
              <Button>Back to Browse</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === listing.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? listing.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-6 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" />
          Back to Browse
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images & Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-card rounded-[var(--radius-card)] shadow-card overflow-hidden">
              <div className="relative aspect-[4/3] bg-muted">
                <Image
                  src={listing.images[currentImageIndex]}
                  alt={listing.title}
                  fill
                  className="object-cover"
                />

                {listing.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnail Strip */}
              {listing.images.length > 1 && (
                <div className="flex gap-2 p-4 bg-muted/30">
                  {listing.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`relative w-20 h-20 rounded overflow-hidden border-2 transition-all ${
                        idx === currentImageIndex ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${listing.title} ${idx + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Description */}
            <div className="bg-card rounded-[var(--radius-card)] shadow-card p-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                {listing.description}
              </p>
            </div>

            {/* Features */}
            <div className="bg-card rounded-[var(--radius-card)] shadow-card p-6">
              <h2 className="text-xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-2">
                {listing.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div className="bg-card rounded-[var(--radius-card)] shadow-card p-6">
              <h2 className="text-xl font-bold mb-4">Specifications</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Brand</p>
                  <p className="font-semibold">{listing.brand}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Model</p>
                  <p className="font-semibold">{listing.model}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Year</p>
                  <p className="font-semibold">{listing.year}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Mileage</p>
                  <p className="font-semibold">{listing.mileage.toLocaleString()} mi</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Engine Size</p>
                  <p className="font-semibold">{listing.engineSize}cc</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Track Length</p>
                  <p className="font-semibold">{listing.trackLength}"</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Condition</p>
                  <Badge variant="secondary" className="capitalize">
                    {listing.condition}
                  </Badge>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Riding Style</p>
                  <p className="font-semibold">{listing.ridingStyle.join(', ')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price & Contact */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-[var(--radius-card)] shadow-card p-6 sticky top-24 space-y-6">
              {/* Title & Location */}
              <div>
                <h1 className="text-2xl font-bold mb-2">{listing.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{listing.location}</span>
                </div>
              </div>

              {/* Price */}
              <div className="py-4 border-y border-border">
                <p className="text-3xl font-bold text-primary">
                  ${listing.price.toLocaleString()}
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Year</p>
                    <p className="font-semibold text-sm">{listing.year}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Mileage</p>
                    <p className="font-semibold text-sm">{listing.mileage.toLocaleString()} mi</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Fuel className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Engine</p>
                    <p className="font-semibold text-sm">{listing.engineSize}cc</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs text-muted-foreground">Condition</p>
                    <p className="font-semibold text-sm capitalize">{listing.condition}</p>
                  </div>
                </div>
              </div>

              {/* Contact Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Seller
                </Button>
                <Button variant="outline" className="w-full font-semibold">
                  <Phone className="w-4 h-4 mr-2" />
                  Show Number
                </Button>
              </div>

              {/* Seller Info */}
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-semibold mb-2">Seller Information</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{listing.seller.username}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{listing.seller.rating} ({listing.seller.reviewCount} reviews)</span>
                    </div>
                  </div>
                  {listing.seller.verified && (
                    <Badge variant="secondary" className="text-xs">
                      Verified
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
