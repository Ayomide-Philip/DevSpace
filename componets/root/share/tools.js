import generateIcon from "@/libs/generateIcon";

export default function ShareTools({ tools }) {
  return (
    <div className="flex flex-col px-4 gap-2">
      <h1 className="font-semibold text-xl">Tools</h1>
      {tools.length > 0 ? (
        <div className="flex gap-3 flex-wrap">
          {tools.map((tool, idx) => {
            return (
              <div
                key={idx}
                className="bg-blue-400 p-1 px-3 rounded-xl text-sm flex gap-1 justify-center items-center"
              >
                {generateIcon({ name: tool.toLowerCase() })}
                {tool}
              </div>
            );
          })}
        </div>
      ) : (
        <div className="h-15 flex justify-center items-center">
          <p className="text-base font-light">No tools added yet</p>
        </div>
      )}
    </div>
  );
}
