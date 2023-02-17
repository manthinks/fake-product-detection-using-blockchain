// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.0;

contract ManufacturingContract {
    
    struct Product {
        string productName;
        string manufacturerName;
        uint256 manufacturingDate;
        uint256 expiryDate;
        address manufacturerAddress;
        bool isAdded;
    }
    
    mapping(uint256 => Product) public products;
    uint256 public productCount;
    address public manufacturer;
    
    constructor() {
        manufacturer = msg.sender;
    }
    
    modifier onlyManufacturer() {
        require(msg.sender == manufacturer, "Only the manufacturer can perform this action");
        _;
    }
    
    function addProduct(string memory _productName, uint256 _expiryDate) public onlyManufacturer {
        productCount++;
        products[productCount] = Product(_productName, "Manufacturer A", block.timestamp, _expiryDate, manufacturer, true);
    }
    
    function updateProduct(uint256 _productId, uint256 _expiryDate) public onlyManufacturer {
        require(products[_productId].isAdded, "Product does not exist");
        products[_productId].expiryDate = _expiryDate;
    }
    
    function getProductDetails(uint256 _productId) public view returns (string memory, string memory, uint256, uint256, address) {
        require(products[_productId].isAdded, "Product does not exist");
        return (products[_productId].productName, products[_productId].manufacturerName, products[_productId].manufacturingDate, products[_productId].expiryDate, products[_productId].manufacturerAddress);
    }
}