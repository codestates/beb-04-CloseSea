import NFTsend from "../contract/NFTsend";

function TokenList({ web3, account, erc721list }) {
  return (
    <div className="tokenlist">
      <NFTsend web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default TokenList;
