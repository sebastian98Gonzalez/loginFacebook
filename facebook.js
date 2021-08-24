console.log("asgasgh")
let button=document.getElementById("button");
button.addEventListener("click",()=>{
    FB.getLoginStatus(function(response) {
        // statusChangeCallback(response);
        console.log(response)
    });
})