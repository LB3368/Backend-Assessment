const { default: axios } = require("axios");

const complimentBtn = document.getElementById("complimentButton")
const yourFortuneBtn = document.getElementById('yourFortuneButton')
const goalForm = document.getElementById('goalForm')
const quoteBtn = document.getElementById('quoteButton')
const quoteDisplay = document.getElementById('quoteDisplay')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const setGoal = (evt) => {
    evt.preventDefault()
    const goalInput = document.getElementById('goalInput')
    const goal = goalInput.value 
    axios.post('http://localhost:4000/api/goals/', { goal })
    .then(res => {
        const data = res.data
        alert('Your goal has been set! You are now working towards ${data}')
    })
}

const getQuote = () => {
    axios.get('http://localhost:4000/api/quote/')
    .then(res => {
        const data = res.data
        alert(data)
    })
}


complimentBtn.addEventListener('click', getCompliment)
yourFortuneBtn.addEventListener('click', getFortune)
goalForm.addEventListener('submit', setGoal)
quoteBtn.addEventListener('click', getQuote)

