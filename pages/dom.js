let container= document.getElementById("container")
let input=document.getElementById("ip")
input.addEventListener("keypress", function (e){
    if(e.keyCode==13){
        e.preventDefault()
        fetchData(`${input.value}`)
    }
})


// -----------------------------------------------------------api----------------------

var clientId ="25c92b941ab2238"
var myHeaders = new Headers();
myHeaders.append("Authorization", `Client-ID ${clientId}`);


var requestOptions = {
method: 'GET',
headers: myHeaders,
redirect: 'follow'
};
let section=true
let sort="top"
let showViral=true
let album_previews=true

let mature= false
var window="top"
let page=1
// -----------------------------------------------------------api----------------------

let fetchData=async(e)=>{
container.innerHTML=null
input.value=""
try{
let req= await     fetch(`https://api.imgur.com/3/gallery/search/{${sort}}/{{window}}/{{page}}?q=${e}`, requestOptions)
let response= await req.json()
// console.log(response)
let data= response.data
console.log(data)
showData(data)

}
catch(err){
 console.log(err)
}

}
fetchData()
let fixdata=async()=>{
container.innerHTML=null
// input.value=""
try{
let req= await     fetch(`https://api.imgur.com/3/gallery/search/{${sort}}/{{window}}/{{page}}`, requestOptions)
let response= await req.json()
// console.log(response)
let data= response.data
console.log(data)
showData(data)

}
catch(err){
 console.log(err)
}
}




let showData=(data)=>{

data.map((e)=>{
 
//    if(e.title!==null){
//     let title= document.createElement("h3")
//     title.innerText=e.title
//    }


    let images= e.images
    images.map((el)=>{
        if(el.type=="image/jpeg" && el.link!==null && el.description !==null){
            let maindiv= document.createElement("div")
    maindiv.setAttribute("class","maindiv")
    
    let imgDataDiv= document.createElement("div")
    imgDataDiv.setAttribute("class","imgdiv")
    let descdiv= document.createElement("div")
    descdiv.setAttribute("class","text1")
            
            let pic= document.createElement("img")
            pic.setAttribute("class","picss")
            pic.src=el.link

            let disc= document.createElement("h4")
            disc.innerText="Title:  "+ el.description
          

            let view= document.createElement("h5")
            view.innerText="Views: "+ el.views
            descdiv.append(disc,view)


            // console.log(el.link)
            imgDataDiv.append(pic)
            maindiv.append(imgDataDiv,descdiv)
    container.append(maindiv)
        }
     

    })

 

})







}
// let x=0
// const debouncing=(e,i)=>{
//         if(x){
//             clearInterval(x)
//         }
//         x=setTimeout(function (){

//             e()
//         },i)
    
//     }

function renderVisibility(){
   
   
       
    // div1.style.opacity="90"  
    // main_imgr_container.style.opacity="0"
    window.location.href="./pages/signin.html"
    // main_imgr_container.style.visibility="hidden"
    
    
   
}
function signup(){
    window.location.href="./pages/signup.html"
}
