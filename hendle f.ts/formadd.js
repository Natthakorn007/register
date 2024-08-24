function formSend(event) {
<<<<<<< HEAD
     event.preventDefault();
 const username = event.target.elements["username"].value;
 const password = event.target.elements["password"].value;
 const firstname = event.target.elements["firstname"].value;
 const lastname = event.target.elements["lastname"].value;
 const dateOfBirth = event.target.elements["date_of_birth"].value;
 const gender = event.target.elements["gender"].value;
 const email = event.target.elements["email"].value;
 const height = event.target.elements["height"].value;
 const weight = event.target.elements["weight"].value;
 const data = {
=======
    event.preventDefault();
    const username = event.target.elements["username"].value;
    const password = event.target.elements["password"].value;
    const firstname = event.target.elements["firstname"].value;
    const lastname = event.target.elements["lastname"].value;
    const data = {
>>>>>>> 6db2ef2e5bff7381550355b1015db10a5ddca705
        username: username,
        password: password,
        firstname: firstname,
        lastname: lastname,
<<<<<<< HEAD
        dateOfBirth: dateOfBirth,
        gender: gender,
        email: email,
        height: height,
        weight: weight,
     };
     console.log(data);
=======
    };
    console.log(data);
>>>>>>> 6db2ef2e5bff7381550355b1015db10a5ddca705
}

