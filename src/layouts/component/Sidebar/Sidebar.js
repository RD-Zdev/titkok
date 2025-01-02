import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
    UserGroupActiveIcon,
    UserGroupIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);

const MENU_SIDEBAR = [
    {
        title: 'For You',
        icon: 'Home',
        to: '/',
    },
    {
        title: 'Following',
        icon: '2people',
        to: '/following',
    },
    {
        title: 'Live',
        icon: 'live',
        to: '/live',
    },
];

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu item={MENU_SIDEBAR}>
                <MenuItem to={config.routes.home} title="For You" icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    to={config.routes.following}
                    title="Following"
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem to={config.routes.live} title="Live" icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>
        </aside>
    );
}

export default Sidebar;
