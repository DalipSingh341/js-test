import React from 'react'

const Firstone = () => {
function table(start,end){
        let number = 1
    for (let i = number; i <= 10; i++){
       let result = i * start
       console.log(result)
    }
}
    table(2, 25)
    
  return (
    <div>
        Table to 2 to 25 using with loop
    </div>
  );
}

export default Firstone
