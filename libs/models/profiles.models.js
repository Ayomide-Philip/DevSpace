import { models, model, Schema } from "mongoose";

const profilesSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    bio: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
    },
    skills: {
      type: [String],
      default: [],
    },
    tools: {
      type: [String],
      default: [],
    },
    urls: {
      github: {
        type: String,
        default: "",
      },
      twitter: {
        type: String,
        default: "",
      },
      instagram: {
        type: String,
        default: "",
      },
      linkedin: {
        type: String,
        default: "",
      },
      portfolio: {
        type: String,
        default: "",
      },
    },
  },
  { timestamps: true }
);

const Profile = models.Profile || model("Profile", profilesSchema);
export default Profile;
