import Link from 'next/link';

const Nav = () => {
    return (
        <div className="navBackground">
            <nav className="navDiv">
                <div className="navLeft">
                    <h1 className="logo">
                        GoITeens<span className="logoBlue">Lab</span>
                    </h1>

                    <ul className="navButtons">
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
                </div>
                <button className="createProject">
                    <Link href="/publish-project">Опублікувати проєкт</Link>
                </button>
            </nav>
        </div>
    );
};

export default Nav;
