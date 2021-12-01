
localStorage.setItem("game over or not?", "its still not over!");
localStorage.setItem("Safe or not?", "safe");

$(document).ready(function () {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    var Safe_o_meter = [1000, 2000, 3000, 4000, 5000, 6000, 9000];
    var Random_Safe_o_meter = Safe_o_meter[Math.floor(Math.random() * 7)];
    var Color = ["rgb(78, 190, 121)", "red"];
    var Score = 0
    var col = "goldenrod"
    $(canvas).css({ "background-image": "url(Background.jpg)", "background-repeat": "no-repeat", "background-size": "cover" })
    // var RandColor = Color[Math.floor(Math.random() * 2)];
    /* GUN */
    ctx.fillStyle = "rgb(62, 65, 68)"
    ctx.fillRect(100, 560, 50, 30);
    ctx.fillRect(100, 600, 20, 10);
    ctx.fillRect(150, 560, 30, 10);
    ctx.fillRect(100, 590, 20, 10);
    /* MAN */
    // body //
    ctx.fillStyle = "navy";
    ctx.fillRect(50, 530, 50, 100);

    // head //
    ctx.fillStyle = "rgb(253, 231, 194)";
    ctx.fillRect(50, 500, 50, 40);
    ctx.fillStyle = "#000000";
    // eyes //
    ctx.fillRect(56, 510, 10, 5);
    ctx.fillRect(80, 510, 10, 5);

    ctx.fillStyle = "red";
    ctx.fillRect(1300, 550, 50, 80);
    ctx.fillStyle = "rgb(253, 231, 194)"
    ctx.fillRect(1300, 510, 50, 40)
    ctx.fillStyle = "#000000"
    ctx.fillRect(1305, 520, 40, 5);


    /* Ground */
    ctx.fillStyle = "green"
    ctx.fillRect(0, 630, canvas.width, 10)
    ctx.fillStyle = "rgb(155, 60, 60)"
    ctx.fillRect(0, 640, canvas.width, 50)
    $("canvas").click(function () {
        var localNum = [550, 560, 570];
        var X = 200;
        var V = 10;
        var Y = localNum[Math.floor(Math.random() * 3)];
        ctx.fillStyle = "red";
        function drawChange() {
            requestAnimationFrame(drawChange);
            // collison  event//
            if (X === 150) {
                localStorage.setItem("game over or not?", "its over");
            }

            if (localStorage.getItem("game over or not?") === "its over") {
                XGraph.XClear();
                ctx.font = "30px arial";
                ctx.fillStyle = "red"
                ctx.fillText("GAME OVER", 600, 300, 500);
                $("title").text("GAME OVER!");
                // ctx.fillText()
            } else {
                if (X === 1300) {
                    if (localStorage.getItem("Safe or not?") === "not safe") {
                        V = -V;
                        X = X += V;
                    } else if (localStorage.getItem("Safe or not?") === "safe") {
                        V = 150;
                        X = X += V;
                        Score++;
                        $("title").text("Score: " + Score);
                        if (Score === 100) {
                            alert("New achivement: \n \"GOLDEN PLAYER\" ")
                            ctx.fillStyle = "goldenrod";
                            ctx.fillRect(55, 550, 40, 60);
                        }
                        else if (Score === 500) {
                            alert("New achivement: \n \"THE SILVER BULLET\" ")
                            col = "silver"
                        }
                        else if (Score === 1000) {
                            alert("New achivement: \n \"THE GREAT SLAYER\"")
                            ctx.clearRect(50, 500, 50, 40)
                            ctx.fillStyle = "white"
                            ctx.fillRect(50, 500, 50, 40)
                            ctx.fillStyle = "gray";
                            ctx.fillRect(50, 540, 50, 90);
                        }
                        else if (Score === 1500) {
                            alert("New achivement: \n \"NO ACHIVEMENT\" ")
                           
                        }
                         else if (Score === 10000) {
                             alert("New achivement: \n \"THE END\" ")
                              window.close()
                         } 
                    }
                } else {
                    X = X += V;
                    ctx.fillStyle = col;
                    ctx.fillRect(X, Y, 20, 5);
                    ctx.clearRect(X - 10, Y, 10, 20);
                }
            }
        }
        drawChange();
    });

    // Boxs changes color by :
    setInterval(function () {
        var rdt = ctx.fillStyle = Color[Math.floor(Math.random() * 2)];
        if (rdt === "rgb(78, 190, 121)") {
            localStorage.setItem("Safe or not?", "safe");
        } else if (rdt === "red") {
            localStorage.setItem("Safe or not?", "not safe");
        }
        ctx.fillRect(1300, 550, 50, 80);
    }, Random_Safe_o_meter);
});

