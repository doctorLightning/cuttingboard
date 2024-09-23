"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Tab {
  id: number
  title: string
  url: string
  favicon: string
  lastAccessed: Date
}

const mockTabs: Tab[] = [
  { id: 1, title: "Google", url: "https://www.google.com", favicon: "https://www.google.com/favicon.ico", lastAccessed: new Date() },
  { id: 2, title: "GitHub", url: "https://github.com", favicon: "https://github.com/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60) },
  { id: 3, title: "Stack Overflow", url: "https://stackoverflow.com", favicon: "https://stackoverflow.com/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60 * 24) },
  { id: 4, title: "MDN Web Docs", url: "https://developer.mozilla.org", favicon: "https://developer.mozilla.org/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 3) },
  { id: 5, title: "React", url: "https://reactjs.org", favicon: "https://reactjs.org/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
  { id: 6, title: "Wiki", url: "https://wikipedia.org", favicon: "https://wikipedia.org/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
  { id: 5, title: "Reddit", url: "https://reddit.com", favicon: "https://reddit.com/favicon.ico", lastAccessed: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7) },
]

export default function Component() {
  const [selectedTab, setSelectedTab] = useState<Tab | null>(null)

  const calculateOpacity = (lastAccessed: Date) => {
    const now = new Date()
    const diffInHours = (now.getTime() - lastAccessed.getTime()) / (1000 * 60 * 60)
    return Math.max(0.3, 1 - diffInHours / 168) // 168 hours in a week
  }

  return (
    <div className="flex h-[600px] w-full max-w-3xl gap-4 p-4 bg-gray-100 rounded-lg">
      <ScrollArea className="w-1/3 h-full">
        <div className="space-y-2">
          {mockTabs.map((tab) => (
            <Card
              key={tab.id}
              className="cursor-pointer transition-all hover:scale-105"
              style={{ opacity: calculateOpacity(tab.lastAccessed) }}
              onClick={() => setSelectedTab(tab)}
            >
              <CardContent className="p-4 flex items-center space-x-2">
                <img src={tab.favicon} alt={`${tab.title} favicon`} className="w-4 h-4" />
                <span className="text-sm font-medium truncate">{tab.title}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <div className="w-2/3 h-full bg-white rounded-lg shadow-md overflow-hidden">
        {selectedTab ? (
          <iframe
            src={selectedTab.url}
            title={selectedTab.title}
            className="w-full h-full border-none"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            Select a tab to preview
          </div>
        )}
      </div>
    </div>
  )
}
