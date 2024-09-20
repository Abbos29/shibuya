import { Link } from 'react-router-dom';
import s from './Header.module.scss';
import { useEffect, useState } from 'react';

const Header = () => {

    const [isMenu, setIsMenu] = useState(false)

    const toggleMenu = () => {
        setIsMenu(prev => !prev)
    }

    const closeMenu = () => {
        setIsMenu(false)
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

                        <div className={`${s.menu} ${isMenu ? s.active_menu : ''} header-menu`}>
                            <Link onClick={closeMenu} to={'/'}>home</Link>
                            <Link onClick={closeMenu} to={'/capital'}>shibuya capital</Link>
                            <Link onClick={closeMenu} to={'/incubator'}>incubator</Link>

                            <div className={`${s.icons} header-icons`}>
                                <Link to={'/'}>
                                    <img src="/icon-discord.png" alt="icon" />
                                </Link>

                                <Link to={'/'}>
                                    <img src="/icon-twitter.png" alt="icon" />
                                </Link>
                            </div>
                        </div>

                        <img className={`${s.burger} burger-icon`} onClick={toggleMenu} src="/burger-icon.svg" alt="icon" />

                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header