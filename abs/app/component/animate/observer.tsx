export function intersectorHandler(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    for(let entry of entries) {
        if(entry.isIntersecting) {
            console.log('Element is entering:', entry.target);
            entry.target.animate(
                [{opacity: 0, transform: 'translateY(100px)'}, {opacity: 1, transform: 'translateY(0)'}],
                {duration: 3000, fill: 'none', easing: 'ease-in'}
            );
        } else {
            observer.unobserve(entry.target);
        }
    }
}

export default function AnimatePageOnScroll(targetId: string[]) {
    for(const page of targetId) {
        const element = document.getElementById(page);
        if(element) {
            const Observer = new IntersectionObserver(intersectorHandler);
            Observer.observe(element);
        } else {
            console.log('Element not found:', page);
        }
    }
}
