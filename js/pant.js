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
            price :"$26.00",
            name : "pant-1",
            src : "./img pant/pic-1.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$22.50",
            name : "pant-2",
            src : "./img pant/pic-2.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$21.50",
            name : "pant-3",
            src : "./img pant/pic-6.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$21.50",
            name : "pant-4",
            src : "./img pant/pic-7.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$28.00",
            name : "pant-5",
            src : "./img pant/pic-5.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$22.00",
            name : "pant-6",
            src : "./img pant/pic-4.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$20.50",
            name : "pant-7",
            src : "./img pant/pic-3.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$25.00",
            name : "pant-8",
            src : "./img pant/pic-8.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        {
            price :"$24.00",
            name : "pant-9",
            src : "./img pant/pic-9.jpg",
            desc : "Some quick example text to build on the card title and make up the bulk of the card's content.",
        },
        
    ]
    showgallery(galleryarray);
    function showgallery(currarray){
        document.getElementById("card").innerText = "";
        for(var i=0;i<currarray.length;i++){
            document.getElementById("card").innerHTML += `
            <div class="col-xxl-3 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12  mt-3">
            <div class="card ">
                <img src="${currarray[i].src}" width="100%" height="100px"/>
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