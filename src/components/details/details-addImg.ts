import products from '../../data.json';

export class AddImg {
    protected container: HTMLElement;
    id!: string;

    constructor(id: string, className: string) {
        this.container = document.createElement('div');
        this.container.className = className;
        this.container.id = id;
        this.container.addEventListener("click", this.onclickImg)
    }
    render(i:number, j: number) {
        this.container.style.background = `url(${products[i].images[j]})`;
        this.container.style.backgroundSize = 'cover';
        return this.container;
      }

    onclickImg() {
        let mainImg = document.getElementById("details-img");
        let addImg = document.getElementById(`${this.id}`) as HTMLElement;
        mainImg!.style.background = addImg.style.background;
      }
}