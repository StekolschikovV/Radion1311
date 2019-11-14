


class Search {
    public searchText: string;
    public searchHelpEl: Element;
    constructor() {
        this.searchHelpEl = document.querySelector('.searchHelp');
        this.searchText = '';
        this.events();
    }
    events() {
        let searchInputEl = document.querySelector('#search-input');
        searchInputEl.addEventListener('input', (e: any) => {
            this.searchText = e.target.value;
            this.isShowSearchHelp();
        });
        searchInputEl.addEventListener("focusout", (e) => {
            this.isShowSearchHelp(true);
        });

    }
    isShowSearchHelp(closeImmediately = false) {
        if(this.searchText.length > 0 && !this.searchHelpEl.classList.contains('active')) {
            this.searchHelpEl.classList.add('active');
        } else if(this.searchText.length === 0 || closeImmediately){
            this.searchHelpEl.classList.remove('active');
        }
    }
}

new Search();
