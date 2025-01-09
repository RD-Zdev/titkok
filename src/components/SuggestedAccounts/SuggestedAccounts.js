import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

const ACCOUNT_LIST = [
    {
        title: 'Account 1',
        img: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/eb4803b023cd458f18297a3794432b32.jpeg?lk3s=a5d48078&nonce=10401&refresh_token=d0501dd49128c9b73b0262d7c32a6b23&x-expires=1736136000&x-signature=rLx396w%2F1S6V%2B20oWTm%2BKsn2eX4%3D&shp=a5d48078&shcp=81f88b70',
        name: 'Lavie XVIII',
        nickname: 'phimhayvietnam',
        followers: '10k',
        likes: '100k',
    },
    {
        title: 'Account 2',
        img: 'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/11ea4a51fa2439b588463a61744f89f6.jpeg?lk3s=a5d48078&nonce=17525&refresh_token=237379b9b16782940ad7b63ebc5192b2&x-expires=1736136000&x-signature=IJOx0qrugUDXrTx4jm3AK9527AM%3D&shp=a5d48078&shcp=81f88b70',
        name: 'Anh ngữ Start',
        nickname: 'anhngustart',
        followers: '10k',
        likes: '100k',
    },
    {
        title: 'Account 3',
        img: 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/b9c5d791357539893b30c9dc12fe720e.jpeg?lk3s=a5d48078&nonce=34316&refresh_token=767ed9c5122e7b623558f354b244e581&x-expires=1736136000&x-signature=g8tl8Pts0qa47RgV%2BcNFTeNhTmA%3D&shp=a5d48078&shcp=81f88b70',
        name: 'english_not_boring',
        nickname: 'english_not_boring',
        followers: '10k',
        likes: '100k',
    },
];

function SuggestedAccounts({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <div className={cx('account-list')}>
                {ACCOUNT_LIST.map((account) => (
                    <AccountItem data={account} key={account.title} />
                ))}
            </div>
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}

SuggestedAccounts.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggestedAccounts;
