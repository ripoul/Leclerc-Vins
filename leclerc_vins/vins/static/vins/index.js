$(document).ready(function() {
    function encodeQueryData(data) {
        /*
        var data = { 'first name': 'George', 'last name': 'Jetson', 'age': 110 };
        var querystring = encodeQueryData(data);
        console.log(querystring);
        */
        let ret = [];
        for (let d in data){
          ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
        }
        return ret.join('&');
    }

    function getFruitPerso() {
        var slPerso = $('#perso');
        var slFruit = $('#fruit');
        var cbFruit = $('#cb_fruit');
        var cbPerso = $('#cb_perso');
        var data = {};
        var urlVins='getVins/-1?';

        if (cbFruit.prop('checked')) {
            data.fruit= slFruit.prop('value')
        }
        if (cbPerso.prop('checked')) {
            data.perso= slPerso.prop('value')
        }
        
        urlVins+=encodeQueryData(data);
        return urlVins;
    }

    var vinTable = $('#vinTable').DataTable( {
        dom: "Bfrtip",
        ajax: {
            url: "getVins/-1",
            type: 'GET'
        },
        columns: [
            { data: "Nom" },
            { data: "Couleur.couleur" },
            { data: "Region.Nom" }
        ],
        select: true,
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        }
    });

    var repasTable = $('#repasTable').DataTable( {
        dom: "Bfrtip",
        columns: [
            { data: "Nom" }
        ],
        select: true,
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        }
    });

    $('#vinTable tbody').on( 'click', 'tr', function () {
        var json = vinTable.row( this ).data();

        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            repasTable.clear().draw();
        }
        else {
            vinTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            repasTable.ajax.url("getRepas/"+json.id).load();
        }
    });

    $( ".couleur" ).click(function() {
        if($(this).attr('class').includes('imgSelected')){
            $(this).removeClass('imgSelected');
            var filteredData = vinTable.columns(1).search('').draw();
            
            $( ".perso #labMin" ).text("Sec/Léger");
            $( ".perso #labMax" ).text("Moelleux/Doux/Puissant");
        }else{
            $( ".couleur" ).removeClass( "imgSelected" )
            $(this).addClass('imgSelected');
            var couleur = $(this).find('img').attr('alt');
            var filteredData = vinTable.columns(1).search(couleur).draw();

            switch (couleur) {
                case 'Blanc':
                    $( ".perso #labMin" ).text("Sec");
                    $( ".perso #labMax" ).text("Moelleux");
                    break;
                case 'Rose':
                    $( ".perso #labMin" ).text("Sec");
                    $( ".perso #labMax" ).text("Doux");
                    break;
                case 'rouge':
                    $( ".perso #labMin" ).text("Léger");
                    $( ".perso #labMax" ).text("Puissant");
                    break;
                default:
                    $( ".perso #labMin" ).text("Sec");
                    $( ".perso #labMax" ).text("Doux");
                    break;
            }
        }
    });

    $( ".region" ).change(function() {
        if(this.value=='all'){
            var filteredData = vinTable.columns(2).search('').draw();
        }else{
            var filteredData = vinTable.columns(2).search(this.value).draw();
        }
    });

    var slider = $('.range-slider'),
        range = $('.range-slider__range'),
        value = $('.range-slider__value');
      
    slider.each(function(){
  
      value.each(function(){
        var value = $(this).prev().attr('value');
        $(this).html(value);
      });
  
      range.on('input', function(){
        $(this).next(value).html(this.value);
        var url = getFruitPerso();
        vinTable.ajax.url(url).load();
      });
    });

    $( ".cb_filtre" ).click(function() {
        var url = getFruitPerso();
        vinTable.ajax.url(url).load();
    });
});