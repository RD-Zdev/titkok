import { NavLink } from 'react-router-dom'; //Dùng NavLink thay cho Link để thêm class active
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ to, title, icon, activeIcon = icon }) {
    return (
        // Thêm class active khi đường dẫn trùng khớp
        <NavLink className={(nav) => cx('menu-item', { active: nav.isActive })} to={to}>
            {({ isActive }) => (
                <>
                    {isActive ? activeIcon : icon}
                    <span className={cx('title')}>{title}</span>
                </>
            )}
        </NavLink>
    );
}

MenuItem.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    activeIcon: PropTypes.node,
};

export default MenuItem;
