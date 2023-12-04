async function getData(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
        document.getElementById("test").innerHTML = data.body;
    }catch(err){
        console.log(err);
    }
}
getData();
