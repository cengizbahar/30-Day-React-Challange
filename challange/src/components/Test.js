import { useEffect, useState } from "react";

export default function Test() {

    // const [count, setCount] = useState(0)
    const [postId, setPostId] = useState(1)
    const [post, setPost] = useState(false)
    
    useEffect(() => {
        console.log('component ilk yüklendiğinde çalışır')
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => console.log(json))
        let interval = setInterval(() => console.log('interval çalıştı'), 1000)
        return () => {
            console.log('component destorey')
            clearInterval(interval)
        }
    }, [])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/{postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postId])

    /*
    useEffect(() => {
        console.log('component render oldu')
    })
    */

    return (
        <div>
            <h3>{postId}</h3>
            {post && JSON.stringify(post)}
            <button onClick={() => setPostId(postId => postId + 1)}>Sonraki Konu</button>
            <hr />
            Test Componenti
        </div>
    );
}
