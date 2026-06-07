/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface InvitePlan {
  id: string;
  name: string;
  invitesRequired: number;
  cpu: string;
  ram: string;
  disk: string;
  supportedVers: string;
  features: string[];
  recommended?: boolean;
  tag?: string;
}

export interface PremiumPlan {
  id: string;
  name: string;
  price: string;
  cpu: string;
  ram: string;
  disk: string;
  supportedVers: string;
  features: string[];
  recommended?: boolean;
  tag?: string;
}

export interface Testimonial {
  id: string;
  username: string;
  role: string;
  avatarSeed: string; // Used to generate distinct micro-avatars
  rating: number;
  comment: string;
  date: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Reference key for lucide icons
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
