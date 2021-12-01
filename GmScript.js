// if (canItalk === "Yes you can" && KeyAct === true) {
//     setTimeout(() => {
//         dia.close()
//         dia.showModal()
//         setTimeout(function () {
//             $("#opn-dia img").attr("src", "avatar.jpg")
//             $("#chnTxt").text("You: Whats that?  A key?")
//             IspKey = true
//         }, 1000)

//         if (IspKey === true) {
//                 $("#opn-dia img").attr("src", "talKf.jpg")
//                 $("#chnTxt").text("Gaurd: Stop talking the king has commanded...What the-? What the hell is that?")
//                 IspHell = true

//         }


//         if (IspHell === true) {
//             setTimeout(function () {
//                 $("#opn-dia img").attr("src", "avatar.jpg")
//                 $("#chnTxt").text("You: I don't know but for my life's sake will you let me pass by this road?")

//                 IspRid = true
//             }, 1000)
//         }
//         else {

//             null
//         }

//         if (IspRid === true) {
//             setTimeout(function () {
//                 $("#opn-dia img").attr("src", "talKf.jpg")
//                 $("#chnTxt").text("Gaurd: Hmm...the king is kind I'm sure he would not mind if I let you enter here, but you must answer this riddle, or I'll kill you")
//                 WillPro3 = true
//                 setTimeout(function () {
//                     WilProm = confirm("Will you agree?")
//                     switch (WilProm) {
//                         case true:
//                             // alert("Gaurd: the riddle is: \n \"" + riddle + "\" ")
//                             var ans = "Sun" //prompt("Type one word answer in lower case")
//                             switch (ans) {
//                                 case "sun":
//                                     // alert("The answer is correct and now I will let you out!")
//                                     localStorage.setItem("Right?", "Right")
//                                     break
//                                 case "Sun":
//                                     // alert("Gaurd: The answer is correct and now I will let you out!")
//                                     localStorage.setItem("Right?", "Right")

//                                     break
//                                 default:
//                                     // alert("Gaurd: your answer is wrong, DIE!")
//                                     Sqr1.x = 500
//                                 // $("canvas").remove()
//                                 // $("body").append("<img src='AvDead.jpg'>")
//                                 // alert("game over")

//                             }
//                             break
//                         case false:
//                             alert("Gaurd: DIE!")
//                             $("canvas").remove()
//                             $("body").append("<img src='AvDead.jpg'>")
//                             alert("game over")
//                             break
//                         default:
//                         // window.close()
//                     }
//                 }, 2000)
//             }, 3000)
//         }


//     }, 2000)

//     canItalk = "No you can't"
// }
// else if (canItalk === "No you can't") {
//     // end

// }