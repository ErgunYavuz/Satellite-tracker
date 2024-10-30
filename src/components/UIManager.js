export class UIManager {
    constructor(onSearch, onSatelliteSelect, satellites) {
        this.onSearch = onSearch;
        this.onSatelliteSelect = onSatelliteSelect;
        this.satellites = satellites;
        
        // Initialize UI elements
        this.searchInput = document.getElementById('satellite-search');
        this.searchButton = document.getElementById('search-button');
        this.infoPanel = document.getElementById('satellite-info');
        this.expandButton = document.getElementById('expand-button');
        
        // Create suggestions container
        this.suggestionsContainer = document.createElement('div');
        this.suggestionsContainer.className = 'suggestions-container';
        this.searchInput.parentElement.appendChild(this.suggestionsContainer);
        
        // Initialize dynamic elements
        this.nameElement = document.getElementById('satellite-name');
        this.inclinationElement = document.getElementById('satellite-inclination');
        this.latitudeElement = document.getElementById('satellite-latitude');
        this.longitudeElement = document.getElementById('satellite-longitude');
        this.altitudeElement = document.getElementById('satellite-altitude');
        this.velocityElement = document.getElementById('satellite-velocity');
        this.periodElement = document.getElementById('satellite-period');

        this.setupEventListeners();
    }

    setupEventListeners() {
        // Search functionality
        this.searchButton.addEventListener('click', () => {
            this.onSearch(this.searchInput.value);
            this.hideSuggestions();
        });

        this.searchInput.addEventListener('keyup', (event) => {
            if (event.key === 'Enter') {
                this.onSearch(this.searchInput.value);
                this.hideSuggestions();
            } else {
                this.updateSuggestions(this.searchInput.value);
            }
        });

        // Hide suggestions when clicking outside
        document.addEventListener('click', (event) => {
            if (!event.target.closest('.search-bar')) {
                this.hideSuggestions();
            }
        });

        // Focus input event
        this.searchInput.addEventListener('focus', () => {
            if (this.searchInput.value) {
                this.updateSuggestions(this.searchInput.value);
            }
        });
    }

    updateSuggestions(searchTerm) {
        if (!searchTerm) {
            this.hideSuggestions();
            return;
        }

        const matches = this.satellites
            .filter(sat => sat.name.toLowerCase().includes(searchTerm.toLowerCase()))
            .slice(0, 5);

        if (matches.length === 0) {
            this.hideSuggestions();
            return;
        }

        this.suggestionsContainer.innerHTML = '';
        matches.forEach(satellite => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = satellite.name;
            suggestionItem.addEventListener('click', () => {
                this.searchInput.value = satellite.name;
                this.onSatelliteSelect(satellite);
                this.hideSuggestions();
            });
            this.suggestionsContainer.appendChild(suggestionItem);
        });

        this.suggestionsContainer.classList.add('visible');
    }

    hideSuggestions() {
        this.suggestionsContainer.classList.remove('visible');
    }

    initSatelliteInfo(satellite) {
        if (!satellite) {
            this.infoPanel.classList.remove('visible');
            return;
        }

        const info = satellite.getSatelliteInfo();
        this.nameElement.textContent = info.name;
        this.updateDynamicInfo(satellite);
        
        this.infoPanel.classList.add('visible');
    }

    updateDynamicInfo(satellite) {
        if (!satellite) return;

        const info = satellite.getSatelliteInfo();
        
        this.inclinationElement.textContent = info.inclination;
        this.latitudeElement.textContent = info.latitude;
        this.longitudeElement.textContent = info.longitude;
        this.altitudeElement.textContent = info.altitude;
        this.velocityElement.textContent = info.velocity;
        this.periodElement.textContent = info.period;
    }

    showError(message) {
        const toast = document.createElement('div');
        toast.className = 'error-toast';
        toast.textContent = message;
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.remove();
        }, 3000);
    }
}