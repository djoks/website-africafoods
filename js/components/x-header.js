import '../../css/components/header.css';

class XHeader extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <header>
            <nav class="w-full">
                <div class="container flex flex-row justify-between">
                    <a href="./" class="flex flex-row items-center py-3">            
                        <img src="./img/logo.png" alt="" class="h-28 w-28 object-contain" />
                    
                        <div class="ml-2 flex flex-col">
                            <span class="text-lg font-black text-coffee-700"> Africa Foods </span>
                            <small class="text-xs font-light text-coffee-700 -mt-1">Fresh Food, Good Life</small>
                        </div>
                    </a>
                    <div class="flex space-x-5 font-light items-center text-coffee-700">
                        <a href="">Worldwide</a>
                        <a href="">Stories</a>
                        <a href="./contact.html">Contact</a>
                    </div>
                </div>
            </nav>
            <nav class="bg-gray-100 top-nav">
                <div class="w-full flex flex-row container text-coffee-700 relative">
                    <a href="./about.html" class="flex-grow text-center">About Africo</a>
                    <a href="#" class="flex-grow text-center">Sustainability</a>
                    <a href="#" class="flex-grow text-center">News</a>
                    <div class="items-center flex-grow text-center relative">
                        <span class="flex items-center justify-center h-full">Products & Services</span>
                        <div class="sub-menu">
                            <a href="./animal-nutrition.html" class="">Animal Nutrition</a>
                            <a href="./meat-and-poultry.html" class="">Meat & Poultry</a>
                            <a href="./pharmaceuticals.html" class="">Pharmaceuticals</a>
                            <a href="./agriculture.html" class="">Agriculture</a>
                            <a href="#" class="http://www.auisystems.com/projects/milikifoods.com/site/">Food & Beverages</a>
                        </div>
                    </div>
                    
                    <a href="./careers.html" class="flex-grow text-center">Careers</a>
                </div>
            </nav>
        </header>
            `;
    }
}

customElements.define('x-header', XHeader);
