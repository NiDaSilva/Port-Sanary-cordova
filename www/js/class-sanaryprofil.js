 var sanaryProfil={
     user: undefined,
     commande: undefined,
    save: function(){
        var object = {
            user: sanaryProfil.user,
            commande: sanaryProfil.commande
            };
        localStorage.setItem('sanary', JSON.stringify(object));
    },
    get: function(){
        var sanary =localStorage.getItem('sanary');
        if(sanary != undefined){
            sanary = JSON.parse(sanary);
            sanaryProfil.user=sanary.user;
            sanaryProfil.commande=sanary.commande;
        }else{
            sanaryProfil.user = {};
            sanaryProfil.commande = [];
            sanaryProfil.save();
        }


    },
     isUser: function(){
         if(sanaryProfil.user.nom!=undefined)
         {
             return true;
         }
         else
         {
             return false;
         }
     },
     clear: function(){
         sanaryProfil.user = {};
         sanaryProfil.commande = [];
         sanaryProfil.save();
        }
};
 sanaryProfil.get();