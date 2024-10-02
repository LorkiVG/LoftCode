class Animation
{
    el: HTMLElement;
    name: string;
    startType: string;
    endType: string;
    delayBeforeStart: number;
    delayBeforeEnd: number;

    public animate() : void
    {
        if(this.el.dataset.animateTimeout !== undefined) 
        {
            const delay : number = Number(this.el.dataset.animateTimeout);
            if(delay > 0)
            {
                setTimeout(() => 
                {
                    this.el.classList.add('active');
                }, delay);
            }
            else
            {
                this.el.classList.add('active');
            }
        }
        else
        {
            this.el.classList.add('active');
        }
    }

    public start() : void
    {
        
    }

    public constructor(el: HTMLElement, name = el.dataset.animationType, startType = el.dataset.animationType, endType = el.dataset.animationType, delayBeforeStart = el.dataset.animationDelayBeforeStart, delayBeforeEnd = el.dataset.animationDelayBeforeEnd) 
    {
        this.el = el;
        if (name !== undefined)
        {
            this.name = name;
        }
        else
        {
            this.name = 'opacity';
        }
        if(startType !== undefined)
        {
            this.startType = startType;
        }
        else
        {
            this.startType = 'onStart';
        }

        if(endType !== undefined)
        {
            this.endType = endType;
        }
        else
        {
            this.endType = 'onStart';
        }

        if(delayBeforeStart !== undefined)
        {
            this.delayBeforeStart = Number(delayBeforeStart);
        }
        else
        {
            if(this.startType = 'onStart')
            {
                this.delayBeforeStart = 500;
            }
            else
            {
                this.delayBeforeStart = 0;
            }
        }

        if(delayBeforeEnd !== undefined)
        {
            this.delayBeforeEnd = Number(delayBeforeEnd);
        }
        else
        {
            if(this.startType = 'onStart')
            {
                this.delayBeforeEnd = 500;
            }
            else
            {
                this.delayBeforeEnd = 0;
            }
        }

        if(this.startType == "onStart") 
        {
            this.animate();
        }
        if(this.startType == "afterPageLoaded") 
        {
            this.animate();
        }
        else if(this.startType == "onScrolledToElement")
        {
            const handleScroll = () => 
            {
                const rect = this.el.getBoundingClientRect();
                if(rect.top < window.innerHeight) 
                {
                    this.animate();
                }
            };
            window.addEventListener('scroll', handleScroll);
            (this.el as any).__handleScroll__ = handleScroll;
        }
        else
        {
            this.animate();
        }
    }
}
let animations: { [id: string]: Animation; } = {}; 

export default 
{
    mounted(el: HTMLElement) 
    {
        el.classList.add('animated');

        const animation : Animation = new Animation(el);
        animations[] = animation;
    },
    unmounted(el: HTMLElement) 
    {
        if(el.dataset.animateType !== undefined) 
        {
            if(el.dataset.animateType == "onScroll") 
            {
                window.removeEventListener('scroll', (el as any).__handleScroll__);
                delete (el as any).__handleScroll__;
            }
        }
        
    }
};
  