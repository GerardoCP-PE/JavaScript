const puppeteer = require("puppeteer");
const PATHS = {
	win32: {
		executablePath:
			"C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
		userDataDir: "C:\\Users\\gcaso\\AppData\\Local\\Temp\\puppeteer_user_data",
	},
	linux: {
		executablePath:
			"/mnt/c/Program Files (x86)/Google/Chrome/Application/chrome.exe",
		userDataDir: "/mnt/c/Users/gcaso/AppData/Local/Temp/puppeteer_user_data",
	},
};

(async () => {
	console.log("Lanzamos navegador!");

	const browser = await puppeteer.launch({
		headless: false,
		executablePath: PATHS[process.platform].executablePath,
		userDataDir: PATHS.win32.userDataDir,
		defaultViewport: null,
	});

	const page = await browser.newPage();
	await page.goto("https://es.wikipedia.org/wiki/Node.js");

	console.log("Cerramos Navegador...");
	// browser.close();
	console.log("Navegador cerrado");
})();