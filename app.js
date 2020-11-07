function toggleSideBar()
{
    document.getElementById("side-nav").classList.toggle('show');
}


function toggleAnimate()
{
    
    document.getElementById("side-nav").classList.toggle('show');

        var items = document.getElementsByClassName('box-tick');
        for(var i=0; i<items.length; i++){
            if(items[i].type=='checkbox')
                items[i].checked=true;
    }

}

function enableButton(val)
{
    var btn = document.getElementById('submit-btn');

    if (val.checked == true)
    {
        btn.disabled = false;
    }
    else
    {
        btn.disabled = true;
    }


}

