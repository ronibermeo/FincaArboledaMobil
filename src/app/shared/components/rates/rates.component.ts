import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-rates',
    template: `
    <div class="rates">
        <ion-button
        class="rate"
        fill="clear"
        color="warning"
        *ngFor="let i of [1, 2, 3, 4, 5]"
        (click)="onTap(i)"
        >
        <ion-icon
            *ngIf=" rating >= i; else elseTemplateOutline"
            slot="icon-only"
            name="star"
        ></ion-icon>

        <ng-template #elseTemplateOutline>
            <ion-icon #outline slot="icon-only" name="star-outline"></ion-icon
        ></ng-template>
        </ion-button>
    </div>
    `,
    styleUrls: ['./rates.component.scss'],
})
export class RatesComponent {
    @Input() rating!: number;
    @Output() onTapRate = new EventEmitter<{ rate: number }>()

    public onTap(rate: number) {        
        this.onTapRate.emit({ rate })
    }
}