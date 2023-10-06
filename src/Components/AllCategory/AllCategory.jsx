import PropTypes from 'prop-types';

const AllCategory = ({ allCategory }) => {
     
      return (
            <div>
                  <h1 className="text-[#9F9F9F] text-center text-xl font-medium mb-5">{allCategory.name}</h1>
            </div>
      );
};

export default AllCategory;

AllCategory.propTypes = {
      allCategory: PropTypes.object
}