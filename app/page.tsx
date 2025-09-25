'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Bell, Users, Calendar, BookOpen, User, Search, Filter, MessageCircle, Star, Shield, Gamepad2 } from 'lucide-react'

export default function ApexNexusApp() {
  const [activeTab, setActiveTab] = useState('find-teammates')

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">Apex Nexus</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-white">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 bg-transparent">
              <TabsTrigger value="find-teammates" className="data-[state=active]:bg-white/20">
                <Users className="w-4 h-4 mr-2" />
                Find Teammates
              </TabsTrigger>
              <TabsTrigger value="squad-sessions" className="data-[state=active]:bg-white/20">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Squad Sessions
              </TabsTrigger>
              <TabsTrigger value="friends" className="data-[state=active]:bg-white/20">
                <MessageCircle className="w-4 h-4 mr-2" />
                Friends
              </TabsTrigger>
              <TabsTrigger value="guides" className="data-[state=active]:bg-white/20">
                <BookOpen className="w-4 h-4 mr-2" />
                Guides
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-white/20">
                <Calendar className="w-4 h-4 mr-2" />
                Events
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-white/20">
                <User className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Find Teammates Tab */}
          <TabsContent value="find-teammates" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Find Your Squad</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>

            {/* Search and Filters */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input placeholder="Search players..." className="pl-10 bg-white/10 border-white/20 text-white" />
              </div>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pc">PC</SelectItem>
                  <SelectItem value="playstation">PlayStation</SelectItem>
                  <SelectItem value="xbox">Xbox</SelectItem>
                  <SelectItem value="switch">Nintendo Switch</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any Mode" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ranked">Ranked</SelectItem>
                  <SelectItem value="casual">Casual</SelectItem>
                  <SelectItem value="duos">Duos</SelectItem>
                  <SelectItem value="mixtape">Mixtape</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="bg-white/10 border-white/20 text-white">
                  <SelectValue placeholder="Any Rank" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bronze">Bronze</SelectItem>
                  <SelectItem value="silver">Silver</SelectItem>
                  <SelectItem value="gold">Gold</SelectItem>
                  <SelectItem value="platinum">Platinum</SelectItem>
                  <SelectItem value="diamond">Diamond</SelectItem>
                  <SelectItem value="master">Master</SelectItem>
                  <SelectItem value="predator">Apex Predator</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Player Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((player) => (
                <Card key={player} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar>
                          <AvatarFallback>P{player}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-white">Player{player}</CardTitle>
                          <div className="flex items-center space-x-2">
                            <Badge variant="secondary">Diamond III</Badge>
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-xs text-gray-300">Online</span>
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <Star className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-gray-300">
                      "Looking for chill teammates for ranked grind. Good comms and positive vibes only!"
                    </CardDescription>
                    <div className="flex flex-wrap gap-1">
                      <Badge variant="outline" className="text-xs">PC</Badge>
                      <Badge variant="outline" className="text-xs">Mic</Badge>
                      <Badge variant="outline" className="text-xs">Aggressive</Badge>
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-white">2.1</div>
                        <div className="text-xs text-gray-400">K/D</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">15%</div>
                        <div className="text-xs text-gray-400">Win Rate</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-white">850</div>
                        <div className="text-xs text-gray-400">Avg DMG</div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm text-white">4.8</span>
                        <span className="text-xs text-gray-400">(24 reviews)</span>
                      </div>
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Squad Sessions Tab */}
          <TabsContent value="squad-sessions" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Active Squad Sessions</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Create Session
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((session) => (
                <Card key={session} className="bg-white/10 border-white/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-white">Ranked Grind Session</CardTitle>
                      <Badge variant="secondary">2/3 Players</Badge>
                    </div>
                    <CardDescription className="text-gray-300">
                      Looking for one more Diamond+ player for ranked push
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">PC</Badge>
                      <Badge variant="outline">Mic Required</Badge>
                      <Badge variant="outline">Diamond+</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">Expires in 2h 30m</span>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Join Squad
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Friends Tab */}
          <TabsContent value="friends" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">Friends & Network</h2>
              <Button className="bg-orange-500 hover:bg-orange-600">
                Find Friends
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Online Friends */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Online Friends</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2, 3].map((friend) => (
                    <div key={friend} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>F{friend}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">Friend{friend}</div>
                          <div className="text-xs text-green-400">Playing Ranked</div>
                        </div>
                      </div>
                      <Button size="sm" variant="ghost">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Friend Requests */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Friend Requests</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2].map((request) => (
                    <div key={request} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>R{request}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">Request{request}</div>
                          <div className="text-xs text-gray-400">Wants to be friends</div>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-green-600 hover:bg-green-700 flex-1">
                          Accept
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          Decline
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Endorsements */}
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Recent Endorsements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[1, 2, 3].map((endorsement) => (
                    <div key={endorsement} className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-8 h-8">
                          <AvatarFallback>E{endorsement}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="text-sm font-medium text-white">Player{endorsement}</div>
                          <Badge variant="secondary" className="text-xs">Great Shot Caller</Badge>
                        </div>
                      </div>
                      <p className="text-xs text-gray-300">"Excellent communication and game sense!"</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other tabs would go here... */}
          <TabsContent value="guides">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">Guides & Tips</h2>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">Events & Tournaments</h2>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold text-white mb-4">Your Profile</h2>
              <p className="text-gray-300">Coming soon...</p>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
