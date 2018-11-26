// Global Hold Vars
var die_1_hold_value = false;
var die_2_hold_value = false;
var die_3_hold_value = false;
var die_4_hold_value = false;
var die_5_hold_value = false;

// How many rolls left, > 0 equals roll
var rollNum = 3;

// Id grabs for event listeners
var holdBtn1 = document.getElementById("holdBtn1");
var holdBtn2 = document.getElementById("holdBtn2");
var holdBtn3 = document.getElementById("holdBtn3");
var holdBtn4 = document.getElementById("holdBtn4");
var holdBtn5 = document.getElementById("holdBtn5");

// Event Listeners
holdBtn1.addEventListener('click', hold1);
holdBtn2.addEventListener('click', hold2);
holdBtn3.addEventListener('click', hold3);
holdBtn4.addEventListener('click', hold4);
holdBtn5.addEventListener('click', hold5);

// Each Die's roll function, if die-hold-value === true, does not roll
function rollDie1() {
    if (die_1_hold_value === false) {
        var num = Math.floor((Math.random() * 6) + 1);
        $("#die1").fadeOut()
        setTimeout(function () {
            $("#die1").attr("src", "assets/images/" + num + ".jpg");
        }, 400);
        $("#die1").fadeIn();
    }
};

function rollDie2() {
    if (die_2_hold_value === false) {
        var num = Math.floor((Math.random() * 6) + 1);
        $("#die2").fadeOut()
        setTimeout(function () {
            $("#die2").attr("src", "assets/images/" + num + ".jpg");
        }, 400);
        $("#die2").fadeIn();
    }
};

function rollDie3() {
    if (die_3_hold_value === false) {
        var num = Math.floor((Math.random() * 6) + 1);
        $("#die3").fadeOut()
        setTimeout(function () {
            $("#die3").attr("src", "assets/images/" + num + ".jpg");
        }, 400);
        $("#die3").fadeIn();
    }
};

function rollDie4() {
    if (die_4_hold_value === false) {
        var num = Math.floor((Math.random() * 6) + 1);
        $("#die4").fadeOut()
        setTimeout(function () {
            $("#die4").attr("src", "assets/images/" + num + ".jpg");
        }, 400);
        $("#die4").fadeIn();
    }
};

function rollDie5() {
    if (die_5_hold_value === false) {
        var num = Math.floor((Math.random() * 6) + 1);
        $("#die5").fadeOut()
        setTimeout(function () {
            $("#die5").attr("src", "assets/images/" + num + ".jpg");
        }, 400);
        $("#die5").fadeIn();
    }
};



// Roll Button's function
function rollAll() {
    if (rollNum > 0) {
        rollDie1();
        rollDie2();
        rollDie3();
        rollDie4();
        rollDie5();
        rollNum--;
        rollCounter();
    } if (rollNum === 0) {
        $("#rollBtn").attr("class", "btn-disabled");

    };
};

// Clear Button's function, resets holds
function clearAll() {
    rollNum = 3;
    $("#die1").attr("src", "assets/images/Blankdie.jpg");
    $("#die2").attr("src", "assets/images/Blankdie.jpg");
    $("#die3").attr("src", "assets/images/Blankdie.jpg");
    $("#die4").attr("src", "assets/images/Blankdie.jpg");
    $("#die5").attr("src", "assets/images/Blankdie.jpg");
    unhold1();
    unhold2();
    unhold3();
    unhold4();
    unhold5();
    rollCounter();
    $("#rollBtn").attr("class", "btn")

};

// Hold Functions, changes class names of btns to show hold status. Might change innerText
function hold1() {
    die_1_hold_value = true;
    holdBtn1.removeEventListener("click", hold1);
    holdBtn1.addEventListener('click', unhold1);
    $("#holdBtn1").attr("class", "boxActivated");
};

function hold2() {
    die_2_hold_value = true;
    holdBtn2.removeEventListener("click", hold2);
    holdBtn2.addEventListener('click', unhold2);
    $("#holdBtn2").attr("class", "boxActivated");
};

function hold3() {
    die_3_hold_value = true;
    holdBtn3.removeEventListener("click", hold3);
    holdBtn3.addEventListener('click', unhold3);
    $("#holdBtn3").attr("class", "boxActivated");
};

function hold4() {
    die_4_hold_value = true;
    holdBtn4.removeEventListener("click", hold4);
    holdBtn4.addEventListener('click', unhold4);
    $("#holdBtn4").attr("class", "boxActivated");
};

function hold5() {
    die_5_hold_value = true;
    holdBtn5.removeEventListener("click", hold5);
    holdBtn5.addEventListener('click', unhold5);
    $("#holdBtn5").attr("class", "boxActivated");
};

// Unhold Functions, resets.

function unhold1() {
    die_1_hold_value = false;
    holdBtn1.removeEventListener('click', unhold1);
    holdBtn1.addEventListener("click", hold1);
    $("#holdBtn1").attr("class", "box");
};

function unhold2() {
    die_2_hold_value = false;
    holdBtn2.removeEventListener('click', unhold2);
    holdBtn2.addEventListener("click", hold2);
    $("#holdBtn2").attr("class", "box");
};

function unhold3() {
    die_3_hold_value = false;
    holdBtn3.removeEventListener('click', unhold3);
    holdBtn3.addEventListener("click", hold3);
    $("#holdBtn3").attr("class", "box");
};

function unhold4() {
    die_4_hold_value = false;
    holdBtn4.removeEventListener('click', unhold4);
    holdBtn4.addEventListener("click", hold4);
    $("#holdBtn4").attr("class", "box");
};

function unhold5() {
    die_5_hold_value = false;
    holdBtn5.removeEventListener('click', unhold5);
    holdBtn5.addEventListener("click", hold5);
    $("#holdBtn5").attr("class", "box");
};

// Roll Counter Function

function rollCounter() {
    if (rollNum === 3) {
        $("#rollCounter").text("3 Rolls Left!");
    } else if (rollNum === 2) {
        $("#rollCounter").text("2 Rolls Left!");
    } else if (rollNum === 1) {
        $("#rollCounter").text("Last Roll!")
    } else {
        $("#rollCounter").text("Turn is Over")
    }
}
//This is for the Form side

//set the value for input to parseInt() || 0; makes it number or 0;
//set the totals as not inputs, class = render, change innerHTML;
//parseInt() the innerHTML, can then add together with values from in function vars;
//bonus worked because vaule was set earlier to either 1 or 0;

//first player form
function uSubTotal() {
    var ones = parseInt(document.getElementById('ones').value) || 0;
    var twos = parseInt(document.getElementById('twos').value) || 0;
    var threes = parseInt(document.getElementById('threes').value) || 0;
    var fours = parseInt(document.getElementById('fours').value) || 0;
    var fives = parseInt(document.getElementById('fives').value) || 0;
    var sixes = parseInt(document.getElementById('sixes').value) || 0;
    var upperSub = ones + twos + threes + fours + fives + sixes;
    console.log("subt is " + upperSub)
    document.getElementById('subTotal').innerHTML = upperSub;
    if (upperSub >= 63) {
        document.getElementById('bonus').innerHTML = 35;
    } else {
        document.getElementById('bonus').innerHTML = 0;
    };
    var upperTotal = upperSub + parseInt(document.getElementById('bonus').innerHTML);
    console.log("upptot = " + upperTotal);
    document.getElementById('upperTotal').innerHTML = upperTotal;
}

function lTotal() {
    var threeOf = parseInt(document.getElementById('threeOf').value) || 0;
    var fourOf = parseInt(document.getElementById('fourOf').value) || 0;
    var fullHouse = parseInt(document.getElementById('fullHouse').value) || 0;
    var smStraight = parseInt(document.getElementById('smStraight').value) || 0;
    var lgStraight = parseInt(document.getElementById('lgStraight').value) || 0;
    var chance = parseInt(document.getElementById('chance').value) || 0;
    var yahtzee = parseInt(document.getElementById('yahtzee').value) || 0;
    var bonusYZ = parseInt(document.getElementById('bonusYZ').value) || 0;
    var lowTotal = threeOf + fourOf + fullHouse + smStraight + lgStraight + chance + yahtzee + bonusYZ;
    console.log('lowtotal = ' + lowTotal);
    document.getElementById('lowerTotal').innerHTML = lowTotal;
}

function Total() {
    uSubTotal();
    lTotal();
    var lowTotal = parseInt(document.getElementById('lowerTotal').innerHTML) || 0;
    var upperTotal = parseInt(document.getElementById('upperTotal').innerHTML) || 0;
    var total = lowTotal + upperTotal;
    console.log('message up = ' + upperTotal)
    console.log('total score is ' + total);
    document.getElementById('total1').innerText = "Player 1 Total Score is: " + total;
}
//second player form
function uSubTotal2() {
    var ones = parseInt(document.getElementById('ones2').value) || 0;
    var twos = parseInt(document.getElementById('twos2').value) || 0;
    var threes = parseInt(document.getElementById('threes2').value) || 0;
    var fours = parseInt(document.getElementById('fours2').value) || 0;
    var fives = parseInt(document.getElementById('fives2').value) || 0;
    var sixes = parseInt(document.getElementById('sixes2').value) || 0;
    var upperSub = ones + twos + threes + fours + fives + sixes;
    console.log("subt2 is " + upperSub)
    document.getElementById('subTotal2').innerHTML = upperSub;
    if (upperSub >= 63) {
        document.getElementById('bonus2').innerHTML = 35;
    } else {
        document.getElementById('bonus2').innerHTML = 0;
    };
    var upperTotal = upperSub + parseInt(document.getElementById('bonus2').innerHTML);
    console.log("upptot2 = " + upperTotal);
    document.getElementById('upperTotal2').innerHTML = upperTotal;
}

function lTotal2() {
    var threeOf = parseInt(document.getElementById('threeOf2').value) || 0;
    var fourOf = parseInt(document.getElementById('fourOf2').value) || 0;
    var fullHouse = parseInt(document.getElementById('fullHouse2').value) || 0;
    var smStraight = parseInt(document.getElementById('smStraight2').value) || 0;
    var lgStraight = parseInt(document.getElementById('lgStraight2').value) || 0;
    var chance = parseInt(document.getElementById('chance2').value) || 0;
    var yahtzee = parseInt(document.getElementById('yahtzee2').value) || 0;
    var bonusYZ = parseInt(document.getElementById('bonusYZ2').value) || 0;
    var lowTotal = threeOf + fourOf + fullHouse + smStraight + lgStraight + chance + yahtzee + bonusYZ;
    console.log('lowtotal2 = ' + lowTotal);
    document.getElementById('lowerTotal2').innerHTML = lowTotal;
}

function Total2() {
    uSubTotal2();
    lTotal2();
    var lowTotal = parseInt(document.getElementById('lowerTotal2').innerHTML) || 0;
    var upperTotal = parseInt(document.getElementById('upperTotal2').innerHTML) || 0;
    var total2 = lowTotal + upperTotal;
    console.log('message up = ' + upperTotal)
    console.log('total score is ' + total2);
    document.getElementById('total2').innerText = "Player 2 Total Score is: " + total2;
}

document.getElementById('mainTitle').addEventListener('click', newPage)

function newPage() {
    window.open('file:///C:/Users/Mvcam_000/Documents/Projects/Yahtzee/change.html', "_self");
}

// New Tab functions

$("#player2Tab").click(function(){
    $("#player1Form").addClass("gone");
    $("#totalBtn1").hide();
    $("#player1Tab").removeClass("tab-active").addClass("tab");
    setTimeout(function(){
        $("#player2Form").removeClass("gone");
        $("#totalBtn2").show();
        $("#player2Tab").addClass("tab-active").removeClass("tab");
        console.log("should have shown")
    }, 250)
});

$("#player1Tab").click(function(){
    $("#player2Form").addClass("gone");
    $("#totalBtn2").hide()
    $("#player2Tab").removeClass("tab-active").addClass("tab");
    setTimeout(function(){
        $("#player1Form").removeClass("gone");
        $("#totalBtn1").show();
        $("#player1Tab").addClass("tab-active").removeClass('tab');
    }, 250)
});

$(".rules-open").click(function(){
    $(".black-out").slideDown();
    setTimeout(function(){
        $(".pop-up").fadeIn();
    }, 500);
});

$(".close-pop").click(function() {
    $(".pop-up").fadeOut();
    setTimeout(function(){
        $(".black-out").slideUp();
    }, 500);
});