var name_student=[];
function submit(){
    var display_student=[];
    for(var a=1; a<=4; a++)
    
    {
        var name_of_student=document.getElementById("name_of_the_student_"+a).value;
        console.log(name_of_student);
        name_student.push(name_of_student);

    }
    var length=name_student.length;
    console.log(length);
    for(var j=0; j<length;j++){
        display_student.push("<h4>Name- "+name_student[j]+"</h4>");
        console.log(display_student);
    }
document.getElementById("display_name_with_commas").innerHTML=display_student;
var remove=display_student.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";

}
function sorting(){
    name_student.sort();
    console.log(name_student);
var empty=[];
var length=name_student.length;
    console.log(length);
    for(var j=0; j<length;j++){
        empty.push("<h4>Name- "+name_student[j]+"</h4>");
        console.log(empty);
    }
    var remove=empty.join(" ");
console.log(remove);
document.getElementById("display_name_without_commas").innerHTML=remove;

}