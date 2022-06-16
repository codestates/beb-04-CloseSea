import React from "react";
import Web3 from "web3";
import erc721Abi from "../contract/erc721Abi";
import TokenList from "./TokenList";
import { useState, useEffect } from "react";
import "./Trade.css";

const Wallet = () => {
  const [tokenAddress, setNewErc721Addr] = useState("");
  const [account, setAccount] = useState("");
  const [erc721list, setErc721list] = useState([]); // 자신의 NFT 정보를 저장할 토큰

  const [web3, setWeb3] = useState();
  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      // window.ethereum이 있다면
      try {
        const web = new Web3(window.ethereum); // 새로운 web3 객체를 만든다
        setWeb3(web);
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const connectWallet = async () => {
    let accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setAccount(accounts[0]);
  };
  const inputAddr = (e) => {
    setNewErc721Addr(e.target.value);
  };
  const addNewErc721Token = async () => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddress);
    const name = await tokenContract.methods.name().call();
    const symbol = await tokenContract.methods.symbol().call();
    const totalSupply = await tokenContract.methods.totalSupply().call();
    let arr = [];
    for (let i = 1; i <= totalSupply; i++) {
      arr.push(i);
    }

    for (let tokenId of arr) {
      let tokenOwner = await tokenContract.methods.ownerOf(tokenId).call();
      if (String(tokenOwner).toLowerCase() === account) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        setErc721list((prevState) => {
          return [
            ...prevState,
            { name, symbol, tokenId, tokenURI, tokenAddress },
          ];
        });
      }
    }
  };

  return (
    <div className="walletConnectContainer">
      {account ? (
        <div>
          <button className="connectCondition">Be Connected</button>
          <div className="detailsAddress">
            <br />
            <span className="connectBorder">Connection Address</span>
            <br />
            <br />
            {account}
            <br />
            <br />
            <hr />
            <br />
          </div>
          <div>
            <input
              className="inputAddress"
              type="text"
              onChange={inputAddr}
            ></input>
            <br />
            <button className="mintButton" onClick={addNewErc721Token}>
              NFT mint Contract Address
            </button>
          </div>
        </div>
      ) : (
        <button className="connectedButton" onClick={connectWallet}>
          Connect Wallet
        </button>
      )}

      <TokenList web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
};

export default Wallet;
