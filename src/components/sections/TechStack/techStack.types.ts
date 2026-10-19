import type { ReactNode } from "react";

export type Proficiency = "High" | "Medium" | "Low–Medium" | "Low" | "Pending";

export interface TechItem {
  name: string;
  level: Proficiency;
  levelLabel?: string;
  icon: ReactNode;
}

export interface TechCategory {
  title: string;
  badge: string;
  cardStyle: string;
  badgeStyle: string;
  items: TechItem[];
}