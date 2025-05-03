"use client"

import { useState } from "react"

const Navbar = () => {
  return (
    <nav className="bg-white py-4 px-8 flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-400 mr-2"></div>
        <span className="font-bold text-xl">AI Classroom</span>
      </div>

      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <a href="#" className="font-medium">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Contests
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Individual
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Rewards
          </a>
        </li>
        <li>
          <a href="#" className="font-medium">
            Contact Us
          </a>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <div className="flex rounded-full overflow-hidden">
          <button className="px-4 py-2 text-sm bg-indigo-600 text-white">English</button>
          <button className="px-4 py-2 text-sm bg-indigo-100">Hindi</button>
        </div>
        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </nav>
  )
}

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("monthly")
  const [classesCount, setClassesCount] = useState("1-3")
  const [studentsPerClass, setStudentsPerClass] = useState("30")
  const [teachersCount, setTeachersCount] = useState("1-10")

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-12 px-8 text-center rounded-b-3xl">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">Scalable Plans for Every Institution</h1>
          <p className="text-xl text-gray-700 mb-8">
            Start with just <span className="font-bold text-gray-900">₹999/month</span>. Customize as you grow.
          </p>
          <button className="bg-indigo-600 text-white px-8 py-3 rounded-md font-medium text-lg hover:bg-indigo-700 transition-colors">
            Get Started
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 my-8">
        <span
          className={`text-base cursor-pointer ${billingCycle === "monthly" ? "text-gray-900 font-medium" : "text-gray-500"}`}
          onClick={() => setBillingCycle("monthly")}
        >
          Monthly
        </span>

        <label className="relative inline-block w-12 h-6">
          <input
            type="checkbox"
            className="opacity-0 w-0 h-0"
            checked={billingCycle === "yearly"}
            onChange={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
          />
          <span
            className={`absolute cursor-pointer inset-0 rounded-full ${billingCycle === "yearly" ? "bg-indigo-600" : "bg-gray-300"} transition-colors`}
          >
            <span
              className={`absolute w-4 h-4 bg-white rounded-full top-1 transition-all ${billingCycle === "yearly" ? "left-7" : "left-1"}`}
            ></span>
          </span>
        </label>

        <span
          className={`text-base cursor-pointer ${billingCycle === "yearly" ? "text-gray-900 font-medium" : "text-gray-500"}`}
          onClick={() => setBillingCycle("yearly")}
        >
          Yearly <span className="text-indigo-600 text-sm">(Save 15%)</span>
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-16 grid md:grid-cols-2 gap-8">
        <div className="border border-gray-200 rounded-lg p-8 relative">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Starter Plan</h2>
            <div className="bg-blue-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium">Popular</div>
          </div>

          <div className="mb-4">
            <span className="text-2xl font-semibold align-top">₹</span>
            <span className="text-5xl font-bold">999</span>
            <span className="text-gray-500 text-base">/month</span>
          </div>

          <p className="text-gray-600 mb-6">For small institutions just getting started</p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              Up to 3 classes
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              30 students/class
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              10 teachers
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-600 font-bold">✓</span>
              Notes-to-video conversion
            </li>
          </ul>
        </div>

        <div className="border border-gray-200 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Need More? Customize Your Plan</h2>

          <div className="mb-6">
            <label className="block font-medium mb-2">Number of Classes</label>
            <div className="relative">
              <select
                value={classesCount}
                onChange={(e) => setClassesCount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 appearance-none text-sm"
              >
                <option value="1-3">1-3 classes (included in base)</option>
                <option value="4-10">4-10 classes (+₹500/month)</option>
                <option value="11-20">11-20 classes (+₹1000/month)</option>
                <option value="unlimited">Unlimited classes (+₹2000/month)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Students per Class</label>
            <div className="relative">
              <select
                value={studentsPerClass}
                onChange={(e) => setStudentsPerClass(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 appearance-none text-sm"
              >
                <option value="30">Up to 30 (included in base)</option>
                <option value="50">Up to 50 (+₹300/month)</option>
                <option value="100">Up to 100 (+₹700/month)</option>
                <option value="unlimited">Unlimited (+₹1500/month)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block font-medium mb-2">Number of Teachers</label>
            <div className="relative">
              <select
                value={teachersCount}
                onChange={(e) => setTeachersCount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md bg-gray-50 appearance-none text-sm"
              >
                <option value="1-10">1-10 teachers (included in base)</option>
                <option value="11-25">11-25 teachers (+₹400/month)</option>
                <option value="26-50">26-50 teachers (+₹800/month)</option>
                <option value="unlimited">Unlimited teachers (+₹1500/month)</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500">
                ▼
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PricingPage
