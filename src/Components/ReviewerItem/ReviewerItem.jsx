import PropTypes from 'prop-types';
import css from "./ReviewerItem.module.scss";

const ReviewerItem = ({data}) => {
    const {name,profession,review,picture} = data;
    return (<>
    <img className={`${css.reviewerPicture} mb-12 md:mb-0`} src={picture.reviewer} alt="" />
    <div className={`${css.reviewContainer} mb-10 xlg:mb-0`}>
    <p className={`${css.review} mb-4`}>{review}</p>
    <p className={`${css.reviewer}`}>{`${name} ${profession ? `, ${profession}` : ''}`}</p>
    </div>
    </>)
};

ReviewerItem.propTypes = {
    data: PropTypes.object.isRequired,
};

export default ReviewerItem;