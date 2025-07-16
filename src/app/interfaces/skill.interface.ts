export interface TechnicalSkill {
  id: number;
  name: string;
  skill: Skill[];
}

export interface Skill {
  name: string;
  list?: string[];
}
