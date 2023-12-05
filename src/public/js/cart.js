const addToCart = (_id,cid) => {
    const amount = {"quantity":1};
    console.log("CID: ",cid);
    fetch(`/api/carts/656e5df2ca10114c86b3e600/products/${_id}`, {
    method: 'PUT',
    body: JSON.stringify(amount),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(result => result.json()).then(json => console.log(json))
    console.log("Agregado");
}