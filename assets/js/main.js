grade_points = {
  "O":10,
  "A+":9,
  "A":8,
  "B+":7,
  "B":6,
  "C":5.5,
  "W":0,
  "F":0,
  "Ab":0,
  "I":0,
  "*":0
};

var count = 6;

$("#go").on("click", function (event) {
  calculate(event);
});

$("#reset").on("click", function () {
  $("#result").addClass("hidden");
  $("#more").removeClass("hidden");
  $("#go").removeClass("hidden");
  $("#reset").addClass("hidden");
});

function calculate(event) {
  var grade_list = $(".opt");
  var credit_list = $(".cred");
  var points = 0;
  var sum_credits = 0;
for(var i=0; i<credit_list.length; i++)
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
    points += credit * gradept;
  }
  var gpa = (points/sum_credits);
  var percent = (gpa*10).toFixed(0);
  $("#result").removeClass("hidden");
  $("#more").removeClass("hidden"); // Keep the "Add course" button visible
  $("#gpa").text(gpa.toFixed(2));
  $(".progress-bar").css({ width: percent + "%" });
  $("#reset").removeClass("hidden");
  $("#go").removeClass("hidden"); // Keep the "Submit" button visible
  window.scrollTo(0, 0);

  event.preventDefault(); // Prevent the form from submitting
}

$("#more").on("click", function(event){
  count+=1;
  $("form table").append("<tr><td>" + count + ".</td><td><input type='number' class='cred form-control'></td><td><select class='opt form-control'><option>O</option><option>A+</option><option>A</option><option>B+</option><option>B</option><option>C</option><option>W</option><option>F</option><option>Ab</option><option>I</option><option>*</option></select></td></tr>");
});
