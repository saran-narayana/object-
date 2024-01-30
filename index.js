const person ={
    // key : "value",property
    firstname: 'anbu',
    lastname: 'selvan',
    age : 27,

    parent:{
        father: "appa",
        mother: "amma",
    },
    //method
    fullName : function (){
         return this.firstname + ' ' + this.lastname
        //console.log(this.firstname);
    },    
}

//document.getElementById("result").innerHTML = person.fullName()


//object margin
  const personMethod = {
    yearofBirth() {
        return new Date().getFullYear() - this.age


    },
  }

  Object.assign(person, personMethod)

  //object cloning

  const objCopied = Object.assign({}, person)

  person.firstname = "saran"
  person.age = 23



  console.log(person.objCopied)

console.log(person.yearofBirth())



