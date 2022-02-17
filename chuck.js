document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    let number = document.getElementById('number').value;

    let xhr = new XMLHttpRequest();
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            let data = JSON.parse(this.responseText);
            console.log(data);
            let list = document.querySelector('.jokes');
            let input = '';
            data.value.forEach(function (joke) {
                input += `<li>${joke.joke}</li>`;
            }
            );
            list.innerHTML = input;

          
        }
        document.getElementById('number').value ='';
    };
    xhr.send();


    e.preventDefault();
}