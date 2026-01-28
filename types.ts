
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  summary: string;
  category: 'Privacy' | 'Technologie' | 'Praktijk' | 'Ethiek';
  date: string;
}

export type PageType = 'home' | 'services' | 'knowledge' | 'about' | 'contact' | 'privacy';
