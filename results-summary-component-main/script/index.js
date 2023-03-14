import data from '../data.json' assert{type: "json"};
const dataElement = document.querySelector('#data');
const scoreElement = document.querySelector('.highlight')

window.addEventListener('DOMContentLoaded', () => {
    data.map(e => {
        dataElement.innerHTML += `
        <div class="${e.category.toLowerCase()} skill">
    <div>
      <img src="${e.icon}" alt="${e.category}">
      <span>
        ${e.category}
      </span>
    </div>
    <div>
      <span>
        ${e.score}
      </span>
      <span>
       / 100
      </span>
    </div>
  </div>
        `

    })
    var totalScore = 0;
    data.filter( e => { totalScore += e.score / data.length})
    scoreElement.innerHTML = Math.round(totalScore)
})