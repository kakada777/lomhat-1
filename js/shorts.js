let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type == "password"){
      password.type = "text";
      eyeicon.src = "./open-eye.png";
    }else{
      password.type = "password";
      eyeicon.src = "./close-eye.png";
    }
}
//  function Search
let filterarray = [];
    let galleryarray = [
        {
            price :"$11.00",
            name : "Shorts-1",
            src : "./img shorts/download-4.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price :"$10.50",
            name : "Shorts-2",
            src : "./img shorts/download-3.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price :"$15.00",
            name : "Shorts-3",
            src : "./img shorts/download-2.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price :"$16.00",
            name : "Shorts-4",
            src : "./img shorts/download-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price :"$12.50",
            name : "Shorts-5",
            src : "./img shorts/download.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price :"$15.50",
            name : "Shorts-6",
            src : "./img shorts/download-4.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price :"$13.00",
            name : "Shorts-6",
            src : "./img shorts/download-6.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price :"$11.25",
            name : "Shorts-6",
            src : "./img shorts/download-5.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        
    ]
    showgallery(galleryarray);
    function showgallery(currarray){
        document.getElementById("card").innerText = "";
        for(var i=0;i<currarray.length;i++){
            document.getElementById("card").innerHTML += `
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  mt-3">
            <div class="card ">
                <img src="${currarray[i].src}"/>
                <h4 class="text-capitalize ">${currarray[i].name}</h4>
                <p class="mt-2">${currarray[i].desc}</p>

                <div class="star d-flex">
                    <div>
                        <i  class="fa-solid fa-star i-1"></i>
                        <i  class=" fa-solid fa-star i-2"></i>
                        <i  class=" fa-solid fa-star i-3"></i>
                        <i  class=" fa-solid fa-star i-4"></i>
                        <i  class=" fa-solid fa-star i-5"></i>
                    </div>
                    <div class="size">
                        <button class="btn btn-outline-dark">S</button>
                        <button class="btn btn-outline-dark">M</button>
                        <button class="btn btn-outline-dark">L</button>
                        <button class="btn btn-outline-dark">XL</button>
                    </div>
                </div>
                <div class="button d-flex ">
                    <div>
                        <a href="#" class="btn btn-success">BUY</a>
                        <a href="#" class="btn btn-danger">Next</a>
                    </div>
                    <div>
                        <h5>${currarray[i].price}</h5>
                    </div>
                </div>
                
            </div>
            </div>
            `
        }
    }

    document.getElementById("myinput").addEventListener("keyup",function(){
        let text = document.getElementById("myinput").value;

        filterarray = galleryarray.filter(function(a){
            if(a.name.includes(text)){
                return a.name;
            }
        });
        if(this.value ==""){
            showgallery(galleryarray);
        }else{
            if(filterarray == ""){
                document.getElementById("para" ).style.display='block';
                document.getElementById("card").innerHTML = "";
            }else{
                showgallery(filterarray);
                document.getElementById("para").style.display ='none';
            }
        }


    });