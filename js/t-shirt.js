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
            id: 4,
            name : "T-shirt-1",
            src : "./img t-shirt/download.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 1,
            name : "T-shirt-2",
            src : "./img t-shirt/download-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 2,
            name : "T-shirt-3",
            src : "./img t-shirt/download-2.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 3,
            name : "T-shirt-4",
            src : "./img t-shirt/download-3.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            id: 3,
            name : "T-shirt-5",
            src : "./img t-shirt/download-4.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            id: 3,
            name : "T-shirt-6",
            src : "./img t-shirt/download.jpg",
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
                <img src="${currarray[i].src}" width="100%" height="500px" />
                <h4 class="text-capitalize ">${currarray[i].name}</h4>
                <p class="mt-2">${currarray[i].desc}</p>

                <div class="star d-flex">
                    <i  class="fa-solid fa-star i-1"></i>
                    <i  class=" fa-solid fa-star i-2"></i>
                    <i  class=" fa-solid fa-star i-3"></i>
                    <i  class=" fa-solid fa-star i-4"></i>
                    <i  class=" fa-solid fa-star i-5"></i>
                </div>
                <div class="button d-flex ">
                    <a href="#" class="btn btn-success">BUY</a>
                    <a href="#" class="btn btn-danger">Next</a>
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