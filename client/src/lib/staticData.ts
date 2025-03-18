// This file provides static implementations for all data operations
// Used for deploying as a fully static site without server dependencies

import { ContactSubmission, User } from "@shared/schema";

// Static implementation for contact form submission
export async function submitContactForm(formData: any): Promise<{ 
  success: boolean; 
  message: string; 
  data?: ContactSubmission 
}> {
  // Simulate network delay for realistic behavior
  await new Promise(resolve => setTimeout(resolve, 500));
  
  try {
    // Log submission for debugging in static mode
    console.log("Static contact form submission:", formData);
    
    // Simulate successful response with the data that would normally come from the server
    return {
      success: true,
      message: "Contact form submitted successfully",
      data: {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        submittedAt: new Date().toISOString()
      }
    };
  } catch (error) {
    console.error("Static contact form submission error:", error);
    return {
      success: false,
      message: "An error occurred while submitting the form"
    };
  }
}

// Add any other data operations your app needs below
// For example, if you need to get user data:

export async function getUserData(userId: number): Promise<{
  success: boolean;
  message: string;
  data?: User
}> {
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // This would normally fetch from an API, but for static sites we return static data
  return {
    success: true,
    message: "User data retrieved",
    data: {
      id: userId,
      username: "demo_user",
      password: "hashedpassword" // In a real app, this would never be exposed to the client
    }
  };
}

// Storage for data persistence during the session
// This simulates a database but is only in-memory for the current page session
class StaticDataStore {
  private static instance: StaticDataStore;
  private contactSubmissions: Map<number, ContactSubmission> = new Map();
  
  private constructor() {}
  
  public static getInstance(): StaticDataStore {
    if (!StaticDataStore.instance) {
      StaticDataStore.instance = new StaticDataStore();
    }
    return StaticDataStore.instance;
  }
  
  public saveContactSubmission(submission: ContactSubmission): void {
    this.contactSubmissions.set(submission.id, submission);
  }
  
  public getContactSubmissions(): ContactSubmission[] {
    return Array.from(this.contactSubmissions.values());
  }
}

export const staticDataStore = StaticDataStore.getInstance();