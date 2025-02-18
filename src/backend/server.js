import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());

const activities = {
  14: [
    {
      id: 1,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 2,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 3, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 4,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 5,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 6, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 7, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 8,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  15: [
    {
      id: 9,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 10,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 11, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 12,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 13,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 14, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 15, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 16,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  16: [
    {
      id: 17,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 18,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 19, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 20,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 21,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 22, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 23, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 24,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  17: [
    {
      id: 25,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 26,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 27, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 28,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 29,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 30, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 31, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 32,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  18: [
    {
      id: 33,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 34,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 35, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 36,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 37,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 38, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 39, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 40,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  19: [
    {
      id: 41,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 42,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 43, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 44,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 45,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 46, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 47, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 48,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  20: [
    {
      id: 49,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 50,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 51, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 52,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 53,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 54, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 55, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 56,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
  21: [
    {
      id: 57,
      name: "Advanced Mobility exercises",
      frequency: "Maximize",
      completed: false,
    },
    {
      id: 58,
      name: "Knowledge Boosters",
      frequency: "2x/Day",
      completed: false,
    },
    { id: 59, name: "Visual Solfege", frequency: "Maximize", completed: false },
    {
      id: 60,
      name: "Auditory Memory (Song 2)",
      frequency: "1x/Day",
      completed: false,
    },
    {
      id: 61,
      name: "Auditory Magic (Set 2)",
      frequency: "2 sounds/Day",
      completed: false,
    },
    { id: 62, name: "Talk To Listen", frequency: "1x/Day", completed: false },
    { id: 63, name: "Finger Skills", frequency: "Maximize", completed: false },
    {
      id: 64,
      name: "Stimulus Explosion",
      frequency: "2x/Week",
      completed: false,
    },
  ],
};

// GET API to fetch activities for a specific day
app.get("/api/plans", (req, res) => {
  const day = parseInt(req.query.day);
  if (!day || !activities[day]) {
    return res.status(400).json({ error: "Invalid or missing day parameter" });
  }
  res.status(200).json(activities[day]);
});

// POST API to mark an activity as complete
app.post("/api/mark-complete", (req, res) => {
  const { day, activityId } = req.body;
  if (!day || !activityId || !activities[day]) {
    return res.status(400).json({ error: "Invalid request" });
  }

  const activity = activities[day].find((a) => a.id === activityId);
  if (activity) {
    activity.completed = true;
    res.status(200).json({ message: "Activity marked complete", activity });
  } else {
    res.status(404).json({ error: "Activity not found" });
  }
});

// Handle undefined API routes
app.use("/api/*", (req, res) => {
  res.status(404).json({ error: "API route not found" });
});

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
