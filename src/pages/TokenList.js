import Erc721 from '../components/Erc721';

function TokenList({ web3, account, erc721list }) {
  return (
    <div className="tokenlist">
      <Erc721 web3={web3} account={account} erc721list={erc721list} />
    </div>
  );
}

export default TokenList;
