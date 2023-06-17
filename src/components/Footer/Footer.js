import { StatusContext } from '@/context/context';
import Link from 'next/link';
import { useContext } from 'react';

const Footer = () => {
    const { status, setStatus } = useContext(StatusContext);
    return (
        <div className="background">
            <footer className="footerDiv">
                <div className="footerBox">
                    <ul className="fotterButtons">
                        <h2 className='footerBoxtittle'>Сторінки</h2>

                        <li>
                            <Link className="navButton" href={'/'}>
                                Головна
                            </Link>
                        </li>
                        <li>
                            <Link className="navButton" href={'/projects'}>
                                Проєкти
                            </Link>
                        </li>
                        <li>
                            <Link className="navButton" href={'/news'}>
                                Новини
                            </Link>
                        </li>
                    </ul>
                    <ul className="fotterButtons">
                        <h2 className='footerBoxtittle'>Умови користування</h2>
                        <li>
                            <Link className="navButton" href={'/polictics'}>
                                Політика
                            </Link>
                        </li>
                        {status ? (<li>
                            <Link className="navButton" href={'/moder'}>
                                Панель адміністратора
                            </Link>
                        </li>) : null}
                    </ul>
                </div>
                <div className="contactDiv">
                    <h2 className='contactDivName'>GoITeensLab</h2>

                    <p className='contactDivCon'>Telegram: @Artemis_Vainhtein <br/>Gmail: artemka7.av@gmail.com</p>
                </div>
            </footer>
            <p className='copyrgth'>2023 © GoITeensLab</p>
        </div>
    );
};

export default Footer;