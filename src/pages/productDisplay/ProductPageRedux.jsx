import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './productPageRedux.scss'
import { productPageConstants } from '../../store/reducers/productPage/actions'
import Button from '@mui/material/Button';


function ProductPageRedux() {
    const dispatch = useDispatch();
    const { productsData } = useSelector((state) => state.product);
    const [whishListData, setWhishListData] = useState([])

    useEffect(() => {
        axios.get(`https://dummyjson.com/products`)
            .then((res) => {
                console.log('res', res)
                dispatch({ type: productPageConstants.UPDATE, payload: res.data })
            });
    }, [])

    const handleWishList = (id) => {
        let data = [...whishListData];

        if (!data.includes(id)) {
            data.push(id)
            setWhishListData(data)
        } else {
            alert('item already added');
        }

    };

    const handleRemove = (id) => {
        let remaningData = whishListData.filter((item) => item !== id);
        setWhishListData(remaningData)
    };

    const calculateTotal = () => {
        let total = 0;
        whishListData.map((item) => {
            let data = productsData.products.find((productItem) => productItem.id === item);
            console.log('data', data)
            total += data.price;
        })
        return total;
    }

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
                        {(productsData && productsData.products && whishListData) &&
                            whishListData.map((item) => {
                                let data = productsData.products.find((productItem) => productItem.id === item);
                                return (
                                    <li className="listBorder" >
                                        <span className="selectedProduct">{data.title}</span>
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

                {(productsData && productsData.products) &&
                    productsData.products.map((item) => {
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
        </div>

    )
}

export default ProductPageRedux;