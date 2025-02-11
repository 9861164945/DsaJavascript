function ValidateBook()
{
	let bname=document.getElementById("bname").value.trim();
	let bpub=document.getElementById("bpub").value.trim();
	let bauth=document.getElementById("bauth").value.trim();
	let bdesc=document.getElementById("bdesc").value.trim();
	if(bname==="")
		
	{
		
		alert("Username is  required");
		return false;
	}
	
	if(bpub==="")
	{
		alert("Book details Is required");
        return  false;
	}
		
    if(bauth==="")
    {

        alert("Book Author Name Is Required");
        return false;

    }
     if(bdesc==="")
    {
        alert("Book Description is Required");
        return false;
    }
		
	
	
};

document.querySelector("form").
addEventListener("submit",
     function(event) 
{
    if (!ValidateBook()) 
    {
        event.preventDefault();  
    
    }
});