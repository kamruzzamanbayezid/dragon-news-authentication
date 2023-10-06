import Header from "../../SharedComponents/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import AllCategory from "../../Components/AllCategory/AllCategory";
import DragonNews from "../../Components/DragonNews/DragonNews";
import RightSIdeNav from "../../SharedComponents/RightSIdeNav/RightSIdeNav";
import CreateNewspaper from "../../Components/CreateNewspaper/CreateNewspaper";

const Home = () => {

      const Allcategorys = useLoaderData();

      const [news, setNews] = useState([]);
      const [displayNews, setDisplayNews] = useState([]);
      const [showMore, setShowMore] = useState(false);

      useEffect(() => {
            const fetchData = async () => {
                  const res = await fetch('/news.json')
                  const data = await res.json();
                  setNews(data)
                  setDisplayNews(data)
            }

            fetchData();
      }, []);


      const handleNews = () => {
            setShowMore(!showMore)
      }

      return (
            <div >
                  <Header></Header>

                  {/* Latest news */}
                  <div className="bg-[#F3F3F3] p-4 flex items-center mt-7">
                        <button className="py-2 px-6 hover:bg-red-600 text-[#FFF] bg-[#D72050]">Latest</button>
                        <Marquee pauseOnHover={true}>
                              <p className="text-[#403F3F] text-lg ml-10 font-semibold">Match Highlights: Germany vs Spain — as it happened!.....</p>
                              <p className="text-[#403F3F] text-lg ml-10 font-semibold">Biden Pledges Nearly $3 Billion To Ukraine.....</p>
                              <p className="text-[#403F3F] text-lg ml-10 font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup.....</p>
                        </Marquee>
                  </div>

                  {/* Navbar */}
                  <Navbar></Navbar>

                  {/* News Portal */}
                  <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-14 gap-6">
                        <div>
                              <h2 className="text-xl text-[#403F3F] font-semibold mb-5">All Category</h2>
                              <div className='bg-[#E7E7E7] rounded-md mb-7'>
                                    <h2 className='text-[#403F3F] text-xl text-center font-semibold py-4 px-10'>National News</h2>
                              </div>

                              {/* All category headline */}
                              {
                                    Allcategorys?.map(allCategory => <div key={allCategory.id}>
                                          <AllCategory key={allCategory.id} allCategory={allCategory}></AllCategory>

                                    </div>)
                              }

                              {/* news Under all category */}
                              {
                                    news?.slice(0, 3).map(singleNews =>
                                          <div key={singleNews.id}>
                                                <div className="mb-4">
                                                      <img className="mb-5" src={singleNews.image_url} alt="image_url" />
                                                      <h2 className="text-[#403F3F] text-xl font-semibold mb-5">{singleNews.title}</h2>
                                                      <div className="flex items-center gap-2">
                                                            <BsFillCalendarDateFill />
                                                            <p className="text-[#9F9F9F] font-medium">{singleNews.author.published_date}</p>
                                                      </div>
                                                </div>
                                          </div>)
                              }

                        </div>


                        {/* Dragon News */}
                        <div className=" lg:col-span-2">
                              <h2 className="text-xl text-[#403F3F] font-semibold mb-5">Dragon News Home</h2>
                              {
                                    showMore ?
                                          <div>
                                                {

                                                      displayNews?.map(dragonNews => <DragonNews key={dragonNews.id} dragonNews={dragonNews}></DragonNews>)
                                                }
                                          </div>
                                          :
                                          <div>
                                                {
                                                      displayNews?.slice(0, 5).map(dragonNews => <DragonNews key={dragonNews.id} dragonNews={dragonNews}></DragonNews>)
                                                }
                                          </div>
                              }
                              <div className="flex justify-center items-center">
                                    {
                                          showMore ?
                                                <button onClick={handleNews} className="py-2 px-6 hover:bg-red-600 text-[#FFF] bg-[#D72050]">Show Less</button>
                                                :
                                                <button onClick={handleNews} className="py-2 px-6 hover:bg-red-600 text-[#FFF] bg-[#D72050]">Show More</button>
                                    }
                              </div>

                        </div>

                        {/* RIght side nav */}
                        <div >
                              <RightSIdeNav></RightSIdeNav>
                              <CreateNewspaper></CreateNewspaper>
                        </div>
                  </div>
            </div>
      );
};

export default Home;