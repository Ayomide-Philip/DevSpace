import mongoose, { model, Schema, models } from "mongoose";

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
    },
    likes: {
      type: [mongoose.Schema.Types.ObjectId],
      default: [],
      ref: "User",
    },
    comments: {
      type: [
        {
          userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
          },
          comment: {
            type: String,
            required: true,
            trim: true,
          },
          date: {
            type: Date,
            default: Date.now,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

postSchema.index({ userId: 1, title: 1 }, { unique: true });

const Post = models.Post || model("Post", postSchema);
export default Post;
