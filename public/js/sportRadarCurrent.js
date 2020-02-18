$(document).ready(function() {
  const year = moment().format("YYYY");
  const month = moment().format("MM");
  const day = moment().format("D");

  const CurrentGamesCall = `https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/
trial/v7/en/games/2020/01/25/schedule.json?api_key=bsqq9a96h7trberae9wu4bp3`;

  $.ajax({
    url: CurrentGamesCall,
    method: "GET",
    dataType: "json",
    success: function(response) {
      const gamesArray = response.games;
      console.log(gamesArray);
      const CurrentGames = gamesArray.map(gamesObject => {
        if (gamesObject.status === "scheduled") {
          gamesObject.home_points = " ";
          gamesObject.away_points = " ";
        }
        return `<div class="card text-white shadow-lg" style="max-width: 100%; height: auto !important; float:left;">
                <div class="card-header bg-primary">
                  <h3>Status: ${gamesObject.status}</h3>
                  
                  <h4><img class="teamImgs" src="/assets/img/nbaLogos/${gamesObject.home.id}.png"/> &nbsp&nbsp&nbsp${gamesObject.home_points}</h4>
                  
                  <h4><img class="teamImgs" src="/assets/img/nbaLogos/${gamesObject.away.id}.png"/>&nbsp&nbsp&nbsp${gamesObject.away_points}</h4>
                </div>
                <div class="card-body bg-light">
                  <ul class="list-group list-group-flush text-dark shadow-sm">
                    <li class="list-group-item">VENUE:<hr> ${gamesObject.venue.name}</li>
                    <li class="list-group-item">HOME TEAM:<hr> ${gamesObject.home.name}</li>
                    <li class="list-group-item">AWAY TEAM:<hr> ${gamesObject.away.name}</li>
                  </ul>
                </div>
              </div>`;
      });
      $("#currentGames").append(CurrentGames);
    }
  });
});
