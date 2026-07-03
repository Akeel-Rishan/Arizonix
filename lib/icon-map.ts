import {
  AppWindow, BarChart3, Blocks, Bot, Brain, Briefcase, BriefcaseBusiness,
  Building2, CheckCircle2, Cloud, Code2, Database, DollarSign, Factory,
  Gauge, GitBranch, Globe, GraduationCap, HardHat, Headphones, Heart,
  Home, Layers, Lightbulb, Mail, MessageSquare, MessagesSquare, Palette,
  PanelsTopLeft, PenTool, Plug, ReceiptText, Rocket, Search, Shield,
  ShieldCheck, ShoppingBag, ShoppingCart, Smartphone, Store, TrendingUp,
  Truck, Users, UtensilsCrossed, Webhook, Workflow, Wrench, Zap,
  type LucideIcon,
} from 'lucide-react';

export const iconMap: Record<string, LucideIcon> = {
  AppWindow, BarChart3, Blocks, Bot, Brain, Briefcase, BriefcaseBusiness,
  Building2, CheckCircle2, Cloud, Code2, Database, DollarSign, Factory,
  Gauge, GitBranch, Globe, GraduationCap, HardHat, Headphones, Heart,
  Home, Layers, Lightbulb, Mail, MessageSquare, MessagesSquare, Palette,
  PanelsTopLeft, PenTool, Plug, ReceiptText, Rocket, Search, Shield,
  ShieldCheck, ShoppingBag, ShoppingCart, Smartphone, Store, TrendingUp,
  Truck, Users, UtensilsCrossed, Webhook, Workflow, Wrench, Zap,
  Default: Code2,
};

export function getIcon(name?: string): LucideIcon {
  return name ? (iconMap[name] ?? iconMap.Default) : iconMap.Default;
}
