"use client"

import { useEffect, useRef } from "react"
import Chart from "chart.js/auto"

const TrendChart = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart if it exists
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext("2d")

      // Sample data for performance trend
      const labels = ["Test 1", "Mid-Term", "Test 2", "Final"]
      const data = [72, 80, 75, 87]

      // Create chart
      chartInstance.current = new Chart(ctx, {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Performance %",
              data: data,
              fill: false,
              borderColor: "rgba(138, 173, 255, 1)",
              tension: 0.1,
              pointBackgroundColor: "rgba(138, 173, 255, 1)",
              pointRadius: 5,
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
            tooltip: {
              callbacks: {
                label: (context) => context.parsed.y + "%",
              },
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
  }, [])

  return (
    <div className="chart-wrapper">
      <canvas ref={chartRef} height="200"></canvas>
    </div>
  )
}

export default TrendChart
