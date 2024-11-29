const Task = require("../models/Task");

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createTask = async (req, res) => {
  const { title, description, status } = req.body;
  const newTask = new Task({ title, description, status });

  try {
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    // Verifica si el campo "status" está en el body, si es así solo actualiza el status
    if (req.body.status) {
      const updatedStatus = await Task.findByIdAndUpdate(
        req.params.id,
        { status: req.body.status },
        { new: true }
      );

      if (!updatedStatus) {
        return res.status(404).json({ message: "Task not found" });
      }

      return res.status(200).json(updatedStatus);
    }

    // Si no se pasó "status", actualiza todo lo demás
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "Task not found" });
    res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
};
