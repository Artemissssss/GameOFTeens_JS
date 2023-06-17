import Link from 'next/link';
const Footer = () => {
    return (
        <div className="background">
            <footer className="footerDiv background">
                <div className="footerBox">
                    <ul className="fotterButtons">
                        <h2>Сторінки</h2>

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
                        <h2>Умови користування</h2>
                        <li>
                            <Link className="navButton" href={'/polictics'}>
                                Політика
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="contactDiv">
                    <h2>GoITeensLab</h2>

                    <p>Telegram: @Artemis_Vainhtein</p>
                    <p>Gmail: artemka7.av@gmail.com</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
