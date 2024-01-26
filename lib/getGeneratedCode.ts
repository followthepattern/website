export function getGeneratedCode(): string {
    return localStorage.getItem("fp-code") || "";
}