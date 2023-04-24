// debugger;
    let UserName = document.getElementById("UserName");
    let Password = document.getElementById("Password");
    
    document.getElementById('Btn').addEventListener('click',function(){
        if(Username.value=="" || UserName.vaule==null || UserName.value==undefined 
        ||Password.value=="" || Password.vaule==null || Password.value==undefined)
        {
            document.getElementById("FormContainer").style.backgroundColor='rgba(247, 103, 103, 0.196)';
            document.getElementById("FormContainer").style.boxShadow='0px 1px 2px 3px rgba(216, 37, 5, 0.466)';
        }
    })
