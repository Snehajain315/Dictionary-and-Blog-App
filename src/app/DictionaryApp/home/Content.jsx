'use client'
import React, { useState } from 'react';
import axios from 'axios';


export default function Content() {
  const [words, setWords] = useState("");
  const [data, setData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`);
      console.log(res.data[0]);
      console.log(res.data[0].meanings[0].definitions[0]);
      setData(res.data[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  function playAudio(){
    if(data.phonetics && data.phonetics[1] && data.phonetics[1].audio)
    {
        const audio= new Audio(data.phonetics[1].audio)
        audio.play()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Dictionary</h1>
          <p className="text-gray-600">Discover the meaning of words</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Search for any word..."
              name="words"
              value={words}
              onChange={(e) => setWords(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              onKeyPress={(e) => e.key === 'Enter' && handleSubmit(e)}
            />
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors duration-200 shadow-md hover:shadow-lg"
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Section */}
        {data && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="border-l-4 border-blue-500 pl-4 mb-6">
            <div className="flex justify-between items-center mb-2">
             <h2 className="text-3xl font-bold text-gray-800 capitalize">
              {data.word}
             </h2>
             <button
             onClick={() => playAudio()}
             className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
             >
             Play
            </button>
           </div>
              {data.phonetic && (
                <p className="text-gray-500 text-lg">/{data.phonetic}/</p>
              )}
            </div>

            <div className="space-y-4">
              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {data.meanings[0].partOfSpeech}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  <span className="font-medium text-gray-800">Definition: </span>
                  {data.meanings[0].definitions[0].definition}
                </p>
                
                {data.meanings[0].definitions[0].example && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-3 border-blue-300">
                    <p className="text-gray-700 italic">
                      <span className="font-medium text-gray-800">Example: </span>
                      "{data.meanings[0].definitions[0].example}"
                    </p>
                  </div>
                )}
              </div>

              <div className="pt-4 border-t border-gray-200">
                <a
                  href={data.sourceUrls}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  View more details on Wiktionary
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!data && (
          <div className="text-center py-12">
            <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Ready to explore?</h3>
            <p className="text-gray-500">Enter a word above to get started with your search</p>
          </div>
        )}
      </div>
    </div>
  );
}