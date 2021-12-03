let weight = prompt("яка масса?");
if (!parseFloat(weight)) {
   alert("Введене не число")   
}
let height = prompt("Зріст:");
if (!parseFloat(height)) {
   alert("Введене не число")
}
let index = weight / (height * height);
if (index < 18.5) {
    alert("underweight")   
}else
 if(index > 18.5 && index < 24.9) {
    alert("normal weight")
}else
if(index > 24.9){
    alert("overweight")
 }