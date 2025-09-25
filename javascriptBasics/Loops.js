// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

for(let i=1;i<=10;i++){
    console.log(`The iteration of I ${i}`)
}
function isUpperCase(str) {
  return str === str.toUpperCase();
}

const Name = 'MeenatchiSundaram'


for(let i=0;i<Name.length; i++){
    if(isUpperCase(Name[i])){
        console.log(`its isUppercase ${Name[i]}`)
    }else{
        console.log(`its is Lower Case ${Name[i]}`)
    }
    
}

function printTables(){
for(let i=1; i<=10; i++){
    for(let j=1;j<=20;j++){
        console.log(`${i} x ${j} =${i*j}`)
    }
}
}

printTables()

function RightStarPattern(){

for(let i=1;i<=5;i++){
     console.log("* ".repeat(i))
}
for(let i=4;i>=1;i--){
     console.log("* ".repeat(i))
}

}

RightStarPattern()

function Xmarkpattern(size){
    for(let i=0;i<size;i++){
        let row = "";
        for(let j=0; j<size; j++){
            if(i===j || i + j === size-1){
                row += "* "
            }else{
                row += " "
            }
        }
        console.log(row)
    }
}

Xmarkpattern(10)

//While and Do-While

let i = 0

while(i < 10){
    console.log(i)
    i = i+1
}

do {
    console.log(i);
    i++
}while(i<10)