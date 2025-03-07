import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
import { useEffect, useState, useCallback } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn, hideOnClick = false }) {
    const [history, setHistory] = useState([{ data: items }]);

    useEffect(() => {
        setHistory([{ data: items }]);
    }, [items]);

    const current = history[history.length - 1]; // lấy phần tử cuối của mảng

    // sử dụng useCallback cho onClick của MENU
    const handleClick = useCallback(
        (item) => {
            if (item.children) {
                setHistory((prev) => [...prev, item.children]);
            } else {
                onChange(item);
            }
        },
        [onChange],
    );

    const renderItems = () => {
        return current.data.map((item, index) => {
            return <MenuItem key={index} data={item} onClick={() => handleClick(item)} />;
        });
    };

    return (
        <Tippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 700]}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => {
                                    setHistory((prev) => prev.slice(0, prev.length - 1));
                                }}
                            />
                        )}
                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => setHistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnClick: PropTypes.bool,
};

export default Menu;
