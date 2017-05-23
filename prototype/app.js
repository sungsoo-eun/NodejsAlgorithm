// 생성자 함수
function Person(name, age) {
    console.log('### Initialize Person Object!!');
    // Person 객체의 속성 정의
	this.name = name;
	this.age = age;

	console.log('name='+this.name);
	console.log('age='+this.age);

    // Person 객체의 method 정의(1)
    this.run = function(speed) {
        console.log('### Start run!!');
        console.log('speed='+speed+'km/h');
    }

}

// Person 객체의 method 정의(2)
Person.prototype.walk = function(speed) {
    console.log('### Start walk!!');
	console.log('speed='+speed+'km/h');
}

var person01 = new Person('abc', 20);
var person02 = new Person('def', 22);

person01.walk(50);
person01.run(500);
person02.walk(52);
person02.run(520);
