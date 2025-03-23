// types.ts

export interface ProfileBanner {
  backgroundImage: string;         // Now a direct URL string
  headline: string;
  resumeLink: string;              // Direct URL string
  linkedinLink: string;
  profileSummary: string;
}


export interface TimelineItem {
  timelineType: 'work' | 'education';
  name: string;
  title: string;
  techStack: string;
  summaryPoints: string[];         // You can keep this as an array
  dateRange: string;
}

export interface Project {
  title: string;
  description: string;
  techUsed: string;
  image: string;                   // Now just a string path or import
}

export interface Certification {
  title: string;
  issuer: string;
  issuedDate: string;
  link: string;
  iconName: string;
}

export interface ContactMe {
  profilePicture: string;          // Now a string (image path or import)
  name: string;
  title: string;
  summary: string;
  companyUniversity: string;
  linkedinLink: string;
  email: string;
  phoneNumber: string;
}

export interface Skill {
  name: string;
  category: string;
  description: string;
  icon: string;
}

export type ProfileType = 'Recruiter' | 'developer' | 'stalker' | 'Adventurer';
