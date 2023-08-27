# Simple Vanilla JS Calculator App

This Markdown file provides a brief overview of a simple calculator app created using Vanilla JavaScript.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Implementation Details](#implementation-details)
    - [HTML Structure](#html-structure)

      
## Overview

The simple calculator app, named "Calculadora ++", is a basic web application that allows users to perform basic arithmetic calculations. It includes a user interface with buttons for numbers, arithmetic operations, and a display panel to show the calculation results.

## Features

1. **User Interface**: The app's user interface includes a display panel and buttons for numbers (0-9) and arithmetic operations (+, -, x, ÷).

2. **Arithmetic Operations**: Users can perform addition, subtraction, multiplication, and division using the provided arithmetic operation buttons.

3. **Clear and Backspace**: The "C" button clears the current calculation, and the "&Larr;" button acts as a backspace to remove the last entered digit.

4. **Result Display**: The app displays the calculation result in a panel at the top of the interface.

5. **Responsive Design**: The app's interface is designed to be responsive, adapting to different screen sizes.

## Implementation Details

The app is developed using HTML, CSS, and Vanilla JavaScript. The code structure is outlined below.

### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>


    <header>
        <h1><h1> Calculadora ++ </h1></h1>
    </header>


<div class="wrapper">

    <section class="display">

    <section id="panel" class="panel">
        <p class="panelText"></p>
    </section>

    <table>

        <tr>
            <td   id="clear" colspan="2"><button draggable="true" class="calc-button">C</button></td>
            <td  id="back"><button class="calc-button">&Larr;</button></td>
            <td  id="mult"><button class="calc-button">x</button></td>
        </tr>
        

        <tr>
            <td  id="siete"><button class="calc-button">7</button></td>
            <td  id="ocho"><button class="calc-button">8</button></td>
            <td  id="nueve"><button class="calc-button">9</button></td>
            <td  id="divide"><button class="calc-button">&divide;</button></td>
        </tr>
        

        <tr>
            <td  id="cuatro"><button class="calc-button">4</button></td>
            <td  id="cinco"><button class="calc-button">5</button></td>
            <td  id="seis"><button class="calc-button">6</button></td>
            <td  id="sum"><button class="calc-button">+</button></td>
        </tr>
        

        <tr>
            <td  id="uno"><button class="calc-button">1</button></td>
            <td  id="dos"><button class="calc-button">2</button></td>
            <td  id="tres"><button class="calc-button">3</button></td>
            <td  id="diff"><button class="calc-button">-</button></td>
        </tr>
        

        <tr>
            <td  colspan="3" id="0"><button class="calc-button">0</button></td>
            <td  id="equals"><button class="calc-button">=</button></td>
        </tr>
        
    </table>
</section>
</div>


    
    <script src="./script.js"></script>
</body>
</html>
