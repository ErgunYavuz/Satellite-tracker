<script setup>
import { computed } from 'vue'
import { SearchBar, SatelliteInfo, Toast } from './components'
import { useSatelliteStore } from './stores/satelliteStore'

const store = useSatelliteStore()

const satellites = computed(() => store.names)
const info = computed(() => store.selectedInfo || {
	name: 'Satellite Name',
	inclination: '0',
	period: '0',
	altitude: '0',
	velocity: '0',
	latitude: '0',
	longitude: '0'
})
const infoVisible = computed(() => !!store.selectedInfo)
const toast = computed(() => store.toast)

function search(term) {
	store.requestSearch(term)
}
</script>

<template>
	<SearchBar 
		:satellites="satellites" 
		@search="search" 
	/>
	
	<SatelliteInfo 
		:info="info" 
		:visible="infoVisible" 
	/>
	
	<Toast :show="toast.show" :type="toast.type" :message="toast.message" />
</template>


