import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ShopItem from '../../components/shopItem/ShopItem'
import { getDenim } from '../../redux/shop/ShopAction'
import './Shop.css'

const Shop = ({ shopState, filterShop, filteredShopData }) => {
  const categories = [
    "shop all",
    "Tops",
    "Shirts",
    "Dresses",
    "Denim",
    "Jackets",
    "Shorts",
    "Jeans",
    "Skirts",
  ];
  return (
    <div className="Shop mt-3">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-sm-12 col-md-3">
            <div className="shop__categoriesList">
              <h2 data-toggle="collapse" data-target="#demo">
                category
              </h2>
              {categories.map((categoryList) => {
                return (
                  <div key={categoryList}>
                    <div id="demo" className="collapse">
                      <p onClick={() => filterShop(categoryList)}>
                        {categoryList[0].toUpperCase() +
                          categoryList.slice(1).toLowerCase()}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-sm-12 col-md-9">
            {" "}
            <div className="shop__productsList">
              <div className="row justify-content-between">
                {filteredShopData.length <= 0
                  ? shopState.map((shop) => {
                      return (
                        <div className="col-md-4 my-2">
                          <Link
                            to={`/collections/shop/${shop.id}`}
                            key={shop.id}
                          >
                            {" "}
                            <ShopItem
                              image={shop.imageSrc}
                              onClick={() => console.log(shop.id)}
                            />
                          </Link>
                        </div>
                      )
                    })
                  : filteredShopData.map((shop) => {
                      return (
                        <div className="col-md-4 my-2">
                          <Link
                            to={`/collections/shop/${shop.id}`}
                            key={shop.id}
                          >
                            {" "}
                            <ShopItem
                              image={shop.imageSrc}
                              onClick={() => console.log(shop.id)}
                            />
                          </Link>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state =>{
   return {
     shopState : state.shop.shopdata,
     filteredShopData : state.shop.filteredShopData
   };
}

const mapDispatchToProps = dispatch => {
  return {
    filterShop : item => dispatch(getDenim(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
