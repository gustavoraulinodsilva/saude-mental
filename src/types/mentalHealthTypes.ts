export interface HeroData {
    image: string;
    heroTitle: string;
    heroSubtitle: string;
}

export interface Statistic {
    percentage: string;
    description: string;
}

export interface SectionData {
    title: string;
    content: string;
    importanceTitle: string;
    importance: string[];
    statisticTitle: string;
    statistics: Statistic[];
    disorderTitle: string;
    disorderDesc: string;
}

export interface MentalHealthData {
    hero: HeroData;
    section: SectionData;
}