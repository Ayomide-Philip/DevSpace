import ProfileIcon from "./profileicon";
import DashboardDesktopNavbar from "./desktopnavbar";
export default function DashbaordHeader() {
  return (
    <>
      <div className="bg-gray-500 dark:bg-gray-900 h-20 ">
        <div className="h-full flex items-center justify-between px-3">
          <div className="flex items-center">
            <img src="/images/logo-bg.png" alt="logo" className="h-15 w-15" />
          </div>
          <div className="flex gap-3">
            <ProfileIcon />
          </div>
        </div>
      </div>
      <DashboardDesktopNavbar />
    </>
  );
}
