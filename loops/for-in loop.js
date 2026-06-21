let student = {
    name : "Vamsi",
    age : 19,
    cgpa : 7.62,
    ispass : true,
};

for (let key in student){
    console.log("key=",key, "value=", student[key]);
}