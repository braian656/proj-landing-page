const menu = [
	{
		id: 1,
		name: 'Bruschettas de tomate y albahaca',
		price: 190,
		image: './img/Brusquettas-con-Tomates-y-Albahaca-2.jpg',
		category: 'entradas',
	},
	{
		id: 2,
		name: 'Gambas al ajillo',
		price: 190,
		image: '',
		category: 'entradas',
	},
	{
		id: 3,
		name: 'Croquetas de jamón ibérico',
		price: 190,
		image: '',
		category: 'entradas',
	},{
		id: 4,
		name: 'Ensalada César con pollo a la parrilla',
		price: 190,
		image: '',
		category: 'ensaladas',
	},{
		id: 5,
		name: 'Ensalada Caprese con mozzarella fresca',
		price: 190,
		image: '',
		category: 'ensaladas',
	},
	{
		id: 6,
		name: 'Ensalada de quinoa con aguacate y mango',
		price: 190,
		image: '',
		category: 'ensaladas',
	}
	,{
		id: 7,
		name: 'Sopa de mariscos',
		price: 190,
		image: '',
		category: 'sopas-cremas',
	},{
		id: 8,
		name: 'Crema de champiñones',
		price: 190,
		image: '',
		category: 'sopas-cremas',
	},{
		id: 9,
		name: 'Sopa minestrone',
		price: 190,
		image: '',
		category: 'sopas-cremas',
	},{
		id: 10,
		name: 'Filete de ternera con salsa de champiñones',
		price: 190,
		image: '',
		category: 'principales',
	},{
		id: 11,
		name: 'Pollo a la parrilla con puré de papas',
		price: 190,
		image: '',
		category: 'principales',
	},{
		id: 12,
		name: 'Salmón a la plancha con vegetales al vapor',
		price: 190,
		image: '',
		category: 'principales',
	},{
		id: 13,
		name: 'Paella mixta de mariscos y pollo',
		price: 190,
		image: '',
		category: 'principales',
	},{
		id: 14,
		name: 'Lasagna de carne',
		price: 190,
		image: '',
		category: 'pastas-arroces',
	},{
		id: 15,
		name: 'Risotto de hongos',
		price: 190,
		image: '',
		category: 'pastas-arroces',
	},{
		id: 16,
		name: 'Fettuccine Alfredo con camarones',
		price: 190,
		image: '',
		category: 'pastas-arroces',
	},{
		id: 17,
		name: 'Tiramisú clásico',
		price: 190,
		image: '',
		category: 'postres',
	},{
		id: 18,
		name: 'Flan de caramelo',
		price: 190,
		image: '',
		category: 'postres',
	},{
		id: 19,
		name: 'Flan de caramelo',
		price: 190,
		image: '',
		category: 'postres',
	},{
		id: 20,
		name: 'Sangría de vino tinto',
		price: 190,
		image: '',
		category: 'bebidas',
	},{
		id:  21,
		name: 'Mojito de menta y limón',
		price: 190,
		image: '',
		category: 'bebidas',
	},{
		id: 22,
		name: 'Limonada casera',
		price: 190,
		image: '',
		category: 'bebidas',
	},{
		id: 23,
		name: 'Té helado con miel y limón',
		price: 190,
		image: '',
		category: 'bebidas',
	}
]



document.addEventListener('DOMContentLoaded', ()=>{
	
	showMenu(menu)
	getCategorys()
	selectCategory()
	animation()
})

let currentItem = 0;

const navbarMenu = document.querySelector('.menu-nav');
const containerMenu = document.querySelector('.menu')
const containerMenuNav = document.querySelector('.navbar-menu')


const showMenu = (category)=>{

	const myMenu = category.map((food)=>{
		return `<article class="card-menu" data-category=${food.category}>
					<div class="img-menu">
						<img src=${food.image !== '' ? food.image : '../img/img-404/robot_404.jpg' } alt="">
					</div>
					<div class="txt">
						<h3 class="food-title">${food.name}</h3>
						<div class="food-description">
							<div class="star">
								<span>
								<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></span>
								<span>
								<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg></span>
								<span>
									<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-star"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" /></svg>
								</span>
							</div>
							<div class="precio">
								${food.price}
							</div>
						</div>
					</div>
					
				</article>`
	}).join('')



	containerMenu.innerHTML = myMenu;
}	

const getCategorys = ()=>{
	
	const categorys = menu.reduce((value, cat)=>{
		
		if(!value.includes(cat.category)){
			value.push(cat.category)
		}	

		return value

	},['Todos'])




	const showCategory = categorys.map((option)=>{
		return `<li><a href="#" class="item-menu" data-category=${option}>${option}</a></li>`
	}).join('');

	navbarMenu.innerHTML = showCategory;

}


const animation = ()=>{
	const articles = document.querySelectorAll('article');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.5
    });

    articles.forEach(card => {
        observer.observe(card);
    });
}


function selectCategory(){
	const filterBtn = document.querySelectorAll('.item-menu');
	filterBtn[0].classList.add('active')

	filterBtn.forEach((btn)=>{
		btn.addEventListener('click', (e)=>{
			e.preventDefault()

			const cate = e.target.dataset.category;


			const select= menu.filter((element)=>{
				if(element.category === cate){
					return element;
				}
			})


			if(cate === 'Todos'){
				showMenu(menu)
			}else{
				showMenu(select)
			}

		})
	})

	const widthLi = filterBtn[0].offsetWidth;
	 containerMenuNav.addEventListener('click', (e) => {
	    e.preventDefault();
	    const btn = e.target;
	    if (btn.classList.contains('fa-arrow-right')) {
	    	
	      moveSlider(1, filterBtn,widthLi);
	    } else if (btn.classList.contains('fa-arrow-left')) {
	      moveSlider(-1, filterBtn,widthLi);
	    }
 	 });


}


 function moveSlider(direction, li, tamaño) {
  	

    currentItem += direction;

    if (currentItem >= li.length) {

      currentItem = li.length - 1;
    } else if (currentItem < 0) {

      currentItem = 0;
    }
    navbarMenu.style.transform = `translateX(${-currentItem * tamaño}px)`;
  }


 

 