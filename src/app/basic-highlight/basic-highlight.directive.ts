import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHightlightDirective implements OnInit{
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    constructor(private elementRef: ElementRef) {
        
    }
    
}