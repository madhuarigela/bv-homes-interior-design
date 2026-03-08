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

export const categories: Category[] = [
  { id: "1", name: "Sofas & Seating", image: heroImage, count: 124, slug: "sofas" },
  { id: "2", name: "Beds & Bedroom", image: categoryBedroom, count: 89, slug: "beds" },
  { id: "3", name: "Dining Tables", image: categoryDining, count: 67, slug: "dining" },
  { id: "4", name: "Wardrobes", image: productWardrobe1, count: 45, slug: "wardrobes" },
  { id: "5", name: "Office Furniture", image: productOffice1, count: 56, slug: "office" },
  { id: "6", name: "Home Décor", image: productDecor1, count: 203, slug: "decor" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Velvet Channel Sofa",
    category: "sofas",
    price: 2499,
    originalPrice: 3199,
    image: productSofa1,
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
    price: 1899,
    image: productSofa2,
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
    price: 3799,
    originalPrice: 4299,
    image: productBed1,
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
    price: 4599,
    image: productDining1,
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
    price: 5299,
    image: productWardrobe1,
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
    price: 2899,
    originalPrice: 3499,
    image: productOffice1,
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
    price: 189,
    image: productDecor1,
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
