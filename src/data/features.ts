import { Clock, Globe, Heart, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: Globe,
    title: 'Local Impact',
    description: 'Find opportunities in your community and make a difference where it matters most.'
  },
  {
    icon: Users,
    title: 'Connect & Collaborate',
    description: 'Join a network of passionate volunteers and organizations working towards common goals.'
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description: 'Choose opportunities that fit your schedule, from one-time events to ongoing commitments.'
  },
  {
    icon: Heart,
    title: 'Track Your Impact',
    description: "Monitor your volunteer hours and see the real difference you're making in the community."
  }
];