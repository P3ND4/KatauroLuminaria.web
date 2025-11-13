import {
    trigger,
    transition,
    style,
    animate,
    state
} from '@angular/animations';


export const DropdownAnimation =
    trigger('dropdownAnimation', [
        state('closed', style({
            height: '20px',
            display: 'none'
        })),
        state('open', style({
          
            height: '300px',
            display: 'flex'
        })),
        transition('closed => open', [
            style({ display: 'flex' }),
            animate('500ms ease-out')
        ]),
        transition('open => closed', [
            animate('500ms ease-in', style({ height: '20px' }))
        ])
    ])

export const DropdownAnimationAH =
    trigger('dropdownAnimationAh', [
        state('closed', style({
            height: '0px',
            display: 'none'
        })),
        state('open', style({
          
            height: 'auto',
            display: 'flex'
        })),
        transition('closed => open', [
            style({ display: 'flex' , height: '500px'}),
            animate('500ms ease-out')
        ]),
        transition('open => closed', [
            animate('500ms ease-in', style({ height: '0px' }))
        ])
    ])