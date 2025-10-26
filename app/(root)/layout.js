import NavBar from "@/componets/root/navbar";
import Toggle from "@/componets/root/toggle";
import { ToastContainer } from "react-toastify";

export default function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900">
      <ToastContainer />
      <NavBar />
      {children}
      <Toggle />
    </div>
  );
}
