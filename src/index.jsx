import React from "react"
import ReactDOM from "react-dom/client"
// import StudentReportCard from "./StudentReportCard"
// import QuizReport from "./QuizReport"
// import PricingPage from "./PricingPage"
import LessonPage from "./LessonPage"
import "./index.css"

// Uncomment the component you want to view
const App = () => {
  return (
    <div>
      {/* <StudentReportCard /> */}
      {/* <QuizReport /> */}
      {/* <PricingPage /> */}
      <LessonPage />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
