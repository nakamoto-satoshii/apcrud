
let getid = document.querySelector(".getid");

getid.addEventListener('click',()=>{
 
    let idvalue =document.querySelector('.id');
    let isempty = idvalue.value.trim();

    if(!isempty){
        console.log("Value is Empty")
    }
    else{
        fetch('./php/displayupdate.php',{
            method: 'POST',
            body: JSON.stringify({ value: idvalue.value}),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
             console.log(data[0]);
             let container =document.querySelector('.create');
             let form = document.createElement('form');
             form.setAttribute('action','./php/update.php');
             form.setAttribute('method','POST');
             container.appendChild(form);
             
             let id = document.createElement('input');
             id.setAttribute('type','text');
             id.setAttribute('name','id');
             id.setAttribute('class','id');
             id.value =data[0].id;
             id.readOnly =true
             form.appendChild(id);
         
             let l1 = document.createElement("br");
             form.appendChild(l1);
             idvalue.remove();
             let name = document.createElement('input');
             name.setAttribute('type','text');
             name.setAttribute('name','name');
             name.setAttribute('class','name');
             name.setAttribute('placeholder','NAME');
             name.value = `${data[0].name}`;
             form.appendChild(name);
             
             let l2 = document.createElement("br");
             form.appendChild(l2);
         
             let email = document.createElement('input');
             email.setAttribute('type','text');
             email.setAttribute('name','email');
             email.setAttribute('class','email');
             email.setAttribute('placeholder','EMAIL');
             email.value = data[0].email;
             form.appendChild(email);
             
             let l3 = document.createElement("br");
             form.appendChild(l3);
         
             let time = document.createElement('input');
             time.setAttribute('type','time');
             time.setAttribute('name','time');
             time.setAttribute('class','time');
             time.value = data[0].time;
             form.appendChild(time);
             
             let l4 = document.createElement("br");
             form.appendChild(l4);
             
             let txtp =document.createElement('p');
             txtp.textContent ="Enter additional information regarding to the appointment";
             form.appendChild(txtp);
             
             let textarea = document.createElement('textarea');
             textarea.setAttribute('rows','40');
             textarea.setAttribute('name','content');
             textarea.setAttribute('class','content');
             textarea.value = data[0].content;
             form.appendChild(textarea);
         
             let l5 = document.createElement("br");
             form.appendChild(l5);
             let button =  document.createElement('button');
             button.textContent ="UPDATE";
             button.setAttribute('type','submit')
             
             form.appendChild(button);
             getid.remove();

            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    } 
})
    
function a(){
    
    
}