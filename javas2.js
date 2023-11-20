/*const d =new Date(2020,9,7);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());*/
/*const num = Math.ceil(-9.12);

console.log(num);

const num = Math.floor(9.12);
console.log(num);

const num = Math.round(9.52);
console.log(num);

const num = Math.abs(-9.52);
console.log(num);

const nums=[4,5,3,2,9];
const num = Math.min(...nums);
console.log(num);
const nums=[4,5,3,2,9];
const num = Math.max(...nums);
console.log(num);
const str = '1.34';
const num = parseFloat(str);
console.log(num+1);

const str = '1675';
const num = parseInt(str);
console.log(num+1);
const num =Math.trunc(2.34);
console.log(num);
const num =2.34;
const isint = Number.isInteger(num);
console.log(isint);

function sq(num) {
    if (isNaN(num))
        return 'invalid input'
    return num * num
}
console.log(sq('s'));


const num =Math.pow(2,3);
console.log(num);

const num =Math.sqrt(16);
console.log(num);

const num =Math.sign('s');
console.log(num);
const res = -3/0
console.log(res);

const num =Math.random();
console.log(num);
const num =237_889_794;
console.log(num);

let age = 14
let age = 0xe;
let age = 0o16
let age = ob111

const num= 12;
console.log(num.toString(2));

function sum (num1,num2){

    return num1+num2;
}
function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,sum));
console.log(operastion(2,2,sub));
console.log(operastion(2,2,mul));


function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,function(num1,num2){
    return num1+num2
}));
const sum=(num1,num2)=> 
num1+num2;
console.log(operastion(3,4,sum));

function format (massage , formatcallback){
return formatcallback(massage);

}
function htmlformat (massage , formatcallback){
    return`<div>${massage}</div>`;
    }
    
function jsonformat (massage , formatcallback){
    return `{"massage":"${massage}}`;
        
   }
   console.log(format('welcom to javaScript',jsonformat));

const color =['red', 'green', 'blue'];

color.forEach(function(cur,index,array){
    console.log(cur);
})
const age =[12,11, 12,2];
const hasadult = age.some(function(element){
    return element  >=18;
})
console.log(hasadult);

const age =[111,112, 212,32];

const areadult =age.every(function(element){
    return element  >=18;

})  
console.log(areadult);

const color =['red', 'green', 'blue'];

const iscontainred = color.includes('red',-3)
console.log(iscontainred);

const color =['red', 'green', 'blue','green'];

const index = color.indexOf('black')
console.log(index);
const color =['red', 'green', 'blue','green'];

const index = color.lastIndexOf('black')
console.log(index);

const age =[6,11, 19,2];
const index = age.findIndex(function(element){
    return element  >=18;

})
console.log(index);

const num =[6,11, 19,2];

const find = num.find(function(element){
    return element %3 === 0;
})
console.log(find);
const num =[6,11, 19,2];
const el = num.filter(function(cur){
    return cur %2===0
})
console.log(el);
const color =['red', 'green', 'blue','green'];
const color2 =['black'];
const allcolor = color.concat(color2,'whit','pruple')
console.log(allcolor);

const color =['red', 'green', 'blue','green'];

const el = color.slice(1,2)
console.log(el);
const color =['red', 'green', 'blue','green'];
const el = color.splice(1,2)
console.log(el);

const color =['red', 'green', 'blue','green'];
const el = color.join()
console.log(el);
*/

/*const d =new Date(2020,9,7);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());*/
/*const num = Math.ceil(-9.12);

console.log(num);

const num = Math.floor(9.12);
console.log(num);

const num = Math.round(9.52);
console.log(num);

const num = Math.abs(-9.52);
console.log(num);

const nums=[4,5,3,2,9];
const num = Math.min(...nums);
console.log(num);
const nums=[4,5,3,2,9];
const num = Math.max(...nums);
console.log(num);
const str = '1.34';
const num = parseFloat(str);
console.log(num+1);

const str = '1675';
const num = parseInt(str);
console.log(num+1);
const num =Math.trunc(2.34);
console.log(num);
const num =2.34;
const isint = Number.isInteger(num);
console.log(isint);

function sq(num) {
    if (isNaN(num))
        return 'invalid input'
    return num * num
}
console.log(sq('s'));


const num =Math.pow(2,3);
console.log(num);

const num =Math.sqrt(16);
console.log(num);

const num =Math.sign('s');
console.log(num);
const res = -3/0
console.log(res);

const num =Math.random();
console.log(num);
const num =237_889_794;
console.log(num);

let age = 14
let age = 0xe;
let age = 0o16
let age = ob111

const num= 12;
console.log(num.toString(2));

function sum (num1,num2){

    return num1+num2;
}
function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,sum));
console.log(operastion(2,2,sub));
console.log(operastion(2,2,mul));


function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,function(num1,num2){
    return num1+num2
}));
const sum=(num1,num2)=> 
num1+num2;
console.log(operastion(3,4,sum));

function format (massage , formatcallback){
return formatcallback(massage);

}
function htmlformat (massage , formatcallback){
    return`<div>${massage}</div>`;
    }
    
function jsonformat (massage , formatcallback){
    return `{"massage":"${massage}}`;
        
   }
   console.log(format('welcom to javaScript',jsonformat));

const color =['red', 'green', 'blue'];

color.forEach(function(cur,index,array){
    console.log(cur);
})
const age =[12,11, 12,2];
const hasadult = age.some(function(element){
    return element  >=18;
})
console.log(hasadult);

const age =[111,112, 212,32];

const areadult =age.every(function(element){
    return element  >=18;

})  
console.log(areadult);

const color =['red', 'green', 'blue'];

const iscontainred = color.includes('red',-3)
console.log(iscontainred);

const color =['red', 'green', 'blue','green'];

const index = color.indexOf('black')
console.log(index);
const color =['red', 'green', 'blue','green'];

const index = color.lastIndexOf('black')
console.log(index);

const age =[6,11, 19,2];
const index = age.findIndex(function(element){
    return element  >=18;

})
console.log(index);

const num =[6,11, 19,2];

const find = num.find(function(element){
    return element %3 === 0;
})
console.log(find);
const num =[6,11, 19,2];
const el = num.filter(function(cur){
    return cur %2===0
})
console.log(el);
const color =['red', 'green', 'blue','green'];
const color2 =['black'];
const allcolor = color.concat(color2,'whit','pruple')
console.log(allcolor);

const color =['red', 'green', 'blue','green'];

const el = color.slice(1,2)
console.log(el);
const color =['red', 'green', 'blue','green'];
const el = color.splice(1,2)
console.log(el);

const color =['red', 'green', 'blue','green'];
const el = color.join()
console.log(el);
*/

/*const d =new Date(2020,9,7);
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getMonth());
console.log(d.getFullYear());*/
/*const num = Math.ceil(-9.12);

console.log(num);

const num = Math.floor(9.12);
console.log(num);

const num = Math.round(9.52);
console.log(num);

const num = Math.abs(-9.52);
console.log(num);

const nums=[4,5,3,2,9];
const num = Math.min(...nums);
console.log(num);
const nums=[4,5,3,2,9];
const num = Math.max(...nums);
console.log(num);
const str = '1.34';
const num = parseFloat(str);
console.log(num+1);

const str = '1675';
const num = parseInt(str);
console.log(num+1);
const num =Math.trunc(2.34);
console.log(num);
const num =2.34;
const isint = Number.isInteger(num);
console.log(isint);

function sq(num) {
    if (isNaN(num))
        return 'invalid input'
    return num * num
}
console.log(sq('s'));


const num =Math.pow(2,3);
console.log(num);

const num =Math.sqrt(16);
console.log(num);

const num =Math.sign('s');
console.log(num);
const res = -3/0
console.log(res);

const num =Math.random();
console.log(num);
const num =237_889_794;
console.log(num);

let age = 14
let age = 0xe;
let age = 0o16
let age = ob111

const num= 12;
console.log(num.toString(2));

function sum (num1,num2){

    return num1+num2;
}
function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,sum));
console.log(operastion(2,2,sub));
console.log(operastion(2,2,mul));


function sub (num1,num2){

    return num1 - num2
}
function operastion(num1,num2,opcallback){
return `[:[${opcallback(num1,num2) }]:]`

}
function mul (num1,num2){

    return num1 * num2;
}
console.log(operastion(2,2,function(num1,num2){
    return num1+num2
}));
const sum=(num1,num2)=> 
num1+num2;
console.log(operastion(3,4,sum));

function format (massage , formatcallback){
return formatcallback(massage);

}
function htmlformat (massage , formatcallback){
    return`<div>${massage}</div>`;
    }
    
function jsonformat (massage , formatcallback){
    return `{"massage":"${massage}}`;
        
   }
   console.log(format('welcom to javaScript',jsonformat));

const color =['red', 'green', 'blue'];

color.forEach(function(cur,index,array){
    console.log(cur);
})
const age =[12,11, 12,2];
const hasadult = age.some(function(element){
    return element  >=18;
})
console.log(hasadult);

const age =[111,112, 212,32];

const areadult =age.every(function(element){
    return element  >=18;

})  
console.log(areadult);

const color =['red', 'green', 'blue'];

const iscontainred = color.includes('red',-3)
console.log(iscontainred);

const color =['red', 'green', 'blue','green'];

const index = color.indexOf('black')
console.log(index);
const color =['red', 'green', 'blue','green'];

const index = color.lastIndexOf('black')
console.log(index);

const age =[6,11, 19,2];
const index = age.findIndex(function(element){
    return element  >=18;

})
console.log(index);

const num =[6,11, 19,2];

const find = num.find(function(element){
    return element %3 === 0;
})
console.log(find);
const num =[6,11, 19,2];
const el = num.filter(function(cur){
    return cur %2===0
})
console.log(el);
const color =['red', 'green', 'blue','green'];
const color2 =['black'];
const allcolor = color.concat(color2,'whit','pruple')
console.log(allcolor);

const color =['red', 'green', 'blue','green'];

const el = color.slice(1,2)
console.log(el);
const color =['red', 'green', 'blue','green'];
const el = color.splice(1,2)
console.log(el);

const color =['red', 'green', 'blue','green'];
const el = color.join()
console.log(el);

const color =['red', 'green', 'blue','green'];

const num =[1,5,3,4];
color.sort()
num.sort()
console.log(color);
console.log(num);


const color =['red', 'green', 'blue','green'];
color.reverse()
console.log(color);

const num =[1,5,3,4];
const sq =num.map(function(cur,index,array){
  return cur *  cur
})


console.log(sq);

const color ='red ; green ; blue ; green'

const arrcolor = color.split(' ',2)
console.log(arrcolor);

const num =[1,5,3,4];
const total = num.reduce(function(ac,cur,index,array){
return ac + cur

},100)
console.log(total);

const car = {
    name :'camry',
    color :'whit',
    curspeed :0,
    move : function(speed){
        this.curspeed=speed
        return`the${this.name} is moving at speed of ${this.curspeed}km per hour`
    },
    stop : function(){
        this.curspeed=0
return `the ${this.name} stopped`
    }

}
console.log(car.move(100));

class car{
    static numberofcar=0
    #cur
    constructor(name,color,cur){
this.name= name
this.color=color
this.#cur=cur
car.inc()
    }
move (speed){
    this.#cur=speed
    return`the${this.name} is moving at speed of ${this.#cur}km per hour`
}
stop (){
    this.#cur=0
    return `the ${this.name} stopped`
}
static inc (){
    car.numberofcar++
}
}
const z = new car('camry','W',0)
console.log(z.move(100));
console.log(z)
//const car2 = new car ('coloella','B',0) 

class Animal{
     
    constructor(name,color){
        this.name= name
        this.color=color
        this.speed=0
            }
        run (speed){
            return`the${this.name} runs with speed ${this.speed}`
        }
        makesound(){
console.log('sound..');
        }
}
class Cat extends Animal{ 
    
makesound(){
console.log('mew..');}
}
class Fox extends Animal{
    
    makesound(){
        console.log('bark..');
    }
    }
    const z = new Cat('s','w')
    z.makesound()
*/
