let decreaseBtn = document.getElementById("button__decrease");
let increaseBtn = document.getElementById("button__increase");
let counter = document.getElementById("counter");
let count = 0;
let decreaseBtn2 = document.getElementById("button__decrease2");
let increaseBtn2 = document.getElementById("button__increase2");
let counter2 = document.getElementById("counter2");
let count2 = 0;
let decreaseBtn3 = document.getElementById("button__decrease3");
let increaseBtn3 = document.getElementById("button__increase3");
let counter3 = document.getElementById("counter3");
let count3 = 0;
let decreaseBtn4 = document.getElementById("button__decrease4");
let increaseBtn4 = document.getElementById("button__increase4");
let counter4 = document.getElementById("counter4");
let count4 = 0;
let decreaseBtn5 = document.getElementById("button__decrease5");
let increaseBtn5 = document.getElementById("button__increase5");
let counter5 = document.getElementById("counter5");
let count5 = 0;






decreaseBtn.addEventListener("click", () => {
  count--;
  if(count<0)
	{
	alert("You cannot lower the number any more than 0.");
          $(this).focus();
		 count=0;
	}
  counter.innerHTML = count;
  counterStyle();
});

increaseBtn.addEventListener("click", () => {
  
  
  
  count++;
  
	if(count>10)
	{
	alert("You cannot increase the number above 10.");
          $(this).focus();
		 count--;
	}
counter.innerHTML = count;
  counterStyle();
  
  
});


decreaseBtn2.addEventListener("click", () => {
  count2--;
  if(count2<0)
	{
	alert("You cannot lower the number any more than 0.");
          $(this).focus();
		 count2=0;
	}
  counter2.innerHTML = count2;
  counterStyle1();
});

increaseBtn2.addEventListener("click", () => {
  
  
  
  count2++;
  
	if(count2>10)
	{
	alert("You cannot increase the number above 10.");
          $(this).focus();
		 count2--;
	}
counter2.innerHTML = count2;
  counterStyle1();
  
  
});

decreaseBtn3.addEventListener("click", () => {
  count3--;
  if(count3<0)
	{
	alert("You cannot lower the number any more than 0.");
          $(this).focus();
		 count3=0;
	}
  counter3.innerHTML = count3;
  counterStyle3();
});

increaseBtn3.addEventListener("click", () => {
  
  
  
  count3++;
  
	if(count3>10)
	{
	alert("You cannot increase the number above 10.");
          $(this).focus();
		 count3--;
	}
counter3.innerHTML = count3;
  counterStyle3();
  
  
});

decreaseBtn4.addEventListener("click", () => {
  count4--;
  if(count4<0)
	{
	alert("You cannot lower the number any more than 0.");
          $(this).focus();
		 count4=0;
	}
  counter4.innerHTML = count4;
  counterStyle4();
});

increaseBtn4.addEventListener("click", () => {
  
  
  
  count4++;
  
	if(count4>10)
	{
	alert("You cannot increase the number above 10.");
          $(this).focus();
		 count4--;
	}
counter4.innerHTML = count4;
  counterStyle4();
  
  
});

decreaseBtn5.addEventListener("click", () => {
  count5--;
  if(count5<0)
	{
	alert("You cannot lower the number any more than 0.");
          $(this).focus();
		 count5=0;
	}
  counter5.innerHTML = count5;
  counterStyle5();
});

increaseBtn5.addEventListener("click", () => {
  
  
  
  count5++;
  
	if(count5>10)
	{
	alert("You cannot increase the number above 10.");
          $(this).focus();
		 count5--;
	}
counter5.innerHTML = count5;
  counterStyle5();
  
  
  
});

function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}
  function counterStyle1() {
  if (count2 < 0) {
    counter2.classList.add("negative");
  } else if (count2 > 0) {
    counter2.classList.add("positive");
  } else {
    counter2.classList.remove("negative");
    counter2.classList.remove("positive");
  }
  }
 function counterStyle3() {
  if (count3 < 0) {
    counter3.classList.add("negative");
  } else if (count3 > 0) {
    counter3.classList.add("positive");
  } else {
    counter3.classList.remove("negative");
    counter3.classList.remove("positive");
  }
  } 
  function counterStyle4() {
  if (count4 < 0) {
    counter4.classList.add("negative");
  } else if (count4 > 0) {
    counter4.classList.add("positive");
  } else {
    counter4.classList.remove("negative");
    counter4.classList.remove("positive");
  }
  } 
  function counterStyle5() {
  if (count5 < 0) {
    counter5.classList.add("negative");
  } else if (count5 > 0) {
    counter5.classList.add("positive");
  } else {
    counter5.classList.remove("negative");
    counter5.classList.remove("positive");
  }
  }