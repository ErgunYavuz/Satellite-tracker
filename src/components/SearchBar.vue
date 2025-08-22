<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
    satellites: {
        type: Array,
        default: () => [],
    },
})

const emit = defineEmits(['search'])

const query = ref('')
const suggestions = ref([])

const filteredSuggestions = computed(() => {
    const term = query.value.trim().toLowerCase()
    if (!term) return []

    return props.satellites
        .filter((name) => name.toLowerCase().includes(term))
        .slice(0, 1000)
})

function onInput() {
    suggestions.value = filteredSuggestions.value
}

function search() {
    if (!query.value.trim()) return
    emit('search', query.value.trim())
    suggestions.value = []
}

function chooseSuggestion(name) {
    query.value = name
    suggestions.value = []
    emit('search', name)
}

function hideSuggestions(e) {
    if (!e || !e.target) return
    const bar = document.querySelector('.search-bar')
    if (bar && !bar.contains(e.target)) {
        suggestions.value = []
    }
}

let hideSuggestionsHandler = null

onMounted(() => {
    hideSuggestionsHandler = (e) => hideSuggestions(e)
    document.addEventListener('click', hideSuggestionsHandler)
})

onBeforeUnmount(() => {
    if (hideSuggestionsHandler) {
        document.removeEventListener('click', hideSuggestionsHandler)
    }
})
</script>

<template>
    <div class="search-container">
        <div class="search-bar">
            <i data-lucide="search"></i>
            <input
                type="text"
                placeholder="Search satellites..."
                v-model="query"
                @keyup.enter="search"
                @input="onInput"
            />
            <button @click="search">Search</button>
            <div
                class="suggestions-container"
                :class="{ visible: suggestions.length > 0 }"
            >
                <div
                    class="suggestion-item"
                    v-for="name in suggestions"
                    :key="name"
                    @click="chooseSuggestion(name)"
                >
                    {{ name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.search-container {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1000;
    pointer-events: auto;
}

.search-bar {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

[data-lucide='search'] {
    stroke: rgba(255, 255, 255, 0.7);
    margin-left: 8px;
}

.search-bar input {
    background: transparent;
    border: none;
    outline: none;
    color: white;
    padding: 8px 16px;
    width: 256px;
    font-size: 14px;
}

.search-bar input::placeholder {
    color: rgba(255, 255, 255, 0.5);
}

.search-bar button {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.search-bar button:hover {
    background: rgba(255, 255, 255, 0.3);
}

.suggestions-container {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    max-height: 200px;
    overflow-y: auto;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    margin-top: 8px;
    display: none;
}

.suggestions-container.visible {
    display: block;
}

.suggestion-item {
    padding: 8px 16px;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s;
}

.suggestion-item:hover {
    background: rgba(255, 255, 255, 0.1);
}

.suggestions-container::-webkit-scrollbar {
    width: 8px;
}

.suggestions-container::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
}

.suggestions-container::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 4px;
}

.suggestions-container::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
}
</style>
