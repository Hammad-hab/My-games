localStorage.setItem("Increment Score", "Change Score None")
localStorage.setItem("New achivement", "No achivement")
localStorage.setItem("THE CHEATER IS A CHEATER", "not red handed")
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
if (localStorage.getItem("THE CHEATER IS A CHEATER") === "red handed") {
    alert("WE WILL NOT ALLOW \"CHEATERS\" TO PLAY OUR GAME")
    window.close()
}
$(document).ready(function () {
    // Inisiization 
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    var x_velocity = 10
    var y_velocity = 10
    var SPAWN_POINT_X = undefined
    var SPAWN_POINT_Y = undefined
    var x = 0
    var y = 0
    var score = 0
    // INCREMENT SCORE SECTOR
    var ClearInt = setInterval(function () {
        function incre() {
            switch (localStorage.getItem("Increment Score")) {
                case "Change Score Increment":
                    ctx.clearRect(50, 0, canvas.width, 50)
                    score += 100
                    ctx.fillStyle = "black"
                    ctx.fillText("Score:", 50, 50, 500)
                    ctx.fillStyle = "navy"
                    ctx.fillText(score, 100, 50, 500)
                    var win_dia = document.querySelector("dialog")
                    switch (score) {
                        case 1000:
                            $("#A1, #H1").remove()
                            win_dia.showModal()
                            $(win_dia).append("<p id='A1'>YOU ARE THE LEGEND, YOU HAVE THE WOOD PLANK, TOGETHER, WITH YOUR HANDS THIS PLACE SHALL SHINE ONCE MORE. TO THIS WE GIVE YOU THE TITLE: \n <h2 class='h' id='H1'>\"The IRON fist\"<h2></p>")
                            setTimeout(function () {
                                win_dia.close()
                            }, 4000)
                            break
                        case 1500:
                            win_dia.showModal()
                            $("#A1, #H1").remove()
                            $(win_dia).append("<p id ='A2'> WHTAT IS THIS? YOU ARE STILL AT THE SCORE OF \"1500\"? WELL WE SHALL STILL REWARD YOU: \n <h2 class='h'>\"THE surviver OF 1500\"</h2></p>")
                            setTimeout(function () {
                                win_dia.close()
                            }, 4000)   
                            break
                    }
                    break
                case "Change Score Decrement":
                    ctx.clearRect(50, 0, canvas.width, 50)
                    score -= 100
                    ctx.fillStyle = "black"
                    ctx.fillText("Score:", 50, 50, 500)
                    ctx.fillStyle = "navy"
                    ctx.fillText(score, 100, 50, 500)

                    break
            }
        }
        incre()
    }, 1000)
    // DRAW FUNC SECTOR
    function Square(X, Y, height, width, color) {
        this.x = X
        this.y = Y
        this.width = width
        this.height = height
        this.color = color

        this.update = function () {

            this.draw()
        }
        this.draw = function () {

            ctx.fillStyle = this.color
            ctx.fillRect(this.x, this.y, this.width, this.height)
        }
    }


    // Mouse position detectors
    var mouse = {
        x: undefined,
        y: undefined,
    }
    canvas.addEventListener("mousemove", function () {
        mouse.x = event.clientX
        mouse.y = event.clientY

    })

    // Ball positon editor
    setInterval(function () {
        SPAWN_POINT_X = Math.random() * canvas.width
        SPAWN_POINT_Y = Math.random() * canvas.height
        x = SPAWN_POINT_X
        y = SPAWN_POINT_Y

    }, 4000)

    // MAIN SECTOR
    function Main() {
        requestAnimationFrame(Main)
        ctx.clearRect(0, 50, canvas.width, canvas.height)
        ctx.fillStyle = "#000000"
        var SQ1 = new Square(undefined, 600, 20, 200, "rgba(126, 77, 14, 0.959)")
        var SQ2 = new Square(x, 60 + y, 50, 50, "red")
        if (mouse.x < 150) {
            SQ1.x = 150
        }
        else if (mouse.x > 1000) {
           SQ1.x = 1000
        }
        else {
            SQ1.x = mouse.x
        }
        SQ1.update()
        SQ2.update()

        // CONDITIONALS
        if (SQ2.x > canvas.width) {
            x_velocity = -x_velocity
            x += x_velocity
        }
        else if (x < 0) {
            x_velocity = -x_velocity
            x += x_velocity

        }
        else {
            x += x_velocity
        }

        var collision = XGraph.Calpythgrn(SQ1.x, SQ1.y, SQ2.x, SQ2.y)

        if (collision < 150) {
            x_velocity = -x_velocity
            y_velocity = -y_velocity
            x += x_velocity
            x += y_velocity
            localStorage.setItem("Increment Score", "Change Score Increment")
            setTimeout(function () {
                localStorage.setItem("Increment Score", "Change Score None")
            }, 1000)
        }

        if (SQ2.y > canvas.height) {
            y_velocity = -y_velocity
            y += y_velocity
            localStorage.setItem("Increment Score", "Change Score Decrement")
            var This = setTimeout(function () {
                localStorage.setItem("Increment Score", "Change Score None")
                clearTimeout(This)
            }, 1000)
            console.log("This should decrement")
        }
        else if (y < 0) {
            y_velocity = -y_velocity
            y += y_velocity

        }
        else {
            y += y_velocity
        }
    }
    // declaration
    Main()


})

function Cheat(cheatCode) {
    console.log("Nice try cheater we caught you, there is no cheat code, plus the cheat code you entered :" + cheatCode + " is ridculous")
  localStorage.setItem("THE CHEATER IS A CHEATER", "red handed")  
  setTimeout(function () {
  window.close()
  }, 10000)
    
}
