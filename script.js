// DOM Elements
const queueElement = document.getElementById('queue')
const orderElement = document.getElementById('order')
const burgerElement = document.getElementById('burger')
const addOnElement = document.getElementById('addOn')

// Variables
const data = []
let i = 1

// Event Listeners
orderElement.addEventListener('click', () => {
	addOrder()
})

// Functions

const addOrder = () => {
	data.push({
		id: i++,
		burger: burgerElement.value,
		addOn: addOnElement.value,
	})

	displayOrder()
	resetSelections()
}

const resetSelections = () => {
	burgerElement.value = 'Vegetarian'
	addOnElement.value = 'None'
}

const displayOrder = () => {
	const index = data.length - 1
	const id = data[index].id

	const order = `<div class="alert alert-info duration-150" id="order-${id}">
                    <span class="loading loading-spinner loading-md"></span>
                    <i class="fa-solid fa-check fa-lg mr-4" style="display: none ;"></i>
                    <span
                        >Order with ID: ${id} <br />
                        ${data[index].burger} <br />
                        with ${data[index].addOn} is being processed.</span
                    >
                </div>`

	if (index === 0) {
		queueElement.innerHTML = ''
	}

	queueElement.insertAdjacentHTML('beforeend', order)
	queueElement.lastElementChild.style.opacity = 0
	setTimeout(() => (queueElement.lastElementChild.style.opacity = 1), 150)
	setTimeout(assignCompletion(id), Math.random() * 2000 + 1000)
}

const assignCompletion = (id) => {
	let randomTime = Math.floor(Math.random() * 10 + 1) * 1000
	const element = document.getElementById(`order-${id}`)

	setTimeout(() => {
		element.children[0].style.display = 'none'
		element.children[1].style.display = 'inline-block'
		element.children[2].textContent = `Order with ID: ${id} has been completed.`

		element.classList.remove('alert-info')
		element.classList.add('alert-success')

		element.style.opacity = 0
		setTimeout(() => {
			element.style.opacity = 1
		}, 150)
	}, randomTime)
}