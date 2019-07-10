export class UsernameValidators {
    static cannotContainSpace(control) {
        if (control.value.indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == "ramesh")
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}
//# sourceMappingURL=username.validators.js.map