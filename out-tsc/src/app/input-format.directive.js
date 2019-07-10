import * as tslib_1 from "tslib";
import { Directive, HostListener, ElementRef, Input } from '@angular/core';
let InputFormatDirective = class InputFormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        let value = this.el.nativeElement.value;
        if (this.format == 'lowercase')
            this.el.nativeElement.value = value.toLowerCase();
        else
            this.el.nativeElement.value = value.toUpperCase();
    }
};
tslib_1.__decorate([
    Input('appInputFormat'),
    tslib_1.__metadata("design:type", String)
], InputFormatDirective.prototype, "format", void 0);
tslib_1.__decorate([
    HostListener('blur'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], InputFormatDirective.prototype, "onBlur", null);
InputFormatDirective = tslib_1.__decorate([
    Directive({
        selector: '[appInputFormat]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef])
], InputFormatDirective);
export { InputFormatDirective };
//# sourceMappingURL=input-format.directive.js.map