export const pools = [
  {
    id: "moo_fusefi-wfuse-usdc-fuse",
    poolId: "voltage-wfuse-usdc",
    name: "Fuse",
    assets: [
      "USDC",
      "FUSE"
    ],
    earnedToken: "mooFuse",
    earnedTokenDecimals: 18,
    earnedTokenAddress: "0x2C43DBef81ABa6b95799FD2aEc738Cd721ba77f3",
    earnContractAddress: "0x405EE7F4f067604b787346bC22ACb66b06b15A4B",
    earnedOracle: "tokens",
    earnedOracleId: "WFUSE",
    partnership: true,
    status: "active",
    isMooStaked: true,
    partners: [
      {
        logo: "stake/fuse/logo.png",
        background: "stake/fuse/bg.png",
        text: "Fuse is a platform featuring a fast and low-cost, Ethereum-compatible blockchain, a robust plug-and-play mobile-centric crypto payments infrastructure for creating token-based applications and a rapidly growing ecosystem of payments, decentralized finance and NFT projects.",
        website: "https://www.fuse.io",
        social: {
          telegram: "https://t.me/fuseio",
          twitter: "https://twitter.com/Fuse_network"
        }
      }
    ]
  },
  {
    id: "moo_voltage-wfuse-elon-elon",
    poolId: "voltage-wfuse-elon",
    name: "Dogelon Mars x Fuse",
    assets: [
      "ELON",
      "FUSE"
    ],
    earnedToken: "ELON-FUSE LP",
    earnedTokenDecimals: 18,
    earnedTokenAddress: "0xe418c323fA450e7e18c4dB304bEFC7ffF92D2Cc1",
    earnContractAddress: "0xc3a4fdcba79DB04b4C3e352b1C467B3Ba909D84A",
    earnedOracle: "lps",
    earnedOracleId: "voltage-wfuse-elon",
    partnership: true,
    status: "active",
    isMooStaked: true,
    partners: [
      {
        logo: "stake/elon/logo.png",
        background: "stake/elon/bg.png",
        text: "We are thrilled to announce that the Dogelon Mars (ELON) token has now been ported to the Fuse Network blockchain. Fuse Network becomes only the third blockchain on which the token has officially been enabled (in addition to Ethereum and Polygon). \nA FUSE/ELON trading pool has been created on the Voltage Finance (formerly, FuseFi) decentralized exchange (DEX).\nWe are boosting this pool with more tokens of the same kind you deposited. Claim the rewards and you will see them already staked in the vault.",
        website: "https://dogelonmars.com/",
        social: {
          telegram: "https://t.me/dogelonmars",
          twitter: "https://twitter.com/DogelonMars"
        }
      }
    ]
  }
];