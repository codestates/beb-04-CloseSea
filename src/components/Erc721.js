import erc721Abi from './erc721Abi';
import { useState } from 'react';

function Erc721({ web3, account, erc721list }) {
  const [to, setTo] = useState('');
  const sendToken = async (tokenAddr, tokenId) => {
    console.log(`erc721Abi : ${erc721Abi}`);
    console.log(`tokenAddr : ${tokenAddr}`);
    // tokenAddr = '0x5995e91959e124dc124200ffb5c234f712f85042';
    const tokenContract = await new web3.eth.Contract(erc721Abi, tokenAddr, {
      from: account,
    });
    console.log(`account : ${account}\nto : ${to}\ntokenId : ${tokenId}`);
    console.log(`${account} ${to}`);
    tokenContract.methods
      .transferFrom(account, to, tokenId)
      .send({
        from: account,
      })
      .on('receipt', (receipt) => {
        setTo('');
      });
  };
  return (
    <div className="erc721list">
      {erc721list.map((token) => {
        return (
          <div className="erc721token">
            Name: <span className="name">{token.name}</span>(
            <span className="symbol">{token.symbol}</span>)
            <div className="nft">id: {token.tokenId}</div>
            <img src={token.tokenURI} width={300} />
            /* nft 전송 관련 */
            <div className="tokenTransfer">
              To:{' '}
              <input
                type="text"
                value={to}
                onChange={(e) => {
                  setTo(e.target.value);
                }}
              ></input>
              {console.log(`to : ${to}`)}
              {console.log(`token.symbol : ${token.symbol}`)}
              {console.log(`token.name : ${token.name}`)}
              {console.log(`token.newErc721addr : ${token.tokenAddress}`)}
              <button
                className="sendErc20Btn"
                onClick={sendToken.bind(
                  this,
                  token.tokenAddress,
                  token.tokenId
                )}
              >
                send Token
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Erc721;
