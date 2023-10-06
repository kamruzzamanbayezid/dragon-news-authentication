import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import qZone1 from '../../../public/qZone1.png';
import qZone2 from '../../../public/qZone2.png';
import qZone3 from '../../../public/qZone3.png';
import UseAuth from "../../Hook/UseAuth";
import toast from "react-hot-toast";

const RightSIdeNav = () => {

      const { googleLogin, githubLogin } = UseAuth();

      const socialLogin = (media) => {
            media()
                  .then(res => {
                        toast.success('Logged in Successfully');
                  })
                  .catch(error => toast.error(error.message))
      }

      return (
            <div className="w-full">
                  <h2 className="text-xl text-[#403F3F] font-bold mb-4">Login with</h2>
                  <div className="flex justify-center mb-7">
                        <div className="w-full">
                              <div className="flex justify-center items-center gap-2 border-2 hover:text-blue-600 hover:border-blue-600 py-2 border-black rounded-lg mb-3">
                                    <span><BsGoogle /></span>
                                    <button onClick={() => socialLogin(googleLogin)}>Login with Google</button>
                              </div>
                              <div className="flex justify-center items-center gap-2 border-2 hover:text-blue-600 hover:border-blue-600 py-2 border-black rounded-lg">
                                    <span><BsGithub /></span>
                                    <button onClick={() => socialLogin(githubLogin)}>Login with Github</button>

                              </div>
                        </div>
                  </div>
                  <div className="mb-5">
                        <h2 className="text-2xl text-[#403F3F] font-bold mb-4">Find us on</h2>
                        <div>
                              <div className="hover:text-blue-600 flex items-center gap-3 p-4 border rounded-t-lg">
                                    <span className="text-3xl"><BsFacebook></BsFacebook></span>
                                    <h3 className="text-[#706F6F] hover:text-blue-600 font-medium text-xl">Facebook</h3>
                              </div>
                              <div className="hover:text-blue-600 flex items-center gap-3 p-4 border">
                                    <span className="text-3xl"><BsTwitter></BsTwitter></span>
                                    <h3 className="text-[#706F6F] hover:text-blue-600 font-medium text-xl">Twitter</h3>
                              </div>
                              <div className="hover:text-blue-600 flex items-center gap-3 p-4 border rounded-b-lg">
                                    <span className="text-3xl"><BsInstagram> </BsInstagram></span>
                                    <h3 className="text-[#706F6F] hover:text-blue-600 font-medium text-xl">Instagram</h3>
                              </div>
                        </div>
                  </div>
                  <div className="bg-[#F3F3F3] mb-5">
                        <h2 className=" p-4 text-2xl text-[#403F3F] font-bold mb-4">Q-Zone</h2>
                        <img className="w-full mb-7" src={qZone1} alt="Kids Photo" />
                        <img className="w-full mb-7" src={qZone2} alt="Kids Photo" />
                        <img className="w-full" src={qZone3} alt="Kids Photo" />
                  </div>
            </div>
      );
};

export default RightSIdeNav;