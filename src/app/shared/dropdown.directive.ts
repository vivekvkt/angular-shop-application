import {Directive, HostBinding, HostListener} from '@angular/core'

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirecitve{
   @HostBinding('class.show') isopen = false;
   @HostListener('click') toggleOpen(){
        this.isopen = !this.isopen
    }

}