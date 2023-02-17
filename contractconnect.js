let h1id=document.getElementById("h1id");
let web3=new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
web3.eth.getAccounts().then(console.log)
const contractAddress = '0x123456789abcdef';
let contract=new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_expiryDate",
				"type": "uint256"
			}
		],
		"name": "updateProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_productId",
				"type": "uint256"
			}
		],
		"name": "getProductDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "manufacturer",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "productCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "products",
		"outputs": [
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturerName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "manufacturingDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "expiryDate",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "manufacturerAddress",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "isAdded",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0x3161A2f2259f5Ac33f1ABD3F843FD4230C916e44");




const form = document.getElementById("add-product-form");
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        
        const productName = document.getElementById("productName").value;
        const expiryDate = parseInt(document.getElementById("expiryDate").value);
        
		try {
          const tx = await contract.methods.addProduct(productName, expiryDate).send({from: "0x48fa5cAb2543755ae61E042Ea46981299Cc69Fa0",gas: 500000});
          console.log("Transaction hash:", tx.hash);
          const receipt = await tx.wait();
          console.log("Transaction receipt:", receipt);
          console.log("Product added successfully!");
        } catch (error) {
          console.error(error);
        }
      });

/*
contractt.methods.addProduct("othe pro browser", 14).send({from: "0x76FED1eD601c6C3C1E9074683C9b4587B6FB570F",gas: 500000})
.on('transactionHash', function(hash){
    console.log("Transaction hash: " + hash);
})
.on('receipt', function(receipt){
    console.log("Transaction receipt: " + receipt);
})
.on('confirmation', function(confirmationNumber, receipt){
    console.log("Confirmation number: " + confirmationNumber);
})
.on('error', console.error);
*/