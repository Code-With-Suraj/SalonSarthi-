export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  durationMinutes: number;
  price: number;
  icon?: string;
  isPopular?: boolean;
}

export interface UpsellAddon {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  description: string;
  badge?: string;
  recommendedWith: string[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  rating: number;
  avatar: string;
  available: boolean;
  specialties: string[];
}

export interface SlotTime {
  time: string;
  available: boolean;
  isPopular?: boolean;
  isOffPeakDiscounted?: boolean;
}

export interface LedgerEntry {
  id: string;
  timestamp: string;
  customerName: string;
  type: 'CREDIT_RECHARGE' | 'DEBIT_BOOKING' | 'BONUS_REWARD' | 'REFUND';
  amount: number;
  bonusAmount?: number;
  balanceAfter: number;
  description: string;
  referenceId: string;
}

export interface CustomerWallet {
  customerId: string;
  customerName: string;
  mobile: string;
  mainBalance: number;
  rewardBalance: number;
  totalSpent: number;
  lastVisit: string;
  tier: 'Starter' | 'Gold VIP' | 'Platinum Royal';
}

export interface WhatsAppTemplate {
  id: string;
  title: string;
  tag: string;
  message: string;
  placeholderVars: string[];
  suggestedSlot?: string;
  discountBadge?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  priceMonthly: number;
  priceEffectiveMonthly: number;
  durationDays: number;
  billingPeriodLabel: string;
  savePercentage?: string;
  popular?: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Infrastructure' | 'Payments' | 'WhatsApp Safety' | 'Slot Control' | 'General';
}
