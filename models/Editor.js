const mongoose = require("mongoose");
const { Schema } = mongoose;

const editorSchema = Schema(
  {
    html: {
      type: String,
      trim: true
    },
    css: {
      type: String,
      trim: true
    },
    js: {
      type: String,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

const Editor = mongoose.model("Editor", editorSchema);

module.exports = Editor;
