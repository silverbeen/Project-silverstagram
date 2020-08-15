/*window.onload=function(){
    const loginbt=document.getElementById
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"userId":"test","password":"test"});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://10.156.147.132:8080/login", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}*/
$(".loginForm").submit(function( event) {
    var myHeaders = new Headers();
    let id=document.getElementById("id").value;
    let ps=document.getElementById("ps").value;
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"userId":id,"password":ps});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://10.156.147.132:8080/login", requestOptions)
    .then(response => response.text())
    .then(result => alert(result))
    .catch(error => console.log('error', error));

})

