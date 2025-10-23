'use client';

import { useState } from 'react';
import { Header } from '@/components/snowtrader/Header';
import { Footer } from '@/components/snowtrader/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { brands, ridingStyles, conditions } from '@/lib/mock-data';
import { Upload, X } from 'lucide-react';

export default function SellPage() {
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setSelectedImages(prev => [...prev, ...newImages].slice(0, 8));
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 bg-muted/20 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">List Your Snowmobile</h1>
              <p className="text-muted-foreground">
                Reach thousands of qualified buyers. Fill out the form below to create your listing.
              </p>
            </div>

            {/* Form */}
            <form className="bg-card rounded-[var(--radius-card)] shadow-card p-6 md:p-8 space-y-6">
              {/* Basic Information */}
              <div>
                <h2 className="text-xl font-bold mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="brand">Brand *</Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select brand" />
                      </SelectTrigger>
                      <SelectContent>
                        {brands.map(brand => (
                          <SelectItem key={brand} value={brand.toLowerCase()}>
                            {brand}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="model">Model *</Label>
                    <Input id="model" placeholder="e.g., Summit X 850" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="year">Year *</Label>
                    <Input id="year" type="number" placeholder="e.g., 2022" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price ($) *</Label>
                    <Input id="price" type="number" placeholder="e.g., 14500" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mileage">Mileage *</Label>
                    <Input id="mileage" type="number" placeholder="e.g., 1200" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="condition">Condition *</Label>
                    <Select>
                      <SelectTrigger id="condition">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        {conditions.map(condition => (
                          <SelectItem key={condition} value={condition}>
                            {condition.charAt(0).toUpperCase() + condition.slice(1)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div>
                <h2 className="text-xl font-bold mb-4">Technical Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="engine">Engine Size (cc) *</Label>
                    <Input id="engine" type="number" placeholder="e.g., 850" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="track">Track Length (inches) *</Label>
                    <Input id="track" type="number" placeholder="e.g., 154" />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="ridingStyle">Riding Style *</Label>
                    <Select>
                      <SelectTrigger id="ridingStyle">
                        <SelectValue placeholder="Select riding style" />
                      </SelectTrigger>
                      <SelectContent>
                        {ridingStyles.map(style => (
                          <SelectItem key={style} value={style.toLowerCase()}>
                            {style}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <h2 className="text-xl font-bold mb-4">Location</h2>
                <div className="space-y-2">
                  <Label htmlFor="location">Location *</Label>
                  <Input id="location" placeholder="e.g., Colorado Springs, CO" />
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-xl font-bold mb-4">Description</h2>
                <div className="space-y-2">
                  <Label htmlFor="description">Tell buyers about your snowmobile *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the condition, maintenance history, any modifications, and why you're selling..."
                    rows={6}
                    className="resize-none"
                  />
                  <p className="text-xs text-muted-foreground">
                    Include details about maintenance, upgrades, and any issues.
                  </p>
                </div>
              </div>

              {/* Photos */}
              <div>
                <h2 className="text-xl font-bold mb-4">Photos</h2>
                <div className="space-y-4">
                  <Label htmlFor="photos">Upload Photos (Max 8) *</Label>

                  {/* Image Grid */}
                  {selectedImages.length > 0 && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      {selectedImages.map((img, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden bg-muted group">
                          <img
                            src={img}
                            alt={`Upload ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-destructive text-destructive-foreground p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Upload Button */}
                  {selectedImages.length < 8 && (
                    <label
                      htmlFor="photos"
                      className="flex flex-col items-center justify-center h-40 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-muted/30"
                    >
                      <Upload className="w-8 h-8 text-muted-foreground mb-2" />
                      <p className="text-sm font-medium text-muted-foreground">
                        Click to upload photos
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {selectedImages.length}/8 uploaded
                      </p>
                      <input
                        id="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </label>
                  )}

                  <p className="text-xs text-muted-foreground">
                    Upload clear photos from multiple angles. Include close-ups of any damage or special features.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-bold mb-4">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input id="name" placeholder="e.g., John Smith" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="e.g., john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="e.g., (555) 123-4567" />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-6 border-t border-border">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6"
                  >
                    Publish Listing
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="flex-1 sm:flex-none font-semibold py-6"
                  >
                    Save Draft
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  By submitting, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
