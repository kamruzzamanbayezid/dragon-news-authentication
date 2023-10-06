import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

const Root = () => {
      return (
            <div className="max-w-6xl mx-auto my-12 lg:p-0 p-2">
                  <Outlet />
                  <Toaster />
            </div>
      );
};

export default Root;