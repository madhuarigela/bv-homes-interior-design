export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  description: string;
  material: string;
  style: string;
  color: string;
  dimensions: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  badge?: string;
  featured?: boolean;
  trending?: boolean;
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  slug: string;
}

import productSofa1 from "@/assets/product-sofa-1.jpg";
import productSofa2 from "@/assets/product-sofa-2.jpg";
import productBed1 from "@/assets/product-bed-1.jpg";
import productDining1 from "@/assets/product-dining-1.jpg";
import productWardrobe1 from "@/assets/product-wardrobe-1.jpg";
import productOffice1 from "@/assets/product-office-1.jpg";
import productDecor1 from "@/assets/product-decor-1.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import heroImage from "@/assets/hero-living-room.jpg";


// Additional lifestyle imagery keeps the catalogue visually rich while the primary product assets remain local.
const galleryImages = {
  sofa: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=85",
  living: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
  bedroom: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85",
  dining: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=85",
  decor: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=85",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
};

export const categories: Category[] = [
  { id: "1", name: "Sofas & Seating", image: heroImage, count: 132, slug: "sofas" },
  { id: "2", name: "Beds & Bedroom", image: categoryBedroom, count: 96, slug: "beds" },
  { id: "3", name: "Dining Tables", image: categoryDining, count: 74, slug: "dining" },
  { id: "4", name: "Wardrobes", image: productWardrobe1, count: 52, slug: "wardrobes" },
  { id: "5", name: "Office Furniture", image: productOffice1, count: 63, slug: "office" },
  { id: "6", name: "Home Décor", image: productDecor1, count: 218, slug: "decor" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Channel Sofa",
    category: "sofas",
    price: 124999,
    originalPrice: 159999,
    image: productSofa1,
    images: [productSofa1, galleryImages.sofa, galleryImages.living],
    description: "Luxurious velvet channel-tufted sofa with brushed gold legs. Perfect for modern living rooms seeking elegance and comfort.",
    material: "Premium Velvet",
    style: "Modern",
    color: "Gray",
    dimensions: "220 × 90 × 85 cm",
    inStock: true,
    rating: 4.8,
    reviews: 127,
    badge: "Bestseller",
    featured: true,
    trending: true,
  },
  {
    id: "2",
    name: "Royal Wingback Armchair",
    category: "sofas",
    price: 74999,
    image: productSofa2,
    images: [productSofa2, galleryImages.sofa, galleryImages.living],
    description: "Statement emerald velvet wingback armchair with ornate gold frame. A piece that commands attention in any space.",
    material: "Velvet & Gold Frame",
    style: "Classic",
    color: "Emerald Green",
    dimensions: "85 × 80 × 110 cm",
    inStock: true,
    rating: 4.9,
    reviews: 89,
    badge: "New",
    featured: true,
    trending: true,
  },
  {
    id: "3",
    name: "Heritage King Bed",
    category: "beds",
    price: 149999,
    originalPrice: 169999,
    image: productBed1,
    images: [productBed1, galleryImages.bedroom, galleryImages.living],
    description: "Handcrafted solid wood king bed with tufted upholstered headboard. Timeless craftsmanship meets modern comfort.",
    material: "Solid Walnut Wood",
    style: "Traditional",
    color: "Walnut",
    dimensions: "210 × 190 × 145 cm",
    inStock: true,
    rating: 4.7,
    reviews: 203,
    featured: true,
  },
  {
    id: "4",
    name: "Carrara Marble Dining Table",
    category: "dining",
    price: 139999,
    image: productDining1,
    images: [productDining1, galleryImages.dining, galleryImages.living],
    description: "Stunning Carrara marble top dining table with geometric gold legs. Seats six comfortably for unforgettable dinner parties.",
    material: "Carrara Marble & Brass",
    style: "Contemporary",
    color: "White & Gold",
    dimensions: "180 × 90 × 76 cm",
    inStock: true,
    rating: 4.9,
    reviews: 156,
    badge: "Premium",
    featured: true,
    trending: true,
  },
  {
    id: "5",
    name: "Illumina Glass Wardrobe",
    category: "wardrobes",
    price: 179999,
    image: productWardrobe1,
    images: [productWardrobe1, galleryImages.bedroom, galleryImages.decor],
    description: "Modern glass-door wardrobe with integrated LED lighting. Organize your wardrobe in style with this premium storage solution.",
    material: "Walnut & Tempered Glass",
    style: "Modern",
    color: "Walnut",
    dimensions: "200 × 60 × 220 cm",
    inStock: true,
    rating: 4.6,
    reviews: 78,
    trending: true,
  },
  {
    id: "6",
    name: "Executive Desk & Chair Set",
    category: "office",
    price: 99999,
    originalPrice: 124999,
    image: productOffice1,
    images: [productOffice1, galleryImages.office, galleryImages.living],
    description: "Premium walnut executive desk paired with an ergonomic leather chair. Command your workspace with authority and comfort.",
    material: "Walnut & Italian Leather",
    style: "Modern",
    color: "Walnut & Black",
    dimensions: "180 × 80 × 76 cm",
    inStock: true,
    rating: 4.8,
    reviews: 92,
    featured: true,
  },
  {
    id: "7",
    name: "Aurelia Ceramic Vase",
    category: "decor",
    price: 7999,
    image: productDecor1,
    images: [productDecor1, galleryImages.decor, galleryImages.living],
    description: "Hand-painted ceramic vase with gold detailing. Includes premium dried pampas grass arrangement.",
    material: "Ceramic & Gold Leaf",
    style: "Artisan",
    color: "Cream & Gold",
    dimensions: "30 × 30 × 45 cm",
    inStock: true,
    rating: 4.5,
    reviews: 234,
    trending: true,
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Interior Designer",
    content: "BV Homes transformed my client's penthouse with their exquisite furniture collection. The quality is unmatched.",
    rating: 5,
  },
  {
    id: "2",
    name: "James Chen",
    role: "Homeowner",
    content: "The Carrara marble dining table is the centerpiece of our home. Every guest comments on its beauty.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amara Okafor",
    role: "Architect",
    content: "I exclusively recommend BV Homes for luxury residential projects. Their attention to detail is extraordinary.",
    rating: 5,
  },
];
