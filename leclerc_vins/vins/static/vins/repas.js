$(document).ready(function() {
    var repasTable = $('#repasTable').DataTable( {
        dom: "Bfrtip",
        ajax: {
            url: "getRepas/-1",
            type: 'GET'
        },
        columns: [
            { data: "Nom" }
        ],
        select: true
    });

    var vinTable = $('#vinTable').DataTable( {
        dom: "Bfrtip",
        columns: [
            { data: "Nom" },
            {data: "Couleur.couleur"}
        ],
        select: true
    });

    $('#repasTable tbody').on( 'click', 'tr', function () {
        var json = repasTable.row( this ).data();

        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
            vinTable.clear().draw();
        }
        else {
            repasTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            vinTable.ajax.url("getVins/"+json.id).load();
        }
    });
});