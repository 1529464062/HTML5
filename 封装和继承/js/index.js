//定义一个静态类
var StaticClass=function(){};
StaticClass.Name="StaticName";
StaticClass.sum=function(value1,value2){
	return value1+value2;
};
//console.log(StaticClass.Name);
//console.log(StaticClass.sum(1,1));
//类的继承
function PeopleClass(Type,Name){
	this.type=Type;
	this.Name=Name;
}
PeopleClass.prototype={
	setType:function(Type){
		this.type=Type;
	},
	getType:function(){
		return this.type;
	},
	getName:function(){
		return this.Name;
	}
}
function StudentClass(name,sex){
	PeopleClass.apply(this,arguments);//将父对象的构造函数绑定到子对象
	var prop;
	for(prop in PeopleClass.prototype){//继承父类的方法
		var proto=this.constructor.prototype;
		if(!proto[prop]){
			proto[prop]=PeopleClass.prototype[prop];
		}
		proto[prop]["super"]=PeopleClass.prototype;
	}
	this.Name=name;
	this.sex=sex;
}
StudentClass.prototype={
	getSex:function(){
		return this.sex;
	}
}
var people=new PeopleClass("人","刘振宇");
console.log(people.getType());
console.log(people.getName());
var student=new StudentClass("刘振宇_1","男");
console.log(student.getName());
console.log(student.getSex());
//console.log(student.Name);
