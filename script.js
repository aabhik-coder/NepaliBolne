const textarea=document.querySelector("#textarea"),
speechBtn=document.querySelector("#play"),
cancelBtn=document.querySelector("#stop"),
voicelist=document.querySelector("select"),
saveBtn=document.querySelector("#save");

let synth = speechSynthesis;
let isSpeaking=true;

function textToSpeech(text){
    let utternance=new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name===voicelist.value){
            utternance.voice=voice;
        }
    }
    speechSynthesis.speak(utternance);
}

speechBtn.addEventListener("click",e=>{
    e.preventDefault();
   
    if(textarea.value!=="")
    {
        cancelBtn.addEventListener("click",e=>{
            e.preventDefault();
            synth.cancel();})

        if(!synth.speaking){
            
            textToSpeech(textarea.value);
        }
        if(textarea.value.length>80){
            if(isSpeaking ) {
             synth.resume();
             isSpeaking=false;
             speechBtn.innerHTML="PAUSE";
            }
            else{
             synth.pause();
             isSpeaking=true;
             speechBtn.innerHTML="RESUME";
            }
           
         }
    }
})
