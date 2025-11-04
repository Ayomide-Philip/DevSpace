import { Loader } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Loader className="animate-spin text-blue-500 h-10 w-10" />
    </div>
  );
}
