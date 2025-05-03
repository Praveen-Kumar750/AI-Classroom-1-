import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js"
import { Bar, Line } from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend)

const StudentReportCard = () => {
  // Bar chart data for subject comparison
  const barChartData = {
    labels: ["Math", "Physics", "Chem", "English", "CS", "PE"],
    datasets: [
      {
        data: [95, 89, 85, 78, 92, 48],
        backgroundColor: [
          "rgba(138, 173, 255, 0.8)",
          "rgba(138, 173, 255, 0.8)",
          "rgba(138, 173, 255, 0.8)",
          "rgba(186, 178, 255, 0.8)",
          "rgba(138, 173, 255, 0.8)",
          "rgba(138, 173, 255, 0.8)",
        ],
        borderWidth: 0,
      },
    ],
  }

  // Line chart data for performance trend
  const lineChartData = {
    labels: ["Test 1", "Mid-Term", "Test 2", "Final"],
    datasets: [
      {
        label: "Performance %",
        data: [72, 80, 75, 87],
        fill: false,
        borderColor: "rgba(138, 173, 255, 1)",
        tension: 0.1,
        pointBackgroundColor: "rgba(138, 173, 255, 1)",
        pointRadius: 5,
      },
    ],
  }

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
  }

  const lineChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          stepSize: 25,
        },
      },
    },
  }

  return (
    <div className="bg-gray-50 min-h-screen p-6 flex justify-center">
      <div className="bg-white rounded-lg shadow-md w-full max-w-5xl">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-semibold text-gray-800">AI Classroom | Student Report Card</h1>
        </div>

        <div className="px-6 py-4 grid grid-cols-3 gap-4">
          <div>
            <div className="text-xs text-gray-500">Name</div>
            <div className="font-medium">Sarah Johnson</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Roll Number</div>
            <div className="font-medium">CL2023-045</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Class & Section</div>
            <div className="font-medium">XII - A</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Exam Name</div>
            <div className="font-medium">Terminal Examination</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Date of Exam</div>
            <div className="font-medium">15 Nov 2023</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Overall Percentage</div>
            <div className="flex items-center">
              <span className="font-medium">87.4%</span>
              <span className="ml-2 text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+7%</span>
            </div>
          </div>
        </div>

        <div className="mx-6 mt-4 bg-blue-100 rounded-lg overflow-hidden">
          <div className="p-4">
            <h2 className="text-lg font-medium text-gray-800">Subject-wise Performance</h2>
          </div>
          <div className="bg-white">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 text-left font-medium text-gray-500">Subject</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-500">Total Marks</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-500">Obtained</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-500">Grade</th>
                  <th className="py-3 px-4 text-left font-medium text-gray-500">Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Mathematics</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">95</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-green-50 text-green-600">
                      A+
                    </span>
                  </td>
                  <td className="py-3 px-4">Excellent!</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Physics</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">89</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-green-50 text-green-600">
                      A
                    </span>
                  </td>
                  <td className="py-3 px-4">Very good</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Chemistry</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">85</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-green-50 text-green-600">
                      A
                    </span>
                  </td>
                  <td className="py-3 px-4">Good effort</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">English</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">78</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-yellow-50 text-yellow-600">
                      B+
                    </span>
                  </td>
                  <td className="py-3 px-4">Can improve</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 px-4">Computer Science</td>
                  <td className="py-3 px-4">100</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">92</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-green-50 text-green-600">
                      A+
                    </span>
                  </td>
                  <td className="py-3 px-4">Outstanding</td>
                </tr>
                <tr>
                  <td className="py-3 px-4">Physical Education</td>
                  <td className="py-3 px-4">50</td>
                  <td className="py-3 px-4 text-blue-600 font-semibold">48</td>
                  <td className="py-3 px-4">
                    <span className="inline-block px-2 py-1 rounded text-center min-w-[30px] font-semibold bg-green-50 text-green-600">
                      A+
                    </span>
                  </td>
                  <td className="py-3 px-4">Excellent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 p-6">
          <div>
            <h3 className="text-base font-medium text-gray-800 mb-4">Subject-wise Comparison</h3>
            <div className="h-64 bg-white p-4 rounded-lg shadow-sm">
              <Bar data={barChartData} options={barChartOptions} />
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium text-gray-800 mb-4">Performance Trend</h3>
            <div className="h-64 bg-white p-4 rounded-lg shadow-sm">
              <Line data={lineChartData} options={lineChartOptions} />
            </div>
          </div>
        </div>

        <div className="mx-6 mb-6 bg-gray-50 rounded-lg p-6 flex">
          <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold flex-shrink-0">
            AI
          </div>
          <div className="ml-4">
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

        <div className="px-6 py-4 border-t border-gray-200 flex justify-between items-center">
          <div className="text-sm">
            <p>Manager XYZ School</p>
            <p className="text-gray-500 italic">Undersigned</p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-sm mb-2">AI-Powered Performance Analysis</p>
            <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded flex items-center gap-2 text-sm hover:bg-gray-200">
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentReportCard
