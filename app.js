var sdt1= {
    Name: "Ali",
    class: 12,
    Rollno:1001,
    section:"A",
}
var sdt2= {
    Name: "Ahmed",
    class: 12,
    Rollno:1002,
    section:"A",
}
var sdt3= {
    Name: "Asif",
    class: 12,
    Rollno:1003,
    section:"A",
}
var sdt4= {
    Name: "Haris",
    class: 12,
    Rollno:1004,
    section:"A",
}
var sdt5= {
    Name: "Talha",
    class: 12,
    Rollno:1005,
    section:"A",
}
var sdt6= {
    Name: "Hasan",
    class: 12,
    Rollno:1006,
    section:"A",
}
var sdt7= {
    Name: "Adil",
    class: 12,
    Rollno:1007,
    section:"A",
}
var sdt8= {
    Name: "Wasim",
    class: 12,
    Rollno:1008,
    section:"A",
}

var students=[sdt1,sdt2,sdt3,sdt4,sdt5,sdt6,sdt7,sdt8]

var parent= document.getElementById("parent")
parent.innerHTML= `<table>
    <tr>
        <th>S.No</th>
        <th>Name</th>
        <th>Class</th>
        <th>Section</th>
        <th>Roll-No</th>
    </tr>
    <tr>
        <td>1</td>
        <td>${sdt1.Name}</td>
        <td>${sdt1.class}</td>
        <td>${sdt1.section}</td>
        <td>${sdt1.Rollno}</td>
    </tr>
    <tr>
        <td>2</td>
        <td>${sdt2.Name}</td>
        <td>${sdt2.class}</td>
        <td>${sdt2.section}</td>
        <td>${sdt2.Rollno}</td>
    </tr>
    <tr>
        <td>3</td>
        <td>${sdt3.Name}</td>
        <td>${sdt3.class}</td>
        <td>${sdt3.section}</td>
        <td>${sdt3.Rollno}</td>
    </tr>
    <tr>
        <td>4</td>
        <td>${sdt4.Name}</td>
        <td>${sdt4.class}</td>
        <td>${sdt4.section}</td>
        <td>${sdt4.Rollno}</td>
    </tr>
    <tr>
        <td>5</td>
        <td>${sdt5.Name}</td>
        <td>${sdt5.class}</td>
        <td>${sdt5.section}</td>
        <td>${sdt5.Rollno}</td>
    </tr>
    <tr>
        <td>6</td>
        <td>${sdt6.Name}</td>
        <td>${sdt6.class}</td>
        <td>${sdt6.section}</td>
        <td>${sdt6.Rollno}</td>
    </tr>
    <tr>
        <td>7</td>
        <td>${sdt7.Name}</td>
        <td>${sdt7.class}</td>
        <td>${sdt7.section}</td>
        <td>${sdt7.Rollno}</td>
    </tr>
    <tr>
        <td>8</td>
        <td>${sdt8.Name}</td>
        <td>${sdt8.class}</td>
        <td>${sdt8.section}</td>
        <td>${sdt8.Rollno}</td>
    </tr>
</table>`

var value = document.getElementById("input") 


function search(){
    if(value.value == sdt1.Rollno){
        alert(" Name:" + sdt1.Name + "\n Class:" + sdt1.class  + "\n Section:" + sdt1.section   +"\n Roll-no:" +sdt1.Rollno  );
    }
    else if(value.value == sdt2.Rollno){
        alert(" Name:" + sdt2.Name + "\n Class:" + sdt2.class  + "\n Section:" + sdt2.section   +"\n Roll-no:" +sdt2.Rollno  );
    }
    else if(value.value == sdt3.Rollno){
        alert(" Name:" + sdt3.Name + "\n Class:" + sdt3.class  + "\n Section:" + sdt3.section   +"\n Roll-no:" +sdt3.Rollno  );
    }
    else if(value.value == sdt4.Rollno){
        alert(" Name:" + sdt4.Name + "\n Class:" + sdt4.class  + "\n Section:" + sdt4.section   +"\n Roll-no:" +sdt4.Rollno  );
    }
    else if(value.value == sdt5.Rollno){
        alert(" Name:" + sdt5.Name + "\n Class:" + sdt5.class  + "\n Section:" + sdt5.section   +"\n Roll-no:" +sdt5.Rollno  );
    }
    else if(value.value == sdt6.Rollno){
        alert(" Name:" + sdt6.Name + "\n Class:" + sdt6.class  + "\n Section:" + sdt6.section   +"\n Roll-no:" +sdt6.Rollno  );
    }
    else if(value.value == sdt7.Rollno){
        alert(" Name:" + sdt7.Name + "\n Class:" + sdt7.class  + "\n Section:" + sdt7.section   +"\n Roll-no:" +sdt7.Rollno  );
    }
    else if(value.value == sdt8.Rollno){
        alert(" Name:" + sdt8.Name + "\n Class:" + sdt8.class  + "\n Section:" + sdt8.section   +"\n Roll-no:" +sdt8.Rollno  );
    }
    else {
        alert("Invalid Roll-Number")
    }
    value.value=""
}
