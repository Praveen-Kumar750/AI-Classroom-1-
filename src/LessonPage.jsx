


const LessonPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-sm">
      <div className="flex items-start justify-between mb-8 pb-4 border-b border-gray-200">
        <a
          href="#"
          className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-700"
        >
          <span className="text-xl">←</span>
        </a>
        <div className="flex-1 mx-4">
          <h1 className="text-2xl font-semibold text-gray-800 mb-1">
            Introduction to Machine Learning
          </h1>
          <p className="text-sm text-gray-500">Last updated: May 15, 2023</p>
        </div>
        <div className="flex items-center gap-2 font-semibold">
          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-400"></div>
          <span>AI Classroom</span>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 mb-8">
        {/* Left Content Section */}
        <div className="flex-1 border border-blue-100 rounded-lg p-8">
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-dashed border-blue-100">
              What is Machine Learning?
            </h2>
            <p className="mb-4 leading-relaxed">
              Machine learning is a branch of artificial intelligence (AI) and
              computer science which focuses on the use of data and algorithms
              to imitate the way that humans learn, gradually improving its
              accuracy.
            </p>
            <p className="leading-relaxed">
              IBM has a simpler definition: "Machine learning is a type of
              artificial intelligence that allows software applications to
              become more accurate at predicting outcomes without being
              explicitly programmed to do so."
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-dashed border-blue-100">
              Key Concepts
            </h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">•</span>
                <div>
                  <strong>Supervised Learning:</strong> The algorithm learns
                  from labeled training data.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">•</span>
                <div>
                  <strong>Unsupervised Learning:</strong> The algorithm learns
                  patterns from unlabeled data.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">•</span>
                <div>
                  <strong>Reinforcement Learning:</strong> The algorithm learns
                  by trial and error using feedback from its actions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">•</span>
                <div>
                  <strong>Features:</strong> The input variables used to make
                  predictions.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-600 font-bold mr-2">•</span>
                <div>
                  <strong>Labels:</strong> The output variables we're trying to
                  predict.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-dashed border-blue-100">
              Applications of ML
            </h2>
            <p className="mb-4 leading-relaxed">
              Machine learning is powering many of the services we use today:
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-indigo-600">
                <h3 className="font-semibold mb-2">Recommendation Systems</h3>
                <p className="text-sm text-gray-600">
                  Used by Netflix, Amazon, Spotify
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-indigo-600">
                <h3 className="font-semibold mb-2">Image Recognition</h3>
                <p className="text-sm text-gray-600">
                  Facebook photo tagging, medical imaging
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-indigo-600">
                <h3 className="font-semibold mb-2">
                  Natural Language Processing
                </h3>
                <p className="text-sm text-gray-600">
                  Chatbots, translation services
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-md border-l-4 border-indigo-600">
                <h3 className="font-semibold mb-2">Predictive Analytics</h3>
                <p className="text-sm text-gray-600">
                  Stock market, weather forecasting
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="w-full lg:w-[400px] flex flex-col gap-8">
          <div className="text-center">
            <img
              src="/image1.jpg?height=225&width=400"
              alt="Machine learning process flow diagram"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-xs text-gray-500">
              Fig 1.1 - Machine learning process flow diagram showing data
              input, model training, and prediction output.
            </p>
          </div>

          <div className="text-center">
            <img
              src="/image2.jpg?height=225&width=400"
              alt="Types of machine learning"
              className="w-full rounded-lg mb-2"
            />
            <p className="text-xs text-gray-500">
              Fig 1.2 - The three main types of machine learning: supervised,
              unsupervised, and reinforcement learning.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-200">
          <span className="text-lg">↓</span>
          Download
        </button>
      </div>
    </div>
  );
};

export default LessonPage;
