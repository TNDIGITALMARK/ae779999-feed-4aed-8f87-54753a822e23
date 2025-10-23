'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Gauge } from 'lucide-react';
import { Listing } from '@/lib/mock-data';

interface ListingCardProps {
  listing: Listing;
}

export function ListingCard({ listing }: ListingCardProps) {
  return (
    <Link href={`/listing/${listing.id}`}>
      <div className="bg-card rounded-[var(--radius-card)] shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
        {/* Image */}
        <div className="relative aspect-[4/3] bg-muted overflow-hidden">
          <Image
            src={listing.image}
            alt={listing.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {listing.condition === 'excellent' && (
            <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Excellent
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title */}
          <h5 className="font-semibold text-card-foreground mb-2 line-clamp-1 group-hover:text-primary transition-colors">
            {listing.title}
          </h5>

          {/* Stats */}
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <div className="flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5" />
              <span>{listing.mileage.toLocaleString()} mi</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              <span className="line-clamp-1">{listing.location}</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <p className="price-text text-lg">
              ${listing.price.toLocaleString()}
            </p>
            <span className="text-xs text-muted-foreground">
              {listing.year}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
