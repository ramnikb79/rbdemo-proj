import { z } from "zod"

// Validation schemas
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
})

export type LoginFormData = z.infer<typeof loginSchema>
export type RegisterFormData = z.infer<typeof registerSchema>

// User type
export interface User {
  id: string
  name: string
  email: string
}

// Mock user storage (in a real app, this would be a database)
const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
  },
]

// Mock authentication functions
export const authenticateUser = async (email: string, password: string): Promise<User | null> => {
  // In a real app, this would validate against a database
  // For demo purposes, we'll accept any email/password combination
  const user = users.find(u => u.email === email)
  
  if (user) {
    return user
  }
  
  // Create a new user if they don't exist (for demo purposes)
  const newUser: User = {
    id: Date.now().toString(),
    name: email.split('@')[0],
    email,
  }
  users.push(newUser)
  return newUser
}

export const createUser = async (name: string, email: string, password: string): Promise<User | null> => {
  // Check if user already exists
  const existingUser = users.find(u => u.email === email)
  if (existingUser) {
    return null
  }
  
  // Create new user
  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
  }
  users.push(newUser)
  return newUser
}

export const getUserById = async (id: string): Promise<User | null> => {
  return users.find(u => u.id === id) || null
} 