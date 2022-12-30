function startClassification(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/DJ8eXUbxe/model.json', modelReady);
 }

 function modelReady(){
    classifier.classify( gotResults );
 }

 function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("resultado").innerHTML = 'Escucho:  '+ results[0].label;
        document.getElementById("resultado").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

        console.log(results[0].label);

        img = document.getElementById("cabra");
        img1 = document.getElementById("gallo");
        img2 = document.getElementById("gato");
        img3 = document.getElementById("puerco");
        img4 = document.getElementById("perro");
        img5 = document.getElementById("culebrita");
        img6 = document.getElementById("vaca");

        if (results[0].label == "Cabra") {
            console.log("aparece cabra")
            document.getElementById("cabra").style.visibility = 'visible';
            document.getElementById("micro").style.visibility = 'hidden';
            img.src = 'goat.png';
            setTimeout(function()
            {       
                document.getElementById("cabra").style.visibility = 'hidden';
            },  7000);
        } else if (results[0].label == "Gallo") {
            console.log("aparece gallo")
            document.getElementById("gallo").style.visibility = 'visible';
            img1.src = 'rooster.gif';
            setTimeout(function()
            {       
                document.getElementById("gallo").style.visibility = 'hidden';
            },  7000);
        } else if (results[0].label == "Gato") {
            console.log("aparace gato")
            document.getElementById("gato").style.visibility = 'visible';
            img2.src = 'cat.gif';
            setTimeout(function()
            {       
                document.getElementById("gato").style.visibility = 'hidden';
            },  7000);
        } else if (results[0].label == "Puerco") {
            console.log("aparece puerco")
            document.getElementById("puerco").style.visibility = 'visible';
            img3.src = 'pig.gif';            
            setTimeout(function()
            {       
                document.getElementById("puerco").style.visibility = 'hidden';
            },  7000);
        } else if (results[0].label == "Perro") {
            console.log("aparace perro")
            document.getElementById("perro").style.visibility = 'visible';
            img4.src = 'dog.gif';             
            setTimeout(function()
            {       
                document.getElementById("perro").style.visibility = 'hidden';
            },  7000);
        }else if (results[0].label == "Serpiente") {
            console.log("aparece culebrita")
            document.getElementById("culebrita").style.visibility = 'visible';
            img5.src = 'snake.gif';       
            setTimeout(function()
            {       
                document.getElementById("culebrita").style.visibility = 'hidden';
            },  7000);
        } else if (results[0].label == "Vaca") {
            console.log("aparace vaca")
            document.getElementById("vaca").style.visibility = 'visible';
            img6.src = 'cow.png';
            setTimeout(function()
            {       
                document.getElementById("vaca").style.visibility = 'hidden';
            },  7000);
        }
    }
 }
 setTimeout(function()
 {       
     take_selfie();
     save(); 
 },  5000);