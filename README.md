# Password-generator

 Create an application that an employee with access to sensitive data can use to generate a random password based on criteria they’ve selected. This app will feature dynamically updated HTML and CSS powered by JavaScript. Possesses a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes.
<br>

===========
![Image](website3.png)

<br>

## Add Listener to Generate Bar

```
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
```
<br>

## Proper Use of Functions

```
function generatePassword() {

questions()
function questions () {
var userInput = parseInt( prompt ("Desired Password Length Between 8 - 128."));

if (userInput > 128 || userInput < 8) {
  alert ("Must Be Between 8 - 128.")
  return
}

if (isNaN(userInput) === true) {
  alert ("Not A Number.")
  return
}
```
<br>

## Proper Use of Variables

```
var lowerCaseConfirm = confirm ("Would You Like Lower Case Letters?");
var upperCaseConfirm = confirm ("Would You Like Upper Case Letters?");
var numericConfirm = confirm ("Would You Like Numeric Characters?");
var specialCharactersConfirm = confirm ("Would You Like Special Characters?");
```

<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://jas-f.github.io/Passwoord-generator/)

## License

This project is licensed under the MIT License 

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## Prerequisites

Git hub,
Git lab,
Git bash,
Visual studio,
Google chrome,
Bootstrap,
JavaScript
## Authors

**Jasmine Franklin** 

- [Link to Portfolio Site](https://jas-f.github.io/responsive-portfolio/)
- [Link to Github](https://github.com/)
- [Link to LinkedIn](https://www.linkedin.com/in/jasmine-franklin-8b08ba121)

<p>&copy; UC Berkeley Extension Bootcamp.</p>