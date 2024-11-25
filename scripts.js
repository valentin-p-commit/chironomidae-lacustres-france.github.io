function searchTaxon() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var pages = {
        "prodiamesa": "prodiamesa_olivacea.html",
        "odontomesa": "odontomesa_fulva.html",
        "monodiamesa": "monodiamesa.html",
        "corynoneura": "corynoneura.html",
        "smittia": "smittia.html",
        "pseudosmittia": "pseudosmittia.html",
        "metriocnemus": "metriocnemus.html",
        "heterotanytarsus": "heterotanytarsus.html",
        "propsilocerus": "propsilocerus.html",
        "epoicocladius": "epoicocladius.html",
        "rheocricotopus": "rheocricotopus.html",
        "synorthocladius": "synorthocladius.html",
        "psectrocladius": "psectrocladius.html",
        "paracladius": "paracladius.html",
        "acricotopus": "acricotopus.html",
        "parorthocladius" : "parorthocladius.html",
        "chaetocladius" : "chaetocladius.html",
        "nanocladius" : "nanocladius.html",
        "parakiefferiella" : "parakiefferiella.html",
        "hydrobaenus" : "hydrobaenus.html",
        "bryophaenocladius": "bryophaenocladius.html",
        "parametriocnemus" : "parametriocnemus.html",
        "heterotrissocladius" : "heterotrissocladius.html",
        "brillia" : "brillia.html",
        "eukiefferiella" : "eukiefferiella.html",
        "thienemanniella" : "thienemanniella.html",
        "cricotopus" : "cricotopus_orthocladius_paratrichocladius.html",
        "orthocladius" : "cricotopus_orthocladius_paratrichocladius.html",
        "paratrichocladius" : "cricotopus_orthocladius_paratrichocladius.html",
        "euorthocladius" : "euorthocladius.html",
        "pseudorthocladius" : "pseudorthocladius.html",
        "paratrissocladius" : "paratrissocladius.html",
        "paralimnophyes" : "paralimnophyes.html",
        "limnophyes" : "limnophyes.html"


        // Ajoutez ici tous les taxons avec leur fichier HTML correspondant (attentention ici mettre le nom du taxon en minuscule)
    };

    if (pages[input]) {
        window.location.href = pages[input];
    } else {
        alert("Taxon inexistant ou mal orthographié, veuillez réessayer.");
    }
}
