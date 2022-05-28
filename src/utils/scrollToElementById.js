export const scrollToElementById = (id) => {
	const element = document.querySelector(`#${id}`)
	console.log(element)

	// smooth scroll to element and align it at the bottom
	element.scrollIntoView({ behavior: 'smooth', block: 'end' })
}
