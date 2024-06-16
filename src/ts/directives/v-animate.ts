export default 
{
    mounted(el: HTMLElement) 
    {
        el.classList.add('animated');
  
        const handleScroll = () => 
        {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight) 
            {
                el.classList.add('active');
            }
        };
  
        if(el.dataset.animateAlwaysshow !== undefined) 
        {
            setTimeout(() => 
            {
                el.classList.add('active');
            }, 500);
        }
  
        window.addEventListener('scroll', handleScroll);
        (el as any).__handleScroll__ = handleScroll;
    },
    unmounted(el: HTMLElement) 
    {
        window.removeEventListener('scroll', (el as any).__handleScroll__);
        delete (el as any).__handleScroll__;
    }
};
  