import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';
import './productPageRedux.scss'
//import { productPageConstants } from '../../store/reducers/productPage/actions';
import { updateWishlist, removeWishlistItem } from '../../redux/slices/productPage/productPageSlice';
import { fetchProductsData } from '../../redux/slices/productPage/productPageThunk';
import Button from '@mui/material/Button';


function ProductPageRedux() {
    const dispatch = useDispatch();
    const { products, wishlistData  } = useSelector((state) => state.productPage);
    const [skip, setSkip] = useState(0);
    useEffect(() => {
        loadData()
    }, [])


    const handleWishList = (id) => {
        dispatch(updateWishlist(id));
    };


    // const handleWishList = (id) => {
    //     let data = [...wishlistData];

    //     if (!data.includes(id)) {
    //         data.push(id)
    //         setwishlistData(data)
    //     } else {
    //         alert('item already added');
    //     }

    // };

    const handleRemove = (id) => {
        dispatch(removeWishlistItem(id));
        //let remaningData = wishlistData.filter((item) => item !== id);
        //setwishlistData(remaningData)
    };

    const calculateTotal = () => {
        console.log('dddd',wishlistData)
        let total = 0;
        wishlistData?.map((item) => {
            let data = products?.find((productItem) => productItem.id === item);
            console.log('data', data)
            total += data.price;
        })
        return total;
    }

    const getData = (type) => {
        switch (type) {
            case 'prev':
                loadData()
                break;
            case 'next':
                if (products?.total >= skip + 10) {
                    setSkip(skip + 10)
                    loadData()
                }
                break;
            default:
                break;
        }
    };

    const loadData = () => {
        dispatch(fetchProductsData(skip));
        // axios.get(`https://dummyjson.com/products?limit=10&skip=${skip}`)
        // .then((res) => {
        //     console.log('res', res)
        //     dispatch({ type: productPageConstants.UPDATE, payload: res.data })
        // });
    };

    return (
        <div>

            <div className="pageHead">
                <div className="firstHead">Super Product List</div>
                <div className="secondHead">Great deals on quality electronic gadgets</div>
            </div>
            <div className="wishListWraper">
                <div className="wishList">
                    Wishlist <br />
                    <ul className="productSelected">
                        {/* {(productsData && productsData.products && wishlistData) && */
                            wishlistData?.map((item) => {
                                debugger;
                                let data = products?.find((productItem) => productItem.id === item);
                                console.log('data',data);
                                return (
                                    <li className="listBorder" >
                                        <span className="selectedProduct">{data?.title}</span>
                                        <Button variant="contained" className='remove' onClick={() => handleRemove(item)}>Remove</Button>

                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div>Total = ${calculateTotal()}</div>
                </div>
            </div>

            <div className="productContainer">

                {/* {(productsData && productsData.products) &&
                    productsData.*/
                    products?.map((item) => {
                        return (
                            <div className="productBorder">
                                <div className="cardHeaderWrap">
                                    <div className="productImage">
                                        <img className="" src={item.thumbnail} alt={item.brand} />
                                    </div>
                                </div>
                                <div className="productContent">
                                    <div className="cardContentWrap">
                                        <div className="productName">
                                            {item.title}
                                        </div>
                                        <div className="productDiscription">
                                            {item.description}
                                        </div>
                                        <br />
                                        <div>
                                            Product Id: {item.id}
                                        </div>
                                        <br />
                                    </div>
                                    <div className='moreInformationWrap'>
                                        <span className="moreInformation">
                                            See More information
                                        </span>
                                        <i className="fa">&#xf078;</i>
                                    </div>
                                    <div className="cardFooterWrap">
                                        <div className="price">
                                            <span>Price: ${item.price}</span>
                                        </div>
                                        <div className="addListWrap">
                                            <span className="addList" onClick={() => handleWishList(item.id)}>Add to list</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
            <div>
                <div onClick={() => getData('prev')}>Previous</div>
                <div onClick={() => getData('next')}>Next</div>
            </div>
        </div>

    )
}

export default ProductPageRedux;