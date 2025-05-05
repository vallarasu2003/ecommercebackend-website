const express = require("express");
const cors = require("cors");
const sequelize = require("./config/Database");
const userRouter = require("./routes/userRoutes");
const prodRouter = require("./routes/productRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000","http://localhost:3001"], // Adjust to match your frontend URL"
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Routes
app.use("/users", userRouter); // Prefix routes for clarity
app.use("/products", prodRouter);

const PORT = process.env.PORT || 3000;

const run = async () => {
  try {
    await sequelize.sync({ alter: true }); // Sync database models
    console.log("Database tables created/updated");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to start server:", error);
  }
};
run();