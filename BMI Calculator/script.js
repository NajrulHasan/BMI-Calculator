const form = document.querySelector('form')

form.addEventListener('submit', function(e){

    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);

    const results = document.querySelector('#results');

    const error_height = document.querySelector('#error-height');
    const error_weight = document.querySelector('#error-weight');

    const final_result = document.querySelector('#final-results');
    if(height === '' || height < 0 || isNaN(height)){
        error_height.innerHTML = `please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNaN(weight)){
        error_weight.innerHTML = `please give a valid weight ${weight}`;
    }
    else{

        const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //   const addon = document.createTextNode(`${bmi}`)
    //   results.appendChild(addon);
      
      //innerHTML will replace value which is present already inside div
        results.innerHTML = `Result : ${bmi}`;

        if(bmi <= 18.6){

            // const addon = document.createTextNode(`Under weight : ${bmi}`)
            // final_result.appendChild(addon);

            final_result.innerHTML = `Final Result = Under weight : ${bmi}`;
        }
        else if(bmi > 18.6 && bmi < 24.9){

            // const addon = document.createTextNode(`Normal weight : ${bmi}`)
            // final_result.appendChild(addon);

            final_result.innerHTML = `Final Result = Normal weight : ${bmi}`;
        }else{

            // const addon = document.createTextNode(`Over weight : ${bmi}`)
            // final_result.appendChild(addon);

            final_result.innerHTML = `Final Result = Over weight : ${bmi}`;
    
        }
        form.reset();
    }
    
  
});