const iroh = require('iroh');

console.log("✅ Iroh has been successfully imported!");

// Check if Iroh provides any useful functions
console.log("Available functions:", Object.keys(iroh));

// Try using Iroh (based on possible AST analysis capabilities)
try {
    let code = "function test() { return 42; }";
    let instrumented = iroh.stage(code);
    console.log("Instrumented Code:", instrumented);
} catch (error) {
    console.error("❌ Iroh execution failed:", error);
}

console.log("✅ Iroh Test Completed.");
