import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';

const handleSignUp = async (email, name, password, picture, nickname, role, navigate, provider) => {
    try {
        const response = await axios.post(`/signup/${provider}`, {
            email, name, password, picture, nickname, role
        });

        if (response.status === 200) {
            navigate('/login');
        }
    } catch (error) {
        console.error(error);
    }
};

const SignUp = () => {
    const [searchParams] = useSearchParams();
    const email = searchParams.get("email");
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState('');
    const [nickname, setNickname] = useState('');
    const [role, setRole] = useState('');

    return(
        <section id="signup">
            <div className="">
            <p>Email : {email}</p>
                <form>
                    <label>
                        이메일:
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                    </label>
                    <label>
                        이름:
                        <input type="text" value={name} onChange={e => setName(e.target.value)} required />
                    </label>
                    <label>
                        비밀번호:
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    </label>
                    <label>
                        사진 URL:
                        <input type="text" value={picture} onChange={e => setPicture(e.target.value)} />
                    </label>
                    <label>
                        닉네임:
                        <input type="text" value={nickname} onChange={e => setNickname(e.target.value)} required/>
                    </label>
                    <label>
                        역할:
                        <select value={role} onChange={e => setRole(e.target.value)} required>
                            <option value="">-- 선택 --</option>
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </label>
                    <button onClick={() => handleSignUp(email, name, password, picture, nickname, role, navigate, 'google')}>구글</button>
                    <button onClick={() => handleSignUp(email, name, password, picture, nickname, role, navigate, 'kakao')}>카카오</button>
                    <button onClick={() => handleSignUp(email, name, password, picture, nickname, role, navigate, 'naver')}>네이버</button>
                </form>
            </div>
        </section>
    )
}

export default SignUp;
