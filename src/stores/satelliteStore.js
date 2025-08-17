import { defineStore } from 'pinia'

export const useSatelliteStore = defineStore('satellite', {
    state: () => ({
        names: [],
        selectedInfo: null,
        toast: { show: false, type: 'info', message: '' },
        searchTerm: '',
        searchNonce: 0,
    }),
    getters: {
        isSelected: (state) => !!state.selectedInfo,
    },
    actions: {
        setNames(list) { this.names = Array.isArray(list) ? list : [] },
        setSelected(info) { this.selectedInfo = info || null },
        clearSelected() { this.selectedInfo = null },
        updateSelected(partial) { if (this.selectedInfo) this.selectedInfo = { ...this.selectedInfo, ...partial } },
		showToast(payload = {}, { duration = 2500 } = {}) {
			// clear any previous timer
			if (this._toastTimer) {
				clearTimeout(this._toastTimer)
				this._toastTimer = null
			}

			this.toast = {
				show: true,
				type: payload.type || 'info',
				message: payload.message || ''
				}

			this._toastTimer = setTimeout(() => {
				this.toast.show = false
				this._toastTimer = null
				}, duration)
		},

        requestSearch(term) { this.searchTerm = term || ''; this.searchNonce++ },
    }
})