import { useLoaderData, useParams } from "react-router-dom";
import Header from "../../SharedComponents/Header/Header";
import RightSIdeNav from "../../SharedComponents/RightSIdeNav/RightSIdeNav";
import { useEffect, useState } from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";

const NewsDetails = () => {

      const [findNews, setFindNews] = useState({});

      const newsData = useLoaderData();

      const { id } = useParams();

      useEffect(() => {
            const findData = newsData.find((newsDetails) => newsDetails._id === id);
            setFindNews(findData);
      }, [newsData, id])

      return (
            <>
                  {
                        findNews && <div>
                              <div className="mb-10">
                                    <Header></Header>
                                    <Navbar></Navbar>
                              </div>
                              <h2 className="text-2xl text-[#403F3F] font-semibold">Dragon News</h2>
                              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                                    <div className="lg:col-span-3 h-fit border-2 p-7 mt-6">
                                          <img className='mb-7' src={findNews.image_url} alt="thumbnail_url" />
                                          <h2 className='text-[#403F3F] text-xl font-bold mt-7 mb-5'>{findNews.title}</h2>
                                          <p className='text-[#706F6F] font-normal pb-4'>{findNews.details}</p>
                                    </div>
                                    <div className="">
                                          <RightSIdeNav></RightSIdeNav>
                                    </div>
                              </div>

                        </div>
                  }
            </>
      );
};

export default NewsDetails;