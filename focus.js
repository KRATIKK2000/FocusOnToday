let inputval=document.querySelectorAll(".inputContainer");

let checkbox=document.querySelectorAll(".checkBox")
let input= document.querySelectorAll(".input")
let warningSign=document.querySelector(".warning")
let checkBoxCompleteLength=document.querySelector(".completePregress")
let progressText=document.querySelector(".progressText")
let showTaskStatus=document.querySelector(".showTask")

let showMessage=["all task remaining"," two task remaining","one task remaining","all task done "]
// console.log(showMessage)



let checkBoxCount=0
let checkBoxLength=checkbox.length
let arrIndex=0
// console.log(checkBoxCompleteLength.style.width="50%")
// console.log(checkBoxCount)
let CompleteTaskPersentage;
// console.log(checkBoxCount,"persentage")

let preogrressInnerText=`${checkBoxCount}/${checkBoxLength}completed`
// console.log(preogrressInnerText)

showTaskStatus.innerText=showMessage[checkBoxCount]





inputval.forEach((ele)=>{
    // console.log(ele)
    ele.addEventListener("click",(e)=>{

           
            if(e.target.classList.contains("checkBox")){
                // yah pr checkbox add kia 
                // console.log(e.target.nextElementSibling.value,"ll")
                
                
                if(e.target.nextElementSibling){
                    // console.log("if")
                    e.target.nextElementSibling.removeAttribute("readonly")
                }


               if(e.target.nextElementSibling.value==""){
                // is vale iff me check kiya ki value kuch h ke ni input box me 
                // console.log("empty values")
                 warningSign.style.display="block"
                
                
               }
               else{
                
                e.target.classList.toggle("completeCheckBox")
                // input field me class add ki 
                e.target.nextElementSibling.classList.toggle("completeInput")
                warningSign.style.display="none"
                

                //  yha checkbox pr click kiya to content edite nahi kr skte or uncheck kiya to kr skte h
                if(e.target.nextElementSibling.classList.contains("completeInput")){
                    e.target.nextElementSibling.setAttribute("readonly",true)

                    checkBoxCount += 1
                    // console.log(checkBoxCount)
                    CompleteTaskPersentage=Math.ceil((checkBoxCount/checkBoxLength)*100)
                    checkBoxCompleteLength.style.width=`${CompleteTaskPersentage}%`
                    // console.log(CompleteTaskPersentage,"persentage inc")
                   
                    // showing complete task count
                    progressText.innerText=`${checkBoxCount}/${checkBoxLength}completed`

                    // showing messages accoring to check box
                    showTaskStatus.innerText = showMessage[checkBoxCount]

                }else {
                    e.target.nextElementSibling.removeAttribute("readonly")
                    
                    checkBoxCount -= 1
                    // console.log(checkBoxCount)
                    CompleteTaskPersentage=Math.ceil((checkBoxCount/checkBoxLength)*100)
                    checkBoxCompleteLength.style.width=`${CompleteTaskPersentage}%`
                    // console.log(CompleteTaskPersentage,"persentage dec")


                     // showing uncomplete task
                    progressText.innerText=`${checkBoxCount}/${checkBoxLength}completed`
                    
                    // showing messages accoring to check box
                    showTaskStatus.innerText=showMessage[checkBoxCount]

                 }
                   
                
                // console.log(e.target.nextElementSibling.value,"vv")
                // console.log(e.target)
                // console.log("else")
              
                
             }
     
             }
             else {
                //   e.target.lastElementChild.focus()
                
                
            }
   

             
    })
})



    input.forEach((inputEle,index)=>{
        inputEle.addEventListener("input",(e)=>{
           
        //    console.log(e.target.id)
           
        })
       
    })
  


