export const getAllPostsService=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}

export const createPostService=()=>{
    const config={
        method:'POST',
        body:JSON.stringify({
            title:'mensaje',
            body:'suerte en su evaluacion',
            userId:1
        }),
        headers:{
            'Content-type':'application/json'
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts',config)
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}

export const updatePostService=()=>{
    const config={
        method:'PUT',
        body:JSON.stringify({
            id:1,
            title:'mensaje final',
            body:'hasta la vista baby',
            userId:1
        }),
        headers:{
            'Content-type':'application/json'
        }
    };
    fetch('https://jsonplaceholder.typicode.com/posts/1',config)
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}
export const getByUserIdService=()=>{
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}
export const getAllStoresService=()=>{
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))
}
export const createProdductoFakeService=()=>{
    const config={
        method:'POST',
        body:JSON.stringify({
            title: 'televisor',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
        }),
        headers:{
            'Content-type':'application/json'
        }
    };
    fetch('https://fakestoreapi.com/products',config)
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}
export const updateeProdductoFakeService=()=>{
    const config={
        method:'PUT',
        body:JSON.stringify({
            id:21,
            title: 'televisor',
                    price: 1300.5,
                    description: 'oled 75pulgadas',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
        }),
        headers:{
            'Content-type':'application/json'
        }
    };
    fetch('https://fakestoreapi.com/products/21',config)
    .then((response)=>{return response.json()})
    .then((json)=>{console.log(json)});
}