const QuizReport = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-5xl">
        <div className="p-4 bg-indigo-200 rounded-t-lg">
          <h1 className="text-xl font-semibold text-gray-800">Quiz Report - Physics</h1>
        </div>

        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
              R
            </div>
            <div>
              <h3 className="text-lg font-medium">Rohan Jain</h3>
              <p className="text-gray-600 text-sm">Class XII - Section A</p>
            </div>
          </div>

          <div className="flex gap-8 mb-6">
            <div className="flex items-center gap-2">
              <div className="text-xl">📅</div>
              <div>
                <p className="text-sm">Date: 15 Nov 2023</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="text-xl">⏱️</div>
              <div>
                <p className="text-sm">Duration: 30 minutes</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">Total Questions</div>
              <div className="text-xl font-semibold">20</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">Correct Answers</div>
              <div className="text-xl font-semibold">16</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">Accuracy</div>
              <div className="text-xl font-semibold">80%</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-sm text-gray-500 mb-2">Status</div>
              <div className="text-xl font-semibold text-green-600 flex items-center gap-2">
                Passed
                <span className="w-5 h-5 bg-green-600 text-white rounded-full flex items-center justify-center text-xs">
                  ✓
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium text-gray-800">Question Breakdown</h2>
            <div className="flex gap-2">
              <button className="text-xs border border-gray-300 px-3 py-1.5 rounded bg-gray-100">All Questions</button>
              <button className="text-xs border border-gray-300 px-3 py-1.5 rounded">Sort by Number</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="py-3 px-4 font-medium text-gray-600">Q.No</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Question</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Your Answer</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Correct Answer</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Result</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Time Taken</th>
                  <th className="py-3 px-4 font-medium text-gray-600">Topic</th>
                  <th className="py-3 px-4 font-medium text-gray-600"></th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">1</td>
                  <td className="py-3 px-4">What is the SI unit of force?</td>
                  <td className="py-3 px-4">Newton</td>
                  <td className="py-3 px-4">Newton</td>
                  <td className="py-3 px-4 text-green-600">✓ Correct</td>
                  <td className="py-3 px-4">12s</td>
                  <td className="py-3 px-4">Dynamics</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-500">▼</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">2</td>
                  <td className="py-3 px-4">Which law relates to "For every action..."</td>
                  <td className="py-3 px-4">Newton's 1st Law</td>
                  <td className="py-3 px-4">Newton's 3rd Law</td>
                  <td className="py-3 px-4 text-red-600">✗ Incorrect</td>
                  <td className="py-3 px-4">18s</td>
                  <td className="py-3 px-4">Dynamics</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-500">▼</button>
                  </td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">3</td>
                  <td className="py-3 px-4">The speed of light in vacuum is...</td>
                  <td className="py-3 px-4">3 × 10⁸ m/s</td>
                  <td className="py-3 px-4">3 × 10⁸ m/s</td>
                  <td className="py-3 px-4 text-green-600">✓ Correct</td>
                  <td className="py-3 px-4">8s</td>
                  <td className="py-3 px-4">Optics</td>
                  <td className="py-3 px-4">
                    <button className="text-gray-500">▼</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="p-6 bg-gray-50 flex gap-4">
          <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
            AI
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Personalized Feedback from AI Mentor</h3>
            <div className="mb-3">
              <strong>Strengths:</strong> Your performance in Mathematics and Computer Science is exceptional, showing
              strong analytical and problem-solving skills. You've demonstrated consistent improvement throughout the
              term.
            </div>
            <div className="mb-3">
              <strong>Areas to Improve:</strong> English scores show room for improvement, particularly in essay
              writing. Focus on expanding vocabulary and structuring arguments more effectively.
            </div>
            <div>
              <strong>Recommendations:</strong>
              <ul className="list-disc ml-6 mt-2">
                <li className="mb-1">Use our AI Writing Assistant for English practice</li>
                <li className="mb-1">Join the weekly problem-solving club for Math enrichment</li>
                <li>Allocate 30 minutes daily for vocabulary building</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-6 bg-gray-50 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-gray-200">
          <div className="text-sm text-gray-600">Attempts: 3 | Best Score: 85%</div>
          <div className="flex flex-wrap gap-3">
            <button className="border border-gray-300 px-4 py-2 rounded text-sm">Retake Quiz</button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded text-sm">Practice Weak Areas</button>
            <button className="border border-gray-300 px-4 py-2 rounded text-sm flex items-center gap-2">
              Share Score
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizReport
