function moreaboutus(){
    document.getElementById('readmoreabtus').style.display="none";
    document.getElementById('readlessabtus').style.display="block"; 
}
function lessaboutus(){
    document.getElementById('readmoreabtus').style.display="block";
    document.getElementById('readlessabtus').style.display="none"; 
}
 document.addEventListener("DOMContentLoaded", function() {
        var modal = document.getElementById('exampleModal');
        var modalInstance = new bootstrap.Modal(modal);
        modalInstance.show();
    });
