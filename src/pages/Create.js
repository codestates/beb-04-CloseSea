import React, { useState } from "react";
import { mintNFTContract } from "../contract/erc721Abi";
import Wallet from "./Wallet";

function Create() {
  const [newNftType, setNewNftType] = useState();

  const accounts = Wallet.account;

  const onClickMint = async () => {
    try {
      if (!accounts) return; // 계정이 없는경우는 그냥 리턴

      const ipfsArray = [
        "ipfs://QmYHSejzpbpL3MK2T2h5Em3PhbXDpZMLkyhtLhfGaMY6fo",
        "ipfs://QmdCgUAqjqG8wBXxMMXdnxwWUkxQn1GSRSvU9squ1cryhZ",
      ];

      for (let i = 0; i < ipfsArray.length; i++) {
        const response = await mintNFTContract.methods
          // 변수에 담는건 스마트컨트랙트 배포한 후에 나오는 함수를
          .mintNFT(accounts, i) // 인자 입력없이 이 함수를 클릭하면 민트가 되는 함수였다
          .send({ from: accounts }); // 누구로 부터 왔는지 계정확인

        console.log(response); // 👉 민트를 하면 트랙잭션에 콘솔에 찍힌다

        if (response.status === true) {
          // 민트 후에 status가 true 일 경우
          const balanceLength = await mintNFTContract.methods
            // 스마트컨트랙트 배포후에 나오는 함수
            .balanceOf(accounts) // NFT 가지고 있는 갯수 조회 (인자에는 주소를 넣어야한다)
            .call(); // 함수 부르기

          const nftId = await mintNFTContract.methods
            // 스마트컨트랙트 배포후에 나오는 함수
            .tokenOfOwnerByIndex(accounts, balanceLength - 1)
            // NFT의 Id 값을 조회 (인자는 주소와, 조회하려는 배열순번)
            // length - 1 은 배열의 마지막을 불러온다는 뜻

            .call(); // 함수 부르기
          console.log(nftId);
          const nftType = await mintNFTContract.methods
            // 스마트컨트랙트 배포후에 나오는 함수
            .animalTypess(nftId)
            // 어떤 NFT를 뽑았는지 조회 (인자에는 NFT id를 넣는다)
            .call(); // 함수 부르기
          console.log(nftType);
          setNewNftType(nftType);
          // 최종적으로는 mint를 하면 👉 어떤 NFT가 뽑혔는지 NFT 이미지를 출력해주는 useState
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {newNftType ? newNftType : "Let's mint Animal Card!!!"}
      <button onClick={onClickMint}>Mint</button>
    </div>
  );
}

export default Create;
