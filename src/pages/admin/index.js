import { useContext, useEffect } from 'react';
import { StatusContext } from '@/context/context';
import { useRouter } from 'next/router';
function login() {
    const { status, setStatus } = useContext(StatusContext);
    const router = useRouter();
    const check = (e) => {
        e.preventDefault();
        fetch(`/api/admin`, {
            method: 'POST',
            body: JSON.stringify({
                login: e.target[0].value,
                password: e.target[1].value,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(async (res) => {
            const data = await res.json();
            setStatus(data.status);
        });
        e.target.reset();
    };
    useEffect(() => {
        if (status) {
            router.push('/admin/moder');
        }
    }, []);
    useEffect(() => {
        if (status) {
            router.push('/admin/moder');
        }
    }, [status]);
    return (
        <div className="adminFormBox">
            <form onSubmit={check} className="adminForm">
                <input
                    required
                    type="text"
                    name="adminLogin"
                    className="adminFormImput"
                    placeholder="Логін адміністратора"
                />
                <input
                    required
                    type="password"
                    name="adminPassword"
                    className="adminFormImput"
                    placeholder="Пароль адміністратора"
                />
                <button type="submit" className="adminFormSubmit">
                    <span className="adminFormSubmitText">Увійти</span>
                </button>
            </form>
        </div>
    );
}
export default login;
