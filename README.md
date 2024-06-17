import { Callout } from 'nextra/components'
import {XCard,XCards} from '/components/XCard'
import { StarsIcon ,MetamaskIcon ,TruffleIcon, HardhatIcon ,RemixIcon ,Web3jsIcon , EthersIcon ,SoliditylangIcon ,OpenZeppelinIcon} from '/components/icons/index'

![flamma](/banner.png)


<span style={{ display: "flex", flexDirection: "row" }}>
{[
  [
    "MIT License",
    "https://img.shields.io/badge/license-MIT-blue.svg",
    "https://github.com/Flamma-network/docs/blob/main/LICENSE",
  ],

  [
    "Website",
    "https://img.shields.io/website?url=https%3A%2F%2Fdocs.flamma.network&up_message=flamma%20network",
    "https://docs.flamma.network/",
  ]
].map(([alt, image, url]) => (
  <a key="alt" href={url} style={{ marginTop: "30px", marginRight: "6px" }}>
      <img src={image} alt={alt} />
  </a>
))}
</span>
 
<Callout type="info" emoji="🍔">
  The Flamma Network is a blockchain for the people, with no involvement from VCs, capital firms, or whales. It operates in a fully transparent manner, rewarding $FLA tokens to participants, builders, governors, and maintainers. The network is managed and operated using a DAO model.
</Callout>

# Overview
 
Flamma is a sequence-based blockchain designed for large-scale commercial applications. It features a high-performance network suitable for various use cases, including finance, payments, and gaming. The Flamma Network is open, interoperable, and decentralized, allowing anyone to quickly build super applications on its platform.

## Get Started - Launch a Solidity Dapp on Flamma

| Kickoff   |  |
| :----- | :---- |
| [Get $FLA Test Funds](https://flafaucet.dev/)     |  Get test tokens to use on the Flamma network for development and testing purposes.   |
| [Deploy with Remix IDE]() | Utilize the Remix Integrated Development Environment to write, compile, and deploy smart contracts effortlessly.  |
| [Create an ERC-20 Token (🛩️No Code)](/pages/QuickDappDeploy/erc20.mdx) | how to implement a no-code deployment of an ERC20 token using Remix and OpenZeppelin.  |
| [Deploy an NFT Collection (🛩️No Code)]() | Launch a collection of [ERC-721](https://eips.ethereum.org/EIPS/eip-721) Non-Fungible Tokens (NFTs) to represent unique digital assets.  |
| [Integrate a Wallet in Your Front-End Application]() | Integrating a cryptocurrency wallet into your front-end application allows users to interact directly with the Flamma network from your website.  |
| [ERC20 Token Claim Front-End Template]() | This front-end template allows users to claim their ERC20 tokens seamlessly. Built with modern web technologies, the template provides an intuitive and secure interface for interacting with smart contracts.  |

## Development Tools and EVM Compatibility

The Flamma Network fully supports all standard Ethereum Virtual Machine (EVM) development tools, making it easy for developers to build and deploy decentralized applications (DApps) on the network. This compatibility ensures that developers can leverage their existing knowledge and tools from the Ethereum ecosystem when working with Flamma.

<XCards>

  <XCard Icon={MetamaskIcon} title="Metamask" desc="A browser extension wallet that allows users to interact with DApps directly from their browsers. It supports the Flamma Network for seamless integration."  href='https://metamask.io/' newtab>
  </XCard>
  
  <XCard Icon={RemixIcon} title="Remix IDE" desc="An online integrated development environment for writing, compiling, and deploying smart contracts."  href='https://remix.ethereum.org/' newtab>
  </XCard>

  <XCard Icon={SoliditylangIcon} title="Solidity" desc="The most widely-used programming language for writing Ethereum smart contracts."  href='https://soliditylang.org/' newtab>
  </XCard>

  <XCard Icon={TruffleIcon} title="Truffle Suite" desc="A development framework for Ethereum that provides a suite of tools for smart contract development, testing, and deployment." href='https://archive.trufflesuite.com/' newtab fill="white">
  </XCard>

  <XCard Icon={OpenZeppelinIcon} title="OpenZeppelin" desc="A library of modular, reusable smart contracts for Ethereum, focused on security."  href='https://www.openzeppelin.com/' newtab>
  </XCard>

  <XCard Icon={HardhatIcon} title="Hardhat" desc="A flexible and extensible development environment for Ethereum that simplifies smart contract development and testing."  href='https://hardhat.org/' newtab>
  </XCard>

   <XCard Icon={Web3jsIcon} title="Web3.js" desc="A JavaScript library that enables developers to interact with the Ethereum blockchain. It can be used for deploying smart contracts, sending transactions, and more."  href='https://web3js.readthedocs.io/en/v1.10.0/' newtab>
  </XCard>

  <XCard Icon={EthersIcon} title="Ethers.js" desc="A library for interacting with the Ethereum blockchain and its ecosystem. It is designed to be a complete and compact library for managing Ethereum wallets and smart contracts."  href='https://docs.ethers.org/v5/' newtab>
  </XCard>

</XCards>