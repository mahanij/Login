let form = document.getElementsByTagName("form")[0];

function login() {
  form.addEventListener("submit", async (e) => {
    e.preventDefault(); 

    let email = e.target.email.value; 
    let password = e.target.password.value; 

    const response = await fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const result = await response.json();
      if (result.token) {
        alert('login succesfull')
      } else {
        alert("wrong value");
      }
    } else {
      alert("the problem happend on the server");
    }
  });
}

login();
