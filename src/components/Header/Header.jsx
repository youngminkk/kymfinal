import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return(
    <section id="header">
        <div className="header">
          <div className="header__inner">
            <ul className="header__menu">
                <li><Link to ="/">홈</Link></li>
                <li><Link to ="/search">검색</Link></li>
                <li><Link to ="/info">정보</Link></li>
                <li><Link to ="/products">상품</Link></li>
            </ul>
            <ul className="header__member">
              <li>로그인</li>
            </ul>
          </div>
        </div>
    </section>
    )
}
export default Header