function loadData(){
    //craete new request
    const xhr = new XMLHttpRequest();

    //when to do response arrives
    xhr.onload = function (){
        const container = document.getElementById("demo");
        demo.innerHTML = xhr.responseText;
    };
    //prepare request
    xhr.open("GET", "./data/data.txt");
    // sent request
    xhr.send();
}