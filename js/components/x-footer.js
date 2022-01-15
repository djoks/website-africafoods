import '../../css/components/footer.css';

class XFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer class="bg-gray-200">
            <div class="container py-16 flex flex-row space-x-24">
                <div class="flex flex-col">
                    <small class="flex flex-col space-y-5 text-xs mb-2 text-coffee-400">Some Info</small>
                    <div class="flex flex-col space-y-5 text-sm  text-coffee-700">
                        <a href="#">Worldwide</a>
                        <a href="#">Stories</a>
                        <a href="./contact.html">Contact</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <small class="flex flex-col space-y-5 text-xs w-40 mb-2 text-coffee-400">Who We Are</small>
                    <div class="grid grid-cols-2 gap-5 text-sm text-coffee-700">
                        <a href="#">About Africo</a>
                        <a href="#">Sustainability</a>
                        <a href="#">News</a>
                        <a href="#">Products & Services</a>
                        <a href="./careers.html">Careers</a>
                    </div>
                </div>
                <div class="flex flex-col">
                    <small class="flex flex-col space-y-5 text-xs w-40 mb-2 text-coffee-700">Social Media</small>
                    <div class="flex flex-col space-y-4 text-sm w-40">
                        <a href="" class="flex flex-row items-center">
                            <img src="./img/facebook.svg" alt="" class="w-6 h-6 object-contain" />
                            <span class="text-sm ml-2 text-coffee-700">Facebook</span>
                        </a>
                        <a href="" class="flex flex-row items-center">
                            <img src="./img/twitter.svg" alt="" class="w-6 h-6 object-contain" />
                            <span class="text-sm ml-2 text-coffee-700">Twitter</span>
                        </a>
                        <a href="" class="flex flex-row items-center">
                            <img src="./img/instagram.svg" alt="" class="w-6 h-6 object-contain" />
                            <span class="text-sm ml-2 text-coffee-700">Instagram</span>
                        </a>
                    </div>
                </div>
                <div>
                    <a href="" class="flex items-center justify-center">
                        <img src="./img/logo.png" alt="" class="w-32 h-32 object-contain" />
                    </a>
                </div>
            </div>
            <div class="bg-coffee-700 p-5 flex items-center justify-center text-white text-xs">
                &copy; 2021 African Food Corporation. All Rights Reserved.
            </div>
        </footer>
            `;
    }
}

customElements.define('x-footer', XFooter);
