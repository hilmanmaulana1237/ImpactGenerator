import { InertiaLinkProps } from '@inertiajs/react';
import { LucideIcon } from 'lucide-react';

// User role - only UMKM/seller
export type UserRole = 'umkm' | 'admin';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: NonNullable<InertiaLinkProps['href']>;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    avatar_path?: string;
    email_verified_at: string | null;
    two_factor_enabled?: boolean;
    is_suspended?: boolean;
    role: UserRole;
    created_at: string;
    updated_at: string;
    [key: string]: unknown;
}

// Review Stats
export interface ReviewStats {
    average_rating: number;
    total_reviews: number;
    positive_count: number;
    negative_count: number;
    neutral_count: number;
}

// Product Menu Category
export interface ProductMenuCategory {
    id: number;
    store_id: number;
    name: string;
    description?: string;
    order: number;
    is_active: boolean;
    products_count?: number;
    created_at: string;
    updated_at: string;
}

// Product
export interface Product {
    id: number;
    store_id: number;
    product_category_id?: number;
    product_category?: ProductMenuCategory;
    name: string;
    description?: string;
    price: number | string;
    stock: number;
    image_path?: string;
    category: string;
    is_active: boolean;
    store?: UmkmStore;
    created_at: string;
    updated_at: string;
}

// Order
export interface Order {
    id: number;
    order_number: string;
    store_id: number;
    buyer_id: number;
    courier_id?: number;
    courier_fee?: number;
    store?: UmkmStore;
    buyer?: User;
    created_at?: string;
    updated_at?: string;
}

// UMKM Store (simplified)
export interface UmkmStore {
    id: number;
    user_id: number;
    name: string;
    slug: string;
    category?: string;
    description?: string;
    address_pickup?: string;
    profile_photo_path?: string;
    store_photo_path?: string;
    banner_path?: string;
    open_time?: string;
    close_time?: string;
    average_rating?: number;
    total_ratings?: number;
    review_stats?: ReviewStats;
    qris_path?: string;
    qris_handle?: string;
    bank_name?: string;
    bank_account?: string;
    bank_holder?: string;
    owner?: User;
    created_at: string;
    updated_at: string;
}

// AI Content types
export interface AIContentStat {
    totalVideos: number;
    totalPosters: number;
    totalChats: number;
}
