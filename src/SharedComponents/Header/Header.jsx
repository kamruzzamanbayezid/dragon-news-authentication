
import moment from 'moment/moment';
import newsTitle from '../../../public/logo.png'

const Header = () => {

      return (
            <div className='text-center'>
                  <img className='mx-auto mb-5' src={newsTitle} alt="News Title/Logo" />
                  <p className='text-[#706F6F] text-lg font-normal mb-2'>Journalism Without Fear or Favour</p>
                  <p className='text-[#403F3F] text-xl font-medium mb-2'>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
      );
};

export default Header;