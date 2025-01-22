const form = document.querySelector('form');

form.addEventListener('submit' , function(e){
    e.preventDefault();

    const height = parseFloat(document.querySelector('#Height').value);
    const weight = parseFloat(document.querySelector('#Weight').value);
    const results = document.querySelector('#results');
    const status = document.querySelector('#status');
    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = "Please enter a valid height";
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = "Please enter a valid weight";
    }
    else{
        const bmi =(weight / ((height * height) / 10000)).toFixed(2);
        results.innerHTML = `<span>${bmi}</span>`;
        if(bmi<18.6){
            status.innerHTML = `Gain ${(18.6-bmi).toFixed(2)} KGs to get into Normal range`;
        }
        else if(bmi>18.6 && bmi<24.9){
            status.innerHTML = `Congratulations , you are Normal!`;
        }
        else{
            status.innerHTML = `Please , lose your ${(bmi-24.9).toFixed(2)} KGs to fall in Normal range!`;
        }
    }
});