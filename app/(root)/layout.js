import NavBar from "@/componets/root/navbar";
import Toggle from "@/componets/root/toggle";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Layout({ children }) {
  return (
    <div className="dark:bg-gray-900">
      <ToastContainer
        position="top-center" // Apply globally to all toasts
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        progressClassName={undefined}
        closeButton={false}
        pauseOnHover={true}
        draggable={true}
        toastClassName="!rounded-full dark:bg-gray-800 dark:text-white !text-sm !font-bold text-center! text-black" // Global styles for all toasts
      />
      <NavBar />
      {children}
      <Toggle />
    </div>
  );
}
