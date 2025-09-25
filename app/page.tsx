export default function ApexNexusApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold">A</span>
              </div>
              <h1 className="text-2xl font-bold text-white">Apex Nexus</h1>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-white px-4 py-2 rounded">
                Notifications
              </button>
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/10 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex space-x-8 py-4">
            <button className="text-white px-4 py-2 bg-white/20 rounded">
              Find Teammates
            </button>
            <button className="text-white px-4 py-2 hover:bg-white/10 rounded">
              Squad Sessions
            </button>
            <button className="text-white px-4 py-2 hover:bg-white/10 rounded">
              Friends
            </button>
            <button className="text-white px-4 py-2 hover:bg-white/10 rounded">
              Guides
            </button>
            <button className="text-white px-4 py-2 hover:bg-white/10 rounded">
              Events
            </button>
            <button className="text-white px-4 py-2 hover:bg-white/10 rounded">
              Profile
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            🎯 Apex Nexus
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Find Your Perfect Squad
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Welcome to Apex Nexus!
            </h3>
            <p className="text-gray-300 mb-6">
              The ultimate cross-platform teammate finder for Apex Legends players.
              Connect with players across all platforms and find your perfect squad!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded">
                <h4 className="text-white font-bold mb-2">🔍 Smart Matching</h4>
                <p className="text-gray-400 text-sm">Find teammates based on rank, playstyle, and preferences</p>
              </div>
              <div className="bg-white/5 p-4 rounded">
                <h4 className="text-white font-bold mb-2">🎮 Cross-Platform</h4>
                <p className="text-gray-400 text-sm">Connect with PC, PlayStation, Xbox, and Switch players</p>
              </div>
              <div className="bg-white/5 p-4 rounded">
                <h4 className="text-white font-bold mb-2">🤝 Social Features</h4>
                <p className="text-gray-400 text-sm">Friends, endorsements, and reputation system</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
