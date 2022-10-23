function focusevent(){
    document.getElementById("num").style.background="aqua";
}


function fact(){
    var i, num, f;
        f = 1;
        num = document.getElementById("number").value;
        for(i = 1; i <= num; i++)
        {
            f = f * i;
        }
        document.getElementById("p1").innerHTML = "The factorial of the number is: " + f ;
}

function prime() {

    var n,i, flag = true;

    n= document.getElementById("num").value;

    n = parseInt👎
    for(i = 2; i <= n - 1; i++)
        if (n % i == 0) {
            flag = false;
            break;
        }


    if (flag == true)
        document.getElementById("p1").innerHTML= n + " is prime";
    else
    document.getElementById("p1").innerHTML= n + " is not prime";
    }

function fib(){
    var n1 = 0,  n2 = 1, next_num, i;
    var num= document.getElementById("num").value;

    num = parseInt👎

    document.write( "Fibonacci Series: ");
    for ( i = 1; i <= num; i++)
    {
        document.getElementById("p1").innerHTML= (" <br> " +  n1); // print the n1
        next_num = n1 + n2; // sum of n1 and n2 into the next_num

        n1 = n2; // assign the n2 value into n2
        n2 = next_num; // assign the next_num into n2
    }
}
