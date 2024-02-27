const API = 'https://youtube-v311.p.rapidapi.com/activities/?part=snippet&channelId=UCKEaZFKeCBM7JxNv192Q1Pw&maxResults=3';
const content = null || document.getElementById('content')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b2b69196femsheee69769e2f6bc2p128043jsn84cfbf9e8113',
		'X-RapidAPI-Host': 'youtube-v311.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options)
    const data = await response.json()
    return data
}

(async () => {
    try{
        const videos = await fetchData(API)
        let view = `
        ${videos.items.map(video => `
        <div class="group relative">
            <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute insert-0"></span>
                    ${video.snippet.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join('')}
        `
    } catch{

    }
})();