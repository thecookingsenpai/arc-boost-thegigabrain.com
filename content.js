// Utilities
async function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

// Core method
function removeExtensionBanners() {
	// Scanning for banners
	let elements = document.getElementsByClassName("ExtPushBannerContainer")
	if (elements.length > 0) {
		console.log("Found extension banners. Cleaning up...")
	} else return
	// Iterating through banners and removing them
	for (let i=0; i < elements.length; i++) {
		try {
			elements[i].remove()
			console.log("Removed banner #" + (i+1))
		} catch (e) {
			console.log(e)
		}
	}
	console.log("Done.")
}

// Entry point
async function main() {
	// eslint-disable-next-line no-constant-condition
	while (true) { // Not the most elegant way but is virtually harmless
		await sleep(1000) // Let's not overload the resource usage with this while loop
		removeExtensionBanners()
	}
}

// Let's-a-go!
main()
