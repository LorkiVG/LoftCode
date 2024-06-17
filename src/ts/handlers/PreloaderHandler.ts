import { ref, reactive, Ref } from "vue";

export let isPreloaded : Ref<boolean> = ref(false);

export const totalResources : Ref<number> = ref(0);
export const loadedResources : Ref<number> = ref(0);
export const processedEntries = reactive(new Set<string>());

export const incrementTotalResources = () => 
{
    totalResources.value += 1;
};

export const incrementLoadedResources = () => 
{
    loadedResources.value += 1;
};

export const addProcessedEntry = (entryName: string) => 
{
    processedEntries.add(entryName);
};

export const isEntryProcessed = (entryName: string) =>
{
    return processedEntries.has(entryName);
};