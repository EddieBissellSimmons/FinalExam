//exam question 1 - colour mixer
function colour_mix(rgb_colour1, rgb_colour2){
    let rgb_colour;
    if (rgb_colour1 == "red" && rgb_colour2 == "green" || rgb_colour1 == "green" && rgb_colour2 == "red"){
        rgb_colour = "yellow";
    } else if (rgb_colour1 == "green" && rgb_colour2 == "blue" || rgb_colour1 == "blue" && rgb_colour2 == "green"){
        rgb_colour = "aqua";
    } else if (rgb_colour1 == "blue" && rgb_colour2 == "red" || rgb_colour1 == "red" && rgb_colour2 == "blue"){
        rgb_colour = "fuchsia";
    } else {
        rgb_colour = "error";
    }
    return rgb_colour;
}

//exam question 2 - largest product
function largest_product(val1,val2,val3){
    let product;
    if (val2 > val1 && val3 > val1){
        product = val2 * val3;
    } else if (val1 > val2 && val3 > val2){
        product = val1 * val3;
    } else if (val2 > val3 && val3 > val3){
        product = val1 * val2;
    }
    return product;
}

//exam question 3 - day of the week
function day_of_the_week(day_num){
    let day;
    if (day_num == 1){
        day = "Sunday";
    } else if (day_num == 2){
        day = "Monday";
    } else if (day_num == 3){
        day = "Tuesday";
    } else if (day_num == 4){
        day = "Wednesday";
    } else if (day_num == 5){
        day = "Thursday";
    } else if (day_num == 6){
        day = "Friday";
    } else if (day_num == 7){
        day = "Saturday";
    } else {
        day = "Error";
    }
    return day;
}

//exam question 4 - pay raise
function pay_raise(status, years, salary){
    let new_salary;
    if (status = "F" && years >= 10){
        new_salary = salary * 1.05;
    } else if (status = "F" && years < 4){
        new_salary = salary * 1.015;
    } else if (status = "P" && years > 10){
        new_salary = salary * 1.03;
    } else if (status = "P" && years < 4){
        new_salary = salary * 1.01;
    } else {
        new_salary = salary * 1.02;
    }
    return new_salary;
}

//exam question 5 - leap year
function is_leap(year){
    let result;
    if (year % 4 === 0 && year % 100 === 0){
        result = "false";
    } else if (year % 4 === 0){
        result = "true";
    } else {
        result = "false";
    }
    return result;
}

export {colour_mix, largest_product, day_of_the_week, pay_raise, is_leap}