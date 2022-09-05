let checker =document.getElementById("checker");
let details = ""

fetch('https://randomuser.me/api/?results=20')
.then((res) => res.json())
.then((data)=>{
  console.log(data.results);
  let i=0;
  for(i; i<20; i++){
details +=`<div class="col-lg-3 col-md-6 col-sm-12 mb-3 " style="border:3px solid burlywood;background-color:coral;" >
<div class="text-center">
 <img src="${data.results[i].picture.large}"id="image">
</div>
  <section style="background-color: burlywood">
  <div id="icon">
    <div class="user-info">
<span><i class="fas fa-user" id="name">Name:</i></span>
<span id = "name">${data.results[i].name.title}
      ${data.results[i].name.first}
      ${data.results[i].name.last}
       </span>
    </div>
   <div class="user-info">
     <span><i class="fas fa-envelope" id="email">Email:</i></span>
     <span id = "name">${data.results[i].email}</span>
 </div>
   <div class="user-info">
     <span><i class="fas fa-map-marked" id="location">Address:</i></span>
     <span id="name"> ${data.results[i].location.street.name}</span>
 </div>
   <div class="user-info">
     <span><i class="fas fa-calendar-alt" id="birth">DOB:</i></span>
     <span id = "name">${data.results[i].dob.date}
           ${data.results[i].dob.age}</span>
 </div>
   <div class="user-info">
     <span><i class="fas fa-phone" id="contact">Contact:</i></span>
         <span id = "name"> ${data.results[i].phone}</span>
 </div>
   <div class="user-info">
     <span><i class="fas fa-lock " id="password">Password:</i></span>
     <span id = "name">  ${data.results[i].login.password}</span>
 </div>
  </div>
 </section>
</div>`
  }
  checker.innerHTML = details;
    
})