
const SATELLITE_DATA_URL = 'https://celestrak.org/NORAD/elements/gp.php?GROUP=active&FORMAT=tle';

const utils = {

    isDataStale(key, maxAgeHours = 24) {
        const item = this.getWithTimestamp(key); 
        if (!item) return true;
       
        const ageInHours = (Date.now() - item.timestamp) / (1000 * 60 * 60);
        return ageInHours > maxAgeHours;
    },

    saveWithTimestamp(key, value) {
        const item = {
            data: value,
            timestamp: Date.now()
        };
        try {
            localStorage.setItem(key, JSON.stringify(item));
        } catch (e) {
            console.error("Failed to save in local storage:", e);
            throw e;
        }
    },

    getWithTimestamp(key) {
        try {
            const item = localStorage.getItem(key);
            if (!item) return null;
            
            const parsed = JSON.parse(item);
            return {
                data: parsed.data,
                timestamp: parsed.timestamp,
            };
        } catch (e) {
            console.error("Failed to get data from local storage:", e);
            return null;
        }
    },

    async fetchTLEData() {
        try {
            // First check localStorage
            const storedData = localStorage.getItem('satellite-data');
            if (storedData) {
                const parsed = JSON.parse(storedData);
                if (!utils.isDataStale('satellite-data', 2)) {
                    // If data exists and isn't stale, use it
                    return parsed.data.trim().split('\n');
                }
            }
    
            // If no stored data or it's stale, fetch from API
            const response = await fetch(SATELLITE_DATA_URL);
            const text = await response.text();
            
            // Save the new data
            utils.saveWithTimestamp('satellite-data', text);
            
            return text.trim().split('\n');
        } catch (error) {
            console.error('Error fetching TLE data:', error);
            throw error;
        }
    }
};

export default utils;