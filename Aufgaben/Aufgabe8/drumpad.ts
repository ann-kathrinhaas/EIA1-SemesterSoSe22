namespace Aufgabe8 {

    window.addEventListener('load', function() {
        function playSample() {
            document.querySelector("#pad1").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/A.mp3');
                sound.play();   
            })
    
            document.querySelector("#pad2").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/C.mp3');
                sound.play();
            })
    
            document.querySelector("#pad3").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/F.mp3');
                sound.play();
            })
    
            document.querySelector("#pad4").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/G.mp3');
                sound.play();
            })
    
            document.querySelector("#pad5").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/hihat.mp3');
                sound.play();
            })
    
            document.querySelector("#pad6").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/kick.mp3');
                sound.play();
            })
    
            document.querySelector("#pad7").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/laugh-1.mp3');
                sound.play();
            })
    
            document.querySelector("#pad8").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/laugh-2.mp3');
                sound.play();
            })
    
            document.querySelector("#pad9").addEventListener('click', function() {
                var sound:HTMLAudioElement = new Audio('./assets/snare.mp3');
                sound.play();
            })
            
        }
        
        playSample();

        function beat() {
            setInterval(function() {
            sound[0].play();
            sound[1].play();
            sound[2].play();
            },500);
        }

       document.querySelector(".playbutton").addEventListener('click', beat);
       var sound:HTMLAudioElement [] = [new Audio('./assets/kick.mp3'), new Audio('./assets/snare.mp3'), new Audio('./assets/hihat.mp3')]
    })

}