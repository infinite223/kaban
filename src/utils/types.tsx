export type userRules = 'scrumMaster' | 'prodactOwner' | 'developer'

import { FieldValue, Timestamp } from "firebase/firestore"

  export type User = {
    uid:string,
    name: string;
    profileImage: string;
    email: string;
    role: "user" | "company";
    projects?: string[];
  }

  export type UserInProject = {
    uid:string,
    name: string;
    profileImage: string;
    email: string;
    roleInProject: 'Admin' | 'scrumMaster' | 'prodactOwner' | 'developer'
  }
  
  export type Project = {
    title: string;
    description: string;
    users: User[];
    usersUid:string[];
    userRoles: { user: User; role: string }[];
    chat: Chat;
    calendar: Calendar;
    boardKanban: BoardKanban[];
  }
  
  export type BoardKanban = {
    id:string,
    name: string;
    boardData: {name: string, rows:Card[]}[];
    users: UserInProject[];
    usersUid: string[]
    backgroundColor: string;
  }
  
  export type Card = {
    id:string,
    description: string;
    deadline: Timestamp;
    subtasks: Subtask[];
    tags: Tag[];
    priority: string;
    assignedUser?: User[];
  }
  
  export type Tag = {
    name: string;
    color: string;
  }
  
  export type Subtask = {
    title: string;
    done: boolean;
    description: string;
    deadline: Date;
    users?: {uid:string, name: string; profileImage: string}[]
  }
  
  export type Calendar = {
    title: string;
    deadline: Date;
    color: string;
    cards: CalendarCard[];
  }
  
  export type CalendarCard = {
    title: string;
    deadline: Date;
    color: string;
  }
  
  export type Chat = {
    subchannels: Subchannel[];
  }
  
  export type Subchannel = {
    name: string;
    messages: Message[];
  }
  
  export type Message = {
    name: string;
    role: string;
    imageUrl: string;
    message: string;
    timestamp: Date;
    uid: string
  }
  
  export type Role = {
    name: string;
  }
  
  export type Company = {
    name: string;
    logo: string;
    email: string;
    users: User[];
  }