function ValidateSpeedCalculatorForm(distance,time,speed)
{
    _cmnRemoveAllErrorMessage();
    var validDistance = true, validTime = true, validSpeed = true;
 
    if(distance == "" || distance <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Distance", "Enter correct value.");
        validDistance = false;
    }
    
    if(time == "" || time <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Time", "Enter correct value.");
        validTime = false;
    }   
    
    if(speed == "" || speed <= 0)
    {
        _cmnShowErrorMessageBottomOfTheInputFiled("Speed", "Enter correct value.");
        validSpeed = false;
    }  

}

function ResetSpeedCalculator()
{
    if(confirm("Are you sure want to reset?")){
        document.getElementById("Distance").value = "";
       document.getElementById("Time").value = "";
       document.getElementById("Speed").value = "";
       
       _cmnRemoveAllErrorMessage();

       _cmnHideElement("OutputResult");
       _cmnShowElement("OutputInfo", "flex");
   }
}


function CalculateSpeed()
{

    var speedInputFiled = document.getElementById("Speed");

    var showDistanceDiv = document.getElementById("ShowDistance");
    var showDistance_hDiv = document.getElementById("ShowDistance_h");
    var showDistance_12hDiv = document.getElementById("ShowDistance_12h");

    var speed = Number(speedInputFiled.value);

    calculatedDistance = speed * 60;
    calculatedDistance_h = (speed * 3600) / 1000;
    calculatedDistance_12h = (speed * 43200) / 1000000;
            
    showDistanceDiv.innerHTML = calculatedDistance + ` Ko`;
    showDistance_hDiv.innerHTML = calculatedDistance_h + ` Mo`;
    showDistance_12hDiv.innerHTML = calculatedDistance_12h + ` Go`;

        //show result div
        _cmnHideElement("OutputInfo");
        _cmnShowElement("OutputResult", "flex");
    
}

