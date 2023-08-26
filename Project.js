/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const myNFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_name, _rarity, _damage, _specialAbility) {
    const nftMetadata = {
        name: _name,
        rarity: _rarity,
        damage: _damage,
        specialAbility: _specialAbility
    };
    myNFTs.push(nftMetadata);
    console.log("Minted: " + _name);
}

// create a "loop" that will go through an "NFTsay" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    console.log("Minted NFTs:");
    for (let i = 0; i < myNFTs.length; i++) {
        console.log("\nName: " + myNFTs[i].name);
        console.log("Rarity: " + myNFTs[i].rarity);
        console.log("Damage: " + myNFTs[i].damage);
        console.log("Special Ability: " + myNFTs[i].specialAbility);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Minted NFTs: " + myNFTs.length);
}

// call your functions below this line
mintNFT("Dragon's Breath", "Legendary", 150, "Fire Burst");
mintNFT("Frostguard Knight", "Epic", 120, "Frost Nova");
mintNFT("Stormcaller", "Rare", 100, "Thunderstrike");
mintNFT("Earthshaker", "Common", 80, "Quake");


listNFTs();
getTotalSupply();
