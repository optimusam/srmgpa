grade_points = {
    "O":10,
    "A+":9,
    "A":8,
    "B+":7,
    "B":6,
    "C":5,
    "P":4,
    "F":0,
    "Ab":0,
    "I":0
};
var credit_list = document.querySelectorAll(".cred");
var grade_list = document.querySelectorAll(".opt");
var result = document.querySelector("#result");
var gpaDisp = document.querySelector("#gpa");
var submit = document.querySelector("#go");
var reset = document.querySelector("#reset");
submit.addEventListener("click",calculate);
reset.addEventListener("click", function(){
    submit.classList.remove("hidden");
    reset.classList.add("hidden");
    result.classList.add("hidden");
});
function calculate()
{
    var points = 0;
    var sum_credits = 0;
    for(var i=0; i<11; i++)
        {
            if(credit_list[i].value==="")
                {
                    var credit = 0;
                }
            else
            {
                var credit = Number(credit_list[i].value);
            }
            sum_credits+=credit;
            var gradept = grade_points[grade_list[i].value];
            points+=credit*gradept;
        }
    var gpa = (points/sum_credits).toFixed(2);
    result.classList.remove("hidden");
    gpaDisp.textContent = gpa;
    reset.classList.remove("hidden");
    submit.classList.add("hidden");
}
