
/* XĜraph. Paint the world 

Note: Dear veiwer please be sure to load JQUERY in your HTML file

*/

/* This is the messaging mechanism,
 it helps to know whether the XGraph has been created or not. 
 This is it-->*/ localStorage.setItem("Msg1", "false")


/* The main object which controls the XGraph --> */ var XGraph = {
   /* This is used to create XGraph in the .HTML file */ create: () => {

        $("body").append("<canvas id='Canvas' class='cur'></canvas>").css("margin", "0px")
        localStorage.setItem("Msg1", "true")
    },
   /* Loads the data of the XGraph */ loadData: () => {
        if (localStorage.getItem("Msg1") === "true") {
            var canvas = document.getElementById("Canvas")
            canvas.width = window.innerWidth 
            canvas.height = window.innerHeight 

        }
        else if (localStorage.getItem("Msg1") === "false") {
            console.error("You have not created an XGraph, use \"XGraph.create()\" before using \"XGraph.loadData\". If you do not want to set up XGraph the long way just use XGraph.set() method which sets up XGraph right up ")
        }
    },
   /* Removes the XGraph from the .HTML file */ removeXGraph: function () {
        if (localStorage.getItem("Msg1") === "true") {
            $("canvas").remove()
            localStorage.setItem("Msg1", "false")
        }
        else if (localStorage.getItem("Msg1") === "false") {
            console.error("Cannot remove XGraph because it has not been created")

        }
    },
    /* Makes gridlines on the XGraph making it a graph*/ gridlines: function () {
        var canvas = document.getElementById("Canvas")
        var ctx = canvas.getContext("2d")
        var i = 0
        var Color1 = "lightgrey"
        var Color2 = "white"
        var GridColor;
        var CanvasColor = $("canvas").css("backgroundColor")
       switch (CanvasColor) 
       {
           case "grey" || "lightgrey" || "gray" || "lightgray": 
            GridColor = Color2
           break
           default :
           GridColor = Color1
           break
       }
        while (i < canvas.width) {
            ctx.lineWidth = 1
            ctx.strokeStyle = GridColor
            ctx.font = "12px arial"
            ctx.fillText(i, i + 10, 30, 90)
            ctx.moveTo(i, 0)
            ctx.lineTo(i, canvas.height)
            ctx.stroke()
            ctx.fillText(i, 10, i + 30, 90)
            ctx.moveTo(0, i)
            ctx.lineTo(canvas.width, i)
            ctx.stroke()
            i += 50

            ctx.fillStyle = "black"
            ctx.fillRect(0, 0, 50, 50)
        }

    },
   /* Clears everything inside the XGraph inculding gridlines*/  XClear: () => {
        var canvas = document.getElementById("Canvas")
        var ctx = canvas.getContext("2d")
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    },
    convertBase64: function () {
        if (localStorage.getItem("Msg1") === "true") {
            var canvas = document.querySelector("canvas")
            var ctx = canvas.getContext("2d")
            var canvas_img_in_b64 = canvas.toDataURL()
            alert("Kindly open console to veiw the Base64")
            console.log(canvas_img_in_b64)
        }
        else if (localStorage.getItem("Msg1") === "false") {
            console.error("We can't access the XGraph, it dose not exist!")
        }
    },
  /* This function is the shortcut method for setting up XGraph -->*/ set: function () {
        XGraph.create()
        XGraph.loadData()
        XGraph.gridlines()

    },
    Calpythgrn: (X1, Y1, X2, Y2) => {
        var Xdist = X1 - X2
        var Ydist = Y1 - Y2
        return Math.sqrt(Math.pow(Xdist, 2) + Math.pow(Ydist, 2))
    }
    // restrictMsgs: () => {
    //     localStorage.setItem("Error", "No error")
    // }
}



