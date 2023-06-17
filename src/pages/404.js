import Link from 'next/link';

function NotFound() {
    return (
        <div className="not-found-container">
            <div className="error-content">
                <div className="error-title">404</div>
                <p className="error-message">
                    На жаль, цієї сторінки не існує.😔
                </p>
            </div>
        </div>
    );
}

export default NotFound;
