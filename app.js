// ------ Even Number ------

for(var i = 2; i<= 50; i += 2)

console.log(i)

// -------- Odd Number --------


for(var i = 1; i<= 50; i++){
    console.log(i);
}



// ---------- Even & Odd Number --------


for(var i = 1; i <= 50; i++){
    document.write(i,i % 2 === 0 ? " Even " : " Odd ");
    document.write("</br>")  
}



// -------- a pattern of number ------


var length = 10; 

for (var i = 1; i <= length; i++) {
  var sum = "";
  for (var j = 1; j <= i; j++) {
    sum += j;
  }
  document.write(sum);
  document.write("<br>")
}


// --------- Odd Number --------

for(var i = 1; i<= 50; i += 2)

console.log(i)


// -------- object of arrys --------


var students =[
    {
        firstname: "Yousuf",
        secondname: "Ansari",
        age: 20,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "idrees",
        secondname: "Ansari",
        age: 25,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "Ibrahim",
        secondname: "Ansari",
        age: 23,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "Ismail",
        secondname: "Ansari",
        age: 22,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "Sadiq",
        secondname: "Ansari",
        age: 19,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "Hanzala",
        secondname: "Ansari",
        age: 12,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "kawish",
        secondname: "sheikh",
        age: 22,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "zubair",
        secondname: "sheikh",
        age: 23,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "ameer",
        secondname: "hamza",
        age: 120,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "muzammil",
        secondname: "rashid",
        age: 28,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
    {
        firstname: "abid",
        secondname: "mumtaz",
        age: 17,
        class: "batch4",
        teacher:"Saqib rahim & Ahshan Mushtaq",
    },
]


    for(var i = 0; i < students.length; i++ ){
        document.write("</br>First Name :", students[i].firstname)
        document.write("</br>Second Name :", students[i].secondname)
        document.write("</br>Age :", students[i].age)
        document.write("</br>Class :", students[i].class)
        document.write("</br>Teacher :", students[i].teacher)
        document.write("<hr>")
    }






    




  

