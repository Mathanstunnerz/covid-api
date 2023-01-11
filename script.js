




var drop = document.createElement("select")
drop.setAttribute("id","drop_state");
drop.innerHTML = `
<option value ="">Select</option>
<option value ="0">AN</option>
<option value ="1">AP</option>
<option value ="2">AR</option>
<option value ="3">AS</option>
<option value ="4">BR</option>
<option value ="5">CH</option>
<option value ="6">CT</option>
<option value ="7">DL</option>
<option value ="8">DN</option>
<option value ="9">GA</option>
<option value ="10">GJ</option>
<option value ="11">HP</option>
<option value ="12">HR</option>
<option value ="13">JH</option>
<option value ="14">JK</option>
<option value ="15">KA</option>
<option value ="16">KL</option>
<option value ="17">LA</option>
<option value ="18">LD</option>
<option value ="19">MH</option>
<option value ="20">ML</option>
<option value ="21">MN</option>
<option value ="22">MP</option>
<option value ="23">MZ</option>
<option value ="24">NL</option>
<option value ="25">OR</option>
<option value ="26">PB</option>
<option value ="27">PY</option>
<option value ="28">RJ</option>
<option value ="29">SK</option>
<option value ="30">TG</option>
<option value ="31">TN</option>
<option value ="32">TR</option>
<option value ="33">TT</option>
<option value ="34">UP</option>
<option value ="35">UT</option>
<option value ="36">WB</option>`
var form_append = document.querySelector(".form")
form_append.insertAdjacentElement("afterbegin",drop)



var api3 ="https://data.covid19india.org/v4/min/data.min.json"
// delta

async function covid(){

  var search =document.querySelector(".search")
  search.addEventListener("click",input_function)
  function input_function(e){
    // var input_box = document.querySelector(".form-input")
    // var input_2 =input_box.value
    var ddd = document.querySelector("#drop_state")
      var select_val = ddd.value
      
        // console.log("fill in drop state")
        var rawdata = json_2
        // console.log(rawdata)
        
        var data = json_2
        var dgfdg = Object.values(data)
        // if(select_val){
        var dist = dgfdg[`${select_val}`]
        //  console.log(total)
        if(dist){
            // console.log(dist)
            var dd = ["5" ,"0"]
            for(let i of dd){
              // console.log(i)
              // var sf = dd[i]
            var dis_convert =Object.values(dist)
            var total = dis_convert[i]
     
      
        if( i === "5"){
          
            var confirmed =total.confirmed
       
         
          var deceased = total.deceased
          var recovered = total.recovered
          var tested = total.tested
          var vaccinated1 = total.vaccinated1
          var vaccinated2 = total.vaccinated2
        }else{
          var confirmed1 =total.confirmed
          if(confirmed1=== undefined ){
            confirmed1="0"
          }
          var deceased2 = total.deceased
          if(deceased2=== undefined){
            deceased2="0"
          }
          var recovered3 = total.recovered
          if( recovered3=== undefined ){
            recovered3="0"
          }
        
          var tested1 = total.tested
          var vaccinated1_1 = total.vaccinated1
          var vaccinated2_2 = total.vaccinated2
        }
     
        }


      }
       else {
        console.log("error")
       }
      
       
       function confirm(){
        var get_content = document.querySelector(".content .addf")
      
        var dis_covid_value = document.createElement("div")
        dis_covid_value.setAttribute("id", "covid_display")

        dis_covid_value.innerHTML=`
        <div class="row">
        <div class="col-md-6 dis_vac">
        <h2 class="head">Total</h2>
        <div class="inner_detail">
        <h4 class="in_head">confirmed   : ${confirmed}  </h4>
        <h4 class="in_head">deceased    : ${deceased}   </h4>
        <h4 class="in_head">recovered   : ${recovered}  </h4>
        <h4 class="in_head">tested      : ${tested}     </h4>
        <h4 class="in_head">vaccinated1 : ${vaccinated1}</h4>
        <h4 class="in_head">vaccinated2 : ${vaccinated2}</h4>
        </div>
        </div>
        <div class="col-md-6 dis_vac_2">
        <h2 class="head">Today</h2>
        <div class="inner_detail">
        <h4 class="in_head">confirmed   : ${confirmed1}  </h4>
        <h4 class="in_head">deceased    : ${deceased2}   </h4>
        <h4 class="in_head">recovered   : ${recovered3}  </h4>
        <h4 class="in_head">tested      : ${tested1}     </h4>
        <h4 class="in_head">vaccinated1 : ${vaccinated1_1}</h4>
        <h4 class="in_head">vaccinated2 : ${vaccinated2_2}</h4>
        </div>
        </div>
        </div>
      
        `

     
        var get = document.querySelector(".addf")
      
        if(get.innerHTML.trim()==""){
          // console.log("inner empty")
      
          get_content.append(dis_covid_value)
          // let ad = document.querySelector(".awareness")
          // ad.remove()

        }
        else{
          var iner = document.querySelector("#covid_display")
          iner.remove()
          get_content.append(dis_covid_value)
        }
     
        if(confirmed1=== undefined ){
          let confirmed= document.querySelector("#covid_display")
          confirmed.remove()
        }
      
      }
      confirm()


  }

   try{
    var body = document.querySelector(".dis")
        body.innerHTML = `<div class="spinner-border text-success" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>`
    var api2 = "https://coronavirus.m.pipedream.net/"
    var url = await fetch(api2)
    var json_ = await url.json()
    // console.log(json_)

      var url2 = await fetch(api3)
      var json_2 = await url2.json()
      // console.log(json_2 )
  
    
    var summaryStats = json_.summaryStats.global
    var Confirmed = json_.summaryStats.global.confirmed
    var deaths = json_.summaryStats.global.deaths
    var recovered = json_.summaryStats.global.recovered
    if( recovered=== null){
      recovered = "0"
    }
    // console.log(Confirmed)
    // console.log(summaryStats)
    function global_covid() {
      var global = document.querySelector(".dis")
   global.innerHTML = `
   <div class="global_covid">
   
   <div class="row global_number">
   <div class="col-md-12 back">
   
   <h2 class="front-global">Global</h2>                   
   </div>
   <div class="col-md-12 gobal-virus">
   <span class="gobal-virus_icon material-symbols-outlined">expand_less
   
   </span>
   <div class="col-md-12 dropdown">
   
   <div class="row dropdown-child">
   <div class="col-4"><h4 class="container">Confirmed
   </h4> 
   <h1 class="container">${Confirmed}</h1>
   
   </div>
   <div class="col-4 "><h4 class="container">Deaths
   </h4> 
   <h1 class="container">${deaths}</h1>
   </div>
   <div class="col-4 "><h4 class="container" >Recovered
    </h4>
   <h1 class="container">${recovered}</h1>
   </div>
   
   </div>
   
   </div>


   </div>
 
   
   </div>
   `
  //  Confirmed
  //  Afghanistan
     var conten = document.querySelector(".content")
    var ad =document.createElement('div')
    ad.className = 'awareness'
    ad.innerHTML =`
    <div class="inside_awarness">
    <h1 >ARE <h1>YOU</h1></h1>
    <h1>VACCINATED?</h1>
 </div>
 <img src="https://i.pinimg.com/originals/8e/32/af/8e32af2110bbf7a31c5b1e04ac9b9dc8.png" alt="..." class="vaccine_img">
 <img src="https://binaries.templates.cdn.office.net/support/templates/en-us/lt89389834_quantized.png" alt="..." class="awar_img">
 <img class="corona_icon_animation"src="https://cdn.pixabay.com/photo/2020/04/29/07/54/coronavirus-5107715_1280.png">
    `
    conten.append(ad)



   }
   global_covid()
   

   }
   catch{
    console.log("Failed to fetch")
   }
    

}
covid()


