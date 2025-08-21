export interface WorkExperience {
  id: number;
  company: string;
  position: string;
  startDate: string;
  endDate: string | null; // null if currently employed
  responsibilities: string[]; // List of responsibilities or achievements
  location: string; // City, Country
  technologies?: string[]; // Optional list of technologies used
}
