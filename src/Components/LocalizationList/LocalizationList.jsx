import css from './LocalizationList.module.scss';

const LocalizationList = () => {
    return (
        <ul className={css.localesList}>
            <li className={css.checked}>UA</li>
            <li>EN</li>
            <li>CZ</li>
        </ul>
    )
};

export default LocalizationList;