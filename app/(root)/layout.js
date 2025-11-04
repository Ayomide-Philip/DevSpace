import NavBar from "@/componets/root/navbar";
import Toggle from "@/componets/root/toggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900">
      <NavBar />
      {children}
      <Toggle />
    </div>
  );
}
