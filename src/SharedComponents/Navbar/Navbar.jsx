
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../../Hook/UseAuth';
import toast from 'react-hot-toast';

const Navbar = () => {

      const { user, Logout } = UseAuth();

      const handleLogOut = () => {
            Logout()
                  .then(() => {
                        toast.success('Logged Out Successfully');
                  })
                  .catch(error => toast.error(error.message))
      }

      const links = <>
            <li><NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#706F6F] text-lg font-normal" : ""
                  }
            >
                  Home
            </NavLink></li>
            <li><NavLink
                  to="/about"
                  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#706F6F] text-lg font-normal" : ""
                  }
            >
                  About
            </NavLink></li>
            <li><NavLink
                  to="/career"
                  className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#706F6F] text-lg font-normal" : ''
                  }
            >
                  Career
            </NavLink></li>
      </>

      return (
            <div>

                  <div className="navbar bg-base-100">
                        <div className="navbar-start">
                              <div className="dropdown">
                                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                    </label>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 w-52">
                                          {links}
                                    </ul>
                              </div>

                        </div>
                        <div className="navbar-center hidden lg:flex">
                              <ul className="menu menu-horizontal px-1">
                                    {links}
                              </ul>
                        </div>
                        <div className="navbar-end">
                              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                          {
                                                user?.photoURL && <img src={user.photoURL} />
                                          }
                                    </div>
                              </label>
                              <div>
                                    {
                                          user ? <button onClick={handleLogOut} className="text-[#FFF] text-xl ml-2 font-semibold py-2 px-7 bg-[#403F3F] rounded-none">Log Out</button>
                                                :
                                                <Link to="/login"><button className="text-[#FFF] text-xl ml-2 font-semibold py-2 px-7 bg-[#403F3F] rounded-none">Login</button></Link>
                                    }
                              </div>
                        </div>
                  </div>

            </div>
      );
};

export default Navbar;