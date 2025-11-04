"use client";
import { Plus, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
export default function FormSkills({ skills }) {
  const [userSkills, setUserSkills] = useState(skills || []);
  const [userInputedSkills, setUserInputedSkills] = useState("");
  return (
    <div className="mb-5 pt-3">
      <label className="mb-5 block text-base font-semibold text-black dark:text-white sm:text-xl">
        <div className="flex justify-between">
          <h1>Skills</h1>
          <span
            className="dark-rounded-button cursor-pointer"
            onClick={() => {
              if (
                userInputedSkills == "" ||
                userInputedSkills.trim() == "" ||
                userInputedSkills.length <= 2
              ) {
                return toast.error("You didn't input any skills");
              }

              setUserSkills((prev) => {
                return [...prev, userInputedSkills];
              });
              setUserInputedSkills("");
            }}
          >
            <Plus />
          </span>
        </div>
      </label>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <input
              type="text"
              name="userSkill"
              id="skill"
              value={userInputedSkills}
              placeholder="Enter your Skills"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
              onChange={(e) => {
                setUserInputedSkills(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          {userSkills.length !== 0 &&
            userSkills.map((skills, idx) => {
              return (
                <div className="mb-5 relative" key={idx}>
                  <input
                    key={idx}
                    type="text"
                    name="skills[]"
                    value={skills}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-black outline-none focus:border-blue-600 focus:shadow-md"
                    readOnly
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-3 dark-rounded-button"
                  >
                    <Trash
                      className="w-3 h-3"
                      onClick={() => {
                        setUserSkills((prev) => {
                          return prev.filter((p) => {
                            return p !== skills;
                          });
                        });
                      }}
                    />
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
