let filterarray = [];
    let galleryarray = [
        {
            id: 4,
            name : "Shoes",
            src : "./img shoes/download-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 1,
            name : "iphone",
            src : "./img shoes/images-2.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 2,
            name : "samsung",
            src : "./img shoes/images-1.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            id: 3,
            name : "vivo",
            src : "./img shoes/download.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            id: 3,
            name : "vivo",
            src : "./img shoes/download.jpg",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            id: 3,
            name : "vivo",
            src : "./img shoes/download.jpg",
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
                <h4 class="text-capitalize ">${currarray[i].name}</h4>
                <img src="${currarray[i].src}" width="100%" height="420px"/>
                <p class="mt-2">${currarray[i].desc}</p>

                <div class="star d-flex">
                    <i  class="fa-solid fa-star i-1"></i>
                    <i  class=" fa-solid fa-star i-2"></i>
                    <i  class=" fa-solid fa-star i-3"></i>
                    <i  class=" fa-solid fa-star i-4"></i>
                    <i  class=" fa-solid fa-star i-5"></i>
                </div>
                <div class="buttun d-flex ">
                    <a href="#" class="btn btn-success">BUY</a>
                    <a href="#" class="btn btn-danger">Next</a>
                </div>
                <div class="wrapper">
                    <div class="click">
                      <span class="minus">-</span>
                      <span class="num">01</span>
                      <span class="plus">+</span>
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