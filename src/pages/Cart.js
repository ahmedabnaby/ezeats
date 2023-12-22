import React, { useState } from 'react';
import Parse from "parse";
import { useParseQuery } from "@parse/react";

export const Cart = () => {

    const [cartCount, setCartCount] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const cartItemsParseQuery = new Parse.Query("Cart");
    cartItemsParseQuery.includeAll();
    cartItemsParseQuery.count().then((count) => {
        setCartCount(count)
    });


    const handleDelete = async function (objectId) {
        setIsLoading(true)
        const cartItemsParseQueryDelete = new Parse.Object('Cart');
        cartItemsParseQueryDelete.set('objectId', objectId);
        try {
            await cartItemsParseQueryDelete.destroy();
            setIsLoading(false)
            window.location.reload()
        } catch (error) {
            // Error can be caused by lack of Internet connection
            alert(`Error ${error.message}`);
            return false;
        };
    };

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        if (results && results.length > 0) {

            for (const item of results) {
                const itemPrice = item.get("productPrice") * item.get("productQty"); // Assuming price is a number field
                totalPrice += itemPrice;
            }
        }
        return totalPrice;
    };
    const { isLive, isSyncing, results, count, error } =
        useParseQuery(cartItemsParseQuery, {
            enableLocalDatastore: true, // Enables cache in local datastore (default: true)
            enableLiveQuery: true, // Enables live query for real-time update (default: true)
            setIsLoading: true,
        });

    return (
        <>
            {isLoading && <div id="spinner"
                class="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-grow text-primary" role="status"></div>
            </div>}
            <div className="container-fluid page-header py-5">
                <h1 className="text-center text-white display-6">Cart</h1>
                <ol className="breadcrumb justify-content-center mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Pages</a></li>
                    <li className="breadcrumb-item active text-white">Cart</li>
                </ol>
            </div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Products</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Handle</th>
                                </tr>
                            </thead>
                            {cartCount === 0 ? "No items in cart yet" :
                                <>
                                    {isSyncing && <p>{"Syncing…"}</p>}
                                    {!isLoading && results && (
                                        <tbody>
                                            {results?.map((item) => (

                                                <tr>
                                                    <th scope="row">
                                                        <div className="d-flex align-items-center">
                                                            <img src="img/vegetable-item-3.png" className="img-fluid me-5 rounded-circle" style={{ width: '80px', height: '80px' }} alt="" />
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <p className="mb-0 mt-4">{item.get("productName")}</p>
                                                    </td>
                                                    <td>
                                                        <p className="mb-0 mt-4">{item.get("productPrice") * item.get("productQty")} $</p>
                                                    </td>
                                                    <td>
                                                        <div className="input-group quantity mt-4" style={{ width: '100px' }}>
                                                            <input type="text" className="form-control form-control-sm text-center border-0" value={item.get("productQty")} />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <button className="btn btn-md rounded-circle bg-light border mt-4" onClick={() => handleDelete(item.id)}>
                                                            <i className="fa fa-times text-danger" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    )}
                                </>
                            }
                        </table>
                    </div>
                    <div className="mt-5">
                        <input type="text" className="border-0 border-bottom rounded me-5 py-3 mb-4" placeholder="Coupon Code" />
                        <button className="btn border-secondary rounded-pill px-4 py-3 text-primary" type="button">Apply Coupon</button>
                    </div>
                    <div className="row g-4 justify-content-end">
                        <div className="col-8" />
                        <div className="col-sm-8 col-md-7 col-lg-6 col-xl-4">
                            <div className="bg-light rounded">
                                <div className="py-4 mb-4 border-top border-bottom d-flex justify-content-between">
                                    <h5 className="mb-0 ps-4 me-4">Total</h5>
                                    <p className="mb-0 pe-4">{calculateTotalPrice()} &nbsp;$</p>
                                </div>
                                {/* <button className="btn border-secondary rounded-pill px-4 py-3 text-primary text-uppercase mb-4 ms-4" type="button">Proceed Checkout</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}