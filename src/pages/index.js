import Image from 'next/image';
import Link from 'next/link';

function Home() {
    return (
        <>
            <div className="image-container">
                <div className="overlay"></div>
                <Image
                    className="background-mainPage"
                    src="/background-mainPage-photo.png"
                    alt="background"
                    width={'1280'}
                    height={'832'}
                />
            </div>
            <div className="text-container">
                <h1 className="title-mainpage">
                    Інвестуй в стартап твого майбутнього
                </h1>
                <h4 className="subtitle-mainpage">
                    Станьте частиною прориву та здійсніть чиюсь мрію.
                </h4>
                <button className="invest-button">
                    <Link href={'/projects'}>Інвестувати</Link>
                </button>
            </div>
            <div className="messageBlocks">
                <div className="messageBlock">
                    <h1>Що таке GoITeensLab?</h1>
                    <div className="flex-message">
                        <Image
                            className="message-image"
                            src={'/rocket.png'}
                            width={'280'}
                            height={'280'}
                        />
                        <p className="message">
                            <span className="strong">GoITeensLab</span> -
                            лабораторія стартапів розроблених
                            <br />
                            підлітками🚀, де кожний може розмістити свій
                            <br />
                            проєкт, знайти собі інвестора та отримати фінансову
                            підтримку.
                        </p>
                    </div>
                </div>
                <div className="messageBlock">
                    <h1>Що таке стартап?</h1>
                    <div className="flex-message">
                        <Image
                            className="message-image"
                            src={'/businessman.png'}
                            width={'280'}
                            height={'280'}
                        />
                        <p className="message">
                            <span className="strong">Стартап</span> - це молода
                            компанія або підприємницький проект, що працює в
                            інноваційній сфері і має потенціал для швидкого
                            зростання і високого рівня доходів. Він зазвичай
                            працює в галузі інформаційних технологій, софтверу,
                            інтернету, біотехнологій, медіа або інших
                            новаторських секторах. Стартапи часто використовують
                            нові технології, ідеї або бізнес-моделі, щоб
                            вирішувати складні проблеми або задовольняти потреби
                            ринку.
                        </p>
                    </div>
                </div>
                <div className="messageBlock">
                    <h1>Що ми пропонуємо?</h1>
                    <div className="second-flex-message">
                        <p className="message">
                            <span>#1</span> Ми пропонуємо платформу, де кожен
                            може презентувати свій стартап.
                        </p>
                        <p className="message">
                            <span>#2</span> Інвестор може вибрати тематику
                            проєктів. Будь то ІТ стартап, чи нова технологія
                            очщення води
                        </p>
                        <p className="message">
                            <span>#3</span> Кожний проєкт проходить модерацію
                            перед опублікуванням, щоб запобігти спаму, фішингу
                            та інших ситуацій.
                        </p>
                        <p className="message">
                            <span>#4</span> Інвестор може відсортувати стрічку
                            проєктів за потрібними йому характеристиками
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
