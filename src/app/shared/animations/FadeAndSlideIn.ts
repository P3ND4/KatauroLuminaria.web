import {
    trigger,
    transition,
    style,
    animate
} from '@angular/animations';


export const FadeAndSlideIn = trigger('fadeAndSlideIn', [
    transition(':enter', [
        style({ opacity: 0, transform: 'translateY(1200px)' }),
        animate('1000ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ]),
])