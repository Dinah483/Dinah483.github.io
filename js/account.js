const user=[{name:"Dinah",surname:"Masule",email:"dinah@gmail.com",password:"1234"}];
   

function addUser(){
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const c_password= document.getElementById('c-password').value;

    if(name=="" || surname=="" || email=="" ||password=="" || c_password ==""){
        alert("Fill in all required fields");
    }else if(password!=c_password){
        alert("Passwords do not match");
    }else{
        user.push({
            name:name,
            surname:surname,
            email:email,
            password:password
        });

        alert("Successfull");
    }
}  
