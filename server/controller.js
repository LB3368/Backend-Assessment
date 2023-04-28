module.exports = {
    goals: [],

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Today is your lucky day!", "You are going to have a great day!", "Something good is going to happen to you today!",
        "You are in for a surprise!", "The universe is on your side!"]

        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    setGoal: (req, res) => {
        const { goal } = req.body
        goals.push(goal)

        res.status(200).send(goal)
    },

    getGoal: (req, res) => {
        res.status(200).send(goals)
    },

    getQuote: (req, res) => {
        const quotes = ["Believe you can and you're halfway there.", "You are never too old to set another goal or to dream a new dream.", "If you can dream it, you can do it.", "Success is not final, failure is not fatal: it is the courage to continue that counts.", "It does not matter how slowly you go as long as you do not stop."]

        let randomIndex = Math.floor(Math.random() * quotes.length)
        let randomQuote = quotes[randomIndex]

        quotes.innerHTML = randomQuote

        res.status(200).send(randomQuote)
    }

}