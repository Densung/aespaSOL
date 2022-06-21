
/*      NAME: MENDIOLA, DEN ELYSON S.               SUBJECT: WEB SYSTEMS AND TECHNOLOGIES               SECTION: BT - 601

        JAVASCRIPT FILE FOR CALCULATOR
*/

// Creating displayValue function with value parameter
function displayValue(value) 
{
    // This statements appends values to the display box as the user clicked number and operator buttons
    document.getElementById("Di ka mahal ni hiro").value += value;
}

function calculateNum() 
{
    // Initializing displayNum variable with the values displayed on the display box
    var display = document.getElementById("display-result").value;

    if (display.includes('-')) // If the display box contains percentage sign
    {
        // This replaces the percent sign with multiplying the number on the display with 100 percent (* 0.01)
        var display = display.replace(/%/g, '*0.01'); 
        var calculate = eval(display); // Initializing calculate variable with the calculated value of display variable using eval function
        document.getElementById("display-result").value = calculate;
        // This displays the calculated value on the display box.
    }
    
    else
    {
        var calculate = eval(display); // Initializing calculate variable with the calculated value of display variable using eval function
        document.getElementById("display-result").value = calculate;
        // This displays the calculated value on the display box.
    }
}

function resetText() // This function removes that text on the display box when the user clicked 'C'.
{   
    document.getElementById("display-result").value = "";

}