import { Address } from ".";

export interface ApplicantInfo {
  id: string;
  name: string;
  profilePicture?: string;
  phone?: string;
  email: string;
  website?: [string];
  linkedin: string;
  github?: string;
  address?: Address;
  position: string;
  company?: string;
}

export interface User {
  id: string;
  userName: string;
  password: string;
  applicantInfo: ApplicantInfo;
}

export interface CV {
  id: string;
  personalInfo: ApplicantInfo;
  education: [Education];
  jobExperience: [JobExperience];
}

export interface JobExperience {
  id: string;
  title: string;
  position: string;
  company: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  achievements?: [Achievement];
  skillSet?: [Skill];
}

export interface Achievement {
  id: string;
  description: string;
}

export interface Skill {
  id: string;
  skill: string;
  importance: SkillType;
  startDate: Date;
}

export enum SkillType {
  MAIN = "main",
  STANDARD = "standard",
  EXTRA = "extra",
  SOFT = "soft",
}

export interface Education {
  id: string;
  school: string;
  degree: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  achievements?: [Achievement];
}
