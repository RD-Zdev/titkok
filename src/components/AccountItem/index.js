import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '../Image';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/7328686068268531714.jpeg?lk3s=a5d48078&nonce=67531&refresh_token=8cc373afab7d1ab1269d5134dcac54f5&x-expires=1735023600&x-signature=yGIMedTPEiN7GunNenu4UYvaIIM%3D&shp=a5d48078&shcp=81f88b70"
                alt=""
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle} />
                </h4>
                <p className={cx('username')}>
                    <span>nguyenvana</span>
                </p>
            </div>
        </div>
    );
}

export default AccountItem;
