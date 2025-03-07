import classNames from 'classnames/bind';
import { useState } from 'react';

// Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
//TIPPY
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
//CSS
import styles from './Header.module.scss';

import Config from '~/config';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Header() {
    const MENU_ITEMS = [
        {
            icon: <FontAwesomeIcon icon={faEarthAsia} />,
            title: 'English',
            children: {
                title: 'Language',
                data: [
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'es',
                        title: 'Español',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'Français',
                    },
                    {
                        type: 'language',
                        code: 'de',
                        title: 'Deutsch',
                    },
                    {
                        type: 'language',
                        code: 'zh',
                        title: '中文',
                    },
                    {
                        type: 'language',
                        code: 'ja',
                        title: '日本語',
                    },
                    {
                        type: 'language',
                        code: 'ko',
                        title: '한국어',
                    },
                    {
                        type: 'language',
                        code: 'ru',
                        title: 'Русский',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'العربية',
                    },
                    {
                        type: 'language',
                        code: 'hi',
                        title: 'हिन्दी',
                    },
                    {
                        type: 'language',
                        code: 'pt',
                        title: 'Português',
                    },
                    {
                        type: 'language',
                        code: 'it',
                        title: 'Italiano',
                    },
                    {
                        type: 'language',
                        code: 'tr',
                        title: 'Türkçe',
                    },
                    {
                        type: 'language',
                        code: 'th',
                        title: 'ภาษาไทย',
                    },
                    {
                        type: 'language',
                        code: 'vi',
                        title: 'Tiếng Việt',
                    },
                    {
                        type: 'language',
                        code: 'en',
                        title: 'English',
                    },
                    {
                        type: 'language',
                        code: 'es',
                        title: 'Español',
                    },
                    {
                        type: 'language',
                        code: 'fr',
                        title: 'Français',
                    },
                    {
                        type: 'language',
                        code: 'de',
                        title: 'Deutsch',
                    },
                    {
                        type: 'language',
                        code: 'zh',
                        title: '中文',
                    },
                    {
                        type: 'language',
                        code: 'ja',
                        title: '日本語',
                    },
                    {
                        type: 'language',
                        code: 'ko',
                        title: '한국어',
                    },
                    {
                        type: 'language',
                        code: 'ru',
                        title: 'Русский',
                    },
                    {
                        type: 'language',
                        code: 'ar',
                        title: 'العربية',
                    },
                    {
                        type: 'language',
                        code: 'hi',
                        title: 'हिन्दी',
                    },
                    {
                        type: 'language',
                        code: 'pt',
                        title: 'Português',
                    },
                    {
                        type: 'language',
                        code: 'it',
                        title: 'Italiano',
                    },
                    {
                        type: 'language',
                        code: 'tr',
                        title: 'Türkçe',
                    },
                    {
                        type: 'language',
                        code: 'th',
                        title: 'ภาษาไทย',
                    },
                ],
            },
        },
        {
            icon: <FontAwesomeIcon icon={faCircleQuestion} />,
            title: 'Feedback and help',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faKeyboard} />,
            title: 'Keyboard shortcuts',
        },
    ];
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coin',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            type: 'logout',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    const [currentUser, setCurrentUser] = useState(true);

    //handle lấy thông tin của item Menu
    const menuItems = currentUser ? userMenu : MENU_ITEMS;

    //hander Logic
    const handerMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                console.log('Change language', menuItem.code);
                break;
            case 'logout':
                console.log('Log out');
                setCurrentUser(false);
                break;
            default:
                break;
        }
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={Config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 200]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button
                                primary
                                onClick={() => {
                                    console.log('Log in');
                                    setCurrentUser(true);
                                }}
                            >
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={menuItems} onChange={handerMenuChange}>
                        {currentUser ? (
                            <Image
                                src="https://lh3.googleusercontent.com/ogw/AF2bZyg9z2ZQLx2y15LxrFPmSO45eC9tW74hYy-F9JnMdCNggsc=s32-c-mo"
                                className={cx('user-avatar')}
                                alt="Nguyenvana"
                                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
