const cardContainer = document.getElementById("card-container");

document.addEventListener("DOMContentLoaded", () =>
{
  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false")
  .then(response => response.json())
  .then(data =>
  {
    console.log(data);
    data.forEach((coin) =>
    {
      cardContainer.innerHTML+=getCoinNode(coin);
    });
  });
});

function getCoinNode(coin)
{
  return `
  <div class="card">
            <img src="${coin.image}" alt="crypto" class="icon"/>
            <div class="card-details">
              <div class="row">
                <span class="bold">${coin.name}</span>
                <span class="bold">123456</span>
              </div>
              <div class="row">
                <span>${coin.symbol}</span>
                <span class="${coin.price_change_percentage_24h>0? 'green' : 'red'}" >${coin.price_change_percentage_24h}%</span>
              </div>
            </div>
          </div>
  `;
}
