import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { DropdownDirecitve } from './dropdown.directive';
@NgModule({
    declarations:[
        DropdownDirecitve
    ],
    exports:[
     CommonModule,
        DropdownDirecitve
    ]
})
export class SharedModule{}