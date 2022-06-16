import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
import './Nav.css';

function Nav() {
  return (
    <div className="wrapper">
      <Link to="/">
        <div className="logoContainer">
          <img
            src="https://gateway.pinata.cloud/ipfs/QmeYuyNj6JwtNspPTqabkS3MBi7zDe6dAob957b61X5XJn"
            width="40"
            height="40"
            alt=""
            // 👆 메인 페이지에 판매중인 이미지 띄우기
          />
          {/* 👆 import 해온 로고이미지 사이즈는 40x40 적용 */}
          <div className="logoText">Closesea</div>
          {/* 👆 Closesea 로고 옆에 글자 CSS 적용 */}
        </div>
      </Link>
      <div className="searchBar">
        {/* 👆 검색창 CSS 효과 적용 */}
        <div className="searchIcon">
          <AiOutlineSearch />
          {/* 👆 검색창 아이콘 적용 👉 npm install react-icons 설치 */}
        </div>
        <input
          className="searchInput"
          placeholder="Search items, collections, and accounts"
          // 검색창에 기본으로 띄워주는 문구
          // 마우스 가져다올리면 hover효과 적용
        />
      </div>
      <div className="headerItems">
        <Link to="/explore">
          <div className="headerItem">Explore</div>
        </Link>
        <Link to="/stats">
          <div className="headerItem">Stats</div>
        </Link>
        <Link to="/resources">
          <div className="headerItem">Resources</div>
        </Link>
        <Link to="/create">
          <div className="headerItem">Create</div>
        </Link>
        <Link to="/about">
          <div className="profileIcon">
            <CgProfile />
            {/* 👆 Opensea 홈페이지와 동일한 프로필 사진 이미지 */}
          </div>
        </Link>
        <Link to="/wallet">
          <div className="walletIcon">
            <MdOutlineAccountBalanceWallet />
            {/* 👆 Opensea 홈페이지와 동일한 지갑 사진 이미지 */}
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
