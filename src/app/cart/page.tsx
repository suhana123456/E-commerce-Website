import React from 'react';

const CartPage = () => {
  return (
    <div className="flex flex-col mt-5 items-center justify-start min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-4 w-full  max-w-7xl">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-4xl font-bold text-gray-800">Bag</h2>
          <div className="bg-gray-200 rounded-full px-7 py-2 text-gray-600 font-medium">Free Delivery</div>
        </div>

        {/* Product 1 */}
        <div className="flex items-center justify-between mb-9 p-4 border border-gray-200 rounded-md"> {/* Increased size and added border */}
          <div className="flex items-center">
            <img
              src="Frame.png"
              alt="Product Image"
              className="w-32 h-32 rounded-md mr-4" // Adjusted size
            />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Nike Dri-FIT ADV TechKnit Ultra</h3>
              <p className="text-gray-600">Men's Short-Sleeve Running Top</p>
              <p className="text-gray-600">Ashen Slate/Cobalt Bliss</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">Size:</span>
                <span className="font-medium text-gray-800">L</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">Quantity:</span>
                <span className="font-medium text-gray-800">1</span>
              </div>
            </div>
          </div>
          <div className="text-gray-600 font-medium">MRP: ₹ 3 895.00</div>
        </div>

        {/* Product 2 */}
        <div className="flex items-center justify-between mb-4 p-4 border border-gray-200 rounded-md"> {/* Increased size and added border */}
          <div className="flex items-center">
            <img
              src="shoe.png"
              alt="Product Image"
              className="w-32 h-32 rounded-md mr-4" // Adjusted size
            />
            <div>
              <h3 className="text-lg font-medium text-gray-800">Nike Air Max 97 SE</h3>
              <p className="text-gray-600">Men's Shoes</p>
              <p className="text-gray-600">Flat Pewter/Light Bone/Black</p>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">Size:</span>
                <span className="font-medium text-gray-800">8</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-gray-600 mr-2">Quantity:</span>
                <span className="font-medium text-gray-800">1</span>
              </div>
            </div>
          </div>
          <div className="text-gray-600 font-medium">MRP: ₹ 3 895.00</div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;