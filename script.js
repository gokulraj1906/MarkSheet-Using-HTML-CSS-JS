function generateMarksheet(){
    let a=document.getElementById("sname").value ;
    document.getElementById("name").innerHTML=a;
    let regno=document.getElementById("sregno").value ;
    document.getElementById("regno").innerHTML=regno;
    let enrolno=document.getElementById("senrolno").value ;
    document.getElementById("enrno").innerHTML=enrolno;
    let course=document.getElementById("scourse").value ;
    document.getElementById("coursecodename").innerHTML=course;

    let e1=parseInt(document.getElementById("esub1").value) ;
    document.getElementById("theory1").innerHTML=e1;
    let e2=parseInt(document.getElementById("esub2").value) ;
    document.getElementById("theory2").innerHTML=e2;
    let e3=parseInt(document.getElementById("esub3").value) ;
    document.getElementById("theory3").innerHTML=e3;
    let e4=parseInt(document.getElementById("esub4").value) ;
    document.getElementById("theory4").innerHTML=e4;
    let e5=parseInt(document.getElementById("esub5").value) ;
    document.getElementById("theory5").innerHTML=e5;
    let e6=parseInt(document.getElementById("esub3").value );
    document.getElementById("theory3").innerHTML=e6;
    let e7=parseInt(document.getElementById("esub4").value) ;
    document.getElementById("theory4").innerHTML=e7;
    let e8=parseInt(document.getElementById("esub5").value) ;
    document.getElementById("theory5").innerHTML=e8;
   
    let p1=parseInt(document.getElementById("isub1"). value);
    document.getElementById("practical1").innerHTML=p1;
    let p2=parseInt(document.getElementById("isub2"). value);
    document.getElementById("practical2").innerHTML=p2;
    let p3=parseInt(document.getElementById("isub3"). value);
    document.getElementById("practical3").innerHTML=p3;
    let p4=parseInt(document.getElementById("isub4"). value);
    document.getElementById("practical4").innerHTML=p4;
    let p5=parseInt(document.getElementById("isub5"). value);
    document.getElementById("practical5").innerHTML=p5;
    let p6=parseInt(document.getElementById("isub6"). value);
    document.getElementById("practical6").innerHTML=p6;
    let p7=parseInt(document.getElementById("isub7"). value);
    document.getElementById("practical7").innerHTML=p7;
    let p8=parseInt(document.getElementById("isub8"). value);
    document.getElementById("practical8").innerHTML=p8;

    let t1=e1+p1;
    document.getElementById("total1").innerHTML=t1;
    let t2=e2+p2;
    document.getElementById("total2").innerHTML=t2;
    let t3=e3+p3;
    document.getElementById("total3").innerHTML=t3;
    let t4=e4+p4;
    document.getElementById("total4").innerHTML=t4;
    let t5=e5+p5;
    document.getElementById("total5").innerHTML=t5;
    let t6=p6;
    document.getElementById("total6").innerHTML=t6;
    let t7=p7;
    document.getElementById("total7").innerHTML=t7;
    let t8=p8;
    document.getElementById("total8").innerHTML=t8;


    let now=new Date;
    document.getElementById("livedate").innerHTML=now;

    let total=t1+t2+t3+t4+t5+t6+t7+t8;
    document.getElementById("GT").innerHTML=total;
    let totwords=test(total);
    document.getElementById("GTwords").innerHTML=totwords;

    /**
 * Function to convert a given number into words.
 * @param {number} n - The number to be converted into words.
 * @returns {string} - The word representation of the given number.
 */
function test(n) {
    if (n < 0)
        return false;
    
    // Arrays to hold words for single-digit, double-digit, and below-hundred numbers
    single_digit = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
    double_digit = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
    below_hundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
    
    if (n === 0) return 'Zero';
    
    // Recursive function to translate the number into words
    function translate(n) {
        let word = "";
        if (n < 10) {
            word = single_digit[n] + ' ';
        } else if (n < 20) {
            word = double_digit[n - 10] + ' ';
        } else if (n < 100) {
            let rem = translate(n % 10);
            word = below_hundred[(n - n % 10) / 10 - 2] + ' ' + rem;
        } else if (n < 1000) {
            word = single_digit[Math.trunc(n / 100)] + ' Hundred ' + translate(n % 100);
        } else if (n < 1000000) {
            word = translate(parseInt(n / 1000)).trim() + ' Thousand ' + translate(n % 1000);
        } else if (n < 1000000000) {
            word = translate(parseInt(n / 1000000)).trim() + ' Million ' + translate(n % 1000000);
        } else {
            word = translate(parseInt(n / 1000000000)).trim() + ' Billion ' + translate(n % 1000000000);
        }
        return word;
    }
    
}



   

}



