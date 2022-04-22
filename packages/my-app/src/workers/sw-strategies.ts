/* --- Strategies --- */

//=> network ? save : cache
async function networkFirst(cacheName: string, fetchEvent: FetchEvent) {
	const request = fetchEvent.request;
	let fetchResponse: Response;

	return fetch(request)
		.then((response) => toCache(cacheName, request, (fetchResponse = response)))
		.then((response) => (response ? Promise.resolve(response) : fromCache(cacheName, request)))
		.then((response) => response || fetchResponse);
}

//=> cache ? cache : (network ? save)
async function cacheFirst(cacheName: string, fetchEvent: FetchEvent): Promise<Response> {
	return fromCache(cacheName, fetchEvent.request).then(
		(response) => response || networkFirst(cacheName, fetchEvent),
	);
}

//=> cache ? cache : network => network ? save
async function staleWhileRevalidate(cacheName: string, fetchEvent: FetchEvent): Promise<Response> {
	return fromCache(cacheName, fetchEvent.request).then((response) =>
		response
			? Promise.race([Promise.resolve(response), networkFirst(cacheName, fetchEvent)])
			: networkFirst(cacheName, fetchEvent),
	);
}

//=> network
async function networkOnly(fetchEvent: FetchEvent): Promise<Response> {
	return fetch(fetchEvent.request);
}

//=> cache
async function cacheOnly(cacheName: string, fetchEvent: FetchEvent): Promise<Response | undefined> {
	return fromCache(cacheName, fetchEvent.request);
}

/* --- Helpers --- */

async function toCache(
	cacheName: string,
	request: Request,
	response: Response,
): Promise<Response | undefined> {
	return response.ok
		? caches
				.open(cacheName)
				.then((cache) => cache.put(request, response.clone()))
				.then(() => response)
		: Promise.resolve(undefined);
}

async function fromCache(cacheName: string, request: Request): Promise<Response | undefined> {
	return caches.match(request, { cacheName });
}

export { networkFirst, cacheFirst, staleWhileRevalidate, networkOnly, cacheOnly };
