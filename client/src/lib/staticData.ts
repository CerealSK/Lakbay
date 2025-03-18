// This file provides static data for GitHub Pages deployment where server APIs are not available

import { ContactSubmission } from "@shared/schema";

// Function to simulate the API response for contact form submission
export async function submitContactForm(formData: any): Promise<{ 
  success: boolean; 
  message: string; 
  data?: ContactSubmission 
}> {
  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Mock successful response
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
}