import NavBar from "@/componets/root/navbar";
import Toggle from "@/componets/root/toggle";
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
