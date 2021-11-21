function Person(name,yob,designation) {
    this.name=name;
    this.yob=yob;
    this.designation=designation;
}
Person.prototype.getage=function () 
{
    console.log(`the current age is ${2021-this.yob}`)    
}
let asim=new Person('asim',1997,'tutor');
asim.getage()

function praise(age) {
console.log(`${this.name} is ${age} year old`)
    
}
let kasim={
    name:'kasim'
}
praise.call(kasim,22)