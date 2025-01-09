import classNames from 'classnames/bind';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={data.img} alt="" />
                <Button primary>Following</Button>
            </div>
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>{data.nickname}</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>{data.name}</p>
            </div>
            <div className={cx('item-stats')}>
                <p className={cx('stat')}>
                    <strong>{data.followers}</strong> Followers
                </p>
                <p className={cx('stat')}>
                    <strong>{data.likes}</strong> Likes
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
