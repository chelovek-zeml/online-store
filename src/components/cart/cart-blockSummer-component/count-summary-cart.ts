class CountSummary {
    protected container: HTMLElement;
    constructor(id: string, className: string) {
      this.container = document.createElement('div');
      this.container.id = id;
      this.container.className = className;
    }
  
    render() {
        let countSummary: number = 0;
        let arrTemp = JSON.parse(localStorage.getItem('arrProduct')!);
        for (let i = 0; i < arrTemp.length; i++) {
          countSummary += arrTemp[i].count;
        }
        this.container.innerText = `Products: ${countSummary}`;
      return this.container;
    }
  }
  export default CountSummary;