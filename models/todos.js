import mongoose, { Schema, model, models } from "mongoose";


const todosSchema = new Schema({
    title: { type: String, require: true },
    userId: { type: Number },
    creationAt: { type: Date, default: Date.now },
    isCompleted: { type: Boolean, default: false },
    completedAt: { type: Date, default: null }
});

const Todos = models.Todos || model("Todos", todosSchema);

export default Todos;