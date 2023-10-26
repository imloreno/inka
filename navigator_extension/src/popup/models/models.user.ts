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
