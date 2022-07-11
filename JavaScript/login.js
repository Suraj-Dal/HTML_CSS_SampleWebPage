function Validate()
{
    let userid = document.getElementById("userID").value;
    let password = document.getElementById("password").value;
    if(userid == "suraj" && password == "suraj")
    {
        alert("Login Successful.")
        window.location.href="../home.html";
    }
    else
    {
        alert("Login Failed.");
    }

}