console.log("asgasgh")
let button=document.getElementById("fb-root");
FB.getLoginStatus(function(response) {
    console.log(response)
});