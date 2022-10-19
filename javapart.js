function calcy()
{
    let maths = parseFloat(document.getElementById('maths').value);
    let web = parseFloat(document.getElementById('web').value);
    let design = parseFloat(document.getElementById('design').value);
    let phy = parseFloat(document.getElementById('phy').value);
    let sum = maths+web+design+phy
    // console.log(sum)

    let perc = (sum/400) * 100

    console.log('This is the average:',perc +'%')
    let store;

    if(perc>=90){
        store='Your grade is A'
        
    }
    else if(perc>=80){
        store='Your grade is B'
        
    }
    else if(perc>=70){
        store='Your grade is C'
        
    }
    else if(perc>=60){
        store='Your grade is D'
        
    }
    else if(perc>=50){
        store='Your grade is E'
        
    }
    else
    {
        
        store='Your grade is FAIL'

    }
   
    let newText= document.createElement('p');
    newText.innerText = `Out of 400 you have score ${sum} and percentage is ${perc}%.${store}.`

    let adding = document.getElementById('outputtext');

    adding.appendChild(newText);



}