import "./App.css";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "./components/cards";
import { Checkbox } from "./components/checkbox";
import { FaRegClock } from "react-icons/fa";

export default function App() {
  const [plans, setPlans] = useState([]);
  const [selectedDay, setSelectedDay] = useState(14);

  // Calculate the number of remaining activities
  const remainingActivities = plans.filter((plan) => !plan.completed).length;

  useEffect(() => {
    fetch(
      `https://1720e500-0d58-4df3-920e-3e43952a9b0a-00-1rlvpis8r7fq1.sisko.replit.dev:5000/api/plans?day=${selectedDay}`,
    )
      .then((res) => res.json())
      .then((data) => setPlans(data))
      .catch((err) => console.error("Error:", err));
  }, [selectedDay]);

  const markComplete = (activityId) => {
    fetch(
      "https://1720e500-0d58-4df3-920e-3e43952a9b0a-00-1rlvpis8r7fq1.sisko.replit.dev:5000/api/mark-complete",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ day: selectedDay, activityId }),
      },
    )
      .then(() => {
        setPlans((prev) =>
          prev.map((p) =>
            p.id === activityId ? { ...p, completed: true } : p,
          ),
        );
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      {/* Header Navigation */}
      <div className="day-header">
        <button
          className="px-4 py-3 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
          onClick={() => setSelectedDay((d) => Math.max(14, d - 1))}
          disabled={selectedDay === 14}
        >
          Prev Day
        </button>
        <h2 className="text-lg font-semibold">Day {selectedDay}</h2>
        <button
          className="px-4 py-3 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
          onClick={() => setSelectedDay((d) => Math.min(21, d + 1))}
          disabled={selectedDay === 21}
        >
          Next Day
        </button>
      </div>

      {/* Activities List */}
      <div className="mt-6 w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-3">
          <span style={{ color: "red" }}>{remainingActivities}</span> Activities
          Remaining Today
        </h3>
        <div className="space-y-3">
          {plans.length > 0 ? (
            plans.map(({ id, name, frequency, completed }) => (
              <Card key={id} className="flex items-center justify-between">
                <Checkbox
                  checked={completed}
                  onCheckedChange={() => markComplete(id)}
                />
                <CardContent>
                  <h2 className="text-md font-semibold">{name}</h2>
                  <p className="text-xs text-gray-600">
                    <FaRegClock className="text-gray-500" style={{ marginRight: '8px' }}/> {frequency}{" "}
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500">
              No activities for this day.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
