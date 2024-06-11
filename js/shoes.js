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
            price:"$25.00",
            name : "Shoes-1",
            src : "./img shoes/omar-prestwich-jLEGurepDco-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price:"$35.00",
            name : "Shoes-2",
            src : "./img shoes/luis-felipe-lins-J2-wAQDckus-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price:"$40.00",
            name : "Shoes-3",
            src : "./img shoes/super-straho-5BMPrXBFTI8-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,tempore.",
        },
        {
            price:"$19.00",
            name : "Shoes-4",
            src : "./img shoes/domino-studio-164_6wVEHfI-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$52.50",
            name : "Shoes-5",
            src : "./img shoes/andres-jasso-PqbL_mxmaUE-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$32.00",
            name : "Shoes-6",
            src : "./img shoes/maksim-larin-NOpsC3nWTzY-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$39.00",
            name : "Shoes-7",
            src : "./img shoes/maksim-larin-ezdrvzA1hZw-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$18.00",
            name : "Shoes-8",
            src : "./img shoes/xavier-teo-SxAXphIPWeg-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$25.50",
            name : "Shoes-9",
            src : "./img shoes/brad-starkey-Bowrbqz1kgw-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$18.00",
            name : "Shoes-10",
            src : "./img shoes/solesavy-LgzM6R0ojoE-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$45.00",
            name : "Shoes-11",
            src : "./img shoes/mojtaba-mosayebzadeh-CFYS5qMSuKo-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$18.00",
            name : "Shoes-12",
            src : "./img shoes/mnz-OJTNpLmsSHs-unsplash.png",
            desc : "Loream ipsum dolor sit amet consectetur adipisicing elit. Doloribus,temporerrrrrrr.",
        },
        {
            price:"$18.00",
            name : "Shoes-13",
            src : "./img shoes/jeff-tumale-SD9Jyl1xNQ4-unsplash.png",
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
                        <button class="btn btn-outline-dark">30</button>
                        <button class="btn btn-outline-dark">31</button>
                        <button class="btn btn-outline-dark">32</button>
                        <button class="btn btn-outline-dark">33</button>
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


 

