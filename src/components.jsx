import {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap} from './functions.js';

function Question1(){
    return<section>
1. Wriate an rgb colour function.
<h2>results</h2>
<p>colour_mix("red","green") == "{colour_mix('red','green')}"</p>
<p>colour_mix("green","blue") == "{colour_mix('green','blue')}"</p>
<p>colour_mix("blue","red") == "{colour_mix('blue','red')}"</p>
    </section>
}

function Question2(){
    return<section>
2. Write a function that takes three numbers and finds the product of the two greatness numbers.
<h2>results</h2>
<p>largest_product(1,2,3) == "{largest_product(1,2,3)}"</p>
<p>largest_product(50,12,100) == "{largest_product(50,12,100)}"</p>
<p>largest_product(69,10,32) == "{largest_product(69,10,32)}"</p>
    </section>
}

function Question3(){
    return<section>
3. Write a function that tells you the day ofg the week based on the number.
<h2>results</h2>
<p>day_of_the_week(1) == "{day_of_the_week(1)}"</p>
<p>day_of_the_week(3) == "{day_of_the_week(3)}"</p>
<p>day_of_the_week(7) == "{day_of_the_week(7)}"</p>
    </section>
}

function Question4(){
    return<section>
4. Write a function that increases employees salary based on status and years worked at the company.
<h2>results</h2>
<p>pay_raise("P",5,50000) == "{pay_raise('P',5,50000)}"</p>
<p>pay_raise("F",1,35000) == "{pay_raise('F',1,35000)}"</p>
<p>pay_raise("P",11,80000) == "{pay_raise('P',11,80000)}"</p>
    </section>
}

function Question5(){
    return<section>
5. Write a function that determines if a year is a leap year.
<h2>results</h2>
<p>is_leap(2025) == "{is_leap(2025)}"</p>
<p>is_leap(2028) == "{is_leap(2028)}"</p>
<p>is_leap(1700) == "{is_leap(1700)}"</p>
    </section>
}

export {Question1, Question2, Question3, Question4, Question5}