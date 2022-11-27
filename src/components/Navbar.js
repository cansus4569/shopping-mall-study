import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate, Link } from 'react-router-dom'

const Navbar = ({ auth, setAuth }) => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    let [width, setWidth] = useState(0);
    const navigate = useNavigate();
    const goLoginPage = () => {
        if (!auth) navigate('/login');
        else {
            setAuth(false);
            navigate('/login');
        }
    };
    const goHomePage = () => {
        navigate('/');
    };

    const search = (e) => {
        if (e.key === "Enter")
            navigate(`/?q=${e.target.value}`)
    }

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                {auth ? (
                    <div onClick={() => setAuth(false)}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그아웃</span>
                    </div>
                ) : (
                    <div onClick={() => navigate("/login")}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>로그인</span>
                    </div>
                )}
            </div>
            {/* <div>
                <div className='login-button' onClick={goLoginPage}>
                    <FontAwesomeIcon icon={faUser} />
                    <div className='login-text'>로그인</div>
                </div>
            </div> */}
            <div className='nav-section'>
                <Link to="/">
                    <img width={100}
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcppmIVzB91pKMyww12svNXcU4l10wEoANzssQPV37&s' />
                </Link>
                {/* <img width={100}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcppmIVzB91pKMyww12svNXcU4l10wEoANzssQPV37&s'
                    onClick={goHomePage}
                /> */}
            </div>
            <div className='nav-menu-area'>
                <ul className='menu'>
                    {menuList.map((menu, index) => (
                        <li>
                            <a href="#" key={index}>
                                {menu}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <input type="text" className='input-area' placeholder='제품검색' onKeyUp={e => search(e)} />
                </div>
            </div>
        </div>
    )
}

export default Navbar
