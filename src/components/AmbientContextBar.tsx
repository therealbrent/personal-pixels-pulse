import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, Briefcase, Mic, FileText, Command, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NavItem {
  title: string;
  url: string;
  icon: LucideIcon;
}

const navItems: NavItem[] = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Leadership', url: '/leadership', icon: Briefcase },
  { title: 'Speaking', url: '/speaking', icon: Mic },
  { title: 'LLMs.txt', url: '/llms.txt', icon: FileText },
];

interface AmbientContextBarProps {
  onOpenCommandPalette: () => void;
}

export function AmbientContextBar({ onOpenCommandPalette }: AmbientContextBarProps) {
  // Mobile bottom nav removed - FAB handles all navigation
  return null;
}
