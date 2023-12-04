const form = document.getElementById('registerForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    console.log(data);
    const obj = {};
    // {
    //     first_name: "asdasd",
    //     last_name: "asdasd",
    //     age: 123
    // }
    fetch('/api/carts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        
        if (result.status === 201) {
            return(result.json());
        }
    }).then(carrito => {
        obj["cart"]=carrito.payload._id;
        console.log(obj);
    });
    data.forEach((value, key) => obj[key] = value);
    fetch('/api/sessions/register', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(result => {
        if (result.status === 201) { //si el registro fue OK, volverá un 201, entonces redirijo al form de login.
            window.location.replace('/'); 
        }
    })
})