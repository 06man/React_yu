import classNames from 'classnames/bind';
// import styles from './CSSModule.module.css';
import styles from '@styles/CSSModule.module.scss';


const cx = classNames.bind(styles);
// 미리 styles에서 클래스를 받아 오도록 설정하고

const CSSModule = () => {
    return (
        <div className={cx('wrapper', 'inverted')}>
            안녕하세요, 저는 <span className={'something'}>CSSModule!</span>
            안녕하세요, 저는 <span className={cx('wrapper3')}>CSSModule!</span>
            {/* 기존에 .global 접근할 때는 일반 문자열 접근하고, 
            classnames , cx('wrapper3') */}
            안녕하세요, 저는 <span className={'wrapper3'}>CSSModule!</span>
        </div>
    );
}

export default CSSModule;