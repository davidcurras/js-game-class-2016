$( document ).ready(function() {
    var games = [
      {
        name: 'game/CiroAngeleri/deflect/public',
        image: 'img/deflect.png'
      },
      {
        name: 'game/EstebanFrare/hallucination/public',
        image: 'img/halluc.png'
      },
      {
        name: 'game/GonzoGhanem/chaos/public',
        image: 'img/chaos.png'
      },
      {
        name: 'game/JuaneNieva/all-eyes-on-you/public',
        image: 'img/alleyes.png'
      },
      {
        name: 'game/JulianCedaro/head-soccer/public',
        image: 'img/headsoccer.png'
      },
      {
        name: 'game/SebastianSilva/the-scape/public',
        image: 'img/thescape.png'
      },
      {
        name: 'game/SebastianFlores/icecream-zombies/public',
        image: 'img/icecream.png'
      },
      {
        name: 'game/JesusQuiroga/eagle-eye/public',
        image: 'img/eagle.png'
      }
    ];
    var gamesShufled = _.shuffle(games);
    var html = '';
    var arr;
    for (var i = 0; i < gamesShufled.length; i++) {
      arr = [
        '<div>',
        '<a href="'+gamesShufled[i].name+'">',
        '<img src="'+gamesShufled[i].image+'" alt>',
        '</div>'
      ];
      html += arr.join('\n');
    }
    $( '#gallery' ).append( html );
});