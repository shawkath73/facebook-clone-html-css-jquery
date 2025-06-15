$(document).ready(function(){
    let today=new Date().getDate();
    for(let d=1;d<=31;d++)
    {
        $("#day").append($('<option>',{
            value:d,
            text:d,
            selected:(d==today)
        }));
    }

    let monthnames=["January","February","March","April","May","June","July","August","September","October","November","December"]
    let tomonth=new Date().getMonth();
    for(let i=0;i<monthnames.length;i++)
    {
         $("#month").append($('<option>',{
            value:i+1,
            text:monthnames[i],
            selected:(i==tomonth)
        }));
    }

    let gyear=new Date().getFullYear();
    for(let y=gyear;y>=1950;y--)
    {
        $("#year").append($('<option>',{
            value:y,
            text:y,
            selected:(y==gyear)
        }));
    }

    $("#myform input").on('blur',function(){
        let inp=$(this)
        if(inp.val().trim())
        {
            inp.css('border-color','')
        }
        else{
            inp.css('border-color','red')
        }
    })

})

