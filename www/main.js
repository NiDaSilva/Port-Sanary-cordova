/**
 * Confirm native
 */
function native_confirm(message, callback, title, tabBoutons){
    try{
        if(parseInt(getDeviceVersion()) < 4) {
            if (confirm(message)) {
                callback();
            }
        }
        else{
            if(tabBoutons == "" || tabBoutons === undefined){
                tabBoutons = ["OK", i18n.t("global.annuler")];
            }
            navigator.notification.confirm(message, callback, title, tabBoutons);
        }
    }catch(err){
        if(confirm(message)){
            callback();
        }
    }
}

/**
 * Alerte native
 */
function native_alert(message, callback, title){
    try{
        if(parseInt(getDeviceVersion()) < 4) {
            alert(message);
        }
        else{
            navigator.notification.alert(message, callback, title);
        }
    }catch(err){
        alert(message);
    }
}


var home = {
    action: function () {
        render_template("templates/home.html",  "_home", "#charge", {
        });
    }
};

var historique = {
    action: function () {
        render_template("templates/historique.html", "_histo", "#charge", {
            "liste": sanaryProfil.commande
        });
    }
};

var demande = {
    action: function () {
        render_template("templates/demande.html", "_demande", "#charge", {
            "user": sanaryProfil.user
        });
    }
};

var direction = {
    action: function () {
        render_template("templates/direction.html", "_direction", "#charge", {
        });
    }
};

var meteo = {
    action: function () {
        render_template("templates/meteo.html", "_meteo", "#charge", {
        });
    }
};

var profil= {
    action: function () {
        render_template("templates/profil.html", "_profil", "#charge", {
        });
    }
};

$(function(){
    console.log("[port sanary] Started");
    render_template("maintemplate.html", "_maintemplate", "#content");
    home.action();
});