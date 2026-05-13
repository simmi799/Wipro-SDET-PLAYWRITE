// 5. Template Literal Types for CSS Scenario: You are building a UI library and want to strictly enforce unit types for a "spacing" prop. Task: Create a type MarginValue that only allows strings ending in "px", "rem", or "vh" (e.g., "10px", "2rem"). Use Template Literal Types to ensure a number must precede the unit.
// Template Literal Type


type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;


// Function using the type
function applyMargin(margin: MarginValue): void {
    console.log(`Applied margin: ${margin}`);
}


// Valid values 
applyMargin("10px");
applyMargin("2rem");
applyMargin("50vh");


// Invalid values 
// applyMargin("20");
// applyMargin("abcpx");
// applyMargin("15em");
// applyMargin("px");