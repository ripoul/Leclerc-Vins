$(document).ready(function() {
    var vinTable = $('#vinTable').DataTable( {
        dom: "Bfrtip",
        ajax: {
            url: "getVins/-1",
            type: 'GET'
        },
        columns: [
            { data: "Nom" },
            { data: "Couleur.couleur" }
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
});