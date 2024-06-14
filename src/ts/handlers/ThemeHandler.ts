import { ref, Ref } from "vue";

export class ThemeHandler
{
    public static readonly currentTheme: Ref<string> = ref(localStorage.getItem('theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : null) || 'light');

    public static changeTheme(newTheme: string) 
    {
        ThemeHandler.currentTheme.value = newTheme;
        localStorage.setItem('theme', newTheme);
    }
}