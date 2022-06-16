import erc721Abi from "./erc721Abi";
import { useState } from "react";
import "./NFTsend.css";

function NFTsend({ web3, account, erc721list }) {
  const [to, setTo] = useState("");
  const sendToken = async (tokenAddr, tokenId) => {
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, {
      from: account,
    });

    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({
        from: account,
      })
      .on("receipt", (receipt) => {
        setTo("");
      });
  };
  return (
    <div>
      {erc721list.map((token) => {
        return (
          <div className="NFTsendWrapper">
            <div className="accent"></div>
            <div className="nftTitle">{token.name}</div>
            <div className="otherInfo">
              <div className="ownedBy">
                Owned by
                <span className="accent"> FdongFdong</span>
              </div>
              <div className="symbol">{token.symbol}</div>
              <div className="nft"> id: {token.tokenId}</div>
            </div>
            <img src={token.tokenURI} width={150} />
            <br />
            <div className="tokenTransfer">
              <input
                className="inputsendAddress"
                placeholder="Enter address to send"
                type="text"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              <br />
            </div>
            <button
              className="sendButton"
              onClick={sendToken.bind(this, token.tokenAddress, token.tokenId)}
            >
              send Token
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default NFTsend;
