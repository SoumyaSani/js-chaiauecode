# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ebhxey?file=2-BMICalculator%2Fchaiaurcode.js,2-BMICalculator%2Findex.html)

# Solution code
## project 1
```javascript
const buttons =document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach( (button) => {
  console.log(button);
  button.addEventListener('click',(e)=>{
  console.log(e)
  console.log(e.target);
  if(e.target.id === 'grey')
  {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'blue')
  {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'yellow')
  {
    body.style.backgroundColor = e.target.id;
  }
  if(e.target.id === 'white')
  {
    body.style.backgroundColor = e.target.id;
  }

 })
})

```
## project 2
```javascript
const form = document.querySelector('form');

form.addEventListener('submit',(e) => {
e.preventDefault();
const height = parseInt(document.querySelector('#height').value);
const weight = parseInt(document.querySelector('#weight').value);
const results = document.querySelector('#results');
if(height === '' || height < 0 || isNaN(height))
{
  results.innerHTML="please give a valid height";
}
else if(weight === '' || weight < 0 || isNaN(weight))
{
  results.innerHTML="please give a valid weight";
}
else{
  const bmi = (weight/((height*height)/10000)).toFixed(2)
  results.innerHTML =`<span>${bmi}</span>`
}
})
```
## project 3 solution

```javascript
const clock = document.getElementById('clock');


setInterval(function(){
  let date = new Date()
 // console.log(date.toLocaleTimeString())
 clock.innerHTML = date.toLocaleTimeString()
},1000)
```

