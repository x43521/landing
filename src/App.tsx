import { useState } from 'react';
import { Code2, Mail, Lock, User, Github, Twitter } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Code2 className="h-8 w-8 text-purple-500 mr-2" />
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            WebCraft Studios
          </h1>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              We Build Digital Experiences<br />
              <span className="text-purple-400">That Inspire</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At WebCraft Studios, we specialize in creating bespoke web solutions that 
              combine cutting-edge technology with stunning design. Our team of experts 
              crafts digital experiences that drive results and leave lasting impressions.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <h3 className="text-purple-400 font-semibold">100+ Projects</h3>
                <p className="text-sm text-gray-400">Delivered successfully</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <h3 className="text-blue-400 font-semibold">5 Years</h3>
                <p className="text-sm text-gray-400">Industry experience</p>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-gray-800/50 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-xl">
            <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full pl-10 pr-4 py-3 bg-gray-900 rounded-lg border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 outline-none transition"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-purple-500/20"
              >
                Get Started
              </button>

              <div className="relative flex items-center justify-center">
                <div className="flex-grow border-t border-gray-700"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-sm">OR</span>
                <div className="flex-grow border-t border-gray-700"></div>
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-900 py-3 rounded-lg border border-gray-700 hover:bg-gray-800 transition-colors"
              >
                <Github className="h-5 w-5" />
                Continue with GitHub
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2024 WebCraft Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
