import { Link } from 'react-router-dom';
import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${s.footer}`} data-reveal>
      <div className="container">
        <div className={s.wrap}>
          <div className={s.box}>
            <h3>次の駅は渋谷です！</h3>

            <div className={s.menu}>
              <Link to={'/'}>HOME</Link>
              <Link to={'/capital'}>shibuya capital</Link>
              <Link to={'/incubator'}>incubator</Link>

              <h4>次の駅は渋谷です！</h4>

              <div className={s.icons}>
                <a href="https://discord.com/invite/shibuya" target="_blank" rel="noreferrer">
                  <img src="/icon-discord.png" alt="discord" />
                </a>

                <a href="https://x.com/shibuyastation" target="_blank" rel="noreferrer">
                  <img src="/icon-twitter.png" alt="x" />
                </a>
              </div>
            </div>
          </div>

          <div className={`${s.imgs} footer-imgs`}>
            <img src="/footer-img-1.png" alt="img" />
            <img src="/footer-img-2.png" alt="img" />
          </div>
        </div>

        <h2 className={`${s.title} footer-title`}>
          SHIBUYA <span>STATION</span>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
