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
        select: true,
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        }
    });

    var vinTable = $('#vinTable').DataTable( {
        dom: "Bfrtip",
        columns: [
            { data: "Nom" },
            {data: "Couleur.couleur"},
            { data: "Region.Nom" }
        ],
        select: true,
        "language": {
            "url": "http://cdn.datatables.net/plug-ins/1.10.16/i18n/French.json"
        }
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