import React from "react";
import "./Main.css";

function Main() {
  return (
    <div className="wrapper">
      <div className="container">
        {/* 화면 전체에 흐리게 띄워지는 이미지 👉 blur 처리 */}
        <div className="contentWrapper">
          <div className="copyContainer">
            <div className="title">
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className="description">
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            {/* 👆 Opensea 홈페이지와 같은 문구 */}
            <div className="ctaContainer">
              <div className="accentedButton">Explore</div>
              <div className="button">Create</div>
              {/* 👆 버튼 CSS */}
            </div>
          </div>
          <div>
            <img
              className="cardContainer"
              src="https://ipfs.io/ipfs/QmcxckzMh85qjByvPb4MT8svdjNgjx6tttYTbEq7Ev3rVc"
              width="400"
              height="550"
              alt=""
              // 👆 메인 페이지에 판매중인 이미지 띄우기
            />
            <div className="infoContainer">
              <img
                className="nftprofile"
                src="https://ipfs.io/ipfs/QmfDtxqnf2cFcf2z4on41F6xvNT9EfPL3SQU44n3HMVpeK"
                width="30"
                height="30"
                alt=""
                // 👆 누가 판매중인지 프로필 이미지 띄우기
              />
              <div className="author">
                <div className="name">Seasons #13314</div>
                <a
                  className="nftprofilelink"
                  href="https://opensea.io/assets/ethereum/0x5bd815fd6c096bab38b4c6553cfce3585194dff9/13314"

                  // 실제 판매중인 opensea 홈페이지로 이동되는 링크
                >
                  RENGA-Factory
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
