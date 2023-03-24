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
  
  export type Project = {
    title: string;
    description: string;
    users: User[];
    userRoles: { user: User; role: string }[];
    chat: Chat;
    calendar: Calendar;
    boardKanban: BoardKanban[];
  }
  
  export type BoardKanban = {
    name: string;
    cards: Card[];
    users: User[];
    backgroundColor: string;
  }
  
  export type Card = {
    title: string;
    deadline: Date;
    subtasks: Subtask[];
    tags: Tag[];
    priority: string;
    assignedUser: User;
    // boardKanban: BoardKanban;
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