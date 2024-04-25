const age = 40;
const price=500;
if(age <= 12){
    console.log('free');
}
else if(age >=60){
    // discount 50 % 
    const discount = price*50/100
    const payment = price - discount
    console.log(payment);
}
else if(age>=50){
    // 25% discount 
    const discount = price*25/100
    const payment = price - discount
    console.log(payment);
}
else if(age>=40){
    // 10% discount 
    const discount = price*10/100
    const payment = price - discount
    console.log(payment);
}
else{
    console.log(price);
}