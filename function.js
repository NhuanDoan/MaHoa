// function function1()
// {
//     //Loại bỏ sự kiện tự động reset input trong html
//     document.querySelector('form').addEventListener('submit',function(e){e.preventDefault();})

//     var  a ;
//     a = document.getElementById("in").value
//     document.getElementById("out").value = DemNut(a);
// }

// function DemNut(a)
// {
//     var b = a%10
//     a = Math.floor(a/10)
//     while(a > 0)
//     {
//         var c = a%10
//         b = b + c
//         a = Math.floor(a/10)
//         if(b >= 10)
//         {
//             b = b%10
//         }
//     }
//     return b
// }

function main(){
    document.querySelector('form').addEventListener('submit',function(e){e.preventDefault();})
    var a,b,c;
    a = document.getElementById("in").value
    b = document.querySelector('input[name="key"]:checked').value
    c = document.getElementById("select").value
    if(Err(a)==0)
        alert('Các ký tự từ A-Z cơ mà!!!!!')
    else if(c == "MaHoa")
        document.getElementById("out").value = MaHoa2(a,b)
    else
        document.getElementById("out").value = GiaiMa(a,b)
}

function Err(a)
{
    var arr = a.split('')
    for(let i=0;i<a.length;i++)
    {
        if((arr[i].charCodeAt()<65 && arr[i].charCodeAt()!=32) || arr[i].charCodeAt()>90)
           return 0;
    }
}


// function MaHoa(a,b){
//     //Quy ước key1 = 6, key2= 18, key3=1
//     var arr = a.split('')
//     var c = ''
//     if(b == "key1")
//     {
//         var key = 6
//         for(let i=0;i<a.length;i++)
//         {
//             if(arr[i].charCodeAt() == 32)
//                 c+= String.fromCharCode(64+key)
//             else if(arr[i].charCodeAt()+key>90)
//                 c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
//             else
//                 c+= String.fromCharCode(arr[i].charCodeAt()+key)
//         }
//         return c
//     }
//     else if(b == "key2")
//     {
//         var key = 18
//         for(let i=0;i<a.length;i++)
//         {
//             if(arr[i].charCodeAt() == 32)
//                 c+= String.fromCharCode(64+key)
//             else if(arr[i].charCodeAt()+key>90)
//                 c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
//             else
//                 c+= String.fromCharCode(arr[i].charCodeAt()+key)
//         }
//         return c
//     }
//     else
//     {
//         var key = 1
//         for(let i=0;i<a.length;i++)
//         {
//             if(arr[i].charCodeAt() == 32)
//                 c+= String.fromCharCode(64+key)
//             else if(arr[i].charCodeAt()+key>90)
//                 c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
//             else
//                 c+= String.fromCharCode(arr[i].charCodeAt()+key)
//         }
//         return c
//     }
// }



function MaHoa2(a,b){
    //Quy ước key1 = 6, key2= 18, key3=1
    var arr = a.split('')
    var c = ''
    if(b == "key1")
    {
        var key = 6
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(64+key)
            else if(arr[i].charCodeAt()+key>90)
            {
                if((arr[i].charCodeAt()-(25-key+2))==64)
                    c+= String.fromCharCode(32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
            }
            else
                c+= String.fromCharCode(arr[i].charCodeAt()+key)
        }
        return c
    }
    else if(b == "key2")
    {
        var key = 18
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(64+key)
            else if(arr[i].charCodeAt()+key>90)
            {
                if((arr[i].charCodeAt()-(25-key+2))==64)
                    c+= String.fromCharCode(32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
            }
            else
                c+= String.fromCharCode(arr[i].charCodeAt()+key)
        }
        return c
    }
    else
    {
        var key = 1
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(64+key)
            else if(arr[i].charCodeAt()+key>90)
            {
                if((arr[i].charCodeAt()-(25-key+2))==64)
                    c+= String.fromCharCode(32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-(25-key+1))
            }
            else
                c+= String.fromCharCode(arr[i].charCodeAt()+key)
        }
        return c
    }
}
//-----------------------------------------

function GiaiMa(a,b){
    //Quy ước key1 = 6, key2= 18, key3=1
    var arr = a.split('')
    var c = ''
    if(b == "key1")
    {
        var key = 6
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(90-key+1)
            else if((arr[i].charCodeAt()-key)<64)   
                c+= String.fromCharCode(arr[i].charCodeAt()+(25-key+1))
            else
            {
                if(arr[i].charCodeAt()-key == 64)
                    c+= String.fromCharCode (32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-key)
            }
        }
        return c
    }
    else if(b == "key2")
    {
        var key = 18
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(90-key+1)
            else if((arr[i].charCodeAt()-key)<64)   
                c+= String.fromCharCode(arr[i].charCodeAt()+(25-key+1))
            else
            {
                if(arr[i].charCodeAt()-key == 64)
                    c+= String.fromCharCode (32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-key)
            }
        }
        return c
    }
    else
    {
        for(let i=0;i<a.length;i++)
        {
            if(arr[i].charCodeAt() == 32)
                c+= String.fromCharCode(90-key+1)
            else if((arr[i].charCodeAt()-key)<64)   
                c+= String.fromCharCode(arr[i].charCodeAt()+(25-key+1))
            else
            {
                if(arr[i].charCodeAt()-key == 64)
                    c+= String.fromCharCode (32)
                else
                    c+= String.fromCharCode(arr[i].charCodeAt()-key)
            }
        }
        return c
    }
}