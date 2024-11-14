const CACHE_NAME = 'satellite-data-cache';
const SATELLITE_DATA_URL = 'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle';
const DEBRIS_DATA_URL = 'https://celestrak.org/NORAD/elements/gp.php?NAME=DEB&FORMAT=tle';

const UPDATEFRQ = 8 //in hours

const utils = {
    async cacheData(key, data, maxAgeHours = 24) {
        const cache = await caches.open(CACHE_NAME);
        const headers = {
            'timestamp': Date.now().toString(),
            'max-age': (maxAgeHours * 3600).toString()
        };
        const response = new Response(JSON.stringify(data), { headers });
        await cache.put(key, response);
    },

    async getCachedData(key) {
        const cache = await caches.open(CACHE_NAME);
        const response = await cache.match(key);
        
        if (!response) return null;

        const timestamp = parseInt(response.headers.get('timestamp'));
        const maxAge = parseInt(response.headers.get('max-age'));
        
        if (Date.now() - timestamp > maxAge * 1000) {
            await cache.delete(key);
            return null;
        }

        return JSON.parse(await response.text());
    },

    async fetchTLEData() {
        try {
            const cachedData = await utils.getCachedData('active-satellites');
            if (cachedData) return cachedData;

            const response = await fetch(SATELLITE_DATA_URL);
            const text = await response.text();
            const data = text.trim().split('\n');
            
            await utils.cacheData('active-satellites', data, UPDATEFRQ);
            return data;
        } catch (error) {
            console.error('Error fetching TLE data:', error);
            throw error;
        }
    },

    async fetchDebrisData() {
        try {
            const cachedData = await utils.getCachedData('debris-data');
            if (cachedData) return cachedData;

            const response = await fetch("DEBRIS_DATA_URL");
            const text = await response.text();
            const data = text.trim().split('\n');
            
            await utils.cacheData('debris-data', data, UPDATEFRQ);
            return data;
        } catch (error) {
            console.error('Error fetching debris data:', error);
            throw error;
        }
    }
};

export default utils;