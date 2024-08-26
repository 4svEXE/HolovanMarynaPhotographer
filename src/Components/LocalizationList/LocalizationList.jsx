import css from './LocalizationList.module.scss';
import PropTypes from 'prop-types';

const LocalizationList = ({style}) => {
    return (
        <ul className={`${css.localesList} ${style}`}>
            <li className={css.checked}>UA</li>
            <li>EN</li>
            <li>CZ</li>
        </ul>
    )
};

LocalizationList.propTypes ={
    style: PropTypes.string.isRequired,
}

export default LocalizationList;