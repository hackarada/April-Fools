import React from 'react';
import { ThumbsUp, Heart } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-green-50 flex items-center justify-center p-4">
      <div className="max-w-2xl bg-white p-8 rounded-lg shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <ThumbsUp className="w-8 h-8 text-green-500" />
          <h1 className="text-2xl font-bold text-green-700">Gotcha! Security Lesson Time!</h1>
        </div>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg">Happy April Fools' Day! 🎉 But this is also an important security reminder about:</p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Why you should <span className="font-semibold">always verify links</span> before clicking them</li>
            <li>How easily someone could have sent you to a <span className="font-semibold">malicious website</span></li>
            <li>The importance of checking the source of links, even from people you trust</li>
            <li>Being cautious of unexpected links, even if they seem harmless</li>
          </ul>

          <div className="mt-6 bg-yellow-50 p-4 rounded border border-yellow-200">
            <p className="text-sm text-yellow-800">
              <span className="font-bold">Think about it:</span> If this wasn't from your friend, 
              clicking an unknown link could have led to:
            </p>
            <ul className="mt-2 list-disc pl-6 text-sm text-yellow-800">
              <li>Malware installation</li>
              <li>Phishing attempts</li>
              <li>Credential theft</li>
              <li>Data breaches</li>
            </ul>
          </div>

          <div className="mt-6 bg-green-50 p-4 rounded border border-green-200">
            <p className="text-sm text-green-800">
              <span className="font-bold">Good news:</span> This was just a friendly reminder from someone who cares about your security! 
              Stay vigilant and keep questioning those suspicious links! 🛡️
            </p>
          </div>

          <p className="text-xs text-gray-500 text-center mt-6">
            P.S. You might want to share this lesson with others too! 😉
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-pink-600">
            <Heart className="w-4 h-4" />
            <p className="text-sm font-medium">From your friend - Ermi</p>
            <Heart className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;