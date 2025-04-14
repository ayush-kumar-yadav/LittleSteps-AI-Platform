"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bot, Send, X, Minimize2, Maximize2, MessageCircle, Loader2 } from "lucide-react"

// Sample responses for different categories
const RESPONSES = {
  development: [
    "Based on your child's age, this is a normal developmental phase. Try to be patient and consistent with your responses.",
    "At 2 years old, children typically have a vocabulary of 50-100 words and can form simple two-word sentences. If you're concerned about language development, consider reading to your child daily.",
    "Separation anxiety is common at this age. Try creating a goodbye ritual and keeping departures brief and positive.",
    "Toddlers often test boundaries as they develop independence. Setting consistent limits while offering choices can help manage challenging behaviors.",
    "Fine motor skills develop gradually. Activities like playing with playdough, stacking blocks, and scribbling can help strengthen these skills.",
  ],
  nutrition: [
    "For a 2-year-old, it's recommended to have 2-3 servings of fruits and vegetables daily.",
    "Toddlers need about 1,000-1,400 calories per day, depending on their activity level and growth rate.",
    "If your child is a picky eater, try involving them in meal preparation and offer a variety of healthy options without pressure.",
    "Calcium is crucial for bone development. Aim for 2-3 servings of dairy or calcium-rich foods daily.",
    "Limit juice to 4 ounces per day and avoid sugary drinks. Water and milk are the best beverage choices for toddlers.",
  ],
  sleep: [
    "Sleep regression is common at this age. Try maintaining a consistent bedtime routine and creating a calm sleep environment.",
    "Most 2-year-olds need 11-14 hours of sleep in a 24-hour period, including naps.",
    "Nightmares can begin around this age as imagination develops. Comfort your child briefly and help them return to sleep.",
    "For bedtime struggles, consider using a visual schedule and offering limited choices to help your child feel more in control.",
    "Transitioning from a crib to a bed should be done when your child is ready, typically between 18 months and 3 years.",
  ],
  health: [
    "I'd recommend scheduling that vaccination between 24-30 months. Would you like me to show you the complete vaccination schedule?",
    "Fever in toddlers is considered 100.4°F (38°C) or higher. Contact your doctor if the fever persists for more than 2-3 days.",
    "Hand washing is one of the best ways to prevent illness. Teach your child to wash for 20 seconds - about the time it takes to sing 'Happy Birthday' twice.",
    "Dental care is important. Brush your child's teeth twice daily with a small amount of fluoride toothpaste (size of a grain of rice).",
    "Regular well-child visits are important for monitoring growth and development. Your 2-year-old should have a checkup annually.",
  ],
  general: [
    "I'm here to help with any questions about your child's development, health, nutrition, or sleep patterns.",
    "Every child develops at their own pace. If you have specific concerns, it's always best to consult with your pediatrician.",
    "The LittleSteps.AI dashboard provides personalized insights based on your child's unique development pattern.",
    "Would you like me to provide some age-appropriate activities that can support your child's current developmental stage?",
    "I notice you haven't set up your child's complete profile yet. Adding more details will help me provide more personalized guidance.",
  ],
}

// Function to categorize user input
function categorizeInput(input: string): keyof typeof RESPONSES {
  input = input.toLowerCase()

  if (
    input.includes("eat") ||
    input.includes("food") ||
    input.includes("diet") ||
    input.includes("nutrition") ||
    input.includes("feeding")
  ) {
    return "nutrition"
  } else if (
    input.includes("sleep") ||
    input.includes("nap") ||
    input.includes("bed") ||
    input.includes("night") ||
    input.includes("tired")
  ) {
    return "sleep"
  } else if (
    input.includes("doctor") ||
    input.includes("sick") ||
    input.includes("vaccine") ||
    input.includes("medicine") ||
    input.includes("health")
  ) {
    return "health"
  } else if (
    input.includes("milestone") ||
    input.includes("walk") ||
    input.includes("talk") ||
    input.includes("learn") ||
    input.includes("develop")
  ) {
    return "development"
  } else {
    return "general"
  }
}

// Function to get a response based on user input
function getResponse(input: string): string {
  const category = categorizeInput(input)
  const responses = RESPONSES[category]
  return responses[Math.floor(Math.random() * responses.length)]
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      role: "bot",
      content: "Hi there! I'm your LittleSteps.AI assistant. How can I help you with your child's development today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (input.trim()) {
      // Add user message
      setMessages([...messages, { role: "user", content: input }])
      setInput("")
      setIsTyping(true)

      // Simulate AI response with typing delay
      setTimeout(() => {
        const response = getResponse(input)
        setMessages((prev) => [...prev, { role: "bot", content: response }])
        setIsTyping(false)
      }, 1500)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  if (!isOpen) {
    return (
      <Button
        id="chat-trigger"
        onClick={toggleChat}
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    )
  }

  return (
    <div
      className={`fixed bottom-6 right-6 w-80 md:w-96 z-50 transition-all duration-300 ${isMinimized ? "h-14" : "h-[500px]"}`}
    >
      <Card className="h-full flex flex-col shadow-xl border-none">
        <CardHeader className="py-3 px-4 flex flex-row items-center justify-between space-y-0 border-b">
          <CardTitle className="text-sm font-medium flex items-center">
            <Avatar className="h-6 w-6 mr-2">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="AI Assistant" />
              <AvatarFallback>
                <Bot className="h-4 w-4" />
              </AvatarFallback>
            </Avatar>
            AI Assistant
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleMinimize}>
              {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
            </Button>
            <Button variant="ghost" size="icon" className="h-7 w-7" onClick={toggleChat}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 overflow-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.role === "user" ? "bg-purple-600 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-lg px-3 py-2 bg-gray-100 text-gray-800 flex items-center">
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    <span>Typing...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            <CardFooter className="p-3 border-t">
              <div className="flex w-full items-center space-x-2">
                <Input
                  placeholder="Ask anything about child development..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1"
                />
                <Button size="icon" onClick={handleSend} className="rounded-full">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}
