import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate,useSearchParams} from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const accessToken = searchParams.get('access_token');
    const refreshToken = searchParams.get('refresh_token');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (provider) => {
        try {
            if (provider === '') {
                const response = await axios.post(`/login`, { email, password });
                if (response.data.success) {
                    navigate('/');
                } else {
                    setError('이메일 또는 비밀번호가 올바르지 않습니다.');
                }
            } else {
                // 서버에 로그인 요청을 보냄
                const response = await axios.post(`/login/${provider}`, { email });
                if (response.data.success) {
                    navigate('/');
                } else {
                    if (response.data.message === 'User not found') {
                        // 사용자가 없는 경우 회원가입 페이지로 이동
                        navigate('/signup');
                    } else {
                        setError('로그인 중 에러가 발생했습니다.');
                    }
                }
            }
        } catch (error) {
            console.error(error);
            setError('로그인 중 에러가 발생했습니다.');
        }
    };

    return (
        <section id="login">
            <div className="">
                <form>
                    <label>
                        이메일:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </label>
                    <label>
                        비밀번호:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    </label>
                    <button onClick={() => handleLogin('')}>로그인</button>
                </form>
                <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000&mode=login">
                    <button>Google Login</button>
                </a>
                <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000&mode=unlink">
                    <button>Google Unlink</button>
                </a>
                <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000&mode=login">
                    <button>Naver Login</button>
                </a>
                <a href="http://localhost:8080/oauth2/authorization/naver?redirect_uri=http://localhost:3000&mode=unlink">
                    <button>Naver Unlink</button>
                </a>
                <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000&mode=login">
                    <button>Kakao Login</button>
                </a>
                <a href="http://localhost:8080/oauth2/authorization/kakao?redirect_uri=http://localhost:3000&mode=unlink">
                    <button>Kakao Unlink</button>
                </a>
                <p>Access Token : {accessToken}</p>
                <p>Refresh Token : {refreshToken}</p>
            </div>
        </section>
    );
}
export default Login
