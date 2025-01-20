import './SassComponent.scss';
// 추가
import styles from '@styles/CSSModule.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
// 추가

const SassComponent = () => {
    return (
        <>
            {/* 적용하기 : 예시 className={cx('wrapper3')}*/}
            <div>안녕하세요, 저는 <span className={cx('wrapper3')}>CSSModule!</span></div>
            <div className="SassComponent" >
                <div className="box red" />
                <div className="box orange" />
                <div className="box yellow" />
                <div className="box green" />
                <div className="box blue" />
                <div className="box indigo" />
                <div className="box violet" />
                <div className="box pink" />
                <div className="box last" />
            </div >
        </>
    );
}

export default SassComponent;