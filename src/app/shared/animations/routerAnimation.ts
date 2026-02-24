import {
  trigger,
  transition,
  style,
  animate,
  query,
  group
} from '@angular/animations';
export const routeAnimations = trigger('routeAnimations', [

  // 👉 Vas a la derecha (baja)
  transition(':increment', [

    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
      })
    ], { optional: true }),

    query(':leave', [
      animate('500ms ease-in', style({
        transform: 'translateY(100%)',
        opacity: 0
      }))
    ], { optional: true })
  ]),

  // 👈 Vas a la izquierda (sube)
  transition(':decrement', [

    query(':enter, :leave', [
      style({
        position: 'absolute',
        width: '100%',
        left: 0,
        top: 0
      })
    ], { optional: true }),

    query(':enter', [
      style({
        transform: 'translateY(100%)',
        opacity: 0
      }),
      animate('500ms ease-out', style({
        transform: 'translateY(0)',
        opacity: 1
      }))
    ], { optional: true })
  ])
]);
