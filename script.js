$(document).ready(function() {

    function Card(rank, suit) {
        this.rank = rank;
        this.suit = suit;
        this.toHTML = function() {
            return "<li class='card'>" + "<div class='img'>" + "<img src='" + this.img + "' height='150px' width='100px'/>" + "</div>" + "<div class='cardname'>" + this.rank + " of " + this.suit + "</div>" + "</li>";
        };
    }

    function Deck() {
        var cardBucket = [];
        var thisDeck = this;
        this.ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
        this.imgs = ['http://www.everyonedoesit.com/img/products/ace_of_spades_f.jpg','https://www.hscripts.com/freeimages/icons/playing-cards/spade-2/spade-two-clipart1.gif','https://openclipart.org/image/2400px/svg_to_png/192444/1396231856.png','https://openclipart.org/image/800px/svg_to_png/192445/1396231875.png','http://lasvegas.informermg.com/files/2012/10/5-of-spades.jpg','https://www.hscripts.com/freeimages/icons/playing-cards/spade-6/spade-six-clipart1.gif','http://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Playing_card_spade_7.svg/200px-Playing_card_spade_7.svg.png','http://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Playing_card_spade_8.svg/200px-Playing_card_spade_8.svg.png','https://allaboutcards.files.wordpress.com/2009/06/spades9-705511.jpg','https://allaboutcards.files.wordpress.com/2009/06/208px-10_of_spades-svg.png','http://upload.wikimedia.org/wikipedia/commons/5/5e/Poker-sm-214-Js.png','http://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Poker-sm-213-Qs.png/170px-Poker-sm-213-Qs.png','http://upload.wikimedia.org/wikipedia/commons/9/9b/Poker-sm-212-Ks.png','http://fc04.deviantart.net/fs34/i/2008/237/7/e/Ace_of_Hearts_by_Tamtan.jpg','http://40.media.tumblr.com/tumblr_ljg5rpnEum1qhqtgyo1_1280.jpg','http://www.advantage-designs.biz/VidBoxSlideShow/MoviesDonMade/3ofHearts-1.jpg','http://www.egreenway.com/tarot/images/gpc267.jpg','http://s3.amazonaws.com/queenoftarot/images/914/thumb/4-5.png?1344818638','http://fc07.deviantart.net/fs70/i/2011/128/4/6/the_six_of_hearts_by_omegalpha-d3fvzl5.jpg','http://www.folioart.co.uk/images/uploads/TonyMeeuwissen-Folio-Illustration-Boutique-Fine-Art-Prints-Hearts-7---2012-XL.jpg','http://flatrock.org.nz/static/frontpage/assets/art_of_playing_cards/hearts_eight.jpg','http://spiritualnutrition.org/wp-content/uploads/2011/08/9Hearts-e1314455966834.jpg','http://fc01.deviantart.net/fs71/f/2011/180/d/c/10_of_hearts_by_farvei-d3kgf0d.png','http://upload.wikimedia.org/wikipedia/en/9/99/JackofHearts.jpg','http://www.outreacheast.org/wp-content/uploads/2013/04/queen-of-hearts-hi.png','http://meaganspendlove.com/wp-content/uploads/2012/05/kingredsmall-e1336162945946.jpg','http://fc08.deviantart.net/fs35/f/2008/301/1/0/Ace_of_Clubs_by_Maralyn01.png','http://25.media.tumblr.com/tumblr_m6x48eEbtN1qhqtgyo1_1280.jpg','http://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Playing_card_club_3.svg/819px-Playing_card_club_3.svg.png','http://eprints.utas.edu.au/6845/2/4_clubs_w.jpg','https://playingcardcollector.files.wordpress.com/2013/06/victor_beurenthe_five_of_clubs.jpg','http://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Playing_card_club_6.svg/819px-Playing_card_club_6.svg.png','http://fc05.deviantart.net/fs71/i/2011/227/0/0/the_seven_of_clubs_by_omegalpha-d46lp3v.jpg','http://www.pageresource.com/clipart/clipart/entertainment/games/carddeck/clubs-8.png','http://cliparts101.com/files/941/04458385FF9AA9C6F301F7A78C72E652/Ornamental_deck_9_of_clubs.png','http://fc02.deviantart.net/fs70/i/2011/248/e/c/the_ten_of_clubs_by_omegalpha-d48xlyb.jpg','http://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Jack_of_clubs_en.svg/209px-Jack_of_clubs_en.svg.png','http://fc08.deviantart.net/fs71/f/2011/150/1/9/queen_of_clubs_by_jeffach-d3hmpp7.jpg','http://fc03.deviantart.net/fs71/i/2011/332/1/9/king_of_clubs_by_brendant01-d4hklm7.jpg','http://image.lowriderarte.com/f/hot_spot/18333538/lrap_0905_10_z%2Bkustom_kulture_show%2Bace_of_diamonds_painting.jpg','http://fc03.deviantart.net/fs41/f/2009/007/4/3/2_by_ElMexiGarcia.jpg','http://lasvegas.informermg.com/files/2012/07/3-of-diamonds.jpg','http://www.spoys.org/images/biggercards/30.png','http://s2.hubimg.com/u/718483_f260.jpg','http://www.013a.com/images/6_of_diamonds.jpg','http://fc02.deviantart.net/fs70/f/2011/180/3/2/7_of_diamonds_by_farvei-d3kgfgv.png','https://openclipart.org/image/800px/svg_to_png/191993/1395567624.png','http://whenthesidewalkends.com/wp-content/uploads/2012/07/nine-of-diamonds.jpeg','http://pokercheatsheet.net/images/cards/PokerHands-PokerCheatSheet-D-10.svg','http://fc00.deviantart.net/fs71/f/2011/276/5/f/jack_of_diamonds_by_adorindil-d4bpy55.png','https://allaboutcards.files.wordpress.com/2009/06/queen-of-hearts.jpg','http://th01.deviantart.net/fs70/PRE/i/2011/360/6/7/the_king_of_diamonds_by_omegalpha-d4k9nkr.jpg'];
        this.cards = [];

        $.each(thisDeck.suits, function() {
            var suit = this;
            $.each(thisDeck.ranks, function() {
                var rank = this;
                var card = new Card(rank, suit);
                cardBucket.push(card);
            });
        });
        this.cards = cardBucket;

        for(var i = 0; i < this.cards.length; i++) {
            this.cards[i].img = this.imgs[i];
            $('.deck').append(this.cards[i].toHTML());
        }

        this.shuffle = function() {
            var m = 52;
            while(m) {
                var rand = Math.floor(Math.random() * m--);
                $('li:eq('+m+')').after($('li:eq('+rand+')'));
                $('li:eq('+rand+')').after($('li:eq('+(m-1)+')'));
            }
        };
    }

    var deck = new Deck();
    $('#shuffle').on('click', deck.shuffle);
});