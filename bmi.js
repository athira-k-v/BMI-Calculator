function compute(){

    height=Number(height.value/100)
    weight=Number(weight.value)
    

    bmi=Math.round(Number(weight/(height*height)))
    if(bmi<18.5){
    ps.innerHTML=bmi+ 'Underweight'
}
else if(bmi<=25){
    ps.innerHTML=bmi+" Normal Weight"

}
else if(bmi<=29.9){
    ps.innerHTML=bmi+ " Over Weight"

}
else{
    ps.innerHTML=bmi+ " Obesity"

}

}