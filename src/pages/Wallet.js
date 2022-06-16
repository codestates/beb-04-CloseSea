import React, { useState } from "react";
import "./Wallet.css";

function Wallet() {
  const [account, setAccount] = useState("");

  const onClickConnect = async () => {
    try {
      // try 문 안의 코드가 쭉 실행되고 에러가 없다면 catch는 건너뛴다
      if (window.ethereum) {
        // if 👉 메타마스크가 설치되어있으면 실행된다
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        }); // 연결된 메타마스크의 주소가 나온다
        // 👉 window.ethereum.request 을 console.log에 찍어보면 확인할수 있다

        setAccount(accounts[0]);
        console.log(accounts);
        // 연결된 메타마스크의 주소를 useState에 담는다
      } else {
        // 메타마스크가 설치되어있지 않다면 👉 alert 문구가 나온다
        alert("Install Metamask!");
      }
    } catch (error) {
      // 에러가 발생한다면 catch 실행
      console.error(error); // 👉 에러가 발생했다고 출력
    }
  };

  const onClickDisConnect = () => {
    setAccount(account === "");
  };

  return (
    <div className="walletConnectWrapper">
      {account ? (
        <div>
          <button className="disconnectButton" onClick={onClickDisConnect}>
            disConnect Wallet
          </button>
          <div className="detailsAdrees">
            🦊 Welcome back!
            <br />
            <br />
            <span className="conditionBorder">Connection Address</span>
            <br />
            <br />
            {account}
          </div>
        </div>
      ) : (
        <div>
          <button className="connectButton" onClick={onClickConnect}>
            Connect Wallet
          </button>
          <div className="details">
            You need Chrome to be
            <br /> able to run this app.
            {/* 지갑연결 버튼과 같이 나오는 문구 */}
          </div>
        </div>
      )}
    </div>
  );
}

export default Wallet;
