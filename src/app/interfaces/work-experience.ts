export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  Dates: string; // Date range of employment
  responsibilities: Responsibilities[]; // List of responsibilities or achievements
  location: string; // City, Country
  technologies?: TecchnologiesUsed[]; // Optional list of technologies used
}

export interface Responsibilities {
  id: number;
  description: string;
}

export interface TecchnologiesUsed {
  id: number;
  name: string;
  version?: string; // Optional version information
}
