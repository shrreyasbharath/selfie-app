var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition

function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);

    var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;
    if(Content =="take my selfie")
    {
        console.log("take my selfie ----");
        speak();
    }
    console.log(Content);
    speak();

}

function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking your Selfie in 5 seconds";

    var utterthis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterthis);
    Webcam.attach(camera);
    setTimeout(function()
    {
        img_id = "selfie_1"
        take_snapshot();

        speak_data = "Taking your Selfie in 10 seconds";

        var utterthis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterthis);  
        
    },5000);

    setTimeout(function()
    {
        img_id = "selfie_2"
        take_snapshot();

        speak_data = "Taking your Selfie in 15 seconds";

        var utterthis = new SpeechSynthesisUtterance(speak_data);
    
        synth.speak(utterthis);  
        
    },10000);

    setTimeout(function()
    {
        img_id = "selfie_3"
        take_snapshot();
        
    },15000);


}

Webcam.set(
    {
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
    }
);
camera = document.getElementById("camera");

function take_snapshot()
{
        Webcam.snap(function(data_uri) {
            if (img_id == "selfie_1"){
            document.getElementById("result1").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
            }

            if (img_id == "selfie_2"){
                document.getElementById("result2").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
                }

            if (img_id == "selfie_3"){
                    document.getElementById("result3").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
                    }

    }); 
}
