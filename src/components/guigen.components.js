
export class Container {
    constructor(width, height, x, y, color) {
        this.width = width;
        this.height = height;
        this.color = color;
        this.x = x;
        this.y = y;

        const defaultUnit = "px";

        this.unit = (nit = defaultUnit) => {
            return nit;  
        };

        this.container = document.createElement("div");
        this.container.style.width = this.width + this.unit();
        this.container.style.height = this.height + this.unit();
        this.container.style.backgroundColor = this.color;
        this.container.style.left = this.x + this.unit();
        this.container.style.top = this.y + this.unit();

        this.render = (containerRender) => {
            this.containerRender = containerRender;
            this.containerRender.appendChild(this.container);
        };

        this.set = function(containerSet) {
            this.containerSet = {
                containerColor: containerSet.containerColor,
                containerWidth: containerSet.containerWidth,
                containerHeight: containerSet.containerHeight
            };
            this.container.style.background = this.containerSet.containerColor;
            this.container.style.width = this.containerSet.containerWidth + this.unit();
            this.container.style.height = this.containerSet.containerHeight + this.unit();

            return this.containerSet;
        };

        this.hover = function(containerSet) {
            this.container.addEventListener("mouseover", () => {
              this.container.style.background = containerSet.containerColor;
              this.container.style.width = containerSet.containerWidth + this.unit();
              this.container.style.height = containerSet.containerHeight + this.unit();
            });
          
            this.container.addEventListener("mouseleave", () => {
              this.container.style.background = this.color;
              this.container.style.width = this.width + this.unit();
              this.container.style.height = this.height + this.unit();
            });

        };    

    }
}

export class Text{
    constructor(texts,size,x,y,font,color){
        this.texts = texts;
        this.size = size;
        this.x = x;
        this.y = y;
        this.font = font;
        this.color = color;

        const defaultUnit = "px";

        this.unit = (nit = defaultUnit) => {
            return nit;  
        };

        this.text = document.createElement("span");
        this.text.textContent = this.texts;
        this.text.style.fontSize = this.size + this.unit();
        this.text.style.left = this.x + this.unit();
        this.text.style.top = this.y + this.unit();
        this.text.style.fontFamily = this.font;
        this.text.style.color = this.color;

        this.render = (textRender) => {
            this.textRender = textRender;
            this.textRender.appendChild(this.text);
        };

        this.update = ()=>{
            this.text.textContent = this.texts;
        }

    }
}
