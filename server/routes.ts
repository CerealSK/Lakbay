import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the incoming data with Zod schema
      const validatedData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(validatedData);
      
      // Return success response
      return res.status(201).json({ 
        success: true, 
        message: "Contact form submitted successfully", 
        data: submission 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        // Handle validation errors
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      // Handle other errors
      console.error("Error submitting contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An error occurred while submitting the form" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
