namespace Aufgabe9 {

    window.addEventListener("load", function(): void {

        document.querySelector("#pad1").addEventListener("click", function(): void {
            playSample("./assets/A.mp3");
        });
        document.querySelector("#pad2").addEventListener("click", function(): void {
            playSample("./assets/C.mp3");
        });
        document.querySelector("#pad3").addEventListener("click", function(): void {
            playSample("./assets/F.mp3");
        });
        document.querySelector("#pad4").addEventListener("click", function(): void {
            playSample("./assets/G.mp3");
        });
        document.querySelector("#pad5").addEventListener("click", function(): void {
            playSample("./assets/hihat.mp3");
        });
        document.querySelector("#pad6").addEventListener("click", function(): void {
            playSample("./assets/kick.mp3");
        });
        document.querySelector("#pad7").addEventListener("click", function(): void {
            playSample("./assets/laugh-1.mp3");
        });
        document.querySelector("#pad8").addEventListener("click", function(): void {
            playSample("./assets/laugh-2.mp3");
        });
        document.querySelector("#pad9").addEventListener("click", function(): void {
            playSample("./assets/snare.mp3");
        });


        // Funktion zum Abspielen eines Samples
        function playSample(samples: string): void {
            var sound: HTMLAudioElement = new Audio(samples);
            sound.play();
        }


        // Play-/Stop-Button
        var button: HTMLElement = document.querySelector("#button");
        button.setAttribute("class", "fas fa-play fa-8x");

        function changeButton(): void {
            if (button.getAttribute("class") == "fas fa-play fa-8x") { 
                button.setAttribute("class", "fas fa-stop fa-8x"); // Play -> Stop
                //playBeat();
            } else if (button.getAttribute("class") == "fas fa-stop fa-8x") { 
                button.setAttribute("class", "fas fa-play fa-8x"); // Stop -> Play
            }
        }
        document.querySelector("#button").addEventListener("click", changeButton);
    
    
        // Beat
        var beat: HTMLAudioElement [] = [new Audio("./assets/kick.mp3"), new Audio("./assets/snare.mp3"), new Audio("./assets/hihat.mp3"), new Audio("./assets/A.mp3"), new Audio("./assets/C.mp3"), new Audio("./assets/F.mp3"), new Audio("./assets/G.mp3"), new Audio("./assets/laugh-1.mp3"), new Audio("./assets/laugh-2.mp3")];

        var interval: number = setInterval(playBeat, 500);

        function playBeat(): void {
            if (button.getAttribute("class") == "fas fa-play fa-8x") {
                clearInterval(interval);
            }
            if (button.getAttribute("class") == "fas fa-stop fa-8x") {
                interval = setInterval(function(): void {
                    beat[0].play(); // kick
                    beat[1].play(); // snare
                    beat[2].play(); // hihat
                },                     500);
            }
        }
        document.querySelector("#button").addEventListener("click", playBeat); 

        
        // Remix-Button
        var remix: HTMLElement = document.querySelector("#remix");

        remix.setAttribute("class", "fas fa-random fa-8x");

        var zufall: number = setTimeout(random, 500);
        
        function random(): void {
            var sound1: number = Math.floor(Math.random() * 8);
            var sound2: number = Math.floor(Math.random() * 8);
            var sound3: number = Math.floor(Math.random() * 8);
            setTimeout(function(): void {
                beat[sound1].play();
                beat[sound2].play();
                beat[sound3].play();
            },         500);
        }
        document.querySelector("#remix").addEventListener("click", random);
        clearInterval(zufall);
        
    });

}