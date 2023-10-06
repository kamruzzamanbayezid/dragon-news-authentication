import { Link } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const Register = () => {

      const { createUser, profileUpdate } = UseAuth();

      const handleRegister = e => {
            e.preventDefault();

            // value of input field
            const form = new FormData(e.currentTarget);
            const name = form.get('text');
            const email = form.get('email');
            const photo_url = form.get('photo-url');
            const password = form.get('password')

            // validation
            if (password.length < 6) {
                  toast.error('Password must have 6 character or more');
                  return
            }
            else if (!/[A-Z]/.test(password)) {
                  toast.error('Your Password is weak!');
                  return;
            }

            // create user
            createUser(email, password)
                  .then(res => {

                        profileUpdate(name, photo_url)
                              .then(() => {
                                    toast.success('Your account has been Created')
                              })
                              .catch(error => toast.error(error.message))
                  })
                  .catch(error => {
                        toast.error(error.message)
                  })
      }

      return (
            <div>
                  <div>
                        <Navbar ></Navbar>

                        <div className="flex justify-center items-center lg:mt-20">
                              <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                                    <form className="space-y-6" onSubmit={handleRegister}>
                                          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                                          <div>
                                                <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                                <input type="text" name="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                          </div>
                                          <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                                          </div>
                                          <div>
                                                <label htmlFor="photo-url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Photo Url</label>
                                                <input type="url" name="photo-url" id="photo-url" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Photo_url" required />
                                          </div>
                                          <div>
                                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                                          </div>
                                          <div>
                                                <span>Accept Our <Link to="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">terms and condition</Link></span>
                                          </div>
                                          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register to your account</button>
                                          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                                ALready have an account? <Link to='/login' className="text-blue-700 hover:underline dark:text-blue-500">Login</Link>
                                          </div>
                                    </form>
                              </div>
                        </div>

                  </div>
            </div>
      );
};

export default Register;