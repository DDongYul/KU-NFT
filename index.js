const nftName = "KU-NFT";
const description = "KU-NFT";
const hiddenImgUrl = "ipfs://QmaHD2vegomdBfqYuqThiwiw3Ffaznif2rmuetD53zbYeE";
const totalNum = 50;

try {
    for (let i = 1; i <= totalNum; i++) {
        let json = `{"name":"${nftName} #${i}","description":"${description}","image":"${hiddenImgUrl}/${i}.png","attributes":[{"trait_type": "Unknown","value": "Unknown"}]}`;
        let fs = require("fs");
        fs.writeFile(`json/${i}.json`, json, "utf8", (e)=>(e));
    }
    console.log("complete!");
} catch (error) {
    console.log(error);
}