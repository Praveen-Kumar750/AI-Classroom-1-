"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const PerformanceChart = ({ subjects }) => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      // Extract data from subjects
      const labels = subjects.map((subject) => subject.name.substring(0, 4)) // Abbreviate subject names
      const data = subjects.map((subject) => subject.obtained)

      // Create chart
      chartInstance.current = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Marks Obtained",
              data: data,
              backgroundColor: labels.map((label) => {
                if (label === "Engl") return "rgba(186, 178, 255, 0.8)"
                return "rgba(138, 173, 255, 0.8)"
              }),
              borderColor: labels.map((label) => {
                if (label === "Engl") return "rgba(186, 178, 255, 1)"
                return "rgba(138, 173, 255, 1)"
              }),
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 100,
              ticks: {
                stepSize: 25,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [subjects])

  return (
    <div className="chart-wrapper">
      <canvas ref={chartRef} height="200"></canvas>
    </div>
  )
}

export default PerformanceChart
