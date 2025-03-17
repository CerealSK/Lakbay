import { users, type User, type InsertUser, type InsertContact, type ContactSubmission } from "@shared/schema";

// Interface for storage operations
export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private userCurrentId: number;
  private contactCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.userCurrentId = 1;
    this.contactCurrentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactSubmission(insertContact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactCurrentId++;
    const submittedAt = new Date().toISOString();
    
    const contactSubmission: ContactSubmission = {
      ...insertContact,
      id,
      submittedAt
    };
    
    this.contactSubmissions.set(id, contactSubmission);
    console.log(`Contact submission received: ${contactSubmission.name} (${contactSubmission.email})`);
    
    return contactSubmission;
  }

  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
}

export const storage = new MemStorage();
