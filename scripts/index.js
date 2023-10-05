// counter
let slider_counter = 0

// calculation
const sliderCalc = (num) => {
    slider_counter += num
    if(slider_counter==-1){
        slider_counter=2
    }
    else if(slider_counter==3){
        slider_counter=0
    }
    sliderChange()
}

// showing (change src)
const sliderChange = () => {
    const TARGET_IMG = document.querySelector(".slider__main")
    if(slider_counter==0){
        TARGET_IMG.src = "img/html.png"
    }
    else if(slider_counter==1){
        TARGET_IMG.src = "img/css.png"
    }
    else{
        TARGET_IMG.src = "img/js.png"
    }
}

// start
document.addEventListener("DOMContentLoaded",(e)=>{
    // get trackbar
    const CHANGE_TRACKBAR = document.querySelector(".trackbar_text_change__trackbar")
    // get texts
    let a,b,c
    a=document.querySelector(".trackbar_text_change__text1")
    b=document.querySelector(".trackbar_text_change__text2")
    c=document.querySelector(".trackbar_text_change__text3")
    // listener to monitor trackbar value
    CHANGE_TRACKBAR.addEventListener("input",(e)=>{
        // change depends on value
        if(e.target.value==1){
            a.style.display="block"
            b.style.display="none"
            c.style.display="none"
        }
        else if(e.target.value==2){
            a.style.display="none"
            b.style.display="block"
            c.style.display="none"
        }
        else{
            a.style.display="none"
            b.style.display="none"
            c.style.display="block"
        }
    })
})