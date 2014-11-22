
var i = 0;
var degree = 1;
var sum = 0;
var c = Math.PI / 180;
var c1 = 180 / Math.PI;
var equal_clicked = 0;
var ans = 0;
var fact;
var s = 0;
var stack = new Array(15);
var stack2 = new Array(15);
stack2[-1] = 0;
var shift = 0;
var fact_;
var operator_used = 0;
stack[-1] = 0;
var _saved = 0;
var pi_e_used=0;
var classic1, wooden1,logarithm=0,power=0,root=0;
var count = 0,x,y;
var asinh_x, acosh_x, atanh_x;
var decimal_used = 0;
WinJS.Utilities.markSupportedForProcessing(classic);
WinJS.Utilities.markSupportedForProcessing(nature);
WinJS.Utilities.markSupportedForProcessing(wooden);
WinJS.Utilities.markSupportedForProcessing(standard);
WinJS.Utilities.markSupportedForProcessing(scientific);
WinJS.Utilities.markSupportedForProcessing(help);

function input_button(value) {
    if (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value==7 || value==8 || value==9) {
        value1(value);
        document.getElementById('screen').focus();

    }
    else if (value == 0) {
        if (equal_clicked == 0) {
            if (pi_e_used == 1) { }
            else if (pi_e_used == 0) {
                if (operator_used == 0) {
                    form1.output.value += value;
                    form1.output1.value += value;
                   //fact = eval(form1.output.value);
                    stack[i] = form1.output.value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;
                }
                else if (operator_used == 1) {
                    form1.output1.value += value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;

                }
            }
            document.getElementById('screen').focus();
        }
        else {
            if (pi_e_used == 1) { }
            else if (pi_e_used == 0) {
                if (operator_used == 0) {
                    form1.output.value = '';
                    form1.output1.value = '';
                    form1.output.value += value;
                    form1.output1.value += value;
                    fact = eval(form1.output.value);
                    stack[i] = form1.output.value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;
                }

            }
            document.getElementById('screen').focus();
        }
    }



    else if (value == '+') {
        value_operator(value);

    }
    else if (value == '-') {
        value_operator(value);

    }
    else if (value == 'e^x') {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'e^';
            form1.output1.value += eval(form1.output.value);
            form1.output.value = Math.exp(form1.output.value);
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
    }
    else if (value == '10^x') {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += '10^';
            form1.output1.value += eval(form1.output.value);
            form1.output.value = Math.pow(10, eval(form1.output.value));
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
    }
    else if (value == '*') {
        if (form1.output.value != 0) {
            value_operator(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }
    }
    else if (value == '÷') {
        value = "/";
        if (form1.output.value != 0) {
            value_operator(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }
    }
    else if (value == 'C') {
        form1.output.value = '';
        form1.output1.value = '';
        document.getElementById('screen').focus();
        pi_e_used = 0;
        operator_used = 0;
        decimal_used = 0;
    }
    else if (value == '.') {
        if (pi_e_used == 1) { }
        else if (pi_e_used == 0) {
            if (equal_clicked == 0) {
                form1.output.value += '.';
                form1.output1.value += '.';
                stack[i] = form1.output.value;
                stack2[i] = form1.output.value;
                i++;
                document.getElementById('screen').focus();
                decimal_used = 1;
            }
            else if (equal_clicked == 1) {
                form1.output.value = '';
                form1.output1.value = '';
                form1.output.value += '.';
                form1.output1.value += '.';
                stack[i] = form1.output.value;
                stack2[i] = form1.output.value;
                i++;
                equal_clicked = 0;
                decimal_used = 1;
                document.getElementById('screen').focus();
            }
        }
    }
    else if (value == "%") {
        if (form1.output.value != 0) {
            value_operator(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }
    }
    else if (value == "π") {
        if (equal_clicked == 0) {
            if (pi_e_used == 1) { }
            else if (pi_e_used ==0) {
                form1.output1.value += 'π';
                form1.output.value += Math.PI;
                stack[i] = form1.output.value;
                stack2[i] = form1.output1.value;
                equal_clicked = 0;
                i++;
                pi_e_used = 1;
                document.getElementById('screen').focus();
            }
        }
        if (equal_clicked == 1) {
            form1.output.value = '';
            form1.output1.value = '';
            form1.output1.value += 'π';
            form1.output.value += Math.PI;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            equal_clicked = 0;
            i++;
            pi_e_used = 1;
            document.getElementById('screen').focus();
        }
    }
    else if (value == "e") {
        if (equal_clicked == 0) {
            if (pi_e_used == 1) { }
            else if (pi_e_used == 0) {
                form1.output1.value += 'e';
                form1.output.value += Math.E;
                stack[i] = form1.output.value;
                stack2[i] = form1.output1.value;
                equal_clicked = 0;
                i++;
                pi_e_used = 1;
                document.getElementById('screen').focus();
            }
        }
        if (equal_clicked == 1) {
            form1.output1.value = '';
            form1.output.value = '';
            form1.output1.value += 'e';
            form1.output.value += Math.E;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            equal_clicked = 0;
            i++;
            pi_e_used = 1;
            document.getElementById('screen').focus();
        }
    }
    else if (value == "x²") {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += '(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            form1.output1.value += '^2';
            form1.output.value = Math.pow(eval(form1.output.value), 2);
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        equal_clicked = 1;
        //operator_used = 1;
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "(") {
        if (equal_clicked == 0) {
            form1.output.value += '(';
            form1.output1.value += '(';
            fact = form1.output.value;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            i++;
            document.getElementById('screen').focus();
            operator_used = 0;
            equal_clicked = 0;
        }
        else if (equal_clicked == 1) {
            form1.output.value = '';
            form1.output1.value = '';
            form1.output.value += '(';
            form1.output1.value += '(';
            fact = form1.output.value;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            i++;
            document.getElementById('screen').focus();
            operator_used = 0;
            equal_clicked = 0;
        }
    }
    else if (value == ")") {
        if (equal_clicked == 0) {
            form1.output.value += ')';
            form1.output1.value += ')';
            fact = form1.output.value;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            i++;
            document.getElementById('screen').focus();
            operator_used = 0;
            equal_clicked = 0;
        }
        else if (equal_clicked == 1) {
            form1.output.value = '';
            form1.output.value += ')';
            form1.output1.value += ')';
            fact = form1.output.value;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            i++;
            document.getElementById('screen').focus();
            operator_used = 0;
            equal_clicked = 0;
        }
    }
    else if (value == "sin") {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            if (degree == 1) {
                form1.output1.value = '';
                form1.output1.value += 'sin(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.sin(c * (eval(form1.output.value))).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;

            }
            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'sin(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.sin(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
               // operator_used = 1;

            }
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        pop();
        document.getElementById('screen').focus();
    }
    else if (value == "cos") {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            if (degree == 1) {
                form1.output1.value = '';
                form1.output1.value += 'cos(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.cos(eval(form1.output.value) * (c)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
               // operator_used = 1;

            }
            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'cos(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.cos(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
        }
        catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        pop();
        document.getElementById('screen').focus();
    }
    else if (value == "tan") {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            if (degree == 1) {
                if (form1.output.value == 90) {
                    form1.output1.value = '';
                    form1.output1.value += 'tan(';
                    form1.output1.value += eval(form1.output.value);
                    form1.output1.value += ')';
                    form1.output.value = 1 / 0;
                    ans = form1.output.value;

                }
                else {
                    form1.output1.value = '';
                    form1.output1.value += 'tan(';
                    form1.output1.value += eval(form1.output.value);
                    form1.output1.value += ')';
                    form1.output.value = Math.tan(eval(form1.output.value) * (c)).toFixed(6);
                    ans = form1.output.value;

                }

                equal_clicked = 1;
                //operator_used = 1;
                pop();
            }

            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'tan(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.tan(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                operator_used = 1;
                pop();
            }
        }
        catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }

    else if (value == "asin") {
        pi_e_used = 0;
        decimal_used = 0;
        try {
            if (degree == 1) {
                form1.output1.value = '';
                form1.output1.value += 'asin(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                var x = Math.asin(eval(form1.output.value));
                form1.output.value = ((x) * (c1)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'asin(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.asin(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "acos") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            if (degree == 1) {
                form1.output1.value = '';
                form1.output1.value += 'acos(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                var x = Math.acos(eval(form1.output.value));
                form1.output.value = ((x) * (c1)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'acos(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.acos(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
               // operator_used = 1;

            }
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "atan") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            if (degree == 1) {
                form1.output1.value = '';
                form1.output1.value += 'atan(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                var x = Math.atan(eval(form1.output.value));
                form1.output.value = ((x) * (c1)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
            else if (degree == 0) {
                form1.output1.value = '';
                form1.output1.value += 'atan(';
                form1.output1.value += eval(form1.output.value);
                form1.output1.value += ')';
                form1.output.value = Math.atan(eval(form1.output.value)).toFixed(6);
                ans = form1.output.value;
                equal_clicked = 1;
                //operator_used = 1;

            }
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "sinh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'sinh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            form1.output.value = (Math.exp(eval(form1.output.value)) - Math.exp(-eval(form1.output.value))) / 2;
            ans = form1.output.value;
            equal_clicked = 1;
            //operator_used = 1;

        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "cosh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'cosh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            form1.output.value = (Math.exp(eval(form1.output.value)) + Math.exp(-eval(form1.output.value))) / 2;
            ans = form1.output.value;
            equal_clicked = 1;
            //operator_used = 1;
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }
    else if (value == "tanh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'tanh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            form1.output.value = (Math.exp(eval(form1.output.value)) - Math.exp(-eval(form1.output.value))) / (Math.exp(form1.output.value) + Math.exp(-form1.output.value));
            ans = form1.output.value;
            equal_clicked = 1;
           // operator_used = 1;
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();

    }

    else if (value == "asinh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'asinh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            asinh_x = eval((eval(form1.output.value)) + '+' + eval(Math.sqrt(Math.pow(eval(form1.output.value), 2) + 1)));
            form1.output.value = Math.log(asinh_x);
            ans = form1.output.value;
            equal_clicked = 1;
            //operator_used = 1;
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();

    }
    else if (value == "acosh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'acosh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            acosh_x = eval((eval(form1.output.value)) + '+' + eval(Math.sqrt(Math.pow(eval(form1.output.value), 2) - 1)));
            form1.output.value = Math.log(acosh_x);
            ans = form1.output.value;
            equal_clicked = 1;
            //operator_used = 1;
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
    }
    else if (value == "atanh") {
        decimal_used = 0;
        pi_e_used = 0;
        try {
            form1.output1.value = '';
            form1.output1.value += 'atanh(';
            form1.output1.value += eval(form1.output.value);
            form1.output1.value += ')';
            atanh_x = eval('1' + '+' + eval(form1.output.value)) / eval('1' - eval(form1.output.value));
            form1.output.value = Math.log(atanh_x) / 2;
            ans = form1.output.value;
            equal_clicked = 1;
            //operator_used = 1;
            pop();
        } catch (err) {
            form1.output.value = "Syntax Error..!";
            document.getElementById('screen').focus();
            equal_clicked = 1;
        }
        document.getElementById('screen').focus();
        pop();
    }

}
function result() {
    pi_e_used = 0;
    decimal_used = 0;
    try{
        if (logarithm == 1) {
            form1.output1.value += ')';
            form1.output.value = (Math.log(document.form1.output.value) / Math.log(x));
            logarithm = 0;
            fact = form1.output.value;
            ans = form1.output.value;
            equal_clicked = 1;
        }
        else if (power == 1) {
            form1.output.value = Math.pow(x, form1.output.value);
            fact = form1.output.value;
            ans = form1.output.value;
            equal_clicked = 1;
            power = 0;
        }
        else if (root == 1) {
            form1.output.value = Math.pow(form1.output.value, 1 / x);
            fact = form1.output.value;
            ans = form1.output.value;
            equal_clicked = 1;
            root = 0;
        }
        else {
            form1.output.value = (eval(form1.output.value)).toFixed(6);
            fact = form1.output.value;
            ans = form1.output.value;
            equal_clicked = 1;
        }
        
        
        
    }
    catch (err) {
        form1.output.value = "Syntax Error..!";
        document.getElementById('screen').focus();
        equal_clicked = 1;
    }
    document.getElementById('screen').focus();
    pop();
}
function sqrt() {
    pi_e_used = 0;
    decimal_used = 0;
    try{
        var sqr = 0;
        form1.output1.value = '';
        form1.output1.value += '2';
        form1.output1.value += '√';
        form1.output1.value += form1.output.value;
        sqr = Math.sqrt(form1.output.value);
        form1.output.value = sqr;
        ans = form1.output.value;
        equal_clicked = 1;
    document.getElementById('screen').focus();
    } catch (err) {
        form1.output.value = "Syntax Error..!";
        document.getElementById('screen').focus();
        equal_clicked = 1;
    }
    
}

function set1() {
    degree = 1;
    document.getElementById('screen').focus();

}
function log_(value) {
    pi_e_used = 0;
    decimal_used = 0;
    var lg = 0;
    try{
        if (value == 'ln') {
            form1.output1.value = '';
            form1.output1.value += 'ln(';
            form1.output1.value += form1.output.value;
            form1.output1.value += ')';
            lg = Math.log(document.form1.output.value);
            document.form1.output.value = lg;
            equal_clicked = 1;
            document.getElementById('screen').focus();
        }
        else if (value = 'log') {
            form1.output1.value = '';
            form1.output1.value += 'log(';
            form1.output1.value += form1.output.value;
            form1.output1.value += ')';
            lg = (Math.log(document.form1.output.value) / Math.log(10));
            document.form1.output.value = lg;
            equal_clicked = 1;
            document.getElementById('screen').focus();
        }
    }
    catch (err) {
        form1.output.value = "Syntax Error..!";
        document.getElementById('screen').focus();
        equal_clicked = 1;
    }

}
function set0() {
    degree = 0;
    document.getElementById('screen').focus();
}
function value_operator(value) {
    pi_e_used = 0;
    decimal_used = 0;
    if (equal_clicked == 0) {
        form1.output.value += value;
        form1.output1.value += value;
        equal_clicked = 0;
        operator_used = 1;
        stack[i] = form1.output.value;
        stack2[i] = form1.output1.value;
        i++;
        document.getElementById('screen').focus();
    }
    else if (equal_clicked == 1) {
        //form1.output.value = '';
        //form1.output1.value = '';
        form1.output.value += value;
        form1.output1.value += value;
        equal_clicked = 0;
        operator_used = 1;
        stack[i] = form1.output.value;
        stack2[i] = form1.output1.value;
        i++;
        document.getElementById('screen').focus();
    }
}
function operator_shift(value) {
    pi_e_used = 0;
    decimal_used = 0;
    if (equal_clicked == 0) {
        form1.output.value += value;
        form1.output1.value += value;
        stack[i] = form1.output.value;
        stack2[i] = form1.output1.value;
        equal_clicked = 0;
        operator_used = 1;
        i++;
        shift = 0;
    }
    else if (equal_clicked == 1) {
        //form1.output.value = '';
        //form1.output1.value = '';
        form1.output.value += value;
        form1.output1.value += value;
        stack[i] = form1.output.value;
        stack2[i] = form1.output1.value;
        equal_clicked = 0;
        operator_used = 1;
        i++;
        shift = 0;
    }
}

function value1(value) {
    if (equal_clicked == 0) {
        if (pi_e_used == 1) { }
        else if(pi_e_used==0){
        if (form1.output.value == 0) {
            if (decimal_used == 1) {
                form1.output.value += value;
                form1.output1.value += value;
                fact = form1.output.value;
                stack[i] = form1.output.value;
                stack2[i] = form1.output1.value;
                i++;
                document.getElementById('screen').focus();
                operator_used = 0;
            }
            else {
                form1.output.value = '';
                form1.output.value += value;
                form1.output1.value += value;
                fact = form1.output.value;
                stack[i] = form1.output.value;
                stack2[i] = form1.output1.value;
                i++;
                document.getElementById('screen').focus();
                operator_used = 0;
            }
            
        }
        else {
            form1.output.value += value;
            form1.output1.value += value;
            fact = form1.output.value;
            stack[i] = form1.output.value;
            stack2[i] = form1.output1.value;
            i++;
            document.getElementById('screen').focus();
            operator_used = 0;
           

        }
    }
    }
    else if (equal_clicked == 1) {
        if (pi_e_used == 1) { }
        else if (pi_e_used == 0) {
            form1.output.value = '';
            form1.output1.value = '';
            form1.output.value += value;
            form1.output1.value += value;
            fact = form1.output.value;
            equal_clicked = 0;
            stack2[i] = form1.output1.value;
            stack[i] = form1.output.value;
            i++;
            operator_used = 0;
            document.getElementById('screen').focus();
        }
    }
}
function answer() {
    form1.output.value = '';
    form1.output1.value = '';
    form1.output.value += (ans);
    form1.output1.value += 'Ans';
    equal_clicked = 1;
    document.getElementById('screen').focus();
    decimal_used = 0;

}
function clear_store() {
    ans = form1.output.value;
    form1.output.value = '';
    form1.output1.value = '';
    document.getElementById('screen').focus();
    decimal_used = 0;
}
function delt() {
    pi_e_used = 0;
    decimal_used = 0;
    if ( i > 0) {
        i--;
        var n = i - 1;
        if (n >= 0) {
            form1.output1.value = stack2[n];
            form1.output.value = stack[n];
            document.getElementById('screen').focus();
        }
        if (n == -1) {
            pop();
            form1.output1.value = '';
            form1.output.value = '';
            equal_clicked = 1;
            document.getElementById('screen').focus();

        }
    }
}
function pop() {

    for (k = 0; k < i; k++) {
        stack[k] = 0;
        stack2[k] = 0;

    }
    document.getElementById('screen').focus();
}
function fact1() {
    pi_e_used = 0;
    decimal_used = 0;
    try{
        form1.output1.value = '';
        form1.output1.value += '(';
        form1.output1.value += eval(form1.output.value);
        form1.output1.value += ')';
        form1.output1.value += '!';
        fact_ = eval(form1.output.value);
        form1.output.value = factorial(fact_);
        ans = form1.output.value;
        equal_clicked = 1;
    } catch (err) {
        form1.output.value = "Syntax Error..!";
        document.getElementById('screen').focus();
        equal_clicked = 1;
    }
    document.getElementById('screen').focus();

}
function factorial(fact_) {
    if (fact_ == 0) {
        return 1;
    }
    else {
        return ((fact_) * (factorial(fact_ - 1)));

    }
}
function inverse() {
    decimal_used = 0;
    pi_e_used = 0;
    try{
        form1.output1.value = '';
        form1.output1.value += '1';
        form1.output1.value += '/';
        form1.output1.value += form1.output.value;
        var x;
        x = 1 / form1.output.value;
        form1.output.value = x;
        ans = form1.output.value;
        equal_clicked = 1;
    } catch (err) {
        form1.output.value = "Syntax Error..!";
        document.getElementById('screen').focus();
        equal_clicked = 1;
    }
    document.getElementById('screen').focus();
}
function key_detect() {
    if ((event.keyCode == 48 || event.keyCode == 96) && shift != 1) {
        value = "0";
        if (equal_clicked == 0) {
            if (pi_e_used == 1) { }
            else if (pi_e_used == 0) {
                if (operator_used == 0) {
                    form1.output.value += value;
                    form1.output1.value += value;
                   // fact = eval(form1.output.value);
                    stack[i] = form1.output.value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;
                }
                else if (operator_used == 1) {
                    form1.output1.value += value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;

                }
            }
            document.getElementById('screen').focus();
        }
        else {
            if (pi_e_used == 1) { }
            else if (pi_e_used == 0) {
                if (operator_used == 0) {
                    form1.output.value = '';
                    form1.output1.value = '';
                    form1.output.value += value;
                    form1.output1.value += value;
                    fact = eval(form1.output.value);
                    stack[i] = form1.output.value;
                    stack2[i] = form1.output1.value;
                    equal_clicked = 0;
                    i++;
                }

            }
            document.getElementById('screen').focus();
        }
    }
    else if (event.keyCode == 49 || event.keyCode == 97) {
        value = "1";
        value1(value);
    }
    else if (event.keyCode == 50 || event.keyCode == 98) {
        value = "2";
        value1(value);
    }
    else if (event.keyCode == 51 || event.keyCode == 99) {
        value = "3";
        value1(value);
    }
    else if (event.keyCode == 52 || event.keyCode == 100) {
        value = "4";
        value1(value);
    }
    else if ((event.keyCode == 53 || event.keyCode == 101) && shift != 1) {
        value = "5";
        value1(value);
    }
    else if (event.keyCode == 54 || event.keyCode == 102) {
        value = "6";
        value1(value);
    }
    else if (event.keyCode == 55 || event.keyCode == 103) {
        value = "7";
        value1(value);
    }
    else if ((event.keyCode == 56 || event.keyCode == 104) && shift != 1) {
        value = "8";
        value1(value);

    }
    else if ((event.keyCode == 57 || event.keyCode == 105) && shift != 1) {
        value = "9";
        value1(value);
    }
    else if (event.keyCode == 187 || event.keyCode == 107) {
        value = "+";
        value_operator(value);
    }
    else if (event.keyCode == 189 || event.keyCode == 109) {
        value = "-";
        value_operator(value);
    }
    else if (event.keyCode == 106) {
        value = "*";
        if (form1.output.value != 0) {
            value_operator(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }

    }
    else if (event.keyCode == 111) {
        value = "/";
        if (form1.output.value != 0) {
            value_operator(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }

    }
    else if (event.keyCode == 190 || event.keyCode == 110) {
        if (pi_e_used == 1) { }
        else if (pi_e_used == 0) {
            if (equal_clicked == 0) {
                form1.output.value += '.';
                form1.output1.value += '.';
                stack[i] = form1.output.value;
                stack2[i] = form1.output.value;
                i++;
                document.getElementById('screen').focus();
            }
            else if (equal_clicked == 1) {
                form1.output.value = '';
                form1.output1.value = '';
                form1.output.value += '.';
                form1.output1.value += '.';
                stack[i] = form1.output.value;
                stack2[i] = form1.output.value;
                i++;
                equal_clicked = 0;
                document.getElementById('screen').focus();
            }
        }
        decimal_used = 1;

    }

    else if (event.keyCode == 16) {
        shift = 1;
    }
    else if (event.keyCode == 56 && shift == 1) {
        value = "*";
        operator_shift(value);
    }
    else if (event.keyCode == 191) {
        value = "/";
        value_operator(value);


    }
    else if (event.keyCode == 53 && shift == 1) {
        value = "%";
        if (form1.output.value != 0) {
            operator_shift(value);
        }
        else {
            form1.output.value = '';
            document.getElementById('screen').focus();
        }


    }
    if (event.keyCode == 57 && shift == 1) {
        value = "(";
        operator_shift(value);

    }
    else if (event.keyCode == 48 && shift == 1) {
        value = ")";
        operator_shift(value);

    }
    else if (event.keyCode == 8) {
        delt();

    }
    else if (event.keyCode == 13) {
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        };

         result();
    }
}


function nature() {
    document.body.style.backgroundImage = "url('/images/theme1.jpg')";
    var myElements = document.querySelectorAll("input.input");

    for (var i = 0; i < myElements.length; i++) {
        myElements[i].style.backgroundColor = "rgba(31,31,32, 0.5)";
        myElements[i].style.color = "black";
    }
    var myElement1 = document.querySelectorAll(".code");
    for (var i = 0; i < myElement1.length; i++) {
        myElement1[i].style.color = "black";
    }
    var myElement2 = document.querySelectorAll("input.input_r");

    for (var i = 0; i < myElement2.length; i++) {
        myElement2[i].style.backgroundColor = "rgba(0,51,204, 0.4)";
        myElement2[i].style.color = "black";
    }
    var myElement3 = document.querySelectorAll("input.input_c");

    for (var i = 0; i < myElement3.length; i++) {
        myElement3[i].style.backgroundColor = "rgba(153,51,51 ,0.6)";
        myElement3[i].style.color = "black";
    }
    var myElement5 = document.querySelectorAll("input.input_k");

    for (var i = 0; i < myElement5.length; i++) {
        myElement5[i].style.backgroundColor = "rgba(0,51,0 ,0.6)";
        myElement5[i].style.color = "black";
    }
    var myElement6 = document.querySelectorAll("input.input_n");

    for (var i = 0; i < myElement6.length; i++) {
        myElement6[i].style.backgroundColor = "rgba(102,102,102 ,0.7)";
        myElement6[i].style.color = "black";
    }
    var myElement7 = document.querySelectorAll("input.input_s");

    for (var i = 0; i < myElement7.length; i++) {
        myElement7[i].style.backgroundColor = "rgba(102,0,0 ,0.6)"
        myElement7[i].style.color = "black";
    }
    var myElements8 = document.querySelectorAll("input.input_m");
    for (var i = 0; i < myElements8.length; i++) {
        myElements8[i].style.backgroundColor = "rgba(255,153,51 ,0.8)";
        myElements8[i].style.color = "black";
    }
    var myElement2 = document.querySelectorAll("input.input_k1");

    for (var i = 0; i < myElement2.length; i++) {
        myElement2[i].style.backgroundColor = "rgba(0,51,204, 0.4)";
        myElement2[i].style.color = "black";
    }
    classic1 = 0;
    wooden1 = 1;

}

    function wooden() {
        document.body.style.backgroundImage = "url('/images/wooden.jpg')";
        var myElements = document.querySelectorAll("input.input");

        for (var i = 0; i < myElements.length; i++) {
            myElements[i].style.backgroundColor = "rgba(31,31,32, 0.5)";
            myElements[i].style.color = "black";
        }
        var myElement1 = document.querySelectorAll(".code");
        for (var i = 0; i < myElement1.length; i++) {
            myElement1[i].style.color = "black";
        }
        var myElement2 = document.querySelectorAll("input.input_r");

        for (var i = 0; i < myElement2.length; i++) {
            myElement2[i].style.backgroundColor = "rgba(0,51,204, 0.4)";
            myElement2[i].style.color = "black";
        }
        var myElement3 = document.querySelectorAll("input.input_c");

        for (var i = 0; i < myElement3.length; i++) {
            myElement3[i].style.backgroundColor = "rgba(153,51,51 ,0.6)";
            myElement3[i].style.color = "black";
        }
        var myElement5 = document.querySelectorAll("input.input_k");

        for (var i = 0; i < myElement5.length; i++) {
            myElement5[i].style.backgroundColor = "rgba(0,51,0 ,0.6)";
            myElement5[i].style.color = "black";
        }
        var myElement6 = document.querySelectorAll("input.input_n");

        for (var i = 0; i < myElement6.length; i++) {
            myElement6[i].style.backgroundColor = "rgba(102,102,102 ,0.7)";
            myElement6[i].style.color = "black";
        }
        var myElement7 = document.querySelectorAll("input.input_s");

        for (var i = 0; i < myElement7.length; i++) {
            myElement7[i].style.backgroundColor = "rgba(102,0,0 ,0.6)"
            myElement7[i].style.color = "black";
        }
        var myElements8 = document.querySelectorAll("input.input_m");
        for (var i = 0; i < myElements8.length; i++) {
            myElements8[i].style.backgroundColor = "rgba(255,153,51 ,0.8)";
            myElements8[i].style.color = "black";
        }
        var myElement2 = document.querySelectorAll("input.input_k1");

        for (var i = 0; i < myElement2.length; i++) {
            myElement2[i].style.backgroundColor = "rgba(0,51,204, 0.4)";
            myElement2[i].style.color = "black";
        }
        classic1 = 0;
        wooden1 = 1;
    }

    function classic() {
        document.body.style.backgroundColor = "#000000";
        document.body.style.backgroundImage = "";
        var myElements = document.querySelectorAll("input.input");

        for (var i = 0; i < myElements.length; i++) {
            myElements[i].style.backgroundColor = "#1f1f20"
            myElements[i].style.color = "#878584";
        }

            var myElements8 = document.querySelectorAll("input.input_m");
            for (var i = 0; i < myElements8.length; i++) {
                myElements8[i].style.backgroundColor = "#ff9933";
                myElements8[i].style.color = "white";
            }
            var myElement1 = document.querySelectorAll(".code");
            for (var i = 0; i < myElement1.length; i++) {
                myElement1[i].style.color = "#dedee2";
            }
            var myElement2 = document.querySelectorAll("input.input_r");

            for (var i = 0; i < myElement2.length; i++) {
                myElement2[i].style.backgroundColor = "#182dcd";
                myElement2[i].style.color = "#878584";
            }
            var myElement3 = document.querySelectorAll("input.input_c");

            for (var i = 0; i < myElement3.length; i++) {
                myElement3[i].style.backgroundColor = "#823e3b"
                myElement3[i].style.color = "#878584";
            }
            var myElement5 = document.querySelectorAll("input.input_k");

            for (var i = 0; i < myElement5.length; i++) {
                myElement5[i].style.backgroundColor = "#003300";
                myElement5[i].style.color = "#878584";
            }
            var myElement6 = document.querySelectorAll("input.input_n");

            for (var i = 0; i < myElement6.length; i++) {
                myElement6[i].style.backgroundColor = "#6b6e6a";
                myElement6[i].style.color = "#edf0eb";
            }
            var myElement7 = document.querySelectorAll("input.input_s");

            for (var i = 0; i < myElement7.length; i++) {
                myElement7[i].style.backgroundColor = "#500d0f";
                myElement7[i].style.color = "#878584";
            }
            var myElements8 = document.querySelectorAll("input.input_m");
            for (var i = 0; i < myElements8.length; i++) {
                myElements8[i].style.backgroundColor = "#ff9933";
                myElements8[i].style.color = "white";
            }
            var myElement8 = document.querySelectorAll("input.input_k1");

            for (var i = 0; i < myElement8.length; i++) {
                myElement8[i].style.backgroundColor = "#182dcd";
                myElement8[i].style.color = "#878584";
            }
            classic1 = 1;
            wooden1 = 0;
        }
    

        function OnMouseIn(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(31,31,32, 0.7)";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#10100f";
            }
        }
        function OnMouseOut(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(31,31,32, 0.5)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#1f1f20";
            }
        }

        function onMouseenter(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }

        }

        function OnMouseIn1(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(153,51,51 ,0.7)";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#ac2b25";
            }
        }
        function OnMouseOut1(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(153,51,51 ,0.6)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#823e3b";
            }
        }


        function onMouseenter1(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }

        }

        function OnMouseIn2(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(102,0,0 ,0.7)"
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#470103";
            }
        }
        function OnMouseOut2(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(102,0,0 ,0.6)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#500d0f";
            }
        }


        function onMouseenter2(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }

        } function OnMouseIn3(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(102,102,102 ,0.8)";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#595b58";
            }
        }
        function OnMouseOut3(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(102,102,102 ,0.7)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#6b6e6a";
            }
        }


        function onMouseenter3(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }

        }

        function OnMouseIn4(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(0,51,204, 0.6)";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#0a1781";
            }
        }
        function OnMouseOut4(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(0,51,204, 0.4)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#182dcd";
            }
        }


        function onMouseenter4(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }

        }
        function OnMouseIn5(elem) {
            if (wooden1 == 1) {
                elem.style.backgroundColor = "rgba(0,51,0 ,0.8)";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#011901";
            }
        }
        function OnMouseOut5(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(0,51,0 ,0.6)";
            if (classic1 == 1) {
                elem.style.backgroundColor = " #003300";
            }
        }


        function onMouseenter5(elem) {
            if (wooden1 == 1){
                elem.style.backgroundColor = "#f9f5cc";
            }
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }
        }
        function OnMouseIn6(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(255,153,51 ,0.6)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#ff6600";
            }
        }

        function OnMouseOut6(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "rgba(255,153,51 ,0.8)";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#ff9933";
            }
        }

        function onMouseenter6(elem) {
            if (wooden1 == 1)
                elem.style.backgroundColor = "#f9f5cc";
            if (classic1 == 1) {
                elem.style.backgroundColor = "#f9f5cc";
            }
        }

        $(document).ready(function () {
            $(".appbar_theme").click(function () {
                $(".appbar").fadeToggle("slow");
            });
        });
        $(document).ready(function () {
            $(".appbar_type").click(function () {
                $(".appbar1").fadeToggle("slow");
            });
        });
        $(document).ready(function () {
            $('#img_del').click(function () {
                _clear();
                
            });
        });

        $(document).ready(function () {
            $('#img_sav').click(function () {
                _save();
            });
        });

        function standard() {
            window.location = '/html/standard.html';
   
        }
        function scientific() {
            window.location = '../default.html';
  
        }
        function help() {
            window.location = '/html/help.html';
        }
        function _clear() {
            document.getElementById("sticky_main").value = "";
            document.getElementById("sticky_main").focus();
        }

        function _load() {
            document.getElementById("sticky_main").value = localStorage.sticky_main;
        }

        function _save() {
            localStorage.sticky_main = document.getElementById("sticky_main").value;
            document.getElementById("screen").focus();
        }
        function m_add() {
            try{
                form1.output.value = eval(form1.output.value + '+' + localStorage.screen);
                equal_clicked = 1;
            } catch (err) {
                form1.output.value = "null value saved..!";
                equal_clicked = 1;
            }
            document.getElementById("screen").focus();
        }
        function m_read() {
            try{
                document.getElementById("screen").value = localStorage.screen;
                count = 1;
                equal_clicked = 1;
            }
            catch (err) {
                form1.output.value = "null value saved..!";
                equal_clicked = 1;
            }
                document.getElementById("screen").focus();
        }
        function m_subtract() {
            try{
                document.getElementById("screen").value = (localStorage.screen) - (form1.output.value);
                equal_clicked = 1;
            }
            catch (err) {
                form1.output.value = "null value saved..!";
                equal_clicked = 1;
            }
            document.getElementById("screen").focus();
        }
        function m_save() {
            try{
                localStorage.screen = document.getElementById("screen").value;
                equal_clicked = 1;
            }
            catch (err) {
                form1.output.value = "null value saved..!";
                equal_clicked = 1;
            }
            document.getElementById("screen").focus();
        }
        function advance_input(value) {
            if (value == "Logx(y)") {
                decimal_used = 0;
                try{
                    form1.output1.value = '';
                    form1.output1.value += 'Log';
                    form1.output1.value += eval(form1.output.value);
                    form1.output1.value += '(';
                    logarithm = 1;
                    x = eval(form1.output.value);
                    form1.output.value = '';
                    equal_clicked = 0;
                    document.getElementById("screen").focus();
                }
                catch (err) {
                    form1.output.value = "Syntax Error..!";
                }
            }
            else if (value == "x^y") {
                decimal_used = 0;
                try{
                    form1.output1.value = '';
                    form1.output1.value += eval(form1.output.value);
                    form1.output1.value += '^';
                    x = eval(form1.output.value);
                    power = 1;
                    form1.output.value = '';
                    equal_clicked = 0;
                    document.getElementById("screen").focus();
                }
                catch (err) {
                    form1.output.value = "Syntax Error..!";
                }
            }
            else if (value == "x√y")
            {
                decimal_used = 0;
                try{
                    form1.output1.value = '';
                    form1.output1.value += eval(form1.output.value);
                    form1.output1.value += '√';
                    x = eval(form1.output.value);
                    root = 1;
                    form1.output.value = '';
                    equal_clicked = 0;
                    document.getElementById("screen").focus();
                }
                catch (err) {
                    form1.output.value = "Syntax Error..!";
                }
            }

        }