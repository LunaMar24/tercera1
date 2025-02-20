console.log("Cargando Acordion");

const dataAccordion = [
    {
        "title":"Nuevos lanzamientos",
        "desc": "Ofrecemos lo último en videojuegos"
    },
    {
        "title":"Nuevos lanzamientos Marcela",
        "desc": "Ofrecemos lo último en amor!"
    }
];

(function(){
    let ACCORDION = {
        init: function(){
            let _self = this;
            this.insertData(_self);
            this.eventhandler(_self);
        },
        insertData: function(_self){
            dataAccordion.map(function(item, index){
                document
                 .querySelector(".main-accordion-container")
                  .insertAdjacentHTML("beforeend",_self.tplAccordionItem(item));
            });
        },
        eventhandler: function(_self){
            let arrayRefs = document.querySelectorAll(".accordion-title");
            for (let x = 0; x < arrayRefs.length; x++) {
                arrayRefs[x].addEventListener('click', function(event){
                    console.log("evento: ", event);
                    _self.showTab(event.target);
                });                
            }
        },
        tplAccordionItem: function(item){
            return `<div class= 'accordion-item'>
                        <div class= 'accordion-title'><p>${item.title}</p></div>
                        <div class= 'accordion-desc'><p>${item.desc}</p></div>
                    </div>`;
        },
        showTab: function(refItem){
            let activeTab = document.querySelector('tab-active');
            if(activeTab){
                activeTab.classList.remove('tab-active')
            }
            console.log ("Show Tab:", refItem);
            refItem.parentElement.classList.toggle("tab-active");
        }
    };
    ACCORDION.init();
})();


