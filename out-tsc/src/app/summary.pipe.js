import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
let SummaryPipe = class SummaryPipe {
    transform(value, limit) {
        if (!value)
            return null;
        let actuallimit = (limit) ? limit : 50;
        return value.substr(0, actuallimit) + '....';
    }
};
SummaryPipe = tslib_1.__decorate([
    Pipe({
        name: 'summary'
    })
], SummaryPipe);
export { SummaryPipe };
//# sourceMappingURL=summary.pipe.js.map