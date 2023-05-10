function callApi() {
    // window.alert('oi');
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => console.log(response))
        // .then(json => console.log(json))
}