import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { PickupCallCardComponent } from "./pickup-call-card/pickup-call-card.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    declarations: [
        PickupCallCardComponent
    ],
    exports: [PickupCallCardComponent]
})
export class ComponentsModule{}