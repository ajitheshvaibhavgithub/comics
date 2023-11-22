AFRAME.registerComponent("store",{
 update:function(){
    this.ComicsContainer=this.el
    this.createComics();
 },
 
 createComics:function(){
    const thumbNailsRef=[
        {
         id:"abcd",
         title:"ABCD",
         url:"assets/abcd.jpg"
        },
        {
         id:"flash1",
         title:"Flash",
         url:"assets/flash1.jpg"
        },
        {
         id:"spiderman",
         title:"Spiderman",
         url:"assets/spiderman.jpg"
        },
        {
         id:"thor",
         title:"THOR",
         url:"assets/thor.jpg"
        }
    ];
    
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl = this.createBorder(position, item.id);

      // Thumbnail Element
      const thumbNail = this.createThumbNail(item);
      borderEl.appendChild(thumbNail);

      // Title Text Element
      const titleEl = this.createTitleEl(position, item);
      borderEl.appendChild(titleEl);

      this.ComicsContainer.appendChild(borderEl);
    }
  },
  createBorder: function (position, id) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("id", id);
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      color:"78909c",
      width:"",
      height:"100",
      position:"-90 0 0"
    });
    entityEl.setAttribute("position", position);
    entityEl.setAttribute("material", {scr:item.url});

    return entityEl;
  },
  createThumbNail: function (item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("visible", true);
    entityEl.setAttribute("geometry", {
      primitive: "plane",
      color:"78909c",
      width:"",
      height:"100",
      position:"-90 0 0"
    });
    entityEl.setAttribute("material", { src: item.url });

    return entityEl;
  },
  createTitleEl: function (position, item) {
    const entityEl = document.createElement("a-entity");
    entityEl.setAttribute("text", {
      font: "exo2bold",
      align: "center",
      width: 70,
      color: "#e65100",
      value: item.title,
    });
    const elPosition = position;
    elPosition.y = -20;
    entityEl.setAttribute("position", elPosition);
    entityEl.setAttribute("visible", true);
    return entityEl;
  },

})