const task3Element = document.getElementById('task-3');

function random() {
    alert('This is a random alert!')
}

function name(userName) {
    alert('Hi ' + userName);
}

function another(str1, str2, str3) {
    const combinedText = `${str1} ${str2} ${str3}`;
    return(combinedText);
}

random();
name('Nick, make sure this is a string next time!');
another();

task3Element.addEventListener('click', random);

const combinedString = another('Hi', 'there', '!');
alert(combinedString); // can also do alert(another('Hi', 'there', '!'));