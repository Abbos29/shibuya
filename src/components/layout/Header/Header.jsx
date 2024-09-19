import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    const toggleMenu = () => {
        setIsMenu(prev => !prev)
    }


    useEffect(() => {
        if (isMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isMenu]); 

    return (
        <>
            <header className={s.header}>
                <div className="container">
                    <nav className={s.nav}>
                        <img className={s.logo} src="/logo.png" alt="logo" />

                        <div className={`${s.menu} ${isMenu ? s.active_menu : ''}`}>
                            <Link to={'/'}>home</Link>
                            <Link to={'/'}>shibuya capital</Link>
                            <Link to={'/'}>incubator</Link>

                            <div className={s.icons}>
                                <Link to={'/'}>
                                    <img src="/icon-discord.svg" alt="icon" />
                                </Link>

                                <Link to={'/'}>
                                    <img src="/icon-twitter.svg" alt="icon" />
                                </Link>
                            </div>
                        </div>

                        <img className={s.burger} onClick={toggleMenu} src="/burger-icon.svg" alt="icon" />

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header