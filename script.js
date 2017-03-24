//Patrick Halpin 2017
var shown="Citizen";

//called from citizen button
// creates or updates the html dom to change the from
function cit()
{
	if(shown!=="Citizen")
	{
		shown="Citizen";
		document.getElementById("title").innerHTML=
   		'<h3>Title</h3>'
		+'<select name="title" id="select">'
    	+'<option value="Mr">Mr</option>'
    	+'<option value="Mrs">Mrs</option>'
    	+'<option value="Ms">Ms</option>'
  		+'</select>'
  		+'<br>';

		document.getElementById("name").innerHTML=
		'<input type="text" class="form-control" placeholder="First Name" id="firstname" name="firstname" value="" aria-describedby="basic-addon2">'
      	+'<br>'
      	+'<input type="text" class="form-control" placeholder="Last Name" id="lastname" name="lastname" value="" aria-describedby="basic-addon2">'
      	+'<br>';
	}
}

//called from organisation button
function org()
{
	if(shown!=="Organisation")
	{
		shown="Organisation";
		document.getElementById("title").innerHTML="";
		document.getElementById("name").innerHTML=
   		'<h3>Title</h3>'
		+'<input type="text" class="form-control" placeholder="Organisation Name" id="orgname" name="orgname" value="" aria-describedby="basic-addon2">'
      	+'<br>';
	}
}

//called from anonymous button
function anon()
{
	if(shown!=="Anonymous")
	{
		shown="Anonymous";
		document.getElementById("name").innerHTML="";
		document.getElementById("title").innerHTML="";
	}
}

//gets values from the form and sets variables equal to them to be used in the create function
function submit()
{
	var currentdate = new Date(); 
	var time = 	currentdate.getHours() + ":"  + currentdate.getMinutes();

	var service;

	//checks which radio button is selected
	if(document.getElementById('1').checked)
	{
    	service = document.getElementById('1').value;
	}	

	else if(document.getElementById('2').checked)
	{
    	service = document.getElementById('2').value;
	}

	else if(document.getElementById('3').checked)
	{
    	service = document.getElementById('3').value;
	}

	else if(document.getElementById('4').checked)
	{
    	service = document.getElementById('4').value;
	}

	else if(document.getElementById('5').checked)
	{
    	service = document.getElementById('5').value;
	}

	//checks which type was selected and obtains relevant from data
	if(shown=="Anonymous")
	{
		var name="Anonymous";
	}
	if(shown=="Organisation")
	{
		var name=document.getElementById("orgname").value;
	}
	if(shown=="Citizen")
	{
		var select=document.getElementById("select").value;
		var fName=document.getElementById("firstname").value;
		var lName=document.getElementById("lastname").value;
		var name=select+" "+fName+" "+lName;
	}
	create(service,name,time,shown);

}

//uses the submit varibales to create new table rows
function create(service,name,time,shown)
{
	var q=document.getElementById("q");
	q.innerHTML+=
	"<tr>"
    +"<th>" + shown+" "+"</th>"
    +"<th>" + name+" "+"</th>"
    +"<th>" + service+" "+"</th>"
   	+"<th>"+time+"</th>"
  	+"</tr>";	
}










