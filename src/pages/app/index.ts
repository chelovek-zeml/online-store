import Page from '../../core/templates/page';
import MainPage from '../main/main';
import CartPage from '../cart/cart';
import CardPage from '../card/card';

export const enum PageIds {
    MainPage = 'main-page',
    CardPage = 'details-page',
    CartPage = 'cart-page'
}

class App {
    private static container: HTMLElement = document.querySelector('main')!;
    private initialPage: MainPage;

    static rendorNewPage(idPage: string) {
        App.container.innerHTML = '';
        let page: Page | null = null;
        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage);
        } else if (idPage === PageIds.CartPage) {
            page = new CartPage(idPage);
        } else if (idPage === PageIds.CardPage) {
            page = new CardPage(idPage);
        }

        if (page) {
            const pageHTML = page.render();
            App.container.append(pageHTML);
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            App.rendorNewPage(hash);
        })
    }

    constructor() {
        this.initialPage = new MainPage('main-page');
    }

    run() {
        let hash = window.location.hash.slice(1);
        if (hash === '') {
            hash = 'main-page';
        }
       App.rendorNewPage(hash);
       this.enableRouteChange();
    }
}

export default App;