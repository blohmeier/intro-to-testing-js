// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed with no vars', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
// Unit tests for the sayHello function
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed with string Jane', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed with string Alex', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed with string Pat', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed with boolean true', function() {
       expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed with boolean false', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
});
// Unit tests for the isFive function
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return boolean true when executed with the input of number 5', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return boolean true when executed with the input of number 5 in quotes', function() {
        expect(isFive("5")).toBe(true);
    });
});
// Unit tests for the isEven function
describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return the boolean true when executed with positive even number', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return the boolean true when executed with negative even number', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return the boolean false when executed with positive odd number', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return the boolean false when executed with string', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return the boolean true when executed with number in quotes', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return the boolean false when executed with infinity', function() {
        expect(isEven("infinity")).toBe(false);
    });
    it('should return the boolean false when executed with boolean true', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return the boolean false when executed with boolean false', function() {
        expect(isEven(false)).toBe(false);
    });
});
// // Unit tests for the isVowel function
describe('isVowel', function() {
    it('should be a defined function', function() {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean no matter the input', function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return the boolean true when executed with lowercase vowel', function() {
        expect(isVowel("a")).toBe(true);
    });
    it('should return the boolean true when executed with uppercase vowel', function() {
        expect(isVowel("A")).toBe(true);
    });
    it('should return the boolean false when executed with lowercase consonant', function() {
        expect(isVowel("y")).toBe(false);
    });
    it('should return the boolean false when executed with number', function() {
        expect(isVowel(4)).toBe(false);
    });
    it('should return the boolean false when executed with boolean true', function() {
        expect(isVowel(true)).toBe(false);
    });
    it('should return the boolean false when executed with boolean false', function() {
        expect(isVowel(false)).toBe(false);
    });
    it('should return the boolean false when executed with string', function() {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return the boolean false when executed without var values', function() {
        expect(isVowel()).toBe(false);
    });
});
// Unit tests for the add function
describe('add', function() {
    it('should be a defined function', function() {
        expect(typeof add).toBe('function');
    });
    it('should return arithmetic result when executed with two pos nums', function() {
        expect(add(2, 3)).toBe(5);
    });
    it('should return arithmetic result when executed with two neg nums', function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return arithmetic result when executed with string number and number', function() {
        expect(add("5", 6)).toBe(11);
    });
    it('should return arithmetic result when executed with neg num and pos num', function() {
        expect(add("-4", 10)).toBe(6);
    });
    it('should return "NaN" when executed with two strings', function() {
        expect(add("banana", "split")).toBe("NaN");
    });
    it('should return "NaN" when executed with number and string', function() {
        expect(add(2, "apples")).toBe("NaN");
    });
    it('should return "NaN" when executed without variables', function() {
        expect(add()).toBe("NaN");
    });
});