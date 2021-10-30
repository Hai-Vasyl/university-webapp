import { Schema, model, Types } from "mongoose";

const schema = new Schema({
  link: { type: String, required: true },
  label: { type: String, required: true },
  content: { type: Types.ObjectId, ref: "NewsEvent", required: true },
  date: { type: Date, required: true },
  lang: { type: String, default: "uk" },
});

export default model("ExtraLink", schema);
