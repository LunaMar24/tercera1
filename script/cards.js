console.log("Cargando Cards...");

const dataCards =  [
    {
        "title":"Juego del año",
        "url_image":"./img/juegoano.jpg",
        "desc":"Este impresionante juego, hehco sólo para los más exigente requiere de mucha habilidad y paciencia",
        "cta":"Mostrar más...",
        "link": "https://www.lanacion.com.ar/tecnologia/the-game-awards-2023-baldurs-gate-3-es-el-juego-del-ano-y-triunfa-en-otras-cinco-categorias-nid08122023/"
    },
    {
        "title":"Juego del mes",
        "url_image":"./img/juegoano.jpg",
        "desc":"Este impresionante juego, ",
        "cta":"Mostrar más...",
        "link": "https://www.lanacion.com.ar/tecnologia/the-game-awards-2023-baldurs-gate-3-es-el-juego-del-ano-y-triunfa-en-otras-cinco-categorias-nid08122023/"
    },
    {
        "title":"Juego del día",
        "url_image":"./img/juegoano.jpg",
        "desc":"Este impresionante juego, hehco sólo para los más exigente requiere de mucha habilidad y paciencia",
        "cta":"Mostrar más...",
        "link": "https://www.lanacion.com.ar/tecnologia/the-game-awards-2023-baldurs-gate-3-es-el-juego-del-ano-y-triunfa-en-otras-cinco-categorias-nid08122023/"
    },
    {
        "title":"Juego del año",
        "url_image":"./img/juegoano.jpg",
        "desc":"Este impresionante juego, hehco sólo para los más exigente requiere de mucha habilidad y paciencia",
        "cta":"Mostrar más...",
        "link": "https://www.lanacion.com.ar/tecnologia/the-game-awards-2023-baldurs-gate-3-es-el-juego-del-ano-y-triunfa-en-otras-cinco-categorias-nid08122023/"
    }    
];


(function(){
  let CARD = {

    init: function(){
        let _self = this;
        this.insertData(_self);
    },
    insertData: function(_self){
        dataCards.map (function(item, index){
            document.querySelector('.cards-list').insertAdjacentHTML('beforeend', _self.tplCardItem(item, index));            
        });
    },
    tplCardItem: function(item, index){
        return (`<div class='card-item' id='card-number-${index}'> 
                    <img src='${item.url_image}'>
                    <div class='card-info'>
                      <p class='card-title'>${item.title}</p>
                      <p class='card-desc'>${item.desc}</p>
                      <a class='card-cta' target='blank' href='${item.link}'>${item.cta}</a>
                    </div>            
                </div>`);
    },
  }
CARD.init();
})();