<script>
    import Carrusel from './Carrusel.svelte';
    import Footer from './Footer.svelte';
    import Modal from './Modal.svelte'

    let seccion = [
        {id:"calientes", nombre:"Calientes", descripcion:""},
        {id:"alimentos", nombre: "Alimentos", descripcion:""},
        {id:"frios", nombre:"Frios", descripcion:""},
        {id:"notcoffee", nombre:"Not", nombre2: "Coffee", descripcion:""},
        {id:"postres", nombre:"Postres", descripcion:"(Postres sujetos a diponibilidad, pregunta por nuestros postres disponibles del día.)"},
        {id:"extras", nombre:"Extras", descripcion:""},
    ];

    let items = [
        {seccion:"calientes", nombre:"Americano", descripcion:"", precio:"$40", image:""},
        {seccion:"calientes", nombre:"Flat White", descripcion:"", precio:"$50", image:""},
        {seccion:"calientes", nombre:"Capuccino", descripcion:"", precio:"$60", image:"/img/capuccino.jpg"},
        {seccion:"calientes", nombre:"Latte", descripcion:"", precio:"$60", image:"/img/latte.jpg"},
        {seccion:"calientes", nombre:"Espresso", descripcion:"", precio:"$35", image:"/img/expresso.jpg"},
        {seccion:"alimentos", nombre:"Chilaquiles NCNL", descripcion:"Totopos de nopal bañados en salsa verde de la casa, coronados con pollo, crema, queso, cebolla, cilantro y aguacate.", precio:"$160", image:"/img/chilaquiles.jpg"},
        {seccion:"alimentos", nombre:"Avocado Toast", descripcion:"Pan con hummus, germinado de alfalfa, jamón de pavo y aguacate.", precio:"$80", image:""},
        {seccion:"alimentos", nombre:"Sandwich Especial", descripcion:"Jamón de pechuga de pavo, lechuga, germinado, aguacate, queso panela, acompañado de chips o ensalada.", precio:"$110", image:"/img/sandwich.jpg"},
        {seccion:"alimentos", nombre:"Sweet Wafle", descripcion:"Hechos de harina de avena con topping de plátano, fresa, almendra laminada, crema de cacahuate y miel de maple.", precio:"$110", image:"/img/waffle.jpg"},
        {seccion:"alimentos", nombre:"Bowl de Yogurth", descripcion:"Yogurth griego, fresas, plátano, granola de frutos secos, crema de cacahuate y miel al gusto", precio:"90", image:"/img/yogurt.jpg"},
        {seccion:"frios", nombre:"Americano", descripcion:"", precio:"$40", image:""},
        {seccion:"frios", nombre:"Negro Limón", descripcion:"", precio:"$60", image:"/img/negro-limon.jpg"},
        {seccion:"frios", nombre:"Latte", descripcion:"", precio:"$60", image:"/img/latte-frio.jpg"},
        {seccion:"notcoffee", nombre:"Chai", descripcion:"", precio:"$70", image:""},
        {seccion:"notcoffee", nombre:"Matcha", descripcion:"Frío / Caliente", precio:"$70", image:"/img/matcha.jpg"},
        {seccion:"notcoffee", nombre:"Taro", descripcion:"Frío / Caliente", precio:"$70", image:"/img/taro.jpg"},
        {seccion:"notcoffee", nombre:"Soda Italiana", descripcion:"", precio:"$50", image:"/img/soda.jpg"},
        {seccion:"notcoffee", nombre:"Somoothies de Proteína", descripcion:"", precio:"$80", image:""},
        {seccion:"notcoffee", nombre:"Agua Natural Embotellada", descripcion:"", precio:"$15", image:""},
        {seccion:"postres", nombre:"Cheesecake Dulce de Leche", descripcion:"", precio:"$60", image:"/img/cheesecake.jpg"},
        {seccion:"postres", nombre:"Brownie", descripcion:"", precio:"$35", image:""},
        {seccion:"postres", nombre:"Cheesecake Requesón", descripcion:"", precio:"$70", image:""},
        {seccion:"postres", nombre:"Galleta New York", descripcion:"", precio:"$65", image:""},
        {seccion:"postres", nombre:"Galleta con Chispas de Chocolate", descripcion:"", precio:"$15", image:""},
        {seccion:"extras", nombre:"Jarabe", descripcion:"", precio:"$10", image:""},
        {seccion:"extras", nombre:"Leches Vegetales", descripcion:"", precio:"$10", image:""},
        {seccion:"extras", nombre:"Pollo", descripcion:"", precio:"$30", image:""},
        {seccion:"extras", nombre:"Aguacate", descripcion:"", precio:"$15", image:""},
        {seccion:"extras", nombre:"Papas", descripcion:"", precio:"$15", image:""},
        {seccion:"extras", nombre:"Shot Espresso", descripcion:"", precio:"$15", image:""},
    ];

let imageUrl;
let showModal = false;

function openModal (imagen){
    showModal = true;
    imageUrl = imagen;
    }

function closeModal() {
    showModal = false;
    }

function getFilteredItems(seccion) {
    return items.filter(item => item.seccion === seccion)
};

</script>

<img src="/img/ncnl-logo.png" alt="">
<div class="relative my-4">
    <div>
        <Carrusel />
    </div>
    <div class="bg-ncnl rounded-r-full my-10 px-4 py-1 w-3/5 flex justify-end absolute top-3/4 left-0 z-40">
        <img src="/img/cafe.png" alt="Café" class="w-[33%]">
    </div>
</div>
<h1 class="font-black text-ncnl uppercase text-[5.5rem] font-noto text-center">Menú</h1>
{#each seccion as seccionItem}
    <section id="{seccionItem.id}" class="text-lg">
        {#if seccionItem.id === "notcoffee"}
        <div class="flex justify-end mr-4 items-center">
            <div class="bg-ncnl50 rounded-l-3xl rounded-r-2xl text-4xl text-right py-1 px-10 w-11/12 pb-2">
                <span class="uppercase font-bold text-white">{seccionItem.nombre}</span>
                <span class="uppercase text-white">{seccionItem.nombre2}</span>
            </div>
        </div>
        {:else}
        <div class="flex ml-4 items-center">
            <span class="uppercase text-white bg-ncnl rounded-full text-xl text-center px-6 py-2 w-1/2">{seccionItem.nombre}</span>
        </div>
        {/if}
        {#each getFilteredItems(seccionItem.id) as item}
            {#if item.image === ""}
            <div class="my-2 mx-4 text-orange-950">
                <div class="flex">
                    <span class="uppercase">{item.nombre}</span>
                    <span class="grow"></span>
                    <span>{item.precio}</span>
                </div>
                <p class="px-2 text-sm">{item.descripcion}</p>
            </div>
            {:else}
            <div class="my-2 mx-4 text-orange-950">
                <div class="flex">
                    <button on:click={()=> openModal(item.image)} class="uppercase">{item.nombre}&thinsp;<i class="fa-image fa-solid"></i></button>
                    <span class="grow"></span>
                    <span>{item.precio}</span>
                </div>
                <p class="px-2 text-sm">{item.descripcion}</p>
            </div>
            {/if}
        {/each}
    </section>
    <p class="text-sm text-orange-950 px-2 my-4 mx-2">{seccionItem.descripcion}</p>
{/each}
<div class=" mb-20 flex justify-end">
    <div class="font-black bg-ncnl rounded-l-full uppercase text-3xl my-10 px-4 py-1 w-3/5 flex self-end">
        <img src="/img/cafe.png" alt="Café" class="w-[33%]">
    </div>
</div>
<Footer />
{#if showModal}
  <Modal {imageUrl} {closeModal} />
{/if}