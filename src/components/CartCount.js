import React, { useState } from 'react';
import Parse from "parse";
import { useParseQuery } from "@parse/react";

export const CartCount = () => {
    const [cartCount, setCartCount] = useState(0);
    const cartItemsParseQuery = new Parse.Query("Cart");
    cartItemsParseQuery.includeAll();
    cartItemsParseQuery.count().then((count) => {
        setCartCount(count)
    });
    useParseQuery(cartItemsParseQuery, {
        enableLocalDatastore: true, // Enables cache in local datastore (default: true)
        enableLiveQuery: true, // Enables live query for real-time update (default: true)
    })

    return (
        <>
            {cartCount}
        </>
    );
}