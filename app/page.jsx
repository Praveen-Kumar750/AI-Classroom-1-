"use client"

import dynamic from "next/dynamic"

// Use dynamic import to avoid SSR issues with chart.js
// const StudentReportCard = dynamic(() => import("../src/StudentReportCard"), { ssr: false })
// const QuizReport = dynamic(() => import("../src/QuizReport"), { ssr: false })
// const PricingPage  = dynamic(() => import("../src/PricingPage"), { ssr: false })
const LessonPage  = dynamic(() => import("../src/LessonPage"), { ssr: false })
export default function Home() {
  return <LessonPage  />
}
