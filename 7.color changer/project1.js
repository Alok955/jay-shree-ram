const buttons= document.querySelectorAll('.button')
//  console.log( buttons); 
  const body = document.querySelector('body');
//   console.log(body);

  buttons.forEach( function (button){
    // console.log(button);
    button.addEventListener("click", function (e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === "yellow"){
            body.style.backgroundColor="yellow";
        }
        else if( e.target.id === 'red' ){
            body.style.backgroundColor='red';
        }
        else if( e.target.id === 'blue' ){
            body.style.backgroundColor='blue';
        }
        else{
            body.style.backgroundColor='gray';
        }

    })
  })