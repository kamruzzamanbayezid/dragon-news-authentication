import { Rating } from '@mui/material';
import PropTypes from 'prop-types';
import { BsBookmark, BsShare, BsFillEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const DragonNews = ({ dragonNews }) => {

      const { _id, author, title, image_url, details, rating, total_view } = dragonNews;

      return (
            <div className='border mb-7 bg-[#FFF] rounded-md'>

                  {/* Author details */}
                  <div className='bg-[#F3F3F3] flex justify-between items-center
                   p-5'>
                        <div className='flex items-center gap-2'>
                              <img className='w-12 rounded-full' src={author.img} alt="Author image" />
                              <div>
                                    <h4 className='text-[#403F3F] font-semibold'>{author.name}</h4>
                                    <p className='text-[#706F6F] font-normal'>{author.published_date}</p>
                              </div>
                        </div>
                        <div className='flex items-center gap-2'>
                              <BsBookmark className='text-2xl'></BsBookmark>
                              <BsShare className='text-2xl'></BsShare>
                        </div>
                  </div>

                  {/* news */}
                  <div className='p-5'>
                        <h2 className='text-[#403F3F] text-xl font-bold mb-5'>{title}</h2>
                        <img className='mb-7' src={image_url} alt="thumbnail_url" />

                        {
                              details?.length > 100 ?
                                    <div className='border-b pb-4'>
                                          <p className='text-[#706F6F] font-normal'>{details.slice(0, 100)}....</p>
                                          <Link to={`newsDetails/${_id}`} className='text-[#FF8C47] font-semibold'>Read More</Link>
                                    </div>
                                    :
                                    <p className='text-[#706F6F] font-normal pb-4 border-b'>{details}</p>
                        }

                        <div className='mt-4 flex items-center justify-between'>
                              <div className='flex items-center gap-1'>
                                    <Rating name="half-rating" defaultValue={rating.number} precision={0.5} />
                                    <span>{rating.number}</span>
                              </div>
                              <div className='flex items-center gap-2'>
                                    <BsFillEyeFill className='text-2xl'></BsFillEyeFill>
                                    <span>{total_view}</span>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default DragonNews;

DragonNews.propTypes = {
      dragonNews: PropTypes.object
}