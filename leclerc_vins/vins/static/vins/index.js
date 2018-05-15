$(document).ready(function() {
    var vinTable = $('#vinTable').DataTable( {
        dom: "Bfrtip",
        ajax: {
            url: "getVins",
            type: 'GET'
        },
        columns: [
            { data: "id" },
            { data: "Nom" },
            { data: "Couleur.couleur" }
        ],
        select: true
    });

    var repasTable = $('#repasTable').DataTable( {
        dom: "Bfrtip",
        columns: [
            { data: "id" },
            { data: "Nom" }
        ],
        select: true
    });

    $('#vinTable tbody').on( 'click', 'tr', function () {
        var json = vinTable.row( this ).data();

        if ( $(this).hasClass('selected') ) {
            $(this).removeClass('selected');
        }
        else {
            vinTable.$('tr.selected').removeClass('selected');
            $(this).addClass('selected');
            repasTable.ajax.url("getRepas/"+json.id).load();
        }
    });
});