export default defineEventHandler(async (event) => {
  // ... Do whatever you want here
  return Math.random().toString(36).substr(2, 4);
})