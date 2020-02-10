const authKey = "6adwam4h8umugdtsftp4wwae";
let date = $(this).text();
const queryUrl = "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/trial/v7/en/games/2020/02/" + date + "/schedule.json?api_key=" + authKey;
const queryUrl2 = "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/trial/v7/en/games/2019/REG/schedule.json?api_key=" + authKey;
const queryUrl3 = "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/trial/v7/en/seasons/2019/REG/leaders.json?api_key=" + authKey;
const queryUrl4 = "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/trial/v7/en/seasons/2019/REG/standings.json?api_key=" + authKey;
const queryUrl5 = "https://cors-anywhere.herokuapp.com/http://api.sportradar.us/nba/trial/v7/en/players/ab532a66-9314-4d57-ade7-bb54a70c65ad/profile.json?api_key=" + authKey;
let westTeams = [];
let eastTeams = [];

$("#stats-btn").on("click", function () {

  $.ajax({
    url: queryUrl3,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      // console.log(response);
      let firstPoints = response.categories[1].ranks[0].player.full_name;
      let secondPoints = response.categories[1].ranks[1].player.full_name;
      let thirdPoints = response.categories[1].ranks[2].player.full_name;
      let firstAssists = response.categories[2].ranks[0].player.full_name;
      let secondAssists = response.categories[2].ranks[1].player.full_name;
      let thirdAssists = response.categories[2].ranks[2].player.full_name;
      let firstRebounds = response.categories[17].ranks[0].player.full_name;
      let secondRebounds = response.categories[17].ranks[1].player.full_name;
      let thirdRebounds = response.categories[17].ranks[2].player.full_name;
      console.log("POINTS LEADERS:");
      console.log("1." + firstPoints);
      console.log("2." + secondPoints);
      console.log("3." + thirdPoints);
      console.log("ASSISTS LEADERS:");
      console.log("1." + firstAssists);
      console.log("2." + secondAssists);
      console.log("3." + thirdAssists);
      console.log("REBOUNDS LEADERS:");
      console.log("1." + firstRebounds);
      console.log("2." + secondRebounds);
      console.log("3." + thirdRebounds);
    }
  });
});

function giveRank(team) {
  return console.log(team.name, team.calc_rank.conf_rank);
}

$("#search-btn").on("click", function () {

  $.ajax({
    url: queryUrl4,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      // console.log(response);
      // let pacificTeams = response.conferences[0].divisions[0].teams;
      // console.log(pacificTeams);
      // let x = pacificTeams.map(giveRank);
      // console.log(x);
      for (var j = 0; j < response.conferences[0].divisions.length; j++) {
        for (var i = 0; i < response.conferences[0].divisions[0].teams.length; i++) {
          let teamName = response.conferences[0].divisions[j].teams[i].name;
          let teamRank = response.conferences[0].divisions[j].teams[i].calc_rank.conf_rank;
          console.log(teamRank, teamName);
          westTeams.push({ rank: teamRank, name: teamName });

        }
      };
      console.log(westTeams);
      for (var j = 0; j < response.conferences[1].divisions.length; j++) {
        for (var i = 0; i < response.conferences[1].divisions[0].teams.length; i++) {
          let teamName = response.conferences[1].divisions[j].teams[i].name;
          let teamRank = response.conferences[1].divisions[j].teams[i].calc_rank.conf_rank;
          console.log(teamRank, teamName);
          eastTeams.push({ rank: teamRank, name: teamName });

        }
      };
      console.log(eastTeams);
    }
  });
});

$("#player-btn").on("click", function () {

  $.ajax({
    url: queryUrl5,
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      console.log(response);

    }
  });
});